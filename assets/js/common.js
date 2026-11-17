/* Business UI Gallery — shared helpers: navigation, theme, formatting and seeded sample data.
   Every number, name and document in this gallery is generated here. Nothing comes from a real company. */
(function () {
  "use strict";

  // ---------- Pages registry (drives the sidebar and the home page) ----------
  const PAGES = [
    { group: "Overview", id: "home", title: "Gallery home", href: "index.html", icon: "grid" },
    { group: "Sales & operations", id: "sales-dashboard", title: "Sales dashboard", href: "pages/sales-dashboard.html", icon: "chart",
      blurb: "Daily operating dashboard: sales by payment method, branches, cash collected and a reconciling summary." },
    { group: "Sales & operations", id: "sales-report", title: "Sales detail report", href: "pages/sales-report.html", icon: "table",
      blurb: "10,000-row report with searchable filters, virtual scrolling and totals that follow every filter." },
    { group: "Sales & operations", id: "operations-dashboard", title: "Operations dashboard", href: "pages/operations-dashboard.html", icon: "activity",
      blurb: "Executive daily close: cash settled, sales, receivables, payables and stock, with sparklines and deltas." },
    { group: "Sales & operations", id: "sales-goals", title: "Sales goals", href: "pages/sales-goals.html", icon: "flag",
      blurb: "Monthly goals by seller and customer, achievement to date with a working-day pace and traffic-light status." },
    { group: "Sales & operations", id: "route-planning", title: "Route planning", href: "pages/route-planning.html", icon: "map",
      blurb: "Weekly visit plan per route: pre-sale, delivery and unplanned sales, copied across routes and weeks." },
    { group: "Sales & operations", id: "fill-rate", title: "Order fill rate", href: "pages/fill-rate.html", icon: "pie",
      blurb: "Orders vs what was invoiced: fill rate by line and by value, and the sales lost to missing stock." },
    { group: "Sales & operations", id: "commissions", title: "Commissions", href: "pages/commissions.html", icon: "percent",
      blurb: "Commission tiers by goal achievement and collection, calculated per seller with a month-end close." },
    { group: "Sales & operations", id: "receivables", title: "Accounts receivable", href: "pages/receivables.html", icon: "wallet",
      blurb: "Aging by customer and seller, account statements and collection effectiveness at 20 and 40 days." },
    { group: "Inventory", id: "purchasing", title: "Automatic purchasing", href: "pages/purchasing.html", icon: "cart",
      blurb: "Suggested purchase orders from sales velocity, days of inventory and safety stock, with a 4-color status." },
    { group: "Inventory", id: "suggested-order", title: "Suggested order", href: "pages/suggested-order.html", icon: "scan",
      blurb: "Build a customer order from a suggestion: barcode search, cart, stock check and price rules." },
    { group: "Inventory", id: "item-merge", title: "Legacy item matching", href: "pages/item-merge.html", icon: "merge",
      blurb: "Data migration: match each item of the old system to the new catalog, and merge duplicates with a dry run first." },
    { group: "Inventory", id: "price-check", title: "Price check", href: "pages/price-check.html", icon: "tag",
      blurb: "Price lists by customer type with margin over sale, cost changes, minimum margin alerts and approvals." },
    { group: "Inventory", id: "stock-check", title: "Stock by warehouse", href: "pages/stock-check.html", icon: "box",
      blurb: "Items by warehouse with presentations, stock, cost and the observations left by the auditors." },
    { group: "Accounting", id: "journal-entry", title: "Journal entries", href: "pages/journal-entry.html", icon: "book",
      blurb: "Manual journal entry: each line is debit or credit, expense accounts need a budgeted cost center, and it only saves when it balances." },
    { group: "Accounting", id: "entry-generation", title: "Automatic entries", href: "pages/entry-generation.html", icon: "cpu",
      blurb: "Generates the day's entries from invoices, purchases, returns and bank movements, one day at a time with progress." },
    { group: "Accounting", id: "general-ledger", title: "Journal book", href: "pages/general-ledger.html", icon: "list",
      blurb: "Every entry of the period with its balance check and a drill-down to the document that created it." },
    { group: "Accounting", id: "reconciliation", title: "Entry reconciliation", href: "pages/reconciliation.html", icon: "scale",
      blurb: "Expected value from source documents vs what was posted, by code and day, with the days that differ." },
    { group: "Accounting", id: "balance-sheet", title: "Balance sheet", href: "pages/balance-sheet.html", icon: "layers",
      blurb: "Account tree from level 1 to 5 with a check that assets equal liabilities plus equity." },
    { group: "Treasury", id: "bank-payment", title: "Bank payment", href: "pages/bank-payment.html", icon: "bank",
      blurb: "Pay a supplier by check or transfer, apply it to open invoices, handle exchange rate and preview the entry." },
    { group: "Treasury", id: "payment-schedule", title: "Payment schedule", href: "pages/payment-schedule.html", icon: "calendar",
      blurb: "Payables grouped by due week and supplier, turned into an approved payment list." },
    { group: "Treasury", id: "payment-request", title: "Payment request", href: "pages/payment-request.html", icon: "file",
      blurb: "Request a payment with document lines; expense lines only accept accounts budgeted for that center." },
    { group: "Treasury", id: "credit-cards", title: "Credit cards", href: "pages/credit-cards.html", icon: "card",
      blurb: "Company cards with limit, balance and statement, charges by cost center and the monthly payment." },
    { group: "Budget & control", id: "cost-centers", title: "Cost centers", href: "pages/cost-centers.html", icon: "shield",
      blurb: "Budget, projection and actual per cost center, with budget adjustment requests and approvals." },
    { group: "Budget & control", id: "budget-report", title: "Budget vs actual", href: "pages/budget-report.html", icon: "target",
      blurb: "Account by month matrix with budget, actual and variance, plus a monthly trend per cost center." },
    { group: "Budget & control", id: "expense-verification", title: "Expense verification", href: "pages/expense-verification.html", icon: "check",
      blurb: "Each expense checked against its receipt: matched supplier, amount and date, with a score per cost center." },
    { group: "Budget & control", id: "scorecard", title: "Balanced scorecard", href: "pages/scorecard.html", icon: "gauge",
      blurb: "Objectives and KPIs with weights and monthly targets, approval states and results by area." },
    { group: "People", id: "payroll", title: "Payroll run", href: "pages/payroll.html", icon: "users",
      blurb: "Bi-weekly payroll: earnings, deductions, employer contributions, the bank file and the accounting entry." },
    { group: "People", id: "employee-file", title: "Employee file", href: "pages/employee-file.html", icon: "id",
      blurb: "Full employee record in tabs: contract and extensions, position, vacations, documents and history." },
    { group: "People", id: "attendance", title: "Attendance", href: "pages/attendance.html", icon: "clock",
      blurb: "Clock-in import from devices, daily timesheet with late arrivals and overtime, and the cut-off for payroll." },
    { group: "IT & services", id: "network-map", title: "Network map", href: "pages/network-map.html", icon: "network",
      blurb: "Network topology of branches, switches and devices with live status and a scan." },
    { group: "IT & services", id: "maintenance", title: "Maintenance planner", href: "pages/maintenance.html", icon: "wrench",
      blurb: "Preventive maintenance calendar for equipment and vehicles, upcoming jobs and overdue alerts." },
    { group: "IT & services", id: "service-desk", title: "Service desk", href: "pages/service-desk.html", icon: "ticket",
      blurb: "IT tickets with priority, SLA timer, assignment and a board by status." },
    { group: "IT & services", id: "dashboard-builder", title: "Dashboard builder", href: "pages/dashboard-builder.html", icon: "grid",
      blurb: "Drag-and-drop canvas to build a dashboard from widgets and saved queries." }
  ];

  const ICONS = {
    grid: '<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5z"/><path d="M8 7h8M8 11h6"/>',
    scale: '<path d="M12 3v18M5 21h14M6 7l-3 6a3 3 0 0 0 6 0zM18 7l-3 6a3 3 0 0 0 6 0zM6 7h12"/>',
    bank: '<path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 21h18"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
    cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    pie: '<path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
    percent: '<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
    wallet: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
    scan: '<path d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3M7 8v8M10 8v8M14 8v8M17 8v8"/>',
    merge: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 7v10M6 7c0 5 12 5 12 5"/>',
    box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
    file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
    check: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>',
    gauge: '<path d="M12 14l4-4"/><path d="M3.3 17a9 9 0 1 1 17.4 0"/>',
    id: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="11" r="2.5"/><path d="M5.5 17a4 4 0 0 1 7 0M15 10h3M15 14h3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    network: '<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.3-1.3a4 4 0 0 0-5-5L14 6z" transform="translate(-2 0)"/>',
    ticket: '<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M13 6v12"/>',
    tag: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>'
  };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  // ---------- Theme ----------
  const THEME_KEY = "bug-theme";
  function storedTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function applyTheme(t) {
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  function currentTheme() {
    const t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(storedTheme());

  // ---------- Shell (sidebar + topbar) ----------
  function buildShell() {
    const body = document.body;
    const pageId = body.dataset.page;
    const root = body.dataset.root || "";
    const page = PAGES.find(p => p.id === pageId) || PAGES[0];

    const groups = [];
    PAGES.forEach(p => { if (!groups.includes(p.group)) groups.push(p.group); });
    const nav = groups.map(g => {
      const links = PAGES.filter(p => p.group === g).map(p =>
        '<a href="' + root + p.href + '"' + (p.id === pageId ? ' aria-current="page"' : "") + ">" + icon(p.icon) + "<span>" + p.title + "</span></a>").join("");
      return '<div class="nav-group"><div class="nav-label">' + g + '</div><nav class="nav" aria-label="' + g + '">' + links + "</nav></div>";
    }).join("");

    const content = document.getElementById("content");
    const app = document.createElement("div");
    app.className = "app";
    app.innerHTML =
      '<aside class="sidebar" id="sidebar">' +
        '<a class="brand" href="' + root + 'index.html"><span class="brand-mark">UI</span><span>Business UI Gallery</span></a>' + nav +
      "</aside>" +
      '<div class="main">' +
        '<header class="topbar">' +
          '<div class="topbar-left">' +
            '<button class="btn icon-btn menu-btn" id="menuBtn" aria-label="Open navigation" aria-controls="sidebar" aria-expanded="false">' + icon("menu") + "</button>" +
            '<span class="crumbs">' + page.group + " / " + page.title + "</span>" +
            '<span class="badge-sample" title="All data on this page is generated">Sample data</span>' +
          "</div>" +
          '<div style="display:flex;gap:8px">' +
            '<a class="btn icon-btn" href="https://github.com/robertomz/business-ui-gallery" aria-label="Source code on GitHub">' + icon("github") + "</a>" +
            '<button class="btn icon-btn" id="themeBtn" aria-label="Toggle dark mode"></button>' +
          "</div>" +
        "</header>" +
      "</div>";
    body.insertBefore(app, content);
    app.querySelector(".main").appendChild(content);

    const themeBtn = document.getElementById("themeBtn");
    const paintThemeBtn = () => { themeBtn.innerHTML = icon(currentTheme() === "dark" ? "sun" : "moon"); };
    paintThemeBtn();
    themeBtn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* storage blocked: theme lasts this visit */ }
      paintThemeBtn();
      document.dispatchEvent(new CustomEvent("themechange"));
    });

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  // ---------- Formatting ----------
  const money = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const int = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  function fmtMoney(n) { return money.format(Math.round(n * 100) / 100); }
  function fmtInt(n) { return int.format(n); }
  function fmtPct(n, d) { return (n * 100).toFixed(d == null ? 1 : d) + "%"; }
  function fmtDate(d) { return d.toISOString().slice(0, 10); }
  function parseMoney(s) { const v = parseFloat(String(s).replace(/,/g, "")); return isNaN(v) ? 0 : v; }

  // Money input mask: digits and one dot, formatted as 1,000.00 on blur.
  function maskMoney(input) {
    input.addEventListener("input", () => {
      let v = input.value.replace(/[^0-9.]/g, "");
      const i = v.indexOf(".");
      if (i >= 0) v = v.slice(0, i + 1) + v.slice(i + 1).replace(/\./g, "").slice(0, 2);
      input.value = v;
    });
    input.addEventListener("blur", () => { if (input.value !== "") input.value = fmtMoney(parseMoney(input.value)); });
    input.addEventListener("focus", () => { if (input.value !== "") input.value = String(parseMoney(input.value)); });
  }

  // ---------- Seeded random (same data on every visit) ----------
  function rng(seed) {
    let s = seed >>> 0;
    return function () {
      s += 0x6D2B79F5;
      let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function pick(r, arr) { return arr[Math.floor(r() * arr.length)]; }
  function between(r, a, b) { return a + r() * (b - a); }

  const DATA = {
    branches: ["North Plaza", "Harbor", "Central Market", "Riverside", "Hillcrest", "West Gate"],
    regions: { "North Plaza": "North", "Harbor": "Coast", "Central Market": "Center", "Riverside": "Center", "Hillcrest": "North", "West Gate": "West" },
    payment: ["Cash", "Card", "Credit", "Transfer"],
    sellers: ["A. Torres", "B. Lopez", "C. Ramos", "D. Medina", "E. Castro", "F. Ortiz", "G. Reyes", "H. Flores", "I. Vargas", "J. Molina"],
    customers: ["Blue Fern Market", "Corner Grocer", "Daily Basket", "Elm Street Store", "Fresh Stop", "Golden Spoon Cafe", "Green Leaf Deli", "Harvest Mini Mart", "Lakeside Foods", "Maple Pantry", "Northside Market", "Oak & Grain", "Pine Valley Shop", "Quick Pick", "Red Barn Grocery", "Sunrise Bakery", "Twin Rivers Market", "Union Corner", "Village Pantry", "Wildflower Foods"],
    categories: ["Beverages", "Dairy", "Snacks", "Cleaning", "Personal care", "Canned goods", "Grains"],
    products: [
      ["Sparkling water 600 ml", "Beverages"], ["Orange juice 1 L", "Beverages"], ["Cola 2 L", "Beverages"], ["Iced tea 500 ml", "Beverages"],
      ["Whole milk 1 L", "Dairy"], ["Cheddar cheese 400 g", "Dairy"], ["Yogurt 6-pack", "Dairy"], ["Butter 250 g", "Dairy"],
      ["Potato chips 150 g", "Snacks"], ["Salted peanuts 200 g", "Snacks"], ["Chocolate bar 90 g", "Snacks"], ["Corn crackers 300 g", "Snacks"],
      ["Laundry detergent 2 kg", "Cleaning"], ["Dish soap 750 ml", "Cleaning"], ["Bleach 1 L", "Cleaning"], ["Floor cleaner 1 L", "Cleaning"],
      ["Shampoo 400 ml", "Personal care"], ["Toothpaste 100 ml", "Personal care"], ["Bath soap 3-pack", "Personal care"],
      ["Tuna can 140 g", "Canned goods"], ["Black beans 400 g", "Canned goods"], ["Tomato sauce 250 g", "Canned goods"],
      ["White rice 2 kg", "Grains"], ["Pasta 500 g", "Grains"], ["Oats 800 g", "Grains"]
    ],
    suppliers: ["Northwind Foods", "Contoso Beverages", "Fabrikam Home", "Litware Dairy", "Adventure Snacks", "Tailspin Grains"],
    costCenters: ["Sales North", "Sales Center", "Sales Coast", "Warehouse", "Logistics", "Administration", "IT"],
    firstNames: ["Ana", "Luis", "Maria", "Carlos", "Sofia", "Jorge", "Elena", "Pedro", "Lucia", "Diego", "Valeria", "Miguel", "Camila", "Andres", "Paula", "Ricardo", "Daniela", "Hector", "Gabriela", "Oscar"],
    lastNames: ["Torres", "Lopez", "Ramos", "Medina", "Castro", "Ortiz", "Reyes", "Flores", "Vargas", "Molina", "Rivera", "Cruz", "Mendoza", "Herrera", "Aguilar"]
  };

  // Chart.js colors read from the tokens, so charts follow the theme.
  function cssVar(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2600);
  }

  // Modal helpers: opens empty, closes only with its buttons (no Esc, no backdrop click), focus moves in and back.
  function openModal(id) {
    const m = document.getElementById(id);
    m._opener = document.activeElement;
    m.classList.add("open");
    const f = m.querySelector("input, select, textarea, button");
    if (f) f.focus();
  }
  function closeModal(id) {
    const m = document.getElementById(id);
    m.classList.remove("open");
    if (m._opener) m._opener.focus();
  }

  window.UI = { PAGES, icon, fmtMoney, fmtInt, fmtPct, fmtDate, parseMoney, maskMoney, rng, pick, between, DATA, cssVar, toast, openModal, closeModal, currentTheme };

  document.addEventListener("DOMContentLoaded", buildShell);
})();
