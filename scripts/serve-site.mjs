#!/usr/bin/env node

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "site/dist");
const port = Number(process.env.PORT ?? 4321);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

if (!existsSync(distDir)) {
  console.error("site/dist does not exist. Run `npm run build-site` first.");
  process.exit(1);
}

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  let file = normalize(join(distDir, pathname));
  if (!file.startsWith(distDir)) {
    response.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) {
    file = join(file, "index.html");
  }
  let status = 200;
  if (!existsSync(file)) {
    file = join(distDir, "404.html");
    status = 404;
  }
  response.writeHead(status, { "Content-Type": TYPES[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(response);
}).listen(port, () => {
  console.log(`Serving site/dist at http://localhost:${port}`);
});
