#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const landscapeDir = join(root, "landscape");
const settingsPath = join(landscapeDir, "settings.yml");
const buildSettingsPath = join(landscapeDir, "settings.build.yml");
const dockerImage =
  process.env.LANDSCAPE2_IMAGE ?? "ghcr.io/cncf/landscape2:latest";

const installHelp = `Could not find landscape2.

landscape2 is not published to crates.io. Install it using one of:

  brew install cncf/landscape2/landscape2

  curl --proto '=https' --tlsv1.2 -LsSf \\
    https://github.com/cncf/landscape2/releases/download/v1.1.0/landscape2-installer.sh | sh

  cargo install --git https://github.com/cncf/landscape2
  # requires wasm-pack and yarn for the from-source build

Or build with Docker (no local install):

  npm run build-landscape:docker
`;

function commandExists(command) {
  const result = spawnSync("which", [command], { encoding: "utf8" });
  return result.status === 0;
}

function findLandscape2Binary() {
  const candidates = [
    process.env.LANDSCAPE2_BIN,
    "landscape2",
    join(process.env.HOME ?? "", ".cargo/bin/landscape2"),
    "/opt/homebrew/bin/landscape2",
    "/usr/local/bin/landscape2",
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (candidate.includes("/")) {
      if (existsSync(candidate)) {
        return candidate;
      }
      continue;
    }
    if (commandExists(candidate)) {
      return candidate;
    }
  }

  return undefined;
}

function prepareSettingsFile() {
  const basePath =
    process.env.LANDSCAPE_BASE_PATH ??
    (process.argv.includes("--pages") ? "/awesome-mcp-servers" : "");

  let settings = readFileSync(settingsPath, "utf8");

  settings = settings.replace(
    /^base_path:.*\n/m,
    ""
  );

  if (basePath) {
    settings = settings.replace(
      /^url:.*\n/m,
      (line) => `${line}base_path: ${basePath}\n`
    );
  }

  writeFileSync(buildSettingsPath, settings);
  return buildSettingsPath;
}

function runGenerate() {
  const generate = spawnSync(
    "node",
    [join(root, "scripts/generate-landscape.mjs")],
    { stdio: "inherit" }
  );
  if (generate.status !== 0) {
    process.exit(generate.status ?? 1);
  }
}

function runNativeBuild(landscape2, settingsFile) {
  const command = landscape2.includes("/") ? landscape2 : "landscape2";
  return spawnSync(
    command,
    [
      "build",
      "--data-file",
      join(landscapeDir, "data.yml"),
      "--settings-file",
      settingsFile,
      "--guide-file",
      join(landscapeDir, "guide.yml"),
      "--logos-path",
      join(landscapeDir, "logos"),
      "--output-dir",
      join(landscapeDir, "build"),
    ],
    { stdio: "inherit" }
  );
}

function runDockerBuild(settingsFile) {
  if (!commandExists("docker")) {
    console.error(`${installHelp}\nDocker is not available for fallback build.`);
    process.exit(1);
  }

  console.error(`Using Docker image ${dockerImage}\n`);

  return spawnSync(
    "docker",
    [
      "run",
      "--rm",
      "-v",
      `${landscapeDir}:/landscape`,
      dockerImage,
      "build",
      "--data-file",
      "/landscape/data.yml",
      "--settings-file",
      "/landscape/settings.build.yml",
      "--guide-file",
      "/landscape/guide.yml",
      "--logos-path",
      "/landscape/logos",
      "--output-dir",
      "/landscape/build",
    ],
    { stdio: "inherit" }
  );
}

function runFetchLogos() {
  const fetch = spawnSync("node", [join(root, "scripts/fetch-logos.mjs")], {
    stdio: "inherit",
  });
  if (fetch.status !== 0) {
    process.exit(fetch.status ?? 1);
  }
}

runFetchLogos();
runGenerate();

const settingsFile = prepareSettingsFile();
const useDocker =
  process.argv.includes("--docker") ||
  process.env.LANDSCAPE2_DOCKER === "1";

let result;
if (useDocker) {
  result = runDockerBuild(settingsFile);
} else {
  const landscape2 = findLandscape2Binary();
  if (!landscape2) {
    if (commandExists("docker")) {
      console.error(
        "landscape2 not found locally; falling back to Docker build.\n"
      );
      result = runDockerBuild(settingsFile);
    } else {
      console.error(installHelp);
      process.exit(1);
    }
  } else {
    result = runNativeBuild(landscape2, settingsFile);
  }
}

function publishCatalogData() {
  const apiDir = join(landscapeDir, "build", "api");
  mkdirSync(apiDir, { recursive: true });
  for (const file of ["servers.json", "categories.json"]) {
    copyFileSync(join(root, "data", file), join(apiDir, file));
  }
}

if ((result.status ?? 1) === 0) {
  publishCatalogData();
  const patch = spawnSync(
    "node",
    [join(root, "scripts/patch-landscape-search.mjs")],
    { stdio: "inherit" }
  );
  process.exit(patch.status ?? 0);
}

process.exit(result.status ?? 1);
