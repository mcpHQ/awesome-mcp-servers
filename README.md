# Awesome MCP Servers

[![MCP](https://img.shields.io/badge/protocol-MCP-blue)](https://modelcontextprotocol.io)
[![Servers](https://img.shields.io/badge/servers-115-brightgreen)](#catalog)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A curated catalog of [Model Context Protocol (MCP)](https://modelcontextprotocol.io) servers for research, discovery, and integration planning.

MCP is an open protocol that lets AI applications connect to external tools and data through a standardized client-server interface. This list focuses on well-scoped, source-available servers that extend AI workflows with databases, developer tools, browsers, cloud services, and more.

> **Explore visually:** Browse the [MCP Landscape](#mcp-landscape) — an interactive, searchable map of every server in this catalog.

> **Source of truth:** [`data/servers.json`](data/servers.json) is the canonical catalog. The README is generated from that file.

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

- [Official and Reference Servers](#official-and-reference) (11)
- [Databases and Storage](#databases-and-storage) (13)
- [Developer Tools and Code Intelligence](#developer-tools-and-code-intelligence) (13)
- [Browsers, Search, and Web Automation](#browsers-search-and-web-automation) (11)
- [Filesystems and Documents](#filesystems-and-documents) (7)
- [Cloud and Infrastructure](#cloud-and-infrastructure) (9)
- [Communication and Productivity](#communication-and-productivity) (8)
- [AI, Agents, and Memory](#ai-agents-and-memory) (11)
- [Data, Analytics, and BI](#data-analytics-and-bi) (8)
- [Security and Identity](#security-and-identity) (6)
- [Finance, Commerce, and Business Apps](#finance-commerce-and-business-apps) (9)
- [Utilities and Examples](#utilities-and-examples) (9)

<a id="official-and-reference"></a>

## Official and Reference Servers

Reference implementations, SDKs, and core protocol tooling from the MCP ecosystem.

- **[MCP Everything](https://github.com/modelcontextprotocol/servers/tree/main/src/everything)** `Official` `TypeScript` — Reference server exposing prompts, resources, and tools for protocol testing.  
  `reference` `testing` `official`
- **[MCP Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch)** `Official` `Python` — Fetch web content and convert HTML to markdown for LLM consumption.  
  `reference` `web` `official`
- **[MCP Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)** `Official` `TypeScript` — Secure local filesystem access with configurable allowed directories.  
  `reference` `filesystem` `official`
- **[MCP Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git)** `Official` `Python` — Read, search, and manipulate Git repositories through MCP tools.  
  `reference` `git` `official`
- **[MCP Inspector](https://github.com/modelcontextprotocol/inspector)** `Official` `TypeScript` — Visual testing tool for debugging MCP server capabilities and messages.  
  `debugging` `testing` `official`
- **[MCP Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)** `Official` `TypeScript` — Knowledge graph memory for persistent entities and relationships.  
  `reference` `memory` `official`
- **[MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)** `Official` `Python` — Official Python SDK for building MCP servers and clients.  
  `sdk` `python` `official`
- **[MCP Registry](https://github.com/modelcontextprotocol/registry)** `Official` `Go` — Official MCP registry service and API for discovering publicly available MCP servers.  
  `registry` `discovery` `official`
- **[MCP Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)** `Official` `TypeScript` — Structured step-by-step reasoning tool for complex problem solving.  
  `reference` `reasoning` `official`
- **[MCP Time](https://github.com/modelcontextprotocol/servers/tree/main/src/time)** `Official` `Python` — Time and timezone conversion utilities for agents and assistants.  
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
- **[DuckDB MCP Server](https://github.com/motherduckdb/mcp-server-motherduck)** `Official` `Python` — Run analytical SQL queries against DuckDB databases and files.  
  `analytics` `sql` `olap`
- **[Elasticsearch MCP Server](https://github.com/elastic/mcp-server-elasticsearch)** `Official` `TypeScript` — Search and analyze data in Elasticsearch clusters via MCP.  
  `search` `analytics` `elastic`
- **[MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server)** `Official` `TypeScript` — Query and manage MongoDB databases and collections from AI clients.  
  `mongodb` `nosql` `documents`
- **[Neon MCP Server](https://github.com/neondatabase/mcp-server-neon)** `Official` `TypeScript` — Manage Neon Postgres databases, branches, and SQL queries via MCP.  
  `postgres` `serverless` `sql`
- **[Pinecone MCP Server](https://github.com/pinecone-io/pinecone-mcp)** `Official` `TypeScript` — Manage Pinecone indexes and run semantic vector queries.  
  `vector` `search` `rag`
- **[PlanetScale MCP Server](https://planetscale.com/docs/connect/mcp)** `Official` `TypeScript` — Manage PlanetScale MySQL databases, branches, and schema changes.  
  `mysql` `serverless` `sql`
- **[Qdrant MCP Server](https://github.com/qdrant/mcp-server-qdrant)** `Official` `Python` — Store and retrieve vectors in Qdrant for RAG workflows.  
  `vector` `search` `rag`
- **[Redis MCP Server](https://github.com/redis/mcp-redis)** `Official` `Python` — Read and write Redis keys, lists, and data structures through MCP.  
  `redis` `cache` `kv`
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
- **[ax](https://github.com/Necmttn/ax)** `TypeScript` — Local-first MCP server for querying coding-agent sessions, tool calls, skills, and costs.  
  `observability` `coding-agents` `costs`
- **[Context7 MCP](https://github.com/upstash/context7)** `Official` `TypeScript` — Up-to-date library and framework documentation injected into prompts.  
  `docs` `libraries` `coding`
- **[Docker MCP Server](https://github.com/docker/mcp-gateway)** `Official` `Go` — Manage containers, images, and Docker environments through MCP.  
  `containers` `devops` `docker`
- **[E2B MCP Server](https://github.com/e2b-dev/mcp-server)** `Official` `TypeScript` — Execute code in secure cloud sandboxes for agentic coding workflows.  
  `sandbox` `code-execution` `agents`
- **[GitHub MCP Server](https://github.com/github/github-mcp-server)** `Official` `Go` — Official GitHub integration for repos, issues, pull requests, and code search.  
  `github` `git` `ci-cd`
- **[GitLab MCP Server](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/)** `Official` `Ruby` — GitLab Duo MCP server for merge requests, issues, and project management.  
  `gitlab` `devops` `issues`
- **[Kubernetes MCP Server](https://github.com/Flux159/mcp-server-kubernetes)** `TypeScript` — Operate Kubernetes clusters with kubectl-style MCP tools.  
  `kubernetes` `devops` `cloud`
- **[Linear MCP Server](https://linear.app/docs/mcp)** `Official` `TypeScript` — Create and manage Linear issues, projects, and team workflows.  
  `issues` `project-management` `product`
- **[Postman MCP Server](https://github.com/postmanlabs/postman-mcp-server)** `Official` `TypeScript` — Explore and run Postman collections and API workflows from AI clients.  
  `api` `testing` `http`
- **[Semgrep MCP Server](https://github.com/semgrep/semgrep/tree/develop/cli/src/semgrep/mcp)** `Official` `Python` — Run static analysis and security scans on codebases via Semgrep.  
  `security` `sast` `code-quality`
- **[Sentry MCP Server](https://docs.sentry.io/product/sentry-mcp/)** `Official` `TypeScript` — Investigate errors, releases, and performance issues in Sentry.  
  `observability` `errors` `monitoring`
- **[Sourcegraph Cody MCP](https://sourcegraph.com/docs/api/mcp)** `Official` `TypeScript` — Code intelligence and search across large codebases with Cody.  
  `code-search` `ai` `enterprise`

<a id="browsers-search-and-web-automation"></a>

## Browsers, Search, and Web Automation

Browse the web, scrape content, search, and automate browser interactions.

- **[Apify MCP Server](https://github.com/apify/apify-mcp-server)** `Official` `TypeScript` — Run Apify Actors and extract web datasets at scale.  
  `scraping` `actors` `data`
- **[Brave Search MCP Server](https://github.com/brave/brave-search-mcp-server)** `Official` `TypeScript` — Privacy-focused web and local search through the Brave Search API.  
  `search` `privacy` `web`
- **[Browser MCP](https://github.com/browsermcp/mcp)** `Official` `TypeScript` — Automate a local Chrome browser from MCP-compatible AI clients.  
  `chrome` `local` `automation`
- **[Browserbase MCP Server](https://github.com/browserbase/mcp-server-browserbase)** `Official` `TypeScript` — Cloud browser automation for navigation, scraping, and form filling.  
  `browser` `cloud` `automation`
- **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** `Official` `TypeScript` — Control and inspect Chrome through DevTools protocol for debugging and automation.  
  `chrome` `devtools` `debugging`
- **[Exa MCP Server](https://github.com/exa-labs/exa-mcp-server)** `Official` `TypeScript` — Neural and keyword web search optimized for AI research workflows.  
  `search` `research` `web`
- **[Firecrawl MCP Server](https://github.com/mendableai/firecrawl-mcp-server)** `Official` `TypeScript` — Scrape, crawl, and extract structured web data with Firecrawl.  
  `scraping` `crawl` `web`
- **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** `Official` `TypeScript` — Official Microsoft Playwright server for browser automation via accessibility snapshots.  
  `browser` `playwright` `automation`
- **[Puppeteer MCP Server](https://github.com/merajmehrabi/puppeteer-mcp-server)** `TypeScript` — Headless Chrome automation using Puppeteer for scraping and testing.  
  `puppeteer` `browser` `scraping`
- **[Tavily MCP Server](https://github.com/tavily-ai/tavily-mcp)** `Official` `Python` — AI-native search and content extraction for research agents.  
  `search` `research` `agents`
- **[Xquik MCP Server](https://github.com/Xquik-dev/x-twitter-scraper)** `TypeScript` — Search, monitor, and extract X/Twitter data from Xquik through MCP.  
  `twitter` `social-data` `search`

<a id="filesystems-and-documents"></a>

## Filesystems and Documents

Read and write files, convert documents, and connect to knowledge bases.

- **[Airtable MCP Server](https://github.com/domdomegg/airtable-mcp-server)** `TypeScript` — Read and write Airtable bases, tables, and records via MCP.  
  `airtable` `spreadsheets` `data`
- **[Google Drive MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gdrive)** `Python` — Access and search files in Google Drive from MCP clients.  
  `google-drive` `files` `cloud`
- **[MarkItDown MCP](https://github.com/microsoft/markitdown)** `Official` `Python` — Convert PDFs, Office docs, and media into markdown for LLM ingestion.  
  `documents` `conversion` `markdown`
- **[Notion MCP Server](https://github.com/makenotion/notion-mcp-server)** `Official` `TypeScript` — Read and write Notion pages, databases, and workspace content.  
  `notion` `knowledge-base` `docs`
- **[Obsidian MCP Server](https://github.com/MarkusPfundstein/mcp-obsidian)** `TypeScript` — Search and read notes from local Obsidian vaults.  
  `obsidian` `notes` `local`
- **[PDF MCP Server](https://github.com/jztan/pdf-mcp)** `Python` — Extract text and metadata from PDF documents for analysis.  
  `pdf` `documents` `extraction`
- **[Readwise MCP Server](https://github.com/readwiseio/readwise-mcp)** `Official` `TypeScript` — Search highlights and reading notes from Readwise.  
  `highlights` `reading` `knowledge`

<a id="cloud-and-infrastructure"></a>

## Cloud and Infrastructure

Manage cloud resources, deploy services, and operate infrastructure.

- **[AWS MCP Server](https://github.com/alexei-led/aws-mcp-server)** `Python` — Execute AWS CLI commands safely in a containerized environment.  
  `aws` `cloud` `cli`
- **[Azure MCP Server](https://github.com/Azure/azure-mcp)** `Official` `TypeScript` — Manage Azure resources and services through MCP tools.  
  `azure` `cloud` `infra`
- **[Cloudflare MCP Server](https://github.com/cloudflare/mcp-server-cloudflare)** `Official` `TypeScript` — Manage Workers, KV, R2, and Cloudflare platform resources.  
  `cloudflare` `edge` `workers`
- **[Fly.io MCP Server](https://github.com/superfly/flymcp)** `Official` `TypeScript` — Manage Fly.io apps, machines, and deployments via MCP.  
  `fly` `deploy` `edge`
- **[Port MCP Server](https://github.com/port-labs/port-mcp-server)** `Official` `TypeScript` — Manage software catalog, scorecards, and actions in Port.io.  
  `platform-engineering` `catalog` `devops`
- **[Pulumi MCP Server](https://www.pulumi.com/docs/ai/mcp-server/)** `Official` `TypeScript` — Infrastructure as code operations with Pulumi stacks and resources.  
  `pulumi` `iac` `cloud`
- **[Railway MCP Server](https://github.com/railwayapp/railway-mcp-server)** `Official` `TypeScript` — Deploy services and manage Railway projects through MCP.  
  `railway` `deploy` `paas`
- **[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)** `Official` `Go` — Generate and validate Terraform configurations with HashiCorp tooling.  
  `terraform` `iac` `infra`
- **[Vercel MCP Server](https://github.com/vercel/mcp-handler)** `Official` `TypeScript` — Deploy and manage Vercel projects and deployments from AI clients.  
  `vercel` `deploy` `frontend`

<a id="communication-and-productivity"></a>

## Communication and Productivity

Integrate chat, email, calendars, and team collaboration tools.

- **[Atlassian MCP Server](https://github.com/atlassian/atlassian-mcp-server)** `Official` `TypeScript` — Manage Jira issues and Confluence pages across Atlassian Cloud.  
  `jira` `confluence` `atlassian`
- **[Discord MCP Server](https://github.com/SaseQ/discord-mcp)** `Python` — Read and send messages in Discord servers and channels.  
  `discord` `chat` `community`
- **[Gmail MCP Server](https://github.com/GongRzhe/Gmail-MCP-Server)** `TypeScript` — Search, read, and compose Gmail messages from MCP clients.  
  `gmail` `email` `google`
- **[Google Calendar MCP Server](https://github.com/nspady/google-calendar-mcp)** `TypeScript` — View and manage Google Calendar events and schedules.  
  `calendar` `scheduling` `google`
- **[Microsoft Teams MCP Server](https://github.com/InditexTech/mcp-teams-server)** `TypeScript` — Interact with Microsoft Teams channels, messages, and meetings.  
  `teams` `chat` `microsoft`
- **[Slack MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack)** `Python` — Send messages and interact with Slack channels and workspaces.  
  `slack` `chat` `team`
- **[Todoist MCP Server](https://github.com/abhiz123/todoist-mcp-server)** `TypeScript` — Manage Todoist tasks, projects, and due dates from AI assistants.  
  `tasks` `productivity` `todoist`
- **[Zoom MCP Server](https://github.com/zoom/mcp-registry)** `Official` `TypeScript` — Schedule and manage Zoom meetings and recordings.  
  `zoom` `meetings` `video`

<a id="ai-agents-and-memory"></a>

## AI, Agents, and Memory

LLM bridges, agent orchestration, RAG, and persistent memory layers.

- **[AccInt](https://github.com/maxbaluev/accreted-intelligence)** `Rust` — Local-first MCP Work Model that gives coding agents scored memory retrieval, commitments, and outcome-based credit.  
  `memory` `coding-agents` `local-first`
- **[Agentage Memory](https://agentage.io/blog/mcp-endpoint-is-live)** `Official` `TypeScript` — Remote MCP memory server - one markdown memory every AI reads and writes via OAuth 2.1 Streamable HTTP at https://memory.agentage.io/mcp.  
  `memory` `remote` `oauth`
- **[CrewAI MCP Server](https://github.com/crewAIInc/crewAI)** `Official` `Python` — Multi-agent orchestration framework with MCP integration support.  
  `agents` `multi-agent` `orchestration`
- **[Graphiti MCP Server](https://github.com/getzep/graphiti)** `Official` `Python` — Temporal knowledge graphs for agent memory and context building.  
  `knowledge-graph` `memory` `temporal`
- **[Hugging Face MCP Server](https://github.com/huggingface/hf-mcp-server)** `Official` `TypeScript` — Access Hugging Face models, datasets, and Spaces from MCP clients.  
  `huggingface` `models` `ml`
- **[LangGraph MCP Server](https://github.com/langchain-ai/langgraph-mcp)** `Official` `Python` — Orchestrate LangGraph agents and workflows through MCP.  
  `agents` `orchestration` `langgraph`
- **[LlamaIndex MCP Server](https://github.com/run-llama/llama_index)** `Official` `Python` — Data framework for LLM apps with MCP tool and agent connectors.  
  `rag` `indexing` `agents`
- **[mem0 MCP Server](https://github.com/mem0ai/mem0-mcp)** `Official` `Python` — Persistent memory layer for personalized agent interactions.  
  `memory` `personalization` `agents`
- **[Ollama MCP Bridge](https://github.com/jaspertvdm/mcp-server-ollama-bridge)** `Python` — Run local Llama, Mistral, and Qwen models via Ollama through MCP.  
  `ollama` `local-llm` `inference`
- **[OpenAI MCP Bridge](https://github.com/jaspertvdm/mcp-server-openai-bridge)** `Python` — Bridge OpenAI GPT models into MCP-compatible agent workflows.  
  `openai` `gpt` `inference`
- **[Zep MCP Server](https://github.com/jaysack/zep-mcp)** `Python` — Community MCP wrapper for long-term memory and context retrieval with Zep.  
  `memory` `context` `rag`

<a id="data-analytics-and-bi"></a>

## Data, Analytics, and BI

Analytics platforms, monitoring, and business intelligence tooling.

- **[Amplitude MCP Server](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)** `Official` `TypeScript` — Analyze product analytics events and user behavior in Amplitude.  
  `product-analytics` `events` `bi`
- **[Datadog MCP Server](https://github.com/datadog-labs/mcp-server)** `Official` `Python` — Query metrics, logs, and monitors from Datadog via the official Datadog Labs MCP server.  
  `datadog` `metrics` `logs`
- **[dbt MCP Server](https://github.com/dbt-labs/dbt-mcp)** `Official` `Python` — Run dbt models, tests, and documentation workflows via MCP.  
  `dbt` `analytics` `transform`
- **[Google GenAI Toolbox](https://github.com/googleapis/genai-toolbox)** `Official` `Go` — Connect agents to BigQuery, Cloud SQL, Spanner, and other Google data sources.  
  `bigquery` `gcp` `data`
- **[Grafana MCP Server](https://github.com/grafana/mcp-grafana)** `Official` `Go` — Explore Grafana dashboards, alerts, and observability data.  
  `monitoring` `dashboards` `observability`
- **[Metabase MCP Server](https://www.metabase.com/docs/latest/ai/mcp)** `Official` `TypeScript` — Query dashboards and explore data in Metabase BI.  
  `bi` `dashboards` `sql`
- **[Mixpanel MCP Server](https://docs.mixpanel.com/docs/mcp)** `Official` `TypeScript` — Query Mixpanel funnels, retention, and event analytics.  
  `analytics` `funnels` `product`
- **[Netdata MCP Server](https://github.com/netdata/netdata)** `Official` `C` — Real-time infrastructure monitoring and health metrics via MCP.  
  `monitoring` `infra` `metrics`

<a id="security-and-identity"></a>

## Security and Identity

Secrets, vulnerability scanning, authentication, and security operations.

- **[1Password MCP Server](https://github.com/CakeRepository/1Password-MCP)** `Go` — Community-maintained integration for accessing 1Password vault items in agent workflows.  
  `secrets` `passwords` `vault`
- **[Auth0 MCP Server](https://github.com/auth0/auth0-mcp-server)** `Official` `TypeScript` — Manage Auth0 tenants, applications, and user identity settings.  
  `auth` `identity` `oauth`
- **[CrowdStrike MCP Server](https://github.com/CrowdStrike/falcon-mcp)** `Official` `Python` — Query CrowdStrike Falcon detections and endpoint security data.  
  `endpoint` `security` `soc`
- **[Snyk MCP Server](https://github.com/snyk/studio-mcp)** `Official` `TypeScript` — Scan dependencies and code for vulnerabilities with Snyk.  
  `security` `vulnerabilities` `dependencies`
- **[Vault MCP Server](https://github.com/hashicorp/vault-mcp-server)** `Official` `Go` — Read secrets and manage HashiCorp Vault policies via MCP.  
  `secrets` `vault` `security`
- **[Wiz MCP Server](https://www.wiz.io/blog/introducing-mcp-server-for-wiz)** `Official` `TypeScript` — Cloud security posture management and risk insights from Wiz.  
  `cloud-security` `cspm` `risk`

<a id="finance-commerce-and-business-apps"></a>

## Finance, Commerce, and Business Apps

Payments, banking, CRM, e-commerce, and business system integrations.

- **[HubSpot MCP Server](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/integrate-with-the-remote-hubspot-mcp-server)** `Official` `TypeScript` — Access HubSpot contacts, deals, and marketing automation data.  
  `crm` `marketing` `sales`
- **[NotFair](https://github.com/nowork-studio/NotFair)** `TypeScript` — Open-source Claude Code agent skills for SEO, GEO, Google Ads, and Meta Ads, connecting to live data via Google Ads MCP, Meta Ads MCP, Google Search Console MCP, and Google Analytics (GA4) MCP.  
  `seo` `google-ads` `meta-ads` `marketing`
- **[PayPal MCP Server](https://github.com/paypal/agent-toolkit)** `Official` `TypeScript` — Process PayPal payments and manage merchant operations.  
  `payments` `commerce` `fintech`
- **[Plaid MCP Server](https://plaid.com/docs/resources/mcp/)** `Official` `TypeScript` — Connect bank accounts and retrieve financial transaction data.  
  `banking` `finance` `open-banking`
- **[QuickBooks MCP Server](https://github.com/intuit/quickbooks-online-mcp-server)** `Official` `TypeScript` — Manage QuickBooks accounting records and financial reports.  
  `accounting` `finance` `bookkeeping`
- **[Salesforce MCP Server](https://github.com/salesforcecli/mcp)** `Official` `TypeScript` — Query Salesforce CRM records and manage business workflows.  
  `crm` `sales` `enterprise`
- **[Shopify MCP Server](https://github.com/GeLi2001/shopify-mcp)** `TypeScript` — Community-maintained integration for Shopify products, orders, and store operations.  
  `ecommerce` `shopify` `retail`
- **[Square MCP Server](https://github.com/square/square-mcp-server)** `Official` `TypeScript` — Process Square payments and manage point-of-sale operations.  
  `payments` `pos` `commerce`
- **[Stripe MCP Server](https://github.com/stripe/agent-toolkit)** `Official` `TypeScript` — Manage Stripe payments, customers, and subscriptions via MCP tools.  
  `payments` `billing` `fintech`

<a id="utilities-and-examples"></a>

## Utilities and Examples

Helpful utilities, templates, and starter servers for learning MCP.

- **[A2ASearch MCP](https://github.com/tadas-github/a2asearch-mcp)** `TypeScript` — Search thousands of MCP servers, agents, and CLI tools by capability.  
  `discovery` `search` `registry`
- **[Anyquery](https://github.com/julien040/anyquery)** `Go` — Query 40+ apps and databases with SQL from a single local binary.  
  `sql` `integration` `local`
- **[FastMCP](https://github.com/jlowin/fastmcp)** `Python` — Python framework for building MCP servers quickly with decorators.  
  `framework` `python` `starter`
- **[Google Maps MCP Server](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/google-maps)** `Python` — Geocoding, directions, and place search via Google Maps.  
  `maps` `location` `geo`
- **[MCP Server Starter](https://github.com/modelcontextprotocol/create-typescript-server)** `Official` `TypeScript` — Official TypeScript scaffold for creating new MCP servers.  
  `template` `typescript` `starter`
- **[MCP Server Templates](https://github.com/Data-Everything/mcp-server-templates)** `TypeScript` — Unified MCP platform connecting many apps behind one interface.  
  `templates` `multi-tool` `starter`
- **[MCPJungle](https://github.com/duaraghav8/MCPJungle)** `Go` — Self-hosted MCP server registry for enterprise AI agent deployments.  
  `registry` `enterprise` `self-hosted`
- **[MetaMCP](https://github.com/metatool-ai/metatool-app)** `Official` `TypeScript` — Middleware MCP server that aggregates and manages multiple connections.  
  `aggregator` `gateway` `middleware`
- **[Weather MCP Server](https://github.com/isdaniel/mcp_weather_server)** `Python` — Fetch current weather and forecasts from public weather APIs.  
  `weather` `api` `utility`

## Quality Criteria

We prioritize servers that are:

- **Purposeful** — clear tools/resources for a real workflow
- **Discoverable** — public repo, docs, or registry listing
- **Maintainable** — recent activity or official backing
- **Safe to evaluate** — no obvious spam or impersonation

## Contribute

Found a great MCP server? Read [CONTRIBUTING.md](CONTRIBUTING.md) and open a PR with an entry in `data/servers.json`.

Then regenerate the README:

```bash
node scripts/generate-readme.mjs
node scripts/validate-data.mjs
```

## License

This list is released under the [MIT License](LICENSE).
