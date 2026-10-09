import { CLIENTS, configFor, serverKey } from "./connect.js";
import { initHeroFluid } from "./fluid.js";

const root = document.documentElement;
const base = root.dataset.base || "";
const STACK_KEY = "mcphq.stack";
const CLIENT_KEY = "mcphq.client";
const VIEW_KEY = "mcphq.view";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function store(key, value) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch {
    return null;
  }
  return value;
}

function isTyping(event) {
  const target = event.target;
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))
  );
}

// ---------------------------------------------------------------------------
// Toast

let toastTimer;
function toast(message) {
  const element = $("[data-toast]");
  if (!element) return;
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("show"), 2200);
}

const hero = $("[data-hero]");
const heroCanvas = $("[data-hero-canvas]");
if (hero && heroCanvas) initHeroFluid(hero, heroCanvas);

if (!/Mac|iPhone|iPad/.test(navigator.platform)) {
  $$("[data-mod-key]").forEach((element) => (element.textContent = "Ctrl K"));
}

// ---------------------------------------------------------------------------
// Clipboard

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
}

function flash(button) {
  button.classList.add("is-done");
  setTimeout(() => button.classList.remove("is-done"), 1600);
}

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-target],[data-copy-text]");
  if (!button) return;
  const text =
    button.dataset.copyText ?? document.getElementById(button.dataset.copyTarget)?.textContent;
  if (text == null) return;
  await copyText(text);
  flash(button);
});

// ---------------------------------------------------------------------------
// Client tabs (server pages)

function selectTab(container, id) {
  const buttons = $$("[data-tab]", container);
  if (!buttons.some((button) => button.dataset.tab === id)) return;
  buttons.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.tab === id)));
  $$("[data-panel]", container).forEach((panel) => (panel.hidden = panel.dataset.panel !== id));
}

$$("[data-tabs]").forEach((container) => {
  const saved = store(CLIENT_KEY);
  if (saved) selectTab(container, saved);
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) return;
    selectTab(container, button.dataset.tab);
    store(CLIENT_KEY, button.dataset.tab);
  });
});

// ---------------------------------------------------------------------------
// Stack store

const stack = {
  list() {
    try {
      const parsed = JSON.parse(store(STACK_KEY) || "[]");
      return Array.isArray(parsed) ? parsed.filter((slug) => typeof slug === "string") : [];
    } catch {
      return [];
    }
  },
  save(list) {
    store(STACK_KEY, JSON.stringify([...new Set(list)]));
    document.dispatchEvent(new CustomEvent("stack:change"));
  },
  has(slug) {
    return this.list().includes(slug);
  },
  toggle(slug) {
    const list = this.list();
    const present = list.includes(slug);
    this.save(present ? list.filter((entry) => entry !== slug) : [...list, slug]);
    return !present;
  },
};

function syncStackUI() {
  const list = stack.list();
  $$("[data-stack-count]").forEach((badge) => {
    badge.textContent = String(list.length);
    badge.hidden = list.length === 0;
  });
  $$("[data-stack-toggle]").forEach((button) =>
    button.setAttribute("aria-pressed", String(list.includes(button.dataset.stackToggle)))
  );
}

function toggleStack(slug, name) {
  const added = stack.toggle(slug);
  const count = stack.list().length;
  toast(
    added
      ? `Added ${name || "server"} to your stack (${count})`
      : `Removed ${name || "server"} from your stack`
  );
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-stack-toggle]");
  if (!button) return;
  event.preventDefault();
  const name =
    button.closest(".card")?.querySelector("h3")?.textContent ??
    $(".detail-title h1")?.textContent;
  toggleStack(button.dataset.stackToggle, name);
});

document.addEventListener("stack:change", syncStackUI);
addEventListener("storage", (event) => {
  if (event.key === STACK_KEY) document.dispatchEvent(new CustomEvent("stack:change"));
});
syncStackUI();

// ---------------------------------------------------------------------------
// Catalog + search helpers

let catalogPromise;
let catalogData = [];
function loadCatalog() {
  catalogPromise ??= fetch(`${base}/api/catalog.json`)
    .then((response) => {
      if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
      return response.json();
    })
    .then((data) => (catalogData = data));
  return catalogPromise;
}

function hueOf(label) {
  let hash = 0;
  for (const char of label) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash % 360;
}

function initials(label) {
  const words = label
    .replace(/\bMCP\b|\bServer\b/gi, " ")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const source = words.length > 0 ? words : [label];
  return (source.length >= 2 ? `${source[0][0]}${source[1][0]}` : source[0].slice(0, 2)).toUpperCase();
}

function logoHtml(item, size = "md") {
  if (item.logo) {
    return `<span class="logo logo-${size}"><img src="${base}/logos/${esc(item.logo)}" alt="" loading="lazy"></span>`;
  }
  return `<span class="logo logo-${size} logo-mono" style="--hue:${hueOf(item.name)}" aria-hidden="true">${esc(initials(item.name))}</span>`;
}

function tokenize(query) {
  return query.toLowerCase().split(/\s+/).filter(Boolean);
}

/** Every token must match somewhere; name and tag hits rank highest. */
function scoreRecord(record, tokens) {
  let score = 0;
  for (const token of tokens) {
    if (!record.search.includes(token)) return -1;
    if (record.name.startsWith(token)) score += 12;
    else if (record.name.includes(token)) score += 7;
    if (record.tags.includes(token)) score += 5;
    else if (record.tags.some((tag) => tag.includes(token))) score += 2;
    if (record.provider.includes(token)) score += 4;
    score += 1;
  }
  return score;
}

// ---------------------------------------------------------------------------
// Command palette

const palette = $("[data-palette]");
const paletteInput = $("[data-palette-input]");
const paletteList = $("[data-palette-list]");
let paletteResults = [];
let paletteIndex = 0;
let lastFocus = null;

const PAGES = [
  { label: "Explore all servers", path: "/", hint: "Page" },
  { label: "Browse categories", path: "/categories/", hint: "Page" },
  { label: "Stack builder", path: "/stack/", hint: "Page" },
  { label: "API & llms.txt", path: "/developers/", hint: "Page" },
];

async function openPalette() {
  if (!palette) return;
  lastFocus = document.activeElement;
  palette.hidden = false;
  document.body.classList.add("no-scroll");
  paletteInput.value = "";
  paletteInput.focus();
  renderPalette();
  try {
    await loadCatalog();
    renderPalette();
  } catch {
    paletteList.innerHTML = `<li class="palette-empty">Could not load the catalog.</li>`;
  }
}

function closePalette() {
  if (!palette || palette.hidden) return;
  palette.hidden = true;
  document.body.classList.remove("no-scroll");
  lastFocus?.focus?.();
}

function renderPalette() {
  const query = paletteInput.value.trim();
  const tokens = tokenize(query);
  const catalog = catalogData;

  const servers = catalog
    .map((item) => {
      const record = {
        name: item.name.toLowerCase(),
        provider: item.provider.toLowerCase(),
        tags: item.tags,
        search: [item.name, item.provider, item.description, item.categoryName, item.language, ...item.tags]
          .join(" ")
          .toLowerCase(),
      };
      return { item, score: tokens.length ? scoreRecord(record, tokens) : 0 };
    })
    .filter(({ score }) => score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, tokens.length ? 8 : 6)
    .map(({ item }) => ({
      kind: "server",
      slug: item.slug,
      label: item.name,
      sub: `${item.provider} · ${item.categoryName}`,
      path: `/servers/${item.slug}/`,
      logo: logoHtml(item, "sm"),
      hint: item.transport ? "Remote" : item.official ? "Official" : "",
    }));

  const categoryMap = new Map(catalog.map((item) => [item.category, item.categoryName]));
  const categories = [...categoryMap]
    .filter(([, name]) => tokens.every((token) => name.toLowerCase().includes(token)))
    .slice(0, tokens.length ? 3 : 0)
    .map(([id, name]) => ({ kind: "category", label: name, sub: "Category", path: `/categories/${id}/`, hint: "Category" }));

  const pages = PAGES.filter((page) => tokens.every((token) => page.label.toLowerCase().includes(token))).map(
    (page) => ({ kind: "page", label: page.label, sub: "", path: page.path, hint: page.hint })
  );

  paletteResults = [...servers, ...categories, ...pages];
  paletteIndex = 0;

  if (paletteResults.length === 0) {
    paletteList.innerHTML = `<li class="palette-empty">No matches for “${esc(query)}”.</li>`;
    return;
  }

  paletteList.innerHTML = paletteResults
    .map(
      (result, index) => `<li role="option" id="pal-${index}" aria-selected="${index === 0}" data-index="${index}">
        ${result.logo ?? `<span class="logo logo-sm logo-glyph">${result.kind === "category" ? "#" : "→"}</span>`}
        <span class="palette-text"><b>${esc(result.label)}</b>${result.sub ? `<small>${esc(result.sub)}</small>` : ""}</span>
        ${result.hint ? `<span class="palette-hint">${esc(result.hint)}</span>` : ""}
      </li>`
    )
    .join("");
  paletteInput.setAttribute("aria-activedescendant", "pal-0");
}

function movePalette(delta) {
  if (!paletteResults.length) return;
  paletteIndex = (paletteIndex + delta + paletteResults.length) % paletteResults.length;
  $$("[role=option]", paletteList).forEach((option, index) =>
    option.setAttribute("aria-selected", String(index === paletteIndex))
  );
  $(`#pal-${paletteIndex}`)?.scrollIntoView({ block: "nearest" });
  paletteInput.setAttribute("aria-activedescendant", `pal-${paletteIndex}`);
}

function choosePalette(index, addToStack = false) {
  const result = paletteResults[index];
  if (!result) return;
  if (addToStack && result.kind === "server") {
    toggleStack(result.slug, result.label);
    return;
  }
  location.href = `${base}${result.path}`;
}

if (palette) {
  paletteInput.addEventListener("input", renderPalette);
  paletteInput.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      movePalette(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      movePalette(-1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      choosePalette(paletteIndex, event.shiftKey);
    }
  });
  paletteList.addEventListener("click", (event) => {
    const option = event.target.closest("[data-index]");
    if (option) choosePalette(Number(option.dataset.index));
  });
  $$("[data-close-palette]").forEach((element) => element.addEventListener("click", closePalette));
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-palette]")) openPalette();
  });
}

const heroSearch = $("#q");

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    palette?.hidden === false ? closePalette() : openPalette();
    return;
  }
  if (event.key === "Escape") {
    closePalette();
    return;
  }
  if (event.key === "/" && !isTyping(event)) {
    event.preventDefault();
    if (heroSearch) {
      heroSearch.focus();
      heroSearch.select();
    } else {
      openPalette();
    }
  }
});

// ---------------------------------------------------------------------------
// Explorer (home page)

const explorer = $("[data-explorer]");
if (explorer) initExplorer();

function initExplorer() {
  const grid = $("[data-grid]", explorer);
  const records = $$(".card", grid).map((element, index) => ({
    element,
    index,
    name: element.dataset.name,
    provider: element.dataset.provider,
    tags: element.dataset.tags.split(" "),
    cat: element.dataset.cat,
    lang: element.dataset.lang,
    official: element.dataset.official === "1",
    remote: element.dataset.remote === "1",
    search: `${element.textContent} ${element.dataset.tags}`.replace(/\s+/g, " ").toLowerCase(),
  }));

  const params = new URLSearchParams(location.search);
  const state = {
    q: params.get("q") ?? "",
    cat: params.get("cat") ?? "",
    lang: params.get("lang") ?? "",
    type: params.get("type") ?? "",
    transport: params.get("transport") ?? "",
    sort: params.get("sort") ?? "featured",
    view: store(VIEW_KEY) || "grid",
  };

  const facetNames = {
    cat: (value) => $(`[data-facet="cat"][data-value="${CSS.escape(value)}"] .facet-label`, explorer)?.textContent ?? value,
    lang: (value) => value,
    type: (value) => (value === "official" ? "Official" : "Community"),
    transport: (value) => (value === "remote" ? "Remote" : "Local"),
  };

  function passes(record, filters) {
    if (filters.cat && record.cat !== filters.cat) return false;
    if (filters.lang && record.lang !== filters.lang) return false;
    if (filters.type === "official" && !record.official) return false;
    if (filters.type === "community" && record.official) return false;
    if (filters.transport === "remote" && !record.remote) return false;
    if (filters.transport === "local" && record.remote) return false;
    return true;
  }

  function apply({ syncUrl = true } = {}) {
    const tokens = tokenize(state.q);
    for (const record of records) {
      record.score = tokens.length ? scoreRecord(record, tokens) : 0;
    }
    const searchHits = records.filter((record) => record.score >= 0);
    const visible = searchHits.filter((record) => passes(record, state));

    const sort = state.sort === "featured" && tokens.length ? "relevance" : state.sort;
    const sorted = [...visible].sort((a, b) => {
      if (sort === "relevance") return b.score - a.score || a.index - b.index;
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "provider") return a.provider.localeCompare(b.provider) || a.name.localeCompare(b.name);
      return a.index - b.index;
    });

    const visibleSet = new Set(sorted);
    for (const record of records) record.element.hidden = !visibleSet.has(record);
    grid.append(...sorted.map((record) => record.element));

    // Facet counts reflect every other active filter, so no option leads to zero results by surprise.
    $$("[data-count-for]", explorer).forEach((element) => {
      const [facet, value] = element.dataset.countFor.split(":");
      const count = searchHits.filter((record) => passes(record, { ...state, [facet]: value })).length;
      element.textContent = String(count);
      element.closest("button")?.classList.toggle("is-zero", count === 0);
    });

    $$("[data-facet]", explorer).forEach((button) =>
      button.setAttribute("aria-pressed", String(state[button.dataset.facet] === button.dataset.value))
    );

    $("[data-result-count]", explorer).textContent = `${sorted.length} ${sorted.length === 1 ? "server" : "servers"}`;
    $("[data-empty]", explorer).hidden = sorted.length > 0;
    $("[data-sort]", explorer).value = state.sort;

    const chips = [];
    if (state.q) chips.push(["q", `“${state.q}”`]);
    for (const facet of ["type", "transport", "cat", "lang"]) {
      if (state[facet]) chips.push([facet, facetNames[facet](state[facet])]);
    }
    $("[data-active-filters]", explorer).innerHTML = chips
      .map(
        ([key, label]) =>
          `<button type="button" class="chip chip-active" data-remove-filter="${key}">${esc(label)}<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>`
      )
      .join("");

    if (syncUrl) {
      const next = new URLSearchParams();
      for (const key of ["q", "cat", "lang", "type", "transport"]) {
        if (state[key]) next.set(key, state[key]);
      }
      if (state.sort !== "featured") next.set("sort", state.sort);
      const query = next.toString();
      history.replaceState(null, "", `${location.pathname}${query ? `?${query}` : ""}${location.hash}`);
    }
  }

  function setView(view) {
    state.view = view;
    grid.classList.toggle("is-list", view === "list");
    $$("[data-view]", explorer).forEach((button) =>
      button.setAttribute("aria-pressed", String(button.dataset.view === view))
    );
    store(VIEW_KEY, view);
  }

  function reset() {
    Object.assign(state, { q: "", cat: "", lang: "", type: "", transport: "" });
    if (heroSearch) heroSearch.value = "";
    apply();
  }

  function scrollToResults() {
    const top = explorer.getBoundingClientRect().top + scrollY - 72;
    if (scrollY < top - 40) scrollTo({ top, behavior: "smooth" });
  }

  if (heroSearch) {
    heroSearch.value = state.q;
    heroSearch.addEventListener("input", () => {
      state.q = heroSearch.value.trim();
      apply();
    });
    $("[data-hero-search]").addEventListener("submit", (event) => {
      event.preventDefault();
      scrollToResults();
    });
  }

  $$("[data-quick-query]").forEach((chip) =>
    chip.addEventListener("click", () => {
      state.q = chip.dataset.quickQuery;
      heroSearch.value = state.q;
      apply();
      scrollToResults();
    })
  );

  explorer.addEventListener("click", (event) => {
    const facetButton = event.target.closest("[data-facet]");
    if (facetButton) {
      const { facet, value } = facetButton.dataset;
      const toggles = facet === "cat" || facet === "lang";
      state[facet] = toggles && state[facet] === value ? "" : value;
      apply();
      return;
    }
    const remove = event.target.closest("[data-remove-filter]");
    if (remove) {
      state[remove.dataset.removeFilter] = "";
      if (remove.dataset.removeFilter === "q" && heroSearch) heroSearch.value = "";
      apply();
      return;
    }
    if (event.target.closest("[data-clear-filters]")) {
      reset();
      return;
    }
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      setView(viewButton.dataset.view);
      return;
    }
    if (event.target.closest("[data-rail-open]")) {
      $("[data-rail]", explorer).classList.toggle("open");
    }
  });

  $("[data-sort]", explorer).addEventListener("change", (event) => {
    state.sort = event.target.value;
    apply();
  });

  setView(state.view);
  apply({ syncUrl: false });
}

// ---------------------------------------------------------------------------
// Stack builder page

const stackApp = $("[data-stack-app]");
if (stackApp) initStackPage();

const DOWNLOAD_NAMES = {
  cursor: "mcp.json",
  vscode: "mcp.json",
  "claude-code": "add-mcp-servers.sh",
  "claude-desktop": "claude_desktop_config.json",
  codex: "config.toml",
};

function uniqueKeys(items) {
  const seen = new Set();
  return items.map((item) => {
    let key = serverKey(item.slug);
    if (seen.has(key)) key = item.slug;
    seen.add(key);
    return key;
  });
}

async function initStackPage() {
  const shared = new URLSearchParams(location.search).get("s");
  if (shared) {
    const incoming = shared.split(",").map((slug) => slug.trim()).filter(Boolean);
    stack.save([...stack.list(), ...incoming]);
    history.replaceState(null, "", location.pathname);
    toast(`Imported ${incoming.length} ${incoming.length === 1 ? "server" : "servers"} into your stack`);
  }

  let client = store(CLIENT_KEY) || CLIENTS[0].id;
  if (!CLIENTS.some((entry) => entry.id === client)) client = CLIENTS[0].id;

  let catalog;
  try {
    catalog = await loadCatalog();
  } catch {
    $("[data-stack-empty]", stackApp).innerHTML = "<h2>Could not load the catalog</h2><p class='muted'>Refresh the page to try again.</p>";
    return;
  }
  const bySlug = new Map(catalog.map((item) => [item.slug, item]));

  function render() {
    const selected = stack.list().map((slug) => bySlug.get(slug)).filter(Boolean);
    $("[data-stack-empty]", stackApp).hidden = selected.length > 0;
    $("[data-stack-filled]", stackApp).hidden = selected.length === 0;
    if (selected.length === 0) return;

    const remote = selected.filter((item) => item.transport);
    const local = selected.filter((item) => !item.transport);
    $("[data-stack-total]", stackApp).textContent = `(${selected.length})`;

    $("[data-stack-list]", stackApp).innerHTML = selected
      .map(
        (item) => `<li>
          ${logoHtml(item)}
          <span class="stack-item-text"><a href="${base}/servers/${item.slug}/">${esc(item.name)}</a><small>${esc(item.provider)} · ${item.transport ? "Remote" : "Local"}</small></span>
          <button type="button" class="icon-btn" data-stack-remove="${item.slug}" aria-label="Remove ${esc(item.name)}"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
        </li>`
      )
      .join("");

    $$("[data-client]", stackApp).forEach((button) =>
      button.setAttribute("aria-selected", String(button.dataset.client === client))
    );

    const meta = CLIENTS.find((entry) => entry.id === client);
    const configElement = $("[data-stack-config]", stackApp);
    if (remote.length) {
      const text = configFor(
        client,
        uniqueKeys(remote).map((key, index) => ({ key, transport: remote[index].transport }))
      );
      configElement.innerHTML = `<div class="code">
        <div class="code-bar"><span>${esc(meta.file)} · ${remote.length} hosted ${remote.length === 1 ? "server" : "servers"}</span><button class="copy-btn" type="button" data-copy-target="stack-cfg"><span class="when-off">Copy</span><span class="when-on">Copied</span></button></div>
        <pre id="stack-cfg"><code>${esc(text)}</code></pre>
      </div>`;
      $("[data-stack-download]", stackApp).hidden = false;
    } else {
      configElement.innerHTML = `<p class="muted">None of the servers in this stack are hosted, so there is no shared config to generate. Follow each project's setup steps below.</p>`;
      $("[data-stack-download]", stackApp).hidden = true;
    }

    $("[data-stack-local]", stackApp).innerHTML = local.length
      ? `<h3 class="stack-local-title">Set up locally (${local.length})</h3>
         <p class="muted small">These run on your machine. Install each one from its docs, then add the entry to the same file.</p>
         <ul class="stack-local">${local
           .map((item) => `<li><a href="${esc(item.url)}" rel="noopener">${esc(item.name)}</a><span class="muted small">${esc(item.language)}</span></li>`)
           .join("")}</ul>`
      : "";
  }

  stackApp.addEventListener("click", async (event) => {
    const remove = event.target.closest("[data-stack-remove]");
    if (remove) {
      stack.save(stack.list().filter((slug) => slug !== remove.dataset.stackRemove));
      return;
    }
    const tab = event.target.closest("[data-client]");
    if (tab) {
      client = tab.dataset.client;
      store(CLIENT_KEY, client);
      render();
      return;
    }
    if (event.target.closest("[data-stack-clear]")) {
      stack.save([]);
      toast("Stack cleared");
      return;
    }
    const share = event.target.closest("[data-stack-share]");
    if (share) {
      const url = `${location.origin}${base}/stack/?s=${stack.list().join(",")}`;
      await copyText(url);
      flash(share);
      return;
    }
    if (event.target.closest("[data-stack-download]")) {
      const text = $("#stack-cfg")?.textContent ?? "";
      const blob = new Blob([`${text}\n`], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = DOWNLOAD_NAMES[client];
      link.click();
      URL.revokeObjectURL(link.href);
    }
  });

  document.addEventListener("stack:change", render);
  render();
}
