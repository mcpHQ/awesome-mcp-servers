#!/usr/bin/env node

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = join(root, "landscape/build");
const indexPath = join(buildDir, "index.html");
const fullPath = join(buildDir, "data/full.json");

const settingsPath = join(root, "landscape/settings.yml");
const settings = readFileSync(settingsPath, "utf8");
const foundation = readYamlScalar(settings, "foundation") ?? "MCP Landscape";
const description =
  readYamlScalar(settings, "description") ??
  "Searchable directory of curated Model Context Protocol (MCP) servers.";
const siteUrl = (
  readYamlScalar(settings, "url") ?? "https://landscape.mcphq.org"
).replace(/\/$/, "");
const pageTitle = "MCP Landscape — Curated Model Context Protocol Servers";
const ogImagePath = "/images/og.jpg";
const ogImageUrl = `${siteUrl}${ogImagePath}`;
const legacyHost = "https://mcphq.github.io/awesome-mcp-servers";

const fullData = readFileSync(fullPath, "utf8");
const catalog = JSON.parse(fullData);
let html = readFileSync(indexPath, "utf8");

const generatedTitle = `${foundation} Landscape`;
if (html.includes(generatedTitle)) {
  html = html.replaceAll(generatedTitle, foundation);
}

if (legacyHost !== siteUrl) {
  html = html.replaceAll(legacyHost, siteUrl);
}

html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(pageTitle)}</title>`);
html = replaceMetaContent(html, "property", "og:title", pageTitle);
html = replaceMetaContent(html, "name", "twitter:title", pageTitle);
html = replaceMetaContent(html, "name", "description", description);
html = replaceMetaContent(html, "property", "og:description", description);
html = replaceMetaContent(html, "name", "twitter:description", description);
html = replaceMetaContent(html, "property", "og:url", siteUrl);
html = html.replace(
  /("@type": "WebPage",\s*"name": ")([^"]*)(",\s*"description": ")([^"]*)(")/,
  (_, open, _name, middle, _description, close) =>
    `${open}${escapeJson(pageTitle)}${middle}${escapeJson(description)}${close}`
);
// /stats and /guide are client routes that GitHub Pages serves as 404.
html = html.replace(
  /,\s*\{"@type":"ListItem","position":2,"name":"Stats","item":"[^"]*"\}\s*,\s*\{"@type":"ListItem","position":3,"name":"Guide","item":"[^"]*"\}/,
  ""
);
html = html.replace(
  /<link rel="canonical" href="[^"]*"\s*\/?>/,
  `<link rel="canonical" href="${siteUrl}" />`
);

const faviconLink = '<link rel="icon" href="./images/logo.png" type="image/png" />';
if (!html.includes('rel="icon"')) {
  html = html.replace("</title>", `</title>\n        ${faviconLink}`);
}

if (!html.includes('property="og:image"')) {
  const socialTags = [
    `<meta property="og:image" content="${ogImageUrl}" />`,
    `<meta property="og:image:width" content="1024" />`,
    `<meta property="og:image:height" content="564" />`,
    `<meta name="twitter:image" content="${ogImageUrl}" />`,
  ].join("\n        ");
  html = html.replace("</title>", `</title>\n        ${socialTags}`);
} else if (!html.includes('name="twitter:image"')) {
  html = html.replace(
    "</head>",
    `        <meta name="twitter:image" content="${ogImageUrl}" />\n    </head>`
  );
}

if (!html.includes("mcp-seo-catalog")) {
  const itemList = buildItemList(catalog.items ?? [], pageTitle, description, siteUrl);
  const jsonLd = JSON.stringify(itemList).replace(/</g, "\\u003c");
  html = html.replace(
    "</head>",
    `        <script type="application/ld+json" id="mcp-seo-catalog">\n            ${jsonLd}\n        </script>\n    </head>`
  );
}

if (!html.includes('id="mcp-catalog"')) {
  const catalogHtml = renderCatalog(catalog.items ?? [], pageTitle, description);
  const block = `<noscript>\n        ${catalogHtml}\n    </noscript>`;
  if (html.includes('<div id="landscape">')) {
    html = html.replace('<div id="landscape">', `${block}\n        <div id="landscape">`);
  } else {
    html = html.replace("</body>", `${block}\n    </body>`);
  }
}

const patchScript = `<script>
window.__FULL_LANDSCAPE_DATA__ = ${fullData};
(function () {
  const originalFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    const url = typeof input === "string" ? input : input?.url || "";
    if (url.includes("data/full.json")) {
      return Promise.resolve(
        new Response(JSON.stringify(window.__FULL_LANDSCAPE_DATA__), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
    }
    return originalFetch(input, init);
  };
})();
</script>`;

if (!html.includes("__FULL_LANDSCAPE_DATA__")) {
  html = html.replace(
    '<script type="module" crossorigin',
    `${patchScript}\n      <script type="module" crossorigin`
  );
}

writeFileSync(indexPath, html);
writeRobotsAndSitemap(buildDir, siteUrl);
copyOpenGraphImage(buildDir);

console.log("Patched landscape build (search data, site name, favicon, SEO).");

function readYamlScalar(text, key) {
  const match = text.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  if (!match) {
    return undefined;
  }
  return match[1].trim().replace(/^["']|["']$/g, "");
}

function replaceMetaContent(html, attribute, name, value) {
  const pattern = new RegExp(
    `(<meta ${attribute}="${name}"[\\s\\S]*?content=")([^"]*)(")`
  );
  if (!pattern.test(html)) {
    return html;
  }
  return html.replace(
    pattern,
    (_, open, _content, close) => `${open}${escapeHtml(value)}${close}`
  );
}

function escapeJson(value) {
  return JSON.stringify(value).slice(1, -1);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildItemList(items, title, summary, url) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: summary,
    url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.description,
        url: item.homepage_url || item.website,
      })),
    },
  };
}

function renderCatalog(items, title, summary) {
  const categories = new Map();
  for (const item of items) {
    const category = item.category || "Other";
    if (!categories.has(category)) {
      categories.set(category, []);
    }
    categories.get(category).push(item);
  }

  const sections = [...categories.entries()]
    .map(([category, entries]) => {
      const list = entries
        .map((item) => {
          const href = escapeHtml(item.homepage_url || item.website || siteUrl);
          const name = escapeHtml(item.name);
          const text = escapeHtml(item.description || "");
          return `<li><a href="${href}">${name}</a> — ${text}</li>`;
        })
        .join("\n            ");
      return `<section>\n          <h2>${escapeHtml(category)}</h2>\n          <ul>\n            ${list}\n          </ul>\n        </section>`;
    })
    .join("\n        ");

  return `<main id="mcp-catalog">
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(summary)}</p>
      ${sections}
    </main>`;
}

function writeRobotsAndSitemap(dir, url) {
  const lastmod = new Date().toISOString().slice(0, 10);
  writeFileSync(
    join(dir, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`
  );
  writeFileSync(
    join(dir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${url}/</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>\n</urlset>\n`
  );
}

function copyOpenGraphImage(dir) {
  const source = join(root, "assets/mcp-landscape.png");
  const imagesDir = join(dir, "images");
  mkdirSync(imagesDir, { recursive: true });
  copyFileSync(source, join(imagesDir, "og.jpg"));
}
