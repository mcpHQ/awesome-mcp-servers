#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONCURRENCY = 10;
const TIMEOUT_MS = 15_000;
const USER_AGENT = "awesome-mcp-servers-link-checker/1.0";

/** @type {Map<string, Set<string>>} */
const links = new Map();

function isLocalhostUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === "localhost" || host === "127.0.0.1";
  } catch {
    return false;
  }
}

function addLink(url, source) {
  const normalized = url.trim().replace(/[`)>.,]+$/, "");
  if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
    return;
  }
  if (isLocalhostUrl(normalized)) {
    return;
  }
  if (!links.has(normalized)) {
    links.set(normalized, new Set());
  }
  links.get(normalized).add(source);
}

function collectFromServersJson() {
  const servers = JSON.parse(
    readFileSync(join(root, "data/servers.json"), "utf8")
  );
  for (const server of servers) {
    addLink(server.url, `servers.json (${server.name})`);
  }
}

function collectFromText(content, source) {
  for (const match of content.matchAll(/\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    addLink(match[2], source);
  }

  for (const match of content.matchAll(/<((?:https?):\/\/[^>]+)>/g)) {
    addLink(match[1], source);
  }

  for (const match of content.matchAll(
    /(?<![(\[])(https?:\/\/[^\s<>"')\]`]+)/g
  )) {
    addLink(match[1], source);
  }
}

function collectFromMarkdown(filePath) {
  const relPath = relative(root, filePath);
  collectFromText(readFileSync(filePath, "utf8"), relPath);
}

function collectFromDiff(range) {
  let diff;
  try {
    diff = execFileSync(
      "git",
      ["diff", "--unified=0", "--no-color", range, "--", "*.md", "data/*.json"],
      { cwd: root, encoding: "utf8" }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "git diff failed";
    console.error(`Unable to inspect changed links: ${message}`);
    process.exit(1);
  }

  const additions = diff
    .split("\n")
    .filter((line) => line.startsWith("+") && !line.startsWith("+++"))
    .map((line) => line.slice(1))
    .join("\n");
  collectFromText(additions, `git diff ${range}`);
}

function collectMarkdownFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry === ".git") {
        continue;
      }
      files.push(...collectMarkdownFiles(fullPath));
    } else if (entry.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function checkLink(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": USER_AGENT },
    });

    if ([403, 405, 501].includes(response.status)) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": USER_AGENT },
      });
    }

    // Authentication and method restrictions still prove the target exists.
    if ([401, 403, 405].includes(response.status)) {
      return { ok: true };
    }

    if (response.status >= 400) {
      return { ok: false, reason: `${response.status} ${response.statusText}` };
    }

    return { ok: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "request failed";
    return { ok: false, reason: message };
  } finally {
    clearTimeout(timeout);
  }
}

async function mapWithConcurrency(items, limit, fn) {
  /** @type {Promise<void>[]} */
  const executing = new Set();
  /** @type {Awaited<ReturnType<typeof fn>>[]} */
  const results = [];

  for (const item of items) {
    const promise = Promise.resolve(fn(item)).then((result) => {
      executing.delete(promise);
      return result;
    });
    executing.add(promise);
    results.push(promise);

    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}

const changedArgument = process.argv.indexOf("--changed");
if (changedArgument !== -1) {
  const range = process.argv[changedArgument + 1];
  if (!range) {
    console.error("Usage: check-links.mjs --changed <git-range>");
    process.exit(1);
  }
  collectFromDiff(range);
} else {
  collectFromServersJson();
  for (const filePath of collectMarkdownFiles(root)) {
    collectFromMarkdown(filePath);
  }
}

const uniqueLinks = [...links.keys()].sort();
if (uniqueLinks.length === 0) {
  console.log("No external links to check.");
  process.exit(0);
}
console.error(`Checking ${uniqueLinks.length} unique links...\n`);

const results = await mapWithConcurrency(uniqueLinks, CONCURRENCY, async (url) => {
  const result = await checkLink(url);
  return { url, ...result };
});

const broken = results.filter((result) => !result.ok);

if (broken.length === 0) {
  console.log(`All ${uniqueLinks.length} links are reachable.`);
  process.exit(0);
}

console.log(`Broken links (${broken.length}):\n`);
for (const { url, reason } of broken) {
  const sources = [...links.get(url)].sort().join("; ");
  console.log(url);
  console.log(`  reason: ${reason}`);
  console.log(`  source: ${sources}\n`);
}

process.exit(1);
