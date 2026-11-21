import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { before, test } from "node:test";
import { serverSlug } from "./logo-utils.mjs";
import { transportOf } from "../site/static/connect.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const servers = JSON.parse(readFileSync(new URL("../data/servers.json", import.meta.url), "utf8"));
before(() => execFileSync(process.execPath, ["scripts/build-site.mjs"], {
  cwd: root,
  env: { ...process.env, CLOUDFLARE_WEB_ANALYTICS_TOKEN: "" },
  stdio: "pipe",
}));

function connectSection(server) {
  const slug = serverSlug(server.name);
  const html = readFileSync(new URL(`../site/dist/servers/${slug}/index.html`, import.meta.url), "utf8");
  const start = html.indexOf("<h2>Connect</h2>");
  assert.ok(start >= 0, `Connect section missing for ${server.name}`);
  return html.slice(start, html.indexOf("</section>", start));
}

test("AppStruct's API-key setup is explicit before install links and config examples", () => {
  const server = servers.find(server => server.name === "AppStruct Social MCP");
  assert.ok(server);
  const section = connectSection(server);
  assert.ok(section.includes("API key required."));
  assert.ok(section.includes("endpoint only"));
  assert.ok(section.includes("project setup docs"));
  assert.ok(section.indexOf("API key required.") < section.indexOf("Add to Cursor"));
  assert.ok(section.indexOf("API key required.") < section.indexOf('role="tabpanel"'));
  assert.ok(!section.includes("in one click"));
  assert.ok(section.includes("https://api.appstruct.ai/v1/social/mcp"));
});

test("OAuth and credential-free remote servers do not get an API-key-required notice", () => {
  for (const method of ["oauth", "none"]) {
    const server = servers.find(server => server.auth?.includes(method) && transportOf(server.endpoints));
    assert.ok(server, `Expected a real ${method} fixture in the catalog`);
    const section = connectSection(server);
    assert.ok(!section.includes("API key required."), server.name);
  }
});

test("remote servers without auth metadata retain uncertainty rather than a made-up requirement", () => {
  const server = servers.find(server => !server.auth?.length && transportOf(server.endpoints));
  assert.ok(server);
  const section = connectSection(server);
  assert.ok(section.includes("Some hosted servers ask you to sign in or pass an API key"));
  assert.ok(!section.includes("API key required."));
});
