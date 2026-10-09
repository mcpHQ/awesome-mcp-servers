#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { serverSlug, hashColor } from "./logo-utils.mjs";
import {
  CLIENTS,
  configFor,
  cursorInstallLink,
  serverKey,
  transportOf,
  vscodeInstallLink,
} from "../site/static/connect.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(root, "site");
const staticDir = join(siteDir, "static");
const logosDir = join(siteDir, "logos");
const outDir = join(siteDir, "dist");

const siteUrl = (process.env.SITE_URL ?? "https://landscape.mcphq.org").replace(/\/$/, "");
const base = (process.env.SITE_BASE_PATH ?? "").replace(/\/$/, "");
const repoUrl = "https://github.com/mcpHQ/awesome-mcp-servers";
const submitUrl = `${repoUrl}/issues/new?template=add-server.yml`;
const siteName = "mcpHQ";
const buildDate = new Date().toISOString().slice(0, 10);

const categories = readJson("data/categories.json");
const servers = readJson("data/servers.json");
const logoMap = existsSync(join(siteDir, "logo-map.json"))
  ? readJson("site/logo-map.json")
  : {};

const LANGUAGE_COLORS = {
  C: "#555555",
  "C#": "#178600",
  "C++": "#f34b7d",
  Dart: "#00b4ab",
  Elixir: "#6e4a7e",
  GDScript: "#355570",
  Go: "#00add8",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  Kotlin: "#a97bff",
  Other: "#8b949e",
  PHP: "#4f5d95",
  Python: "#3572a5",
  Ruby: "#cc342d",
  Rust: "#dea584",
  Swift: "#f05138",
  TypeScript: "#3178c6",
  Zig: "#ec915c",
};

const ICONS = {
  search: '<circle cx="11" cy="11" r="7.5"/><path d="m20.5 20.5-4.2-4.2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  remote: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2a6 6 0 0 1 0-8.4"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  filter: '<path d="M3 5h18M6 12h12M10 19h4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  terminal: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
  pencil: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
};

const CATEGORY_ICONS = {
  "official-and-reference": ICONS.shield,
  "databases-and-storage":
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  "developer-tools-and-code-intelligence":
    '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  "browsers-search-and-web-automation":
    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>',
  "filesystems-and-documents":
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',
  "cloud-and-infrastructure":
    '<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9z"/>',
  "communication-and-productivity":
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  "ai-agents-and-memory":
    '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  "data-analytics-and-bi": '<path d="M12 20V10M18 20V4M6 20v-4"/>',
  "legal-and-court-data":
    '<path d="M12 3v18M5 21h14M3 7h18"/><path d="m6 7-3 7a3 3 0 0 0 6 0z"/><path d="m18 7-3 7a3 3 0 0 0 6 0z"/>',
  "security-and-identity":
    '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "finance-commerce-and-business-apps":
    '<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>',
  "utilities-and-examples":
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
};

const BRAND_MARK = `<img class="brand-mark" src="${href("/favicon.svg")}" alt="" width="22" height="22">`;

const GITHUB_ICON =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>';

// ---------------------------------------------------------------------------
// Data

const categoryById = new Map(categories.map((category) => [category.id, category]));
const usedSlugs = new Map();

const items = servers.map((server) => {
  const slug = serverSlug(server.name);
  if (usedSlugs.has(slug)) {
    fail(`Duplicate page slug "${slug}" for "${server.name}" and "${usedSlugs.get(slug)}".`);
  }
  usedSlugs.set(slug, server.name);

  const category = categoryById.get(server.category);
  if (!category) {
    fail(`Unknown category "${server.category}" for "${server.name}".`);
  }

  return {
    ...server,
    slug,
    categoryName: category.name,
    logo: realLogo(logoMap[server.name]),
    transport: transportOf(server.endpoints),
  };
});

items.sort(compareFeatured);

// fetch-logos writes a monogram SVG when it finds nothing; the site draws its own instead.
function realLogo(file) {
  if (!file || !existsSync(join(logosDir, file))) {
    return null;
  }
  const svg = readFileSync(join(logosDir, file), "utf8");
  return svg.includes("<text") && !svg.includes("<image") ? null : file;
}

const grouped = new Map(categories.map((category) => [category.id, []]));
for (const item of items) {
  grouped.get(item.category).push(item);
}
const activeCategories = categories.filter((category) => grouped.get(category.id).length > 0);

const languages = countBy(items, (item) => item.language);
const tagCounts = countBy(items.flatMap((item) => item.tags), (tag) => tag);
const stats = {
  servers: items.length,
  official: items.filter((item) => item.official).length,
  remote: items.filter((item) => item.transport).length,
  categories: activeCategories.length,
  languages: languages.length,
};

function compareFeatured(left, right) {
  const leftOrder = left.order ?? Number.POSITIVE_INFINITY;
  const rightOrder = right.order ?? Number.POSITIVE_INFINITY;
  if (leftOrder !== rightOrder) {
    return leftOrder - rightOrder;
  }
  return featuredWeight(right) - featuredWeight(left) || left.name.localeCompare(right.name);
}

// Simple Icons only covers recognizable brands; GitHub-avatar and favicon logos are fallbacks.
function featuredWeight(item) {
  const brandLogo = Boolean(item.logo) && !/^(github|domain)-/.test(item.logo);
  return (item.official ? 4 : 0) + (brandLogo ? 2 : 0) + (item.transport ? 1 : 0);
}

function countBy(list, keyOf) {
  const counts = new Map();
  for (const entry of list) {
    const key = keyOf(entry);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

// ---------------------------------------------------------------------------
// Helpers

function readJson(path) {
  return JSON.parse(readFileSync(join(root, path), "utf8"));
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function icon(name, extraClass = "") {
  const paths = ICONS[name] ?? CATEGORY_ICONS[name];
  return `<svg class="icon${extraClass ? ` ${extraClass}` : ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

function href(path) {
  return `${base}${path}`;
}

function serverPath(item) {
  return `/servers/${item.slug}/`;
}

function categoryPath(id) {
  return `/categories/${id}/`;
}

function initials(label) {
  const words = label
    .replace(/\bMCP\b|\bServer\b/gi, " ")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const source = words.length > 0 ? words : [label];
  const text =
    source.length >= 2 ? `${source[0][0]}${source[1][0]}` : source[0].slice(0, 2);
  return text.toUpperCase();
}

function hue(label) {
  return hashColor(label).match(/hsl\((\d+)/)[1];
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function plural(count, word) {
  return `${count} ${word}${count === 1 ? "" : "s"}`;
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function hashFile(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex").slice(0, 10);
}

// ---------------------------------------------------------------------------
// Components

function logo(item, size = "md") {
  if (item.logo) {
    return `<span class="logo logo-${size}"><img src="${href(`/logos/${item.logo}`)}" alt="" loading="lazy" decoding="async"></span>`;
  }
  return `<span class="logo logo-${size} logo-mono" style="--hue:${hue(item.name)}" aria-hidden="true">${esc(initials(item.name))}</span>`;
}

function langPill(language) {
  return `<span class="lang"><i style="--lang:${LANGUAGE_COLORS[language] ?? LANGUAGE_COLORS.Other}"></i>${esc(language)}</span>`;
}

function badges(item) {
  const parts = [];
  if (item.official) {
    parts.push(`<span class="badge badge-official" title="Backed by the vendor or the MCP project">${icon("shield")}Official</span>`);
  }
  if (item.transport) {
    parts.push(`<span class="badge badge-remote" title="Hosted endpoint, nothing to install">${icon("remote")}Remote</span>`);
  }
  return parts.join("");
}

function stackButton(item, variant = "icon") {
  if (variant === "full") {
    return `<button class="btn btn-ghost stack-toggle" type="button" data-stack-toggle="${item.slug}" aria-pressed="false">
      <span class="when-off">${icon("plus")}Add to stack</span><span class="when-on">${icon("check")}In your stack</span>
    </button>`;
  }
  return `<button class="stack-btn stack-toggle" type="button" data-stack-toggle="${item.slug}" aria-pressed="false" aria-label="Add ${esc(item.name)} to stack" title="Add to stack">
    <span class="when-off">${icon("plus")}</span><span class="when-on">${icon("check")}</span>
  </button>`;
}

function card(item) {
  return `<article class="card" data-slug="${item.slug}" data-name="${esc(item.name.toLowerCase())}" data-provider="${esc(item.provider.toLowerCase())}" data-tags="${esc(item.tags.join(" "))}" data-cat="${item.category}" data-lang="${esc(item.language)}" data-official="${item.official ? 1 : 0}" data-remote="${item.transport ? 1 : 0}">
  <div class="card-head">
    ${logo(item)}
    <div class="card-title">
      <h3><a class="card-link" href="${href(serverPath(item))}">${esc(item.name)}</a></h3>
      <p class="card-provider">${esc(item.provider)}</p>
    </div>
    ${stackButton(item)}
  </div>
  <p class="card-desc">${esc(item.description)}</p>
  <div class="card-meta">
    ${langPill(item.language)}
    ${badges(item)}
    <span class="card-cat">${esc(item.categoryName)}</span>
  </div>
</article>`;
}

function codeBlock(code, label, id) {
  return `<div class="code">
  <div class="code-bar"><span>${esc(label)}</span><button class="copy-btn" type="button" data-copy-target="${id}">${icon("copy", "when-off")}${icon("check", "when-on")}<span class="when-off">Copy</span><span class="when-on">Copied</span></button></div>
  <pre id="${id}"><code>${esc(code)}</code></pre>
</div>`;
}

// ---------------------------------------------------------------------------
// Layout

const assetVersion = {
  css: hashFile(join(staticDir, "styles.css")),
  js: [hashFile(join(staticDir, "app.js")), hashFile(join(staticDir, "connect.js")), hashFile(join(staticDir, "fluid.js"))].join(""),
};

function layout({ title, description, path, body, structured = [], active = "" }) {
  const fullTitle = path === "/" ? title : `${title} · ${siteName}`;
  const canonical = `${siteUrl}${path}`;
  const nav = [
    ["explore", "/", "Explore"],
    ["categories", "/categories/", "Categories"],
    ["stack", "/stack/", "Stack"],
    ["developers", "/developers/", "API & agents"],
  ]
    .map(
      ([id, path, label]) =>
        `<a href="${href(path)}"${active === id ? ' aria-current="page"' : ""}>${label}${
          id === "stack" ? ' <span class="nav-count" data-stack-count hidden>0</span>' : ""
        }</a>`
    )
    .join("");

  return `<!doctype html>
<html lang="en" data-base="${base}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#f5f7fb">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${siteName}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${siteUrl}/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${siteUrl}/og.png">
<link rel="icon" type="image/svg+xml" href="${href("/favicon.svg")}">
<link rel="icon" type="image/png" href="${href("/favicon.png")}">
<link rel="apple-touch-icon" href="${href("/logo.png")}">
<link rel="describedby" href="${siteUrl}/llms.txt">
<link rel="alternate" type="text/markdown" href="${siteUrl}/llms-full.txt" title="MCP server catalog">
<link rel="stylesheet" href="${href(`/styles.css?v=${assetVersion.css}`)}">
<script type="module" src="${href(`/app.js?v=${assetVersion.js}`)}"></script>
${structured.map(jsonLd).join("\n")}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${href("/")}">${BRAND_MARK}<span>mcp<b>HQ</b></span></a>
    <nav class="nav" aria-label="Main">${nav}</nav>
    <div class="header-actions">
      <button class="palette-trigger" type="button" data-open-palette>${icon("search")}<span>Jump to…</span><kbd data-mod-key>⌘K</kbd></button>
      <a class="icon-btn" href="${repoUrl}" aria-label="GitHub repository">${GITHUB_ICON}</a>
      <a class="btn btn-primary btn-sm" href="${submitUrl}">Submit</a>
    </div>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap footer-inner">
    <div class="footer-brand">
      <a class="brand" href="${href("/")}">${BRAND_MARK}<span>mcp<b>HQ</b></span></a>
      <p>A hand-reviewed, link-checked directory of Model Context Protocol servers. Built from <a href="${repoUrl}/blob/main/data/servers.json">open data</a> on GitHub.</p>
    </div>
    <div class="footer-cols">
      <div><h2>Directory</h2><a href="${href("/")}">Explore</a><a href="${href("/categories/")}">Categories</a><a href="${href("/stack/")}">Stack builder</a></div>
      <div><h2>Data</h2><a href="${href("/api/servers.json")}">servers.json</a><a href="${href("/llms.txt")}">llms.txt</a><a href="${href("/developers/")}">API & agents</a></div>
      <div><h2>Project</h2><a href="${submitUrl}">Submit a server</a><a href="${repoUrl}/blob/main/CONTRIBUTING.md">Contributing</a><a href="https://modelcontextprotocol.io">About MCP</a></div>
    </div>
  </div>
  <div class="wrap footer-legal">Catalog data is MIT licensed. Logos and trademarks belong to their owners.</div>
</footer>
<div class="palette" data-palette hidden>
  <div class="palette-backdrop" data-close-palette></div>
  <div class="palette-box" role="dialog" aria-modal="true" aria-label="Jump to a server or category">
    <div class="palette-input">${icon("search")}<input type="text" placeholder="Jump to a server, category, or page…" autocomplete="off" spellcheck="false" aria-controls="palette-list" data-palette-input><kbd>esc</kbd></div>
    <ul class="palette-list" id="palette-list" role="listbox" data-palette-list></ul>
    <div class="palette-foot"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>↵</kbd> open</span><span><kbd>⇧</kbd><kbd>↵</kbd> add to stack</span></div>
  </div>
</div>
<div class="toast" data-toast role="status" aria-live="polite"></div>
</body>
</html>
`;
}

// ---------------------------------------------------------------------------
// Pages

function homePage() {
  const topTags = tagCounts
    .filter(([tag]) => !["official", "remote", "reference", "mcp"].includes(tag))
    .slice(0, 10)
    .map(([tag]) => `<button type="button" class="chip" data-quick-query="${esc(tag)}">${esc(tag)}</button>`)
    .join("");

  const categoryFacet = activeCategories
    .map(
      (category) => `<li><button type="button" class="facet-row" data-facet="cat" data-value="${category.id}" aria-pressed="false">
        ${icon(category.id)}<span class="facet-label">${esc(category.name)}</span><span class="count" data-count-for="cat:${category.id}">${grouped.get(category.id).length}</span>
      </button></li>`
    )
    .join("");

  const languageFacet = languages
    .map(
      ([language, count]) => `<button type="button" class="chip chip-lang" data-facet="lang" data-value="${esc(language)}" aria-pressed="false"><i style="--lang:${LANGUAGE_COLORS[language] ?? LANGUAGE_COLORS.Other}"></i>${esc(language)} <span class="count" data-count-for="lang:${esc(language)}">${count}</span></button>`
    )
    .join("");

  const segmented = (facet, label, options) => `<div class="facet">
    <h2>${label}</h2>
    <div class="segmented" role="group" aria-label="${label}">
      ${options
        .map(
          ([value, text]) =>
            `<button type="button" data-facet="${facet}" data-value="${value}" aria-pressed="${value === "" ? "true" : "false"}">${text}${
              value ? ` <span class="count" data-count-for="${facet}:${value}"></span>` : ""
            }</button>`
        )
        .join("")}
    </div>
  </div>`;

  const previewNames = ["mem0 MCP Server", "LlamaParse MCP Server", "Magic Hour MCP Server"];
  const previewItems = [
    ...previewNames.map((name) => items.find((item) => item.name === name)).filter((item) => item?.transport),
    ...items.filter((item) => item.transport && item.official),
  ]
    .filter((item, index, list) => list.indexOf(item) === index)
    .slice(0, 3);
  const previewEntries = previewItems.map((item) => ({ key: serverKey(item.slug), transport: item.transport }));
  const previewClients = CLIENTS.filter((client) => ["cursor", "vscode", "claude-code"].includes(client.id));
  const preview = previewEntries.length
    ? `<div class="hero-preview" data-tabs aria-label="Example stack config">
      <div class="preview-chrome"><span></span><span></span><span></span><div class="tab-list" role="tablist">${previewClients
        .map((client, index) => `<button type="button" role="tab" data-tab="${client.id}" aria-selected="${index === 0}">${client.label}</button>`)
        .join("")}</div></div>
      <div class="preview-stack">${previewItems
        .map((item) => `<a href="${href(serverPath(item))}">${logo(item, "sm")}<span>${esc(item.name)}</span>${icon("check")}</a>`)
        .join("")}</div>
      ${previewClients
        .map(
          (client, index) => `<div role="tabpanel" data-panel="${client.id}"${index === 0 ? "" : " hidden"}>${codeBlock(
            configFor(client.id, previewEntries),
            client.file,
            `hero-${client.id}`
          )}</div>`
        )
        .join("")}
      <a class="preview-cta" href="${href("/stack/")}">${icon("layers")}Build your own stack${icon("arrow")}</a>
    </div>`
    : "";

  const body = `<section class="hero" data-hero>
  <div class="hero-bg" aria-hidden="true"></div>
  <canvas class="hero-canvas" data-hero-canvas aria-hidden="true"></canvas>
  <div class="wrap hero-inner">
    <div class="hero-copy">
    <p class="eyebrow"><span class="pulse"></span>${stats.servers} servers · every link checked weekly</p>
    <h1>Find an MCP server.<br><span class="grad">Plug it in within a minute.</span></h1>
    <p class="lede">A hand-reviewed directory of Model Context Protocol servers. Filter by what your agent needs, copy a working config for Cursor, VS Code, Claude, or Codex, and bundle several servers into one stack.</p>
    <form class="hero-search" role="search" data-hero-search>
      ${icon("search")}
      <input id="q" name="q" type="search" placeholder="Search servers, providers, tags" autocomplete="off" spellcheck="false" aria-label="Search servers">
      <kbd>/</kbd>
    </form>
    <div class="hero-tags"><span>Popular:</span>${topTags}</div>
    <dl class="stats">
      <div><dt>Servers</dt><dd>${stats.servers}</dd></div>
      <div><dt>Official</dt><dd>${stats.official}</dd></div>
      <div><dt>Remote-ready</dt><dd>${stats.remote}</dd></div>
      <div><dt>Categories</dt><dd>${stats.categories}</dd></div>
      <div><dt>Languages</dt><dd>${stats.languages}</dd></div>
    </dl>
    </div>
    ${preview}
  </div>
</section>

<section class="wrap explorer" id="explore" data-explorer>
  <aside class="rail" data-rail aria-label="Filters">
    <div class="rail-head"><h2>Filters</h2><button type="button" class="link-btn" data-clear-filters>Reset</button></div>
    ${segmented("type", "Backing", [["", "Any"], ["official", "Official"], ["community", "Community"]])}
    ${segmented("transport", "Transport", [["", "Any"], ["remote", "Remote"], ["local", "Local"]])}
    <div class="facet">
      <h2>Category</h2>
      <ul class="facet-list">
        <li><button type="button" class="facet-row" data-facet="cat" data-value="" aria-pressed="true">${icon("grid")}<span class="facet-label">All categories</span><span class="count" data-count-for="cat:">${stats.servers}</span></button></li>
        ${categoryFacet}
      </ul>
    </div>
    <div class="facet">
      <h2>Language</h2>
      <div class="chips">${languageFacet}</div>
    </div>
  </aside>

  <div class="results">
    <div class="toolbar">
      <button type="button" class="btn btn-ghost btn-sm rail-open" data-rail-open>${icon("filter")}Filters</button>
      <p class="result-count" data-result-count aria-live="polite">${plural(stats.servers, "server")}</p>
      <div class="active-filters" data-active-filters></div>
      <div class="toolbar-end">
        <label class="select"><span class="sr-only">Sort</span>
          <select data-sort>
            <option value="featured">Featured</option>
            <option value="relevance">Best match</option>
            <option value="name">Name A–Z</option>
            <option value="provider">Provider</option>
          </select>
        </label>
        <div class="view-toggle" role="group" aria-label="Layout">
          <button type="button" data-view="grid" aria-pressed="true" aria-label="Grid view">${icon("grid")}</button>
          <button type="button" data-view="list" aria-pressed="false" aria-label="List view">${icon("list")}</button>
        </div>
      </div>
    </div>
    <div class="grid" data-grid>
${items.map(card).join("\n")}
    </div>
    <div class="empty" data-empty hidden>
      <h3>Nothing matches those filters</h3>
      <p>Try a broader search, or tell us which server is missing.</p>
      <div class="empty-actions"><button type="button" class="btn btn-ghost" data-clear-filters>Reset filters</button><a class="btn btn-primary" href="${submitUrl}">Suggest a server</a></div>
    </div>
  </div>
</section>

<section class="wrap steps">
  <div class="step"><span class="step-n">01</span><h2>Narrow it down</h2><p>Combine search with backing, transport, category, and language filters. Counts update as you go, so you never hit a dead end.</p></div>
  <div class="step"><span class="step-n">02</span><h2>Connect in one click</h2><p>Remote servers come with install links and ready-to-paste configs for Cursor, VS Code, Claude Code, Claude Desktop, and Codex.</p></div>
  <div class="step"><span class="step-n">03</span><h2>Ship a stack</h2><p>Add servers to a stack, then export one merged config file or share the stack as a link with your team.</p></div>
</section>

<section class="wrap band">
  <div>
    <h2>Built for agents, too</h2>
    <p>The whole catalog is available as JSON and as <code>llms.txt</code>, regenerated from the same source on every merge.</p>
  </div>
  <div class="band-actions">
    <a class="btn btn-ghost" href="${href("/developers/")}">${icon("terminal")}API & llms.txt</a>
    <a class="btn btn-primary" href="${submitUrl}">${icon("plus")}Submit a server</a>
  </div>
</section>`;

  return layout({
    title: "mcpHQ: the MCP server directory you can plug in",
    description: `Search ${stats.servers} hand-reviewed Model Context Protocol (MCP) servers. Filter by category, language, and transport, and copy ready-made configs for Cursor, VS Code, Claude, and Codex.`,
    path: "/",
    active: "explore",
    body,
    structured: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: `${siteUrl}/`,
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  });
}

function serverPage(item) {
  const related = grouped
    .get(item.category)
    .filter((other) => other.slug !== item.slug)
    .slice(0, 6);
  const key = serverKey(item.slug);
  const isGitHub = hostOf(item.url) === "github.com";

  let connect;
  if (item.transport) {
    const entries = [{ key, transport: item.transport }];
    const tabs = CLIENTS.map(
      (client, index) =>
        `<button type="button" role="tab" data-tab="${client.id}" aria-selected="${index === 0}">${client.label}</button>`
    ).join("");
    const panels = CLIENTS.map(
      (client, index) => `<div role="tabpanel" data-panel="${client.id}"${index === 0 ? "" : " hidden"}>
        ${codeBlock(configFor(client.id, entries), client.file, `cfg-${client.id}`)}
      </div>`
    ).join("");

    connect = `<section class="panel">
      <div class="panel-head"><h2>Connect</h2><span class="badge badge-remote">${icon("remote")}${item.transport.type === "http" ? "Streamable HTTP" : "SSE"}</span></div>
      <p class="muted">This server is hosted, so there is nothing to install. Add it to your client in one click, or paste the config below.</p>
      <div class="endpoint">
        <code>${esc(item.transport.url)}</code>
        <button class="copy-btn" type="button" data-copy-text="${esc(item.transport.url)}">${icon("copy", "when-off")}${icon("check", "when-on")}<span class="sr-only">Copy endpoint</span></button>
      </div>
      <div class="install-links">
        <a class="btn btn-primary" href="${esc(cursorInstallLink(key, item.transport))}">Add to Cursor</a>
        <a class="btn btn-ghost" href="${esc(vscodeInstallLink(key, item.transport))}">Add to VS Code</a>
      </div>
      <div class="tabs" data-tabs>
        <div class="tab-list" role="tablist" aria-label="Client">${tabs}</div>
        ${panels}
      </div>
      <p class="muted small">Some hosted servers ask you to sign in or pass an API key the first time you connect. Check the project docs if the client reports an auth error.</p>
    </section>`;
  } else {
    connect = `<section class="panel">
      <div class="panel-head"><h2>Set up</h2><span class="badge">${icon("terminal")}Runs locally</span></div>
      <p class="muted">This server runs on your machine, so the install command depends on its package. The project ${isGitHub ? "README" : "docs"} has the exact steps. Most clients expect an entry shaped like this:</p>
      ${codeBlock(
        JSON.stringify({ mcpServers: { [key]: { command: "<command from the docs>", args: ["<args>"], env: {} } } }, null, 2),
        "mcp.json",
        "cfg-local"
      )}
      <a class="btn btn-primary" href="${esc(item.url)}" rel="noopener">${isGitHub ? "Open README" : "Open setup docs"}${icon("external")}</a>
    </section>`;
  }

  const facts = [
    ["Category", `<a href="${href(categoryPath(item.category))}">${esc(item.categoryName)}</a>`],
    ["Provider", esc(item.provider)],
    ["Language", langPill(item.language)],
    ["Backing", item.official ? "Official" : "Community"],
    ["Transport", item.transport ? (item.transport.type === "http" ? "Remote · Streamable HTTP" : "Remote · SSE") : "Local (stdio)"],
    ["Source", `<a href="${esc(item.url)}" rel="noopener">${esc(hostOf(item.url))}${icon("external")}</a>`],
  ]
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");

  const reportUrl = `${repoUrl}/issues/new?title=${encodeURIComponent(`Update: ${item.name}`)}&body=${encodeURIComponent(
    `Entry: ${siteUrl}${serverPath(item)}\n\nWhat should change?\n`
  )}`;

  const body = `<div class="wrap detail">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="${href("/")}">Explore</a><span>/</span><a href="${href(categoryPath(item.category))}">${esc(item.categoryName)}</a><span>/</span><span aria-current="page">${esc(item.name)}</span></nav>
  <header class="detail-head">
    ${logo(item, "lg")}
    <div class="detail-title">
      <h1>${esc(item.name)}</h1>
      <p class="detail-sub">by ${esc(item.provider)} · ${langPill(item.language)}</p>
      <div class="detail-badges">${badges(item)}</div>
    </div>
    <div class="detail-actions">
      <a class="btn btn-primary" href="${esc(item.url)}" rel="noopener">${isGitHub ? `${GITHUB_ICON}View source` : `${icon("external")}Visit project`}</a>
      ${stackButton(item, "full")}
      <button class="btn btn-ghost copy-btn" type="button" data-copy-text="${siteUrl}${serverPath(item)}">${icon("link", "when-off")}${icon("check", "when-on")}<span class="when-off">Share</span><span class="when-on">Link copied</span></button>
    </div>
  </header>

  <div class="detail-grid">
    <div class="detail-main">
      <section class="panel">
        <h2>Overview</h2>
        <p class="detail-desc">${esc(item.description)}</p>
        <div class="tags">${item.tags.map((tag) => `<a class="chip" href="${href(`/?q=${encodeURIComponent(tag)}#explore`)}">#${esc(tag)}</a>`).join("")}</div>
      </section>
      ${connect}
    </div>
    <aside class="detail-side">
      <section class="panel">
        <h2>Details</h2>
        <dl class="facts">${facts}</dl>
      </section>
      <section class="panel side-links">
        <a href="${repoUrl}/blob/main/data/servers.json">${icon("pencil")}Edit this entry</a>
        <a href="${reportUrl}">${icon("flag")}Report an issue</a>
      </section>
    </aside>
  </div>

  ${
    related.length
      ? `<section class="related">
    <div class="section-head"><h2>More in ${esc(item.categoryName)}</h2><a href="${href(categoryPath(item.category))}">See all ${grouped.get(item.category).length}${icon("arrow")}</a></div>
    <div class="grid">${related.map(card).join("\n")}</div>
  </section>`
      : ""
  }
</div>`;

  return layout({
    title: /\bMCP\b/i.test(item.name) ? item.name : `${item.name} MCP server`,
    description: `${item.description} ${item.official ? "Official" : "Community"} ${item.language} MCP server by ${item.provider}${item.transport ? ", available as a hosted endpoint" : ""}.`,
    path: serverPath(item),
    active: "explore",
    body,
    structured: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: item.name,
        description: item.description,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        url: item.url,
        keywords: item.tags.join(", "),
        author: { "@type": "Organization", name: item.provider },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Explore", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: item.categoryName, item: `${siteUrl}${categoryPath(item.category)}` },
          { "@type": "ListItem", position: 3, name: item.name, item: `${siteUrl}${serverPath(item)}` },
        ],
      },
    ],
  });
}

function categoriesPage() {
  const tiles = activeCategories
    .map((category) => {
      const entries = grouped.get(category.id);
      const official = entries.filter((entry) => entry.official).length;
      const remote = entries.filter((entry) => entry.transport).length;
      return `<a class="cat-tile" href="${href(categoryPath(category.id))}">
        <span class="cat-icon">${icon(category.id)}</span>
        <h2>${esc(category.name)}</h2>
        <p>${esc(category.description)}</p>
        <div class="cat-foot">
          <div class="logo-stack">${entries.slice(0, 5).map((entry) => logo(entry, "sm")).join("")}</div>
          <span class="muted small">${entries.length} servers · ${official} official · ${remote} remote</span>
        </div>
      </a>`;
    })
    .join("");

  return layout({
    title: "MCP server categories",
    description: `Browse ${stats.servers} MCP servers across ${stats.categories} categories, from databases and developer tools to security and finance.`,
    path: "/categories/",
    active: "categories",
    body: `<div class="wrap page">
  <header class="page-head"><p class="eyebrow">${stats.categories} categories</p><h1>Browse by what you are building</h1><p class="lede">Every server sits in the category that matches its main job. Tags cover everything else.</p></header>
  <div class="cat-grid">${tiles}</div>
</div>`,
  });
}

function categoryPage(category) {
  const entries = grouped.get(category.id);
  const official = entries.filter((entry) => entry.official).length;
  const remote = entries.filter((entry) => entry.transport).length;
  const others = activeCategories
    .filter((other) => other.id !== category.id)
    .map((other) => `<a class="chip" href="${href(categoryPath(other.id))}">${esc(other.name)}</a>`)
    .join("");

  return layout({
    title: `${category.name} MCP servers`,
    description: `${entries.length} MCP servers for ${category.name.toLowerCase()}. ${category.description}`,
    path: categoryPath(category.id),
    active: "categories",
    body: `<div class="wrap page">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="${href("/categories/")}">Categories</a><span>/</span><span aria-current="page">${esc(category.name)}</span></nav>
  <header class="page-head page-head-row">
    <span class="cat-icon cat-icon-lg">${icon(category.id)}</span>
    <div>
      <h1>${esc(category.name)}</h1>
      <p class="lede">${esc(category.description)}</p>
      <p class="muted">${entries.length} servers · ${official} official · ${remote} remote-ready · <a href="${href(`/?cat=${category.id}#explore`)}">Filter in explorer${icon("arrow")}</a></p>
    </div>
  </header>
  <div class="grid">${entries.map(card).join("\n")}</div>
  <section class="other-cats"><h2>Other categories</h2><div class="chips">${others}</div></section>
</div>`,
    structured: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `${category.name} MCP servers`,
        description: category.description,
        url: `${siteUrl}${categoryPath(category.id)}`,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: entries.length,
          itemListElement: entries.map((entry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: entry.name,
            url: `${siteUrl}${serverPath(entry)}`,
          })),
        },
      },
    ],
  });
}

function stackPage() {
  const tabs = CLIENTS.map(
    (client, index) =>
      `<button type="button" role="tab" data-client="${client.id}" aria-selected="${index === 0}">${client.label}</button>`
  ).join("");

  return layout({
    title: "Stack builder",
    description: "Combine several MCP servers into one config file for Cursor, VS Code, Claude Code, Claude Desktop, or Codex, and share the stack as a link.",
    path: "/stack/",
    active: "stack",
    body: `<div class="wrap page" data-stack-app>
  <header class="page-head"><p class="eyebrow">${icon("layers")}Stack builder</p><h1>One config for every server you need</h1><p class="lede">Add servers from anywhere on the site with the <b>+</b> button. Hosted servers merge into a single config for your client. Local servers are listed with links to their setup steps.</p></header>

  <div class="stack-empty" data-stack-empty>
    <div class="stack-empty-art" aria-hidden="true">${icon("layers")}</div>
    <h2>Your stack is empty</h2>
    <p class="muted">Browse the directory and press <b>+</b> on any server. Your stack is saved in this browser.</p>
    <a class="btn btn-primary" href="${href("/")}">Explore servers${icon("arrow")}</a>
  </div>

  <div class="stack-layout" data-stack-filled hidden>
    <section class="panel">
      <div class="panel-head"><h2>Servers <span class="muted" data-stack-total></span></h2><button type="button" class="link-btn" data-stack-clear>Clear all</button></div>
      <ul class="stack-list" data-stack-list></ul>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>Config</h2><button type="button" class="btn btn-ghost btn-sm copy-btn" data-stack-share>${icon("link", "when-off")}${icon("check", "when-on")}<span class="when-off">Share stack</span><span class="when-on">Link copied</span></button></div>
      <div class="tab-list" role="tablist" aria-label="Client">${tabs}</div>
      <div data-stack-config></div>
      <div class="stack-config-actions"><button type="button" class="btn btn-ghost btn-sm" data-stack-download>${icon("download")}Download</button></div>
      <div data-stack-local></div>
    </section>
  </div>
</div>`,
  });
}

function developersPage() {
  const endpoints = [
    ["Servers", "/api/servers.json", "Every entry, exactly as stored in the repo."],
    ["Catalog", "/api/catalog.json", "Servers plus page slug, category name, logo, and transport."],
    ["Categories", "/api/categories.json", "Category ids, names, and descriptions."],
    ["LLM index", "/llms.txt", "Short Markdown index for agents."],
    ["LLM full catalog", "/llms-full.txt", "Every server in Markdown."],
  ]
    .map(
      ([label, path, note]) => `<tr><td>${label}</td><td><a href="${href(path)}"><code>${path}</code></a></td><td class="muted">${note}</td></tr>`
    )
    .join("");
  const badge = `[![Listed on mcpHQ](https://img.shields.io/badge/Listed%20on-mcpHQ-2563eb)](${siteUrl}/)`;

  return layout({
    title: "API & agents",
    description: "Use the mcpHQ MCP server catalog as JSON or llms.txt in your own tools, agents, and dashboards.",
    path: "/developers/",
    active: "developers",
    body: `<div class="wrap page narrow">
  <header class="page-head"><p class="eyebrow">${icon("terminal")}Open data</p><h1>Use the catalog anywhere</h1><p class="lede">Static files, no key, no rate limit. They are rebuilt from <a href="${repoUrl}/blob/main/data/servers.json"><code>data/servers.json</code></a> on every merge.</p></header>
  <section class="panel">
    <h2>Endpoints</h2>
    <div class="table-wrap"><table><thead><tr><th>File</th><th>Path</th><th>Contents</th></tr></thead><tbody>${endpoints}</tbody></table></div>
  </section>
  <section class="panel">
    <h2>Quick start</h2>
    ${codeBlock(`curl -s ${siteUrl}/api/servers.json \\\n  | jq '.[] | select(.official and .endpoints) | {name, url: .endpoints}'`, "List official hosted servers", "dev-curl")}
    <p class="muted">Field definitions live in <a href="${repoUrl}/blob/main/data/servers.schema.json"><code>servers.schema.json</code></a>. Please link back if you build on the data.</p>
  </section>
  <section class="panel">
    <h2>Listed badge</h2>
    <p class="muted">Maintainers of listed servers can add this badge to their README.</p>
    <p><img src="https://img.shields.io/badge/Listed%20on-mcpHQ-2563eb" alt="Listed on mcpHQ" height="20"></p>
    ${codeBlock(badge, "README.md", "dev-badge")}
  </section>
  <section class="panel">
    <h2>Add or fix a server</h2>
    <p class="muted">Open an issue with the <a href="${submitUrl}">submission form</a>, or edit <code>data/servers.json</code> directly and run:</p>
    ${codeBlock("npm run validate\nnpm run generate\nnpm run build-site", "Terminal", "dev-contrib")}
  </section>
</div>`,
  });
}

function notFoundPage() {
  return layout({
    title: "Page not found",
    description: "This page does not exist.",
    path: "/404.html",
    body: `<div class="wrap page notfound">
  <p class="eyebrow">404</p>
  <h1>That server is not on the map</h1>
  <p class="lede">The page may have moved, or the server was removed after failing the link check.</p>
  <div class="empty-actions"><a class="btn btn-primary" href="${href("/")}">Back to explore</a><button class="btn btn-ghost" type="button" data-open-palette>${icon("search")}Search</button></div>
</div>`,
  });
}

// ---------------------------------------------------------------------------
// Write

function writePage(path, html) {
  const file = path.endsWith(".html") ? join(outDir, path) : join(outDir, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const file of ["styles.css", "app.js", "connect.js", "fluid.js", "logo.png", "favicon.png", "favicon.svg"]) {
  cpSync(join(staticDir, file), join(outDir, file));
}
const ogSource = join(root, "assets/site-preview.png");
if (existsSync(ogSource)) {
  cpSync(ogSource, join(outDir, "og.png"));
}
cpSync(logosDir, join(outDir, "logos"), { recursive: true });

writePage("/", homePage());
writePage("/categories/", categoriesPage());
for (const category of activeCategories) {
  writePage(categoryPath(category.id), categoryPage(category));
}
for (const item of items) {
  writePage(serverPath(item), serverPage(item));
}
writePage("/stack/", stackPage());
writePage("/developers/", developersPage());
writePage("/404.html", notFoundPage());

const apiDir = join(outDir, "api");
mkdirSync(apiDir, { recursive: true });
for (const file of ["servers.json", "categories.json"]) {
  cpSync(join(root, "data", file), join(apiDir, file));
}
writeFileSync(
  join(apiDir, "catalog.json"),
  JSON.stringify(
    items.map(({ name, slug, url, description, category, categoryName, language, provider, tags, official, logo, transport }) => ({
      name,
      slug,
      url,
      description,
      category,
      categoryName,
      language,
      provider,
      tags,
      official,
      logo,
      transport,
    }))
  )
);

const sitemapPaths = [
  "/",
  "/categories/",
  ...activeCategories.map((category) => categoryPath(category.id)),
  ...items.map(serverPath),
  "/stack/",
  "/developers/",
  "/llms.txt",
  "/llms-full.txt",
];
writeFileSync(
  join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((path) => `  <url><loc>${siteUrl}${path}</loc><lastmod>${buildDate}</lastmod></url>`).join("\n")}
</urlset>
`
);
writeFileSync(join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
writeFileSync(join(outDir, ".nojekyll"), "");

const llms = spawnSync("node", [join(root, "scripts/generate-llms.mjs"), "--out", outDir], {
  stdio: "inherit",
});
if (llms.status !== 0) {
  process.exit(llms.status ?? 1);
}

console.log(
  `Built site with ${items.length} server pages and ${activeCategories.length} category pages in ${outDir.replace(`${root}/`, "")}/.`
);
