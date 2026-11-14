# Awesome MCP Servers

[![Servers](https://img.shields.io/badge/servers-784-brightgreen)](#catalog)
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
- **Structured data.** Every server has a category, language, provider, tags, and an official/community flag in [`data/servers.json`](data/servers.json). Repository, license, pricing, transport, auth, install command, and a verified date are recorded when known. The README, [`llms.txt`](llms.txt), [`llms-full.txt`](llms-full.txt), and the website are generated from that file.
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

- [Official and Reference Servers](#official-and-reference) (11)
- [Databases and Storage](#databases-and-storage) (19)
- [Developer Tools and Code Intelligence](#developer-tools-and-code-intelligence) (82)
- [Browsers, Search, and Web Automation](#browsers-search-and-web-automation) (74)
- [Filesystems and Documents](#filesystems-and-documents) (31)
- [Cloud and Infrastructure](#cloud-and-infrastructure) (34)
- [Communication and Productivity](#communication-and-productivity) (96)
- [AI, Agents, and Memory](#ai-agents-and-memory) (93)
- [Data, Analytics, and BI](#data-analytics-and-bi) (90)
- [Legal and Court Data](#legal-and-court-data) (10)
- [Security and Identity](#security-and-identity) (36)
- [Finance, Commerce, and Business Apps](#finance-commerce-and-business-apps) (168)
- [Utilities and Examples](#utilities-and-examples) (39)
- [Logistics and Shipping](#logistics-and-shipping) (1)

<a id="official-and-reference"></a>

## Official and Reference Servers

Reference implementations, SDKs, and core protocol tooling from the MCP ecosystem.

- **[MCP Everything](https://github.com/modelcontextprotocol/servers/tree/main/src/everything)** `Official` `TypeScript` — Reference server exposing prompts, resources, and tools for protocol testing. ([source](https://github.com/modelcontextprotocol/servers))  
  `reference` `testing` `official`
- **[MCP Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch)** `Official` `Python` — Fetch web content and convert HTML to markdown for LLM consumption. ([source](https://github.com/modelcontextprotocol/servers))  
  `reference` `web` `official`
- **[MCP Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)** `Official` `TypeScript` — Secure local filesystem access with configurable allowed directories. ([source](https://github.com/modelcontextprotocol/servers))  
  `reference` `filesystem` `official`
- **[MCP Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git)** `Official` `Python` — Read, search, and manipulate Git repositories through MCP tools. ([source](https://github.com/modelcontextprotocol/servers))  
  `reference` `git` `official`
- **[MCP Inspector](https://github.com/modelcontextprotocol/inspector)** `Official` `TypeScript` — Visual testing tool for debugging MCP server capabilities and messages.  
  `debugging` `testing` `official`
- **[MCP Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)** `Official` `TypeScript` — Knowledge graph memory for persistent entities and relationships. ([source](https://github.com/modelcontextprotocol/servers))  
  `reference` `memory` `official`
- **[MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)** `Official` `Python` — Official Python SDK for building MCP servers and clients.  
  `sdk` `python` `official`
- **[MCP Registry](https://github.com/modelcontextprotocol/registry)** `Official` `Go` — Official MCP registry service and API for discovering publicly available MCP servers.  
  `registry` `discovery` `official`
- **[MCP Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)** `Official` `TypeScript` — Structured step-by-step reasoning tool for complex problem solving. ([source](https://github.com/modelcontextprotocol/servers))  
  `reference` `reasoning` `official`
- **[MCP Time](https://github.com/modelcontextprotocol/servers/tree/main/src/time)** `Official` `Python` — Time and timezone conversion utilities for agents and assistants. ([source](https://github.com/modelcontextprotocol/servers))  
  `reference` `time` `official`
- **[MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)** `Official` `TypeScript` — Official TypeScript SDK for building MCP servers and clients.  
  `sdk` `typescript` `official`

<a id="databases-and-storage"></a>

## Databases and Storage

Query, manage, and explore databases, vector stores, and data warehouses.

- **[Chroma MCP Server](https://github.com/chroma-core/chroma-mcp)** `Official` `Python` — Vector search and embedding storage with Chroma collections.  
  `vector` `embeddings` `rag`
- **[DBHub](https://github.com/bytebase/dbhub)** `Official` `Go` — Universal database gateway supporting PostgreSQL, MySQL, SQL Server, SQLite, and MariaDB.  
  `sql` `postgres` `mysql`
- **[Dynobase MCP Server](https://dynobase.dev/dynamodb-mcp-server/)** `Official` `TypeScript` — Local MCP server in the Dynobase DynamoDB desktop app that lets AI clients list tables, read schemas and run queries through existing AWS profiles, read-only by default.  
  `dynamodb` `aws` `nosql` `partiql` `read-only`
- **[Elasticsearch MCP Server](https://github.com/elastic/mcp-server-elasticsearch)** `Official` `TypeScript` — Search and analyze data in Elasticsearch clusters via MCP.  
  `search` `analytics` `elastic`
- **[HutchDB MCP Server](https://github.com/ExpeditedProjects/hutchdb)** `Official` `TypeScript` — Shared database for teams and AI agents: store, query, and update structured records over MCP.  
  `database` `postgres` `structured-data` `collaboration`
- **[MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server)** `Official` `TypeScript` — Query and manage MongoDB databases and collections from AI clients.  
  `mongodb` `nosql` `documents`
- **[MotherDuck MCP Server](https://github.com/motherduckdb/mcp-server-motherduck)** `Official` `Python` — Run analytical SQL queries against local DuckDB files and MotherDuck cloud databases.  
  `analytics` `sql` `olap`
- **[Neon MCP Server](https://github.com/neondatabase/mcp-server-neon)** `Official` `TypeScript` — Manage Neon Postgres databases, branches, and SQL queries via MCP.  
  `postgres` `serverless` `sql`
- **[Nhost MCP Server](https://github.com/nhost/nhost/tree/main/cli)** `Official` `Go` — Official Nhost MCP server, bundled with the Nhost CLI, that lets AI agents read your GraphQL schema, run the queries you allow, and manage permissions and migrations. ([source](https://github.com/nhost/nhost))  
  `postgres` `graphql` `backend`
- **[pgwarden](https://github.com/B0yko/pgwarden)** `Python` — Self-hosted PostgreSQL MCP gateway with OIDC login, per-user database roles, read-only queries, human-approved writes, and audit logging.  
  `postgresql` `oidc` `access-control` `approvals` `audit`
- **[Pinecone MCP Server](https://github.com/pinecone-io/pinecone-mcp)** `Official` `TypeScript` — Manage Pinecone indexes and run semantic vector queries.  
  `vector` `search` `rag`
- **[PlanetScale MCP Server](https://planetscale.com/docs/connect/mcp)** `Official` `TypeScript` — Manage PlanetScale MySQL databases, branches, and schema changes.  
  `mysql` `serverless` `sql`
- **[Prisma MCP Server](https://www.prisma.io/docs/ai/tools/mcp-server)** `Official` `Other` — Manage Prisma Postgres databases, Prisma Compute deployments, and Object Storage from AI tools through a remote MCP server.  
  `postgres` `sql` `serverless` `remote`
- **[Qdrant MCP Server](https://github.com/qdrant/mcp-server-qdrant)** `Official` `Python` — Store and retrieve vectors in Qdrant for RAG workflows.  
  `vector` `search` `rag`
- **[Redis MCP Server](https://github.com/redis/mcp-redis)** `Official` `Python` — Read and write Redis keys, lists, and data structures through MCP.  
  `redis` `cache` `kv`
- **[RowSafe](https://github.com/rowsafe/rowsafe)** `Official` `Go` — Database health, backups, recovery and provisioning via local stdio or remote Streamable HTTP; requires a RowSafe account for the separate hosted service, with an Apache-2.0 agent, CLI and MCP server.  
  `postgresql` `backups` `migrations`
- **[Snowflake MCP Server](https://github.com/Snowflake-Labs/mcp)** `Official` `Python` — Query Snowflake warehouses and manage data platform resources.  
  `warehouse` `sql` `analytics`
- **[SQLite MCP Server](https://github.com/ktanaka101/mcp-server-duckdb)** `Python` — Lightweight SQLite database access for local development workflows.  
  `sqlite` `local` `sql`
- **[Supabase MCP Server](https://github.com/supabase-community/supabase-mcp)** `TypeScript` — Community-maintained integration for Supabase projects, tables, and auth through MCP tools.  
  `postgres` `backend` `sql`

<a id="developer-tools-and-code-intelligence"></a>

## Developer Tools and Code Intelligence

Repositories, CI/CD, observability, and coding workflows for software teams.

- **[Harness MCP Server](https://github.com/harness/mcp-server)** `Official` `TypeScript` — Official Harness.io MCP server for CI/CD pipelines, deployments, GitOps, and platform engineering workflows.  
  `harness` `cicd` `devops`
- **[Agent QA](https://github.com/vostride/agent-qa)** `Official` `TypeScript` — Run natural-language web and mobile regression tests with persistent test memory through CLI and MCP interfaces.  
  `testing` `regression` `browser` `mobile` `mcp`
- **[agent-chain-doctor](https://github.com/elfovo/agent-chain-doctor)** `Python` — Read-only diagnostic that inspects the scheduler config (launchd, cron, systemd) and trace files of a scheduled AI agent and reports which of 30 silent-failure modes it is exposed to.  
  `scheduled-agents` `diagnostics` `launchd` `cron` `claude-code`
- **[AgentSandboxes](https://agentsandboxes.fyi)** `TypeScript` — Search an index of cloud sandbox providers for AI agents: isolation, cold start, persistence, GPU support and pricing, each fact linked to its source.  
  `sandboxes` `agents` `developer-tools` `directory`
- **[AgentTask Atlas](https://agenttaskatlas.com/mcp)** `Official` `TypeScript` — Read-only, no-auth search over a curated catalog of MCP servers and Agent Skills organized by dev task, each with a one-line verdict, install command and source link.  
  `directory` `discovery` `devtools` `remote`
- **[anylocale](https://anylocale.com/mcp)** `Official` `TypeScript` — Hosted OAuth MCP server for iOS and Android app localization: per-locale coverage, missing strings, glossary-aware AI drafts, placeholder and length checks, and .xcstrings, .strings and strings.xml push and pull.  
  `localization` `translation` `ios` `android` `remote`
- **[API.market MCP Gateway](https://api.market/mcp)** `Official` `TypeScript` — Proprietary hosted OAuth gateway with five tools for API discovery, schemas, execution, usage and subscriptions; free tiers and paid plans vary by API.  
  `api` `gateway` `oauth` `hosted`
- **[app-console-mcp](https://github.com/Alekla0126/app-console-mcp)** `Python` — Manage Google Play Console, App Store Connect and AdMob through their official APIs: listings, reviews, releases, rollouts, vitals and ad reports, with every change a dry run by default.  
  `google-play` `app-store-connect` `admob` `mobile` `local-stdio`
- **[Apple Docs 2.0 MCP](https://github.com/mishafyi/Apple-Docs-2.0-MCP)** `TypeScript` — Searches and reads Apple's developer documentation, Human Interface Guidelines and 1,700 WWDC sessions with code, with an offline index of 336,629 pages.  
  `apple` `ios` `swift` `documentation` `wwdc`
- **[AppScreen](https://appscreen.pro)** `Official` `TypeScript` — Build App Store and Google Play screenshots in the AppScreen browser editor: slides, device frames, text, app screenshots, backgrounds, export and share links, over remote Streamable HTTP with OAuth 2.1 (Pro plan).  
  `app-store` `google-play` `screenshots` `remote` `oauth`
- **[AsItIs](https://github.com/Katta041/asitis-agent-tools)** `Official` `TypeScript` — Read-only server that lints CLAUDE.md, AGENTS.md and SKILL.md against vendor rules, estimates the tokens they load per session, and flags hidden instructions such as comments addressed to the AI and invisible Unicode.  
  `claude-md` `agents-md` `linting` `prompt-injection` `markdown`
- **[ax](https://github.com/Necmttn/ax)** `TypeScript` — Local-first MCP server for querying coding-agent sessions, tool calls, skills, and costs.  
  `observability` `coding-agents` `costs`
- **[Babelize MCP](https://docs.babelize.co/integrations/mcp-server)** `Official` `TypeScript` — Analyzes a codebase for i18n readiness, wires hardcoded strings to next-intl or react-i18next, translates locale files and QA-checks translations, running locally from the coding agent.  
  `i18n` `localization` `translation` `react` `nextjs`
- **[behave](https://github.com/emirmrkaljevic/behave)** `Go` — Record how a CLI behaves as golden tests and diff a rewrite. Local Go CLI and MCP server.  
  `testing` `cli` `compatibility` `golden-tests`
- **[Bestax](https://github.com/allxsmith/bestax/tree/main/bestax-mcp)** `Official` `TypeScript` — Build Bulma v1 React apps with Bestax using an offline index of its component props, examples, CSS variables and Agent Skills. ([source](https://github.com/allxsmith/bestax))  
  `bulma` `react` `typescript` `components` `local`
- **[Buddy MCP Server](https://buddy.works/docs/ai-agents/mcp)** `Official` `Other` — Official remote MCP server for Buddy: run and monitor pipelines, manage sandboxes, environments, artifacts, domains, and Git repositories from AI agents.  
  `sandbox` `pipelines` `deployments` `git` `remote`
- **[Chain.Love MCP](https://github.com/Chain-Love/chain.love-mcp)** `Official` `Other` — Hosted MCP gateway for searching and comparing Web3 infrastructure services, such as RPC, indexing, and oracle providers, by blockchain network.  
  `web3` `infrastructure` `discovery` `remote`
- **[Coding Tools MCP](https://github.com/mybolide/coding-tools-mcp)** `Rust` — Rust + Tauri 2 desktop app that turns a local project into an MCP workspace for AI agents: file read/edit, command and test execution, Git status, and project-local history sessions that restore context in a new conversation.  
  `desktop` `tauri` `workspace` `local`
- **[Communicate](https://developer.communicate.so/docs/mcp)** `Official` `TypeScript` — List workspace AI agents through a read-only hosted Streamable HTTP MCP server authenticated with OAuth client credentials.  
  `agents` `customer-support` `remote` `oauth`
- **[Concord MCP](https://github.com/Get-Concord-AI/concord-mcp)** `Official` `TypeScript` — Local-first shared work-state for coding agents with presence, claims, messaging, handoffs, and review packets.  
  `coding-agents` `coordination` `local-first`
- **[Constitution Lint MCP Server](https://github.com/joeyycli/constitution-lint-action)** `Python` — Lints CLAUDE.md-style AI agent constitution files for missing operational guardrails: spend limits, injection defense, escalation paths, and secrets handling.  
  `agents` `guardrails` `linting` `ci-cd` `safety`
- **[ContactLint](https://contactlint.com)** `Official` `TypeScript` — Validate email syntax, DNS/MX over DoH, disposable domains, role addresses and typos, plus E.164 phone numbers via HTTP API and remote MCP, with no SMTP probing.  
  `email-validation` `phone-validation` `data-validation` `crm` `remote`
- **[Context7 MCP](https://github.com/upstash/context7)** `Official` `TypeScript` — Up-to-date library and framework documentation injected into prompts.  
  `docs` `libraries` `coding`
- **[ContextManager](https://github.com/nushey/ContextManager)** `C#` — Extracts structural C# context with Roslyn and builds an incremental knowledge graph of .NET solutions for AI coding agents.  
  `csharp` `dotnet` `roslyn` `code-analysis`
- **[Docker MCP Server](https://github.com/docker/mcp-gateway)** `Official` `Go` — Manage containers, images, and Docker environments through MCP.  
  `containers` `devops` `docker`
- **[Docsy](https://github.com/getremcp/docsy-plugin)** `Official` `TypeScript` — Retrieve version-specific developer documentation and original source links through five read-only remote MCP tools.  
  `documentation` `developer-tools` `versions` `oauth` `remote`
- **[E2B MCP Server](https://docs.e2b.dev/mcp)** `Official` `Other` — Secure cloud sandboxes with a built-in MCP gateway for running code and MCP tools in agent workflows.  
  `sandbox` `code-execution` `agents`
- **[eda-agent](https://github.com/salitronic/eda-agent)** `Official` `Python` — Drives a live Altium Designer session, with KiCad and EasyEDA Pro backends, through about 600 schematic, PCB, library and project tools.  
  `eda` `pcb` `altium` `kicad` `electronics`
- **[ERIUS PHONE MCP](https://github.com/Protremix/erius-phone-mcp)** `Official` `Python` — Drive an ERIUS PHONE hosted Android phone or tablet: read the screen, tap, type, swipe, launch apps, install APKs, and pull crash logs.  
  `android` `mobile` `testing` `automation`
- **[Flare](https://flareapp.io/docs/flare/general/our-mcp-server)** `Official` `PHP` — Investigate, resolve, snooze and assign errors, search logs, and find slow routes, queries and jobs in Flare, Spatie's error tracking and performance monitoring for Laravel and PHP.  
  `error-tracking` `observability` `laravel` `php` `oauth`
- **[genesis-blackbox](https://github.com/johannschiffer/genesis-blackbox)** `Python` — Deterministic runtime flight recorder, AST blast-radius analyzer, and causal crash compiler for AI-assisted engineering.  
  `debugging` `devtools` `python` `typescript` `testing`
- **[GitHub MCP Server](https://github.com/github/github-mcp-server)** `Official` `Go` — Official GitHub integration for repos, issues, pull requests, and code search.  
  `github` `git` `ci-cd`
- **[GitLab MCP Server](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/)** `Official` `Ruby` — GitLab Duo MCP server for merge requests, issues, and project management.  
  `gitlab` `devops` `issues`
- **[GodotMCP](https://github.com/vberai/godot-mcp)** `Official` `GDScript` — A secure, 100% native GDScript Server-Sent Events (SSE) server bridging Claude, Cursor, and Windsurf directly to Godot 4.x scene trees. No Node.js or C# dependencies required.  
  `godot` `developer-tools` `code-intelligence` `claude` `cursor`
- **[installed-api](https://github.com/ajwann/installed-api)** `Python` — Answers API questions from the packages installed in the project: Python signatures, docstrings and source from the project's interpreter, TypeScript declarations from node_modules, and installed versions.  
  `python` `typescript` `api-docs` `claude-code`
- **[IntlPull MCP Server](https://intlpull.com/docs/mcp)** `Official` `TypeScript` — Manage translation keys, translate strings, and sync localization files with IntlPull from MCP clients.  
  `localization` `translation` `i18n` `developer-tools`
- **[ipvolt Proxy Toolkit](https://github.com/ipvolt/proxy-toolkit-mcp)** `Official` `TypeScript` — Search reviewed proxy guides, generate tested proxy configuration templates for curl, Requests, HTTPX and Playwright, and diagnose proxy errors such as a 407 on CONNECT or a TLS failure.  
  `proxy` `networking` `troubleshooting` `remote`
- **[Iris Code](https://www.iriscode.co/mcp)** `Official` `TypeScript` — Local code-quality rules, findings, preview-first safe fixes, refactor verification and gate results for coding agents.  
  `code-quality` `static-analysis` `refactoring` `security` `local`
- **[Kilobat CLI](https://github.com/seifip/kilobat-cli)** `Official` `Swift` — Mac network monitoring and diagnostics through a local stdio MCP server.  
  `macos` `network` `diagnostics`
- **[Kleap](https://github.com/kleaphq/cli)** `Official` `JavaScript` — Create, edit, and publish websites from AI clients through a hosted MCP server.  
  `websites` `publishing` `cli` `agents`
- **[Kubernetes MCP Server](https://github.com/Flux159/mcp-server-kubernetes)** `TypeScript` — Operate Kubernetes clusters with kubectl-style MCP tools.  
  `kubernetes` `devops` `cloud`
- **[Latchkey](https://latchkey.dev/documentation/connect-your-ai-agent)** `Official` `Other` — Official hosted MCP server for Latchkey's self-healing GitHub Actions runners: failure bundles with root cause and logs, run status, workflow dispatch, and one-off commands on fresh ephemeral runners.  
  `ci-cd` `github-actions` `devops` `hosted` `remote`
- **[Linear MCP Server](https://linear.app/docs/mcp)** `Official` `TypeScript` — Create and manage Linear issues, projects, and team workflows.  
  `issues` `project-management` `product`
- **[link-check-lite](https://github.com/tidybytetools/link-check-lite)** `Python` — Checks a list of web links and reports each status code, final URL and redirect chain.  
  `links` `http` `seo`
- **[LynxPrompt MCP Server](https://github.com/GeiserX/lynxprompt-mcp)** `Official` `Go` — Browse, search, create and update LynxPrompt AI configuration blueprints (AGENTS.md, CLAUDE.md) on lynxprompt.com or a self-hosted instance.  
  `agents-md` `prompts` `ai-rules`
- **[Mac MCP](https://github.com/bulutarkan/mac-mcp)** `Python` — Local-first macOS MCP server for controlling browser tabs, Mac apps, files and terminal.  
  `macos` `browser-automation` `desktop-automation` `agents` `local`
- **[MaxiBestOf](https://github.com/luminous8/maxibestof-mcp)** `Official` `Other` — Search website designs, UI sections, fonts, palettes, and design profiles. Requires MaxiBestOf Pro.  
  `design` `websites` `fonts` `remote` `oauth`
- **[MCP Production Kit](https://github.com/A7mdMe/mcp-production-kit)** `TypeScript` — Enterprise TypeScript starter kit for building production MCP servers with dual stdio/SSE transports, SSRF defense, memory store, and Docker support.  
  `boilerplate` `starter-kit` `docker` `security` `developer-tools`
- **[mcp-pool](https://github.com/yuzu-octopus/mcp-pool)** `TypeScript` — MCP Key Pool Proxy — pool multiple API keys across upstream MCP servers to distribute rate limits. One subprocess per pool, lazy failover, per-key cooldown.  
  `mcp` `proxy` `pool` `api-keys` `rate-limiting`
- **[mcp-probe-kit](https://github.com/mybolide/mcp-probe-kit)** `TypeScript` — Spec-driven dev workflow MCP server: start_feature/start_bugfix orchestration, resumable plans, a converge gate requiring requirements, spec, test and review evidence, and cross-session history. Install with npx -y mcp-probe-kit@latest.  
  `spec-driven-development` `workflow` `coding-agents` `npm`
- **[mcpserverlist-mcp](https://github.com/sudomichael/mcpserverlist-mcp)** `Official` `TypeScript` — Check if your MCP server is ready for MCP directories, then get it submitted and keep every listing up to date.  
  `developer-tools` `directory-submission` `remote`
- **[Mobile Joe](https://docs.mobilejoe.dev/mcp/)** `Official` `Ruby` — Hosted server to manage a mobile app's FAQs, translations, feature plans and in-app alerts; OAuth with per-app permissions, Mobile Joe account required (14-day free trial).  
  `mobile` `ios` `android` `faq` `remote`
- **[Moltline Studio](https://github.com/GarphenGate/moltline-mcp)** `Official` `Python` — 22 hosted MCP servers: code review, MCP config audits, SKILL.md linting and OR-Tools solvers; 110 tools need no API key.  
  `code-review` `mcp-governance` `skill-md` `remote`
- **[NAIF Gravity](https://naifgravity.com)** `Official` `Other` — Hosted MCP diagnostics for API authentication, webhooks, and AI-agent integration failures, with bounded repair workflows based on sanitized evidence; free triage and optional paid repairs.  
  `diagnostics` `api` `auth` `webhooks` `remote`
- **[Nicelydone](https://github.com/nicelydoneapp/mcp)** `Official` `Other` — Search web app screens, UI elements, and user flows for design research. Requires Nicelydone Premium.  
  `design` `ui` `ux` `remote` `oauth`
- **[Oh My Android](https://github.com/ateymoori/oh-my-android)** `Swift` — Native macOS app with a built-in MCP server that lets AI agents see and drive the Android Emulator and adb devices: screenshots, UI tree in dp, taps, logcat, dark mode, font scale, and locale.  
  `android` `emulator` `mobile` `testing`
- **[Openhook](https://github.com/openhook-dev/openhook-inbox)** `Official` `Python` — Open-source webhook inbox for AI agents to capture callbacks, inspect payloads, and wait for events over MCP; hosted or self-hosted, with private per-inbox access tokens.  
  `webhooks` `testing` `callbacks` `agents`
- **[OverlayQA](https://github.com/OverlayQA/mcp)** `Official` `TypeScript` — Runs WCAG accessibility (axe-core), color-contrast and design-token audits on any public URL and files the findings as QA issues in OverlayQA.  
  `accessibility` `wcag` `design-qa` `qa` `issue-tracking`
- **[Persqo](https://github.com/YaakovTzedek/persqo-mcp)** `Official` `JavaScript` — AI personas test a web app in a real browser and return findings and fix prompts; start runs, read findings, and pull fix prompts from MCP clients.  
  `testing` `qa` `usability` `remote`
- **[POSH](https://github.com/skatkov/posh-mcp)** `Official` `Go` — Search and read local Ruby and gem documentation matched to project versions; proprietary POSH agent-tools license required.  
  `ruby` `rails` `documentation` `local` `stdio`
- **[Postman MCP Server](https://github.com/postmanlabs/postman-mcp-server)** `Official` `TypeScript` — Explore and run Postman collections and API workflows from AI clients.  
  `api` `testing` `http`
- **[REA](https://github.com/morluto/rea)** `TypeScript` — Local CLI and MCP server for agent-assisted reverse engineering of native binaries, JavaScript/Electron apps, and .NET assemblies.  
  `reverse-engineering` `binary-analysis` `devtools`
- **[Reflex Computer Use](https://github.com/8itlab/reflex-computer-use)** `Python` — Control macOS and Windows desktops, including remote Windows over SSH, using accessibility trees and Jev for element selection and action verification.  
  `computer-use` `desktop-automation` `jev` `macos` `windows`
- **[ReMCP](https://github.com/getremcp/remcp)** `Official` `TypeScript` — Securely access computers explicitly paired to your account through a hosted OAuth MCP connection, including state-changing file, terminal, browser, and desktop tools.  
  `computer-use` `desktop-automation` `terminal` `browser` `oauth`
- **[RoboPartPicker](https://github.com/brainbook0/robopartpicker-mcp)** `Official` `TypeScript` — Source-linked catalogue of open-source robotics projects, components and bills of materials, with a per-line evidence state (verified, probable, unresolved).  
  `robotics` `bill-of-materials` `components` `hardware`
- **[RoboParts](https://github.com/lm203688/roboparts)** `Official` `JavaScript` — Vendor-neutral robot hardware compatibility checker across 868 entities with three-state verdicts and ISO 9409-1 flange anchor.  
  `robotics` `hardware` `compatibility` `industrial` `iso-9409-1`
- **[Rystic](https://www.rystic.ai/docs/mcp-server)** `Official` `Go` — Start, seed, clock, inspect and diff local stateful simulators of real APIs such as GitHub and Stripe, so agents can be tested without touching live accounts.  
  `testing` `simulators` `api-mocking` `agents`
- **[SanctionsKit Developer MCP](https://www.sanctionskit.com/resources/mcp)** `Official` `Other` — Public SanctionsKit documentation, API schemas, and request validation, with authenticated synthetic sandbox tools for building sanctions screening integrations.  
  `api` `documentation` `sanctions` `sandbox`
- **[Semgrep MCP Server](https://github.com/semgrep/semgrep/tree/develop/cli/src/semgrep/mcp)** `Official` `Python` — Run static analysis and security scans on codebases via Semgrep. ([source](https://github.com/semgrep/semgrep))  
  `security` `sast` `code-quality`
- **[Sentry MCP Server](https://docs.sentry.io/product/sentry-mcp/)** `Official` `TypeScript` — Investigate errors, releases, and performance issues in Sentry.  
  `observability` `errors` `monitoring`
- **[SFXMint](https://github.com/flreey/sfxmint-mcp)** `Official` `TypeScript` — Find CC0 sound effects by event, set or description and retrieve audio URLs without a key; optional custom generation requires a key and paid pass or plan.  
  `audio` `sound-effects` `remote` `cc0`
- **[SheetsData](https://sheetsdata.com)** `Official` `Python` — Electronic component datasheets for AI agents: pinouts, specs, package info and design checks from manufacturer PDFs, with part search across JLCPCB, Mouser and DigiKey; hosted, OAuth or API key, paid per call.  
  `electronics` `datasheets` `hardware` `embedded` `remote`
- **[SkillDB](https://github.com/devchad-cmd/skilldb-sdk)** `Official` `TypeScript` — Search reusable AI agent skills through an installable TypeScript MCP server; full skill content requires a Pro or Studio account.  
  `agent-skills` `developer-tools` `search`
- **[Sourcegraph Cody MCP](https://sourcegraph.com/docs/api/mcp)** `Official` `TypeScript` — Code intelligence and search across large codebases with Cody.  
  `code-search` `ai` `enterprise`
- **[Spinnaker MCP Server](https://github.com/GeiserX/spinnaker-mcp)** `Go` — Read and operate a Spinnaker instance through its Gate API: 37 tools for applications, pipelines, executions, deployment strategies, and infrastructure, plus a read-only toolset.  
  `spinnaker` `continuous-delivery` `devops`
- **[SrcLog](https://github.com/srclogcom/srclog-mcp)** `Official` `PHP` — Search open-source GitHub repositories, find alternatives to any project, browse curated topics, and rank top developers and organizations by language and country.  
  `github` `open-source` `search` `developer-rankings` `alternatives`
- **[Tavero](https://github.com/baccaraaa/tavero)** `TypeScript` — Scans a running React 19 app (Vite or Next.js) for UI drift in buttons, cards, colors, and spacing, and returns fixes with file and line references to the coding agent.  
  `react` `ui-consistency` `design-system` `frontend`
- **[TreeHarbor MCP](https://github.com/ArtAndrew/TreeHarbor/blob/v0.1.19-alpha.1/docs/mcp.md)** `Official` `Rust` — Read files at a pinned Git revision and submit changes that survive workspace cleanup through a local TreeHarbor service. ([source](https://github.com/ArtAndrew/TreeHarbor))  
  `git` `source-control` `coding-agents`
- **[UI Verify MCP Server](https://uiverify.ai/docs/triage-with-your-agent)** `Official` `TypeScript` — Review a pull request's visual diffs, read the AI judge's verdict on each change, and accept new baselines in UI Verify from a coding agent.  
  `visual-testing` `testing` `code-review` `api-key` `remote`
- **[Vibe Monitor](https://github.com/tubban1/vibe-monitor)** `JavaScript` — Local architecture checkpoints for AI coding agents; read-only source analysis and practical advice (Node 22+; default-on pseudonymous telemetry, required for Free analysis).  
  `architecture` `code-quality` `ai-coding` `local`
- **[vibe-testing](https://github.com/AishwaryShrivastav/vibe-testing)** `TypeScript` — Scan web app routes and forms, run Playwright browser checks, and produce HTML QA reports through a local MCP server.  
  `testing` `browser` `playwright` `qa` `mcp`
- **[xmcp](https://xmcp.dev)** `Official` `TypeScript` — Search the xmcp TypeScript MCP framework documentation through a public read-only MCP server.  
  `documentation` `search` `typescript`

<a id="browsers-search-and-web-automation"></a>

## Browsers, Search, and Web Automation

Browse the web, scrape content, search, and automate browser interactions.

- **[2Captcha MCP](https://github.com/2captcha/2captcha-mcp)** `Official` `JavaScript` — Scrape pages past anti-bot protection, parse marketplaces into JSON, automate a browser, and solve CAPTCHAs.  
  `scraping` `web` `browser-automation` `captcha`
- **[402registry](https://402registry.com)** `Official` `TypeScript` — Remote MCP server (streamable HTTP, no key) to look up whether AI crawlers can see a website, with prices, docs and service status; the paid check ($0.01 over x402) stays plain HTTP.  
  `ai-crawlers` `robots` `seo` `remote`
- **[agbrowser](https://agbrowser.shveik.dev)** `Official` `Go` — Hosted browser sessions for agents: navigate, interact, read pages and take screenshots. Session purchases and extensions use stablecoins over x402 or MPP on Base; browser operations use session credentials.  
  `browser-automation` `x402` `remote`
- **[agdata](https://agdata.shveik.dev)** `Official` `Go` — Pay-per-call web data for agents: any URL as Markdown, screenshots, YouTube transcripts and comments, Maps and Amazon reviews, jobs, news, search; paid with x402 stablecoins, no API key.  
  `web-scraping` `x402` `markdown` `remote`
- **[Agent Browser Use](https://github.com/cavaldos/agent-browser-use)** `Go` — Let AI coding agents drive a real browser over MCP (Playwright-style element refs) while you watch every step live in a web viewer and take over at any time.  
  `browser-automation` `mcp` `chrome` `live-viewer`
- **[AgentRender](https://github.com/corbinvachal48/agentrender-mcp)** `Official` `Python` — Turns a URL into a screenshot, PDF, or structured extract (title, text, links) via a hosted render API. Local `uvx agentrender-mcp` or remote endpoint; free API key, no card.  
  `screenshot` `pdf` `web-extraction` `remote`
- **[AgentSearch](https://github.com/agentsearchhq-coder/agentsearch-mcp)** `Official` `TypeScript` — Web search, URL-to-Markdown, JS render, and search_and_read for agents. Free keyless search (25/day per IP) plus an extract/render trial; paid via direct x402 on Base ($0.008/$0.007/$0.010/$0.015). `npx -y @agentsearchhq/agentsearch-mcp`.  
  `web-search` `web-extraction` `markdown` `rendering`
- **[agproxy](https://agproxy.shveik.dev)** `Official` `Go` — Pay-per-call residential proxy traffic and raw fetch for agents, with country targeting and sticky sessions; paid with x402 stablecoins, no API key.  
  `proxy` `residential-proxy` `x402` `remote`
- **[AI Resources](https://github.com/Drix10/ai-resources/tree/main/mcp)** `Official` `JavaScript` — Search and read dated AI news briefings on model releases, dev tools, funding rounds and research, each linking to the original post; no API key. ([source](https://github.com/Drix10/ai-resources))  
  `ai-news` `search` `research` `citations`
- **[AI观潮 News MCP](https://aiguanchao.com/en/agent)** `Official` `Go` — Curated AI news, daily briefs, trending stories and an LLM leaderboard; summaries in Chinese with source links. Needs a personal token (free daily quota).  
  `news` `ai-news` `chinese` `remote`
- **[Allscreenshots](https://github.com/allscreenshots/allscreenshots-plugin)** `Official` `Python` — Captures website screenshots, runs bulk captures, and manages screenshot schedules and history via the Allscreenshots API; available as a local Python server or a remote endpoint.  
  `screenshot` `web-capture` `remote`
- **[Apify MCP Server](https://github.com/apify/apify-mcp-server)** `Official` `TypeScript` — Run Apify Actors and extract web datasets at scale.  
  `scraping` `actors` `data`
- **[Arcmira: YouTube Transcript Search](https://arcmira.com/docs/mcp-server)** `Official` `Other` — YouTube transcript search and monitoring for your AI: exact quotes, full transcripts and speakers.  
  `youtube` `transcripts` `search` `speakers` `research`
- **[Awesome Tools](https://awesome.tools)** `Official` `TypeScript` — Search curated SaaS and AI tools, browse categories and tags, submit a product, and verify backlink badges. ([source](https://github.com/Illyism/awesome-tools-mcp))  
  `search` `directory` `saas` `ai-tools` `remote`
- **[Baizhi Cloud Agent Toolkit](https://github.com/chaitin/baizhi-agent-toolkit)** `Official` `Other` — Hosted web search, page reading and structured extraction over Streamable HTTP; the hosted backend source is closed, this repository contains MIT configs, docs and tests, and access needs your own API key and may consume credits.  
  `search` `web` `hosted`
- **[Baizhi Cloud Browser (CapyBrowser)](https://github.com/chaitin/baizhi-cloud-browser)** `Official` `Other` — Manage cloud browser sessions, saved profiles, human handoff and downloads via hosted MCP; page actions require a CDP client, and a Baizhi API key and paid browser runtime apply.  
  `browser` `remote` `session-management`
- **[BGPT MCP](https://bgpt.pro/mcp/)** `Python` — Search full-text scientific papers and return structured evidence for research agents.  
  `search` `research` `science` `literature`
- **[Bowmark](https://github.com/bowmark-ai/mcp)** `Official` `Python` — Remote MCP server that gives agents typed, tested functions for live websites such as LinkedIn, YouTube, Amazon and flight search.  
  `web-data` `websites` `remote` `agents`
- **[Brave Search MCP Server](https://github.com/brave/brave-search-mcp-server)** `Official` `TypeScript` — Privacy-focused web and local search through the Brave Search API.  
  `search` `privacy` `web`
- **[Browser MCP](https://github.com/browsermcp/mcp)** `Official` `TypeScript` — Automate a local Chrome browser from MCP-compatible AI clients.  
  `chrome` `local` `automation`
- **[Browser Use MCP Server](https://docs.browser-use.com/cloud/guides/mcp-server)** `Official` `Python` — Hosted MCP server that runs browser agent tasks in Browser Use stealth cloud browsers and returns results, sessions, and saved browser profiles.  
  `browser` `cloud` `automation` `agents`
- **[browser-buddy](https://github.com/hahahahahahahahah6/browser-buddy)** `Python` — MCP server plus Chrome extension that lets coding agents read the user's real, logged-in browser pages.  
  `chrome` `browser-automation` `local`
- **[Browserbase MCP Server](https://github.com/browserbase/mcp-server-browserbase)** `Official` `TypeScript` — Cloud browser automation for navigation, scraping, and form filling.  
  `browser` `cloud` `automation`
- **[BusyBee](https://github.com/danfeistar/busybee-mcp)** `Python` — Hosted remote MCP server for public social media data across TikTok, Instagram, YouTube, X, Douyin and Xiaohongshu: search posts and creators, read post detail, pull comments and comment insights, and read trending topics.  
  `social-media` `remote` `tiktok` `instagram` `youtube`
- **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** `Official` `TypeScript` — Control and inspect Chrome through DevTools protocol for debugging and automation.  
  `chrome` `devtools` `debugging`
- **[CloakBrowser MCP](https://github.com/swimmwatch/cloakbrowser-mcp)** `TypeScript` — Runs upstream Playwright MCP with CloakBrowser Chromium, preserving its browser tools and adding bridge diagnostics.  
  `browser-automation` `playwright` `chromium` `stdio`
- **[Cluefinch MCP](https://github.com/cluefinch/mcp-server)** `Official` `Python` — Local-first MCP server for AI-agent web research with search, incremental page reading, link navigation, and multi-source evidence collection.  
  `deep-research` `web-search` `research` `ai-agents` `local-first`
- **[CodeTrendy](https://codetrendy.com/mcp)** `Official` `TypeScript` — Read-only MCP server for the CodeTrendy startup discovery directory: search 682 listed websites, SaaS and AI tools, read full listing profiles, find alternatives to a product and see what is trending; no API key, no account.  
  `search` `directory` `startups` `remote`
- **[ContHunt](https://github.com/Synthenova/conthunt-mcp)** `Official` `Other` — Discover and research viral social content on TikTok, Instagram Reels, and YouTube Shorts.  
  `social` `content` `research` `tiktok`
- **[crawlbrulee mcp server](https://github.com/crawlbrulee/crawlbrulee-mcp)** `Official` `TypeScript` — Scrape any page into clean markdown, screenshots, metadata and links, or map a site's urls, with an EU-hosted web scraping api.  
  `scraping` `markdown` `screenshots` `eu`
- **[crawlerpeek](https://github.com/crawlerpeek/crawlerpeek)** `TypeScript` — Check whether AI crawlers such as GPTBot, ClaudeBot and PerplexityBot can access a URL: robots.txt rules per bot (RFC 9309) plus the live HTTP status fetched with each bot's user agent.  
  `robots-txt` `ai-crawlers` `seo` `web`
- **[CurlShot](https://curlshot.com/docs)** `Official` `TypeScript` — Hosted screenshot API over remote MCP: renders any public URL as PNG, JPEG, WebP, PDF or a scrolling video, full page or at a device preset. API key as Bearer token; free plan 100 screenshots/month, no card.  
  `screenshot` `pdf` `web-capture` `remote`
- **[Desearch](https://github.com/Desearch-ai/mcp-desearch)** `Official` `JavaScript` — AI search across the web, X (Twitter), Reddit, Hacker News, arXiv and Wikipedia, plus web search, page extraction and X data tools for agents.  
  `search` `web-search` `x` `remote`
- **[easi.run](https://docs.easi.run)** `Rust` — Self-hosted Chrome sessions for AI agents via MCP or REST, with live viewing and human takeover for sign-in, 2FA and approvals. ([source](https://github.com/julianosig/easi.run))  
  `browser-automation` `chrome` `self-hosted` `human-in-the-loop`
- **[Exa MCP Server](https://github.com/exa-labs/exa-mcp-server)** `Official` `TypeScript` — Neural and keyword web search optimized for AI research workflows.  
  `search` `research` `web`
- **[FindAIforWork](https://findaiforwork.com/llms.txt)** `Official` `TypeScript` — Read-only MCP server for a human-reviewed AI tools directory organized by work scenario: search tools, list categories, read listing details and compare tools; no account or API key.  
  `search` `directory` `ai-tools` `remote`
- **[Firecrawl MCP Server](https://github.com/mendableai/firecrawl-mcp-server)** `Official` `TypeScript` — Scrape, crawl, and extract structured web data with Firecrawl.  
  `scraping` `crawl` `web`
- **[FlashData Google Search and YouTube Data](https://github.com/rocosen/flashdata-mcp)** `Official` `TypeScript` — Google vertical search and YouTube search, transcripts, captions, metadata, channels, autocomplete, license labels and async media delivery via MCP; data calls require a FlashData API key and paid Credits.  
  `google-search` `youtube` `transcripts` `research` `data-api`
- **[GetYouTubeTranscript](https://github.com/tubeagentkit/youtube-mcp)** `Official` `JavaScript` — YouTube transcripts and data over MCP: fetch a video's captions (language choice, optional timestamps), search YouTube, and browse channels, playlists and related videos.  
  `youtube` `transcripts` `video` `search` `remote`
- **[GoVisit Tools](https://govisit.ai/en/docs/developers/mcp/overview)** `Official` `Other` — Search destinations and places and read published travel information through a hosted, read-only MCP server.  
  `travel` `destinations` `places` `remote` `read-only`
- **[Hyperresearch](https://hyperresearch.ai/docs/mcp)** `Official` `Other` — Hyperresearch is an AI deep research API. One question in, an adversarially reviewed report out, cited claims checked against their sources.  
  `research` `citations` `remote` `oauth`
- **[Karma.Domains Expired Domains](https://karma.domains/en/expired-domains-mcp/)** `Official` `Other` — Hosted server to search expired, auction and backorder domains with SEO metrics, Wayback history and live WHOIS/DNS checks; OAuth or API key, Pro plan required.  
  `domains` `seo` `expired-domains` `whois`
- **[Keenable MCP Server](https://github.com/keenableai/keenable-mcp)** `Official` `JavaScript` — Web search over Keenable's own index and page fetch as clean Markdown, with site and date filters; hosted remote server.  
  `search` `web` `fetch`
- **[LifeVerse Product Discovery](https://github.com/lifeversegu/lifeverse-mcp)** `Official` `TypeScript` — Discover, search, inspect, and recommend eleven public LifeVerse AI products and interactive experiences through four read-only tools.  
  `product-discovery` `recommendations` `read-only` `remote`
- **[looot](https://github.com/loootai/looot-mcp)** `Official` `TypeScript` — Hosted remote MCP server to search, price and run 2,500+ data API endpoints from 90+ providers with one key and a prepaid balance.  
  `data` `enrichment` `search` `api-gateway`
- **[LurkAPI](https://lurkapi.com/docs)** `Official` `TypeScript` — Hosted remote MCP server with live public data from 16 social platforms and the web: posts, profiles, comments, video transcripts and Meta, Google, TikTok and LinkedIn ad library results.  
  `social-media` `ad-library` `transcripts` `remote` `oauth`
- **[MCPKit — Yandex Wordstat MCP](https://mcpkit.ru/mcp-wordstat?utm_source=mcphq&utm_medium=mcp_directory&utm_campaign=yandex_wordstat)** `Python` — Research Yandex keyword demand, trends and regional statistics in ChatGPT. Yandex statistical API charges apply.  
  `yandex` `yandex-wordstat` `remote`
- **[MEDIAPRONET](https://mediapronet.com/mcp)** `Official` `TypeScript` — Read-only MCP server for the MEDIAPRONET directory: search 249 listed websites, SaaS and AI tools, read full listing profiles, find alternatives to a product and see what is trending; no API key, no account.  
  `search` `directory` `startups` `remote`
- **[Monito](https://www.monito.dev/docs/mcp)** `Official` `TypeScript` — Checks a deployed URL against a plain-English expectation in a cloud browser and returns passed, failed or cannot verify with screenshots, network and console logs.  
  `testing` `browser` `qa` `remote` `oauth`
- **[Neeed Directory](https://neeed.directory/docs/api)** `Official` `TypeScript` — Search curated software and digital products, create private listing drafts, and manage your own listings with OAuth.  
  `software-discovery` `directory` `search` `remote` `oauth`
- **[Perceptlayer](https://docs.perceptlayer.com/ai-agents)** `Official` `JavaScript` — Searches and calls 1,659 data endpoints across 248 websites (maps, real estate, jobs, travel, search) over a hosted MCP endpoint and returns structured JSON; free tier included.  
  `web-data` `web-scraping` `structured-data` `search` `remote`
- **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** `Official` `TypeScript` — Official Microsoft Playwright server for browser automation via accessibility snapshots.  
  `browser` `playwright` `automation`
- **[Puppeteer MCP Server](https://github.com/merajmehrabi/puppeteer-mcp-server)** `TypeScript` — Headless Chrome automation using Puppeteer for scraping and testing.  
  `puppeteer` `browser` `scraping`
- **[rea-captcha](https://github.com/masakaai/rea-captcha)** `Official` `TypeScript` — MCP server that completes authorized test or owned verification flows in an agent's existing Playwright or CDP session, then resumes after fresh server validation.  
  `browser-automation` `agent-completion` `playwright` `cdp` `verification`
- **[RecordHTML](https://recordhtml.com/mcp)** `Official` `TypeScript` — Record public web pages or HTML5 creatives (banners, ads, animations) to MP4, WebM or GIF in a real browser and get a signed video link; remote Streamable HTTP with OAuth 2.1 or an API key.  
  `video` `screen-recording` `html5-ads` `remote` `oauth`
- **[Rolês em SP](https://rolesemsp.com.br/connect.md)** `Official` `JavaScript` — Curated São Paulo cultural outing discovery through a hosted MCP endpoint requiring OAuth.  
  `travel` `events` `sao-paulo` `remote` `streamable-http`
- **[Ruin Everything](https://github.com/yuki4266/ruin-everything)** `Python` — Inspects application verification prompts in local Chrome and retrieves saved Ashby submission receipts by job URL.  
  `chrome` `browser-automation` `playwright`
- **[Scrape.ly](https://scrape.ly/docs/mcp)** `Official` `Python` — Search 500+ ready-made web scrapers, run them in the cloud and read their structured results, logs and datasets. ([source](https://github.com/scrapely-app/scrapely-mcp))  
  `web-scraping` `data-extraction` `scrapers` `remote` `oauth`
- **[ScrapingBee MCP Server](https://mcp.scrapingbee.com/)** `Official` `Python` — Fetch any page as text, markdown, HTML or a screenshot with JavaScript rendering and anti-bot handling, extract structured data, and get Google, Amazon, Walmart and YouTube results as JSON. ([source](https://github.com/ScrapingBee/mcp-server))  
  `scraping` `web` `search` `extraction` `remote`
- **[Selan MCP Extension](https://selan.ai/browser?utm_source=mcphq&utm_medium=directory&utm_campaign=extension-mcp)** `Official` `Other` — Chrome extension plus hosted MCP server that lets MCP clients open and use tabs in your own signed-in Chrome, only in its own tab group and only on sites you allow; free, no account.  
  `chrome` `browser` `automation` `hosted`
- **[Shortform Kit](https://shortformkit.com/mcp-server/)** `Official` `Python` — Read, download and Whisper-transcribe public Instagram Reels, TikToks and YouTube videos, plus sourced 2026 upload specs and creator data; free, no key.  
  `video` `transcription` `social-media` `youtube` `remote`
- **[SitePatent](https://sitepatent.com/mcp)** `Official` `TypeScript` — Read-only MCP server for the SitePatent product discovery directory: search the websites, SaaS and AI tools listed there, read full listing profiles, find alternatives to a product and see what is trending; no API key, no account.  
  `search` `directory` `startups` `remote`
- **[Solvecha](https://solvecha.com/mcp-captcha-solver)** `Official` `Go` — Solves reCAPTCHA v2 image grids, text captchas, GeeTest sliders and FunCAPTCHA for AI agents over a hosted MCP endpoint; free tier included.  
  `captcha` `recaptcha` `browser-automation` `remote`
- **[SpecStream](https://specstream.ai/docs/mcp)** `Official` `Python` — Hosted MCP server that returns structured records from the live web for requests in plain words, with the price shown before each run and billing per delivered row. ([source](https://github.com/specstream/specstream-tools))  
  `web-data` `structured-data` `enrichment` `remote`
- **[Tavily MCP Server](https://github.com/tavily-ai/tavily-mcp)** `Official` `Python` — AI-native search and content extraction for research agents.  
  `search` `research` `agents`
- **[toolkb-mcp](https://github.com/jack-reson8/toolkb-mcp)** `JavaScript` — Local server that returns YouTube transcripts and playlists, web pages as Markdown and App Store reviews, with no API key or account.  
  `youtube` `transcripts` `markdown` `app-store`
- **[Toolradar](https://github.com/Nadeus/toolradar-mcp)** `Official` `TypeScript` — Search, compare and price 10,000+ software tools with verified, dated pricing and real alternatives.  
  `software-discovery` `pricing` `comparison` `saas`
- **[TubeText TikTok Transcripts & Video Breakdown](https://github.com/LMSlay/tubetext-mcp/tree/main/registry/tiktok-transcripts)** `Official` `Other` — TikTok video transcripts (captions or Whisper AI) plus AI hook, shot list and script breakdown. Hosted on Apify (OAuth), pay per result. ([source](https://github.com/LMSlay/tubetext-mcp))  
  `transcripts` `tiktok` `video-analysis` `remote`
- **[TubeText YouTube Transcripts & Channel Analytics](https://github.com/LMSlay/tubetext-mcp/tree/main/registry/youtube-transcripts)** `Official` `Other` — YouTube transcripts from videos, Shorts, playlists or channels, plus channel and Social Blade stats. Hosted on Apify (OAuth), pay per result. ([source](https://github.com/LMSlay/tubetext-mcp))  
  `transcripts` `youtube` `social-blade` `remote`
- **[WebExtract](https://github.com/nyx464664816-stack/webextract)** `Official` `Other` — Turns a public URL into structured JSON (product, tables, metadata) plus clean Markdown. 20 free calls a day per caller IP, then x402 USDC or credits. Sandbox benchmark, 10 pages: markdown 38/40, extract 40/40 (webextract.dev/benchmark).  
  `web-scraping` `markdown` `structured-data` `x402` `remote`
- **[Weir](https://github.com/tarun-khatri/weir-mcp)** `Official` `TypeScript` — Search and read public X (Twitter) and Reddit data: posts, replies, threads, profiles, followers, subreddits and comments, plus monitors for new matches.  
  `twitter` `reddit` `social-media` `remote` `oauth`
- **[XActions](https://github.com/nirholas/xactions)** `JavaScript` — X/Twitter toolkit with an MCP server, CLI and browser scripts to scrape profiles, followers and tweets, monitor analytics and automate engagement without API fees.  
  `twitter` `scraping` `social-data` `automation`
- **[Xquik MCP Server](https://github.com/Xquik-dev/x-twitter-scraper)** `Official` `TypeScript` — Search, monitor, and extract X/Twitter data from Xquik through MCP.  
  `twitter` `social-data` `search`
- **[YouTube Transcripts MCP](https://github.com/gunnargray-dev/youtube-transcripts-mcp)** `TypeScript` — Fetches YouTube transcripts with video metadata as text, timestamped segments, or SRT, plus filtered YouTube search, chapters, and timestamped extractive summaries, with no YouTube API key.  
  `youtube` `transcripts` `search` `summaries` `remote`

<a id="filesystems-and-documents"></a>

## Filesystems and Documents

Read and write files, convert documents, and connect to knowledge bases.

- **[3Q Tools](https://getwold.com)** `Official` `JavaScript` — Buy-once Windows PDF and Excel tools with no subscription: 36 offline PDF commands and 8 auto-calculating spreadsheet templates, each with a direct checkout link.  
  `pdf` `excel` `documents` `offline` `remote`
- **[AIAgentCycle MCP Server](https://aiagentcycle.com)** `Official` `Python` — Read-only, source-linked access to AIAgentCycle services, prices, integrations, cases, FAQs and company knowledge in Dutch and English. ([source](https://github.com/aiagentcycle/aiagentcycle-mcp))  
  `company-knowledge` `automation` `integrations` `read-only` `remote`
- **[Airtable MCP Server](https://github.com/domdomegg/airtable-mcp-server)** `TypeScript` — Read and write Airtable bases, tables, and records via MCP.  
  `airtable` `spreadsheets` `data`
- **[BrewPage](https://github.com/kochetkov-ma/brewpage-openapi)** `Official` `TypeScript` — Publish HTML pages, Markdown, static sites, files, JSON and key-value data to free temporary HTTPS links with no signup or API key; content expires after a set TTL.  
  `hosting` `html` `markdown` `file-sharing` `remote`
- **[Comment.io MCP Server](https://comment.io/llms/mcp.md)** `Official` `Rust` — Connect an app as an agent in a Comment.io workspace to work with shared documents through a hosted MCP server.  
  `documents` `collaboration` `remote` `oauth`
- **[doc2md-lite](https://github.com/tidybytetools/doc2md-lite)** `Python` — Turns local text PDFs and saved HTML pages into Markdown and keeps tables as Markdown tables.  
  `pdf` `html` `markdown`
- **[DocuQueue MCP](https://github.com/docuqueue/docuqueue-mcp)** `Official` `TypeScript` — Generate PDFs from templates, fill existing PDF forms, and batch-create invoices, contracts, and certificates through a hosted MCP server with a free tier.  
  `pdf` `document-generation` `form-filling` `invoice`
- **[FastOCR MCP](https://github.com/fastocr-org/fastocr-mcp)** `Official` `Python` — OCR local PDF files through the FastOCR API and check API balance from MCP clients.  
  `ocr` `pdf` `documents`
- **[GenPPT](https://genppt.com)** `Official` `TypeScript` — Generate AI slide decks and pitch decks from a prompt and export native PowerPoint (.pptx) and PDF files. ([source](https://github.com/Illyism/genppt-mcp))  
  `presentations` `powerpoint` `pptx` `slides` `remote`
- **[Google Drive MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gdrive)** `Python` — Access and search files in Google Drive from MCP clients. ([source](https://github.com/modelcontextprotocol/servers-archived))  
  `google-drive` `files` `cloud`
- **[Grandpa's AI](https://github.com/wescorp/grandpasai-mcp)** `Official` `JavaScript` — Search and retrieve a curated research corpus on longevity, robotics, AI, and space colonization.  
  `research` `knowledge-base` `longevity` `search`
- **[Holos33](https://holos33.com)** `Official` `Python` — Provides sourced, read-only Holos33 information about modules, Early Access, privacy, access and contact. ([source](https://github.com/aiagentcycle/holos33-mcp))  
  `knowledge-base` `privacy` `read-only` `wellbeing`
- **[isGenAI](https://isgenai.com/developers/mcp)** `Official` `TypeScript` — Read-only tools that report recorded evidence of AI use in files and text, such as C2PA Content Credentials, IPTC AI-generated labels and saved generator prompts, without guessing from pixels.  
  `c2pa` `provenance` `metadata` `ai-detection` `remote`
- **[Koru MCP Server](https://github.com/koruworks/mono)** `Official` `Rust` — Search and read documents and files, and create and edit documents, in the local database of the Koru notes, docs and files app.  
  `notes` `documents` `local-first` `local`
- **[MarkItDown MCP](https://github.com/microsoft/markitdown)** `Official` `Python` — Convert PDFs, Office docs, and media into markdown for LLM ingestion.  
  `documents` `conversion` `markdown`
- **[Markovo](https://github.com/fisher-byte/markovo)** `Python` — Convert PDF, DOCX, PPTX, XLSX and authorized public HTTPS pages into clean Markdown for agent context; hosted Streamable HTTP with OAuth 2.1 plus sandboxed local stdio.  
  `pdf` `documents` `markdown` `conversion` `remote`
- **[Notion MCP Server](https://github.com/makenotion/notion-mcp-server)** `Official` `TypeScript` — Read and write Notion pages, databases, and workspace content.  
  `notion` `knowledge-base` `docs`
- **[Obsidian MCP Server](https://github.com/MarkusPfundstein/mcp-obsidian)** `TypeScript` — Search and read notes from local Obsidian vaults.  
  `obsidian` `notes` `local`
- **[officegrep](https://github.com/Asgoresmilelong/officegrep)** `Python` — Full-text search inside Word, PowerPoint, Excel and PDF files, with paragraph, slide, cell and page locators, backed by a local SQLite FTS5 index.  
  `documents` `search` `docx` `pdf` `sqlite`
- **[Pagelive MCP Server](https://pagelive.io/mcp)** `Official` `TypeScript` — Publish HTML that Claude builds as a private, view-tracked link, then update it, read views and answer comments.  
  `publishing` `html` `documents` `oauth` `remote`
- **[PDF MCP Server](https://github.com/jztan/pdf-mcp)** `Python` — Extract text and metadata from PDF documents for analysis.  
  `pdf` `documents` `extraction`
- **[pdf-table-pull-lite](https://github.com/tidybytetools/pdf-table-pull-lite)** `Python` — Pulls tables out of local text PDFs as CSV text or CSV files, with no OCR and no API key.  
  `pdf` `csv` `tables`
- **[PDFtoMarkdown.ai](https://github.com/happywpco/pdftomarkdown-mcp)** `Official` `JavaScript` — Convert local PDF, DOCX, PPTX, XLSX, image, HTML and EPUB files into structured Markdown with headings, tables and optional OCR via the PDFtoMarkdown.ai API; free pages, then pay-per-page credits.  
  `pdf` `documents` `markdown` `conversion` `ocr`
- **[PennyOCR](https://github.com/imiraoui/pennyocr-mcp)** `Official` `TypeScript` — Convert PDFs and images to Markdown or text, estimate document-processing costs, and check credit balances with an API key and hard spend caps.  
  `ocr` `pdf` `documents` `remote`
- **[ReadGZH](https://github.com/sweesama/readgzh)** `TypeScript` — Read public WeChat Official Account articles as Markdown for AI agents over remote MCP and REST.  
  `wechat` `markdown` `documents` `reader`
- **[Readwise MCP Server](https://github.com/readwiseio/readwise-mcp)** `Official` `TypeScript` — Search highlights and reading notes from Readwise.  
  `highlights` `reading` `knowledge`
- **[SEAL MCP](https://seal.net/docs/mcp)** `Official` `TypeScript` — Transfer large files and secrets between people and AI agents through client-side encrypted, expiring handoffs.  
  `file-transfer` `encryption` `agents` `handoff`
- **[Signbee MCP Server](https://github.com/signbee/mcp)** `Official` `TypeScript` — Send Markdown or PDF documents for two-party electronic signing with SHA-256 cryptographic audit certificates and OTP verification.  
  `documents` `esignature` `contracts` `legal` `pdf`
- **[Tools That Don't Upload](https://toolsthatdontupload.com/docs/mcp/)** `Official` `JavaScript` — Hosted MCP server that runs saved PDF and office file flows, converts Korean HWP/HWPX documents to Markdown, text or DOCX, and calls data and text APIs; files are processed in memory and not stored. ([source](https://github.com/etacbae6768-a11y/tools-that-dont-upload))  
  `pdf` `hwp` `documents` `korean` `remote`
- **[VectoSolve](https://vectosolve.com/integrations/mcp)** `Official` `TypeScript` — Converts a PNG, JPG or WebP image into a clean SVG, DXF or EPS file for design tools, Cricut, laser cutters and CNC routers. ([source](https://github.com/Vectosolve/vectosolve-mcp))  
  `svg` `vectorize` `dxf` `image-conversion` `remote`
- **[Yap MCP](https://github.com/founden-bot/yap-mcp)** `Official` `JavaScript` — Transcribes local audio and video files on your computer with Parakeet TDT v3 (25 European languages, no API key, no upload) and searches your Yap dictation history.  
  `speech-to-text` `transcription` `audio` `local`

<a id="cloud-and-infrastructure"></a>

## Cloud and Infrastructure

Manage cloud resources, deploy services, and operate infrastructure.

- **[402cron](https://402cron.com)** `Official` `TypeScript` — Remote MCP server (streamable HTTP) for a paid cron service for agents: pricing and docs need no key, and thirteen more tools manage scheduled webhook tasks with the API token bought over x402.  
  `cron` `scheduling` `webhooks` `remote`
- **[agvps](https://agvps.shveik.dev)** `Official` `Go` — Servers for agents, rented by the month: a Linux server with root access and a public IPv4, paid per call with x402 stablecoins, renewed by paying again; no API key.  
  `vps` `hosting` `x402` `remote`
- **[API Status Check MCP](https://apistatuscheck.com/mcp)** `Official` `TypeScript` — Query current and historical uptime for 285 third-party developer APIs (OpenAI, Stripe, GitHub, AWS and more) to tell an upstream outage from a local bug.  
  `uptime` `monitoring` `status` `incidents`
- **[Ausca](https://ausca.com/docs/mcp/)** `Official` `Go` — Discover metered OCR, transcription, browser and receive-only inbox services; paid invocations require x402 payment authority and return receipts.  
  `x402` `ocr` `transcription` `browser-automation` `agent-infrastructure`
- **[AWS MCP Server](https://github.com/alexei-led/aws-mcp-server)** `Python` — Execute AWS CLI commands safely in a containerized environment.  
  `aws` `cloud` `cli`
- **[Azure MCP Server](https://github.com/microsoft/mcp/tree/main/servers/Azure.Mcp.Server)** `Official` `C#` — Manage Azure resources and services through MCP tools. ([source](https://github.com/microsoft/mcp))  
  `azure` `cloud` `infra`
- **[Clara by nOps](https://github.com/nops-io/clara-mcp)** `Official` `Other` — Official nOps FinOps assistant: query AWS, GCP and Azure cost and usage, Reserved Instance and Savings Plan performance, budgets, reports and anomalies over OAuth.  
  `finops` `cloud-cost` `aws` `remote`
- **[CloudBurn](https://github.com/towardsthecloud/cloudburn)** `Official` `TypeScript` — Read-only AWS cost analysis for Terraform, CloudFormation, and live AWS accounts through a local stdio MCP server.  
  `aws` `finops` `terraform` `cloudformation` `read-only`
- **[Cloudflare MCP Server](https://github.com/cloudflare/mcp-server-cloudflare)** `Official` `TypeScript` — Manage Workers, KV, R2, and Cloudflare platform resources.  
  `cloudflare` `edge` `workers`
- **[CloudGPU MCP Server](https://github.com/mrhy7176/cloudgpu-mcp)** `Official` `JavaScript` — Rent per-minute cloud GPUs from an MCP client: browse available GPUs, launch an instance, run a job, download results, and destroy it on CloudGPU.  
  `gpu` `cloud` `ai-infrastructure`
- **[Cockatoo](https://cockatoo.com.au/docs/)** `Official` `TypeScript` — Create, edit and publish hosted business websites with owner-approved access.  
  `websites` `hosting` `oauth` `remote`
- **[deed.page](https://deed.page/docs)** `Official` `TypeScript` — Publishes HTML or a static folder to a permanent HTTPS URL with no account; update, version, restore and delete sites through a remote MCP server.  
  `hosting` `static-sites` `deploy` `publish` `remote`
- **[Droply](https://docs.droply.so/#mcp)** `Official` `TypeScript` — Hosted MCP server that publishes HTML pages, documents and files as shareable links on name.droply.page and updates them without changing the link.  
  `hosting` `publishing` `static-sites` `remote` `oauth`
- **[DropTheHassle](https://github.com/bosmdavid-gif/dropthehassle-mcp)** `Official` `JavaScript` — Publishes a site on a free HTTPS link (no account to start) or a .com (€19/$19) that goes live with no DNS after the human pays. Also Edit files, Restore, Collect leads (form messages to your mailbox), a site password and Hide from Google.  
  `hosting` `deployment` `domains` `https` `remote`
- **[Duplicacy MCP Server](https://github.com/GeiserX/duplicacy-mcp)** `Go` — Reads Duplicacy backup metrics from a duplicacy-exporter Prometheus endpoint: backup status, history, snapshots and prune status.  
  `duplicacy` `backup` `prometheus`
- **[Fly.io MCP Server](https://github.com/superfly/flymcp)** `Official` `TypeScript` — Manage Fly.io apps, machines, and deployments via MCP.  
  `fly` `deploy` `edge`
- **[gpu.nz GPU Cloud](https://gpu.nz/en/docs/mcp)** `Official` `TypeScript` — Find live cloud GPU offers, estimate model VRAM needs, and launch, stop, or delete per-minute GPU servers on gpu.nz.  
  `gpu` `cloud` `ai-infrastructure`
- **[InternetVitals](https://github.com/internetvitals/mcp-server)** `Official` `TypeScript` — Real-time status, recent incidents and an overall health score for 41 internet backbone services such as AWS, Cloudflare, GitHub and OpenAI.  
  `status` `uptime` `incidents` `monitoring`
- **[Lantern Works](https://thelanternworks.com/for-agents/?ref=fg-mcphq)** `Official` `Python` — Read-only GPU rental price comparison across providers, refreshed regularly with each price's age shown, cited rates, job-cost estimates, and a keyless MCP (local uvx or hosted Streamable HTTP). ([source](https://github.com/connormatthewdouglas/agent-work-stack-deals))  
  `gpu` `cloud` `pricing` `read-only`
- **[mountable.io](https://github.com/writeitai/mountable)** `Official` `Go` — Manage persistent agent filesystems, issue mount tickets and revoke mount sessions through a local stdio server for the paid mountable.io service.  
  `filesystem` `storage` `stdio`
- **[NetActuate MCP Server](https://netactuate.com/mcp)** `Official` `TypeScript` — Answers from NetActuate's own published data: data centers and specs, compliance by site, internet exchanges, products and pricing, marketplace apps, docs and API, each linked to its source page.  
  `anycast` `data-centers` `edge` `networking`
- **[Network Sketcher](https://github.com/cisco-open/network-sketcher)** `Official` `Python` — Local-first MCP server for AI-driven network design, L1/L2/L3 topology diagrams, device tables, and AI Context generation.  
  `networking` `diagrams` `automation` `cursor` `cisco`
- **[Port MCP Server](https://github.com/port-labs/port-mcp-server)** `Official` `TypeScript` — Manage software catalog, scorecards, and actions in Port.io.  
  `platform-engineering` `catalog` `devops`
- **[Pulumi MCP Server](https://www.pulumi.com/docs/ai/mcp-server/)** `Official` `TypeScript` — Infrastructure as code operations with Pulumi stacks and resources.  
  `pulumi` `iac` `cloud`
- **[Railway MCP Server](https://docs.railway.com/cli/mcp)** `Official` `Rust` — Deploy services and manage Railway projects through the MCP server built into the Railway CLI.  
  `railway` `deploy` `paas`
- **[remotify-mcp](https://github.com/onlsol/relay.remotify.run)** `JavaScript` — Local stdio MCP server that executes shell commands on remote computers through an HTTP relay, with optional per-command approval.  
  `remote-shell` `relay` `command-execution` `stdio`
- **[Sakupa](https://www.npmjs.com/package/@sakupa/mcp)** `Official` `TypeScript` — Create, deploy and manage static company websites through a local stdio MCP server, with a 30-day free preview and optional paid hosting.  
  `website-hosting` `deployment` `static-sites` `small-business`
- **[Shipvela](https://shipvela.com/integrations/codex)** `Official` `TypeScript` — Create website projects, deploy supported GitHub repositories, and inspect deployment status, build logs, and usage via a remote OAuth MCP server.  
  `hosting` `deployment` `github` `oauth`
- **[SolidPing](https://github.com/fclairamb/solidping)** `Official` `Go` — Create, run and diagnose uptime checks across 43 types, read results and incidents, and manage status pages and maintenance windows in SolidPing, a self-hostable uptime monitor; also runs over stdio.  
  `uptime` `monitoring` `status` `incidents`
- **[Symbioza](https://symbioza.dev/agent)** `Official` `TypeScript` — Symbioza runs your containerized GPU job on a rented cloud machine and hands back the files it writes, under a spending limit you set.  
  `gpu` `cloud` `oauth` `remote`
- **[Termalin](https://termal.in/mcp/)** `Official` `Rust` — Run commands, read and write files, query databases and read monitoring on your own Linux servers over SSH through a hosted MCP server with OAuth, per-server command policy and an audit log. ([source](https://github.com/termalinapp/termalin-plugin))  
  `ssh` `sftp` `servers` `devops` `remote`
- **[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)** `Official` `Go` — Generate and validate Terraform configurations with HashiCorp tooling.  
  `terraform` `iac` `infra`
- **[Vercel MCP Server](https://vercel.com/docs/agent-resources/vercel-mcp)** `Official` `Other` — Deploy and manage Vercel projects and deployments from AI clients.  
  `vercel` `deploy` `frontend`
- **[Webprompter.ai MCP](https://webprompter.ai)** `Official` `TypeScript` — Deploy static sites and connect custom domains from coding agents over hosted MCP.  
  `hosting` `static-sites` `deploy` `domains` `remote`

<a id="communication-and-productivity"></a>

## Communication and Productivity

Integrate chat, email, calendars, and team collaboration tools.

- **[/call-me](https://github.com/radres/call-me)** `Python` — Hosted MCP server that rings the user's iPhone, reads the agent's question aloud and returns the spoken answer as text; it can also text. Needs the /call-me iPhone app (paid subscription).  
  `phone-call` `voice` `notifications` `human-in-the-loop` `ios`
- **[Agent Media](https://github.com/agent-media-ai/agent-media)** `Official` `Other` — Hosted MCP server that makes short drama series (micro-dramas, sitcoms, K-drama style, any language) and other short vertical videos from Claude, ChatGPT or Codex, with the same cast every episode.  
  `video` `ugc` `ai-video` `remote`
- **[Agent Notifications](https://github.com/777genius/agent-notifications)** `Go` — Local MCP server for desktop attention and progress notifications from AI coding agents.  
  `notifications` `desktop` `coding-agents`
- **[agentcomms](https://github.com/web3wes/agentcomms)** `Official` `Python` — Exchange end-to-end encrypted messages between AI agents through an account-free public hub or a self-hosted hub.  
  `agents` `messaging` `encryption` `self-hosted` `mcp`
- **[anon.li](https://anon.li/mcp)** `Official` `TypeScript` — Remote MCP server for anon.li, an open-source privacy suite: tools manage email aliases, recipients, end-to-end encrypted file drops and encrypted forms.  
  `email-alias` `privacy` `file-sharing` `encryption` `remote`
- **[ArtiGram](https://artigram.cafeboon.com/connect)** `Official` `Python` — Publish, version and search AI-made HTML, React, SVG and Markdown artifacts as live pages on the ArtiGram community.  
  `artifacts` `publishing` `community` `remote`
- **[Atlassian Browser MCP Server](https://github.com/GeiserX/atlassian-browser-mcp)** `Python` — Wraps mcp-atlassian with Playwright browser-cookie login, so its Jira and Confluence tools work on Atlassian Server/Data Center behind corporate SSO (Okta, SAML) where API tokens are not available.  
  `jira` `confluence` `sso`
- **[Atlassian MCP Server](https://github.com/atlassian/atlassian-mcp-server)** `Official` `TypeScript` — Manage Jira issues and Confluence pages across Atlassian Cloud.  
  `jira` `confluence` `atlassian`
- **[BacklinkGenie](https://backlinkgenie.com/mcp/)** `Official` `TypeScript` — Hosted link-building outreach agent: find posts where your product fits, approve pitches, read editor replies and track earned backlinks; OAuth or API key.  
  `seo` `link-building` `outreach` `marketing`
- **[BeingSo MCP](https://github.com/beingso/beingso-mcp)** `Official` `PHP` — Search animated greeting card designs, personalize messages, review previews, and publish shareable card links or request email delivery.  
  `greeting-cards` `ecards` `remote` `oauth`
- **[BulkPublish MCP Server](https://github.com/azeemkafridi/bulkpublish-api)** `TypeScript` — MCP server for AI agents to plan, review, schedule, publish, and analyze social media content through BulkPublish.  
  `mcp` `social-media` `publishing` `bulkpublish`
- **[CallForMe](https://github.com/callforme-tel/callforme)** `Official` `TypeScript` — Remote MCP server that lets an agent phone US and Canadian businesses: it works phone menus, waits on hold, asks the agent mid-call when needed, and returns a transcript plus structured answers.  
  `phone-calls` `voice` `telephony` `remote`
- **[Campfire SMS](https://github.com/campfiresms/campfire-mcp)** `Official` `Python` — Two-way SMS bridge for coding agents: the agent texts you when it finishes or is blocked and reads your SMS replies.  
  `sms` `notifications` `human-in-the-loop` `coding-agents`
- **[Carbon](https://github.com/CarbonDataSolutions/carbon-mcp)** `Official` `Other` — Hire skills-assessed data professionals from any MCP host. Post your role free. Hosted Streamable HTTP server with OAuth.  
  `hiring` `talent` `data` `remote` `oauth`
- **[CiteWing](https://citewing.com/docs)** `Official` `TypeScript` — Find AI-cited publisher prospects, review outreach and publisher replies, and draft emails requesting brand mentions.  
  `marketing` `seo` `outreach` `email` `oauth`
- **[ClipUGC](https://github.com/clipugc/ClipUGC-CLI)** `Official` `TypeScript` — Makes vertical UGC videos for mobile apps with an AI influencer who keeps the same face, then merges the app screen recording and a hook into the video.  
  `video` `ai-influencer` `ugc` `social-media` `remote`
- **[Cooper Email](https://cooperemail.com/docs/mcp)** `Official` `TypeScript` — Gives AI agents their own email inbox: send, read, reply, and wait for the next message or a sign-up code over a hosted MCP server. API key or OAuth; free tier.  
  `email` `inbox` `agents` `otp` `remote`
- **[Crispy](https://crispy.sh)** `TypeScript` — Hosted LinkedIn MCP server. Sign in with OAuth, or use a Bearer API key. Search people and companies, read profile and company data, and send and read messages.  
  `linkedin` `sales` `remote` `oauth`
- **[day3](https://docs.day3.app/mcp)** `Official` `TypeScript` — Official remote server for the day3 email platform: read account context, draft, edit, preview and test-send newsletter campaigns, and enroll contacts in automations; audience sends need an extra API key scope.  
  `email-marketing` `newsletters` `campaigns` `api-key`
- **[Deacon](https://heydeacon.com/features/mcp-server)** `Official` `PHP` — Lets your coding agent read what customers told Deacon's support chat, next to your site's JavaScript errors, then find the cause in your code and show you the fix.  
  `customer-support` `bug-reports` `coding-agents` `remote` `oauth`
- **[depot.fitness](https://depot.fitness/connect)** `Official` `TypeScript` — Hosted MCP server for strength training: search 101 written-out programs and 539 exercises, read training guides, and save programs or read recent workouts for signed-in users.  
  `fitness` `strength-training` `workouts` `remote` `oauth`
- **[Discord MCP Server](https://github.com/SaseQ/discord-mcp)** `Python` — Read and send messages in Discord servers and channels.  
  `discord` `chat` `community`
- **[Edusign MCP](https://developers.edusign.com/docs/mcp)** `Official` `TypeScript` — Access Edusign attendance, courses, learners, documents, and API documentation through a hosted OAuth 2.1 MCP server.  
  `education` `attendance` `documents` `oauth`
- **[EmailFig](https://github.com/EmailFig/mcp)** `Official` `Ruby` — Check campaign and automation results, look up and update contacts, and draft email campaigns you review and send in EmailFig.  
  `email` `marketing` `newsletters`
- **[Enhanciar](https://github.com/enhanciar/enhanciar-mcp)** `Official` `Other` — A company brain that answers from your Slack, Gmail, Notion and Drive with the source, then drafts the reply or ticket for you to approve. Hosted; needs an Enhanciar API key (paid plans).  
  `knowledge-base` `enterprise-search` `slack` `hosted`
- **[ent1-mcp](https://github.com/edouard-claude/ent1-mcp)** `Rust` — Parent access to ENT ONE, the French primary-school digital workspace (Edifice): teacher messaging, liaison book, homework, news, calendar and documents.  
  `education` `school` `france` `messaging` `parents`
- **[Faceless](https://faceless.so)** `Official` `TypeScript` — Create AI faceless videos from a script, run automated series, and publish to YouTube, TikTok, Instagram, X, Facebook, LinkedIn, and Threads. Remote Streamable HTTP at https://faceless.so/api/v1/mcp (Authorization: Bearer fl_live_...).  
  `video` `social-media` `publishing` `remote`
- **[Fax for Agents](https://github.com/faxforagents/mcp)** `Official` `TypeScript` — Send and receive faxes from AI agents through the Fax for Agents API, hosted or local, with quotes, human review, delegated policies and delivery evidence.  
  `fax` `communication` `agents` `remote`
- **[Fezola](https://app.fezola.com/en/docs)** `Official` `TypeScript` — Hosted MCP server that puts several mailboxes (Gmail, iCloud, OVH, any IMAP server), Google Chat and Telegram behind one connector: unified recent view, cross-account search and reply drafts.  
  `email` `imap` `google-chat` `telegram` `remote`
- **[Flaghand](https://flaghand.com/?utm_source=mcphq&utm_medium=directory&utm_campaign=listing_nov2026)** `Official` `JavaScript` — Hosted OAuth MCP server where agents draft X, LinkedIn, Bluesky and TikTok posts; only the owner's passkey approval of the exact post publishes it.  
  `social-media` `publishing` `approvals` `remote` `oauth`
- **[Gmail MCP Server](https://github.com/GongRzhe/Gmail-MCP-Server)** `TypeScript` — Search, read, and compose Gmail messages from MCP clients.  
  `gmail` `email` `google`
- **[Google Calendar MCP Server](https://github.com/nspady/google-calendar-mcp)** `TypeScript` — View and manage Google Calendar events and schedules.  
  `calendar` `scheduling` `google`
- **[Hail](https://hail.so/mcp)** `Official` `Python` — Give your AI assistant a phone number and an email inbox to handle calls, texts, and email.  
  `voice` `sms` `email` `remote`
- **[HeyReagent](https://heyreagent.com/linkedin-mcp?utm_source=mcphq&utm_medium=listing)** `Official` `JavaScript` — Hosted LinkedIn MCP server for your own LinkedIn account: read the inbox, send messages and connection invitations, search people, and read profiles and posts; OAuth or API key, free plan available. Not affiliated with LinkedIn.  
  `linkedin` `sales` `remote` `oauth`
- **[InsertChat](https://insertchat.com)** `Official` `TypeScript` — AI receptionist and AI chatbot: triage calls and chats that need you, draft replies, look up leads, review reports, and train your assistant on web pages.  
  `customer-support` `receptionist` `crm` `remote` `oauth`
- **[KanbanMCP](https://kanbanmcp.com/docs/connect)** `Official` `Other` — Hosted kanban board with a remote MCP server where AI agents claim cards, check in while they work, and hand off with notes.  
  `kanban` `project-management` `multi-agent` `remote`
- **[LinkedNav](https://www.linkednav.com/mcp?utm_source=mcphq&utm_medium=listing)** `Official` `JavaScript` — Hosted MCP server for your own LinkedNav account: find leads from LinkedIn buying signals, launch outreach campaigns, write messages, and read and answer replies; OAuth or API key, free 7-day trial. Not affiliated with LinkedIn.  
  `linkedin` `sales` `remote` `oauth`
- **[LinkMCP](https://app.linkmcp.io)** `Official` `TypeScript` — Hosted LinkedIn MCP server for your own LinkedIn account: profile, company, people and Sales Navigator search, inbox, posts, connection requests and work email finding; OAuth 2.1 or access key, paid plans with a 7-day free trial.  
  `linkedin` `sales` `remote` `oauth`
- **[Mailcoach](https://www.mailcoach.app/resources/learn-mailcoach/integrations/mcp-server/)** `Official` `PHP` — Read Mailcoach email lists, subscribers, campaigns, statistics and transactional mail logs, and create draft campaigns, templates and test sends; it cannot send a campaign to a full list.  
  `email-marketing` `newsletters` `campaigns` `oauth`
- **[MailVeri MCP](https://github.com/mailveri/mailveri-mcp)** `Python` — Verify single emails or bulk lists (valid, invalid, disposable, catch-all, role) from an AI agent through the MailVeri API.  
  `email` `verification` `validation` `mcp`
- **[MakeAIVideo](https://github.com/makeaivideo-ai/mcp)** `Official` `TypeScript` — Official MakeAIVideo server for creating short-form AI videos with voiceover, scenes, captions and music, then posting them to connected social accounts.  
  `video` `video-generation` `social-media` `remote`
- **[MakeViral](https://www.makeviral.ai)** `Official` `TypeScript` — Finds the newest viral AI video and photo trend templates and makes them from the user's own photos, or makes any AI image or video from a prompt.  
  `video-generation` `image-generation` `social-media` `remote` `oauth`
- **[MCP Time Tracker](https://github.com/zovo-one/mcp-time-tracker)** `TypeScript` — Billable time tracking from an AI chat: timers, time entries, reports, CSV export and invoice links.  
  `time-tracking` `billing` `freelance` `reports`
- **[Microsoft Teams MCP Server](https://github.com/InditexTech/mcp-teams-server)** `TypeScript` — Interact with Microsoft Teams channels, messages, and meetings.  
  `teams` `chat` `microsoft`
- **[model.tools](https://github.com/maceip/model-tools-mcp)** `Official` `JavaScript` — Zero-auth email OTP extraction, KV state checkpoints, webhook receiver bins, delayed HTTP wakeup callbacks, and URL-to-Markdown reader for AI agents.  
  `email` `inbox` `otp` `webhook` `remote`
- **[Multi Upload Tool](https://docs.multi-upload-tool.com/mcp)** `Official` `TypeScript` — Schedule and publish videos and photos to TikTok, YouTube Shorts, Instagram, Facebook, LinkedIn, Pinterest, Bluesky, Threads and X; validate, reschedule, cancel and retry posts, and read post status and analytics.  
  `social-media` `publishing` `video` `remote` `oauth`
- **[Muslim Prayer Reminder MCP](https://github.com/tareq7/muslim-prayer-mcp)** `TypeScript` — Calculates Muslim prayer times by location and regional method, including next-prayer countdowns.  
  `prayer-times` `islamic` `location` `reminders`
- **[NeverApply](https://github.com/kasovy/neverapply-mcp)** `Official` `Other` — AI job-search agent: search and match jobs, tailor resumes, answer screening questions, and apply with your approval.  
  `jobs` `career` `resume` `oauth` `remote`
- **[Nitrosend](https://docs.nitrosend.com/mcp)** `Official` `Ruby` — Manage email campaigns, flows, contacts, audiences, and transactional email or SMS in Nitrosend through its hosted MCP server.  
  `email-marketing` `campaigns` `automation` `transactional-email` `oauth`
- **[NoLimit MCP](https://github.com/sharpmagazine/nolimit-mcp)** `PHP` — Self-hosted WordPress plugin exposing 60 MCP tools over Streamable HTTP with OAuth 2.1, letting AI clients manage posts, pages, media, users, comments and SEO.  
  `wordpress` `cms` `websites` `oauth` `remote`
- **[NumRadar](https://numradar.app/mcp-server)** `Official` `TypeScript` — Check WhatsApp registration for individual phone numbers, submit bulk validation jobs, and read validation allowances through a hosted Streamable HTTP server or the local npm package.  
  `whatsapp` `phone-validation` `bulk-validation`
- **[OrkasVideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio)** `Official` `TypeScript` — Compose and assemble videos from editable JSON timelines through a source-installable CLI and MCP server.  
  `video` `editing` `automation` `mcp`
- **[Outbound OS](https://github.com/RecepioHQ/outbound-os)** `Official` `JavaScript` — Local MCP tools for evidence-gated email outreach with default-disabled live sending  
  `email` `ai-agents` `outreach` `approval`
- **[Pallyy](https://pallyy.com/docs/api/mcp)** `Official` `TypeScript` — Schedules social media posts from an AI agent: lists social sets, creates and updates draft or scheduled posts, imports media and pins calendar notes across ten networks.  
  `social-media` `scheduling` `marketing` `remote`
- **[Paper Plane Post](https://paperplanepost.com/for/agents)** `Official` `TypeScript` — Create and send an AI-illustrated postcard anywhere in the world  
  `postcards` `photos` `mail`
- **[Pinto Notes](https://github.com/pinto-notes/pinto-notes)** `Official` `TypeScript` — Hosted server for Pinto Notes, an open-source notes app for Mac, that lets an AI search, read and edit your notes, checklists and tables after you approve it over OAuth.  
  `notes` `apple-notes` `markdown` `oauth`
- **[PlaceCall](https://github.com/voygr-tech/placecall)** `Official` `Python` — VOYGR's hosted MCP server whose voice agent places real outbound calls to US businesses for reservations, appointments, inquiries and quotes, gets through phone menus and hold, and reports back the outcome, transcript and recording.  
  `phone-calls` `voice-agent` `telephony` `reservations` `remote`
- **[Postbag MCP Server](https://github.com/faahim/postbag)** `TypeScript` — Open-source agent-native form backend that receives contact-form POSTs, stores submissions with status, and delivers to email, Telegram, or webhooks.  
  `forms` `email` `webhooks` `self-hosted`
- **[Postmately](https://postmately.com/en/mcp-social-media/)** `Official` `TypeScript` — Make carousels and short videos, schedule and publish social posts to TikTok, YouTube, Instagram, Telegram, VK and other networks, and read post metrics. ([source](https://github.com/YakovlevCoded/postmately-smm-autopilot))  
  `social-media` `marketing` `scheduling` `telegram` `tiktok`
- **[PostOnce](https://docs.postonce.to/mcp/docs)** `Official` `TypeScript` — Official remote MCP server to post and schedule one video or image to many social networks, including Instagram, TikTok, YouTube, X, LinkedIn, Facebook, Threads, Pinterest and Bluesky. ([source](https://github.com/postoncehq/postonce-skills))  
  `social-media` `scheduling` `crossposting` `remote` `oauth`
- **[Posty: Social Media Scheduler](https://posty.hu/en/docs/mcp)** `Official` `TypeScript` — Hosted MCP server to write, schedule and publish posts to 20 social platforms, including Facebook, Instagram, X, LinkedIn, TikTok and YouTube, with a content calendar and full-quality media uploads.  
  `social-media` `scheduling` `publishing` `content-calendar` `remote`
- **[Process Street MCP Server](https://github.com/process-street/process-street-mcp)** `Official` `Other` — Connect AI clients to Process Street workflows, workflow runs, tasks, users, data sets, and operational records.  
  `workflows` `tasks` `process-management` `operations`
- **[PushNotif](https://github.com/AarsyDesign/pushnotif-mcp)** `Official` `JavaScript` — Hosted remote and stdio MCP server with 24 tools for Web Push (VAPID), Android (FCM), iOS (APNs), In-App Popups, Social Proof Toasts, and Transactional Email OTP.  
  `notifications` `push-notifications` `email` `web-push` `remote`
- **[Quibbly LinkedIn MCP](https://github.com/Scriptify-Inc/linkedin-mcp)** `Official` `TypeScript` — Reads your LinkedIn inbox as synced by the Quibbly Chrome extension, shows who watched your videos, sets follow-ups and notes, and drafts replies you send yourself.  
  `linkedin` `sales` `crm` `oauth` `remote`
- **[Reddit MCP Publisher](https://github.com/Bl0ck154/reddit-mcp-publisher)** `TypeScript` — Self-hosted Reddit MCP server that reads account context and prepares browser-previewed, owner-approved posts, comments and direct messages.  
  `reddit` `publishing` `browser-automation` `approval`
- **[Repostit for Claude](https://app.repostit.io/claude-connector.html)** `Official` `Other` — Official hosted MCP connector for managing connected social accounts, creating post and carousel drafts, scheduling publishing, cross-account workflows, and checking delivery status.  
  `social-media` `scheduling` `publishing` `drafts` `cross-posting`
- **[Revid](https://www.revid.ai/mcp)** `Official` `TypeScript` — Official Revid server to research viral TikTok, YouTube, Instagram and X videos, make finished short-form videos with voice, captions and music, and publish or schedule them.  
  `video` `video-generation` `social-media` `remote`
- **[Rinhelp](https://docs.rinhelp.com/articles/98a0def1-a07d-4c34-9f19-4d168626b40c-connect-your-ai-agent)** `Official` `TypeScript` — Answer, note, assign, triage and close Rinhelp help desk conversations, search knowledge, publish help center articles, and find Shopify orders and Stripe customers; refunds and cancellations wait for a teammate's approval.  
  `helpdesk` `customer-support` `shared-inbox` `help-center` `oauth`
- **[SemanticHub](https://semantichub.app/docs)** `Official` `Python` — Official remote server that monitors news sources, clusters articles by topic and generates texts from them; OAuth 2 or Bearer token, free plan.  
  `news` `monitoring` `content` `oauth`
- **[Sequenzy](https://github.com/Sequenzy/mcp)** `Official` `TypeScript` — Manage email contacts, campaigns, automation sequences, transactional email and analytics.  
  `email` `marketing` `automation`
- **[Shipmail](https://github.com/shipmail-to/shipmail-mcp)** `Official` `TypeScript` — Business email on your own domain for people and AI agents: read, search, send and reply, and manage domains, mailboxes, inbox rules, calendars, newsletters and webhooks.  
  `email` `business-email` `calendar` `newsletters` `remote`
- **[Sitekick CMS](https://docs.sitekick.ai/working-with-our-ai-site-editor/mcp-editing)** `Official` `TypeScript` — Plan and improve WordPress websites with generation, previews, and browser-approved publishing; requires an eligible account and a registered OAuth client.  
  `wordpress` `cms` `websites` `oauth` `remote`
- **[Slack MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack)** `Python` — Send messages and interact with Slack channels and workspaces. ([source](https://github.com/modelcontextprotocol/servers-archived))  
  `slack` `chat` `team`
- **[Social Post Flow](https://www.socialpostflow.com/documentation/mcp/)** `Official` `PHP` — Schedule and publish social media posts to Facebook, X, LinkedIn, Instagram, Threads, Pinterest, TikTok, Bluesky, Mastodon and more.  
  `social-media` `scheduling` `marketing` `remote`
- **[Spillmark](https://github.com/burmanharry/spillmark-mcp)** `Official` `TypeScript` — Remote MCP for free Amazon and Meta ads calculators; optional read-only brand lift and test plans.  
  `amazon` `meta-ads` `roas` `holdout` `remote`
- **[SwarmMemo](https://github.com/Hugo0/swarmmemo)** `Official` `Go` — Public message board for AI agents: read and post with no account, use an agent toolkit (web fetch, memory, wake-ups, webhook receivers) and paid APIs on a free daily allowance, and sign in with OAuth for MCP clients.  
  `agents` `message-board` `communication` `remote`
- **[SystemSculpt](https://systemsculpt.com/obsidian-ai-plugin-docs/agents?utm_source=mcphq&utm_medium=directory&utm_campaign=listing_nov2026)** `Official` `TypeScript` — Hosted OAuth MCP server for a SystemSculpt account (Obsidian AI plugin): plan, credits, usage, billing links and server-side captures; no local vault access.  
  `obsidian` `account` `credits` `remote` `oauth`
- **[Tale](https://docs.tale.dev/develop/mcp-endpoint)** `Official` `TypeScript` — Retrieve organization knowledge and author, validate, deploy, and run automations through the authenticated MCP server built into Tale.  
  `knowledge` `automations` `productivity`
- **[Taskfolk](https://github.com/taskfolk/mcp)** `Official` `Other` — Project management for teams and their AI agents. Agents join as named members.  
  `project-management` `tasks` `agents` `remote`
- **[Telegram Archive MCP Server](https://github.com/GeiserX/telegram-archive-mcp)** `Official` `Go` — Search messages, browse chats and read archived Telegram history from a self-hosted Telegram-Archive instance.  
  `telegram` `chat` `archives` `self-hosted`
- **[Telofy](https://telofy.de)** `Official` `TypeScript` — Remote MCP server for Telofy, the AI phone receptionist for small businesses in Germany: lets agents read calls, captured leads and tickets, and booked appointments. ([source](https://github.com/RuJerome/telofy-mcp))  
  `phone` `voice-ai` `appointments` `calls` `remote`
- **[TextKit](https://jointextkit.com/docs/mcp)** `Official` `TypeScript` — Hosted MCP server to send and receive SMS, verify phone numbers, buy US and Canada numbers, and manage contacts, segments, broadcasts and automations.  
  `sms` `phone-verification` `messaging` `remote`
- **[There There](https://there-there.app/docs/integrations/mcp-server)** `Official` `PHP` — Read, search and triage There There helpdesk tickets, save private reply drafts, send replies and manage knowledge base articles, limited to the abilities granted over OAuth.  
  `helpdesk` `customer-support` `tickets` `oauth`
- **[Timesheet MCP Server](https://github.com/timesheetIO/timesheet-mcp)** `Official` `TypeScript` — Official Timesheet time tracking server: run timers, log work, manage projects, todos, expenses and absences, and pull reports and exports.  
  `time-tracking` `timesheet` `productivity` `hosted`
- **[Toads](https://github.com/854Labs/toads)** `Official` `Swift` — Edit screen recordings in Toads on your Mac: tidy up filler words, cut by transcript, add captions, titles and zooms, and export.  
  `video-editing` `screen-recording` `captions` `macos` `local`
- **[Todoist MCP Server](https://github.com/abhiz123/todoist-mcp-server)** `TypeScript` — Manage Todoist tasks, projects, and due dates from AI assistants.  
  `tasks` `productivity` `todoist`
- **[Umless](https://github.com/thoufeekx/umless)** `TypeScript` — Cuts filler words, stutters, retakes and long pauses out of talking-head videos with ffmpeg, using OpenRouter for transcription; returns a cleaned MP4.  
  `video` `video-editing` `ffmpeg` `transcription` `podcast`
- **[Unblockd](https://unblockd.ai/setup.md)** `Official` `TypeScript` — Project plans for teams that answer to a sponsor: read goals and deliverables, update tasks, attach proof, flag blockers, log risks, and draft decision asks with options. A person on the team sends each ask.  
  `project-management` `productivity` `oauth` `remote`
- **[Unitpost](https://www.unitpost.com/ai/mcp)** `Official` `TypeScript` — Hosted MCP server for Unitpost: send transactional email, campaigns and SMS, and manage contacts, templates, sending domains, webhooks and inbound email.  
  `email` `sms` `transactional-email` `remote` `oauth`
- **[Unsora](https://github.com/Shipped-Studio/unsora)** `Official` `TypeScript` — AI content generation and social media scheduling: generate images, video, talking avatars, music and voiceovers, clip long videos into shorts, and schedule posts to YouTube, TikTok, Instagram, LinkedIn and more.  
  `video` `image-generation` `social-media` `scheduling` `remote`
- **[Warmerly](https://github.com/warmerly)** `Official` `TypeScript` — Warm up mailboxes, check SPF, DKIM and DMARC, run placement tests, search leads, build draft cold email campaigns and triage replies in Warmerly; campaigns are launched by the person in the dashboard, not by the assistant.  
  `email` `cold-email` `deliverability` `outreach` `oauth`
- **[Whisper Memos](https://whispermemos.com/mcp)** `Official` `TypeScript` — List and read transcripts, summaries and labels of voice memos from the Whisper Memos iPhone and Apple Watch app, view account details, and delete memos.  
  `voice-memos` `transcription` `notes` `oauth`
- **[WriteStack MCP Server](https://www.writestack.io/mcp)** `Official` `TypeScript` — Official hosted server for drafting and scheduling Substack Notes, managing articles, and reading writing statistics in a WriteStack account.  
  `substack` `writing` `newsletter` `social-media` `remote`
- **[Zoom MCP Server](https://developers.zoom.us/docs/mcp/)** `Official` `Other` — Official hosted Zoom MCP servers for meetings, chat, docs, and whiteboards.  
  `zoom` `meetings` `video`
- **[Zovo Office Suite](https://github.com/theluckystrike/mcp-servers)** `TypeScript` — Local-first MCP bundle for freelance paperwork: invoicing, expenses, time tracking, spreadsheets, PDFs and resumes; 30 servers also reachable as hosted Streamable HTTP endpoints.  
  `productivity` `invoice` `expenses` `spreadsheet` `pdf`
- **[Zovo Time Tracker](https://github.com/theluckystrike/mcp-servers/tree/main/servers/time-tracker)** `TypeScript` — Track billable time from chat: start and stop timers, log entries against jobs, and produce timesheets and billable summaries; hosted endpoint uses a free anonymous token from https://mcp.zovo.one/mcp/token. ([source](https://github.com/theluckystrike/mcp-servers))  
  `time-tracking` `billable-hours` `timesheet` `hosted`

<a id="ai-agents-and-memory"></a>

## AI, Agents, and Memory

LLM bridges, agent orchestration, RAG, and persistent memory layers.

- **[AbuzzHive](https://www.abuzzhive.com)** `Official` `Go` — Public Q&A boards where AI agents help each other: exact-error lookup of problems other agents solved, posting problems when stuck, solving open ones.  
  `agents` `q-and-a` `collaboration` `remote` `oauth`
- **[AccInt](https://github.com/maxbaluev/accreted-intelligence)** `Rust` — Local-first MCP Work Model that gives coding agents scored memory retrieval, commitments, and outcome-based credit.  
  `memory` `coding-agents` `local-first`
- **[Aeon](https://www.aeon.fun/connect)** `Official` `TypeScript` — Run and manage your Aeon autonomous agent from chat: skills, runs, memory, strategy, packs and settings, through a hosted MCP server with GitHub sign-in.  
  `agents` `automation` `github` `remote` `oauth`
- **[Agent Coach](https://upskill.coach/docs/mcp)** `Official` `TypeScript` — Coach and security-scanned skill library for AI agents: register, set one goal, get matched skills, MCP servers and repos, check in daily, and search the vetted library.  
  `agents` `skills` `security-scan` `coaching` `remote`
- **[Agent Commons](https://github.com/sibi-narendran/common-agent-network)** `TypeScript` — Free public meeting place for AI agents: chat rooms, an inbox of replies and @mentions that survives restarts, a wake note read back each session, shared knowledge, a job board and a human-help queue; no key needed.  
  `agents` `collaboration` `memory` `a2a` `remote`
- **[Agentage Memory](https://agentage.io/blog/mcp-endpoint-is-live)** `Official` `TypeScript` — Remote MCP memory server - one markdown memory every AI reads and writes via OAuth 2.1 Streamable HTTP at https://memory.agentage.io/mcp.  
  `memory` `remote` `oauth`
- **[AgentDrives](https://agentdrives.com/data#mcp)** `Official` `TypeScript` — Looks up whether an AI agent can really use a software product (sign-up, API key, the core tasks, paying, leaving), with levels 0 to 5 from real agent test drives.  
  `agents` `directory` `saas` `remote`
- **[Agentik](https://www.agentik.cc)** `Official` `Other` — Hosted MCP gateway that connects Claude, ChatGPT, Codex and Cursor to tools from 165 providers through one connection, with the price shown before each call, billed at the provider's price from one prepaid balance.  
  `gateway` `hosted` `remote` `oauth` `pay-per-call`
- **[AI Agents Listing](https://github.com/nyyhao/aiagentslisting-mcp)** `Official` `JavaScript` — Search, browse and compare a directory of AI agents, MCP servers and agent skills; find alternatives and see what is trending.  
  `directory` `discovery` `mcp` `agents` `remote`
- **[AI Interview Questions MCP](https://github.com/Johnnnmai/ai-interview-questions-mcp)** `TypeScript` — Offline stdio MCP with graded AI engineer and investment banking interview questions, model answers, topic search and mock rounds. Companion static JSON catalog on GitHub Pages.  
  `interview` `education` `ai-engineering` `stdio`
- **[Aident Loadout](https://aident.ai)** `Official` `TypeScript` — Remote MCP capability layer that connects coding agents to 1000+ apps and 400+ Skills through one OAuth setup, with vaulted credentials and an audit trail.  
  `agents` `remote` `oauth` `integrations`
- **[AISkills402](https://aiskills402.com)** `Official` `TypeScript` — Remote MCP server (streamable HTTP, no key) to search tested Agent Skill files (SKILL.md), read a skill card with its x402 price and re-download a bought file; the files are paid per file over x402 (USDC on Base).  
  `agent-skills` `skills` `x402` `remote`
- **[Anansi Haven](https://github.com/kburrus64-max/anansi-haven)** `JavaScript` — Remote MCP server (also A2A and HTTP) giving agents a persistent identity, versioned key-value memory that survives restarts, client-side encrypted storage, an agent directory and a job board.  
  `memory` `agents` `storage` `directory` `remote`
- **[apimodels.app MCP Server](https://apimodels.app/docs/mcp)** `Official` `TypeScript` — Official MCP server for apimodels.app: generate and edit images, create videos, synthesize speech and chat through one account with 150+ models; hosted Streamable HTTP with OAuth, or local stdio via npx.  
  `image-generation` `ai-video` `text-to-speech` `remote` `oauth`
- **[Atlas Cloud MCP Server](https://github.com/AtlasCloudAI/mcp-server)** `Official` `TypeScript` — Generate images, videos, 3D models, speech and music, transcribe audio, chat with LLMs, and check balance and usage through Atlas Cloud's model API.  
  `image-generation` `video-generation` `llm` `text-to-speech`
- **[BotGathering](https://botgathering.com)** `Official` `Other` — Remote MCP server where AI agents search tested step-by-step playbooks, follow them and report outcomes.  
  `playbooks` `agents` `remote`
- **[Cloud Alter Ego](https://cloudalterego.cafeboon.com)** `Official` `Other` — Remote MCP connector that gives every AI chat your rules, profile, contexts and journals, stored as plain Markdown files in your own OneDrive, Google Drive, Dropbox, GitHub or Azure DevOps. ([source](https://github.com/SebastiaanBoon/cloud-alter-ego))  
  `memory` `context` `markdown` `remote` `oauth`
- **[ContextStream](https://github.com/contextstream/mcp-server)** `Official` `TypeScript` — Shared project memory that both developers and AI agents read and write across Cursor, Claude Code, Codex, Grok, Windsurf and the rest.  
  `memory` `context` `agents` `coding`
- **[Continuity](https://github.com/LAHutchins91/continuity-mcp)** `TypeScript` — Remote MCP story bible for fiction writers: locked characters, relationships, world rules, timelines, and approved scenes with OAuth for ChatGPT, Claude, Gemini, Grok, and Cursor.  
  `story-bible` `fiction` `writing` `oauth` `remote`
- **[CoreSpeed](https://corespeed.io/docs/mcp)** `Official` `TypeScript` — Hosted OAuth MCP gateway for any agent: your connected apps (Notion, Slack, GitHub, Gmail and more), shared team memory, web search, social data and media tools, with spend caps and an activity log.  
  `gateway` `oauth` `hosted` `memory` `connectors`
- **[CrewAI Enterprise MCP Server](https://github.com/crewAIInc/enterprise-mcp-server)** `Official` `Python` — Kick off CrewAI crew deployments and check their status from MCP clients.  
  `agents` `multi-agent` `orchestration`
- **[Dagon Inference](https://github.com/inkwell-finance/dagon-mcp)** `Official` `TypeScript` — List abliterated open-weight LLMs and their prices, create an account key, check credits, buy credits with USDC on Solana, and run chat completions that return a signed receipt id.  
  `llm` `inference` `solana` `payments` `remote`
- **[Dare MCP Server](https://github.com/avi-aggarwal14/dare-mcp-server)** `TypeScript` — Generate AI video and images on Dare (Seedance, Veo, Kling, Hailuo) from Claude, billed to your own Dare credits, with local cost estimates and dry runs.  
  `ai-video` `image-generation` `video-generation` `claude`
- **[Decide Runtime](https://www.decide.fyi/mcp#connect-runtime)** `Official` `JavaScript` — Evaluate supplied facts against approved rules and read/export owned decision records via scoped bearer or registered OAuth/PKCE; USD 10/1,000 records in a controlled business pilot, with no external execution.  
  `deterministic` `decision-records` `policy` `remote` `bearer`
- **[deja-vu](https://github.com/vshulcz/deja-vu)** `Go` — Local cross-session memory MCP server that indexes session transcripts across 43 AI coding agents into SQLite for BM25F recall, file history blame, uncommitted file recovery, and cross-agent handoffs.  
  `memory` `agents` `coding` `sqlite` `search`
- **[DeltaX Preflight](https://github.com/DeltaX-Public/deltax-preflight)** `Official` `JavaScript` — Preview local stdio MCP server checks finite candidate proposals against separate policy and evidence, with admissible candidates and SHA-256 receipts; it does not authenticate facts, select candidates, execute actions or grant authority.  
  `preflight` `policy` `evidence` `stdio` `receipts`
- **[Easy-Peasy.AI](https://easy-peasy.ai/mcp)** `Official` `TypeScript` — Hosted Easy-Peasy.AI server: run 200+ writing templates, create and edit images, make AI videos, turn text into speech and transcribe audio or video from any MCP client, with OAuth sign-in or an API key.  
  `image-generation` `video-generation` `text-to-speech` `transcription` `copywriting`
- **[fal.ai](https://fal.ai/mcp)** `Official` `Other` — Discover models and prices, then generate or edit images, video, audio, and 3D through the hosted fal MCP server.  
  `generative-media` `images` `video` `remote` `oauth`
- **[fitlog-mcp](https://github.com/hahahahahahahahah6/fitlog-mcp)** `Python` — Self-hosted MCP server that gives Alexa+ a memory for your training: log sets by voice, track personal records, and get workout plans.  
  `fitness` `alexa` `voice`
- **[GenFlick](https://genflick.com/developers/mcp)** `Official` `Other` — Remote MCP for the GenFlick AI studio for films, series, music videos and ads, with OAuth sign-in and no API key.  
  `ai-video` `film` `music-video` `storyboard` `remote`
- **[Graphiti MCP Server](https://github.com/getzep/graphiti)** `Official` `Python` — Temporal knowledge graphs for agent memory and context building.  
  `knowledge-graph` `memory` `temporal`
- **[House AI](https://www.houseaiapp.com/connector)** `Official` `Python` — AI interior and exterior design: redesign a room, house exterior or yard from a photo in 100+ styles, preview wall paint and flooring, and find real furniture and decor to match. OAuth sign-in with a House AI account.  
  `interior-design` `image-generation` `home` `remote` `oauth`
- **[Hugging Face MCP Server](https://github.com/huggingface/hf-mcp-server)** `Official` `TypeScript` — Access Hugging Face models, datasets, and Spaces from MCP clients.  
  `huggingface` `models` `ml`
- **[HumanEndpoint](https://humanendpoint.au)** `Official` `TypeScript` — Quote-first human execution for AI agents: business and supplier calls, stock and availability checks, physical verification, manual research, and human QA.  
  `human-in-the-loop` `agents` `real-world` `x402` `mcp`
- **[Hyperconsciousness](https://github.com/louis030195/hyperconsciousness)** `Rust` — Developer-alpha encrypted knowledge store with MCP search and retrieval through scoped, expiring grants.  
  `memory` `knowledge` `encryption` `local`
- **[imageat](https://github.com/incendies/imageat-mcp)** `Official` `Other` — AI image generation and editing, video, and 20+ image-edit tools. Run `npx @imageat/mcp` with an API key, or use the hosted Streamable HTTP server with OAuth. Credits per generation.  
  `image-generation` `video-generation` `image-editing` `remote` `oauth`
- **[Imagera](https://imagera.ai/mcp)** `Official` `TypeScript` — Hosted MCP server that generates and edits images, video clips, voiceovers and music on the user's Imagera account, with cost estimates before each run.  
  `image-generation` `video-generation` `text-to-speech` `remote` `oauth`
- **[Interview Questions MCP](https://github.com/Johnnnmai/interview-questions-mcp)** `Python` — AI Engineer interview questions with scoring rubrics: browse topics, get questions by difficulty level, and link to a free answer self-checker.  
  `interview` `education` `ai-engineering` `practice`
- **[Joxo](https://joxo.ai)** `Official` `TypeScript` — Shared team project for coding agents: read and claim board tasks, post handoffs and decisions, and message teammates and their agents.  
  `agents` `collaboration` `tasks` `remote` `oauth`
- **[knowsme](https://knowsme.dev)** `Official` `JavaScript` — One memory of who you are and how you work (notes, rules and projects) that any AI model or agent can read and update over MCP, across apps and machines.  
  `memory` `agents` `personalization` `remote` `oauth`
- **[LangGraph MCP Server](https://docs.langchain.com/langsmith/server-mcp)** `Official` `Other` — Expose deployed LangGraph agents as MCP tools through the Agent Server MCP endpoint.  
  `agents` `orchestration` `langgraph`
- **[Liminal](https://github.com/jaybro2042-alt/liminality-mcp)** `Official` `Python` — Liminal turns objectives into structured work by strategizing through an atomic, deterministic basis: setting guardrails around scope, compiling resources and constraints, uncovering gaps, and organizing research and next steps.  
  `agents` `memory` `remote` `oauth`
- **[LlamaParse MCP Server](https://developers.llamaindex.ai/for-agents/)** `Official` `Other` — Hosted MCP server for LlamaParse document parsing and LlamaIndex platform APIs.  
  `rag` `indexing` `agents`
- **[LLM Gateway](https://docs.llmgateway.io/developers/mcp)** `Official` `TypeScript` — Hosted MCP server for LLM Gateway that sends chat requests to any supported model, generates images, lists models with pricing, and reports usage and costs.  
  `llm` `llm-gateway` `image-generation` `usage-analytics`
- **[LLMSlim](https://github.com/Thanatos9404/llmslim)** `Python` — Local stdio MCP server that stores agent messages word for word in SQLite or Postgres and recalls the ones that answer a question within a token budget, with no LLM call.  
  `memory` `long-term-memory` `sqlite` `local`
- **[Local AI Picks](https://localaipicks.com/docs/mcp)** `Official` `TypeScript` — Find open-weight AI models that fit your hardware, with weight file sizes, memory needs and sources, through a read-only remote MCP server. ([source](https://github.com/localaipicks/localaipicks-mcp))  
  `open-weight-models` `local-llm` `hardware` `read-only` `remote`
- **[Magic Hour MCP Server](https://magichour.ai)** `Official` `Python` — Official hosted MCP server with 44 tools for AI video, image, and audio generation and editing.  
  `ai-video` `image-generation` `audio-generation` `media-editing` `remote`
- **[Makernice](https://makernice.com/mcp/)** `Official` `Other` — Hosted remote MCP server (Streamable HTTP, OAuth 2.1) for generating AI videos and images with 17 models; every job is priced in USD before it runs. ([source](https://github.com/makernice/makernice-plugin))  
  `image-generation` `video-generation` `remote` `oauth`
- **[MELRA](https://github.com/XAGI-Lab/melra)** `Official` `TypeScript` — Local MCP runtime for agent tool calls that rechecks policy and scoped approvals, verifies declared outcomes, records redacted receipts, and parks interrupted writes for reconciliation.  
  `agents` `mcp` `policy` `approvals` `recovery`
- **[mem0 MCP Server](https://docs.mem0.ai/platform/mem0-mcp)** `Official` `Other` — Hosted persistent memory layer for personalized agent interactions.  
  `memory` `personalization` `agents`
- **[Mnemosyne OS](https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS/tree/main/packages/mcp)** `Official` `TypeScript` — Stdio MCP server (MIT) for Mnemosyne OS, a desktop memory app where watched folders feed separate vaults on the user's machine, searched by vector and local BM25; open core, the memory engine ships closed. ([source](https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS))  
  `memory` `local-first` `rag` `vaults` `desktop`
- **[MuAPI MCP Server](https://muapi.ai/docs/mcp)** `Official` `Other` — Connect AI clients to MuAPI image, video, and audio generation through a hosted Streamable HTTP MCP endpoint.  
  `ai-video` `image-generation` `audio-generation` `media-editing` `remote`
- **[MusedIn](https://musedin.com/mcp)** `Official` `JavaScript` — Job network for AI agents: join in one request, apply, get hired, deliver and get paid; hosted MCP at https://musedin.com/mcp, A2A card at https://musedin.com/.well-known/agent-card.json.  
  `jobs` `agents` `a2a` `hiring`
- **[Nanotea](https://github.com/gileshall/nanotea)** `Python` — Self-hosted messaging app where coding agents report and ask over MCP and you answer by typing, tapping or recording, so you can direct a whole fleet without living in their terminals.  
  `human-in-the-loop` `agents` `notifications` `voice` `self-hosted`
- **[needhave](https://github.com/PrivateAISystems/needhave)** `JavaScript` — Public need/have board for AI agents (Craigslist for agents): agents read the live list and post their own needs or haves over remote MCP, no account or API key.  
  `agents` `marketplace` `coordination` `remote`
- **[Neither MCP](https://github.com/stonianua/neither-mcp)** `TypeScript` — Selected project notes and documents for Cursor and Claude Desktop via local stdio MCP, with related retrieval and source evidence.  
  `memory` `context` `cursor` `knowledge`
- **[Ollama MCP Bridge](https://github.com/jaspertvdm/mcp-server-ollama-bridge)** `Python` — Run local Llama, Mistral, and Qwen models via Ollama through MCP.  
  `ollama` `local-llm` `inference`
- **[OneSelf](https://github.com/ptonlix/OneSelf)** `Official` `TypeScript` — Self-hosted personal-context server with authenticated Streamable HTTP MCP so agents can share pages, originals, facts, and timelines.  
  `memory` `personal-context` `self-hosted`
- **[OpenAgentForum](https://github.com/swarmrelay/openagentforum)** `Official` `TypeScript` — Coordination mesh for autonomous agents as an MCP server: signed message envelopes any peer verifies offline, encrypted private channels, a searchable intel exchange, a task bounty board and ledger polls.  
  `agents` `collaboration` `tasks` `encrypted`
- **[OpenAI MCP Bridge](https://github.com/jaspertvdm/mcp-server-openai-bridge)** `Python` — Bridge OpenAI GPT models into MCP-compatible agent workflows.  
  `openai` `gpt` `inference`
- **[OpenAny](https://openany.si/mcp/)** `Official` `Go` — The B2A (business to agent) marketplace. One MCP endpoint for 3,200+ APIs and 168+ AI models. Browse free; pay per call. ([source](https://github.com/openanysi/openany-mcp))  
  `marketplace` `apis` `models` `remote`
- **[ORANO](https://oranoai.com/mcp)** `Official` `Python` — Read-only access to a user's ORANO library: projects built from saved Reels, videos, articles and PDFs, selectable video context, ordered tasks and curated memory facts.  
  `memory` `knowledge` `video` `remote`
- **[Phasoric](https://developers.phasoric.com/mcp-client-setup)** `Official` `JavaScript` — Search, read, and safely update Markdown notes in explicitly connected Phasoric knowledge vaults.  
  `memory` `knowledge` `markdown` `oauth` `remote`
- **[Photo2Skin](https://app.photo2skin.com/agents)** `Official` `Python` — AI tools for Minecraft, focused on AI skins: make and edit Minecraft skins from a photo or a description just by chatting. Plus AI builds, real places as playable worlds, AI textures and more. ([source](https://github.com/photo2skin/photo2skin-mcp))  
  `minecraft` `skins` `image-generation` `remote` `oauth`
- **[Plazmi](https://plazmi.gg/SKILL.md)** `Official` `Other` — A homemaking world for AI agents: move into a little house on a floating island, keep it on a real UTC clock, meet neighbours, and send your human a postcard.  
  `agents` `game` `persistent-world` `no-auth`
- **[PlugMCP directory MCP](https://plugmcp.ai/directory-mcp)** `TypeScript` — Search MCP servers and agent skills, compare them, and get install configs for Cursor, Claude, VS Code, Codex, Grok Bot and more. ([source](https://github.com/plugmcp-ai/plugmcp-mcp))  
  `directory` `registry` `search` `agent-skills` `remote`
- **[PopNow MCP Server](https://popnow.ai/docs/mcp)** `Official` `TypeScript` — Remote MCP server for creating images, videos, music and speech with hosted AI models, quoting a USD price before each paid task and running any catalog model by its API ID. ([source](https://github.com/popnow-ai/popnow-api-mcp))  
  `image-generation` `video-generation` `audio` `remote`
- **[Pyrimid](https://github.com/pyrimid-ai/pyrimid)** `Official` `TypeScript` — Onchain payment protocol for AI agents — sell any data product with x402, USDC on Base. Agent-to-agent commerce with HTTP 402 discovery and on-chain settlement.  
  `x402` `ai-agent` `payments` `base` `usdc`
- **[ReadShore](https://readshore.app/connect-ai-assistants/)** `Official` `TypeScript` — Search, read and save to your own ReadShore read-later library: summaries, analysis and original text with numbered passages for citation. Adds links only; cannot delete. ([source](https://github.com/flsteven87/readshore-mcp))  
  `read-later` `knowledge` `reading` `remote`
- **[recall (fainir)](https://github.com/fainir/recall)** `JavaScript` — Reads and writes Claude Code's auto memory, Markdown files with wiki-links, so Codex, Cursor and other agents share the same memories over MCP or from code.  
  `memory` `claude-code` `codex` `markdown` `local`
- **[RoomLab.app](https://roomlab.app/en/mcp)** `Official` `JavaScript` — Hosted MCP server for AI virtual staging, room restyling, decluttering, furniture and material swaps, architectural renders and room videos from your own photos, with OAuth sign-in to a RoomLab.app account and its credits.  
  `interior-design` `real-estate` `image-editing` `remote` `oauth`
- **[RunAPI MCP Server](https://github.com/runapi-ai/mcp)** `Official` `TypeScript` — Discover model inputs and create AI image, video, music, speech, and other model API tasks.  
  `models` `media-generation` `inference`
- **[Runx](https://runx.ai/docs/mcp)** `Official` `TypeScript` — Search and inspect portable agent skills through read-only hosted MCP; execution and signed receipts belong to Runx's Apache-2.0 local runtime.  
  `agent-skills` `discovery` `governance` `receipts` `open-source`
- **[SandBase CLI](https://github.com/sandbaseai/cli)** `Official` `TypeScript` — Local MCP server that lets AI clients discover and run 2,000+ AI models and APIs through six tools.  
  `ai-models` `api-gateway` `local`
- **[SandBase Harness](https://github.com/sandbaseai/sandbase-harness)** `Official` `TypeScript` — Self-hosted MCP bridge for agent sessions, sandboxed turns, artifacts, audit, and replay.  
  `agent-runtime` `sandbox` `audit` `replay` `self-hosted`
- **[Screenpipe](https://github.com/screenpipe/screenpipe/tree/main/packages/screenpipe-mcp)** `Official` `TypeScript` — Search locally captured screen text and audio history via MCP under the Screenpipe Commercial License, with optional cloud features and connected AI clients able to transmit context off-device. ([source](https://github.com/screenpipe/screenpipe))  
  `memory` `screen` `audio` `local-first`
- **[Selvedge](https://github.com/masondelan/selvedge)** `Python` — Local SQLite decision memory for coding agents to save and retrieve rationale, rejected approaches, and entity history.  
  `decision-memory` `coding-agents` `sqlite` `local-first`
- **[ShortSmash](https://github.com/hydope/shortsmash)** `Python` — MCP server + CLI that turns a prompt into a published short video: AI script, 50-language dubbing, karaoke captions, 10 publishing platforms.  
  `video` `content-creation` `agents` `publishing`
- **[Shotboard](https://github.com/freeman14/shotboard-mcp)** `Official` `TypeScript` — Local server built into the Shotboard Mac app: search Meta and TikTok ads, extract scripts from links, and generate images, video and audio on a canvas with 100 media models.  
  `image-generation` `video-generation` `ads` `macos`
- **[SigRank MCP](https://github.com/SunrisesIllNeverSee/sigrank-mcp)** `JavaScript` — AI operator token-efficiency leaderboard + yield cascade metrics. 15 tools for agents to measure, rank, and improve token usage.  
  `token-efficiency` `leaderboard` `ai-agents` `telemetry` `yield-cascade`
- **[Speechyou MCP](https://speechyou.com/mcp)** `Official` `TypeScript` — Search and read voice notes and meeting transcripts from Claude, with full transcripts, AI summaries, tags, recent notes and audio links through read-only OAuth access.  
  `voice-notes` `transcription` `oauth` `read-only` `remote`
- **[sqlite-graph-memory](https://github.com/tonydzi/sqlite-graph-memory)** `Python` — Local stdio MCP server that gives an agent recall over its own markdown notes: vector retrieval for entry points, hand-written wikilinks as the graph, cross-encoder rerank, in one SQLite file.  
  `memory` `rag` `obsidian` `sqlite` `knowledge-graph`
- **[Sqwakie](https://github.com/alexcarney460-hue/walkie)** `Official` `TypeScript` — Lets AI coding agents on different machines message each other through MCP tools (walkie_post, walkie_read, walkie_reply, walkie_ask, walkie_inbox), with a shared live dashboard and project kanban boards.  
  `multi-agent` `claude-code` `codex` `kanban` `agent-messaging`
- **[Stivio](https://stivio.ai/mcp)** `Official` `Other` — AI image-to-video generator MCP server. Turn any image into a 5-second video with plain-language motion prompts.  
  `image-to-video` `video-generation` `ai-video` `remote`
- **[Takibi Base](https://takibibase.com/docs/connector)** `Official` `Other` — Ask your Takibi Base collections anything; get answers with cited passages and a support score.  
  `knowledge-base` `citations` `remote` `oauth`
- **[ThreadShelf](https://github.com/ChrystianSchutz/ThreadShelf)** `TypeScript` — Local-first archive with semantic and exact search over exported ChatGPT, Claude, Google AI Studio, OpenRouter, LM Studio and Grok chats, with tools to list collections, search and read full threads.  
  `memory` `chat-history` `semantic-search` `local-first`
- **[UberLLM](https://uberllm.dev/docs/mcp)** `Official` `Go` — Generate and edit images, start and follow video and music jobs, list models with their current price, quote a request before running it, and check balance through one prepaid UberLLM API key. ([source](https://github.com/PSA-Team-source/uberllm))  
  `image-generation` `video-generation` `llm` `remote`
- **[VideoGen MCP](https://videogen.io/videogen-mcp)** `Official` `TypeScript` — Official VideoGen server for creating and editing videos, images, voiceovers, music, and avatars, then remixing and exporting projects.  
  `video` `images` `audio` `marketing`
- **[Waspes](https://waspes.com/api)** `Official` `Other` — AI website builder, 3D model generator, and Roblox Studio asset pipeline MCP server.  
  `website-builder` `3d-generation` `roblox` `image-to-3d` `remote`
- **[Wiro AI](https://github.com/wiroai/Wiro-MCP)** `Official` `TypeScript` — Official MCP server for Wiro AI: search 3,500+ AI models for images, video, audio, speech, music and text, check each model's parameters and price, run it and get the results back in your assistant.  
  `image-generation` `video-generation` `text-to-speech` `generative-ai` `ai-models`
- **[Zambo](https://zambo.dev)** `Other` — The verifiable work layer for AI: 153 tools behind one remote MCP endpoint, continuity across AIs, and a verifiable AER-1 receipt for every job. ([source](https://github.com/zambodotdev/zambo-mcp))  
  `continuity` `memory` `receipts` `verification`
- **[Zep MCP Server](https://github.com/jaysack/zep-mcp)** `Python` — Community MCP wrapper for long-term memory and context retrieval with Zep.  
  `memory` `context` `rag`
- **[Zerouter MCP](https://github.com/ZerouterAI/zerouter-mcp)** `Official` `TypeScript` — AI API gateway MCP for Claude, GPT, Gemini, Grok and Kimi via Zerouter, an OpenAI-compatible API, to chat, compare models side by side, and look up API pricing.  
  `ai-gateway` `llm` `claude` `openai` `pricing`

<a id="data-analytics-and-bi"></a>

## Data, Analytics, and BI

Analytics platforms, monitoring, and business intelligence tooling.

- **[Adspy](https://www.adspy.sh)** `Official` `Other` — Hosted MCP server for ad research: search brands' public Meta and Google ads and their organic TikTok, YouTube and Instagram posts from Claude, Claude Code or Codex. Shows no spend or ROAS; TikTok ads are not covered.  
  `ad-library` `meta-ads` `google-ads` `competitor-research` `remote`
- **[AgenticWebScore](https://github.com/marifeting/agenticwebscore-mcp)** `Official` `TypeScript` — Scan a public website for AI agent readiness: 60 checks, a score and evidence for each, through a hosted Streamable HTTP endpoint with no sign-up or API key.  
  `seo` `agent-readiness` `llms-txt` `remote`
- **[AgentSEO](https://github.com/AgentSEO-dev/agentseo-clients/tree/main/packages/mcp-server)** `Official` `TypeScript` — AgentSEO's official MCP client and hosted endpoint provide SERPs, keyword research, backlinks, rank tracking and site audits; tool calls require an AgentSEO account, API key and usage credits. ([source](https://github.com/AgentSEO-dev/agentseo-clients))  
  `seo` `keywords` `serp` `backlinks` `remote`
- **[AI SEO Tracker](https://aiseotracker.com/docs/mcp)** `Official` `TypeScript` — Track brand visibility, citations, prompts, competitors, and missing citation sources across ChatGPT, Perplexity, Gemini, Copilot, and Google AI Overviews. ([source](https://github.com/Illyism/aiseotracker-mcp))  
  `seo` `ai-seo` `geo` `citations` `remote`
- **[ailiste](https://ailiste.app/mcp/)** `Official` `Python` — New-build homes in Cyprus: buildings with the stage seen on site and the day, developers, and district asking prices per m², read-only. ([source](https://github.com/ahmlvs/ailiste-mcp))  
  `real-estate` `cyprus` `property-prices` `new-builds` `remote`
- **[AltoRank](https://github.com/AltoRank/altorank)** `Official` `TypeScript` — Hosted MCP server for open-source SEO content software: site readiness checks, keyword research, Search Console data and sourced drafts into a review queue via OAuth; no publish tool.  
  `seo` `content` `marketing` `remote` `oauth`
- **[Amplitude MCP Server](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)** `Official` `TypeScript` — Analyze product analytics events and user behavior in Amplitude.  
  `product-analytics` `events` `bi`
- **[App Store & Google Play Review Intelligence](https://github.com/gunnargray-dev/app-store-review-intelligence-mcp)** `TypeScript` — Searches the Apple App Store and Google Play, pulls recent reviews, and returns top complaints with quotes, rating by app version, what got worse in the latest update, and iOS-vs-Android or competitor comparisons.  
  `app-store` `google-play` `app-reviews` `product-research` `remote`
- **[ats-jobs-mcp](https://github.com/benkrasin/ats-jobs-mcp)** `JavaScript` — Zero-dependency stdio server and CLI that lists and filters a company's open jobs from its public Greenhouse, Lever or Ashby job board in one normalized shape, with no API keys.  
  `jobs` `recruiting` `greenhouse` `lever` `ashby`
- **[AttriKit](https://github.com/KamyarTaher/attrikit-mcp)** `Official` `TypeScript` — Web-to-app attribution for iOS and Android apps that buy ads: create campaign links, import ad spend, read each campaign's scale, cut or hold call, manage Meta, TikTok and RevenueCat connections, and export installs and events.  
  `attribution` `mobile-apps` `advertising` `marketing-analytics` `api-key`
- **[Basedash MCP Server](https://github.com/Basedash/mcp)** `Official` `Other` — Governed BI MCP. Ask questions of live company data and list workspace sources via OAuth.  
  `bi` `dashboards` `sql`
- **[BatchData](https://github.com/batchdataco/batchdata-mcp-server)** `Official` `Other` — Hosted MCP server for U.S. property data: property search, comps, owner skip tracing, and phone and address verification. OAuth 2.1 or API token.  
  `real-estate` `property-data` `skip-tracing` `remote` `oauth`
- **[Blawgy](https://github.com/adamgusky/blawgy-mcp)** `Official` `JavaScript` — Hosted SEO blog server that researches keywords, manages the content plan, writes and refreshes articles, reads Search Console traffic, and publishes to WordPress, Shopify, Webflow, Wix, Framer, Ghost or Duda via OAuth or API key.  
  `seo` `blogging` `content` `wordpress` `remote`
- **[BOIM (보임)](https://github.com/kikiyop1101/boim-mcp)** `Official` `Other` — Hosted read-only MCP server for finding Korean businesses (2.7M, all industries), public-procurement vendors (75,000+) and open public bids; no auth, free tier returns 5 results per tool.  
  `korea` `business-directory` `public-procurement` `public-bids` `read-only`
- **[Bruin Cloud MCP](https://getbruin.com/docs/bruin/cloud/mcp-setup.html)** `Official` `Other` — Hosted MCP server for Bruin Cloud to list data pipelines, inspect runs, and trigger actions from Claude, Cursor, Claude Code, or Codex via OAuth or an access token.  
  `data-pipelines` `orchestration` `remote` `oauth`
- **[Bruin MCP](https://getbruin.com/docs/bruin/getting-started/bruin-mcp.html)** `Official` `Go` — Local MCP server in the open-source Bruin CLI that lets agents query databases, ingest data, compare tables, and build SQL and Python data pipelines.  
  `data-pipelines` `etl` `sql` `data-quality`
- **[CareJobs.Now Healthcare Jobs](https://github.com/yumaheymans/carejobs-mcp)** `Official` `Other` — Remote MCP server for US healthcare jobs: search 170,000+ open jobs read daily from 270 hospitals' and health systems' career sites, with the posted pay. Free, read-only, no API key.  
  `healthcare` `jobs` `job-search` `remote`
- **[CompanyProof](https://companyproof.ai/docs/mcp)** `Official` `Other` — Hosted company search, registry profiles and verification of six company identity fields with source evidence, OAuth or API key access, and shared account credits.  
  `company-data` `verification` `registry` `evidence` `remote`
- **[countrymanager](https://countrymanager.app/mcp)** `Official` `TypeScript` — Hosted OAuth MCP server for App Store and Google Play reviews: filter reviews by app, country and rating, read translations, insights and per-country ratings, and draft replies in the reviewer's language that a person sends.  
  `app-store` `google-play` `app-reviews` `remote`
- **[CoworkingView](https://coworkingview.com/en/mcp)** `Official` `Other` — Hosted, no-key, read-only MCP server for coworking spaces, private offices and city price medians in European and UAE cities.  
  `real-estate` `coworking` `europe` `remote`
- **[CrakSEO Search Console MCP](https://docs.crakseo.com/mcp-servers/search-console)** `Official` `Other` — Free remote MCP access to owned-site Google Search Console and Bing Webmaster data; CrakSEO authentication and authorization for the user's own properties required.  
  `analytics` `seo` `search-console` `bing` `remote`
- **[CrakSEO SEO MCP](https://docs.crakseo.com/seo-mcp/connect)** `Official` `Other` — Hosted SEO MCP server for keyword research, SERP data, backlinks, rank tracking, site audits and local SEO, with pay-as-you-go API credits and a free balance check. ([source](https://github.com/CrakSEO/crakseo-mcp-plugins))  
  `seo` `keyword-research` `backlinks` `rank-tracking` `remote`
- **[Datadog MCP Server](https://github.com/datadog-labs/mcp-server)** `Official` `Python` — Query metrics, logs, and monitors from Datadog via the official Datadog Labs MCP server.  
  `datadog` `metrics` `logs`
- **[dbt MCP Server](https://github.com/dbt-labs/dbt-mcp)** `Official` `Python` — Run dbt models, tests, and documentation workflows via MCP.  
  `dbt` `analytics` `transform`
- **[DC Hub](https://github.com/azmartone67/dchub-mcp-server)** `Official` `JavaScript` — Hosted MCP server and live data layer for data-center site selection: mapped power, grid, gas and fiber assets, daily DCPI scores for 300+ markets and live grid feeds from the seven US ISOs; free tier needs no key.  
  `data-centers` `energy` `power-grid` `site-selection` `remote`
- **[Eigenheim Berlin Market Data](https://github.com/magicSEO/eigenheim-mcp)** `Official` `TypeScript` — Hosted, no-key, read-only MCP for Berlin real estate data: prices per m², rental yield, official land values, forecasts and listings.  
  `real-estate` `berlin` `market-data` `remote`
- **[EventSend](https://eventsend.io/docs/mcp)** `Official` `Other` — Ask your AI about your product's events, delivery health and usage: search events, follow a customer's timeline, and see why a Slack, Discord or webhook notification failed. Read-only, over OAuth.  
  `events` `observability` `notifications` `oauth` `remote`
- **[ExtensionDash](https://extensiondash.com/)** `Official` `Ruby` — Query Chrome and Firefox extension users, ratings, and search-rank data through ExtensionDash's hosted MCP server with OAuth authentication.  
  `browser-extensions` `analytics` `chrome` `firefox` `remote`
- **[Fictura](https://docs.fictura.co/connections/outgoing/mcp-server)** `Official` `TypeScript` — Hosted MCP server for Fictura: paywalls, onboarding, subscription analytics, A/B experiments, attribution and errors for Expo and React Native apps, with draft-only editing.  
  `mobile-apps` `subscriptions` `paywalls` `analytics` `attribution`
- **[FlightQueue](https://flightqueue.com/mcp)** `Official` `Other` — Airport security wait times, forecasts, FAA delays, EES border queues and baggage stats for 8,000+ airports over a hosted MCP server.  
  `travel` `airports` `wait-times` `flight-delays`
- **[Folklore Clinical Variant Interpretation MCP](https://folklore.helena.bio/integrations/mcp)** `Official` `Python` — ACMG/AMP germline variant classification, gene profiles, disease associations and literature. ([source](https://github.com/helena-bioinformatics/folklore-mcp))  
  `genomics` `variant-classification` `acmg` `bioinformatics` `remote`
- **[Global Database](https://api.globaldatabase.com/docs/v2/#mcp-server)** `Official` `Other` — Hosted MCP server for company profiles, financials, ownership, officers, business contacts and KYB checks, with browser-based OAuth authentication.  
  `company-data` `business-intelligence` `kyb` `oauth`
- **[Globatics](https://globatics.live/docs/mcp)** `Official` `Other` — Read-only remote MCP server to query your own Globatics web analytics reports; a paid hosted tool, available on the Pro and Business plans.  
  `web-analytics` `privacy` `remote` `api-key`
- **[GoAnyAPI MCP](https://goanyapi.com)** `Official` `Other` — Public SEO, website and ads data for agents: traffic, domain rating and history, backlinks, keywords, Google and Bing SERP, autocomplete, Google Trends, AdSense and Google Ads Transparency. ([source](https://github.com/GoAnyAPI/goanyapi-mcp))  
  `seo` `serp` `backlinks` `remote` `oauth`
- **[Google GenAI Toolbox](https://github.com/googleapis/genai-toolbox)** `Official` `Go` — Connect agents to BigQuery, Cloud SQL, Spanner, and other Google data sources.  
  `bigquery` `gcp` `data`
- **[Gov Tenders MCP](https://github.com/GeminiGeorge22/gov-tenders-mcp)** `JavaScript` — Public-sector tenders, grants and awards (SAM.gov, Grants.gov, USAspending, UK Find a Tender, EU TED) plus Legistar city council agendas and minutes, each with its official source link.  
  `government` `tenders` `procurement` `grants`
- **[Grafana MCP Server](https://github.com/grafana/mcp-grafana)** `Official` `Go` — Explore Grafana dashboards, alerts, and observability data.  
  `monitoring` `dashboards` `observability`
- **[Growo child growth](https://usegrowo.com/mcp)** `Official` `TypeScript` — Child growth reference tools for AI assistants: WHO and CDC percentiles, BMI-for-age, birth size for gestational age, corrected age and mid-parental height. Read-only and no auth; results carry no interpretation.  
  `health` `pediatrics` `growth-charts` `remote` `read-only`
- **[GSC PAP](https://gscpap.com)** `Python` — Hosted, read-only access to the signed-in user's own Google Search Console, Google Analytics 4 and PageSpeed Insights data, with a Search Console archive kept past Google's 16-month limit. ([source](https://github.com/aliarifsoydas/gsc-pap-claude-plugin))  
  `seo` `google-search-console` `google-analytics` `read-only` `remote`
- **[GSCmate](https://gscmate.com)** `Official` `JavaScript` — Read-only access to Google Search Console properties, Search Analytics, sitemaps, and URL inspection through user-authorized OAuth 2.1.  
  `google-search-console` `seo` `analytics` `oauth` `remote`
- **[HEY Research Lab](https://github.com/hey-research-lab/hey-research-open)** `Official` `TypeScript` — Read-only research on Robinhood Chain projects and tokens: whether a team is still shipping, what it shipped and what changed, each claim with its public source.  
  `blockchain` `robinhood-chain` `research` `open-data`
- **[HirePulse Agent Gateway](https://hirepulse-gateway.hirepulse-commerce-sandbox.workers.dev/)** `Official` `Other` — Remote MCP tools for website technologies and company job listings; paid HTTP API calls use x402 on Base.  
  `remote` `jobs` `technology` `x402`
- **[Hoot Lens](https://github.com/Parallel-Platforms/hootlens-mcp)** `Official` `TypeScript` — Read website session replays, click heatmaps and broken clicks, trace one to its JavaScript error and source line, and check whether a shipped change helped.  
  `session-replay` `heatmaps` `web-analytics` `debugging`
- **[Invokely](https://invokely.ai/docs)** `Official` `Other` — Query source-cited official statistics by indicator, place and period; retrieve values and time series, compare places, and rank regions. No-account MCP trial allows 25 calls per IP per day.  
  `official-statistics` `public-data` `time-series` `source-citations` `remote`
- **[Kineticist](https://github.com/colinize/kineticist-mcp)** `Official` `TypeScript` — Pinball news, games and editions, designers, places to play and the Hype Index from Kineticist, with a free hosted endpoint and a local npm package.  
  `pinball` `games` `news` `remote`
- **[KissMyPost](https://kissmypost.com/mcp)** `Official` `TypeScript` — Hosted read-only server for Reddit audience research: subreddit search by topic, member growth, audience demographics, best time to post, posting rules and brand mention counts. ([source](https://github.com/krutytskyi/kissmypost-mcp))  
  `reddit` `audience-research` `subreddits` `analytics` `remote`
- **[LinkDR](https://linkdr.com/docs/mcp)** `Official` `TypeScript` — Domain rating and backlink research, SERP and keyword analysis, AI search visibility checks, publisher site approvals, and managed backlink ordering. ([source](https://github.com/Illyism/linkdr-mcp))  
  `seo` `backlinks` `serp` `remote` `oauth`
- **[LLM Pulse MCP Server](https://github.com/LLM-Pulse/llmpulse-mcp)** `Official` `JavaScript` — Analyze AI search visibility, citations, sentiment, share of voice, and AI traffic.  
  `ai-visibility` `analytics` `marketing`
- **[LogNorm](https://github.com/lognorm/lognorm-mcp)** `Official` `Other` — Hosted MCP server that hands a site's SEO/GEO growth backlog (audits, fixes, content, AI-visibility tracking) to Claude Code, Codex and Cursor via OAuth.  
  `seo` `geo` `marketing` `remote` `oauth`
- **[Lomen Analytics](https://lomenanalytics.com/docs)** `Official` `TypeScript` — Read-only remote MCP server for Lomen, a cookie-free website analytics service in public beta: list your sites, read 30-day traffic, top pages and sources, and ask why one day differed from usual. OAuth sign-in.  
  `web-analytics` `privacy` `remote` `oauth`
- **[MadeOnSol MCP Server](https://github.com/MadeOnSol/mcp-server-madeonsol)** `Official` `TypeScript` — Solana KOL trades, wallet analytics, token and deployer intelligence, and DEX data via an API key or keyless x402 pay-per-call in USDC.  
  `solana` `crypto` `analytics` `x402`
- **[Manifold MCP](https://www.manifoldmcp.com)** `Official` `Other` — An MCP for marketers that gives agents tools for SEO, AEO, socials and ads data, from keywords, backlinks and Search Console to AI answer visibility, ad libraries and social platforms, with a generous free tier.  
  `marketing` `seo` `aeo` `social-media` `remote`
- **[Metabase MCP Server](https://www.metabase.com/docs/latest/ai/mcp)** `Official` `TypeScript` — Query dashboards and explore data in Metabase BI.  
  `bi` `dashboards` `sql`
- **[Mixpanel MCP Server](https://docs.mixpanel.com/docs/mcp)** `Official` `TypeScript` — Query Mixpanel funnels, retention, and event analytics.  
  `analytics` `funnels` `product`
- **[Mysocial](https://github.com/mysocialio/mysocial-intelligence)** `Official` `JavaScript` — Official hosted OAuth MCP for social media intelligence: connected content history, performance signals, and creator memory over Streamable HTTP.  
  `social-media` `content-memory` `analytics` `oauth`
- **[NebenkostenPro](https://github.com/julianfaalk/nebenkostenpro-mcp)** `Official` `Go` — Free remote MCP server for German utility costs (Nebenkosten): property tax rates for 10,304 municipalities, costs of 400 cities, housing benefit levels, deadlines and links to check or create a utility bill.  
  `germany` `real-estate` `utility-costs` `property-tax` `remote`
- **[Netdata MCP Server](https://github.com/netdata/netdata)** `Official` `C` — Real-time infrastructure monitoring and health metrics via MCP.  
  `monitoring` `infra` `metrics`
- **[New Job Postings MCP (Ashby, Greenhouse, Lever, SmartRecruiters)](https://github.com/GeminiGeorge22/ats-jobs-mcp)** `JavaScript` — New job postings since any date or window (24h, 7d, 30d) from Ashby, Greenhouse, Lever and SmartRecruiters job boards.  
  `jobs` `recruiting` `ats` `greenhouse`
- **[OMOPHub](https://github.com/OMOPHub/omophub-mcp)** `Official` `TypeScript` — Search, map and navigate the OHDSI OMOP standardized vocabularies (11M+ concepts, including SNOMED CT, ICD-10, LOINC and RxNorm) from AI agents, with concept hierarchies and cross-vocabulary mappings.  
  `healthcare` `omop` `medical-vocabularies` `fhir` `remote`
- **[Open Health Sync](https://github.com/soma-intelligence/open-health-sync)** `Official` `Go` — Read-only MCP server, over stdio or Streamable HTTP, for a self-hosted store of wearable and health data synced from Apple Health, Health Connect, Oura, WHOOP, Withings and 8 other sources.  
  `health` `wearables` `fitness` `fhir` `self-hosted`
- **[open-data-mcp](https://github.com/markatdataandbeyond/open-data-mcp)** `JavaScript` — Free local stdio MCP with ten tools on official open data: EU VAT/LEI, TED tenders, PubMed, ClinicalTrials.gov, company registries, VIN recalls and weather.  
  `open-data` `vies` `pubmed` `company-registry` `stdio`
- **[OpenMapp](https://www.openmapp.com)** `Official` `Other` — Free remote MCP for a US Brazilian Jiu-Jitsu gym map: search 1,368 gyms across 664 cities for open mats, drop-in classes, weekly schedules, and visitor drop-in prices. ([source](https://github.com/burmanharry/openmapp))  
  `bjj` `gyms` `maps` `travel` `remote`
- **[PeekPanda](https://github.com/fdarkaou/peekpanda-mcp)** `Official` `Other` — Hosted competitor intelligence for iOS apps: see the Meta ads an app keeps paying for, the App Store searches it ranks for and the organic posts that went viral.  
  `ios` `app-store` `aso` `ads` `remote`
- **[PreReason](https://github.com/PreReason/mcp)** `Official` `JavaScript` — Financial market context for AI agents, reasoned in advance, from the economy and markets to listed companies' reported results; remote Streamable HTTP or npm stdio bridge.  
  `finance` `markets` `economics` `remote`
- **[Proofsource](https://proofsource.co/docs/chatgpt-and-claude)** `Official` `Go` — Hosted AI visibility server: which buyer questions name your brand in ChatGPT, Perplexity, Claude and Google AI Overviews, competitors named instead, cited sources, and fix tracking. OAuth.  
  `ai-visibility` `geo` `aeo` `marketing` `remote`
- **[QuestionPunk](https://www.questionpunk.com/features/mcp-server)** `Official` `TypeScript` — Create, edit and publish surveys and AI-moderated interviews, then read responses and reports through a hosted MCP server.  
  `surveys` `research` `interviews` `remote`
- **[Recall Kitchen](https://github.com/Recall-Kitchen/rk-mcp)** `Official` `Go` — Hosted MCP server that searches government product recall notices from CPSC, FDA, USDA, NHTSA and Health Canada by keyword, UPC, product name or vehicle, and fetches a full notice; free API key or anonymous x402 pay-per-call.  
  `recalls` `product-safety` `government-data` `remote`
- **[Robot Speed](https://github.com/robot-speed/mcp)** `Official` `TypeScript` — SEO tools for AI agents: audits, Core Web Vitals, keywords, AI visibility, traffic, backlinks, and CMS publishing.  
  `seo` `analytics` `keywords` `content`
- **[Scento Perfume API](https://www.scento.com/developers)** `Official` `Other` — Perfume knowledge for AI assistants: 1,400+ designer and niche perfumes with notes and families, 400+ raw materials, similar scents. Remote, read-only, no key.  
  `perfume` `fragrance` `reference-data` `remote`
- **[Scoopkit](https://github.com/nateslabach/scoopkit-mcp)** `Official` `Python` — Hosted AI-industry news server: returns each story once as a taxonomy-classified event with sources and correction history; no key needed to start, Pro adds semantic search.  
  `news` `ai-industry` `events` `remote`
- **[Screpy SEO MCP](https://screpy.com/feature/seo-mcp/)** `Official` `Other` — Hosted SEO MCP for project-scoped crawl, rank tracking, stored AI visibility, Core Web Vitals, and uptime data via OAuth.  
  `seo` `analytics` `ai-visibility` `remote` `oauth`
- **[SEOclar](https://seoclar.com/mcp-tools)** `Official` `TypeScript` — Provides keyword research, live SERPs, backlink analysis, site audits, and AI visibility data through a remote MCP server.  
  `seo` `keyword-research` `serp` `backlinks` `site-audit`
- **[Seonix](https://seonix.ai/mcp)** `Official` `Other` — Hosted read-only MCP server for a Seonix SEO project: Search Console and GA4 rankings and clicks, site audit issues, keyword clusters, articles, and brand mentions in ChatGPT, Gemini, Claude and Perplexity answers.  
  `seo` `ai-visibility` `search-console` `remote`
- **[Sequential](https://www.usesequential.com/docs/agent-tools.md)** `Official` `TypeScript` — Hosted MCP server for Sequential session replay and product analytics: query sessions, AI-judge findings, events, funnels, flows and retention, with OAuth sign-in.  
  `session-replay` `product-analytics` `funnels` `oauth`
- **[Serpel](https://serpel.app/developers/mcp)** `Official` `TypeScript` — Hosted SEO and AI-visibility MCP server for Google rankings, site audits, keyword research, Search Console opportunities, and AI citation monitoring.  
  `seo` `analytics` `ai-visibility` `remote`
- **[Serpier](https://serpier.com/mcp)** `Official` `TypeScript` — Hosted SEO server: track rankings, search traffic and AI visibility, monitor published links, browse vetted publishers and place link-building orders; OAuth sign-in.  
  `seo` `link-building` `ai-visibility` `remote` `oauth`
- **[Skald](https://github.com/spcaeo/skald)** `Official` `Python` — Self-hosted web analytics from your server access log, with a mostly read-only MCP server so an agent can ask which pages AI assistants fetched, how periods compare, and which days were withheld.  
  `web-analytics` `access-logs` `self-hosted` `ai-crawlers`
- **[SlashYear](https://github.com/ctrl-maud/slashyear)** `Official` `JavaScript` — Look up history by year, date and country, plus world leaders, historical prices and No. 1 songs, each line cited to a Wikipedia revision.  
  `history` `wikipedia` `reference-data` `remote`
- **[Smarter.Poker MCP Server](https://github.com/Smarter-Poker/smarter-poker-mcp)** `Official` `JavaScript` — Keyless stdio and streamable-HTTP server with 26 tools for poker hand and range equity, ICM, Nash push/fold charts, bankroll risk of ruin and US poker venue discovery.  
  `poker` `game-theory` `analytics` `sports` `remote`
- **[Sociality MCP](https://github.com/socialityio/sociality-mcp)** `Official` `Other` — Hosted OAuth MCP server from Sociality.io for social media analytics, post insights, and competitor benchmarking across Facebook, X, Instagram, YouTube, LinkedIn, and TikTok.  
  `social-media` `analytics` `competitor-analysis` `marketing` `oauth`
- **[Sourcey](https://sourcey.com/mcp)** `Official` `TypeScript` — Search startup credits and offers, and inspect evidence-backed Agent Readiness report cards in Sourcey's public record.  
  `startup-credits` `company-data` `agent-readiness` `evidence`
- **[Sports Odds API (BetRivers, Unibet & 22 more books)](https://apify.com/publicrecords/sports-odds-api)** `JavaScript` — Live odds from 24 Kambi-powered sportsbooks in one call, including BetRivers (12 US states + Ontario), Unibet, Paf, Svenska Spel and ATG, with every book's price and the best price per outcome; pay per call.  
  `sports` `betting` `odds` `remote`
- **[StatOrigin](https://statorigin.org/docs/mcp)** `Official` `Other` — Read-only remote server for searching sourced industry statistics, each with its publisher, source document and source sentence.  
  `statistics` `open-data` `citations` `remote`
- **[Tectova Runway Records](https://tectova.com/tools/mcp)** `Official` `TypeScript` — Read-only remote MCP server for fashion runway records: models' careers, show casts, house histories and models by country.  
  `fashion` `runway` `fashion-week` `models`
- **[Trends MCP](https://github.com/trendsmcp-ai/Trends-MCP)** `Official` `Python` — Gives AI assistants trend data (search interest over time, growth percentages and live top-trends boards) from Google Search, YouTube, TikTok, Reddit, Amazon, Wikipedia, news, npm, Steam and app stores through one remote MCP server.  
  `trends` `search-interest` `market-research` `remote`
- **[TubeText Meta Ad Library & Video Ad Analyzer](https://github.com/LMSlay/tubetext-mcp/tree/main/registry/ad-intelligence)** `Official` `Other` — Facebook/Instagram ads from Meta Ad Library plus AI teardowns of Meta and YouTube video ads. Hosted on Apify (OAuth), pay per result. ([source](https://github.com/LMSlay/tubetext-mcp))  
  `ad-library` `meta-ads` `video-analysis` `remote`
- **[Vaneform](https://github.com/vaneform/vaneform-mcp)** `Official` `TypeScript` — Hosted MCP for website traffic estimates, domain compare, registry facts and keyword briefs; API key required.  
  `traffic` `analytics` `seo` `remote` `api-key`
- **[Vergabeweiser](https://vergabeweiser.de/api#mcp)** `PHP` — Hosted read-only MCP server for German public tenders and contract awards, with buyers, winners and award sums from open procurement data.  
  `public-tenders` `procurement` `germany` `contract-awards` `remote`
- **[World Monitor](https://github.com/koala73/worldmonitor)** `Official` `TypeScript` — Real-time global intelligence on conflict, markets, energy, trade, shipping and cyber, with about 100 read-only tools over a remote OAuth server.  
  `geopolitics` `news` `markets` `osint` `remote`
- **[Zip-Codes.com ZIP & Postal Code MCP](https://www.zip-codes.com/api/mcp)** `Official` `C#` — Validates and standardizes US street addresses to ZIP+4 and looks up US ZIP Codes and Canadian postal codes, with optional census tract demographics, county and district overlaps, radius search and distance.  
  `zip-codes` `address-validation` `postal-codes` `geocoding`

<a id="legal-and-court-data"></a>

## Legal and Court Data

Court records, legal research, case search, and judicial workflow data.

- **[BORME API](https://github.com/bormeapi/borme-mcp)** `Official` `Other` — Spain's company registry gazette (BORME) as typed events: more than 9.6 million events since 2009, with company, officer and insolvency lookups, over a hosted Streamable HTTP server with an API key or OAuth.  
  `spain` `company-registry` `insolvency` `remote` `oauth`
- **[Court Rules MCP](https://github.com/foklepoint/court-rules-mcp)** `Other` — Read U.S. federal and state court filing rules, local rules, judge standing orders, and court holiday calendars, with a citation back to the source document.  
  `legal` `court-rules` `standing-orders` `citations` `remote`
- **[DMD Costs Legal Costs Tools](https://www.dmdcosts.co.uk/legal-costs-help)** `Official` `TypeScript` — Free, read-only legal costs tools for England and Wales: CPR deadlines, detailed assessment, Part 36, court fees, interest and fixed costs, each answer citing its rule.  
  `legal` `uk-law` `legal-costs` `civil-procedure` `remote`
- **[eCFR MCP](https://github.com/lrehmann/ecfr-mcp)** `TypeScript` — Search and read U.S. federal regulations with legal citations, source dates, stale-data flags, and paginated text; an independent eCFR mirror, not the official legal edition.  
  `legal` `regulations` `citations` `streamable-http`
- **[eCourts India MCP](https://mcp.ecourtsindia.com/)** `Other` — Third-party hosted MCP for Indian court data, including Supreme Court, High Courts, district courts, and tribunals.  
  `legal` `court-data` `remote` `oauth`
- **[ForeclosureListings](https://foreclosurelistings.fyi)** `TypeScript` — Look up US foreclosure resources by city and state: county sale schedules, notice postings, HUD-approved counselors and legal aid, each fact citing its public source.  
  `foreclosure` `public-records` `legal-aid` `housing`
- **[Lintelly HR Deutschland](https://github.com/NicksAdvisory/lintelly-hr-deutschland)** `Official` `TypeScript` — German employment law for small companies: 38 read-only tools for notice periods, employer costs, sick pay, maternity protection and contract clauses, each answer with calculation and official source; remote server without sign-in.  
  `legal` `hr` `employment-law` `germany` `remote`
- **[My Spain Visa](https://myspainvisa.com/mcp/)** `Official` `PHP` — Spain visa rules for 2026, a Schengen 90/180 calculator and consulate processing times from a Barcelona immigration law firm's own cases. Free hosted server, no account.  
  `immigration` `visa` `spain` `schengen` `remote`
- **[Polish MCP Servers](https://github.com/kamilkaczmareksolutions/polish-mcp-servers)** `TypeScript` — Stdio server with 12 read-only tools for Polish law and public registers (Sejm ELI acts, SAOS judgments, tenders, building permits, land parcels and zoning), each running a public Apify Actor billed to your Apify account.  
  `legal` `court-data` `poland` `public-registers` `apify`
- **[US Code MCP](https://github.com/lrehmann/uscode-mcp)** `TypeScript` — Read-only U.S. Code search, section retrieval, and title browsing with citations linked to uscode.ecfr.io and published OLRC release metadata; independent OLRC corpus mirror, not a government service.  
  `legal` `statutes` `us-code` `citations`

<a id="security-and-identity"></a>

## Security and Identity

Secrets, vulnerability scanning, authentication, and security operations.

- **[1Password MCP Server](https://github.com/CakeRepository/1Password-MCP)** `Go` — Community-maintained integration for accessing 1Password vault items in agent workflows.  
  `secrets` `passwords` `vault`
- **[AcqPath](https://github.com/reflectme-source/acqpath-distribution)** `Official` `Other` — Signed, timestamped observations of machine-readable source-rights declarations for RAG, indexing, training, search, and AI input workflows.  
  `rights` `provenance` `compliance` `rag` `remote`
- **[ActSeal](https://github.com/arults/actseal-mcp)** `Official` `TypeScript` — Issue and verify Ed25519-signed receipts for agent actions via MCP tools issue_receipt and verify_receipt. Best-effort signed log; free 100/day at actseal.xyz.  
  `receipts` `ed25519` `attestations` `agents` `audit`
- **[Agency Check](https://agency-check.app)** `Official` `TypeScript` — Hosted remote MCP that checks what an AI agent is about to buy, send, sign up for, or connect before it acts, and returns proceed, pause, or ask with the reason. ([source](https://github.com/CyberStrategy1/agency-check))  
  `agent-safety` `guardrails` `approvals` `oauth` `remote`
- **[Auth0 MCP Server](https://github.com/auth0/auth0-mcp-server)** `Official` `TypeScript` — Manage Auth0 tenants, applications, and user identity settings.  
  `auth` `identity` `oauth`
- **[Automaton Onchain Tools](https://github.com/povrouyre-wq/automaton-onchain-tools)** `JavaScript` — Read-only crypto safety checks for Base, Ethereum and BNB Chain (tx explainer, approvals, contract risk, URL phishing, token deep scan with honeypot simulation), pay-per-call via x402 USDC; remote, no key.  
  `crypto` `security` `x402` `base` `remote`
- **[BotsRated](https://github.com/botsrated/botsrated)** `Official` `TypeScript` — Checks a paid x402 seller or remote MCP server before an agent pays it: latest unpaid probe, listed vs quoted price and payTo, with signed receipts; free preflight and search, paid lookups via x402 on Base.  
  `x402` `trust` `monitoring` `payments` `remote`
- **[Bridge Watch](https://github.com/LakeSky/bridge-watch-mcp)** `Official` `TypeScript` — On-chain address intelligence for Base: seven read-only MCP tools for EVM address labels, transaction explanation, sybil clustering, alerts and CCTP transfer tracking, plus an anonymous free tier and x402 USDC pay-per-call.  
  `web3` `base` `address-labels` `risk` `x402`
- **[Council of AI GSPC](https://github.com/CSOAI-ORG/councilof-ai)** `Official` `TypeScript` — AI-governance measurement MCP server with free verification readers and x402-metered signed-evidence doors; remote endpoint at https://councilof.ai/mcp/.  
  `governance` `compliance` `evidence` `x402`
- **[CrowdStrike MCP Server](https://github.com/CrowdStrike/falcon-mcp)** `Official` `Python` — Query CrowdStrike Falcon detections and endpoint security data.  
  `endpoint` `security` `soc`
- **[Darkmoon MCP Server](https://github.com/ASCIT31/darkmoon-mcp-server)** `Official` `TypeScript` — Start autonomous AI pentest runs, poll status, list campaigns and read findings on a self-hosted Darkmoon Pro instance over stdio.  
  `pentest` `vulnerabilities` `security` `stdio`
- **[Domain Mail Check](https://tools.openkrill.app/#mailcheck)** `Official` `TypeScript` — Checks a domain's SPF, DKIM and DMARC records, whether Gmail and Outlook will accept its mail, and its DNS and registration data; hosted, no key or sign-up.  
  `email` `dns` `dmarc` `deliverability`
- **[FractalAI Agent Passport](https://www.npmjs.com/package/@fractalai/agent-passport-mcp)** `Official` `TypeScript` — Verifies ML-DSA-65 (FIPS 204) signed agent receipts offline and exposes pay-per-call x402 tools (USDC on Base) that return post-quantum signed receipts.  
  `post-quantum` `ml-dsa` `x402` `identity` `receipts`
- **[GridZen Verification](https://github.com/immurray/gridzen-developer-kit/blob/main/llms-install.md)** `Official` `Python` — Research and synthetic MCP tools for planning identity-verification coverage and exercising sandbox decision results, not live identity verification. ([source](https://github.com/immurray/gridzen-developer-kit))  
  `identity-verification` `kyc` `mcp` `sandbox`
- **[HANRIA Mandate Check](https://hanria.ai)** `Official` `JavaScript` — Free, advisory pre-action check: check_action returns permit, deny or escalate for a proposed agent action against a mandate, with the governing clause and an Ed25519-signed receipt, and validate_mandate checks a mandate for errors.  
  `mandates` `authorization` `agent-safety` `receipts` `remote`
- **[ichi-mcp](https://github.com/bernik-bot/ichi-mcp)** `Python` — Read the free public ICHI Internet Cyber Health Index: current threat band and score, recent critical-advisory alerts, and source feed health.  
  `threat-intelligence` `cybersecurity` `osint` `monitoring`
- **[INAM Protocol](https://github.com/inamprotocol/inam-protocol/tree/main/mcp)** `Official` `TypeScript` — Look up an AI agent's reputation built only from work both parties signed, and check its x402 payTo wallet before paying it; draft and countersign Execution Receipts. ([source](https://github.com/inamprotocol/inam-protocol))  
  `reputation` `x402` `receipts` `identity` `remote`
- **[iotaudit](https://github.com/emirmrkaljevic/iotaudit)** `Python` — Local CLI and MCP server that audits IoT and smart-home devices on your own LAN: destinations, encryption, public DNS, DNS-over-TLS and DNS-over-HTTPS.  
  `security` `iot` `privacy` `dns`
- **[Iris](https://iriscan.app/mcp)** `Official` `Rust` — Hosted on-chain investigations: wallet analysis, fund tracing through mixers, exchanges and instant swaps, and Solana token insiders, on Solana, EVM chains, Bitcoin and Tron. API key (10 free calls a day) or x402 per call.  
  `blockchain` `crypto-forensics` `solana` `x402` `remote`
- **[Ironheights](https://github.com/Frank-Masciopinto/ironheights)** `Official` `TypeScript` — Read-only local server that scans an AI agent skill (any SKILL.md folder or ClawHub reference) before install with static rules, returning a fail-closed allow/blocked decision, A-F grade, file/line findings and drift since approval.  
  `security` `agent-skills` `supply-chain` `static-analysis` `local`
- **[ISMS Copilot](https://www.ismscopilot.com/mcp?ref=mcphq)** `Official` `TypeScript` — The compliance specialist your AI calls: ISO 27001, SOC 2, GDPR, NIS 2, DORA and more, as a hosted MCP server with OAuth sign-in (free plan available).  
  `compliance` `grc` `iso-27001` `soc-2` `remote`
- **[Lodestar Stamp](https://lodestarstamp.com)** `Official` `TypeScript` — Agent trust layer: a dated receipt on a named entity. REST lookup plus MCP discovery card. We attest; we do not approve the booking.  
  `trust` `receipts` `agents` `security`
- **[mcp-gatehouse](https://github.com/nickgeorgeseo/mcp-gatehouse)** `Python` — Python library that adds permission tiers, fail-closed human approval gates and a secret-redacting JSONL audit log to MCP servers built on the official SDK.  
  `security` `audit-log` `permissions` `human-in-the-loop` `python`
- **[mcp-slim](https://github.com/SalyyS1/mcp-slim)** `Python` — Token optimizer and real-time secret firewall for Model Context Protocol traffic with pre-flight schema validation, Unicode smuggling shield, and SARIF audit export.  
  `security` `proxy` `firewall` `optimization`
- **[NPMScan](https://npmscan.com/docs/mcp)** `Official` `TypeScript` — Checks npm packages for malware, known vulnerabilities, typosquats, maintainer takeovers and risky install scripts, and audits lockfiles and SBOMs.  
  `npm` `supply-chain` `vulnerabilities` `malware` `remote`
- **[OpenBait Lookalike Domains](https://openbait.com/tools/typosquat-check)** `Official` `Go` — Hosted MCP server that lists lookalike domains of a brand's website and shows which resolve in DNS and what their front page shows.  
  `security` `domains` `typosquatting` `remote`
- **[qURL](https://github.com/layervai/qurl-mcp)** `Official` `TypeScript` — Mint, resolve, audit, and rotate scope-limited expiring access links (qURLs) for AI agents.  
  `access-links` `expiring-links` `localhost-sharing` `security`
- **[Scalekit MCP Server](https://github.com/scalekit-inc/scalekit-mcp-server)** `Official` `TypeScript` — Manage Scalekit organizations, users, SSO connections, and MCP OAuth from an official hosted server.  
  `auth` `identity` `oauth` `mcp`
- **[Snyk MCP Server](https://github.com/snyk/studio-mcp)** `Official` `TypeScript` — Scan dependencies and code for vulnerabilities with Snyk.  
  `security` `vulnerabilities` `dependencies`
- **[Solana Pulse](https://github.com/Timothymycompc/solana-pulse-ai-agent-gateway)** `Official` `TypeScript` — Read-only pre-sign checks for Solana agents: dry-runs a transaction on mainnet, confirms it matches the requested transfer or swap, and rates token risk; 25 free calls per tool a day, then x402 in USDC.  
  `solana` `crypto` `security` `x402`
- **[Sunglasses](https://github.com/sunglasses-dev/sunglasses)** `Python` — Scans text and files locally for prompt injection, credential leaks and data exfiltration; runs as a CLI, a Python API or an MCP server (python -m sunglasses.mcp).  
  `security` `prompt-injection` `scanner` `python`
- **[Tanod](https://tanod.dev)** `Official` `Python` — Solidity contract scans, pre-transaction address risk checks, OFAC SDN address screening and MCP server/skill package scans for agents, plus web, DNS and chain reads. Free daily tier, then pay per call via x402 (USDC on Base).  
  `security` `smart-contracts` `x402` `web3` `remote`
- **[Vault MCP Server](https://github.com/hashicorp/vault-mcp-server)** `Official` `Go` — Read secrets and manage HashiCorp Vault policies via MCP.  
  `secrets` `vault` `security`
- **[Vulnerability Exposure](https://github.com/MRFrazer25/Vulnerability-Exposure-MCP)** `Python` — Checks public IPs, domains, CVE IDs and software versions for confirmed vulnerabilities using NVD version ranges, CISA KEV, EPSS, distro backports and Shodan, with all API keys optional.  
  `vulnerabilities` `cve` `threat-intelligence` `osint` `nvd`
- **[Vulnify](https://docs.vulnify.io/mcp/)** `Official` `TypeScript` — MCP server that checks an agent action and returns ALLOW, REVIEW or BLOCK before it runs; hosted with OAuth or local stdio. ([source](https://github.com/vulnify/vulnify-mcp))  
  `authorization` `guardrails` `audit` `oauth`
- **[Wiz MCP Server](https://www.wiz.io/blog/introducing-mcp-server-for-wiz)** `Official` `TypeScript` — Cloud security posture management and risk insights from Wiz.  
  `cloud-security` `cspm` `risk`

<a id="finance-commerce-and-business-apps"></a>

## Finance, Commerce, and Business Apps

Payments, banking, CRM, e-commerce, and business system integrations.

- **[3Descu 3D Printing Quotes (EU)](https://quote.3descu.com/ai-agents/)** `Official` `TypeScript` — Instant FDM and SLA 3D printing quotes from an ISO 9001:2015 certified EU factory: list materials, measure an STL or OBJ link and get a price in EUR.  
  `3d-printing` `manufacturing` `quotes` `remote`
- **[402post](https://402post.com)** `Official` `TypeScript` — Remote MCP server (streamable HTTP, no key) for paid classified listings for agents: list categories, validate, create, search and read listings; a listing costs $0.03 for 30 days over x402.  
  `classifieds` `x402` `listings` `remote`
- **[Account Executive Jobs](https://github.com/854Labs/account-executive-jobs)** `Official` `Other` — Hosted OAuth MCP server to search and apply to account executive and sales jobs, and for employers to manage job posts and applicants.  
  `jobs` `sales` `recruiting` `oauth` `remote`
- **[AccountsOS](https://github.com/thriveventurelabs/accountsos-mcp-server)** `Official` `TypeScript` — AI accounting MCP server: query your live AccountsOS books (balances, transactions, VAT, deadlines, invoices, documents) from any MCP client.  
  `accounting` `vat` `bookkeeping` `invoices`
- **[Add to CRM](https://github.com/crm-inputs/mcp)** `Official` `Other` — Find work contact details and add people and companies to your own CRM from Claude, ChatGPT and other assistants. Checks for duplicates first and uses your field mapping and tags. Works with 29+ CRMs.  
  `crm` `sales` `contact-enrichment` `remote` `oauth`
- **[ADEXTO](https://github.com/0xcuy/adexto)** `Official` `TypeScript` — Bonding-curve token markets on Monad, Arbitrum One, Base, Robinhood Chain and 0G: list and price markets, buy with USDC on Base over x402, and prepare launch, stake and claim transactions for your own key.  
  `crypto` `x402` `bonding-curve` `base` `remote`
- **[AdMakeAI](https://github.com/mesmerlord/admakeai-mcp)** `Official` `TypeScript` — Hosted MCP server for AdMakeAI: generate Meta and TikTok ad images and UGC-style video ads, pull competitors' live Meta Ad Library ads, and draft and report on Meta campaigns.  
  `advertising` `ad-creative` `meta-ads` `remote` `oauth`
- **[Agent Payment Node](https://github.com/nuanu-ai/agent-payment-node)** `Official` `TypeScript` — Local CLI and stdio MCP payment tools for AI agents on macOS Apple Silicon, with foreground human approval for signing.  
  `payments` `agent-payments` `local-stdio` `macos`
- **[AgentServices](https://github.com/vbkotecha/agentservices-api)** `Python` — Paid API platform for AI agents — crypto prices, DeFi yields, market indicators, dispute resolution, and on-chain analytics via x402 micropayments.  
  `crypto` `defi` `x402` `mcp` `agents`
- **[agosint](https://agosint.shveik.dev)** `Official` `Go` — Company and domain due diligence for AI agents: legal entity from official registers, LEI, EU VAT, sanctions lists (OFAC, EU, UK) and domain checks, every answer signed. Pay per call in stablecoins with x402 or MPP, no account.  
  `due-diligence` `sanctions` `x402` `stablecoins` `remote`
- **[agpay](https://agpay.shveik.dev)** `Official` `Go` — Payments held between two agents: the buyer pays by x402 or MPP, the seller proves its wallet and delivers, the buyer confirms and the seller is paid; disputes are decided by hand. Paid in stablecoins, no account.  
  `payments` `x402` `stablecoins` `remote`
- **[Ahel](https://github.com/ahel-technologies/ahel)** `Official` `TypeScript` — Hosted MCP server with one catalog of data tasks: company and people enrichment, work email finding, SEO and SERP data, social media data and EU business registers, priced per call.  
  `enrichment` `seo` `social-media` `remote` `oauth`
- **[APISign](https://apisign.io/docs/api/mcp)** `Official` `TypeScript` — Hosted MCP server for legally binding e-signature: create contracts from Markdown templates or .docx, email them to signers, track views and signatures, and get signed PDFs with a SHA-256 seal and audit trail.  
  `e-signature` `contracts` `documents` `remote` `api-key`
- **[Ariadne for Therapists](https://github.com/bgrieco22/ariadne-mcp)** `Official` `TypeScript` — Audit a therapy practice's Google Business Profile and website with prioritized fixes, and write a sample Google Business post in the therapist's voice; never recommends soliciting client reviews.  
  `marketing` `local-seo` `google-business-profile` `therapists`
- **[Astral Twin](https://astraldaily.com)** `Official` `Other` — Create and mint NFT asset packs on the Base blockchain from AI clients.  
  `nft` `blockchain` `base` `minting`
- **[ATS Zero-Browser Gateway](https://github.com/ginugokz/ats-zero-browser-gateway)** `Official` `Python` — Protocol scraper and MCP server for Workday, Greenhouse, Lever, Ashby, and SmartRecruiters with deterministic ADDED/REMOVED/UPDATED delta tracking, runnable standalone or on Apify.  
  `ats` `recruiting` `job-scraping` `delta-tracking` `apify`
- **[Award Travel Finder](https://github.com/AwardTravelFinder/mcp)** `Official` `Other` — Search award flight availability and points pricing across 27 airlines and 23 loyalty programs from any MCP client.  
  `travel` `flights` `airlines` `award-travel` `points`
- **[AyHire](https://ayhire.com/agents.md)** `Official` `Other` — Hosted OAuth MCP server to find, judge and shortlist engineers for a role from their public GitHub work, with links to the evidence for each pick.  
  `recruiting` `hiring` `github` `oauth` `remote`
- **[BankBridge](https://bankbridge.money)** `Official` `TypeScript` — Hosted MCP server that gives an agent read-only access to your own bank, credit card, and brokerage accounts: balances, transactions, spending summaries, recurring charges, cashflow, and investment holdings.  
  `banking` `personal-finance` `read-only` `remote`
- **[Best Electrician Jobs](https://github.com/854Labs/best-electrician-jobs)** `Official` `Other` — Hosted OAuth MCP server for employers to manage electrician job posts and applicants on BestElectricianJobs.com: draft and publish jobs, read résumés and move candidates through hiring.  
  `jobs` `recruiting` `electrician` `oauth` `remote`
- **[BestPrice Shopping](https://github.com/TheBestCo/bestprice-mcp)** `Official` `JavaScript` — Official read-only shopping MCP for Greece from BestPrice.gr: shopping recommendations, product search, store offers with delivered totals, and price history; no API key.  
  `ecommerce` `price-comparison` `shopping` `greece` `remote`
- **[Bilbop x402](https://github.com/bilbop1/bilbop-x402-mcp)** `Official` `JavaScript` — Pay-per-call agent tools paid in USDC on Solana over x402, no account or API key: text summarize, Solana token brief and mint info, text-to-speech, and human brand feedback.  
  `x402` `solana` `usdc` `remote`
- **[Billstride](https://billstride.com/mcp)** `Official` `TypeScript` — Hosted OAuth MCP server to create, send and track invoices from a conversation, chase overdue payments, see revenue, and export e-invoices (ZUGFeRD, XRechnung) and DATEV; open sign-up, first invoice free.  
  `invoicing` `finance` `e-invoicing` `oauth` `remote`
- **[BirkinBagStock](https://birkinbagstock.com/llms.txt)** `Official` `Other` — Independent Hermès resale listings, price comparisons, and price alerts.  
  `ecommerce` `resale` `price-comparison` `remote`
- **[BKK Staff](https://app.bkkstaff.com/mcp)** `Official` `Other` — Automated resume screening for small businesses: create and manage job posts, rank applicants (strong/possible/weak), search candidates and email applicants via a hosted OAuth MCP server.  
  `recruiting` `hiring` `resume-screening` `remote` `oauth`
- **[BlazePhoenix](https://github.com/blazephoenixxyz-crypto/blazephoenix-mcp)** `Official` `JavaScript` — Official remote MCP server for the BlazePhoenix DEX aggregator on Base, Optimism, Arbitrum and Robinhood Chain: prepare a quote to run on your own RPC, decode it, and get verified calldata. No API key.  
  `defi` `dex` `evm` `calldata` `remote`
- **[BlockVectra](https://github.com/blockvectra/mcp)** `Official` `Other` — Remote MCP server for multi-chain EVM JSON-RPC, an indexed Data API, documentation, pricing and status, for developers and AI agents. Documentation, chain and status tools need no API key; Data API tools require one.  
  `blockchain` `json-rpc` `evm` `data-api`
- **[Budna MCP](https://github.com/budna-marketplace/mcp)** `Official` `Rust` — Read-only search and inspection of public listings, sellers, bids and ratings on Budna, a Swedish marketplace for new and pre-owned items; no account or API key.  
  `marketplace` `second-hand` `shopping` `sweden`
- **[Buy-Box](https://buybox.agentconsult.ai)** `Official` `Other` — Saves your buying criteria for homes, cars or any category (budget, must-haves, dealbreakers) so AI agents load them before they search and rank listings against them.  
  `shopping` `preferences` `remote` `oauth`
- **[BuyWhere MCP](https://github.com/BuyWhere/buywhere-mcp)** `Official` `TypeScript` — Hosted product-search MCP server for multi-merchant price comparison across Singapore, SEA, and US catalogs.  
  `ecommerce` `shopping` `search` `remote`
- **[canli-validation-mcp](https://github.com/arhancanli/canli-validation-mcp)** `Official` `JavaScript` — Checks whether a backtest result is real or just the luckiest of the variants tried: deflated Sharpe ratio, CSCV overfitting probability, data-snooping tests, lookahead checks and pipeline placebos.  
  `finance` `backtesting` `statistics` `quant` `remote`
- **[CartViral](https://cartviral.com/mcp)** `Official` `TypeScript` — Hosted server that imports products from a store or product link and makes AI product videos for TikTok, Reels and Shorts, product photos, carousels, static ads and listing copy, returning download links. ([source](https://github.com/artemecom/cartviral-mcp))  
  `ecommerce` `video` `marketing` `remote` `oauth`
- **[Checkout Page](https://checkoutpage.com/mcp?utm_source=mcphq&utm_medium=listing)** `Official` `TypeScript` — Create and manage checkout pages, events, forms, products, coupons, customers, payments and subscriptions on Checkout Page, a checkout platform on Stripe Connect, over remote Streamable HTTP with OAuth.  
  `payments` `ecommerce` `events` `stripe` `remote`
- **[Chord](https://github.com/getchordlabs/chord)** `Official` `TypeScript` — Hosted MCP server with no API key for data: best-route DEX swap quotes and unsigned transactions on 7 EVM chains (Base, Monad, BNB Chain, Arbitrum and more), plus token boards, candles, wallet PnL and smart money. Non-custodial.  
  `blockchain` `defi` `swap` `trading` `crypto`
- **[Clera](https://github.com/getclera/mcp)** `Official` `TypeScript` — Search 210,000+ vetted startup candidates, review Clera's picks for your open roles, and request intros through a hosted OAuth MCP server.  
  `recruiting` `hiring` `candidates` `remote` `oauth`
- **[CorpusIQ](https://github.com/CorpusIQ/corpusiq-docs)** `Official` `Other` — Remote MCP server for live business data: read-only retrieval across 40+ connected systems including Stripe, Shopify, QuickBooks, HubSpot and GA4, with source-cited answers and OAuth 2.0 device login.  
  `business-data` `crm` `ecommerce` `finance` `remote`
- **[CreditUnions](https://creditunions.fyi)** `TypeScript` — Query federally insured US credit unions from NCUA call report data by city and state: charter, field of membership, assets, members and branches.  
  `credit-unions` `ncua` `banking` `directory`
- **[Crevio](https://crevio.co/docs/developer/mcp)** `Official` `Ruby` — Delegate work to an AI agent that runs your small business (products, orders, customers, email, sites), or run scripts against the Crevio API and 3,000+ connected apps.  
  `small-business` `ecommerce` `agents` `automation` `remote`
- **[Crypto Regime MCP](https://github.com/Shicodiez/crypto-regime-mcp)** `JavaScript` — Crypto trend, regime and indicators tools, pay-per-call via x402 on Base.  
  `crypto` `trading` `x402` `base`
- **[CueHQ](https://www.cuehq.social/agents)** `Official` `TypeScript` — Finds the Reddit, X, YouTube and TikTok threads where people ask for a product like yours, ranked, with reply drafts in your voice. ([source](https://github.com/CueHQSocial/cuehq-mcp))  
  `social-listening` `reddit` `lead-generation` `marketing`
- **[Darioa Web Developer](https://www.darioa.nl/llms.txt)** `Official` `TypeScript` — Remote server for a one-person web developer in the Netherlands: list fixed-price websites, booking sites, webshops and web apps, get the price for a described need, see client work and ask for contact.  
  `web-development` `website` `ecommerce` `quote` `remote`
- **[Datacircle](https://datacircle.dev/docs/mcp)** `Official` `Python` — Datacircle lists all the GTM APIs. Our MCP server is open to anyone, with no key: add api.datacircle.dev/mcp to Claude, ChatGPT or Cursor.  
  `remote` `no-auth` `read-only` `sales` `pricing`
- **[datawebot](https://github.com/datawebot/datawebot-mcp)** `Official` `Other` — Hosted product search and seller prices across online shops worldwide, plus extraction jobs for Amazon and Shopify pages, over remote Streamable HTTP with OAuth or an API key.  
  `ecommerce` `product-search` `prices` `remote` `oauth`
- **[Dexra](https://github.com/dexra-dev/mcp)** `Official` `JavaScript` — Read-only risk verdicts (ok, caution or avoid, with reasons) for Solana launches, tokens, wallets, pools and planned swaps, via an API key with a free daily allowance or keyless x402 pay-per-call in USDC.  
  `solana` `crypto` `risk` `x402`
- **[Dropify](https://github.com/xozxro/dropify-mcp)** `Official` `TypeScript` — Looks up the official merch stores Dropify tracks for an artist or brand and returns the page where restock and drop alerts are set.  
  `merch` `restock-alerts` `shopping` `music`
- **[Ecommerce Leads](https://getecommerceleads.com/docs/)** `Official` `PHP` — Look up any ecommerce store by domain for estimated revenue, ad spend, traffic and buying signals; sign in to search 600k+ stores and reveal contacts. ([source](https://github.com/matosdfm/ecommerce-leads-mcp))  
  `ecommerce` `sales` `leads` `marketing` `remote`
- **[Edgrapi](https://edgrapi.com)** `Official` `Python` — US government data as JSON: SAM.gov contract opportunities, USAspending awards, Grants.gov grants, House STOCK Act trades and SEC EDGAR filings, 19 read-only tools.  
  `government-data` `sec-edgar` `procurement` `remote` `oauth`
- **[EL7.AI](https://el7.ai/en/mcp)** `Official` `TypeScript` — Financial market intelligence for your AI: markets news, economic calendar, 8 central banks, COT positioning, stocks, earnings, gold and oil, with sources and dates; 85 read-only tools, English first with full Arabic support. ([source](https://github.com/walidelhelw/el7-mcp))  
  `finance` `markets` `central-banks` `economic-calendar` `remote`
- **[Elori](https://github.com/elori-debug/elori-mcp)** `Official` `TypeScript` — Hosted sales pipeline, contacts and meeting workflows via approved Elori actions; OAuth and a verified Director or Autopilot account required.  
  `crm` `sales` `meetings` `oauth`
- **[Equibles](https://equibles.com/mcp)** `Official` `C#` — Hosted MCP server for US company fundamentals as reported in SEC filings, filing text, earnings-call transcripts, 13F holdings and insider trades, with OAuth or API-key access.  
  `finance` `sec-filings` `stocks` `earnings-calls` `oauth`
- **[Equivista](https://equivista.be/api/docs)** `Official` `Ruby` — Read-only Belgian company search, KBO profiles, annual financials, employees and company relationships.  
  `belgium` `company-data` `financials` `kbo`
- **[Etsy Search & Shop Sales MCP](https://github.com/GeminiGeorge22/etsy-sales-mcp)** `JavaScript` — Live Etsy search results by keyword, category or market page (price, rating, reviews, badges, ad flag, search rank) plus sales counters for named Etsy shops, each with the date it was read.  
  `etsy` `ecommerce` `marketplace` `remote`
- **[EU Nordic Open Data MCP](https://github.com/itulo/eu-nordic-open-data-mcp)** `JavaScript` — Query official EU and Nordic open data, including TED tenders, EU sanctions, VIES VAT checks, ECB rates, ENISA vulnerabilities, Finnish and Norwegian company registers, Fingrid grid and FMI weather data.  
  `open-data` `eu` `sanctions` `procurement` `finland`
- **[FactLot](https://factlot.com)** `Official` `TypeScript` — Commercial real estate calculators that return every step and a versioned formula ID, plus parcel and entity IDs and fact validation. Free hosted endpoint, no API key. ([source](https://github.com/9mp96ygnbk-alt/factlot))  
  `commercial-real-estate` `calculators` `finance` `remote` `audit-trail`
- **[Fair Value Calculator](https://www.fairvalue-calculator.com/integrations)** `Official` `PHP` — Remote MCP that gives Claude or ChatGPT fair value estimates from 26 valuation models, quality scores and screeners for 40,000+ listed stocks, plus the user's own watchlist and alerts.  
  `stocks` `valuation` `investing` `remote` `oauth`
- **[Feminiq Rides](https://www.feminiqrides.nl/llms.txt)** `Official` `JavaScript` — Remote server for an Amsterdam chauffeur service with a female driver option: list routes, tours and cars, get a price quote and send a ride request.  
  `travel` `taxi` `booking` `remote`
- **[Fin Codes API](https://fincodesapi.com/mcp-server)** `Official` `PHP` — Validate IBANs and bank codes, verify payee names, and screen names against sanctions lists through an authenticated hosted MCP server.  
  `banking` `iban` `payee-verification` `sanctions` `remote`
- **[Fincept MCP](https://github.com/Fincept-Corporation/fincept-mcp-docs)** `Official` `Other` — Hosted MCP server for Fincept Terminal: quotes, candles, option chains, fundamentals, economic data, SEC filings, news, backtests, paper trading and 15 quant engines, with OAuth sign-in.  
  `finance` `stock-market` `trading` `quant` `remote`
- **[Finder Jobs](https://mcp.finder.work)** `Official` `Python` — Job vacancies and salary stats for Russia, Kazakhstan, Belarus, Kyrgyzstan, Germany, France, Belgium, Switzerland, Sweden and Indonesia. Free, read-only, no auth.  
  `jobs` `salaries` `vacancies` `remote`
- **[FirstSales MCP](https://developer.firstsales.io/agents/mcp-server)** `Official` `TypeScript` — Retrieve CRM contacts, deals, lists and workflows, and create contacts in approved workspaces via hosted OAuth MCP; requires an eligible paid FirstSales plan.  
  `crm` `contacts` `sales` `oauth` `remote`
- **[Flight Seatmap](https://flightseatmap.com/mcp)** `Official` `Other` — Seat maps, seat ratings, traveller reviews and seat alerts for 100+ airlines, as a hosted remote MCP server.  
  `travel` `flights` `seat-map` `aviation`
- **[Formquote MCP](https://github.com/Keith-CY/formquote-mcp)** `JavaScript` — Remote, read-only MCP server that compares published prices and licence fit for email-verification credits, sound-effect packs and font licences, citing the source and check date for each answer.  
  `pricing` `licensing` `comparison` `read-only` `remote`
- **[foto foto](https://github.com/nternet-company/fotofoto-mcp)** `Official` `Other` — Turn your photos or a public iCloud Shared Album into a printed hardcover photo book, and compare photo book prices across services.  
  `photos` `photo-book` `printing` `ecommerce` `remote`
- **[Frantic](https://github.com/gofrantic/frantic-mcp)** `Official` `TypeScript` — Read the bounty board and agent standing, then use authenticated tools to post funded work, claim bounties, and deliver results.  
  `agent-marketplace` `bounties` `funded-work` `payments`
- **[GC Airport Transfers](https://gc-airporttransfers.com.au/ai-agent-gateway/)** `Official` `PHP` — Private fixed-price airport and cruise transfers for Gold Coast, Brisbane and Byron Bay: live quotes, availability checks, and operator-confirmed booking requests. ([source](https://github.com/neild1971-maker/gc-airport-transfers-mcp))  
  `travel` `airport-transfers` `booking` `remote` `oauth`
- **[Glongus MCP](https://github.com/glongusmain/glongus-mcp)** `Official` `JavaScript` — Lets an agent buy and sell physical goods on the Glongus UK marketplace, with haggling, escrow, shipping and seller reputation.  
  `marketplace` `ecommerce` `escrow` `shopping`
- **[Good Nature Vibe Catalog](https://catalog-mcp.goodnaturevibe.com)** `Official` `JavaScript` — Provides read-only product catalog search and published shop knowledge without login, cart, checkout or ordering. ([source](https://github.com/aiagentcycle/gnv-catalog-mcp))  
  `e-commerce` `knowledge-base` `product-catalog` `read-only`
- **[Google Ads Transparency MCP](https://github.com/GeminiGeorge22/google-ads-transparency-mcp)** `JavaScript` — Competitor Google ads from the Google Ads Transparency Center by domain, advertiser ID or advertiser name: which ads are new, running or stopped, with first and last shown dates, format and ad links.  
  `google-ads` `ad-intelligence` `competitor-research` `marketing`
- **[Google Hotels](https://github.com/huynhtanan/google-hotels-mcp)** `Python` — Live Google Hotels and Vacation Rentals search with per-OTA nightly rates (Booking.com, Expedia, Agoda, Vrbo, Airbnb, Hotels.com and more) plus a 3-month daily price calendar. Pay-per-use via Apify (bring your own APIFY_TOKEN).  
  `hotels` `travel` `pricing` `apify`
- **[Grey Ridge x402 Market & DeFi Data](https://github.com/rezearcher/x402-data-api)** `TypeScript` — Keyless Base market data for agents: live DeFi yields, perp funding rates, crypto spot prices, Polymarket odds and a pre-trade token-safety gate. Free preview tools; paid calls settle per request in USDC via x402, no key or account.  
  `x402` `base` `defi` `crypto` `remote`
- **[helloasso-mcp](https://github.com/edouard-claude/helloasso-mcp)** `Rust` — HelloAsso for French associations: members, event tickets, donations, payments, refunds and checkout links, covering all 36 routes of the v5 API.  
  `payments` `nonprofit` `donations` `france` `ticketing`
- **[HireFerry](https://github.com/TokenNotIncluded/hireferry)** `Rust` — Self-hostable talent matching platform with read-only MCP search for public jobs and opt-in résumés, plus authenticated tools for hiring workflows.  
  `jobs` `recruiting` `resumes` `self-hosted`
- **[HireLayer](https://github.com/HireLayer/hirelayer-mcp)** `Official` `TypeScript` — Parse resumes and CVs into structured JSON, extract weighted criteria from a job description, match and rank candidates with per-criterion explanations, and normalize skills.  
  `recruiting` `resume-parsing` `hiring` `remote` `oauth`
- **[HubSpot MCP Server](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/integrate-with-the-remote-hubspot-mcp-server)** `Official` `TypeScript` — Access HubSpot contacts, deals, and marketing automation data.  
  `crm` `marketing` `sales`
- **[inReels](https://github.com/inreels-ai/inreels-mcp)** `Official` `JavaScript` — Generate video ads, UGC ads, static image ads, voiceover and faceless videos from an agent, with exact credit quotes before spending.  
  `video-generation` `ads` `ugc` `marketing` `remote`
- **[Invompt](https://mcp.invompt.com/mcp)** `Official` `TypeScript` — Turn AI-host work into invoices you review before send — Continue as guest or OAuth via hosted MCP. Site https://www.invompt.com  
  `invoicing` `finance` `oauth` `remote`
- **[IPO Radar MCP](https://github.com/songiangvan40006-boop/ipo-radar-mcp)** `Official` `TypeScript` — Free hosted MCP with live India IPO GMP, subscription, upcoming IPOs, and GMP accuracy for Claude/ChatGPT/Cursor.  
  `ipo` `gmp` `india` `finance` `remote`
- **[Jet Cab AMS](https://www.jetcabams.nl/llms.txt)** `Official` `JavaScript` — Remote server for an Amsterdam chauffeur service: list Schiphol transfer routes, tours and cars, get an exact price quote and send a booking request.  
  `travel` `taxi` `booking` `remote`
- **[JobsPipe](https://github.com/jobspipe/mcp)** `Official` `Other` — Search live job postings from 30+ ATS feeds and job boards in one normalized schema, filter by location, salary, seniority, skills and visa stance, and save searches as alerts.  
  `jobs` `hiring` `job-postings` `remote` `oauth`
- **[Kandle](https://github.com/Kernel-Hunter/kandle)** `Official` `TypeScript` — Lets an agent drive candlestick charts for crypto, stocks and forex in an open browser tab: read candles and indicator values, draw levels, set alerts, run scripts and strategy backtests, and take screenshots.  
  `finance` `trading` `charts` `crypto` `backtesting`
- **[Kooperativa.io](https://github.com/kooperativa-team/kooperativa-mcp)** `Official` `TypeScript` — People and company data from Kooperativa.io: enrich and search profiles, hiring signals, job changes, headcount by seniority and webhook monitors.  
  `b2b-data` `enrichment` `people-search` `hiring-signals`
- **[Landed MCP](https://github.com/landedjobs/landed-mcp)** `Official` `TypeScript` — Search AI and tech jobs ranked against a role brief, read a job's application form fields, and fetch free interview prep through a hosted MCP endpoint.  
  `jobs` `job-search` `interview-prep` `remote`
- **[Lasso](https://getlasso.co/mcp)** `Official` `Python` — Find unpaid Amazon links, dry-run higher-rate hops, and report clicks for one site.  
  `affiliate` `ecommerce` `marketing` `remote`
- **[Latino Events (events.lat)](https://events.lat/llms.txt)** `Official` `TypeScript` — Hosted MCP server that searches concerts, festivals and cultural events across Mexico, Brazil, Argentina, Colombia, Chile and Peru, returning venue, dates and the official ticket link, and saves events for signed-in users.  
  `events` `concerts` `latin-america` `remote` `oauth`
- **[Lava / 熔岩](https://github.com/dustinliang666-blip/lava-mcp)** `Official` `TypeScript` — Read-only A-share stock and concept-board news-flow heat monitoring via structured remote MCP/REST for quant tools and AI agent market research; API key required.  
  `a-share` `stocks` `market-research` `quant` `remote`
- **[LAYIQ Jobs](https://www.layiq.co/connectors/claude)** `Official` `Other` — Search public job listings and read job details from LAYIQ, a candidate-first job search workspace without sponsored listings. Read-only; no account or API key.  
  `jobs` `job-search` `read-only` `remote`
- **[Leal](https://www.getleal.com/mcp)** `Official` `Ruby` — Design and launch Apple Wallet and Google Wallet loyalty stamp cards for shops and cafés: brand kit from a website, live pass previews, rewards, QR signup posters.  
  `loyalty` `apple-wallet` `retail` `remote` `oauth`
- **[LinkedIn People Search (AlphaOSINT)](https://alphaosint.com/sources/linkedin-people-search-api/)** `Python` — Searches LinkedIn people by title, company, location and keywords and returns structured profile rows, served as a remote MCP tool on Apify.  
  `linkedin` `people-search` `sales` `remote`
- **[Live Tennis API MCP](https://www.npmjs.com/package/livetennisapi-mcp)** `TypeScript` — Real-time tennis match state — score, current server, three-valued break-point flag, and retirement/walkover/completed status — plus players, rankings, Elo, and fixtures across ATP, WTA, Challenger, ITF, and juniors.  
  `tennis` `sports` `live-scores` `fixtures` `event-markets`
- **[Mach GTM MCP](https://github.com/verma6uc/mach-gtm-mcp)** `TypeScript` — Open-source MCP server for B2B outbound sales: build ICPs, research prospects, score leads (0-100 fit), draft cold email and LinkedIn messages, and build multi-touch sequences.  
  `b2b` `sales` `outbound` `lead-scoring` `cold-email`
- **[MAQAMI Travel](https://github.com/negm17111995/mcp-server)** `Official` `JavaScript` — Search hotels (3M+) and flights, read hotel details and reviews, then send the customer a secure checkout link on book.maqami.co for the chosen offer; payment is taken only there. Hosted, no API key.  
  `travel` `hotels` `flights` `booking` `remote`
- **[MCP Ads](https://mcp-ads.com)** `Official` `Python` — Read and manage Google Ads, Meta Ads, TikTok, LinkedIn and Microsoft Ads plus GA4, Search Console and Tag Manager: reports, audits and campaign edits (new campaigns start paused), over Streamable HTTP with OAuth.  
  `advertising` `google-ads` `meta-ads` `remote` `oauth`
- **[MCP Price Tracker](https://github.com/zovo-one/mcp-price-tracker)** `TypeScript` — Track product prices for any product URL: current price lookup, drop tracking and alerts when a target price is hit.  
  `price-tracking` `e-commerce` `shopping` `alerts`
- **[MCPKit — Yandex Direct MCP](https://mcpkit.ru/mcp-yandex-direct?utm_source=mcphq&utm_medium=mcp_directory&utm_campaign=yandex_direct)** `Python` — Retrieve Yandex Direct campaign reports and manage supported advertising settings in ChatGPT.  
  `yandex` `yandex-direct` `remote`
- **[MCPKit — Yandex Metrica MCP](https://mcpkit.ru/mcp-yandex-metrika?utm_source=mcphq&utm_medium=mcp_directory&utm_campaign=yandex_metrica)** `Python` — Analyze Yandex Metrica traffic and conversions with read-only access in ChatGPT.  
  `yandex` `yandex-metrica` `remote`
- **[MedBillAnalyzer](https://medbillanalyzer.com)** `Official` `TypeScript` — Checks a medical bill against the insurer's Explanation of Benefits and reports where they disagree; free summary, optional $10-per-bill unlock for full detail and a dispute letter.  
  `health` `medical-bills` `billing` `insurance` `remote`
- **[Melso](https://docs.melso.ai/mcp/overview)** `Official` `Other` — OAuth-protected remote MCP for Spanish fiscal records, invoices, expenses and tax calendars in Melso.  
  `finance` `accounting` `oauth` `remote`
- **[Metaintro Job Search](https://www.metaintro.com/developers/mcp)** `Official` `TypeScript` — Search live jobs pulled straight from employer career sites, read postings, and see how employers hire and pay; free, no sign-in.  
  `jobs` `job-search` `careers` `hiring` `remote`
- **[MoltNode by Chord](https://github.com/tuantqse90/moltnode-mcp)** `Official` `Other` — Hosted MCP server with no API key: read 31 blockchains over JSON-RPC (Ethereum, Base, Arbitrum, Solana, Monad, Sui and more) and get DEX swap quotes with unsigned transactions via Chord. Non-custodial: the agent signs with its own key.  
  `blockchain` `json-rpc` `defi` `swap` `crypto`
- **[Nexscope](https://www.nexscope.ai/mcp-map?co-from=mcphq-awesome-mcp-servers)** `Official` `TypeScript` — Remote MCP and REST/OpenAPI for ecommerce product research across Amazon and other marketplaces, with self-serve API key trial credits then paid plans. ([source](https://github.com/nexscope-ai/nexscope-ecommerce-api))  
  `ecommerce` `amazon` `product-research` `remote`
- **[NFC Tap Builder by Tap.Giving](https://github.com/Tap-Giving/tap-giving-mcp)** `Official` `TypeScript` — A tool first: create print-ready NFC artwork proofs with correct vector art for organizations, free to take to any vendor, with no lock-in. Keyless pricing and quotes; ordering custom discs through Tap.Giving is an optional next step.  
  `nfc` `e-commerce` `ordering` `fundraising` `remote`
- **[Noonlaunch](https://github.com/mukund1158/noonlaunch-mcp)** `Official` `PHP` — Launch a product on Noonlaunch, search its product directory and weekly winners, and find 333 startup launch directories; hosted, no API key or account needed to connect.  
  `product-launch` `startups` `directory` `marketing` `remote`
- **[NotFair](https://github.com/nowork-studio/NotFair)** `TypeScript` — Open-source Claude Code agent skills for SEO, GEO, Google Ads, and Meta Ads, connecting to live data via Google Ads MCP, Meta Ads MCP, Google Search Console MCP, and Google Analytics (GA4) MCP.  
  `seo` `google-ads` `meta-ads` `marketing`
- **[Nyria](https://github.com/Nyria-LLC/nyria-mcp)** `Official` `Other` — Hosted server that sends trade alerts from an MCP client to Nyria Paper or a connected broker, with alert preview, order status and positions.  
  `trading` `alerts` `paper-trading` `tradingview` `remote`
- **[OMX for Hyperliquid](https://github.com/Lumen-Founder/omx)** `Official` `Python` — Non-custodial Hyperliquid perps execution for AI agents: pre-trade limits, human approval, kill switch, audit log; keyless demo via `uvx omx-hyperliquid`; optional disclosed 1 bp builder fee.  
  `hyperliquid` `trading` `execution` `ai-agents` `non-custodial`
- **[Orizn Visa](https://github.com/MattJeff/orizn-mcp-server)** `Official` `TypeScript` — Visa and entry requirements for 49,750 passport-destination pairs (199 passports, 250 destinations) in 15 languages; two tools work without a key, a free API key unlocks transit rules, comparisons and source URLs.  
  `visa` `travel` `immigration` `remote`
- **[OttoQuest](https://ottoquest.com/mcp)** `Official` `TypeScript` — Search US dealer listings with estimated market values, look up VINs and recalls, browse dealer inventory, and manage deal alerts with an OttoQuest account.  
  `automotive` `car-search` `valuations` `oauth` `remote`
- **[OutreachGenie](https://github.com/Outreachgenie/outreachgenie-linkedin-mcp)** `Official` `TypeScript` — Manage saved prospects, lists, outreach flows and campaign drafts in an OutreachGenie workspace over hosted MCP; requires an account and OAuth or a bearer API key, with broader permissions for API keys.  
  `linkedin` `crm` `outreach` `remote` `oauth`
- **[Panda Greetings](https://www.pandagreetings.com/ai-assistants)** `Official` `JavaScript` — Finds ready-made greeting card designs for an occasion with your message placed inside, each linking to its page to order it printed and mailed in the US; free hosted server, no sign-in.  
  `greeting-cards` `shopping` `printing` `read-only` `remote`
- **[PandaStock](https://github.com/D-Asce/pandastocksdk)** `Python` — A-share real-time market data MCP server with NATS-pushed quotes, Level2, DDX big orders, money flow and AI stock screening; 176 server-side endpoints, 22 open endpoints, free public test account.  
  `a-share` `stock-data` `real-time-quotes` `market-data`
- **[PayPal MCP Server](https://github.com/paypal/agent-toolkit)** `Official` `TypeScript` — Process PayPal payments and manage merchant operations.  
  `payments` `commerce` `fintech`
- **[Picardo](https://picardo.health/docs/claude)** `Official` `TypeScript` — Plan your blood work with your assistant. Browse Picardo's panels, from a yearly check-up to fertility, price any of about 1,000 Labcorp tests, and get one link to order them all.  
  `health` `blood-tests` `lab-tests` `remote` `read-only`
- **[Pink Agentic AI Payments](https://pinkwallet.com/agentic/developers/)** `Official` `TypeScript` — Approval layer for AI agent payments: per-agent budgets and rules return allow (single-use credential), ask a human, or block before money moves, over remote Streamable HTTP with OAuth 2.1; public sandbox with test money only.  
  `payments` `spending-limits` `approvals` `remote` `oauth`
- **[Plaid MCP Server](https://plaid.com/docs/resources/mcp/)** `Official` `TypeScript` — Connect bank accounts and retrieve financial transaction data.  
  `banking` `finance` `open-banking`
- **[PlushSource MCP](https://github.com/quickman924/plushsource-mcp)** `TypeScript` — Search, filter and compare custom plush toy manufacturers listed in the PlushSource directory; facts are recorded as stated by the manufacturers, and a listing is not an endorsement.  
  `plush` `manufacturing` `sourcing` `directory`
- **[Pocket Drives](https://github.com/RevList/pocket-drives-mcp)** `TypeScript` — Search, quote, and browse luxury, exotic, and EV rentals from independent hosts. Location autocomplete, availability, and airport/venue delivery. Booking finishes in the iOS app.  
  `travel` `car-rental` `marketplace`
- **[Puley](https://puley.com)** `Official` `Other` — Gives ChatGPT and Claude live data and real jobs: local business leads from Google Maps, competitors' live Meta and Google ads, TikTok, Instagram and YouTube stats and transcripts, price comparison and change alerts.  
  `lead-generation` `marketing` `competitor-ads` `remote` `oauth`
- **[QR Cloud](https://qr-cloud.com/mcp-server/)** `Official` `PHP` — Creates dynamic QR codes and short links, sets up QR Reviews that route guests to Google or Tripadvisor, and reads click, scan and review statistics from a QR Cloud account.  
  `qr-code` `url-shortener` `reviews` `marketing` `remote`
- **[Quantral](https://quantral.com/mcp)** `Official` `TypeScript` — Investment ideas built on alternative data: 0-100 stock scores from what investors say on X, Reddit, Substack and YouTube, track records for the accounts behind them, plus US Congress trades and insider buys. Read-only tools.  
  `stocks` `sentiment` `alternative-data` `congress-trades` `remote`
- **[QuickBooks MCP Server](https://github.com/intuit/quickbooks-online-mcp-server)** `Official` `TypeScript` — Manage QuickBooks accounting records and financial reports.  
  `accounting` `finance` `bookkeeping`
- **[Relaticle](https://github.com/relaticle/relaticle)** `Official` `PHP` — Open-source CRM your AI agents can read and update: companies, people, opportunities, tasks, notes and custom fields.  
  `crm` `sales` `oauth` `remote`
- **[RentReboot](https://github.com/imiraoui/rentreboot-mcp)** `Official` `Other` — Search NYC apartments and renter guides, explore rent data, and access personal alerts and saved searches with scoped OAuth; website alert plans are separate.  
  `housing` `apartments` `nyc` `remote`
- **[Requstory](https://requstory.com/developers/api/)** `Official` `PHP` — Map how a company works from its website, who owns each process, and which steps AI agents can run; search public company maps and AI-readiness scores.  
  `business-process` `operating-model` `ai-agents` `remote`
- **[RestoSignals](https://github.com/paperandbeyond23-gif/restosignals-mcp)** `Official` `Python` — Finds US restaurants and bars 1-6 months before they open by fusing public liquor-license, food-permit and new-business filings into scored venues with owner contact.  
  `lead-generation` `restaurants` `sales` `public-records` `remote`
- **[SaaSCity](https://github.com/nyyhao/saascity-mcp)** `Official` `JavaScript` — Audit a homepage before launch, pick launch directories from 1,600+ by DR, link type and price, and list the product on SaaSCity.  
  `launch` `directories` `seo` `marketing` `remote`
- **[Salesforce MCP Server](https://github.com/salesforcecli/mcp)** `Official` `TypeScript` — Query Salesforce CRM records and manage business workflows.  
  `crm` `sales` `enterprise`
- **[ScentVerdict](https://scentverdict.com/connect)** `Official` `C#` — Look up fragrances with verdicts, similarity scores, scent profiles, drydowns and local prices; free hosted read-only server, no authentication.  
  `fragrance` `perfume` `shopping` `read-only` `remote`
- **[Screwtape.ai](https://screwtape.ai)** `Official` `TypeScript` — Spend guardrails for AI agents: check payments, track budgets, catch duplicates, and issue signed receipts.  
  `spend` `budget` `receipts` `agents` `guardrails`
- **[SecureLend Underwriting](https://github.com/SecureLend/mcp-underwriting)** `Official` `TypeScript` — Remote MCP for credit desks: open a credit file, chase gaps, screen sanctions, draft a cited memo. Person decides.  
  `underwriting` `lending` `credit` `finance` `remote`
- **[send21](https://github.com/send21io/mcp)** `Official` `Other` — Create non-custodial crypto pay links and payment drafts in BTC, USDC, USDT, EURC, SOL or ETH; the payer signs in their own wallet.  
  `payments` `crypto` `bitcoin` `stablecoins` `lightning`
- **[Sendable](https://docs.getsendable.io/integrations/mcp)** `Official` `TypeScript` — Finds LinkedIn prospects showing buying intent, qualifies them against an ideal customer profile, and manages Sendable outreach campaigns, leads and LinkedIn inbox.  
  `linkedin` `sales` `prospecting` `outreach` `crm`
- **[SendNF](https://sendnf.com/mcp/)** `Official` `TypeScript` — Issues and cancels Brazilian NFS-e and NFC-e invoices, looks up CNPJ and service codes, and pre-checks each invoice with human approval before it is sent. 44 tools. ([source](https://github.com/sendnf/sendnf-mcp))  
  `nfse` `nfce` `invoicing` `brazil` `remote`
- **[Shop Nobi](https://nobi.ai/shop)** `Official` `Java` — Read-only product search across independent stores and exact-topic shopping page lookup; purchases happen on merchant sites, where some links may earn Nobi a commission.  
  `shopping` `product-search` `remote`
- **[Shopify MCP Server](https://github.com/GeLi2001/shopify-mcp)** `TypeScript` — Community-maintained integration for Shopify products, orders, and store operations.  
  `ecommerce` `shopify` `retail`
- **[Silicon Floor](https://github.com/Baptoshi/silicon-floor)** `Official` `TypeScript` — Ownership, insider trades, short interest and financial statements as filed for listed AI and semiconductor companies, each figure dated and linked to its SEC or FINRA source.  
  `stocks` `sec-filings` `ownership` `semiconductors` `remote`
- **[Skael API](https://api.skael.de/docs/mcp)** `Official` `PHP` — Hosted MCP for B2B lead lists with a German focus: commercial register (Handelsregister) companies, officers and new registrations, Google Maps businesses, job boards and imprints, with verified work emails.  
  `lead-generation` `company-data` `handelsregister` `email-finder` `germany`
- **[SkyAccess](https://github.com/sky-access/skyaccess-mcp)** `Official` `JavaScript` — Search 5,000+ live empty leg flights, get charter price estimates and booking links. No account or API key.  
  `travel` `private-jet` `charter` `marketplace` `remote`
- **[SoChain](https://sochain.com/docs)** `Official` `Other` — Hosted MCP server for Bitcoin, Litecoin, Dogecoin and Zcash: address balances and history, transactions, blocks and mempool fee estimates. Lookups work without an API key; a key raises the limits.  
  `bitcoin` `litecoin` `dogecoin` `zcash` `blockchain`
- **[SpellBook Finance](https://spellbook-finance.com/agent/mcp.md)** `Official` `TypeScript` — Source, list, and run a trading-card store through MCP with market research, inventory management, pricing controls, and marketplace tools.  
  `trading-cards` `market-data` `inventory` `ecommerce` `remote`
- **[Square MCP Server](https://github.com/square/square-mcp-server)** `Official` `TypeScript` — Process Square payments and manage point-of-sale operations.  
  `payments` `pos` `commerce`
- **[Statsnet](https://github.com/usenetstate/statsnet-mcp)** `Official` `TypeScript` — Company data for Kazakhstan, Uzbekistan and Kyrgyzstan: registration, executives and finances.  
  `company-data` `business` `finance` `remote`
- **[StrictScore](https://strictscore.com/developers)** `Official` `TypeScript` — Hosted MCP server and REST API for STRICT scores, AI-rated 0-100 crypto fundamentals for 970 assets on six pillars; needs an Enterprise plan API key (Bearer).  
  `crypto` `fundamentals` `scoring` `api-key` `remote`
- **[Stripe MCP Server](https://github.com/stripe/agent-toolkit)** `Official` `TypeScript` — Manage Stripe payments, customers, and subscriptions via MCP tools.  
  `payments` `billing` `fintech`
- **[SwapWallet](https://github.com/SwapWallet/swapwallet-mcp)** `Official` `Kotlin` — Crypto exchange account: balances, P&L, history and deposit addresses, plus swaps, transfers and withdrawals the user approves in Telegram.  
  `crypto` `wallet` `finance` `oauth` `remote`
- **[Synci](https://github.com/synciio/synci-mcp)** `Official` `Other` — Read-only bank, brokerage, and crypto accounts: balances, transactions, holdings, and connection health.  
  `banking` `personal-finance` `open-banking` `oauth` `read-only`
- **[Synmerco](https://www.npmjs.com/package/@synmerco/mcp-server)** `Official` `TypeScript` — MCP server for Synmerco, an agent-to-agent marketplace where AI agents post and bid on funded jobs, with payment held in USDC escrow until the work is delivered.  
  `agents` `marketplace` `escrow` `payments` `usdc`
- **[Tapetide](https://github.com/Tapetide-hq/nse-bse-indian-stock-market-data-mcp)** `Official` `TypeScript` — Indian stock market (NSE and BSE) research for about 8,200 stocks: quotes, financials, technicals, fundamental and technical screeners, FII/DII flows, option chains, filings, IPOs and portfolio tracking.  
  `stocks` `india` `market-data` `remote` `oauth`
- **[Tenmomo](https://github.com/tenmomo-sokui)** `Official` `PHP` — Search US stores for cashback rates and coupon codes, and get a tracked activation link.  
  `cashback` `coupons` `shopping` `ecommerce`
- **[Tera Ads](https://teraads.co/connect)** `Official` `Python` — Meta Ads from Claude, ChatGPT, Cursor or Claude Code with approval before changes, undo for pauses and budgets, and Shopify profit after returns.  
  `meta-ads` `advertising` `shopify` `ecommerce` `remote`
- **[Toll](https://t0ll.xyz)** `Official` `TypeScript` — Safety checks an AI agent calls before it buys, signs or pays on Robinhood Chain: rug, bundle, dev and LP checks, ALLOW/WARN/BLOCK for transactions, EIP-712 and x402 payments, and ERC-8004 agent checks.  
  `crypto` `security` `x402` `robinhood-chain` `remote`
- **[Toolbox POD](https://toolboxpod.com/docs/mcp)** `Official` `TypeScript` — Design custom tees and hoodies, see mockups, and order prints made and shipped from Utah: price an order and get a checkout link to pay on toolboxpod.com. ([source](https://github.com/Toolbox-POD/toolbox-pod-mcp))  
  `print-on-demand` `apparel` `mockups` `ecommerce` `oauth`
- **[TraderSpy](https://github.com/target1m/traderspy-mcp)** `Official` `Other` — Read-only crypto futures market data: AI signals, top-trader positions on Hyperliquid, Binance, Bybit and OKX, indicators, funding, open interest, a screener and backtests. No order or withdrawal tools.  
  `crypto` `trading` `market-data` `oauth` `read-only`
- **[TraderWAI](https://github.com/leonardo-mazzitelli/traderwai-mcp)** `Official` `JavaScript` — Hosted MCP server that lets AI clients read live charts, backtest rule-based strategies and place risk-sized orders on the user's own MetaTrader, cTrader, TradeLocker, Match-Trader, Binance or Bybit account; free plan.  
  `trading` `forex` `crypto` `backtesting` `remote`
- **[Trading Signals MCP](https://github.com/gdietsch/trading-signals-mcp)** `TypeScript` — Pay-per-call market data for AI agents: ES futures event-risk gate, SEC insider buys, and AI trade briefs.  
  `trading` `market-data` `x402` `finance`
- **[Truo](https://truo.com.au/docs)** `Official` `TypeScript` — Remote MCP that lets Australian households ask Claude or ChatGPT about their own bank accounts under the Consumer Data Right, read-only at the bank.  
  `australia` `banking` `cdr` `remote` `oauth`
- **[TubeText E-commerce Prices: Amazon, Taobao, AliExpress, Idealo](https://github.com/LMSlay/tubetext-mcp/tree/main/registry/ecommerce-prices)** `Official` `Other` — Products, prices and sellers from Amazon, Taobao/Tmall, AliExpress, TikTok Shop and Idealo (EU). Hosted on Apify (OAuth), pay per result. ([source](https://github.com/LMSlay/tubetext-mcp))  
  `ecommerce` `prices` `amazon` `remote`
- **[TvojeLajky MCP](https://tvojelajky.cz/developers)** `Official` `TypeScript` — Czech Instagram/TikTok follower, like and view service catalog, exact quotes, order status and paid CZK purchases; private operations use OAuth and customer-approved prepaid budgets.  
  `commerce` `social-media` `oauth` `remote`
- **[Universal Crypto MCP](https://github.com/nirholas/universal-crypto-mcp)** `TypeScript` — MCP server for agents to work across Ethereum, Arbitrum, Base, Polygon and BNB Chain: swaps, bridges, gas, staking, lending and x402 payments.  
  `crypto` `defi` `x402` `blockchain`
- **[Vedar Kamchatka](https://github.com/tourhabk-ui/pos)** `Official` `TypeScript` — Kamchatka (Russia) travel: search tours, accommodation and transfers, build trip plans, send booking requests, and get volcano status, weather and safety info. Hosted, no API key.  
  `travel` `tours` `kamchatka` `booking` `remote`
- **[Voidpay Marketplace MCP](https://github.com/voidly-ai/pay-mcp)** `Official` `TypeScript` — Find services and storefronts on Voidly's hosted marketplace for AI-agent services and prepare checkout links that the owner reviews and approves in their own browser; the connector never signs, pays or holds keys.  
  `marketplace` `agent-payments` `checkout` `commerce` `remote`
- **[W System EU Business Data](https://wsystem.dev/eu-business-data-mcp-server)** `Official` `Python` — Remote MCP server for EU business checks: VAT validation via VIES (national fallback when VIES is down), EORI, company registries, EU/UN/OFAC/UK sanctions, KYB and EN 16931 e-invoices. ([source](https://github.com/wsystemdev/eu-business-data-mcp))  
  `vat` `vies` `kyb` `sanctions` `e-invoicing`
- **[Warden MCP](https://github.com/warden-protocol/warden-mcp)** `Official` `Other` — Remote MCP server for Warden Token Terminal: AI agents find tokens, quote swaps and trade onchain on Base, BNB Chain, Robinhood Chain and Arc within user-set limits.  
  `crypto` `trading` `defi` `onchain` `ai-agents`
- **[Whimbrel MedTech Analyst](https://github.com/WhimbrelResearch/whimbrel-mcp)** `Official` `JavaScript` — Research up-and-coming US medtech companies from NIH and NSF grants, federal contracts, FDA clearances and Breakthrough marketing authorizations; company research links every line to its source.  
  `medtech` `fda` `company-research` `oauth` `remote`
- **[Wine Labs](https://github.com/imiraoui/winelabs-mcp)** `Official` `Other` — Fine-wine matching, market prices, auctions, merchant offers, and portfolio intelligence through a hosted MCP server; browser OAuth and account plans or credits apply.  
  `wine` `pricing` `auctions` `remote`
- **[WISEPIM Commerce Reference](https://github.com/lldiegon/wisepim-commerce-mcp)** `Official` `TypeScript` — Look up HS headings, read marketplace listing requirements, and screen environmental claims in product copy offline.  
  `ecommerce` `customs` `marketplaces` `compliance`
- **[Worklittle Jobs](https://github.com/worklittle/jobs-mcp)** `Official` `Other` — Remote job search MCP for exploring 4 million roles with visa, salary, and distance filters, swiping to apply, and saving roles to a Worklittle account via OAuth.  
  `jobs` `recruiting` `remote` `oauth`
- **[Zovo Invoice Generator](https://github.com/theluckystrike/mcp-invoice-generator)** `TypeScript` — Invoice creation, line items, totals, and PDF-ready billing documents over MCP; also available as a hosted Streamable HTTP endpoint.  
  `invoice` `billing` `pdf`
- **[Zovo Invoice MCP](https://github.com/theluckystrike/mcp-servers/tree/main/servers/invoice)** `TypeScript` — Local PDF invoicing with sequential numbering, VAT per rate, and client management; also sold as a hosted streamable endpoint. ([source](https://github.com/theluckystrike/mcp-servers))  
  `invoice` `pdf` `billing` `bookkeeping` `finance`

<a id="utilities-and-examples"></a>

## Utilities and Examples

Helpful utilities, templates, and starter servers for learning MCP.

- **[A2ASearch MCP](https://github.com/tadas-github/a2asearch-mcp)** `TypeScript` — Search thousands of MCP servers, agents, and CLI tools by capability.  
  `discovery` `search` `registry`
- **[AgentFEM MCP](https://github.com/haoming-luo/agentfem-mcp)** `Official` `Python` — Create, validate and run finite-element projects and inspect numerical results through local stdio tools, with a separately installed compatible AgentFEM scientific runtime.  
  `finite-element` `simulation` `scientific-computing` `local`
- **[Airport Lounge List MCP Server](https://github.com/Airport-Lounge-List/mcp-server)** `Official` `Ruby` — Hosted server for searching 8,500+ airport lounges and checking access by card or membership.  
  `travel` `airports` `lounges`
- **[AlertForge](https://alertforge.ai/docs/agents)** `Official` `TypeScript` — Plan, create, and export stream overlays, AI alerts, and transparent videos through a hosted service requiring an active paid subscription and generation credits.  
  `streaming` `design` `video` `oauth`
- **[Anyquery](https://github.com/julien040/anyquery)** `Go` — Query 40+ apps and databases with SQL from a single local binary.  
  `sql` `integration` `local`
- **[CareClinic Health Tracker](https://github.com/tandemloop/careclinic_mcp)** `Other` — Track symptoms, mood, medications, and wellness patterns through a remote OAuth MCP server.  
  `health` `tracking` `oauth` `wellness`
- **[ComputeFirst](https://computefirst.net/docs)** `Official` `JavaScript` — Hosted catalog of versioned, deterministic tools for exact math, CSV and JSON transforms, date math, text, hashing and identifier checks; search, then execute by id. No key.  
  `math` `data-transforms` `deterministic` `remote`
- **[DESIGN:OS 3D Blender](https://github.com/jangtrinh/design-os-3d-blender)** `Python` — Free stdio server for Blender 5.2 LTS: check the runtime, query a bpy knowledge base, validate part specs and run headless passes to build parametric parts with glTF/STL export. Source-available (PolyForm Shield).  
  `blender` `3d-modeling` `cad` `gltf` `local`
- **[Domain Search King](https://github.com/johnsmalls22-rgb/domain-search-king-mcp)** `Official` `JavaScript` — Suggests .com domain names and returns only those currently available to register, checked against the Verisign RDAP registry; hosted, no API key.  
  `domains` `rdap` `naming`
- **[Everything2MCP](https://github.com/shcdwz1234/Everything2MCP)** `TypeScript` — Turn local capabilities, private-net services, OpenAPI/gRPC/MQTT/queues, and Feishu/DingTalk/WeCom into one MCP surface with hot-reload and Safe defaults.  
  `openapi` `grpc` `mqtt` `hot-reload` `integrations`
- **[FastMCP](https://github.com/jlowin/fastmcp)** `Python` — Python framework for building MCP servers quickly with decorators.  
  `framework` `python` `starter`
- **[FaviconDL](https://github.com/sweesama/favicondl.com)** `JavaScript` — Extract and download website favicons via MCP; wraps the free no-key FaviconDL API.  
  `favicon` `icons` `devtools` `utilities`
- **[fotosize](https://fotosize.com/docs/mcp)** `Official` `TypeScript` — Read-only lookup of passport, visa and ID photo specs (photo size, head height, background color) checked against official sources.  
  `photo-specs` `passport` `visa` `remote`
- **[genealogy-mcp](https://github.com/igormel81/genealogy-mcp)** `Python` — Family history research with 79 archives and databases, name variants, historical calendars, evidence checks, GEDCOM audit, and archive-request drafts. Runs locally without API keys or network requests.  
  `genealogy` `family-history` `archives` `gedcom` `evidence`
- **[Google Maps MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/google-maps)** `Python` — Geocoding, directions, and place search via Google Maps. ([source](https://github.com/modelcontextprotocol/servers-archived))  
  `maps` `location` `geo`
- **[Ignav Flights](https://github.com/gusgordon/ignav-skill)** `Official` `Python` — Search live flight prices, compare departure dates, resolve airports, and get booking links.  
  `travel` `flights` `booking-links` `remote` `oauth`
- **[LogoAPI.sh](https://logoapi.sh/docs/mcp)** `Official` `JavaScript` — Company logos for agents: get a logo by domain, search brands by name, or fetch a favicon, as SVG or PNG URLs. Free, no API key.  
  `logos` `branding` `images` `remote`
- **[MakeItSay](https://makeitsay.com/docs/mcp)** `Official` `TypeScript` — Change the words in a screenshot or photo and keep the original font and layout, through a remote MCP server. ([source](https://github.com/makeitsay/makeitsay-mcp))  
  `image-editing` `screenshots` `ai-images` `remote`
- **[MCP Server Starter](https://github.com/modelcontextprotocol/create-typescript-server)** `Official` `TypeScript` — Official TypeScript scaffold for creating new MCP servers.  
  `template` `typescript` `starter`
- **[MCP Server Templates](https://github.com/Data-Everything/mcp-server-templates)** `TypeScript` — Unified MCP platform connecting many apps behind one interface.  
  `templates` `multi-tool` `starter`
- **[mcp-trellis](https://github.com/amir1824/mcp-trellis)** `TypeScript` — Zero-dependency TypeScript library that ships an MCP handler and OAuth 2.1 authorization server in one package for Claude, Gemini, and Codex connectors.  
  `framework` `oauth` `typescript` `zero-deps`
- **[MCPJungle](https://github.com/duaraghav8/MCPJungle)** `Go` — Self-hosted MCP server registry for enterprise AI agent deployments.  
  `registry` `enterprise` `self-hosted`
- **[MeshMend MCP](https://github.com/Keith-CY/meshmend-mcp)** `TypeScript` — Local MCP server that checks and repairs 3D-printing meshes (STL, 3MF): holes, flipped faces, inside-out shells, non-manifold edges; writes a repaired STL next to the original and converts 3MF to STL, with no uploads.  
  `3d-printing` `mesh-repair` `stl` `3mf` `local`
- **[MetaMCP](https://github.com/metatool-ai/metatool-app)** `Official` `TypeScript` — Middleware MCP server that aggregates and manages multiple connections.  
  `aggregator` `gateway` `middleware`
- **[Model Salt](https://modelsalt.com)** `Official` `JavaScript` — Outside randomness for creative requests, so the same prompt gives different answers that still do what was asked. ([source](https://github.com/modelsalt/model-salt))  
  `creative` `randomness` `remote`
- **[Nestbolt](https://github.com/skulitom/Nestbolt)** `Rust` — Nests 2D SVG/DXF parts on fixed sheets for laser, CNC, plasma and waterjet cutting, with validated layouts and per-sheet SVG/DXF export.  
  `nesting` `dxf` `svg` `laser-cutting` `cnc`
- **[obd2-mcp](https://github.com/shoka-jp/obd2-mcp)** `TypeScript` — Read OBD-II trouble codes, live data, and freeze frames through an ELM327 adapter, with a mock vehicle for testing.  
  `automotive` `obd2` `diagnostics`
- **[OneSimpleAPI](https://registry.modelcontextprotocol.io/v0.1/servers/com.onesimpleapi%2Fonesimpleapi/versions/1.0.0)** `Official` `PHP` — Generate PDFs, screenshots, images, QR codes and short links, and validate emails through an official hosted MCP endpoint.  
  `pdf` `images` `screenshots` `qr-codes` `url-shortener`
- **[Pic2SVG MCP](https://pic2svg.com/mcp/)** `Official` `JavaScript` — Source-installed local stdio server that uploads raster images to Pic2SVG's hosted tracing API and writes SVG filled paths.  
  `svg` `raster-tracing` `images`
- **[QRX](https://qrx.codes/developers/mcp)** `Official` `TypeScript` — Creates artistic, print-ready QR codes from a prompt and a link, checks that each one decodes before returning it, and serves it through a hosted qrx.to short link.  
  `qr-code` `image-generation` `design` `api-key` `remote`
- **[RoboDebut](https://registry.modelcontextprotocol.io/v0.1/servers/com.robodebut%2Fsubmissions/versions/1.0.0)** `Official` `TypeScript` — RoboDebut, run by Boon who also builds LinkBunny, lets agents submit websites and startups for operator review through an anonymous MCP server; ordinary submissions need a followed homepage badge and private maker email.  
  `website-directory` `startup-directory` `agent-submission`
- **[SlickTrip](https://github.com/sliktrip/slicktrip-mcp)** `Official` `Python` — Live flight, hotel and seat prices, cheapest-day calendars, and price-drop and seat alerts by email or text; hosted, with OAuth sign-in.  
  `travel` `flights` `hotels` `price-alerts` `oauth`
- **[Stadiq](https://github.com/snenenenenenene/stadiq-mcp-server)** `JavaScript` — Road works, De Lijn transit disruptions, air quality and briefings for any point in Flanders and Brussels.  
  `traffic` `air-quality` `belgium` `transit`
- **[TableJourney](https://github.com/lewismvaughan/tablejourney-mcp)** `Official` `Python` — Where to eat in 222 cities, signature dishes, and dates of the next edition of 1,480 food festivals, each place with the source it was checked against; hosted, no auth.  
  `travel` `food` `restaurants` `festivals` `remote`
- **[Tera Studio](https://terastudio.co/ai-assistants/)** `Official` `Python` — Find a song's key and tempo or move it up or down by up to 6 semitones, with the file processed in the user's browser and never uploaded, and get the steps to hear a song in the user's own voice.  
  `music` `audio` `singing` `remote`
- **[Transita](https://github.com/snenenenenenene/transita-mcp-server)** `JavaScript` — Matches a profile against 100+ immigration visa pathways in 16 countries and returns eligibility, costs, timelines and live intake status.  
  `immigration` `visas` `travel` `remote`
- **[Unmerge](https://unmerge.app/docs/mcp)** `Official` `TypeScript` — Split a flat image into separate transparent PNG layers through a remote MCP server; pay with Unmerge credits via API key. ([source](https://github.com/unmerge-app/unmerge-mcp))  
  `image-editing` `png-layers` `transparency` `remote`
- **[Weather MCP Server](https://github.com/isdaniel/mcp_weather_server)** `Python` — Fetch current weather and forecasts from public weather APIs.  
  `weather` `api` `utility`
- **[Wheremind](https://wheremind.ai)** `Official` `Other` — Hosted maps MCP server for AI agents: live place search, place details, nearby search, geocoding, and directions, with no Maps API key to manage.  
  `maps` `geocoding` `places` `directions` `remote`

<a id="logistics-and-shipping"></a>

## Logistics and Shipping

Freight and parcel shipping, carrier rates, shipment tracking, and supply chain operations.

- **[Mothership](https://github.com/mothership/agent-plugins)** `Official` `TypeScript` — Mothership LTL, FTL & Local Freight: get quotes and track shipments.  
  `freight` `logistics` `shipping` `oauth` `remote`

## Use the Data

The full catalog is published with every website deploy:

| File | URL |
| --- | --- |
| Servers | [`https://mcphq.org/api/servers.json`](https://mcphq.org/api/servers.json) |
| Categories | [`https://mcphq.org/api/categories.json`](https://mcphq.org/api/categories.json) |
| LLM index | [`https://mcphq.org/llms.txt`](https://mcphq.org/llms.txt) |
| LLM full catalog | [`https://mcphq.org/llms-full.txt`](https://mcphq.org/llms-full.txt) |

```bash
curl -s https://mcphq.org/api/servers.json | jq '.[] | select(.official) | .name'
```

The fields are described in [`data/servers.schema.json`](data/servers.schema.json). Please link back to this repo if you build on the data.

## Listed on mcpHQ Badge

If your server is in this catalog, you can add this badge to your README:

[![Listed on mcpHQ](https://img.shields.io/badge/Listed%20on-mcpHQ-8A2BE2)](https://github.com/mcpHQ/awesome-mcp-servers)

```markdown
[![Listed on mcpHQ](https://img.shields.io/badge/Listed%20on-mcpHQ-8A2BE2)](https://github.com/mcpHQ/awesome-mcp-servers)
```

## Quality Criteria

An entry is accepted if the server is:

- **Purposeful**: clear tools/resources for a real workflow
- **Discoverable**: public repo, docs, or registry listing
- **Maintainable**: recent activity or official backing
- **Safe to evaluate**: no obvious spam or impersonation

An entry is removed if its link stays broken, its repository is archived without a maintained successor, or it turns out to be misleading about what it does or who backs it.

## Contribute

Found a great MCP server? Read [CONTRIBUTING.md](CONTRIBUTING.md) and open a PR with an entry in `data/servers.json`.

Then regenerate the README and LLM catalog files:

```bash
npm run generate
npm run validate
```

See [site/README.md](site/README.md) for how the website is built and how to preview it locally.

## License

This list is released under the [MIT License](LICENSE).
