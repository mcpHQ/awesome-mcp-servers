#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const categories = loadJson("data/categories.json");
const servers = loadJson("data/servers.json");
const categorySchema = loadJson("data/categories.schema.json");
const serverSchema = loadJson("data/servers.schema.json");

function loadJson(relativePath) {
  try {
    return JSON.parse(readFileSync(join(root, relativePath), "utf8"));
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.error(`Unable to read ${relativePath}: ${message}`);
    process.exit(1);
  }
}

const errors = [];
const categoryIds = new Set();
const names = new Set();
const urls = new Set();
const categoryFields = new Set(
  Object.keys(categorySchema.items.properties)
);
const serverFields = new Set(Object.keys(serverSchema.items.properties));
const requiredFields = serverSchema.items.required;
const allowedLanguages = new Set(
  serverSchema.items.properties.language.enum
);
const tagPattern = new RegExp(
  serverSchema.items.properties.tags.items.pattern
);
const minimumServers = serverSchema.minItems;

if (!Array.isArray(categories)) {
  errors.push("categories.json: expected a top-level array");
} else {
  for (const [index, category] of categories.entries()) {
    const label = `categories[${index}]`;
    if (!category || typeof category !== "object" || Array.isArray(category)) {
      errors.push(`${label}: expected an object`);
      continue;
    }

    for (const field of categorySchema.items.required) {
      if (!isNonEmptyString(category[field])) {
        errors.push(`${label}: "${field}" must be a non-empty string`);
      }
    }

    for (const field of Object.keys(category)) {
      if (!categoryFields.has(field)) {
        errors.push(`${label}: unknown field "${field}"`);
      }
    }

    if (
      typeof category.id === "string" &&
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(category.id)
    ) {
      errors.push(`${label}: id must use lowercase kebab-case`);
    }

    if (categoryIds.has(category.id)) {
      errors.push(`${label}: duplicate id "${category.id}"`);
    }
    categoryIds.add(category.id);

    validateDescription(category.description, `${label}.description`);
  }
}

if (!Array.isArray(servers)) {
  errors.push("servers.json: expected a top-level array");
} else {
  for (const [index, server] of servers.entries()) {
    const label = `servers[${index}] (${server?.name ?? "unnamed"})`;
    if (!server || typeof server !== "object" || Array.isArray(server)) {
      errors.push(`${label}: expected an object`);
      continue;
    }

    for (const field of requiredFields) {
      if (server[field] === undefined || server[field] === null) {
        errors.push(`${label}: missing required field "${field}"`);
      }
    }

    for (const field of Object.keys(server)) {
      if (!serverFields.has(field)) {
        errors.push(`${label}: unknown field "${field}"`);
      }
    }

    for (const field of ["name", "description", "category", "provider"]) {
      if (server[field] !== undefined && !isNonEmptyString(server[field])) {
        errors.push(`${label}: "${field}" must be a non-empty string`);
      }
    }

    if (!categoryIds.has(server.category)) {
      errors.push(`${label}: invalid category "${server.category}"`);
    }

    if (!allowedLanguages.has(server.language)) {
      errors.push(
        `${label}: unsupported language "${server.language}"`
      );
    }

    if (typeof server.official !== "boolean") {
      errors.push(`${label}: "official" must be a boolean`);
    }

    validateDescription(server.description, `${label}.description`);
    validateTags(server.tags, label);
    validateHttpUrl(server.url, `${label}.url`);
    validateRepository(server.repository, label);
    validateEnum(server.license, "license", label);
    validateEnum(server.pricing, "pricing", label);
    validateStringArray(server.transport, "transport", label);
    validateInstall(server.install, label);
    validateStringArray(server.auth, "auth", label);
    validateVerified(server.verified, label);

    if (
      server.endpoints?.streamableHttp &&
      !server.transport?.includes("streamable-http")
    ) {
      errors.push(
        `${label}: endpoints.streamableHttp requires transport to include "streamable-http"`
      );
    }
    if (server.endpoints?.sse && !server.transport?.includes("sse")) {
      errors.push(
        `${label}: endpoints.sse requires transport to include "sse"`
      );
    }

    if (
      server.order !== undefined &&
      (!Number.isInteger(server.order) || server.order < 0)
    ) {
      errors.push(`${label}: "order" must be a non-negative integer`);
    }

    if (server.endpoints !== undefined) {
      validateEndpoints(server.endpoints, label);
    }

    const normalizedName = String(server.name).trim().toLowerCase();
    if (names.has(normalizedName)) {
      errors.push(`${label}: duplicate name "${server.name}"`);
    }
    names.add(normalizedName);

    const normalizedUrl = normalizeUrl(server.url);
    if (normalizedUrl && urls.has(normalizedUrl)) {
      errors.push(`${label}: duplicate url "${server.url}"`);
    }
    if (normalizedUrl) {
      urls.add(normalizedUrl);
    }
  }

  if (servers.length < minimumServers) {
    errors.push(
      `expected at least ${minimumServers} servers, found ${servers.length}`
    );
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateDescription(value, label) {
  if (typeof value !== "string") {
    return;
  }
  const { minLength, maxLength } =
    serverSchema.items.properties.description;
  if (value.length < minLength || value.length > maxLength) {
    errors.push(
      `${label}: must be between ${minLength} and ${maxLength} characters`
    );
  }
}

function validateTags(tags, label) {
  const { minItems, maxItems } = serverSchema.items.properties.tags;
  if (!Array.isArray(tags)) {
    errors.push(`${label}: "tags" must be an array`);
    return;
  }
  if (tags.length < minItems || tags.length > maxItems) {
    errors.push(
      `${label}: "tags" must contain ${minItems}–${maxItems} items`
    );
  }

  const seen = new Set();
  for (const tag of tags) {
    if (typeof tag !== "string" || !tagPattern.test(tag)) {
      errors.push(
        `${label}: tag "${tag}" must use lowercase kebab-case`
      );
    }
    if (seen.has(tag)) {
      errors.push(`${label}: duplicate tag "${tag}"`);
    }
    seen.add(tag);
  }
}

function validateHttpUrl(value, label) {
  try {
    const parsed = new URL(value);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      errors.push(`${label}: must use http or https`);
    }
  } catch {
    errors.push(`${label}: invalid URL "${value}"`);
  }
}

function normalizeUrl(value) {
  try {
    const parsed = new URL(value);
    parsed.hash = "";
    parsed.hostname = parsed.hostname.toLowerCase();
    parsed.pathname = parsed.pathname.replace(/\/$/, "");
    return parsed.toString();
  } catch {
    return null;
  }
}

function validateEnum(value, field, label) {
  if (value === undefined) {
    return;
  }
  const allowed = new Set(serverSchema.items.properties[field].enum);
  if (!allowed.has(value)) {
    errors.push(`${label}: unsupported ${field} "${value}"`);
  }
}

function validateStringArray(value, field, label) {
  if (value === undefined) {
    return;
  }
  const schema = serverSchema.items.properties[field];
  const allowed = new Set(schema.items.enum);
  if (!Array.isArray(value)) {
    errors.push(`${label}: "${field}" must be an array`);
    return;
  }
  if (value.length < schema.minItems || value.length > schema.maxItems) {
    errors.push(
      `${label}: "${field}" must contain ${schema.minItems}–${schema.maxItems} items`
    );
  }
  const seen = new Set();
  for (const item of value) {
    if (!allowed.has(item)) {
      errors.push(`${label}: unsupported ${field} "${item}"`);
    }
    if (seen.has(item)) {
      errors.push(`${label}: duplicate ${field} "${item}"`);
    }
    seen.add(item);
  }
}

function validateRepository(value, label) {
  if (value === undefined) {
    return;
  }
  validateHttpUrl(value, `${label}.repository`);
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    return;
  }
  if (parsed.protocol !== "https:") {
    errors.push(`${label}: "repository" must use https`);
  }
  const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
  if (host === "github.com") {
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parts.length !== 2 || parts.some((part) => part === "." || part === "..")) {
      errors.push(
        `${label}: GitHub repository must be https://github.com/owner/name`
      );
    }
  }
}

function validateInstall(value, label) {
  if (value === undefined) {
    return;
  }
  const schema = serverSchema.items.properties.install;
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`${label}: "install" must be an object`);
    return;
  }
  for (const field of Object.keys(value)) {
    if (!Object.hasOwn(schema.properties, field)) {
      errors.push(`${label}: unknown install field "${field}"`);
    }
  }
  for (const field of schema.required) {
    if (value[field] === undefined) {
      errors.push(`${label}: install missing "${field}"`);
    }
  }
  const commands = new Set(schema.properties.command.enum);
  if (value.command !== undefined && !commands.has(value.command)) {
    errors.push(`${label}: unsupported install command "${value.command}"`);
  }
  const packagePattern = new RegExp(schema.properties.package.pattern);
  if (
    value.package !== undefined &&
    (typeof value.package !== "string" ||
      value.package.length < schema.properties.package.minLength ||
      value.package.length > schema.properties.package.maxLength ||
      !packagePattern.test(value.package))
  ) {
    errors.push(
      `${label}: install package must be a single token, 1–200 characters`
    );
  }
}

function validateVerified(value, label) {
  if (value === undefined) {
    return;
  }
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    errors.push(`${label}: "verified" must be a YYYY-MM-DD date`);
    return;
  }
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const valid =
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day;
  if (!valid) {
    errors.push(`${label}: "verified" is not a real date`);
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  if (value > today) {
    errors.push(`${label}: "verified" cannot be in the future`);
  }
}

function validateEndpoints(endpoints, label) {
  const endpointFields = new Set(
    Object.keys(serverSchema.items.properties.endpoints.properties)
  );
  if (
    !endpoints ||
    typeof endpoints !== "object" ||
    Array.isArray(endpoints)
  ) {
    errors.push(`${label}: "endpoints" must be an object`);
    return;
  }
  if (Object.keys(endpoints).length === 0) {
    errors.push(`${label}: "endpoints" must not be empty`);
  }
  for (const [type, url] of Object.entries(endpoints)) {
    if (!endpointFields.has(type)) {
      errors.push(`${label}: unknown endpoint type "${type}"`);
      continue;
    }
    validateHttpUrl(url, `${label}.endpoints.${type}`);
  }
}

if (errors.length > 0) {
  console.error("Validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Validation passed: ${servers.length} servers across ${categoryIds.size} categories.`
);
