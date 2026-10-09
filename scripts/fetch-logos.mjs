#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  SIMPLE_ICONS_CDN,
  extractGitHubOrg,
  logoSlugCandidates,
  monogramSvg,
  providerClearbitDomain,
  providerSharedLogo,
  serverSlug,
  SERVER_LOGO_URLS,
} from "./logo-utils.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logosDir = join(root, "site/logos");
const officialMcpLogoPath = join(logosDir, "mcp.svg");
const servers = JSON.parse(
  readFileSync(join(root, "data/servers.json"), "utf8")
);

mkdirSync(logosDir, { recursive: true });

async function ensureOfficialMcpLogo() {
  const response = await fetch("https://modelcontextprotocol.io/favicon.svg", {
    headers: { "User-Agent": "awesome-mcp-servers-logo-fetcher/1.0" },
  });
  if (!response.ok) {
    return;
  }
  const svg = await response.text();
  if (svg.includes("<svg")) {
    writeFileSync(officialMcpLogoPath, svg.endsWith("\n") ? svg : `${svg}\n`);
  }
}

const slugCache = new Map();
const fileCache = new Map();
const logoMap = {};

async function fetchBytes(url) {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "awesome-mcp-servers-logo-fetcher/1.0" },
      redirect: "follow",
    });
    if (!response.ok) {
      return null;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length === 0) {
      return null;
    }
    return buffer;
  } catch {
    return null;
  }
}

function rasterToSvg(buffer, mimeType, label) {
  const base64 = buffer.toString("base64");
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" role="img" aria-label="${label}">
  <defs><clipPath id="clip"><rect width="64" height="64" rx="12"/></clipPath></defs>
  <image width="64" height="64" preserveAspectRatio="xMidYMid meet" clip-path="url(#clip)" xlink:href="data:${mimeType};base64,${base64}"/>
</svg>`;
}

async function fetchSimpleIcon(slug) {
  if (slugCache.has(slug)) {
    return slugCache.get(slug);
  }

  const url = `${SIMPLE_ICONS_CDN}/${slug}`;
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "awesome-mcp-servers-logo-fetcher/1.0" },
    });
    if (!response.ok) {
      slugCache.set(slug, null);
      return null;
    }
    const svg = await response.text();
    if (!svg.includes("<svg")) {
      slugCache.set(slug, null);
      return null;
    }
    slugCache.set(slug, svg);
    return svg;
  } catch {
    slugCache.set(slug, null);
    return null;
  }
}

async function writeLogoFile(filename, contents) {
  if (fileCache.has(filename)) {
    return filename;
  }
  writeFileSync(join(logosDir, filename), contents);
  fileCache.set(filename, true);
  return filename;
}

async function trySimpleIconFilename(slug) {
  const svg = await fetchSimpleIcon(slug);
  if (!svg) {
    return null;
  }
  return writeLogoFile(`${slug}.svg`, svg);
}

async function tryGitHubOrgLogo(org, filenameBase) {
  const pngUrl = `https://github.com/${org}.png?size=128`;
  const buffer = await fetchBytes(pngUrl);
  if (!buffer) {
    return null;
  }
  const svg = rasterToSvg(buffer, "image/png", org);
  return writeLogoFile(`${filenameBase}.svg`, svg);
}

async function tryDomainLogo(domain, filenameBase) {
  const sources = [
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  ];

  for (const url of sources) {
    const buffer = await fetchBytes(url);
    if (!buffer) {
      continue;
    }
    const svg = rasterToSvg(buffer, "image/png", domain);
    return writeLogoFile(`${filenameBase}.svg`, svg);
  }

  return null;
}

async function tryServerLogoUrl(server) {
  const url = SERVER_LOGO_URLS[server.name];
  if (!url) {
    return null;
  }

  const buffer = await fetchBytes(url);
  if (!buffer) {
    return null;
  }

  const extension = url.split(".").pop()?.toLowerCase();
  if (extension === "svg") {
    const svg = buffer.toString("utf8");
    if (svg.includes("<svg")) {
      return writeLogoFile(`${serverSlug(server.name)}.svg`, svg);
    }
    return null;
  }

  const mimeType =
    extension === "jpg" || extension === "jpeg" ? "image/jpeg" : "image/png";
  const filenameBase = serverSlug(server.name);
  const svg = rasterToSvg(buffer, mimeType, server.name);
  return writeLogoFile(`${filenameBase}.svg`, svg);
}

async function resolveLogoFile(server) {
  const shared = providerSharedLogo(server.provider);
  if (shared) {
    return { filename: shared, type: "shared" };
  }

  const serverLogo = await tryServerLogoUrl(server);
  if (serverLogo) {
    return { filename: serverLogo, type: "brand" };
  }

  for (const slug of logoSlugCandidates(server)) {
    const filename = await trySimpleIconFilename(slug);
    if (filename) {
      return { filename, type: "brand" };
    }
  }

  const org = extractGitHubOrg(server.url);
  if (org) {
    const filename = await tryGitHubOrgLogo(org, `github-${org.toLowerCase()}`);
    if (filename) {
      return { filename, type: "github" };
    }
  }

  const clearbitDomain = providerClearbitDomain(server.provider, server.url);
  if (clearbitDomain) {
    const filename = await tryDomainLogo(
      clearbitDomain,
      `domain-${clearbitDomain.replace(/[^a-z0-9]+/g, "-")}`
    );
    if (filename) {
      return { filename, type: "domain" };
    }
  }

  const filename = `${serverSlug(server.name)}.svg`;
  await writeLogoFile(filename, monogramSvg(server.name));
  return { filename, type: "monogram" };
}

let brandCount = 0;
let sharedCount = 0;
let githubCount = 0;
let domainCount = 0;
let monogramCount = 0;

await ensureOfficialMcpLogo();

for (const server of servers) {
  const { filename, type } = await resolveLogoFile(server);
  logoMap[server.name] = filename;

  if (type === "brand") brandCount += 1;
  else if (type === "shared") sharedCount += 1;
  else if (type === "github") githubCount += 1;
  else if (type === "domain") domainCount += 1;
  else monogramCount += 1;
}

writeFileSync(
  join(root, "site/logo-map.json"),
  `${JSON.stringify(logoMap, null, 2)}\n`
);

const uniqueFiles = new Set(Object.values(logoMap));
console.log(
  `Fetched logos for ${servers.length} servers (${uniqueFiles.size} unique files: ${brandCount} simple-icons, ${sharedCount} shared, ${githubCount} github, ${domainCount} domain, ${monogramCount} monogram).`
);
