/* =====================================================================
   Portfolio · interactions
   ===================================================================== */
(function () {
  "use strict";

  const DATA = window.PORTFOLIO;
  if (!DATA) return;
  const CFG = DATA.config;

  /* ------------------------------ Helpers ------------------------------ */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } }
  };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const smooth = reduceMotion ? "auto" : "smooth";

  /* ------------------------------- Icônes ------------------------------ */
  const ICONS = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    graduation: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    whatsapp: '<path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    listChecks: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8M13 12h8M13 18h8"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    brain: '<path d="M12 5a3 3 0 1 0-6 .13 4 4 0 0 0-2.52 5.77 4 4 0 0 0 .55 6.59A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 6 .13 4 4 0 0 1 2.52 5.77 4 4 0 0 1-.55 6.59A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.6 6.5a3 3 0 0 0 .4-1.38M6 5.13a3 3 0 0 0 .4 1.37M3.48 10.9a4 4 0 0 1 .58-.4M19.94 10.5a4 4 0 0 1 .58.4M6 18a4 4 0 0 1-1.97-.52M19.97 17.48A4 4 0 0 1 18 18"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-4 0"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    messageText: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>',
    network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
    sparkles: '<path d="m12 3-1.91 5.81a2 2 0 0 1-1.28 1.28L3 12l5.81 1.91a2 2 0 0 1 1.28 1.28L12 21l1.91-5.81a2 2 0 0 1 1.28-1.28L21 12l-5.81-1.91a2 2 0 0 1-1.28-1.28Z"/><path d="M5 3v4M19 17v4M3 5h4M17 19h4"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
    checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
    alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'
  };

  const icon = (name) =>
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ""}</svg>`;

  function paintIcons(root = document) {
    $$("[data-icon]", root).forEach((el) => {
      if (!el.firstElementChild) el.innerHTML = icon(el.dataset.icon);
    });
  }

  /* -------------------------------- Langue ----------------------------- */
  const LANGS = Object.keys(DATA.content);
  let lang = store.get("pf-lang");
  if (!LANGS.includes(lang)) {
    lang = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }
  let T = DATA.content[lang];
  const ui = (key) => (T.ui[key] != null ? T.ui[key] : key);

  // Les éléments rendus après le premier affichage n'ont pas d'animation d'apparition
  let firstRender = true;
  const RV = () => (firstRender ? " reveal" : "");

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = T.meta.title;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", T.meta.description);

    $$("[data-i18n]").forEach((el) => {
      const v = T.ui[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = ui(el.dataset.i18nPh); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", ui(el.dataset.i18nAria)); });
    $("#langToggle").textContent = lang === "fr" ? "EN" : "FR";
  }

  /* ------------------------------- Rendus ------------------------------ */
  let countersDone = false;

  function renderStats() {
    $("#stats").innerHTML = T.stats.map((s) => `
      <div class="stat${RV()}">
        <div class="stat-value"><span class="count" data-to="${s.value}">${countersDone ? s.value : 0}</span>${esc(s.suffix || "")}</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`).join("");
  }

  function renderAbout() {
    // Les paragraphes acceptent du HTML simple (<strong>) défini dans data.js
    $("#aboutText").innerHTML = T.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
    $("#aboutFacts").innerHTML = T.about.facts.map((f) => `
      <div class="fact card spot${RV()}">
        <span class="fact-ico" data-icon="${f.icon}"></span>
        <p class="fact-label">${esc(f.label)}</p>
        <p class="fact-value">${esc(f.value)}</p>
      </div>`).join("");
    $("#softSkills").innerHTML = T.about.soft.map((s) =>
      `<span class="soft-item"><span data-icon="${s.icon}"></span>${esc(s.label)}</span>`).join("");

    const loc = T.about.facts.find((f) => f.icon === "mapPin");
    if (loc) $("#heroLoc").textContent = loc.value;
  }

  const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

  function timelineItem(it) {
    return `
      <li class="tl-item${RV()}">
        <article class="tl-card card spot">
          <div class="tl-top">
            <span class="tl-period">${esc(it.period)}</span>
            ${it.duration ? `<span class="tl-duration">${esc(it.duration)}</span>` : ""}
          </div>
          <h4 class="tl-role">${esc(it.role)}</h4>
          <p class="tl-org">${esc(it.org)}</p>
          ${it.desc ? `<p class="tl-desc">${esc(it.desc)}</p>` : ""}
          ${it.tags ? tags(it.tags) : ""}
        </article>
      </li>`;
  }

  function renderTimelines() {
    $("#expTimeline").innerHTML = T.experience.map(timelineItem).join("");
    $("#eduTimeline").innerHTML = T.education.map(timelineItem).join("");
  }

  let activeFilter = "all";

  function renderFilters() {
    $("#projectFilters").innerHTML = T.projectFilters.map((f) => {
      const n = f.id === "all" ? T.projects.length : T.projects.filter((p) => p.cats.includes(f.id)).length;
      return `<button type="button" class="filter" data-filter="${f.id}" aria-pressed="${f.id === activeFilter}">${esc(f.label)}<span class="filter-count">${n}</span></button>`;
    }).join("");
  }

  function renderProjects() {
    const more = esc(ui("projects.details"));
    $("#projectGrid").innerHTML = T.projects.map((p) => `
      <article class="project card spot${RV()}" style="--h:${p.hue}" data-id="${p.id}" data-cats="${p.cats.join(" ")}"
               tabindex="0" role="button" aria-haspopup="dialog" aria-label="${esc(p.title)} — ${more}">
        <div class="project-visual">
          <span class="project-label">${esc(p.label)}</span>
          ${p.date ? `<span class="project-date">${esc(p.date)}</span>` : ""}
          <span class="project-ico">${icon(p.icon)}</span>
        </div>
        <div class="project-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.summary)}</p>
          ${tags(p.tags.slice(0, 4))}
          <span class="project-more">${more}${icon("arrowRight")}</span>
        </div>
      </article>`).join("");
    applyFilter(false);
    bindTilt();
  }

  function applyFilter(animate) {
    let visible = 0;
    $$("#projectGrid .project").forEach((card) => {
      const show = activeFilter === "all" || card.dataset.cats.split(" ").includes(activeFilter);
      card.classList.toggle("is-out", !show);
      card.classList.remove("is-in");
      if (show) {
        visible++;
        if (animate) {
          void card.offsetWidth; // relance l'animation
          card.classList.add("is-in");
        }
      }
    });
    $("#projectsEmpty").classList.toggle("is-hidden", visible > 0);
  }

  function bindTilt() {
    if (!finePointer || reduceMotion) return;
    $$("#projectGrid .project").forEach((card) => {
      card.addEventListener("pointerenter", () => {
        card.style.transition = "transform .12s ease-out, border-color .3s, box-shadow .4s";
      });
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transition = "";
        card.style.transform = "";
      });
    });
  }

  function renderSkills() {
    $("#skillsGrid").innerHTML = T.skills.map((s) => `
      <article class="skill-card card spot${RV()}">
        <div class="skill-head"><span class="skill-ico" data-icon="${s.icon}"></span><h3>${esc(s.title)}</h3></div>
        <div class="skill-items">${s.items.map((i) => `<span class="skill-chip">${esc(i)}</span>`).join("")}</div>
      </article>`).join("");

    const hasCerts = T.certifications.length > 0;
    $(".certs-title").classList.toggle("is-hidden", !hasCerts);
    $("#certGrid").classList.toggle("is-hidden", !hasCerts);
    $("#certGrid").innerHTML = T.certifications.map((c) => `
      <article class="cert card spot${RV()}">
        <span class="cert-ico" data-icon="${c.icon || "award"}"></span>
        <div><p class="cert-title">${esc(c.title)}</p>${c.issuer ? `<p class="cert-issuer">${esc(c.issuer)}</p>` : ""}</div>
      </article>`).join("");
  }

  function renderResearch() {
    $("#interestsGrid").innerHTML = T.interests.map((i) => `
      <article class="interest card spot${RV()}">
        <span class="interest-ico" data-icon="${i.icon}"></span>
        <h3>${esc(i.title)}</h3>
        <p>${esc(i.desc)}</p>
      </article>`).join("");
    $("#domainList").innerHTML = T.domains.map((d) => `<li>${esc(d)}</li>`).join("");
  }

  function renderSubjects() {
    const sel = $("#f-subject");
    const current = sel.value;
    sel.innerHTML = T.subjects.map((s) => `<option value="${s.id}">${esc(s.label)}</option>`).join("");
    if (current) sel.value = current;
  }

  function renderAll() {
    applyStatic();
    renderStats();
    renderAbout();
    renderTimelines();
    renderFilters();
    renderProjects();
    renderSkills();
    renderResearch();
    renderSubjects();
    paintIcons();
  }

  /* ---------------------------- Apparitions ---------------------------- */
  const revealIO = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.classList.add("in");
          revealIO.unobserve(el);
          const delay = parseFloat(el.style.getPropertyValue("--d")) || 0;
          // Une fois apparu, l'élément retrouve ses transitions normales (survol, inclinaison)
          setTimeout(() => {
            el.classList.remove("reveal", "in");
            el.style.removeProperty("--d");
          }, 900 + delay);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

  function observeReveals() {
    $$(".reveal").forEach((el) => {
      if (!revealIO || reduceMotion) { el.classList.remove("reveal"); return; }
      const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty("--d", `${Math.min(idx, 6) * 80}ms`);
      revealIO.observe(el);
    });
  }

  /* ------------------------------ Compteurs ---------------------------- */
  function runCounters() {
    countersDone = true;
    $$("#stats .count").forEach((el) => {
      const to = Number(el.dataset.to);
      if (reduceMotion) { el.textContent = to; return; }
      const start = performance.now();
      const dur = 1400;
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function setupCounters() {
    if (!("IntersectionObserver" in window)) { runCounters(); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { runCounters(); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe($("#stats"));
  }

  /* ---------------------------- Texte tapé ----------------------------- */
  let typeTimer = 0;
  function startTyping() {
    clearTimeout(typeTimer);
    const el = $("#typed");
    const roles = T.roles;
    if (reduceMotion) { el.textContent = roles[0]; return; }
    let i = 0, j = 0, deleting = false;
    const tick = () => {
      const word = roles[i];
      if (!deleting) {
        j++;
        el.textContent = word.slice(0, j);
        if (j >= word.length) { deleting = true; typeTimer = setTimeout(tick, 1900); return; }
        typeTimer = setTimeout(tick, 50 + Math.random() * 45);
      } else {
        j--;
        el.textContent = word.slice(0, j);
        if (j <= 0) { deleting = false; i = (i + 1) % roles.length; typeTimer = setTimeout(tick, 350); return; }
        typeTimer = setTimeout(tick, 26);
      }
    };
    tick();
  }

  /* ----------------------------- Navigation ---------------------------- */
  const nav = $("#nav");
  const burger = $("#burger");
  const navLinks = $("#navLinks");

  function setMenu(open) {
    burger.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("open", open);
    nav.classList.toggle("menu-open", open);
  }

  function setupNav() {
    const progress = $(".scroll-progress span");
    const toTop = $("#toTop");
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      nav.classList.toggle("scrolled", y > 20);
      toTop.classList.toggle("show", y > window.innerHeight * 0.8);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: smooth }));

    burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
    navLinks.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("click", (e) => { if (!nav.contains(e.target)) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

    // Lien actif selon la section visible
    if ("IntersectionObserver" in window) {
      const links = $$("#navLinks a");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      $$("main > section[id]").forEach((s) => io.observe(s));
    }

    // Halo lumineux qui suit le curseur sur les cartes
    document.addEventListener("pointermove", (e) => {
      const el = e.target.closest && e.target.closest(".spot");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ---------------------------- Thème & langue -------------------------- */
  let field = null;

  function setupToggles() {
    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      store.set("pf-theme", next);
      const tc = $('meta[name="theme-color"]');
      if (tc) tc.setAttribute("content", next === "light" ? "#f6f7fb" : "#070a12");
      if (field) field.refresh();
    });

    $("#langToggle").addEventListener("click", () => {
      lang = lang === "fr" ? "en" : "fr";
      T = DATA.content[lang];
      store.set("pf-lang", lang);
      renderAll();
      startTyping();
      clearErrors();
    });
  }

  /* -------------------------- Fond neuronal animé ----------------------- */
  function NeuralField(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const host = canvas.parentElement;
    const LINK = 150, LINK2 = LINK * LINK, MOUSE_R = 170, MAX_PULSES = 16;
    const mouse = { x: -1e4, y: -1e4 };
    let w = 0, h = 0, nodes = [], pulses = [], raf = 0, visible = true, col = {};

    function readColors() {
      const cs = getComputedStyle(document.documentElement);
      col = {
        node: cs.getPropertyValue("--c-node").trim(),
        line: cs.getPropertyValue("--c-line").trim(),
        pulse: cs.getPropertyValue("--c-pulse").trim(),
        alpha: parseFloat(cs.getPropertyValue("--c-alpha")) || 0.3
      };
    }

    function makeNode() {
      const speed = 0.15 + Math.random() * 0.25;
      const a = Math.random() * Math.PI * 2;
      return { x: Math.random() * w, y: Math.random() * h, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed, r: 1 + Math.random() * 1.6 };
    }

    function resize() {
      const r = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Conserve la répartition des neurones quand la zone change de taille
      if (w > 0 && h > 0) {
        const sx = r.width / w, sy = r.height / h;
        nodes.forEach((n) => { n.x *= sx; n.y *= sy; });
      }
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.round(Math.min(110, Math.max(28, (w * h) / 15000)));
      while (nodes.length < target) nodes.push(makeNode());
      nodes.length = target;
      nodes.forEach((n) => { n.x = Math.min(n.x, w); n.y = Math.min(n.y, h); });
      pulses = pulses.filter((p) => nodes.includes(p.a) && nodes.includes(p.b));
      if (reduceMotion) draw();
    }

    function neighbours(a, exclude) {
      const out = [];
      for (const b of nodes) {
        if (b === a || b === exclude) continue;
        const dx = a.x - b.x, dy = a.y - b.y;
        if (dx * dx + dy * dy < LINK2) out.push(b);
      }
      return out;
    }

    // Un « signal » parcourt une connexion puis se propage au neurone suivant
    function spawn(from, prev, hops) {
      const a = from || nodes[(Math.random() * nodes.length) | 0];
      if (!a) return;
      const ns = neighbours(a, prev);
      if (!ns.length) return;
      pulses.push({
        a, b: ns[(Math.random() * ns.length) | 0], t: 0,
        speed: 0.012 + Math.random() * 0.014,
        hops: hops != null ? hops : 2 + ((Math.random() * 4) | 0)
      });
    }

    function update() {
      for (const n of nodes) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_R * MOUSE_R) {
          const d = Math.sqrt(d2) || 1, f = (1 - d / MOUSE_R) * 1.2;
          n.x += (dx / d) * f; n.y += (dy / d) * f;
        }
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) { n.x = 0; n.vx *= -1; } else if (n.x > w) { n.x = w; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; } else if (n.y > h) { n.y = h; n.vy *= -1; }
      }
      if (pulses.length < MAX_PULSES && Math.random() < 0.06) spawn();
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          if (p.hops > 0 && pulses.length < MAX_PULSES) spawn(p.b, p.a, p.hops - 1);
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < LINK2) {
            ctx.strokeStyle = `rgba(${col.line},${((1 - Math.sqrt(d2) / LINK) * col.alpha).toFixed(3)})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      const MR = MOUSE_R + 40;
      for (const n of nodes) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < MR * MR) {
          ctx.strokeStyle = `rgba(${col.node},${((1 - Math.sqrt(d2) / MR) * col.alpha * 1.5).toFixed(3)})`;
          ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(n.x, n.y); ctx.stroke();
        }
      }

      ctx.fillStyle = `rgba(${col.node},0.85)`;
      for (const n of nodes) {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }

      ctx.lineWidth = 1.5;
      for (const p of pulses) {
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        const t0 = Math.max(0, p.t - 0.3);
        ctx.strokeStyle = `rgba(${col.pulse},0.55)`;
        ctx.beginPath();
        ctx.moveTo(p.a.x + (p.b.x - p.a.x) * t0, p.a.y + (p.b.y - p.a.y) * t0);
        ctx.lineTo(x, y);
        ctx.stroke();
        const g = ctx.createRadialGradient(x, y, 0, x, y, 7);
        g.addColorStop(0, `rgba(${col.pulse},1)`);
        g.addColorStop(1, `rgba(${col.pulse},0)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
      }
    }

    function loop() { update(); draw(); raf = requestAnimationFrame(loop); }
    function start() { if (!raf && !reduceMotion && visible && !document.hidden) raf = requestAnimationFrame(loop); }
    function stop() { cancelAnimationFrame(raf); raf = 0; }

    readColors();
    resize();
    if (reduceMotion) draw(); else start();

    let rt = 0;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); else stop(); }).observe(host);
    }
    document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); else start(); });
    host.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }, { passive: true });
    host.addEventListener("pointerleave", () => { mouse.x = mouse.y = -1e4; });

    return { refresh() { readColors(); if (reduceMotion) draw(); } };
  }

  /* ------------------------------- Modale ------------------------------ */
  const modal = $("#projectModal");
  let currentProject = null;

  function openProject(id) {
    const p = T.projects.find((x) => x.id === id);
    if (!p) return;
    currentProject = p;
    const ico = $("#modalIcon");
    ico.style.setProperty("--h", p.hue);
    ico.innerHTML = icon(p.icon);
    $("#modalMeta").textContent = [p.label, p.date].filter(Boolean).join(" · ");
    $("#modalTitle").textContent = p.title;
    $("#modalSummary").textContent = p.summary;
    $("#modalContext").textContent = p.context;
    $("#modalHighlights").innerHTML = p.highlights.map((h) => `<li>${esc(h)}</li>`).join("");
    $("#modalTags").innerHTML = p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    if (typeof modal.close === "function") modal.close();
    else { modal.removeAttribute("open"); document.body.classList.remove("modal-open"); }
  }

  function setupProjects() {
    $("#projectFilters").addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      activeFilter = b.dataset.filter;
      $$("#projectFilters .filter").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      applyFilter(true);
    });

    const grid = $("#projectGrid");
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".project");
      if (card) openProject(card.dataset.id);
    });
    grid.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("project")) {
        e.preventDefault();
        openProject(e.target.dataset.id);
      }
    });

    modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    $("#modalClose").addEventListener("click", closeModal);
    $("#modalCta").addEventListener("click", () => {
      closeModal();
      if (currentProject) prefillContact("collab", ui("msg.project").replace("{project}", currentProject.title));
    });
    $("#goalCta").addEventListener("click", () => prefillContact("hello", ui("msg.hello")));
  }

  /* ------------------------------- Toasts ------------------------------ */
  function toast(msg, type = "info") {
    const ic = { success: "checkCircle", error: "alert", info: "info" }[type] || "info";
    const el = document.createElement("div");
    el.className = `toast toast--${type}`;
    el.setAttribute("role", type === "error" ? "alert" : "status");
    el.innerHTML = `${icon(ic)}<span>${esc(msg)}</span>`;
    $("#toasts").appendChild(el);
    setTimeout(() => {
      el.classList.add("out");
      el.addEventListener("animationend", () => el.remove(), { once: true });
      setTimeout(() => el.remove(), 600);
    }, 5000);
  }

  /* ------------------------------ Contact ------------------------------ */
  // Les coordonnées ne sont reconstituées qu'au moment du clic : rien n'est affiché ni lisible dans la page
  const decode = (s) => { try { return atob(s).split("").reverse().join(""); } catch (e) { return ""; } };
  const getEmail = () => decode(CFG.contact.e);
  const getPhone = () => decode(CFG.contact.p).replace(/\D/g, "");

  const form = $("#contactForm");
  const fields = {
    name: $("#f-name"),
    email: $("#f-email"),
    subject: $("#f-subject"),
    message: $("#f-message"),
    website: $("#f-website")
  };
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setError(input, msg) {
    const f = input.closest(".field");
    f.classList.add("has-error");
    f.querySelector(".field-error").textContent = msg;
    input.setAttribute("aria-invalid", "true");
  }

  function clearError(input) {
    const f = input.closest(".field");
    f.classList.remove("has-error");
    const err = f.querySelector(".field-error");
    if (err) err.textContent = "";
    input.removeAttribute("aria-invalid");
  }

  function clearErrors() {
    [fields.name, fields.email, fields.message].forEach(clearError);
  }

  function validate() {
    clearErrors();
    const v = (k) => fields[k].value.trim();
    let ok = true;
    if (v("name").length < 2) { setError(fields.name, ui("err.name")); ok = false; }
    if (!EMAIL_RE.test(v("email"))) { setError(fields.email, ui("err.email")); ok = false; }
    if (v("message").length < 10) { setError(fields.message, ui("err.message")); ok = false; }
    if (!ok) {
      const first = form.querySelector(".has-error input, .has-error textarea");
      if (first) first.focus();
    }
    return ok;
  }

  function setSending(on) {
    const b = $("#submitBtn");
    b.disabled = on;
    b.querySelector(".btn-label").textContent = ui(on ? "form.sending" : "form.send");
    b.querySelector("[data-icon]").innerHTML = on ? '<span class="spinner"></span>' : icon("send");
  }

  function openMailto(d, subject) {
    const lines = [d.message, "", "—", `${ui("form.name")} : ${d.name}`, `${ui("form.email")} : ${d.email}`];
    window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    toast(ui("toast.mailto"), "info");
  }

  function prefillContact(subject, message) {
    fields.subject.value = subject;
    if (!fields.message.value.trim()) fields.message.value = message;
    $("#contact").scrollIntoView({ behavior: smooth });
    setTimeout(() => fields.name.focus({ preventScroll: true }), reduceMotion ? 0 : 700);
  }

  function setupContact() {
    if (!getPhone()) {
      $("#btnWhatsapp").classList.add("is-hidden");
      $("#btnCall").classList.add("is-hidden");
    }
    $("#btnEmail").addEventListener("click", () => {
      window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent(ui("msg.emailSubject"))}`;
    });
    $("#btnWhatsapp").addEventListener("click", () => {
      window.open(`https://wa.me/${getPhone()}?text=${encodeURIComponent(ui("msg.whatsapp"))}`, "_blank", "noopener");
    });
    $("#btnCall").addEventListener("click", () => {
      window.location.href = `tel:+${getPhone()}`;
    });
    ["name", "email", "message"].forEach((k) => {
      fields[k].addEventListener("input", () => clearError(fields[k]));
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Pot de miel : un robot remplit le champ caché
      if (fields.website.value) { form.reset(); toast(ui("toast.success"), "success"); return; }
      if (!validate()) { toast(ui("toast.invalid"), "error"); return; }

      const last = Number(store.get("pf-last-sent")) || 0;
      if (Date.now() - last < 60000) { toast(ui("toast.cooldown"), "info"); return; }

      const d = {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        message: fields.message.value.trim(),
        subjectLabel: fields.subject.options[fields.subject.selectedIndex].text
      };
      const subject = `[Portfolio] ${d.subjectLabel} — ${d.name}`;

      // Sans clé Web3Forms : ouverture de la messagerie du visiteur
      if (!CFG.web3formsKey) { openMailto(d, subject); return; }

      setSending(true);
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: CFG.web3formsKey,
            subject,
            from_name: `Portfolio — ${CFG.name}`,
            name: d.name,
            email: d.email,
            "Sujet": d.subjectLabel,
            message: d.message
          })
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.success) throw new Error(json.message || `HTTP ${res.status}`);
        store.set("pf-last-sent", String(Date.now()));
        form.reset();
        toast(ui("toast.success"), "success");
      } catch (err) {
        console.error("Envoi du formulaire impossible :", err);
        toast(ui("toast.error"), "error");
      } finally {
        setSending(false);
      }
    });
  }

  /* ------------------------------ Médias ------------------------------- */
  function setupLinks() {
    ["#linkedinHero", "#linkedinContact", "#linkedinFooter"].forEach((id) => {
      const a = $(id);
      if (a) a.href = CFG.linkedin;
    });
    $("#year").textContent = new Date().getFullYear();
  }

  function setupPhoto() {
    if (!CFG.photo) return;
    const img = new Image();
    img.alt = CFG.name;
    img.decoding = "async";
    img.onload = () => $("#avatarCore").appendChild(img);
    img.src = CFG.photo;
  }

  async function setupCv() {
    const btn = $("#cvBtn");
    if (!CFG.cv) return;
    btn.href = CFG.cv;
    // En local (file://), impossible de vérifier : le bouton est affiché
    if (location.protocol === "file:") { btn.classList.remove("is-hidden"); return; }
    try {
      const r = await fetch(CFG.cv, { method: "HEAD" });
      const type = r.headers.get("content-type") || "";
      if (r.ok && !type.includes("text/html")) btn.classList.remove("is-hidden");
    } catch (e) { /* CV absent : bouton masqué */ }
  }

  /* ------------------------------- Init -------------------------------- */
  paintIcons();
  renderAll();
  observeReveals();
  firstRender = false;
  startTyping();
  setupCounters();
  setupNav();
  setupToggles();
  setupProjects();
  setupContact();
  setupLinks();
  setupPhoto();
  setupCv();
  field = NeuralField($("#neuralCanvas"));
})();
