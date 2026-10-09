#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://landscape.mcphq.org";
const repoUrl = "https://github.com/mcpHQ/awesome-mcp-servers";

const args = process.argv.slice(2);
const checkOnly = args.includes("--check");
const outFlag = args.indexOf("--out");
const outDir = outFlag === -1 ? root : args[outFlag + 1];

if (!outDir) {
  console.error("Missing directory after --out.");
  process.exit(1);
}

const categories = JSON.parse(
  readFileSync(join(root, "data/categories.json"), "utf8")
);
const servers = JSON.parse(readFileSync(join(root, "data/servers.json"), "utf8"));

const grouped = new Map(categories.map((category) => [category.id, []]));
for (const server of servers) {
  grouped.get(server.category)?.push(server);
}

for (const entries of grouped.values()) {
  entries.sort(compareServers);
}

const activeCategories = categories.filter(
  (category) => (grouped.get(category.id)?.length ?? 0) > 0
);

const llmsPath = join(outDir, "llms.txt");
const llmsFullPath = join(outDir, "llms-full.txt");
const llms = renderLlms();
const llmsFull = renderLlmsFull();

if (checkOnly) {
  const currentLlms = readFileSync(join(root, "llms.txt"), "utf8");
  const currentLlmsFull = readFileSync(join(root, "llms-full.txt"), "utf8");
  if (currentLlms !== llms || currentLlmsFull !== llmsFull) {
    console.error(
      "llms.txt or llms-full.txt is out of date. Run `npm run generate` and commit the result."
    );
    process.exit(1);
  }
  console.log(
    `llms.txt and llms-full.txt are up to date with ${servers.length} servers.`
  );
} else {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(llmsPath, llms);
  writeFileSync(llmsFullPath, llmsFull);
  console.log(
    `Generated llms.txt and llms-full.txt with ${servers.length} servers.`
  );
}

function compareServers(left, right) {
  const leftOrder = left.order ?? Number.POSITIVE_INFINITY;
  const rightOrder = right.order ?? Number.POSITIVE_INFINITY;
  if (leftOrder !== rightOrder) {
    return leftOrder - rightOrder;
  }
  return left.name.localeCompare(right.name);
}

function renderLlms() {
  const data = `## Data

- [Full catalog](${siteUrl}/llms-full.txt): Every server in Markdown, with language, provider, tags, official status, and remote endpoints when listed.
- [Servers JSON](${siteUrl}/api/servers.json): The same catalog as a JSON array.
- [Categories JSON](${siteUrl}/api/categories.json): Category ids, names, and descriptions.
- [Server schema](${repoUrl}/blob/main/data/servers.schema.json): Allowed fields for each catalog entry.`;

  const sections = activeCategories
    .map((category) => {
      const entries = grouped.get(category.id) ?? [];
      const rows = entries
        .map((server) => {
          const notes = [
            oneLine(server.description),
            metaNote(server),
          ].join(" ");
          return `- [${linkLabel(server.name)}](${server.url}): ${notes}`;
        })
        .join("\n");
      return `## ${category.name}\n\n${rows}`;
    })
    .join("\n\n");

  const optional = `## Optional

- [mcpHQ directory](${siteUrl}/): Searchable website for this catalog, with a page and install configs for every server.
- [GitHub repository](${repoUrl}): Catalog source, README, and issue templates.
- [Contributing guide](${repoUrl}/blob/main/CONTRIBUTING.md): How to add or update a server.
- [MCP specification](https://modelcontextprotocol.io/specification/latest): The Model Context Protocol specification.
- [Official MCP registry](https://registry.modelcontextprotocol.io/): Official registry of publicly available MCP servers.
- [Reference servers](https://github.com/modelcontextprotocol/servers): Official example MCP servers.`;

  return `# Awesome MCP Servers

> Hand-curated, link-checked catalog of ${servers.length} Model Context Protocol (MCP) servers in ${activeCategories.length} categories. Each entry has a URL, description, category, language, provider, tags, and an official flag. The website, JSON API, and these files are generated from the same data.

MCP is an open protocol that lets AI applications connect to external tools and data through a standardized client-server interface. This catalog lists well-scoped, source-available servers for databases, developer tools, browsers, cloud services, and more. Entries are reviewed for a clear purpose, a public source, and recent or official maintenance. Links are checked on every pull request and weekly.

Links under each category point at the upstream project, docs, or registry page. Use the Data section for the complete Markdown catalog and the JSON API. The Optional section is background an agent can skip.

${data}

${sections}

${optional}
`;
}

function renderLlmsFull() {
  const sections = activeCategories
    .map((category) => {
      const entries = grouped.get(category.id) ?? [];
      const rows = entries
        .map((server) => {
          const lines = [
            `### ${server.name}`,
            "",
            oneLine(server.description),
            "",
            `- URL: ${server.url}`,
            `- Language: ${server.language}`,
            `- Provider: ${server.provider}`,
            `- Official: ${server.official ? "yes" : "no"}`,
            `- Tags: ${server.tags.join(", ")}`,
            `- Category: ${category.name}`,
          ];
          if (server.endpoints?.sse) {
            lines.push(`- SSE endpoint: ${server.endpoints.sse}`);
          }
          if (server.endpoints?.streamableHttp) {
            lines.push(
              `- Streamable HTTP endpoint: ${server.endpoints.streamableHttp}`
            );
          }
          return lines.join("\n");
        })
        .join("\n\n");

      return `## ${category.name}

${category.description}

${rows}`;
    })
    .join("\n\n");

  return `# Awesome MCP Servers

> Full Markdown catalog of ${servers.length} hand-curated Model Context Protocol (MCP) servers. A shorter index lives at ${siteUrl}/llms.txt. The same records are published as JSON at ${siteUrl}/api/servers.json.

This file lists every server in the catalog. Descriptions are the catalog's one-sentence summaries, not the upstream README. \`Official: yes\` means the MCP project or the named provider backs the server. Remote endpoints are included only when the catalog lists an SSE or streamable HTTP URL.

${sections}
`;
}

function metaNote(server) {
  const parts = [server.language];
  if (server.official) {
    parts.push("official");
  }
  return `(${parts.join(", ")})`;
}

function linkLabel(name) {
  return name.replace(/[\[\]]/g, "");
}

function oneLine(text) {
  return text.replace(/\s+/g, " ").trim();
}
