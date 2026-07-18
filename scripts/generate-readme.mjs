#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");
const categories = JSON.parse(
  readFileSync(join(root, "data/categories.json"), "utf8")
);
const servers = JSON.parse(
  readFileSync(join(root, "data/servers.json"), "utf8")
);

const categoryMap = new Map(
  categories.map((category) => [category.id, category])
);

const grouped = new Map(categories.map((category) => [category.id, []]));
for (const server of servers) {
  grouped.get(server.category)?.push(server);
}

for (const entries of grouped.values()) {
  entries.sort(compareServers);
}

function compareServers(left, right) {
  const leftOrder = left.order ?? Number.POSITIVE_INFINITY;
  const rightOrder = right.order ?? Number.POSITIVE_INFINITY;
  if (leftOrder !== rightOrder) {
    return leftOrder - rightOrder;
  }
  return left.name.localeCompare(right.name);
}

const toc = categories
  .map((category) => {
    const count = grouped.get(category.id)?.length ?? 0;
    if (count === 0) {
      return null;
    }
    const anchor = category.id;
    return `- [${category.name}](#${anchor}) (${count})`;
  })
  .filter(Boolean)
  .join("\n");

const sections = categories
  .map((category) => {
    const entries = grouped.get(category.id) ?? [];
    if (entries.length === 0) {
      return null;
    }

    const rows = entries
      .map((server) => {
        const badges = [
          server.official ? "Official" : null,
          server.language,
        ]
          .filter(Boolean)
          .map((badge) => `\`${badge}\``)
          .join(" ");

        const tags = server.tags.map((tag) => `\`${tag}\``).join(" ");
        return `- **[${server.name}](${server.url})** ${badges} — ${server.description}  \n  ${tags}`;
      })
      .join("\n");

    return `<a id="${category.id}"></a>

## ${category.name}

${category.description}

${rows}`;
  })
  .filter(Boolean)
  .join("\n\n");

const readme = `# Awesome MCP Servers

[![MCP](https://img.shields.io/badge/protocol-MCP-blue)](https://modelcontextprotocol.io)
[![Servers](https://img.shields.io/badge/servers-${servers.length}-brightgreen)](#catalog)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A curated catalog of [Model Context Protocol (MCP)](https://modelcontextprotocol.io) servers for research, discovery, and integration planning.

MCP is an open protocol that lets AI applications connect to external tools and data through a standardized client-server interface. This list focuses on well-scoped, source-available servers that extend AI workflows with databases, developer tools, browsers, cloud services, and more.

> **Explore visually:** Browse the [MCP Landscape](#mcp-landscape) — an interactive, searchable map of every server in this catalog.

> **Source of truth:** [\`data/servers.json\`](data/servers.json) is the canonical catalog. The README is generated from that file.

## Quick Links

- [MCP Landscape](https://landscape.mcphq.org/) — interactive server map
- [Official MCP Registry](https://registry.modelcontextprotocol.io/)
- [MCP Specification](https://modelcontextprotocol.io/specification/latest)
- [Reference Servers](https://github.com/modelcontextprotocol/servers)
- [Contributing Guide](CONTRIBUTING.md)

## MCP Landscape

<a href="https://landscape.mcphq.org/" target="_blank" rel="noopener noreferrer">
  <img src="assets/mcp-landscape.png" alt="MCP Landscape">
</a>

Interactive, searchable map of the MCP servers in this catalog. **[Open the live site →](https://landscape.mcphq.org/)**

See [landscape/README.md](landscape/README.md) for how the landscape is built and how to preview or customize it locally.

## Catalog

${toc}

${sections}

## Quality Criteria

We prioritize servers that are:

- **Purposeful** — clear tools/resources for a real workflow
- **Discoverable** — public repo, docs, or registry listing
- **Maintainable** — recent activity or official backing
- **Safe to evaluate** — no obvious spam or impersonation

## Contribute

Found a great MCP server? Read [CONTRIBUTING.md](CONTRIBUTING.md) and open a PR with an entry in \`data/servers.json\`.

Then regenerate the README:

\`\`\`bash
node scripts/generate-readme.mjs
node scripts/validate-data.mjs
\`\`\`

## License

This list is released under the [MIT License](LICENSE).
`;

const readmePath = join(root, "README.md");

if (checkOnly) {
  const currentReadme = readFileSync(readmePath, "utf8");
  if (currentReadme !== readme) {
    console.error(
      "README.md is out of date. Run `npm run generate` and commit the result."
    );
    process.exit(1);
  }
  console.log(`README.md is up to date with ${servers.length} servers.`);
} else {
  writeFileSync(readmePath, readme);
  console.log(`Generated README.md with ${servers.length} servers.`);
}
