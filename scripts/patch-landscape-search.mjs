#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = join(root, "landscape/build");
const indexPath = join(buildDir, "index.html");
const fullPath = join(buildDir, "data/full.json");

const settingsPath = join(root, "landscape/settings.yml");
const settings = readFileSync(settingsPath, "utf8");
const foundationMatch = settings.match(/^foundation:\s*(.+)$/m);
const foundation = foundationMatch?.[1]?.trim() ?? "MCP Landscape";

const fullData = readFileSync(fullPath, "utf8");
let html = readFileSync(indexPath, "utf8");

// Landscape2 appends " Landscape" to the foundation name (e.g. "MCP" → "MCP Landscape").
// That generated title is exactly what we want to display, so no replacement is needed.

const faviconLink = '<link rel="icon" href="./images/logo.png" type="image/png" />';
if (!html.includes('rel="icon"')) {
  html = html.replace("</title>", `</title>\n        ${faviconLink}`);
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

console.log("Patched landscape build (search data, site name, favicon).");
