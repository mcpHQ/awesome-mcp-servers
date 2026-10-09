// Shared by scripts/build-site.mjs (server pages) and app.js (stack builder).

export const CLIENTS = [
  { id: "cursor", label: "Cursor", file: "~/.cursor/mcp.json" },
  { id: "vscode", label: "VS Code", file: ".vscode/mcp.json" },
  { id: "claude-code", label: "Claude Code", file: "Terminal" },
  { id: "claude-desktop", label: "Claude Desktop", file: "claude_desktop_config.json" },
  { id: "codex", label: "Codex", file: "~/.codex/config.toml" },
];

/** Short config key, e.g. "mem0-mcp-server" -> "mem0". */
export function serverKey(slug) {
  return slug.replace(/^mcp-(?=.)/, "").replace(/-(mcp-server|mcp|server)$/, "") || slug;
}

export function transportOf(endpoints) {
  if (endpoints?.streamableHttp) {
    return { type: "http", url: endpoints.streamableHttp };
  }
  if (endpoints?.sse) {
    return { type: "sse", url: endpoints.sse };
  }
  return null;
}

function mcpRemote(url) {
  return { command: "npx", args: ["-y", "mcp-remote", url] };
}

function tomlString(value) {
  return JSON.stringify(value);
}

/**
 * @param {string} clientId
 * @param {{ key: string, transport: { type: "http" | "sse", url: string } }[]} entries
 */
export function configFor(clientId, entries) {
  switch (clientId) {
    case "cursor":
      return json({
        mcpServers: Object.fromEntries(
          entries.map(({ key, transport }) => [key, { url: transport.url }])
        ),
      });
    case "vscode":
      return json({
        servers: Object.fromEntries(
          entries.map(({ key, transport }) => [
            key,
            { type: transport.type, url: transport.url },
          ])
        ),
      });
    case "claude-code":
      return entries
        .map(
          ({ key, transport }) =>
            `claude mcp add --transport ${transport.type} ${key} ${transport.url}`
        )
        .join("\n");
    case "claude-desktop":
      return json({
        mcpServers: Object.fromEntries(
          entries.map(({ key, transport }) => [key, mcpRemote(transport.url)])
        ),
      });
    case "codex":
      // Codex speaks streamable HTTP natively; SSE servers go through mcp-remote.
      return entries
        .map(({ key, transport }) => {
          if (transport.type === "http") {
            return `[mcp_servers.${key}]\nurl = ${tomlString(transport.url)}`;
          }
          const { command, args } = mcpRemote(transport.url);
          return `[mcp_servers.${key}]\ncommand = ${tomlString(command)}\nargs = [${args
            .map(tomlString)
            .join(", ")}]`;
        })
        .join("\n\n");
    default:
      throw new Error(`Unknown client: ${clientId}`);
  }
}

function json(value) {
  return JSON.stringify(value, null, 2);
}

function base64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

export function cursorInstallLink(key, transport) {
  const config = base64(JSON.stringify({ url: transport.url }));
  return `cursor://anysphere.cursor-deeplink/mcp/install?name=${encodeURIComponent(
    key
  )}&config=${encodeURIComponent(config)}`;
}

export function vscodeInstallLink(key, transport) {
  return `vscode:mcp/install?${encodeURIComponent(
    JSON.stringify({ name: key, type: transport.type, url: transport.url })
  )}`;
}
