# mcpHQ website

The searchable directory at [landscape.mcphq.org](https://landscape.mcphq.org). It is a static site generated from [`data/servers.json`](../data/servers.json) by a zero-dependency Node script. There is no framework and no `npm install` step.

## What it builds

| Path | Page |
| --- | --- |
| `/` | Explorer with search, facet filters (backing, transport, category, language), sort, and grid or list view. Filters are kept in the URL. |
| `/servers/<slug>/` | One page per server with install links and configs for Cursor, VS Code, Claude Code, Claude Desktop, and Codex, plus related servers. |
| `/categories/` and `/categories/<id>/` | Category index and one page per category. |
| `/stack/` | Stack builder. Merges the hosted servers you picked into one config file, lists local ones, and shares the stack as a link. |
| `/developers/` | JSON API, `llms.txt`, and badge docs. |
| `/api/*.json`, `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/robots.txt` | Machine-readable outputs. |

Press `/` to search and `⌘K` (or `Ctrl K`) to jump to any server from any page.

## Commands

From the repo root:

```bash
# Build into site/dist/
npm run build-site

# Build and serve at http://localhost:4321
npm run dev

# Refresh cached logos in site/logos/ (needs network)
npm run fetch-logos
```

`SITE_URL` sets the canonical URL (default `https://landscape.mcphq.org`). `SITE_BASE_PATH` serves the site from a subpath, for example `/awesome-mcp-servers`.

## Layout

| Path | Purpose |
| --- | --- |
| [`../scripts/build-site.mjs`](../scripts/build-site.mjs) | Page templates and build |
| [`static/styles.css`](static/styles.css) | All styles |
| [`static/app.js`](static/app.js) | Explorer, command palette, stack builder, copy buttons |
| [`static/fluid.js`](static/fluid.js) | WebGL liquid-ripple hero background |
| [`static/connect.js`](static/connect.js) | Client config generators, shared by the build and the browser |
| [`logos/`](logos/) and [`logo-map.json`](logo-map.json) | Cached server logos. Servers without one get a generated monogram. |
| `dist/` | Build output (gitignored) |

## Deploy

[`.github/workflows/static.yml`](../.github/workflows/static.yml) refreshes logos, runs `npm run build-site`, and publishes `site/dist/` to GitHub Pages on every push to `main`.
