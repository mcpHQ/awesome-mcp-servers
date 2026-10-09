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

[![Servers](https://img.shields.io/badge/servers-${servers.length}-brightgreen)](#catalog)
[![GitHub stars](https://img.shields.io/github/stars/mcpHQ/awesome-mcp-servers?style=flat&logo=github)](https://github.com/mcpHQ/awesome-mcp-servers/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/mcpHQ/awesome-mcp-servers)](https://github.com/mcpHQ/awesome-mcp-servers/commits/main)
[![Link check](https://github.com/mcpHQ/awesome-mcp-servers/actions/workflows/link-check.yml/badge.svg)](https://github.com/mcpHQ/awesome-mcp-servers/actions/workflows/link-check.yml)
[![MCP](https://img.shields.io/badge/protocol-MCP-blue)](https://modelcontextprotocol.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**A hand-curated, link-checked catalog of [Model Context Protocol (MCP)](https://modelcontextprotocol.io) servers, with a [searchable directory](https://mcphq.org/) and a [JSON API](#use-the-data).**

<a href="https://mcphq.org/" target="_blank" rel="noopener noreferrer">
  <img src="assets/site-preview.png" alt="mcpHQ: searchable MCP server directory with filters, install configs, and a stack builder">
</a>

<p align="center"><b><a href="https://mcphq.org/">Open the mcpHQ directory →</a></b></p>

MCP is an open protocol that lets AI applications connect to external tools and data through a standardized client-server interface. This list focuses on well-scoped, source-available servers that extend AI workflows with databases, developer tools, browsers, cloud services, and more.

## Why this list

- **Curated, not scraped.** Every entry is reviewed against the [quality criteria](#quality-criteria). Spam, impersonators, and abandoned forks are rejected.
- **No dead links.** Every link is checked on each pull request and again every week. Broken entries get fixed or removed.
- **Structured data.** Every server has a category, language, provider, tags, and an official/community flag in [\`data/servers.json\`](data/servers.json). The README, [\`llms.txt\`](llms.txt), [\`llms-full.txt\`](llms-full.txt), and the website are generated from that file.
- **Ready to plug in.** Every server has its own page on the website. Hosted servers come with one-click install links and configs for Cursor, VS Code, Claude Code, Claude Desktop, and Codex, and you can merge several into one config with the stack builder.
- **Built to be reused.** You can pull the whole catalog as JSON into your own tools, agents, or dashboards.

If this list saves you time, please ⭐ star the repo. It helps other people find it.

## Quick Links

- [mcpHQ directory](https://mcphq.org/): search, filter, and install servers
- [Stack builder](https://mcphq.org/stack/): merge several servers into one client config
- [Use the data](#use-the-data): JSON API and LLM catalog files
- [LLM index](https://mcphq.org/llms.txt): short catalog index for agents
- [Listed on mcpHQ badge](#listed-on-mcphq-badge): for server maintainers
- [Official MCP Registry](https://registry.modelcontextprotocol.io/)
- [MCP Specification](https://modelcontextprotocol.io/specification/latest)
- [Reference Servers](https://github.com/modelcontextprotocol/servers)
- [Contributing Guide](CONTRIBUTING.md)

## Catalog

${toc}

${sections}

## Use the Data

The full catalog is published with every website deploy:

| File | URL |
| --- | --- |
| Servers | [\`https://mcphq.org/api/servers.json\`](https://mcphq.org/api/servers.json) |
| Categories | [\`https://mcphq.org/api/categories.json\`](https://mcphq.org/api/categories.json) |
| LLM index | [\`https://mcphq.org/llms.txt\`](https://mcphq.org/llms.txt) |
| LLM full catalog | [\`https://mcphq.org/llms-full.txt\`](https://mcphq.org/llms-full.txt) |

\`\`\`bash
curl -s https://mcphq.org/api/servers.json | jq '.[] | select(.official) | .name'
\`\`\`

The fields are described in [\`data/servers.schema.json\`](data/servers.schema.json). Please link back to this repo if you build on the data.

## Listed on mcpHQ Badge

If your server is in this catalog, you can add this badge to your README:

[![Listed on mcpHQ](https://img.shields.io/badge/Listed%20on-mcpHQ-8A2BE2)](https://github.com/mcpHQ/awesome-mcp-servers)

\`\`\`markdown
[![Listed on mcpHQ](https://img.shields.io/badge/Listed%20on-mcpHQ-8A2BE2)](https://github.com/mcpHQ/awesome-mcp-servers)
\`\`\`

## Quality Criteria

An entry is accepted if the server is:

- **Purposeful**: clear tools/resources for a real workflow
- **Discoverable**: public repo, docs, or registry listing
- **Maintainable**: recent activity or official backing
- **Safe to evaluate**: no obvious spam or impersonation

An entry is removed if its link stays broken, its repository is archived without a maintained successor, or it turns out to be misleading about what it does or who backs it.

## Contribute

Found a great MCP server? Read [CONTRIBUTING.md](CONTRIBUTING.md) and open a PR with an entry in \`data/servers.json\`.

Then regenerate the README and LLM catalog files:

\`\`\`bash
npm run generate
npm run validate
\`\`\`

See [site/README.md](site/README.md) for how the website is built and how to preview it locally.

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
