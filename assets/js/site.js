(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ME = "Maxime Lamothe";
  const KIND = { journal: "Journal", conference: "Conference", preprint: "Preprint" };

  const href = (doi) => (/^https?:/.test(doi) ? doi : "https://doi.org/" + doi);
  const authors = (a) => esc(a).replace(ME, "<strong>" + ME + "</strong>");

  function pubItem(p) {
    const links = [];
    if (p.doi) links.push('<a href="' + esc(href(p.doi)) + '" target="_blank" rel="noopener">Paper</a>');
    if (p.pdf) links.push('<a href="' + esc(p.pdf) + '" target="_blank" rel="noopener">Pre-print</a>');
    return (
      '<li class="pub t-' + p.topic + '">' +
      '<p class="pub-title">' + esc(p.t) + "</p>" +
      '<p class="pub-authors">' + authors(p.a) + "</p>" +
      '<p class="pub-meta"><span class="venue">' + esc(p.v) + "</span>" +
      '<span class="tag">' + esc(TOPICS[p.topic].label) + "</span>" +
      (p.k === "preprint" ? '<span class="tag plain">Preprint</span>' : "") +
      (p.dorsal ? '<span class="tag dorsal">DORSAL</span>' : "") +
      '<span class="pub-links">' + links.join("") + "</span></p></li>"
    );
  }

  /* ---------- Publications, with filters ---------- */
  const state = { topic: "all", kind: "all", q: "" };

  function renderPubs() {
    const q = state.q.trim().toLowerCase();
    const list = PUBLICATIONS.filter(
      (p) =>
        (state.topic === "all" || (state.topic === "dorsal" ? p.dorsal : p.topic === state.topic)) &&
        (state.kind === "all" || p.k === state.kind) &&
        (!q || (p.t + " " + p.a + " " + p.v + " " + p.y).toLowerCase().includes(q))
    );
    const years = [...new Set(list.map((p) => p.y))].sort((a, b) => b - a);
    $("#pub-list").innerHTML = years.length
      ? years
          .map(
            (y) =>
              '<section class="year"><h3>' + y + "</h3><ul>" +
              list.filter((p) => p.y === y).map(pubItem).join("") +
              "</ul></section>"
          )
          .join("")
      : '<p class="empty">No paper matches these filters.</p>';
    $("#pub-count").textContent = list.length + (list.length === 1 ? " paper" : " papers");
    $$("#topic-filters button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.topic === state.topic)));
    $$("#kind-filters button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.kind === state.kind)));
  }

  function setupFilters() {
    // Research cards link here with ?topic=perf (or ai, ml, review, api, dorsal).
    const wanted = new URLSearchParams(location.search).get("topic");
    if (wanted && (wanted === "dorsal" || TOPICS[wanted])) state.topic = wanted;
    const topics = [["all", "All topics"]].concat(Object.keys(TOPICS).map((k) => [k, TOPICS[k].label]), [["dorsal", "DORSAL"]]);
    $("#topic-filters").innerHTML = topics
      .map(([k, label]) => '<button type="button" class="chip t-' + k + '" data-topic="' + k + '">' + esc(label) + "</button>")
      .join("");
    $("#kind-filters").innerHTML = [["all", "All types"]]
      .concat(Object.entries(KIND))
      .map(([k, label]) => '<button type="button" class="chip" data-kind="' + k + '">' + label + "</button>")
      .join("");
    $("#topic-filters").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (b) { state.topic = b.dataset.topic; renderPubs(); }
    });
    $("#kind-filters").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (b) { state.kind = b.dataset.kind; renderPubs(); }
    });
    $("#pub-search").addEventListener("input", (e) => { state.q = e.target.value; renderPubs(); });
  }

  /* ---------- Counts on research cards ---------- */
  function renderCounts() {
    $$("[data-count]").forEach((el) => {
      const k = el.dataset.count;
      const n = PUBLICATIONS.filter((p) => (k === "dorsal" ? p.dorsal : p.topic === k)).length;
      el.textContent = n + (n === 1 ? " paper" : " papers");
    });
  }

  /* ---------- DORSAL recent work ---------- */
  function renderDorsal() {
    $("#dorsal-pubs").innerHTML = PUBLICATIONS.filter((p) => p.dorsal)
      .slice(0, 5)
      .map(
        (p) =>
          '<li><a href="' + esc(href(p.doi)) + '" target="_blank" rel="noopener">' + esc(p.t) + "</a>" +
          "<span>" + esc(p.v.replace(/\s*\(.*\)/, "")) + (/\d{4}/.test(p.v) ? "" : " " + p.y) + "</span></li>"
      )
      .join("");
  }

  /* ---------- Recent papers, on the home page ---------- */
  function renderRecent() {
    $("#recent-pubs").innerHTML = PUBLICATIONS.filter((p) => p.k !== "preprint")
      .slice(0, 4)
      .map(
        (p) =>
          '<li><a href="' + esc(href(p.doi)) + '" target="_blank" rel="noopener">' + esc(p.t) + "</a>" +
          "<span>" + esc(p.v.replace(/\s*\(.*\)/, "")) + (/\d{4}/.test(p.v) ? "" : " " + p.y) + "</span></li>"
      )
      .join("");
  }

  /* ---------- People ---------- */
  function initials(name) {
    const parts = name.replace(/\./g, "").split(/\s+/);
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }

  function person(p, i) {
    const avatar = p.photo
      ? '<img class="avatar" src="' + esc(p.photo) + '" alt="">'
      : '<span class="avatar c' + (i % 4) + '" aria-hidden="true">' + initials(p.name) + "</span>";
    const name = p.url ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.name) + "</a>" : esc(p.name);
    return (
      '<li class="person">' + avatar + "<div>" +
      '<p class="person-name">' + name + (p.lab ? '<span class="tag dorsal">' + esc(p.lab) + "</span>" : "") + "</p>" +
      '<p class="person-role">' + esc(p.role) + (p.with ? " · with " + esc(p.with) : "") + "</p>" +
      (p.topic ? '<p class="person-topic">' + esc(p.topic) + "</p>" : "") + "</div></li>"
    );
  }

  function renderPeople() {
    $("#students").innerHTML = STUDENTS.map(person).join("");
    $("#alumni").innerHTML = ALUMNI.map(person).join("");
  }

  /* ---------- Nav: mobile menu ---------- */
  function setupNav() {
    const toggle = $(".nav-toggle");
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------- Email, assembled here to keep it away from scrapers ---------- */
  function setupEmail() {
    const addr = ["maxime.lamothe", "polymtl.ca"].join("@");
    $$("[data-email]").forEach((a) => {
      a.href = "mailto:" + addr;
      if (a.dataset.email === "text") a.textContent = addr;
    });
  }

  // Each page only has some of these blocks.
  if ($("#pub-list")) { setupFilters(); renderPubs(); }
  if ($("#dorsal-pubs")) renderDorsal();
  if ($("#recent-pubs")) renderRecent();
  if ($("#students")) renderPeople();
  renderCounts();
  setupNav();
  setupEmail();
  $("#year").textContent = new Date().getFullYear();
})();
