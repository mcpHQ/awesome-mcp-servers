# MCP Landscape

Interactive, searchable map of the curated MCP servers in this repo. Built with [CNCF Landscape2](https://github.com/cncf/landscape2).

**Live site:** [mcphq.github.io/awesome-mcp-servers](https://mcphq.github.io/awesome-mcp-servers)

## How it works

Catalog data in [`data/servers.json`](../data/servers.json) is the source of truth. The landscape is generated from that file — it is not edited by hand.

```
data/servers.json
       │
       ├─► scripts/generate-readme.mjs  → README.md
       │
       └─► scripts/fetch-logos.mjs
               │
               └─► scripts/generate-landscape.mjs  → landscape/data.yml (generated)
                       │
                       └─► landscape2 build  → landscape/build/ (generated)
                               │
                               └─► scripts/patch-landscape-search.mjs  → search + favicon patches
```

## Layout

| Path | Purpose |
| --- | --- |
| [`settings.yml`](settings.yml) | Site name, colors, header/footer, category groups |
| [`guide.yml`](guide.yml) | Guide tab content (intro + category blurbs) |
| [`logo.png`](logo.png) | Header logo and favicon |
| [`logos/`](logos/) | Per-server SVG logos (fetched + cached) |
| [`logo-map.json`](logo-map.json) | Logo source mapping used by `fetch-logos.mjs` |
| `data.yml` | Generated landscape data (gitignored) |
| `build/` | Generated static site (gitignored) |

## Prerequisites

[Landscape2](https://github.com/cncf/landscape2) is not on crates.io. Install one of:

```bash
brew install cncf/landscape2/landscape2
```

```bash
curl --proto '=https' --tlsv1.2 -LsSf \
  https://github.com/cncf/landscape2/releases/download/v1.1.0/landscape2-installer.sh | sh
```

Or use Docker (no local install):

```bash
npm run build-landscape:docker
```

## Commands

From the repo root:

```bash
# Full build: fetch logos → generate data.yml → landscape2 build → patch
npm run build-landscape

# Build with Docker
npm run build-landscape:docker

# Build for GitHub Pages (sets base_path to /awesome-mcp-servers)
npm run build-landscape:pages

# Preview locally (run after a build)
npm run serve-landscape
```

Generate only the YAML (no landscape2 required):

```bash
npm run generate-landscape
```

## Local preview

```bash
npm run build-landscape
npm run serve-landscape
```

Open the URL printed by `landscape2 serve` (usually `http://127.0.0.1:8000`).

## Adding or updating servers

1. Edit [`data/servers.json`](../data/servers.json) — see [CONTRIBUTING.md](../CONTRIBUTING.md).
2. Run validation and regenerate the README:

   ```bash
   npm run validate
   npm run generate
   ```

3. Rebuild the landscape:

   ```bash
   npm run build-landscape
   ```

Logos are fetched automatically from Simple Icons, GitHub avatars, or domain favicons. To force-refresh logos:

```bash
npm run fetch-logos
```

## Customizing the site

| Change | Edit |
| --- | --- |
| Site name, colors, tabs | [`settings.yml`](settings.yml) |
| Guide intro and category text | [`guide.yml`](guide.yml) |
| Header logo | Replace [`logo.png`](logo.png), keep path in `settings.yml` |
| Footer links / license text | `footer` section in [`settings.yml`](settings.yml) |

After editing `settings.yml` or `guide.yml`, rebuild:

```bash
npm run build-landscape
```

**Note:** Landscape2 appends `" Landscape"` to the foundation name in page titles. The `foundation` is set to `MCP` so the generated title is **MCP Landscape**, which is the correct display name.

## GitHub Pages

Build with the Pages base path, then deploy the contents of `landscape/build/`:

```bash
npm run build-landscape:pages
```

The `url` and `base_path` in [`settings.yml`](settings.yml) must match your Pages URL.

## Generated files (do not commit)

These are listed in [`.gitignore`](../.gitignore):

- `landscape/data.yml`
- `landscape/settings.build.yml`
- `landscape/build/`

Deploy `landscape/build/` via CI; do not check it into git.
