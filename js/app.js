/* ==========================================================================
   UNION 250 — application logic
   Everything is stored in localStorage on this device. No account, no server.
   ========================================================================== */
(function () {
"use strict";

/* ---------- constants ---------- */
const RUN_DAYS   = 250;   // level one: one logged day per year, 1776 → 2026
const LEVEL2_END = 500;   // level two: fifty American inventions, one per five days
const PER_UNLOCK = 5;     // five logged days admits one state
const PEAK       = 3300;  // points at which a metric is "unrivalled"
const KEY        = "union250.v1";

const POINTS = { gold: 30, silver: 15, bronze: 5, flat: 0, relapse: -30 };

const TIER_META = {
  gold:    { label: "Perfect day",  cls: "gold",    blurb: "Clean, and under your best target." },
  silver:  { label: "Great day",    cls: "silver",  blurb: "Clean, with screen time well in hand." },
  bronze:  { label: "Good day",     cls: "bronze",  blurb: "Clean, and inside the outer target." },
  flat:    { label: "Logged",       cls: "flat",    blurb: "Clean, but the screen won today." },
  relapse: { label: "Reset day",    cls: "relapse", blurb: "It happened. Tomorrow starts at zero again." },
};

/* ---------------------------------------------------------------------------
   THE SIX METRICS — a journey, not a scoreboard.

   Every metric starts at the world floor: roughly where the weakest-performing
   country sits today. Discipline builds it upward. At 250 flawless days it
   reaches the United States' real, published figure for 2026 — and beyond that,
   Level 2 pushes past what America has actually achieved.

   The real figures and their sources appear on every card and are fixed
   published data. Your points move the projection only. Verified August 2026.
   --------------------------------------------------------------------------- */
const MID_POINTS = 7500;         // 250 flawless days → America as it really is
const MAX_POINTS = 15000;        // 500 flawless days → beyond it

const METRICS = [
  {
    key: "gdp", name: "GDP", icon: "M4 20V11M10 20V4M16 20v-6M22 20H2",
    indicator: "Nominal GDP",
    source: "IMF World Economic Outlook, April 2026",
    start: 0.05, real: 32.38, peak: 50, dp: 2, pre: "$", suf: "T", better: "high",
    rank: 1, of: 192, leader: "United States",
    startNote: "The world's median economy — about $54 billion.",
    peakNote: "$50T would be roughly 40% of all world output.",
    context: "The United States is the world's largest economy by nominal GDP at $32.38 trillion — about a quarter of the $125 trillion world total, and larger than the next two economies combined."
  },
  {
    key: "hdi", name: "Human Development", icon: "M12 21s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.4-7 10-7 10z",
    indicator: "Human Development Index",
    source: "UNDP Human Development Report 2025 (2023 values)",
    start: 0.300, real: 0.938, peak: 1.000, dp: 3, pre: "", suf: "", better: "high",
    rank: 18, of: 193, leader: "Iceland (0.972)",
    startNote: "Around the lowest score recorded anywhere in the world.",
    peakNote: "1.000 is the theoretical maximum. Iceland leads today at 0.972.",
    context: "The HDI combines life expectancy, schooling and income. America scores 0.938 and ranks 18th. Adjusted for inequality it falls to 29th — the steepest drop of any country in the top 20."
  },
  {
    key: "mil", name: "Military Power", icon: "M12 2l8 3.5v6c0 5-3.4 9.2-8 10.5-4.6-1.3-8-5.5-8-10.5v-6z",
    indicator: "Global Firepower Power Index",
    source: "Global Firepower, 2026 review",
    start: 6.0, real: 0.0741, peak: 0, dp: 4, pre: "", suf: "", better: "low",
    rank: 1, of: 145, leader: "United States",
    startNote: "Around where the weakest of the 145 ranked nations sit. Lower is stronger.",
    peakNote: "Global Firepower defines 0.0000 as perfect — no nation has reached it.",
    context: "Global Firepower weighs more than 60 factors — manpower, air and naval strength, logistics, finance and geography. America has ranked first for over a decade, ahead of Russia and China."
  },
  {
    key: "rep", name: "Global Reputation", icon: "M12 3a9 9 0 100 18 9 9 0 000-18zM3.5 9h17M3.5 15h17M12 3c2.5 2.6 3.8 5.8 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.8-3.8-9S9.5 5.6 12 3z",
    indicator: "Global Soft Power Index",
    source: "Brand Finance, 2026 (150,000+ respondents, 100+ countries)",
    start: 15.0, real: 74.9, peak: 100, dp: 1, pre: "", suf: "/100", better: "high",
    rank: 1, of: 193, leader: "United States",
    startNote: "Around the score of the lowest-ranked of the 193 nation brands.",
    peakNote: "100 is the index maximum — a perfect global reputation.",
    context: "America still holds first place at 74.9, but recorded the steepest fall of all 193 nation brands in 2026 — down 4.6 points, with China now within 1.5 points. On the Reputation pillar alone it sits 26th."
  },
  {
    key: "tech", name: "Technology", icon: "M9 3h6v3h3v6h3v6H3v-6h3V6h3zM12 9v6",
    indicator: "Global Innovation Index",
    source: "WIPO Global Innovation Index 2025",
    start: 15.0, real: 61.7, peak: 70, dp: 1, pre: "", suf: "/100", better: "high",
    rank: 3, of: 139, leader: "Switzerland (66.0)",
    startNote: "Around the score of the lowest-ranked of the 139 economies.",
    peakNote: "70 would put America clear of Switzerland, which leads today at 66.0.",
    context: "The GII scores about 80 indicators, from R&D spending and venture capital to patent filings. America ranks 3rd behind Switzerland and Sweden, and holds 22 of the world's top science and technology clusters."
  },
  {
    key: "edu", name: "Education", icon: "M12 4L2 9l10 5 10-5zM6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5",
    indicator: "PISA mean score",
    source: "OECD PISA 2022 (maths, reading, science)",
    start: 329, real: 489, peak: 600, dp: 0, pre: "", suf: "", better: "high",
    rank: 16, of: 81, leader: "Singapore (~560)",
    startNote: "The lowest national mean recorded in PISA 2022.",
    peakNote: "600 would put America above Singapore, the world's best at roughly 560.",
    context: "Fifteen-year-olds in America average 465 in maths (34th of 81), 504 in reading (7th) and 499 in science (16th). Maths is the weak link: the 2022 result was the lowest ever recorded for the US."
  },
];

/* Progress runs 0 → 1 (the world floor up to America's real figure) and then
   1 → 2 (past it). */
function metricT(pts) { return clamp(pts / MID_POINTS, 0, 2); }
function overallProgress(pts) { return clamp(pts / MAX_POINTS, 0, 1); }

function metricValue(m, pts) {
  const t = metricT(pts);
  return t <= 1 ? m.start + t * (m.real - m.start)
                : m.real + (t - 1) * (m.peak - m.real);
}

function fmtMetric(m, v) {
  const n = v.toFixed(m.dp);
  return m.pre + (m.dp === 0 ? Number(n).toLocaleString() : n) + m.suf;
}

// Rank climbs from last place, reaches America's real rank at the halfway mark,
// then closes on first place.
function metricRank(m, pts) {
  const t = metricT(pts);
  if (t <= 1) return Math.max(m.rank, Math.round(m.of - t * (m.of - m.rank)));
  return Math.max(1, Math.round(m.rank - (t - 1) * (m.rank - 1)));
}

function metricTierName(t) {
  if (t >= 2) return "Beyond America";
  if (t > 1) return "Past the real figure";
  if (t === 1) return "America, as it is";
  if (t >= 0.75) return "Closing on the real figure";
  if (t >= 0.45) return "Rising fast";
  if (t >= 0.2) return "Building";
  if (t >= 0.05) return "Breaking ground";
  return "The floor";
}

// Overall standing, keyed to the share of every gap closed.
const RANKS = [
  [0.92, 1], [0.80, 2], [0.68, 3], [0.56, 4], [0.45, 5], [0.35, 6],
  [0.26, 7], [0.18, 8], [0.11, 9], [0.06, 10], [0.02, 11], [-1, 12],
];

const ACCENTS = [
  { name: "Old Glory Blue", dark: "#2E62E0", light: "#1B3A8F", ink: "#FFFFFF", lightInk: "#FFFFFF" },
  { name: "Old Glory Red",  dark: "#E03B52", light: "#B3122A", ink: "#FFFFFF", lightInk: "#FFFFFF" },
  { name: "Liberty Gold",   dark: "#E8B33C", light: "#8A5D0B", ink: "#231700", lightInk: "#FFFFFF" },
  { name: "Liberty Patina", dark: "#3FB3A0", light: "#1F7B6B", ink: "#04140F", lightInk: "#FFFFFF" },
  { name: "Purple Mountain",dark: "#9184DC", light: "#5B4BA8", ink: "#12061F", lightInk: "#FFFFFF" },
];

const TIP_ICONS = {
  wave:  "M2 12c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2.2 5-.8M2 17c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2.2 5-.8",
  door:  "M14 3H6v18h8M14 3l4 2v14l-4 2M11 12h.01",
  phone: "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2",
  run:   "M13 4a1.8 1.8 0 100-.1M8 21l3-6-2-3 1-5 3 2 3 1M6 12l3-3M14 13l3 3 1 4",
  people:"M17 20v-1.5a3.5 3.5 0 00-3.5-3.5h-5A3.5 3.5 0 005 18.5V20M11 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7M21 20v-1.5a3.5 3.5 0 00-2.6-3.4M16 4.1a3.5 3.5 0 010 6.8",
  star:  "M12 3l2.7 5.7 6.3.9-4.6 4.4 1.1 6.2-5.5-2.9-5.5 2.9 1.1-6.2L3 9.6l6.3-.9z",
};

/* ---------- tiny helpers ---------- */
const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const pad2 = n => (n < 10 ? "0" : "") + n;

function iso(d) { return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
function fromIso(s) { const p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
function todayIso() { return iso(new Date()); }
function addDays(s, n) { const d = fromIso(s); d.setDate(d.getDate() + n); return iso(d); }
function daysBetween(a, b) { return Math.round((fromIso(b) - fromIso(a)) / 864e5); }

function fmtHrs(h) {
  const m = Math.round(h * 60);
  return Math.floor(m / 60) + "h " + pad2(m % 60) + "m";
}
function fmtHrsShort(h) {
  if (h == null) return "—";
  const m = Math.round(h * 60);
  return m % 60 === 0 ? Math.floor(m / 60) + "h" : Math.floor(m / 60) + "h" + pad2(m % 60);
}
function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
const MON = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MON_S = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DOW = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function prettyDate(s) {
  const d = fromIso(s);
  return DOW[d.getDay()] + ", " + MON_S[d.getMonth()] + " " + d.getDate();
}

/* ---------- state ---------- */
const DEFAULTS = {
  version: 1,
  startDate: todayIso(),
  name: "",
  entries: {},                                  // { "2026-08-12": {clean:bool, screen:number, note:string} }
  targets: { gold: 2, silver: 3, bronze: 4 },
  theme: "dark",
  accent: 0,
  sound: true,
  motion: true,
  confirmSave: false,
  seenUnlocks: 1,                               // DC counts as already seen
  finaleSeen: false,
  finale2Seen: false,
};

let S = load();
let draft = { clean: null, screen: 2, note: "", date: todayIso() };
let calMode = "month";
let calCursor = new Date();
let chartRange = 7;

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return Object.assign({}, DEFAULTS, { entries: {} });
    const p = JSON.parse(raw);
    const s = Object.assign({}, DEFAULTS, p);
    s.targets = Object.assign({}, DEFAULTS.targets, p.targets || {});
    s.entries = p.entries || {};
    return s;
  } catch (e) {
    console.warn("Could not read saved data:", e);
    return Object.assign({}, DEFAULTS, { entries: {} });
  }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); }
  catch (e) { toast("Could not save — your browser storage may be full."); }
}

/* ---------- scoring ---------- */
function tierOf(entry) {
  if (!entry) return null;
  if (!entry.clean) return "relapse";
  const t = S.targets;
  if (entry.screen < t.gold) return "gold";
  if (entry.screen < t.silver) return "silver";
  if (entry.screen < t.bronze) return "bronze";
  return "flat";
}
function loggedDates() { return Object.keys(S.entries).sort(); }
function loggedCount() { return Object.keys(S.entries).length; }

function totalPoints() {
  let p = 0;
  for (const k in S.entries) p += POINTS[tierOf(S.entries[k])];
  return Math.max(0, p);
}
// Overall standing follows the average share of every gap closed.
function worldRank(pts) {
  // Completing the Union is the stated win condition: day 250 crowns the nation
  // outright. The per-metric ranks on each card stay honest and gap-driven.
  if (loggedCount() >= RUN_DAYS) return 1;
  const g = overallProgress(pts);
  for (const [min, r] of RANKS) if (g >= min) return r;
  return 12;
}

function unlockedCount() { return Math.min(50, Math.floor(loggedCount() / PER_UNLOCK)); }
function isUnlocked(st) { return st.order === 0 || st.order <= unlockedCount(); }
function statesByOrder() { return STATE_DATA.slice().sort((a, b) => a.order - b.order); }
function stateByCode(c) { return STATE_DATA.find(s => s.code === c); }

/* ---------- levels ---------- */
// Level 1 fills the map with states. Finishing it opens Level 2, which fills
// the Hall of Innovation with the same five-days-per-unlock rhythm.
function level() { return loggedCount() >= RUN_DAYS ? 2 : 1; }
function levelDay() {
  const n = loggedCount();
  return level() === 2 ? Math.min(n - RUN_DAYS, RUN_DAYS) : n;
}
function invUnlockedCount() {
  return clamp(Math.floor((loggedCount() - RUN_DAYS) / PER_UNLOCK), 0, 50);
}
function inventionsByOrder() { return INVENTION_DATA.slice().sort((a, b) => a.order - b.order); }
function invById(id) { return INVENTION_DATA.find(i => i.id === +id); }
function isInvUnlocked(iv) { return iv.order <= invUnlockedCount(); }
function runComplete() { return loggedCount() >= LEVEL2_END; }

function cleanStreak() {
  let n = 0, d = todayIso();
  if (!S.entries[d]) d = addDays(d, -1);      // today not logged yet is not a break
  while (S.entries[d] && S.entries[d].clean) { n++; d = addDays(d, -1); }
  return n;
}
function bestStreak() {
  const ds = loggedDates();
  let best = 0, cur = 0, prev = null;
  for (const d of ds) {
    const consecutive = prev !== null && daysBetween(prev, d) === 1;
    cur = S.entries[d].clean ? (consecutive ? cur + 1 : 1) : 0;
    if (cur > best) best = cur;
    prev = d;
  }
  return best;
}
function avgScreen(list) {
  const ds = list || loggedDates();
  if (!ds.length) return null;
  let t = 0; for (const d of ds) t += S.entries[d].screen;
  return t / ds.length;
}

/* ---------- theme ---------- */
function applyTheme() {
  const t = S.theme === "auto"
    ? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
    : S.theme;
  document.documentElement.setAttribute("data-theme", t);
  document.documentElement.setAttribute("data-motion", S.motion ? "on" : "off");

  const a = ACCENTS[S.accent] || ACCENTS[0];
  const root = document.documentElement.style;
  root.setProperty("--accent", t === "light" ? a.light : a.dark);
  root.setProperty("--accent-ink", t === "light" ? a.lightInk : a.ink);

  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t === "light" ? "#EFE9DA" : "#0A1024");

  const btn = $("#themeBtn");
  btn.title = btn.ariaLabel = t === "light" ? "Switch to dark mode" : "Switch to light mode";
  applyTrackGradient();
}
function applyTrackGradient() {
  const r = document.documentElement.style, t = S.targets;
  r.setProperty("--g1", (t.gold / 16 * 100) + "%");
  r.setProperty("--g2", (t.silver / 16 * 100) + "%");
  r.setProperty("--g3", (t.bronze / 16 * 100) + "%");
}
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
  if (S.theme === "auto") applyTheme();
});

/* ---------- toast ---------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------- sound ---------- */
function fanfare() {
  if (!S.sound) return;
  const a = $("#sfx");
  a.src = "assets/stars.mp3";
  a.currentTime = 0;
  a.volume = 0.55;
  const p = a.play();
  if (p && p.catch) p.catch(() => {});
  setTimeout(() => {
    let v = a.volume;
    const f = setInterval(() => {
      v -= 0.06;
      if (v <= 0) { a.pause(); clearInterval(f); } else a.volume = v;
    }, 60);
  }, 6000);
}

/* ==========================================================================
   TODAY
   ========================================================================== */
function renderToday() {
  const logged = loggedCount();
  const pts = totalPoints();
  const lv = level();
  const inHall = lv === 2;

  $("#brandSub").textContent = "Day " + logged + " of " + LEVEL2_END;
  $("#levelBadge").innerHTML = inHall
    ? "<i></i>Level 2 &middot; The Hall of Innovation"
    : "<i></i>Level 1 &middot; The Union";

  const invOn = invUnlockedCount();
  if (inHall) {
    const latest = invOn > 0 ? inventionsByOrder()[invOn - 1] : null;
    $("#heroEyebrow").textContent = latest ? "American ingenuity, " : "The Hall opens at";
    $("#yearDisplay").textContent = latest ? latest.year.replace(/[^0-9–-]/g, "").slice(-4) || latest.sortYear : "1752";
  } else {
    $("#heroEyebrow").textContent = "The year is";
    $("#yearDisplay").textContent = 1776 + Math.min(logged, RUN_DAYS);
  }

  const hi = S.name ? esc(S.name) + ", y" : "Y";
  let line;
  if (runComplete()) {
    line = "500 days. Fifty states, fifty inventions, one capital. There is nothing left locked.";
  } else if (inHall) {
    const left = LEVEL2_END - logged;
    line = "<b>" + invOn + " of 50</b> inventions are lit. <b>" + left + "</b> day" + (left === 1 ? "" : "s") + " left in the Hall.";
  } else if (!logged) {
    line = hi + "ou start at the founding. Log tonight and the republic begins.";
  } else {
    const left = RUN_DAYS - logged;
    line = "<b>" + unlockedCount() + " of 50</b> states have joined. <b>" + left + "</b> day" + (left === 1 ? "" : "s") + " to go.";
  }
  $("#heroLine").innerHTML = line;

  $("#statStreak").textContent = cleanStreak();
  $("#statStates").textContent = inHall ? invOn + " / 50" : unlockedCount() + 1;
  $$(".stat")[1].querySelector("span").textContent = inHall ? "Inventions lit" : "States in Union";
  $("#statLogged").textContent = logged;
  const avg = avgScreen();
  $("#statAvg").textContent = avg == null ? "—" : fmtHrsShort(avg);

  renderRibbon();
  renderMetrics(pts);
  renderNextUnlock();
  renderLogPanel();
}

function renderRibbon() {
  const svg = $("#ribbon");
  const all = loggedDates();
  const off = level() === 2 ? RUN_DAYS : 0;
  const ds = all.slice(off);
  const scale = $(".ribbon-scale");
  if (scale) scale.innerHTML = level() === 2
    ? "<span>Day 251</span><span>Day 375</span><span>Day 500</span>"
    : "<span>1776</span><span>1901</span><span>2026</span>";
  const W = 1000, n = RUN_DAYS, w = W / n, gap = w * 0.24;
  let out = "";
  for (let i = 0; i < n; i++) {
    const d = ds[i];
    const t = d ? tierOf(S.entries[d]) : null;
    const x = (i * w).toFixed(2);
    const bw = (w - gap).toFixed(2);
    if (t) {
      const h = t === "relapse" ? 20 : t === "flat" ? 22 : t === "bronze" ? 28 : t === "silver" ? 34 : 42;
      out += '<rect x="' + x + '" y="' + (44 - h) + '" width="' + bw + '" height="' + h +
             '" rx="' + Math.min(1.6, w / 3).toFixed(2) + '" fill="var(--' + t + ')"><title>Day ' +
             (off + i + 1) + " · " + prettyDate(d) + " · " + TIER_META[t].label + '</title></rect>';
    } else {
      out += '<rect x="' + x + '" y="40" width="' + bw + '" height="4" rx="1" fill="var(--line)"/>';
    }
    if ((i + 1) % PER_UNLOCK === 0 && i < 250) {
      const filled = i < ds.length;
      out += '<circle cx="' + (+x + (w - gap) / 2).toFixed(2) + '" cy="1.6" r="1.5" fill="' +
             (filled ? "var(--brass)" : "var(--line)") + '"/>';
    }
  }
  svg.innerHTML = out;
}

function renderMetrics(pts) {
  const rank = worldRank(pts);
  const t = metricT(pts);
  const prog = overallProgress(pts) * 100;

  $("#rankBadge").textContent = "#" + rank + " in the world";
  $("#indexFill").style.width = (runComplete() ? 100 : prog) + "%";
  $("#indexNum").textContent = t >= 1
    ? (t === 1 ? "America, as it really is" : ((t - 1) * 100).toFixed(0) + "% beyond America")
    : (t * 100).toFixed(1) + "% to the real America";
  $("#indexCap").textContent = "National Power Index · halfway is America as it is today";

  $("#metrics").innerHTML = METRICS.map(m => {
    const v = metricValue(m, pts);
    const r = metricRank(m, pts);
    return '<button class="metric' + (t > 1 ? " is-past" : "") + '" data-metric="' + m.key +
      '" aria-label="' + esc(m.name) + ' — tap for detail">' +
      '<span class="metric-top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + m.icon + '"/></svg>' +
      '<span class="metric-name">' + m.name + "</span></span>" +
      '<span class="metric-val">' + fmtMetric(m, v) + "</span>" +
      '<span class="metric-sub">' + m.indicator + " &middot; real " + fmtMetric(m, m.real) + "</span>" +
      '<span class="metric-track"><i style="width:' + clamp(prog, 0, 100) + '%"></i>' +
      '<b class="metric-mid"></b></span>' +
      '<span class="metric-foot"><span class="metric-rank">#' + r + " of " + m.of + "</span>" +
      '<span class="metric-tier">' + metricTierName(t) + "</span></span></button>";
  }).join("");
}

function openMetric(key) {
  const m = METRICS.find(x => x.key === key);
  if (!m) return;
  const pts = totalPoints();
  const v = metricValue(m, pts);
  const t = metricT(pts);
  const prog = overallProgress(pts) * 100;
  const dir = m.better === "low" ? "Lower is stronger." : "Higher is better.";

  $("#sheetScroll").innerHTML =
    '<div class="metric-sheet">' +
      '<span class="dos-cat">' + esc(m.indicator) + "</span>" +
      '<h2 class="dos-name" id="sheetName">' + esc(m.name) + "</h2>" +
      '<p class="ms-source">' + esc(m.source) + "</p>" +

      '<div class="ms-scale">' +
        '<div class="ms-row"><span>Where you began<i>' + esc(m.startNote) + "</i></span><b>" + fmtMetric(m, m.start) + "</b></div>" +
        '<div class="ms-row is-you"><span>Your projection now</span><b>' + fmtMetric(m, v) + "</b></div>" +
        '<div class="ms-row is-real"><span>United States today<i>The real published figure — reached at day 250 of flawless logging.</i></span><b>' + fmtMetric(m, m.real) + "</b></div>" +
        '<div class="ms-row"><span>Beyond America<i>' + esc(m.peakNote) + "</i></span><b>" + fmtMetric(m, m.peak) + "</b></div>" +
      "</div>" +

      '<div class="ms-bar"><i style="width:' + prog + '%"></i><b class="ms-mid"></b></div>' +
      '<p class="ms-pct">' + (t >= 1
        ? (t === 1 ? "You have reached the real America." : "You are past the real America.")
        : (t * 100).toFixed(1) + "% of the way to the real America") +
        " &middot; " + dir + "</p>" +

      '<div class="dos-meta">' +
        "<div><b>#" + metricRank(m, pts) + "</b><span>Your rank now</span></div>" +
        "<div><b>#" + m.rank + "</b><span>America's real rank</span></div>" +
        "<div><b>" + m.of + "</b><span>Countries ranked</span></div>" +
      "</div>" +

      "<p>" + esc(m.context) + "</p>" +
      '<p class="ms-target"><b>The standard.</b> You start at the world floor and build upward. ' +
      "250 flawless days (" + MID_POINTS.toLocaleString() + " points) reaches America's real figure of " +
      fmtMetric(m, m.real) + ". The next 250 push beyond it.</p>" +
      '<p class="ms-note">World leader today: ' + esc(m.leader) + ". The real figures above are fixed, " +
      "published data. Your points move the projection and nothing else.</p>" +
    "</div>";
  $("#sheetScroll").scrollTop = 0;
  $("#sheetScrim").hidden = false;
  document.body.style.overflow = "hidden";
  $("#sheetClose").focus();
}

function renderNextUnlock() {
  const el = $("#nextUnlock");
  const head = el.closest(".panel").querySelector("h2");

  if (runComplete()) {
    head.textContent = "Nothing left to unlock";
    el.innerHTML = '<div class="seal"><b>500</b><span>days</span></div>' +
      '<div class="nu-txt"><b>Everything is open</b><span>Fifty states, fifty inventions and the capital. ' +
      "Keep logging if it helps you — the habit outlasts the game.</span></div>";
    return;
  }

  const inHall = level() === 2;
  head.textContent = inHall ? "Next invention to light up" : "Next state to join";
  const into = loggedCount() % PER_UNLOCK;
  const need = PER_UNLOCK - into;

  if (inHall) {
    const next = inventionsByOrder()[invUnlockedCount()];
    if (!next) { el.innerHTML = '<div class="seal"><b>50</b><span>lit</span></div>' +
      '<div class="nu-txt"><b>The Hall is full</b><span>All fifty inventions are lit.</span></div>'; return; }
    el.innerHTML =
      '<div class="seal"><b>' + into + "/" + PER_UNLOCK + "</b><span>days</span></div>" +
      '<div class="nu-txt" style="flex:1;min-width:0"><b>' + esc(next.name) + "</b>" +
      "<span>" + esc(next.year) + " &middot; <b style='display:inline;font-family:inherit;font-size:inherit'>" +
      need + " more logged day" + (need === 1 ? "" : "s") + "</b> and it lights up.</span>" +
      '<div class="nu-bar"><i style="width:' + (into / PER_UNLOCK * 100) + '%"></i></div></div>';
    return;
  }

  const u = unlockedCount();
  if (u >= 50) {
    el.innerHTML = '<div class="seal"><b>50</b><span>states</span></div>' +
      '<div class="nu-txt"><b>All fifty, seated</b><span>Log one more day to finish Level 1 and open the Hall of Innovation.</span></div>';
    return;
  }
  const next = statesByOrder()[u + 1];
  el.innerHTML =
    '<div class="seal"><b>' + into + "/" + PER_UNLOCK + "</b><span>days</span></div>" +
    '<div class="nu-txt" style="flex:1;min-width:0"><b>' + esc(next.name) + "</b>" +
    "<span>Joined the Union in " + next.year + ". <b style='display:inline;font-family:inherit;font-size:inherit'>" +
    need + " more logged day" + (need === 1 ? "" : "s") + "</b> and it joins your map.</span>" +
    '<div class="nu-bar"><i style="width:' + (into / PER_UNLOCK * 100) + '%"></i></div></div>';
}

function renderLogPanel() {
  const d = draft.date;
  const existing = S.entries[d];
  const isToday = d === todayIso();

  $("#logDate").textContent = isToday ? "Today · " + prettyDate(d) : prettyDate(d);
  $("#logPanel").querySelector("h2").textContent = isToday ? "Today's entry" : "Entry for " + MON_S[fromIso(d).getMonth()] + " " + fromIso(d).getDate();

  $$("[data-clean]").forEach(b => b.setAttribute("aria-pressed", String(draft.clean !== null && (+b.dataset.clean === 1) === draft.clean)));
  $("#screenRange").value = draft.screen;
  $("#screenOut").textContent = fmtHrs(draft.screen);
  $("#noteInput").value = draft.note || "";

  $$("#quickSet button").forEach(b => b.classList.toggle("is-on", +b.dataset.h === draft.screen));

  const v = $("#verdict");
  if (draft.clean === null) {
    v.innerHTML = '<div class="verdict-badge" style="background:var(--ink-4);color:var(--dim)">?</div>' +
      '<div class="verdict-txt"><b>Waiting on you</b><span>Answer the question above to see what this day is worth.</span></div>';
  } else {
    const t = tierOf({ clean: draft.clean, screen: draft.screen });
    const p = POINTS[t];
    v.innerHTML = '<div class="verdict-badge" style="background:var(--' + t + ');color:#fff">' +
      (p > 0 ? "+" : "") + p + "</div>" +
      '<div class="verdict-txt"><b>' + TIER_META[t].label + "</b><span>" + TIER_META[t].blurb +
      " Worth " + (p > 0 ? "+" : "") + p + " to all six metrics.</span></div>";
  }

  const btn = $("#saveBtn");
  const runFull = loggedCount() >= RUN_DAYS && !existing;
  btn.disabled = draft.clean === null || runFull;
  btn.classList.toggle("is-done", draft.clean === null || runFull);
  btn.textContent = runFull ? "Run complete — 250 days logged"
    : existing ? "Update this day" : isToday ? "Save the day" : "Save this day";
  $("#clearDayBtn").classList.toggle("hidden", !existing);
}

function loadDraft(date) {
  const e = S.entries[date];
  draft = {
    date: date,
    clean: e ? e.clean : null,
    screen: e ? e.screen : 2,
    note: e ? (e.note || "") : "",
  };
  renderLogPanel();
}

function saveDay() {
  if (draft.clean === null) return;
  if (S.confirmSave) {
    const t = tierOf({ clean: draft.clean, screen: draft.screen });
    if (!confirm(prettyDate(draft.date) + "\n" +
      (draft.clean ? "Stayed clean" : "Relapsed") + " · " + fmtHrs(draft.screen) +
      " of screen time\n" + TIER_META[t].label + " (" + (POINTS[t] > 0 ? "+" : "") + POINTS[t] + " points)\n\nSave this?")) return;
  }

  const beforeStates = unlockedCount();
  const beforeInv = invUnlockedCount();
  const beforeLevel = level();
  const isNew = !S.entries[draft.date];

  S.entries[draft.date] = { clean: draft.clean, screen: draft.screen, note: draft.note.trim() };
  save();
  renderAll();

  const afterStates = unlockedCount();
  const afterInv = invUnlockedCount();

  // Level 1 finishing takes priority: it is the moment the Hall opens.
  if (beforeLevel === 1 && level() === 2 && !S.finaleSeen) { showFinale(); return; }
  if (runComplete() && !S.finale2Seen) { showFinale(true); return; }
  if (afterStates > beforeStates) { showUnlock(statesByOrder()[afterStates]); return; }
  if (afterInv > beforeInv) { showUnlock(null, inventionsByOrder()[afterInv - 1]); return; }

  const t = tierOf(S.entries[draft.date]);
  const into = loggedCount() % PER_UNLOCK;
  const need = PER_UNLOCK - into;
  toast(isNew
    ? TIER_META[t].label + " saved. " + (into === 0 ? "" : need + " day" + (need === 1 ? "" : "s") + " to the next unlock.")
    : "Entry updated.");
}

function removeDay() {
  if (!S.entries[draft.date]) return;
  if (!confirm("Remove the entry for " + prettyDate(draft.date) + "?\n\nThis may lock a state again if it drops you below a 5-day mark.")) return;
  delete S.entries[draft.date];
  S.seenUnlocks = Math.min(S.seenUnlocks, unlockedCount() + 1);
  save();
  loadDraft(draft.date);
  renderAll();
  toast("Entry removed.");
}

/* ==========================================================================
   CALENDAR
   ========================================================================== */
function renderCalendar() {
  const body = $("#calBody"), title = $("#calTitle");
  const today = todayIso();

  if (calMode === "month") {
    const y = calCursor.getFullYear(), m = calCursor.getMonth();
    title.textContent = MON[m] + " " + y;
    const first = new Date(y, m, 1), lead = first.getDay();
    const len = new Date(y, m + 1, 0).getDate();

    let html = '<div class="dow">' + ["S","M","T","W","T","F","S"].map(d => "<span>" + d + "</span>").join("") + "</div>";
    html += '<div class="grid-month">';
    for (let i = 0; i < lead; i++) html += '<div class="cell is-empty"></div>';
    for (let d = 1; d <= len; d++) {
      const key = y + "-" + pad2(m + 1) + "-" + pad2(d);
      html += cellHtml(key, d, today);
    }
    html += "</div>";
    body.innerHTML = html;

    const keys = [];
    for (let d = 1; d <= len; d++) keys.push(y + "-" + pad2(m + 1) + "-" + pad2(d));
    renderCalSummary(keys, "this month");

    $("#calNext").disabled = new Date(y, m, 1) >= new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    $("#calPrev").disabled = false;
  }

  else if (calMode === "week") {
    const c = new Date(calCursor);
    c.setDate(c.getDate() - c.getDay());
    const days = [];
    for (let i = 0; i < 7; i++) { const d = new Date(c); d.setDate(c.getDate() + i); days.push(iso(d)); }
    title.textContent = MON_S[fromIso(days[0]).getMonth()] + " " + fromIso(days[0]).getDate() +
      " – " + MON_S[fromIso(days[6]).getMonth()] + " " + fromIso(days[6]).getDate();

    body.innerHTML = '<div class="grid-week">' + days.map(k => {
      const e = S.entries[k], t = tierOf(e), d = fromIso(k);
      const cls = k > today ? " is-future" : k < S.startDate ? " is-pre" : "";
      return '<button class="wk-row' + cls + '" data-day="' + k + '">' +
        '<i class="wk-dot"' + (t ? ' style="background:var(--' + t + ')"' : "") + "></i>" +
        '<span class="wk-day"><b>' + DOW[d.getDay()] + "</b><span>" +
        (e ? (e.clean ? "Stayed clean" : "Relapsed") + " · " + TIER_META[t].label
           : k > today ? "Not here yet" : k < S.startDate ? "Before day 1" : "Not logged") +
        "</span></span>" +
        '<span class="wk-hrs' + (e ? "" : " none") + '">' + (e ? fmtHrsShort(e.screen) : "—") + "</span></button>";
    }).join("") + "</div>";

    renderCalSummary(days, "this week");
    $("#calNext").disabled = days[0] > today;
    $("#calPrev").disabled = false;
  }

  else {
    const ds = loggedDates();
    title.textContent = "The whole run";
    let html = '<div class="grid-year">';
    for (let i = 0; i < RUN_DAYS; i++) {
      const k = ds[i], t = k ? tierOf(S.entries[k]) : null;
      const star = (i + 1) % PER_UNLOCK === 0 ? " is-star" : "";
      html += '<div class="ycell' + (t ? " t-" + t : "") + star + '" title="Day ' + (i + 1) +
        (k ? " · " + prettyDate(k) + " · " + TIER_META[t].label : " · not logged yet") + '"></div>';
    }
    html += "</div>";
    body.innerHTML = html;
    renderCalSummary(ds, "so far");
    $("#calNext").disabled = true;
    $("#calPrev").disabled = true;
  }
}

function cellHtml(key, dayNum, today) {
  const e = S.entries[key], t = tierOf(e);
  let cls = "cell";
  if (t) cls += " has-data t-" + t;
  if (key === today) cls += " is-today";
  if (key > today) cls += " is-future";
  else if (key < S.startDate) cls += " is-pre";
  const idx = loggedDates().indexOf(key);
  const star = idx >= 0 && (idx + 1) % PER_UNLOCK === 0 ? '<span class="cell-star">★</span>' : "";
  return '<button class="' + cls + '" data-day="' + key + '" title="' +
    (e ? prettyDate(key) + " · " + TIER_META[t].label + " · " + fmtHrs(e.screen) : prettyDate(key)) + '">' +
    star + '<span class="cell-n">' + dayNum + "</span>" +
    (e ? '<span class="cell-h">' + fmtHrsShort(e.screen) + "</span>" : "") + "</button>";
}

function renderCalSummary(keys, label) {
  const has = keys.filter(k => S.entries[k]);
  const clean = has.filter(k => S.entries[k].clean).length;
  const avg = has.length ? has.reduce((a, k) => a + S.entries[k].screen, 0) / has.length : null;
  let pts = 0; for (const k of has) pts += POINTS[tierOf(S.entries[k])];
  $("#calSummary").innerHTML =
    '<div class="cs"><b>' + has.length + "</b><span>Days logged " + label + "</span></div>" +
    '<div class="cs"><b>' + clean + "</b><span>Clean days</span></div>" +
    '<div class="cs"><b>' + (avg == null ? "—" : fmtHrsShort(avg)) + "</b><span>Avg screen</span></div>" +
    '<div class="cs"><b style="color:var(--' + (pts >= 0 ? "patina" : "flare") + ')">' + (pts > 0 ? "+" : "") + pts + "</b><span>Points earned</span></div>";
}

/* ==========================================================================
   PROGRESS
   ========================================================================== */
function renderProgress() {
  renderBarChart();
  renderBreakdown();
  renderLineChart();
  renderRecords();
}

function emptySvg(svg, msg) {
  const vb = svg.getAttribute("viewBox").split(" ");
  svg.innerHTML = '<text x="' + (+vb[2] / 2) + '" y="' + (+vb[3] / 2) +
    '" text-anchor="middle" style="font-family:var(--f-body);font-size:24px;fill:var(--dim)">' + msg + "</text>";
}

function renderBarChart() {
  const svg = $("#barChart");
  const today = todayIso();
  let keys = [];

  if (chartRange === 250) {
    keys = loggedDates();
  } else {
    for (let i = chartRange - 1; i >= 0; i--) keys.push(addDays(today, -i));
  }
  const data = keys.map(k => ({ key: k, e: S.entries[k] || null }));
  const withData = data.filter(d => d.e);

  if (!withData.length) {
    emptySvg(svg, "Save a day and the bars appear here.");
    $("#chartLegend").innerHTML = "";
    return;
  }

  const W = 720, H = 300, padL = 56, padR = 12, padT = 16, padB = 40;
  const iw = W - padL - padR, ih = H - padT - padB;
  const maxV = Math.max(S.targets.bronze + 1, ...withData.map(d => d.e.screen));
  const top = Math.ceil(maxV);
  const y = v => padT + ih - (v / top) * ih;
  const n = data.length;
  const bw = iw / n;
  const gap = Math.min(bw * 0.28, 5);

  let g = "";
  // horizontal gridlines
  const step = top <= 4 ? 1 : top <= 8 ? 2 : 4;
  for (let v = 0; v <= top; v += step) {
    g += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(v) + '" y2="' + y(v) +
      '" stroke="var(--line-2)" stroke-width="1"/>' +
      '<text x="' + (padL - 7) + '" y="' + (y(v) + 4) + '" text-anchor="end" style="font-family:var(--f-mono);font-size:19px;fill:var(--dim-2)">' + v + "h</text>";
  }
  // target lines
  [["gold", S.targets.gold], ["silver", S.targets.silver], ["bronze", S.targets.bronze]].forEach(([t, v]) => {
    if (v > top) return;
    g += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(v) + '" y2="' + y(v) +
      '" stroke="var(--' + t + ')" stroke-width="1.2" stroke-dasharray="5 4" opacity=".65"/>';
  });
  // bars
  data.forEach((d, i) => {
    const x = padL + i * bw + gap / 2;
    const w = Math.max(1.5, bw - gap);
    if (!d.e) {
      g += '<rect class="bar" x="' + x.toFixed(1) + '" y="' + (padT + ih - 3) + '" width="' + w.toFixed(1) +
        '" height="3" rx="1.5" fill="var(--line)"><title>' + prettyDate(d.key) + " · not logged</title></rect>";
      return;
    }
    const t = tierOf(d.e);
    const hgt = Math.max(3, padT + ih - y(d.e.screen));
    g += '<rect class="bar" x="' + x.toFixed(1) + '" y="' + y(d.e.screen).toFixed(1) + '" width="' + w.toFixed(1) +
      '" height="' + hgt.toFixed(1) + '" rx="' + Math.min(3, w / 2).toFixed(1) + '" fill="var(--' + t + ')">' +
      "<title>" + prettyDate(d.key) + " · " + fmtHrs(d.e.screen) + " · " + TIER_META[t].label + "</title></rect>";
  });
  // x labels
  const every = Math.max(1, Math.ceil(n / 10));
  data.forEach((d, i) => {
    if (i % every !== 0 && i !== n - 1) return;
    const dt = fromIso(d.key);
    g += '<text x="' + (padL + i * bw + bw / 2).toFixed(1) + '" y="' + (H - 13) +
      '" text-anchor="middle" style="font-family:var(--f-mono);font-size:18px;fill:var(--dim-2)">' +
      (chartRange <= 7 ? DOW[dt.getDay()][0] + dt.getDate() : MON_S[dt.getMonth()] + " " + dt.getDate()) + "</text>";
  });

  svg.innerHTML = g;
  const avg = withData.reduce((a, d) => a + d.e.screen, 0) / withData.length;
  $("#chartLegend").innerHTML =
    '<span><i style="background:var(--gold)"></i>Under ' + S.targets.gold + "h</span>" +
    '<span><i style="background:var(--silver)"></i>Under ' + S.targets.silver + "h</span>" +
    '<span><i style="background:var(--bronze)"></i>Under ' + S.targets.bronze + "h</span>" +
    '<span><i style="background:var(--flat)"></i>Over ' + S.targets.bronze + "h</span>" +
    '<span><i style="background:var(--relapse)"></i>Reset day</span>' +
    '<span style="color:var(--text)">Average ' + fmtHrs(avg) + "</span>";
}

function renderBreakdown() {
  const counts = { gold: 0, silver: 0, bronze: 0, flat: 0, relapse: 0 };
  for (const k in S.entries) counts[tierOf(S.entries[k])]++;
  const total = loggedCount();
  const el = $("#breakdown");
  if (!total) { el.innerHTML = '<p class="chart-empty">Nothing logged yet.</p>'; return; }
  const max = Math.max(...Object.values(counts));
  el.innerHTML = Object.keys(counts).map(t =>
    '<div class="bd-row"><span class="bd-name">' + TIER_META[t].label + "</span>" +
    '<span class="bd-track"><span class="bd-fill" style="width:' +
    (max ? counts[t] / max * 100 : 0) + "%;background:var(--" + t + ')"></span></span>' +
    '<span class="bd-num">' + counts[t] + " · " + Math.round(counts[t] / total * 100) + "%</span></div>"
  ).join("");
}

function renderLineChart() {
  const svg = $("#lineChart");
  const ds = loggedDates();
  if (ds.length < 2) {
    emptySvg(svg, "Log at least two days to see the curve.");
    return;
  }

  const W = 720, H = 240, padL = 74, padR = 14, padT = 18, padB = 34;
  const iw = W - padL - padR, ih = H - padT - padB;
  let run = 0;
  const pts = ds.map((k, i) => {
    run = Math.max(0, run + POINTS[tierOf(S.entries[k])]);
    return { i: i, v: run, k: k };
  });
  const top = Math.max(PEAK * 0.25, Math.ceil(Math.max(...pts.map(p => p.v)) / 100) * 100);
  const x = i => padL + (ds.length === 1 ? iw / 2 : (i / (RUN_DAYS - 1)) * iw);
  const y = v => padT + ih - (v / top) * ih;

  let g = "";
  for (let f = 0; f <= 4; f++) {
    const v = top * f / 4;
    g += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(v) + '" y2="' + y(v) +
      '" stroke="var(--line-2)"/><text x="' + (padL - 8) + '" y="' + (y(v) + 4) +
      '" text-anchor="end" style="font-family:var(--f-mono);font-size:19px;fill:var(--dim-2)">' + Math.round(v) + "</text>";
  }
  if (PEAK <= top) {
    g += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(PEAK) + '" y2="' + y(PEAK) +
      '" stroke="var(--brass)" stroke-dasharray="6 4" stroke-width="1.3"/>' +
      '<text x="' + (W - padR) + '" y="' + (y(PEAK) - 7) + '" text-anchor="end" style="font-family:var(--f-mono);font-size:18px;fill:var(--brass)">#1 in the world</text>';
  }
  const line = pts.map(p => x(p.i).toFixed(1) + "," + y(p.v).toFixed(1)).join(" ");
  const area = padL + "," + (padT + ih) + " " + line + " " + x(pts[pts.length - 1].i).toFixed(1) + "," + (padT + ih);
  g += '<polygon points="' + area + '" fill="var(--accent)" opacity=".14"/>';
  g += '<polyline points="' + line + '" fill="none" stroke="var(--accent)" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>';
  const last = pts[pts.length - 1];
  g += '<circle cx="' + x(last.i).toFixed(1) + '" cy="' + y(last.v).toFixed(1) + '" r="4.5" fill="var(--accent)" stroke="var(--ink-2)" stroke-width="2.5"/>';
  g += '<text x="' + padL + '" y="' + (H - 9) + '" style="font-family:var(--f-mono);font-size:18px;fill:var(--dim-2)">Day 1</text>';
  g += '<text x="' + (W - padR) + '" y="' + (H - 9) + '" text-anchor="end" style="font-family:var(--f-mono);font-size:18px;fill:var(--dim-2)">Day 250</text>';
  svg.innerHTML = g;
}

function renderRecords() {
  const ds = loggedDates();
  const el = $("#records");
  if (!ds.length) { el.innerHTML = '<p class="chart-empty">Records appear once you start logging.</p>'; return; }
  const screens = ds.map(k => S.entries[k].screen);
  const lowest = Math.min(...screens);
  const perfect = ds.filter(k => tierOf(S.entries[k]) === "gold").length;
  const cleanDays = ds.filter(k => S.entries[k].clean).length;
  const under = ds.filter(k => S.entries[k].screen < S.targets.bronze).length;
  const totalH = screens.reduce((a, b) => a + b, 0);

  el.innerHTML =
    rec(bestStreak(), "Longest clean streak") +
    rec(perfect, "Perfect days") +
    rec(Math.round(cleanDays / ds.length * 100) + "%", "Days stayed clean") +
    rec(fmtHrsShort(lowest), "Lowest screen day") +
    rec(under, "Days under " + S.targets.bronze + "h") +
    rec(Math.round(totalH) + "h", "Total screen time");
  function rec(v, l) { return '<div class="rec"><b>' + v + "</b><span>" + l + "</span></div>"; }
}

/* ==========================================================================
   MAP
   ========================================================================== */
function buildMap() {
  $("#mapFrame").innerHTML = US_MAP_SVG;
  $("#mapFrame").addEventListener("click", onMapTap);
  $("#mapFrame").addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onMapTap(e); }
  });
}
function onMapTap(e) {
  const el = e.target.closest("[data-code]");
  if (!el) return;
  const st = stateByCode(el.dataset.code);
  if (!st) return;
  if (!isUnlocked(st)) {
    const need = (st.order - unlockedCount()) * PER_UNLOCK - (loggedCount() % PER_UNLOCK);
    toast(st.name + " joins in " + need + " more logged day" + (need === 1 ? "" : "s") + ".");
    return;
  }
  openDossier(st);
}

function renderMap() {
  const u = unlockedCount();
  const newest = u > 0 ? statesByOrder()[u] : statesByOrder()[0];
  $$("#mapFrame [data-code]").forEach(el => {
    const st = stateByCode(el.dataset.code);
    if (!st) return;
    const on = isUnlocked(st);
    const isNew = st.code === newest.code && loggedCount() > 0;
    // D.C. is a wrapper <g> around a leader line, halo and dot; everything else is a plain path
    const shape = el.classList.contains("st") ? el : el.querySelector(".dc-dot");
    if (shape) {
      shape.classList.toggle("unlocked", on);
      shape.classList.toggle("locked", !on);
      shape.classList.toggle("newest", on && isNew);
    }
    el.setAttribute("aria-label", st.name + (on ? " — joined, tap to read" : " — not yet joined"));
  });
  $("#rollCount").textContent = (u + 1) + " / 51";

  const ordered = statesByOrder();
  const open = ordered.filter(isUnlocked);
  const upcoming = ordered.filter(st => !isUnlocked(st)).slice(0, 3);
  const hidden = 51 - open.length - upcoming.length;

  $("#rollcall").innerHTML =
    open.map(st =>
      '<button class="rc on" data-code="' + st.code + '"><b>' + esc(st.name) + "</b><span>" +
      (st.order === 0 ? "Capital · " + st.year : "#" + st.order + " · " + st.year) + "</span></button>").join("") +
    upcoming.map(st =>
      '<button class="rc off" disabled><b>' + esc(st.name) + "</b><span>Day " + st.order * PER_UNLOCK + "</span></button>").join("") +
    (hidden > 0
      ? '<div class="rc-more"><b>' + hidden + " more</b> waiting their turn, in the order they joined the Union.</div>"
      : "");
}

/* ---------- dossier ---------- */
function openDossier(st) {
  const hero = st.photos[0];
  const rest = st.photos.slice(1);
  const html =
    '<div class="dos-hero">' +
      (hero ? '<img class="zoomable" src="' + hero.src + '" alt="' + esc(hero.caption) +
        '" loading="lazy" data-lb="' + hero.src + '" data-lb-cap="' + esc(hero.caption) +
        '" data-lb-blurb="' + esc(st.name) + '">' : "") +
      '<div class="dos-cap">' +
        '<span class="dos-seal">' + (st.order === 0 ? "The Capital" : "State No. " + st.order) + "</span>" +
        '<h2 class="dos-name" id="sheetName">' + esc(st.name) + "</h2>" +
        '<p class="dos-nick">' + esc(st.nickname) + " · " + st.year + "</p>" +
      "</div></div>" +
    '<div class="dos-body">' +
      '<div class="dos-meta">' +
        "<div><b>" + st.year + "</b><span>" + (st.order === 0 ? "Founded" : "Joined the Union") + "</span></div>" +
        "<div><b>" + (st.order === 0 ? "Day 1" : "Day " + st.order * PER_UNLOCK) + "</b><span>You unlocked it</span></div>" +
        "<div><b>" + st.photos.length + "</b><span>Photograph" + (st.photos.length === 1 ? "" : "s") + "</span></div>" +
      "</div>" +
      st.story.map(p => "<p>" + p + "</p>").join("") +
      (rest.length ? '<div class="dos-gallery">' + rest.map(p =>
        '<figure class="dos-shot"><img class="zoomable" src="' + p.src + '" alt="' + esc(p.caption) +
        '" loading="lazy" data-lb="' + p.src + '" data-lb-cap="' + esc(p.caption) +
        '" data-lb-blurb="' + esc(st.name) + '">' +
        "<figcaption>" + esc(p.caption) + "</figcaption></figure>").join("") + "</div>" : "") +
    "</div>";

  $("#sheetScroll").innerHTML = html;
  $("#sheetScroll").scrollTop = 0;
  $("#sheetScrim").hidden = false;
  document.body.style.overflow = "hidden";
  $("#sheetClose").focus();
}
function closeDossier() {
  $("#sheetScrim").hidden = true;
  document.body.style.overflow = "";
}

/* ---------- unlock celebration ---------- */
let pendingState = null, pendingInv = null;
function showUnlock(st, iv) {
  pendingState = st; pendingInv = iv || null;
  const item = st || iv;
  if (!item) return;

  $("#unlockName").textContent = item.name;
  $(".unlock-eyebrow").textContent = st ? "A new state joins the Union" : "A new light in the Hall";
  $("#unlockNick").textContent = st
    ? st.nickname + " · joined the Union in " + st.year
    : item.catName + " · " + item.year;

  const src = st ? (st.photos[0] && st.photos[0].src) : item.photos[0];
  $("#unlockPhoto").innerHTML = src ? '<img src="' + src + '" alt="">' : "";

  $("#unlockLine").textContent = st
    ? "Five more days in the ledger. " + st.name + " takes its seat — that is " +
      (unlockedCount() + 1) + " of 51 on your map."
    : item.hook + " Number " + item.order + " of fifty is now lit.";
  $("#unlockRead").textContent = st ? "Read the dossier" : "Read the story";

  $("#unlockScrim").hidden = false;
  document.body.style.overflow = "hidden";
  S.seenUnlocks = unlockedCount() + 1;
  save();
  fanfare();
}
function closeUnlock() {
  $("#unlockScrim").hidden = true;
  document.body.style.overflow = "";
  if (runComplete() && !S.finale2Seen) showFinale(true);
  else if (level() === 2 && !S.finaleSeen) showFinale();
}

/* ---------- finale ---------- */
function showFinale(grand) {
  const ds = loggedDates();
  const perfect = ds.filter(k => tierOf(S.entries[k]) === "gold").length;
  const clean = ds.filter(k => S.entries[k].clean).length;
  const pts = totalPoints();
  const grade = pts >= 9000 ? "an extraordinary run"
    : pts >= 6000 ? "a formidable run"
    : pts >= 3300 ? "a strong run"
    : pts >= 1200 ? "a hard-won run"
    : "a stubborn run";
  const who = S.name ? S.name + ", " : "";

  if (grand) {
    $(".finale .unlock-eyebrow").textContent = "Day 500 · the whole thing";
    $(".finale-h").textContent = "You finished it.";
    $("#finaleP").textContent = who +
      "five hundred days logged. Fifty states, the capital, and fifty American inventions — " +
      "from a kite in a thunderstorm to the phone in your pocket. " + pts.toLocaleString() +
      " points, " + grade + ". Nothing on this map is locked any more, and neither are you.";
    $("#finaleStats").innerHTML =
      "<div><b>" + clean + "</b><span>Clean days</span></div>" +
      "<div><b>" + perfect + "</b><span>Perfect days</span></div>" +
      "<div><b>101</b><span>Things unlocked</span></div>";
    $("#finaleClose").textContent = "Look at what you built";
    S.finale2Seen = true;
  } else {
    $(".finale .unlock-eyebrow").textContent = "Day 250 · 2026";
    $(".finale-h").textContent = "The Union is complete.";
    $("#finaleP").textContent = who +
      "from 1776 to 2026 you logged every single day. Fifty states and the capital are on the map, " +
      "and the United States finishes Level 1 as the greatest country in the world. " +
      pts.toLocaleString() + " points — " + grade + ".\n\nLevel 2 is now open: fifty American inventions, " +
      "same rhythm, 250 more days.";
    $("#finaleStats").innerHTML =
      "<div><b>" + clean + "</b><span>Clean days</span></div>" +
      "<div><b>" + perfect + "</b><span>Perfect days</span></div>" +
      "<div><b>51</b><span>Dossiers open</span></div>";
    $("#finaleClose").textContent = "Enter the Hall of Innovation";
    S.finaleSeen = true;
  }

  $("#finale").hidden = false;
  document.body.style.overflow = "hidden";
  save();
  fanfare();
  if (S.motion) fireworks();
}

function fireworks() {
  const cv = $("#fireworks"), ctx = cv.getContext("2d");
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  function size() { cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  size();
  const cols = ["#57BBA8", "#E3B23C", "#F3ECDC", "#5C93E0", "#E2543A"];
  let parts = [], t0 = Date.now(), raf;
  function burst() {
    const x = Math.random() * innerWidth, y = Math.random() * innerHeight * 0.6 + 40;
    const c = cols[Math.floor(Math.random() * cols.length)];
    for (let i = 0; i < 46; i++) {
      const a = Math.random() * Math.PI * 2, s = Math.random() * 3.4 + 0.6;
      parts.push({ x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, c: c });
    }
  }
  const iv = setInterval(burst, 620);
  burst();
  (function loop() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(p => p.life > 0);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.vy += 0.035; p.vx *= 0.99; p.life -= 0.011;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.arc(p.x, p.y, 2.1, 0, 6.29); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (Date.now() - t0 < 14000 || parts.length) raf = requestAnimationFrame(loop);
    else clearInterval(iv);
  })();
  addEventListener("resize", size);
  $("#finaleClose").addEventListener("click", () => { clearInterval(iv); cancelAnimationFrame(raf); }, { once: true });
}



/* ==========================================================================
   LIGHTBOX
   Cards crop their photographs so the grid stays tidy. This shows the whole
   frame, uncropped, with optional zoom for detail — and it never changes the
   page underneath.
   ========================================================================== */
let lbSet = [], lbAt = 0, lbZoom = 1;
const LB_STEPS = [1, 2, 3.5];        // fit whole → fill width → detail

function openLightbox(list, index) {
  lbSet = list; lbAt = index || 0; lbZoom = 1;
  $("#lightbox").hidden = false;
  document.body.style.overflow = "hidden";
  paintLightbox();
  $("#lbClose").focus();
}

function paintLightbox() {
  const it = lbSet[lbAt];
  if (!it) return;
  const img = $("#lbImg");
  img.style.width = ""; img.style.height = "";
  img.src = it.src;
  img.alt = it.caption || "";
  $("#lbCap").textContent = it.caption || "";
  $("#lbBlurb").textContent = it.blurb || "";
  $("#lbCount").textContent = lbSet.length > 1 ? lbAt + 1 + " / " + lbSet.length : "";
  const many = lbSet.length > 1;
  $("#lbPrev").hidden = !many;
  $("#lbNext").hidden = !many;
  if (img.complete && img.naturalWidth) sizeLightbox();
  else img.onload = sizeLightbox;
}

/* Size the picture in real pixels. At zoom 1 it is scaled to fit entirely
   inside the stage — the whole photograph, nothing cropped. Above that it
   overflows and the stage becomes a scrollable, pannable surface. */
function sizeLightbox() {
  const img = $("#lbImg"), stage = $("#lbStage");
  const nw = img.naturalWidth, nh = img.naturalHeight;
  if (!nw || !nh) return;
  const cs = getComputedStyle(stage);
  const availW = Math.max(120, stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight));
  const availH = Math.max(120, stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom));
  const fit = Math.min(availW / nw, availH / nh);
  const scale = fit * lbZoom;
  img.style.width = Math.round(nw * scale) + "px";
  img.style.height = Math.round(nh * scale) + "px";

  const zoomed = lbZoom > 1;
  $("#lightbox").classList.toggle("is-zoomed", zoomed);
  $("#lbZoom").classList.toggle("is-on", zoomed);
  $("#lbZoom").setAttribute("aria-pressed", String(zoomed));
  $("#lbZoom").setAttribute("aria-label", zoomed ? "Reset zoom" : "Zoom in");
  $("#lbHint").textContent = zoomed
    ? "Drag to look around · tap to " + (lbZoom >= LB_STEPS[LB_STEPS.length - 1] ? "reset" : "zoom further")
    : (lbSet.length > 1 ? "Tap to zoom · swipe or use arrow keys" : "Tap the image to zoom");

  if (zoomed) {
    requestAnimationFrame(() => {
      stage.scrollLeft = (stage.scrollWidth - stage.clientWidth) / 2;
      stage.scrollTop = (stage.scrollHeight - stage.clientHeight) / 2;
    });
  }
}

function cycleZoom() {
  const i = LB_STEPS.indexOf(lbZoom);
  lbZoom = LB_STEPS[(i + 1) % LB_STEPS.length];
  sizeLightbox();
}
function resetZoom() { lbZoom = 1; sizeLightbox(); }

function moveLightbox(step) {
  if (lbSet.length < 2) return;
  lbAt = (lbAt + step + lbSet.length) % lbSet.length;
  lbZoom = 1;
  paintLightbox();
}

function closeLightbox() {
  $("#lightbox").hidden = true;
  lbZoom = 1;
  $("#lightbox").classList.remove("is-zoomed");
  // a dossier sheet may still be open underneath
  document.body.style.overflow = $("#sheetScrim").hidden ? "" : "hidden";
}

// Collect every photo in the container that was clicked, so the arrows walk the
// whole set rather than just the one that was tapped.
function galleryFrom(scope, clicked) {
  const imgs = $$("[data-lb]", scope);
  const list = imgs.map(el => ({
    src: el.dataset.lb,
    caption: el.dataset.lbCap || "",
    blurb: el.dataset.lbBlurb || "",
  }));
  const at = imgs.indexOf(clicked);
  return { list: list, at: at < 0 ? 0 : at };
}

function wireLightbox() {
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-lb]");
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    const scope = el.closest(".dos-body, .dos-hero, .pride-grid, .hall, .pride") || document;
    const g = galleryFrom(scope, el);
    openLightbox(g.list, g.at);
  }, true);

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", e => { e.stopPropagation(); moveLightbox(-1); });
  $("#lbNext").addEventListener("click", e => { e.stopPropagation(); moveLightbox(1); });
  $("#lbZoom").addEventListener("click", e => { e.stopPropagation(); cycleZoom(); });

  // Tap the picture to cycle zoom; tap the space around it to close.
  $("#lbImg").addEventListener("click", e => { e.stopPropagation(); cycleZoom(); });
  $("#lightbox").addEventListener("click", e => {
    if (e.target === $("#lightbox") || e.target === $("#lbStage")) closeLightbox();
  });

  addEventListener("resize", () => { if (!$("#lightbox").hidden) sizeLightbox(); });

  // Swipe between photos, but only while fitted — once zoomed the same gesture
  // pans the picture instead.
  let tx = 0, ty = 0, moved = false;
  const stage = $("#lbStage");
  stage.addEventListener("touchstart", e => {
    if (e.touches.length !== 1) return;
    tx = e.touches[0].clientX; ty = e.touches[0].clientY; moved = false;
  }, { passive: true });
  stage.addEventListener("touchmove", () => { moved = true; }, { passive: true });
  stage.addEventListener("touchend", e => {
    if (lbZoom > 1 || !moved || e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) moveLightbox(dx < 0 ? 1 : -1);
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeLightbox();
  }, { passive: true });

  document.addEventListener("keydown", e => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") { e.stopPropagation(); lbZoom > 1 ? resetZoom() : closeLightbox(); }
    else if (e.key === "ArrowLeft") moveLightbox(-1);
    else if (e.key === "ArrowRight") moveLightbox(1);
    else if (e.key === "+" || e.key === "=" || e.key === " ") { e.preventDefault(); cycleZoom(); }
    else if (e.key === "-" || e.key === "0") resetZoom();
  }, true);
}

/* ==========================================================================
   THE HALL OF INNOVATION  (level two)
   ========================================================================== */
let hallCat = "all";

function renderHall() {
  const box = $("#hallInner");
  const lv = level();
  const on = invUnlockedCount();

  if (lv === 1) {
    const left = RUN_DAYS - loggedCount();
    box.innerHTML =
      '<div class="hall-locked"><div class="seal"><b>II</b><span>level</span></div>' +
      "<h3>The Hall opens at day 250</h3>" +
      "<p>Finish the Union first. When the fiftieth state takes its seat, fifty American inventions " +
      "unlock on the same rhythm — five logged days lights one more, from Franklin's lightning rod in 1752 " +
      "all the way to the iPhone.</p>" +
      '<div class="hall-bar"><i style="width:' + (loggedCount() / RUN_DAYS * 100).toFixed(1) + '%"></i></div>' +
      '<p class="hall-note">' + left + " day" + (left === 1 ? "" : "s") + " remaining in Level 1</p></div>";
    return;
  }

  const ordered = inventionsByOrder();
  const newest = on > 0 ? ordered[on - 1] : null;
  const into = loggedCount() % PER_UNLOCK;

  const cats = ["all"].concat(Object.keys(INVENTION_CATS));
  const catBar = '<div class="cat-bar" id="catBar">' + cats.map(c =>
    '<button class="cat-chip' + (c === hallCat ? " is-on" : "") + '" data-cat="' + c + '">' +
    (c === "all" ? "All 50" : INVENTION_CATS[c]) + "</button>").join("") + "</div>";

  const head =
    '<div class="hall-head"><div class="seal"><b>' + on + '</b><span>of 50</span></div>' +
    '<div class="hh-txt"><b>The Hall of Innovation</b>' +
    "<span>" + (on >= 50
      ? "Every light is on."
      : "Next up: " + esc(ordered[on].name) + " — " + (PER_UNLOCK - into) + " more logged day" + (PER_UNLOCK - into === 1 ? "" : "s") + ".") +
    '</span><div class="nu-bar"><i style="width:' + (on / 50 * 100) + '%"></i></div></div></div>';

  const list = ordered.filter(iv => hallCat === "all" || iv.cat === hallCat);
  const grid = '<div class="hall" id="hallGrid">' + list.map(iv => {
    const open = isInvUnlocked(iv);
    if (!open) {
      return '<div class="inv off"><div class="inv-shot">' +
        '<svg class="inv-lock" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 10V7a6 6 0 0112 0v3M5 10h14v11H5z"/></svg>' +
        '</div><div class="inv-body"><div class="inv-name">Sealed</div>' +
        '<div class="inv-hook">Day ' + (RUN_DAYS + iv.order * PER_UNLOCK) + "</div></div></div>";
    }
    const isNew = newest && iv.id === newest.id;
    return '<button class="inv on' + (isNew ? " newest" : "") + '" data-inv="' + iv.id + '">' +
      '<span class="inv-shot"><img src="' + iv.photos[0] + '" alt="' + esc(iv.name) + '" loading="lazy">' +
      '<span class="inv-yr">' + esc(iv.year) + '</span><span class="inv-no">' + iv.order + "</span></span>" +
      '<span class="inv-body"><span class="inv-name">' + esc(iv.name) + "</span>" +
      '<span class="inv-hook">' + esc(iv.hook) + "</span></span></button>";
  }).join("") + "</div>";

  box.innerHTML = head + catBar + grid;
}

function openInvention(iv) {
  const hero = iv.photos[0];
  const rest = iv.photos.slice(1);
  $("#sheetScroll").innerHTML =
    '<div class="dos-hero">' +
      '<img class="zoomable" src="' + hero + '" alt="' + esc(iv.name) + '" loading="lazy" data-lb="' + hero +
        '" data-lb-cap="' + esc(iv.name) + '" data-lb-blurb="' + esc(iv.year + " · " + iv.hook) + '">' +
      '<div class="dos-cap">' +
        '<span class="dos-seal">Innovation No. ' + iv.order + "</span>" +
        '<h2 class="dos-name" id="sheetName">' + esc(iv.name) + "</h2>" +
        '<p class="dos-nick">' + esc(iv.year) + "</p>" +
      "</div></div>" +
    '<div class="dos-body">' +
      '<div class="dos-meta">' +
        "<div><b>" + esc(iv.year) + "</b><span>Invented</span></div>" +
        "<div><b>Day " + (RUN_DAYS + iv.order * PER_UNLOCK) + "</b><span>You unlocked it</span></div>" +
        "<div><b>" + iv.order + "</b><span>Of fifty</span></div>" +
      "</div>" +
      '<span class="dos-cat">' + esc(iv.catName) + "</span>" +
      '<p class="dos-hook">' + esc(iv.hook) + "</p>" +
      iv.story.map(x => "<p>" + x + "</p>").join("") +
      (rest.length ? '<div class="dos-gallery">' + rest.map(src =>
        '<figure class="dos-shot"><img class="zoomable" src="' + src + '" alt="' + esc(iv.name) +
        '" loading="lazy" data-lb="' + src + '" data-lb-cap="' + esc(iv.name) +
        '" data-lb-blurb="' + esc(iv.year) + '"></figure>').join("") + "</div>" : "") +
    "</div>";
  $("#sheetScroll").scrollTop = 0;
  $("#sheetScrim").hidden = false;
  document.body.style.overflow = "hidden";
  $("#sheetClose").focus();
}

/* ---------- the rotating American moment ---------- */
let prideIdx = 0, prideTimer = null;
function renderPride(step) {
  if (typeof PRIDE === "undefined" || !PRIDE.length) return;
  if (step) prideIdx = (prideIdx + step + PRIDE.length) % PRIDE.length;
  const p = PRIDE[prideIdx];
  $("#prideImg").src = p.src;
  $("#prideImg").alt = p.caption;
  $("#prideImg").classList.add("zoomable");
  $("#prideCap").textContent = p.caption;
  $("#prideBlurb").textContent = p.blurb;
  $("#prideDots").innerHTML = PRIDE.map((_, i) =>
    '<i class="' + (i === prideIdx ? "on" : "") + '"></i>').join("");
}
function startPride() {
  clearInterval(prideTimer);
  if (!S.motion) return;
  prideTimer = setInterval(() => {
    if ($("#view-today").classList.contains("is-active") && !document.hidden) renderPride(1);
  }, 8000);
}

/* ==========================================================================
   GUIDE
   ========================================================================== */
function renderGuide() {
  $("#guideSteps").innerHTML = GUIDE_STEPS.map(s =>
    '<div class="step"><span class="step-n">' + s.n + '</span><div class="step-b"><b>' +
    s.title + "</b><p>" + s.body + "</p></div></div>").join("");

  const t = S.targets;
  const rules = [
    ["gold", "+30", "Clean, under " + t.gold + " hours", "The best day available. Every metric jumps."],
    ["silver", "+15", "Clean, under " + t.silver + " hours", "A strong, repeatable day."],
    ["bronze", "+5", "Clean, under " + t.bronze + " hours", "Still moving forward."],
    ["flat", "0", "Clean, " + t.bronze + " hours or more", "No damage — but no gain either."],
    ["relapse", "−30", "Relapsed, any screen time", "All six metrics drop. Then it's over."],
  ];
  $("#rulesTable").innerHTML = rules.map(r =>
    '<div class="rule r-' + r[0] + '"><span class="rule-pts" style="color:var(--' + r[0] + ')">' + r[1] + "</span>" +
    '<span class="rule-txt"><b>' + r[2] + "</b><span>" + r[3] + "</span></span></div>").join("");

  const rn = $(".rules-note");
  if (rn) rn.innerHTML = "Every 5 days you log &mdash; good day or bad day &mdash; one more state joins the Union. " +
    "On day 250 the map is full and the <b>Hall of Innovation</b> opens: fifty American inventions on the same rhythm, " +
    "through to day 500.";

  $("#urgeTips").innerHTML = URGE_TIPS.map(t =>
    '<div class="tip"><div class="tip-h"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' +
    TIP_ICONS[t.icon] + '"/></svg><b>' + t.title + "</b></div><p>" + t.body + "</p></div>").join("");

  if (typeof PRIDE !== "undefined") {
    $("#prideGrid").innerHTML = PRIDE.map(p =>
      '<figure class="pg"><img class="zoomable" src="' + p.src + '" alt="' + esc(p.caption) +
      '" loading="lazy" data-lb="' + p.src + '" data-lb-cap="' + esc(p.caption) +
      '" data-lb-blurb="' + esc(p.blurb) + '">' +
      "<figcaption>" + esc(p.caption) + "</figcaption></figure>").join("");
  }

  $("#faq").innerHTML = FAQ.map(f =>
    "<details><summary>" + f.q + "</summary><p>" + f.a + "</p></details>").join("");

  $("#videos").innerHTML = VIDEOS.map((v, i) =>
    '<button class="vid" data-vid="' + i + '" aria-label="Play: ' + esc(v.person + " — " + v.title) + '">' +
      '<span class="vid-face">' +
        '<span class="vid-play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3l15 9-15 9z"/></svg></span>' +
        '<span class="vid-person">' + esc(v.person) + "</span>" +
        '<span class="vid-year">' + esc(v.year) + "</span>" +
      "</span>" +
      '<span class="vid-body"><span class="vid-title">' + esc(v.title) + "</span>" +
      '<span class="vid-why">' + esc(v.why) + "</span></span>" +
    "</button>").join("");
}

function playVideo(btn) {
  const v = VIDEOS[+btn.dataset.vid];
  const face = btn.querySelector(".vid-face");
  const frame = document.createElement("iframe");
  frame.src = "https://www.youtube-nocookie.com/embed/" + v.id + "?autoplay=1&rel=0&modestbranding=1";
  frame.title = v.person + " — " + v.title;
  frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  face.innerHTML = "";
  face.appendChild(frame);
  btn.classList.add("is-live");
  btn.removeAttribute("data-vid");
}

/* ==========================================================================
   SETTINGS
   ========================================================================== */
function renderSettings() {
  $("#setName").value = S.name;
  $("#setStart").value = S.startDate;
  $("#setStart").max = todayIso();

  $$("#themeSeg .seg-btn").forEach(b => b.classList.toggle("is-on", b.dataset.theme === S.theme));
  $("#swatches").innerHTML = ACCENTS.map((a, i) =>
    '<button class="sw' + (i === S.accent ? " is-on" : "") + '" data-accent="' + i +
    '" style="--c:' + a.dark + '" title="' + a.name + '" aria-label="' + a.name + ' accent"></button>').join("");

  setToggle("#setSound", S.sound);
  setToggle("#setMotion", !S.motion);
  setToggle("#setConfirm", S.confirmSave);

  const t = S.targets;
  $("#tierEdit").innerHTML = [
    ["gold", "gold", "Perfect day", "+30 points to every metric", t.gold],
    ["silver", "silver", "Great day", "+15 points to every metric", t.silver],
    ["bronze", "bronze", "Good day", "+5 points to every metric", t.bronze],
  ].map(r =>
    '<div class="te-row r-' + r[1] + '"><span class="te-lab"><b>' + r[2] + "</b><span>" + r[3] + "</span></span>" +
    '<span class="te-in"><span>under</span><input type="number" data-tier="' + r[0] +
    '" min="0.25" max="16" step="0.25" value="' + r[4] + '" aria-label="' + r[2] + ' hour limit"><span>h</span></span></div>').join("");
}
function setToggle(sel, on) { $(sel).setAttribute("aria-checked", String(!!on)); }

function commitTargets() {
  const g = clamp(parseFloat($('[data-tier="gold"]').value) || 2, 0.25, 16);
  let s = clamp(parseFloat($('[data-tier="silver"]').value) || 3, 0.25, 16);
  let b = clamp(parseFloat($('[data-tier="bronze"]').value) || 4, 0.25, 16);
  if (s <= g) s = Math.min(16, g + 0.25);
  if (b <= s) b = Math.min(16, s + 0.25);
  S.targets = { gold: g, silver: s, bronze: b };
  save();
  applyTrackGradient();
  renderSettings();
  renderAll();
  toast("Targets updated — every day rescored.");
}

function exportData() {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "union250-backup-" + todayIso() + ".json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast("Backup downloaded.");
}
function importData(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const p = JSON.parse(r.result);
      if (!p || typeof p.entries !== "object") throw new Error("bad file");
      if (!confirm("Replace everything currently in this browser with the backup?\n\nThis cannot be undone.")) return;
      S = Object.assign({}, DEFAULTS, p);
      S.targets = Object.assign({}, DEFAULTS.targets, p.targets || {});
      save(); applyTheme(); loadDraft(todayIso()); renderAll(); renderSettings();
      toast("Backup restored — " + loggedCount() + " days.");
    } catch (e) { toast("That file could not be read as a Union 250 backup."); }
  };
  r.readAsText(file);
}
function fillDemo() {
  if (!confirm("Fill the last 60 days with example data?\n\nThis overwrites anything logged in that window.")) return;
  const today = todayIso();
  S.startDate = addDays(today, -59);
  for (let i = 59; i >= 0; i--) {
    const k = addDays(today, -i);
    const clean = Math.random() > 0.16;
    const screen = Math.round((1 + Math.random() * 4.4) * 4) / 4;
    S.entries[k] = { clean: clean, screen: screen, note: "" };
  }
  S.seenUnlocks = unlockedCount() + 1;
  save(); loadDraft(today); renderAll(); renderSettings();
  toast("60 demo days added. Try the Calendar and Map tabs.");
}
function resetAll() {
  if (!confirm("Erase every logged day and every setting?\n\nThis cannot be undone. Export a backup first if you want to keep it.")) return;
  if (!confirm("Last check — really erase all " + loggedCount() + " logged days?")) return;
  localStorage.removeItem(KEY);
  S = Object.assign({}, DEFAULTS, { entries: {}, startDate: todayIso() });
  save(); applyTheme(); loadDraft(todayIso()); renderAll(); renderSettings();
  toast("Everything erased. Day 1 starts whenever you're ready.");
}

/* ==========================================================================
   NAVIGATION + WIRING
   ========================================================================== */
let unionTab = "states";
function showUnion(which) {
  unionTab = which;
  $("#unionStates").hidden = which !== "states";
  $("#unionHall").hidden = which !== "hall";
  $$("#unionSeg .seg-btn").forEach(b => {
    const on = b.dataset.union === which;
    b.classList.toggle("is-on", on);
    b.setAttribute("aria-selected", String(on));
  });
  $("#mapSub").textContent = which === "hall"
    ? (level() === 2
        ? invUnlockedCount() + " of 50 inventions lit. Tap one to read its story."
        : "Fifty American inventions, unlocked after the Union is complete.")
    : (unlockedCount() >= 50
        ? "All fifty states and the capital. Tap any of them."
        : (unlockedCount() + 1) + " of 51 unlocked. Tap a state that has joined to read its dossier.");
  if (which === "hall") renderHall();
}
function go(view) {
  $$(".view").forEach(v => v.classList.toggle("is-active", v.id === "view-" + view));
  $$(".tab").forEach(t => {
    const on = t.dataset.view === view;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", String(on));
  });
  window.scrollTo({ top: 0, behavior: S.motion ? "smooth" : "auto" });
  if (view === "calendar") renderCalendar();
  if (view === "progress") renderProgress();
  if (view === "map") { renderMap(); showUnion(unionTab); }
}

function renderAll() {
  renderToday();
  renderCalendar();
  renderProgress();
  renderMap();
  renderHall();
  renderGuide();
  renderPride(0);
}

function wire() {
  /* nav */
  $$(".tab").forEach(t => t.addEventListener("click", () => go(t.dataset.view)));

  /* header */
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    S.theme = cur === "light" ? "dark" : "light";
    save(); applyTheme(); renderSettings();
  });
  const anthem = $("#anthem");
  $("#anthemBtn").addEventListener("click", e => {
    const b = e.currentTarget;
    if (anthem.paused) {
      anthem.volume = 0.32;
      const p = anthem.play();
      if (p && p.catch) p.catch(() => toast("Tap once more to allow sound."));
      b.setAttribute("aria-pressed", "true");
      b.title = b.ariaLabel = "Stop the anthem";
    } else {
      anthem.pause();
      b.setAttribute("aria-pressed", "false");
      b.title = b.ariaLabel = "Play the anthem";
    }
  });

  /* log */
  $$("[data-clean]").forEach(b => b.addEventListener("click", () => {
    draft.clean = +b.dataset.clean === 1;
    renderLogPanel();
  }));
  $("#screenRange").addEventListener("input", e => {
    draft.screen = parseFloat(e.target.value);
    $("#screenOut").textContent = fmtHrs(draft.screen);
    $$("#quickSet button").forEach(b => b.classList.toggle("is-on", +b.dataset.h === draft.screen));
    if (draft.clean !== null) renderVerdictOnly();
  });
  $("#noteInput").addEventListener("input", e => { draft.note = e.target.value; });
  $("#saveBtn").addEventListener("click", saveDay);
  $("#clearDayBtn").addEventListener("click", removeDay);

  $("#quickSet").innerHTML = [1, 2, 3, 4, 6, 8].map(h =>
    '<button data-h="' + h + '">' + h + "h</button>").join("");
  $("#quickSet").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    draft.screen = +b.dataset.h;
    renderLogPanel();
  });
  $("#dialMarks").innerHTML = ["0h", "4h", "8h", "12h", "16h"].map(l => "<span>" + l + "</span>").join("");

  /* calendar */
  $$("#calSeg .seg-btn").forEach(b => b.addEventListener("click", () => {
    calMode = b.dataset.cal;
    calCursor = new Date();
    $$("#calSeg .seg-btn").forEach(x => {
      x.classList.toggle("is-on", x === b);
      x.setAttribute("aria-selected", String(x === b));
    });
    renderCalendar();
  }));
  $("#calPrev").addEventListener("click", () => {
    if (calMode === "month") calCursor.setMonth(calCursor.getMonth() - 1);
    else calCursor.setDate(calCursor.getDate() - 7);
    renderCalendar();
  });
  $("#calNext").addEventListener("click", () => {
    if (calMode === "month") calCursor.setMonth(calCursor.getMonth() + 1);
    else calCursor.setDate(calCursor.getDate() + 7);
    renderCalendar();
  });
  $("#calBody").addEventListener("click", e => {
    const c = e.target.closest("[data-day]"); if (!c) return;
    loadDraft(c.dataset.day);
    go("today");
    setTimeout(() => $("#logPanel").scrollIntoView({ behavior: S.motion ? "smooth" : "auto", block: "center" }), 60);
    toast("Editing " + prettyDate(c.dataset.day));
  });

  /* charts */
  $$("#chartSeg .seg-btn").forEach(b => b.addEventListener("click", () => {
    chartRange = +b.dataset.range;
    $$("#chartSeg .seg-btn").forEach(x => x.classList.toggle("is-on", x === b));
    renderBarChart();
  }));

  /* metric detail sheets */
  $("#metrics").addEventListener("click", e => {
    const b = e.target.closest("[data-metric]");
    if (b) openMetric(b.dataset.metric);
  });

  /* union segments + hall */
  $$("#unionSeg .seg-btn").forEach(b =>
    b.addEventListener("click", () => showUnion(b.dataset.union)));
  $("#hallInner").addEventListener("click", e => {
    const chip = e.target.closest("[data-cat]");
    if (chip) { hallCat = chip.dataset.cat; renderHall(); return; }
    const card = e.target.closest("[data-inv]");
    if (card) openInvention(invById(card.dataset.inv));
  });

  /* the rotating American moment */
  // tapping the photo opens it whole; tapping the dots or caption advances it
  $("#pride").addEventListener("click", e => {
    if (e.target.id === "prideImg") {
      openLightbox(PRIDE.map(p => ({ src: p.src, caption: p.caption, blurb: p.blurb })), prideIdx);
    } else { renderPride(1); startPride(); }
  });

  /* map + rollcall */
  $("#rollcall").addEventListener("click", e => {
    const b = e.target.closest("[data-code]"); if (!b || b.disabled) return;
    openDossier(stateByCode(b.dataset.code));
  });

  /* sheets */
  $("#sheetClose").addEventListener("click", closeDossier);
  $("#sheetScrim").addEventListener("click", e => { if (e.target === $("#sheetScrim")) closeDossier(); });
  $("#unlockNext").addEventListener("click", closeUnlock);
  $("#unlockRead").addEventListener("click", () => {
    const st = pendingState, iv = pendingInv;
    closeUnlock();
    go("map");
    if (iv) { showUnion("hall"); openInvention(iv); }
    else if (st) { showUnion("states"); openDossier(st); }
  });
  $("#finaleClose").addEventListener("click", () => {
    $("#finale").hidden = true;
    document.body.style.overflow = "";
    if (level() === 2) showUnion("hall");
    go("map");
  });
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (!$("#sheetScrim").hidden) closeDossier();
    else if (!$("#unlockScrim").hidden) closeUnlock();
  });

  /* guide videos */
  $("#videos").addEventListener("click", e => {
    const b = e.target.closest(".vid[data-vid]"); if (b) playVideo(b);
  });

  /* settings */
  $("#setName").addEventListener("change", e => { S.name = e.target.value.trim(); save(); renderToday(); });
  $("#setStart").addEventListener("change", e => {
    const v = e.target.value;
    if (!v || v > todayIso()) { e.target.value = S.startDate; return; }
    S.startDate = v; save(); renderCalendar(); toast("Day 1 set to " + prettyDate(v) + ".");
  });
  $$("#themeSeg .seg-btn").forEach(b => b.addEventListener("click", () => {
    S.theme = b.dataset.theme; save(); applyTheme(); renderSettings();
  }));
  $("#swatches").addEventListener("click", e => {
    const b = e.target.closest("[data-accent]"); if (!b) return;
    S.accent = +b.dataset.accent; save(); applyTheme(); renderSettings();
  });
  $("#setSound").addEventListener("click", () => {
    S.sound = !S.sound; save(); setToggle("#setSound", S.sound);
    toast(S.sound ? "Sound on." : "Sound off.");
  });
  $("#setMotion").addEventListener("click", () => {
    S.motion = !S.motion; save(); setToggle("#setMotion", !S.motion); applyTheme(); startPride();
    toast(S.motion ? "Animations on." : "Animations reduced.");
  });
  $("#setConfirm").addEventListener("click", () => {
    S.confirmSave = !S.confirmSave; save(); setToggle("#setConfirm", S.confirmSave);
  });
  $("#tierEdit").addEventListener("change", commitTargets);
  $("#resetTiers").addEventListener("click", () => {
    S.targets = { gold: 2, silver: 3, bronze: 4 };
    save(); applyTrackGradient(); renderSettings(); renderAll();
    toast("Targets back to 2h / 3h / 4h.");
  });
  $("#exportBtn").addEventListener("click", exportData);
  $("#importBtn").addEventListener("click", () => $("#importFile").click());
  $("#importFile").addEventListener("change", e => {
    if (e.target.files[0]) importData(e.target.files[0]);
    e.target.value = "";
  });
  $("#demoBtn").addEventListener("click", fillDemo);
  $("#resetBtn").addEventListener("click", resetAll);
}

function renderVerdictOnly() {
  const t = tierOf({ clean: draft.clean, screen: draft.screen });
  const p = POINTS[t];
  $("#verdict").innerHTML = '<div class="verdict-badge" style="background:var(--' + t + ');color:#fff">' +
    (p > 0 ? "+" : "") + p + "</div>" +
    '<div class="verdict-txt"><b>' + TIER_META[t].label + "</b><span>" + TIER_META[t].blurb +
    " Worth " + (p > 0 ? "+" : "") + p + " to all six metrics.</span></div>";
}

/* ---------- boot ---------- */
function init() {
  if (!localStorage.getItem(KEY)) save();          // first run: pin the start date
  applyTheme();
  buildMap();
  wire();
  wireLightbox();
  loadDraft(todayIso());
  renderAll();
  renderSettings();
  startPride();
  if (runComplete() && !S.finale2Seen) showFinale(true);
  else if (level() === 2 && !S.finaleSeen) showFinale();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

})();
