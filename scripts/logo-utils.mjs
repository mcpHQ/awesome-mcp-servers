export const PROVIDER_SHARED_LOGOS = {
  "Model Context Protocol": "mcp.svg",
};

export const PROVIDER_SLUGS = {
  "1Password": "1password",
  Amplitude: "amplitude",
  Apify: "apify",
  Atlassian: "atlassian",
  Auth0: "auth0",
  Azure: "microsoftazure",
  Brave: "brave",
  "Browser MCP": "googlechrome",
  Browserbase: "browserbase",
  Bytebase: "bytebase",
  Chroma: "chroma",
  Cloudflare: "cloudflare",
  CrowdStrike: "crowdstrike",
  CrewAI: "crewai",
  Datadog: "datadog",
  Docker: "docker",
  DuckDB: "duckdb",
  E2B: "e2b",
  Elastic: "elastic",
  Exa: "exa",
  Firecrawl: "firecrawl",
  "Fly.io": "flyio",
  GitHub: "github",
  GitLab: "gitlab",
  Google: "google",
  Grafana: "grafana",
  HashiCorp: "hashicorp",
  Harness: "harness",
  HubSpot: "hubspot",
  "Hugging Face": "huggingface",
  Intuit: "intuit",
  LangChain: "langchain",
  Linear: "linear",
  LlamaIndex: "llamaindex",
  Metabase: "metabase",
  MetaTool: "metatool",
  Microsoft: "microsoft",
  Mixpanel: "mixpanel",
  MongoDB: "mongodb",
  Neon: "neon",
  Netdata: "netdata",
  Notion: "notion",
  PayPal: "paypal",
  Pinecone: "pinecone",
  PlanetScale: "planetscale",
  Plaid: "plaid",
  Port: "port",
  Postman: "postman",
  Pulumi: "pulumi",
  Qdrant: "qdrant",
  Railway: "railway",
  Readwise: "readwise",
  Redis: "redis",
  Salesforce: "salesforce",
  Semgrep: "semgrep",
  Sentry: "sentry",
  Shopify: "shopify",
  Slack: "slack",
  Snyk: "snyk",
  Snowflake: "snowflake",
  Sourcegraph: "sourcegraph",
  Square: "square",
  Stripe: "stripe",
  Supabase: "supabase",
  Tavily: "tavily",
  Terraform: "terraform",
  Upstash: "upstash",
  Vercel: "vercel",
  Wiz: "wiz",
  Zep: "zep",
  Zoom: "zoom",
  "dbt Labs": "dbt",
  mem0: "mem0",
};

export const NAME_SLUGS = {
  "SQLite MCP Server": "sqlite",
  "PDF MCP Server": "adobeacrobatreader",
  "Obsidian MCP Server": "obsidian",
  "Kubernetes MCP Server": "kubernetes",
  "MCP Server Starter": "typescript",
  "Weather MCP Server": "openweathermap",
  "Google Maps MCP Server": "googlemaps",
  "Google Drive MCP Server": "googledrive",
  "Chrome DevTools MCP": "googlechrome",
  "Playwright MCP": "playwright",
  "MarkItDown MCP": "microsoft",
  "Context7 MCP": "upstash",
  "Graphiti MCP Server": "zep",
  "Zep MCP Server": "zep",
  "Puppeteer MCP Server": "puppeteer",
  "A2ASearch MCP": "algolia",
  "Hugging Face MCP Server": "huggingface",
  "Harness MCP Server": "harness",
};

export const SERVER_LOGO_URLS = {
  "Harness MCP Server":
    "https://raw.githubusercontent.com/harness/mcp-server/main/icon.png",
};

export const PROVIDER_DOMAINS = {
  Apify: "apify.com",
  Browserbase: "browserbase.com",
  Bytebase: "bytebase.com",
  Chroma: "trychroma.com",
  E2B: "e2b.dev",
  Exa: "exa.ai",
  Firecrawl: "firecrawl.dev",
  Harness: "harness.io",
  mem0: "mem0.ai",
  MetaTool: "metatool.ai",
  Pinecone: "pinecone.io",
  Port: "port.io",
  Readwise: "readwise.io",
  Semgrep: "semgrep.dev",
  Tavily: "tavily.com",
  "Browser MCP": "browsermcp.io",
  Zep: "getzep.com",
};

export const ORG_ALIASES = {
  chromecdevtools: "googlechrome",
  chromedevtools: "googlechrome",
  mendableai: "firecrawl",
  modelcontextprotocol: "modelcontextprotocol",
  "mongodb-js": "mongodb",
  motherduckdb: "duckdb",
  neondatabase: "neon",
  "pinecone-io": "pinecone",
  postmanlabs: "postman",
  "snowflake-labs": "snowflake",
  "supabase-community": "supabase",
  "tavily-ai": "tavily",
  flux159: "kubernetes",
  markuspfundstein: "obsidian",
  jztan: "adobeacrobatreader",
  makenotion: "notion",
  "e2b-dev": "e2b",
  "exa-labs": "exa",
  browserbase: "browserbase",
  "chroma-core": "chroma",
  qdrant: "qdrant",
  upstash: "upstash",
  mem0ai: "mem0",
  readwiseio: "readwise",
  bytebase: "bytebase",
  GeLi2001: "shopify",
};

export const DOMAIN_SLUGS = {
  "amplitude.com": "amplitude",
  "atlassian.com": "atlassian",
  "auth0.com": "auth0",
  "datadoghq.com": "datadog",
  "developers.hubspot.com": "hubspot",
  "docs.mixpanel.com": "mixpanel",
  "docs.sentry.io": "sentry",
  "linear.app": "linear",
  "metabase.com": "metabase",
  "mixpanel.com": "mixpanel",
  "modelcontextprotocol.io": "modelcontextprotocol",
  "planetscale.com": "planetscale",
  "plaid.com": "plaid",
  "pulumi.com": "pulumi",
  "sourcegraph.com": "sourcegraph",
  "wiz.io": "wiz",
  "zoom.us": "zoom",
};

const GENERIC_HOSTS = new Set([
  "github.com",
  "gitlab.com",
  "bitbucket.org",
  "raw.githubusercontent.com",
]);

export function providerSharedLogo(provider) {
  return PROVIDER_SHARED_LOGOS[provider];
}

export function serverSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function extractGitHubOrg(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "github.com") {
      return undefined;
    }
    return parsed.pathname.split("/").filter(Boolean)[0];
  } catch {
    return undefined;
  }
}

function domainFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

export function providerClearbitDomain(provider, url) {
  if (PROVIDER_DOMAINS[provider]) {
    return PROVIDER_DOMAINS[provider];
  }

  const hostname = domainFromUrl(url);
  if (!hostname || GENERIC_HOSTS.has(hostname)) {
    return undefined;
  }

  return hostname;
}

export function logoSlugCandidates(server) {
  const candidates = [];

  if (NAME_SLUGS[server.name]) {
    candidates.push(NAME_SLUGS[server.name]);
  }

  if (PROVIDER_SLUGS[server.provider]) {
    candidates.push(PROVIDER_SLUGS[server.provider]);
  }

  const org = extractGitHubOrg(server.url);
  if (org) {
    const normalized = org.toLowerCase();
    candidates.push(normalized);
    if (ORG_ALIASES[normalized]) {
      candidates.push(ORG_ALIASES[normalized]);
    }
    if (ORG_ALIASES[org]) {
      candidates.push(ORG_ALIASES[org]);
    }
  }

  const hostname = domainFromUrl(server.url);
  if (hostname && DOMAIN_SLUGS[hostname]) {
    candidates.push(DOMAIN_SLUGS[hostname]);
  }

  return [...new Set(candidates.filter(Boolean))];
}

export function hashColor(text) {
  let hash = 0;
  for (const char of text) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  const hue = hash % 360;
  return `hsl(${hue} 55% 45%)`;
}

export function monogramSvg(label) {
  const words = label
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const initials =
    words.length >= 2
      ? `${words[0][0]}${words[1][0]}`
      : (words[0] ?? "?").slice(0, 2);
  const text = initials.toUpperCase();
  const fill = hashColor(label);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${label}">
  <rect width="64" height="64" rx="12" fill="${fill}"/>
  <text x="32" y="40" text-anchor="middle" font-family="system-ui,sans-serif" font-size="22" font-weight="700" fill="#ffffff">${text}</text>
</svg>`;
}

export const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";
