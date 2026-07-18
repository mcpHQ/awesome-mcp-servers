# Contributing to Awesome MCP Servers

Thanks for helping improve this catalog. This project keeps a curated list of MCP servers in `data/servers.json` and generates the README from that file.

## What belongs here

Add servers that are:

- Publicly available with a repo, docs page, or official registry listing
- Clearly scoped as MCP servers (not generic API wrappers without MCP support)
- Useful to researchers, developers, or teams evaluating MCP integrations
- Maintained or officially backed (avoid abandoned forks and spam listings)

## What to skip

- Duplicate mirrors of the same project
- Low-effort demos with no docs or clear purpose
- Projects impersonating official services
- Servers with no verifiable source or install path

## How to add an entry

1. Edit [`data/servers.json`](data/servers.json)
2. Add an object with these fields:

```json
{
  "name": "Example MCP Server",
  "url": "https://github.com/modelcontextprotocol/servers",
  "description": "One concise sentence describing what the server does.",
  "category": "developer-tools-and-code-intelligence",
  "language": "TypeScript",
  "provider": "Example Inc",
  "tags": ["github", "devtools"],
  "official": false
}
```

### Field guidelines

| Field | Required | Notes |
| --- | --- | --- |
| `name` | Yes | Human-readable project name |
| `url` | Yes | Primary repo, docs, or registry page |
| `description` | Yes | One sentence, factual, no hype |
| `category` | Yes | Must match an ID in `data/categories.json` |
| `language` | Yes | Primary implementation language |
| `provider` | Yes | Company, org, or `Community` |
| `tags` | Yes | 2–5 lowercase keywords |
| `official` | Yes | Boolean; use `true` only for official MCP or vendor-backed servers |

The machine-readable schemas are
[`data/servers.schema.json`](data/servers.schema.json) and
[`data/categories.schema.json`](data/categories.schema.json). They define
allowed fields, languages, tag formatting, and optional endpoint metadata.

## Category selection

Use the category that best matches the server's primary use case. If a server spans multiple areas, pick the most important workflow and use tags for the rest.

Available categories are defined in [`data/categories.json`](data/categories.json).

## PR checklist

- [ ] Entry added to `data/servers.json`
- [ ] No duplicate names or URLs
- [ ] Description is accurate and concise
- [ ] Category and tags are appropriate
- [ ] `official` accurately reflects whether the provider backs the server
- [ ] Ran `npm run validate`
- [ ] Ran `npm run generate`
- [ ] Ran `npm run check-generated`

## Validation

```bash
npm run validate
npm run generate
npm run check-generated
```

Validation checks required and unknown fields, field types, category validity,
language and tag formatting, duplicate names/URLs, endpoint metadata, and
minimum catalog size. Pull requests also check newly added or changed external
links.

## Code of conduct

Be respectful, cite sources accurately, and prefer quality over quantity.
