/* Business UI Gallery — shared shell, language (ES/EN), theme, formatting, sample data and widgets.
   Every number, name and document in this gallery is generated here. Nothing comes from a real company. */
(function () {
  "use strict";

  // ---------------- Pages (sidebar, home tiles, page titles) ----------------
  const GROUPS = {
    overview: { en: "Overview", es: "Inicio" },
    sales: { en: "Sales & operations", es: "Ventas y operación" },
    inventory: { en: "Inventory", es: "Inventario" },
    accounting: { en: "Accounting", es: "Contabilidad" },
    treasury: { en: "Treasury", es: "Tesorería" },
    budget: { en: "Budget & control", es: "Presupuesto y control" },
    people: { en: "People", es: "Talento humano" },
    health: { en: "Health & clinics", es: "Salud y clínicas" },
    it: { en: "IT & services", es: "TI y servicios" }
  };
  // Look of each area: icon, gradient and a one-line description (home cards, area pages).
  const AREAS = {
    sales: { icon: "storefront", c: ["#14b8a6", "#06b6d4"], deco: ["insights", "route", "flag"],
      d: { en: "Daily close, sales goals, routes, fill rate, commissions and collections.", es: "Cierre diario, metas, rutas, fill rate, comisiones y cobros." } },
    inventory: { icon: "inventory_2", c: ["#f59e0b", "#fb923c"], deco: ["shopping_cart", "sell", "qr_code_scanner"],
      d: { en: "Automatic purchasing, orders, prices, stock per warehouse and data migration.", es: "Compras automáticas, pedidos, precios, existencias por bodega y migración de datos." } },
    accounting: { icon: "menu_book", c: ["#8b5cf6", "#6366f1"], deco: ["edit_note", "auto_mode", "balance"],
      d: { en: "Journal entries, automatic generation, journal book, reconciliation and balance sheet.", es: "Partidas, generación automática, libro diario, conciliación y balance." } },
    treasury: { icon: "account_balance", c: ["#38bdf8", "#06b6d4"], deco: ["payments", "event_note", "credit_card"],
      d: { en: "Bank payments, payment schedule, payment requests and credit cards.", es: "Pagos bancarios, proyección de pagos, solicitudes de pago y tarjetas." } },
    budget: { icon: "donut_small", c: ["#f43f5e", "#fb7185"], deco: ["hub", "stacked_bar_chart", "speed"],
      d: { en: "Cost centers, budget vs actual, expense verification and scorecard.", es: "Centros de gestión, presupuesto vs real, verificación de gastos y scorecard." } },
    people: { icon: "groups", c: ["#22c55e", "#14b8a6"], deco: ["payments", "badge", "schedule"],
      d: { en: "Payroll run, employee file and attendance.", es: "Planilla, expediente del empleado y asistencia." } },
    health: { icon: "local_hospital", c: ["#ec4899", "#8b5cf6"], deco: ["event_available", "personal_injury", "medication"], concept: true,
      d: { en: "Concept screens for clinics and doctors: appointments, patients, medical records and the day's dashboard.", es: "Pantallas de concepto para clínicas y médicos: citas, pacientes, expediente clínico y el tablero del día." } },
    it: { icon: "lan", c: ["#a78bfa", "#38bdf8"], deco: ["support_agent", "build", "dashboard_customize"],
      d: { en: "Network map, maintenance planner, service desk and dashboard builder.", es: "Mapa de red, mantenimiento, mesa de ayuda y constructor de dashboards." } }
  };
  const P = (group, id, icon, en, es, ben, bes) => ({ group, id, icon, href: id === "home" ? "index.html" : "pages/" + id + ".html", title: { en, es }, blurb: { en: ben || "", es: bes || "" } });
  const PAGES = [
    P("overview", "home", "apps", "Gallery home", "Inicio de la galería"),
    P("sales", "operations-dashboard", "insights", "Operations dashboard", "Dashboard operativo",
      "Daily close by area: cash, sales, receivables, payables, cards, inventory and the day's result, each compared with the previous working day and the same day last month.",
      "Cierre diario por área: caja, ventas, cuentas por cobrar, por pagar, tarjetas, inventario y resultado del día, comparados con el día hábil anterior y el mismo día del mes anterior."),
    P("sales", "sales-dashboard", "query_stats", "Sales dashboard", "Dashboard de ventas",
      "Net sales against the monthly goal: cumulative vs goal, daily vs goal, path to goal, a waterfall and an activity heatmap.",
      "Venta neta contra la meta del mes: acumulado vs meta, diario vs meta, camino a la meta, cascada y mapa de calor de actividad."),
    P("sales", "sales-report", "table_view", "Sales detail report", "Reporte de ventas detallado",
      "10,000 invoice lines with filters, per-column search, virtual scrolling and totals that follow every filter.",
      "10,000 líneas de factura con filtros, búsqueda por columna, desplazamiento virtual y totales que siguen cada filtro."),
    P("sales", "sales-goals", "flag", "Sales goals", "Metas de ventas",
      "Goal vs sold by seller and customer with a working-day pace, projection and traffic-light status.",
      "Meta vs vendido por vendedor y cliente con ritmo por días hábiles, proyección y semáforo."),
    P("sales", "route-planning", "route", "Route planning", "Programación de rutas",
      "Weekly visit plan per route: pre-sale and delivery days, copy to other routes, compliance and unplanned sales.",
      "Plan semanal de visitas por ruta: días de preventa y entrega, copiar a otras rutas, cumplimiento y ventas no programadas."),
    P("sales", "fill-rate", "donut_large", "Order fill rate", "Fill rate de pedidos",
      "Ordered vs invoiced by line and value, and the sales lost to missing stock, cancellations or price.",
      "Pedido vs facturado por línea y por valor, y la venta perdida por falta de stock, anulación o precio."),
    P("sales", "commissions", "percent", "Commissions", "Comisiones",
      "Commission tiers by goal achievement and collection, calculated per seller with a month-end close.",
      "Rangos de comisión por logro de meta y recaudación, calculados por vendedor con cierre de mes."),
    P("sales", "receivables", "account_balance_wallet", "Accounts receivable", "Cuentas por cobrar",
      "Aging by customer and seller, account statements and collection effectiveness at 20 and 40 days.",
      "Antigüedad por cliente y vendedor, estados de cuenta y efectividad de cobro a 20 y 40 días."),
    P("inventory", "purchasing", "shopping_cart", "Automatic purchasing", "Compras automáticas",
      "Suggested purchases from sales velocity, lead time and safety days, with a 4-color status per item.",
      "Compra sugerida según venta diaria, días de entrega y días de seguridad, con semáforo de 4 colores."),
    P("inventory", "suggested-order", "qr_code_scanner", "Suggested order", "Pedido sugerido",
      "Build a customer order from history: barcode search, cart, stock check and volume discounts.",
      "Pedido del cliente desde su historial: búsqueda por código de barras, carrito, stock y descuento por volumen."),
    P("inventory", "price-check", "sell", "Price check", "Chequeo de precios",
      "Price lists with margin over sale, cost-change alerts, price approvals and a cost increase simulator.",
      "Listas de precio con margen sobre venta, alertas de costo, aprobación de precios y simulador de alza."),
    P("inventory", "stock-check", "inventory_2", "Stock by warehouse", "Existencias por bodega",
      "Items by warehouse with presentations, stock and cost, and an insert-only audit log.",
      "Artículos por bodega con presentaciones, existencia y costo, y un registro de auditoría que solo agrega."),
    P("inventory", "item-merge", "merge", "Legacy item matching", "Homologación de artículos",
      "Data migration: match each item of the old system to the new catalog and merge duplicates after a dry run.",
      "Migración de datos: emparejar cada artículo del sistema anterior con el catálogo nuevo y unir duplicados con prueba previa."),
    P("accounting", "journal-entry", "edit_note", "Manual journal entry", "Partida manual",
      "Debit or credit per line, expense accounts only with a budgeted cost center, saves only when it balances.",
      "Debe o haber por línea, cuentas de gasto solo con centro presupuestado, guarda solo si cuadra."),
    P("accounting", "entry-generation", "auto_mode", "Automatic entries", "Generar partidas",
      "Generates the day's entries from invoices, purchases, returns and bank movements, day by day with progress.",
      "Genera las partidas del día desde facturas, compras, devoluciones y movimientos bancarios, día por día con progreso."),
    P("accounting", "general-ledger", "menu_book", "Journal book", "Libro diario",
      "Every entry with its balance check and the source document behind it.",
      "Todas las partidas con su verificación de cuadre y el documento que las originó."),
    P("accounting", "reconciliation", "balance", "Entry reconciliation", "Conciliación de partidas",
      "Side A (documents) vs side B (posted) by code and day, with the reason for each difference.",
      "Lado A (documentos) contra lado B (contabilizado) por código y día, con el motivo de cada diferencia."),
    P("accounting", "balance-sheet", "account_tree", "Balance sheet", "Balance general",
      "Account tree level 1 to 5 and the assets = liabilities + equity check.",
      "Árbol de cuentas de nivel 1 a 5 y la verificación activo = pasivo + capital."),
    P("treasury", "bank-payment", "account_balance", "Bank payment", "Movimiento débito",
      "Check or transfer applied to open invoices, exchange rate, amount in words and the entry preview.",
      "Cheque o transferencia aplicado a facturas abiertas, tipo de cambio, monto en letras y vista de la partida."),
    P("treasury", "payment-schedule", "event_note", "Payment schedule", "Proyección de pagos",
      "Payables grouped by due week and supplier, turned into an approved payment list.",
      "Cuentas por pagar agrupadas por semana de vencimiento y proveedor, convertidas en una lista de pago aprobada."),
    P("treasury", "payment-request", "request_quote", "Payment request", "Solicitud de pago",
      "Document lines where expense accounts must be budgeted for the cost center, with approval.",
      "Líneas de documento donde las cuentas de gasto deben estar presupuestadas para el centro, con aprobación."),
    P("treasury", "credit-cards", "credit_card", "Credit cards", "Tarjetas de crédito",
      "Limits, balances, charges by cost center and the monthly payment with its entry.",
      "Límites, saldos, cargos por centro de costo y el pago mensual con su partida."),
    P("budget", "cost-centers", "hub", "Cost centers", "Centros de gestión",
      "Budget, projection and actual per center, with budget adjustment requests and approvals.",
      "Presupuesto, proyección y logrado por centro, con solicitudes de ajuste y aprobaciones."),
    P("budget", "budget-report", "stacked_bar_chart", "Budget vs actual", "Presupuesto vs real",
      "Account by month matrix with budget, actual and variance, and the documents behind each cell.",
      "Matriz de cuentas por mes con presupuesto, real y variación, y los documentos detrás de cada cifra."),
    P("budget", "expense-verification", "fact_check", "Expense verification", "Verificación de gastos",
      "Receipts matched to posted expenses with a verification score per cost center.",
      "Recibos comparados con los gastos registrados y un puntaje de verificación por centro."),
    P("budget", "scorecard", "speed", "Balanced scorecard", "Balanced scorecard",
      "Weighted KPIs with monthly targets, approval states and results by area.",
      "KPIs con peso, metas mensuales, estados de aprobación y resultados por área."),
    P("people", "payroll", "payments", "Payroll", "Gestión de planilla",
      "Earnings, deductions, employer contributions, the bank file and the accounting entry.",
      "Ingresos, deducciones, aportes patronales, archivo del banco y partida contable."),
    P("people", "employee-file", "badge", "Employee file", "Expediente del empleado",
      "Contract and extensions, position, vacations, documents and history in one record.",
      "Contrato y prórrogas, puesto, vacaciones, documentos e historial en un solo expediente."),
    P("people", "attendance", "schedule", "Attendance", "Asistencia",
      "Clock-in import, late arrivals and overtime, and the cut-off for payroll.",
      "Importación de marcas, tardanzas y horas extra, y el cierre de corte para planilla."),
    P("health", "clinic-dashboard", "monitor_heart", "Clinic dashboard", "Tablero de la clínica",
      "The day at a glance: appointments by status, waiting time, no-shows, doctors' occupancy and income by service.",
      "El día de un vistazo: citas por estado, tiempo de espera, inasistencias, ocupación de médicos e ingresos por servicio."),
    P("health", "appointments", "event_available", "Appointments", "Agenda de citas",
      "Weekly schedule per doctor: book, confirm, check in and reschedule without double booking.",
      "Agenda semanal por médico: agendar, confirmar, registrar llegada y reprogramar sin choques de horario."),
    P("health", "patients", "personal_injury", "Patients", "Pacientes",
      "Patient registry with search, allergies and alerts, insurance and a validated new-patient form.",
      "Registro de pacientes con búsqueda, alergias y alertas, seguro y formulario de paciente nuevo validado."),
    P("health", "medical-record", "assignment_ind", "Medical record", "Expediente clínico",
      "One patient's chart: vitals, consultation timeline, diagnoses, prescriptions and attachments.",
      "El expediente de un paciente: signos vitales, historial de consultas, diagnósticos, recetas y adjuntos."),
    P("it", "network-map", "lan", "Network map", "Mapa de red",
      "Topology of branches and devices with live status and a simulated scan.",
      "Topología de sucursales y equipos con estado en vivo y escaneo simulado."),
    P("it", "maintenance", "build", "Maintenance planner", "Mantenimiento",
      "Preventive maintenance calendar with overdue alerts and checklists.",
      "Calendario de mantenimiento preventivo con alertas de vencidos y listas de chequeo."),
    P("it", "service-desk", "support_agent", "Service desk", "Mesa de ayuda",
      "Ticket board with SLA timers, drag and drop and a comments timeline.",
      "Tablero de tickets con tiempo de SLA, arrastrar y soltar e historial de comentarios."),
    P("it", "dashboard-builder", "dashboard_customize", "Dashboard builder", "Constructor de dashboards",
      "Drag-and-drop canvas to build dashboards from widgets and saved queries.",
      "Lienzo para armar dashboards arrastrando widgets y consultas guardadas.")
  ];

  // ---------------- Language ----------------
  const LANG_KEY = "bug-lang";
  const COMMON = {
    en: {
      sample: "Sample data", company: "Active company", companyName: "Demo Company S.A.",
      home: "Gallery", source: "Source code on GitHub", light: "Light theme", dark: "Dark theme", menu: "Menu",
      load: "Load", clear: "Clear", save: "Save", close: "Close", cancel: "Cancel", search: "Search", export: "Export",
      all: "All", total: "Total", totals: "Totals", noData: "No data", about: "About this report", aboutScreen: "About this screen",
      help: "Help", consulted: "Consulted", vsPrev: "vs", vsMonth: "vs last month", noPrev: "No data", loadHint: "Choose the filters and press Load.",
      yes: "Yes", no: "No", status: "Status", date: "Date", from: "From", to: "To", branch: "Branch", seller: "Seller", customer: "Customer",
      supplier: "Supplier", category: "Category", product: "Product", amount: "Amount", balance: "Balance", description: "Description",
      approve: "Approve", reject: "Reject", reason: "Reason", pending: "Pending", approved: "Approved", rejected: "Rejected",
      perDay: "per day", loading: "Loading…", saved: "Saved", wholeCompany: "Whole company",
      allAreas: "All areas", viewAll: "Show all screens", viewArea: "Show this area only", areas: "Areas",
      concept: "Concept", conceptNote: "Concept screen: designed as a sample of what I can build, not taken from a system in production.",
      screensN: "{n} screens", openArea: "Open"
    },
    es: {
      sample: "Datos de ejemplo", company: "Empresa activa", companyName: "Demo Company S.A.",
      home: "Galería", source: "Código en GitHub", light: "Tema claro", dark: "Tema oscuro", menu: "Menú",
      load: "Cargar", clear: "Limpiar", save: "Guardar", close: "Cerrar", cancel: "Cancelar", search: "Buscar", export: "Exportar",
      all: "Todos", total: "Total", totals: "Totales", noData: "Sin datos", about: "Acerca de este reporte", aboutScreen: "Acerca de esta pantalla",
      help: "Ayuda", consulted: "Consultado", vsPrev: "vs", vsMonth: "vs mes anterior", noPrev: "Sin dato", loadHint: "Elija los filtros y pulse Cargar.",
      yes: "Sí", no: "No", status: "Estado", date: "Fecha", from: "Desde", to: "Hasta", branch: "Sucursal", seller: "Vendedor", customer: "Cliente",
      supplier: "Proveedor", category: "Categoría", product: "Producto", amount: "Monto", balance: "Saldo", description: "Descripción",
      approve: "Aprobar", reject: "Rechazar", reason: "Motivo", pending: "Pendiente", approved: "Aprobado", rejected: "Rechazado",
      perDay: "por día", loading: "Cargando…", saved: "Guardado", wholeCompany: "Toda la empresa",
      allAreas: "Todas las áreas", viewAll: "Ver todas las pantallas", viewArea: "Ver solo esta área", areas: "Áreas",
      concept: "Concepto", conceptNote: "Pantalla de concepto: diseñada como muestra de lo que puedo construir, no tomada de un sistema en producción.",
      screensN: "{n} pantallas", openArea: "Abrir"
    }
  };
  const STR = { en: Object.assign({}, COMMON.en), es: Object.assign({}, COMMON.es) };

  function pickLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "es") return q;
    try { const s = localStorage.getItem(LANG_KEY); if (s === "en" || s === "es") return s; } catch (e) { /* storage blocked */ }
    return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  }
  let lang = pickLang();
  document.documentElement.lang = lang;

  function t(key, vars) {
    let s = (STR[lang] && STR[lang][key]) || STR.en[key] || key;
    if (vars) Object.keys(vars).forEach(k => { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }
  // Pages register their own texts: UI.strings({ en: {...}, es: {...} })
  function strings(dict) { ["en", "es"].forEach(l => Object.assign(STR[l], dict[l] || {})); }
  // Pick a value from {en, es} objects or return as is
  function L(obj) { return obj && typeof obj === "object" && ("en" in obj || "es" in obj) ? (obj[lang] || obj.en) : obj; }

  function applyI18n(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    (root || document).querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    (root || document).querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    (root || document).querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); el.setAttribute("aria-label", t(el.dataset.i18nTitle)); });
  }
  function setLang(l) {
    if (l === lang) return;
    lang = l;
    document.documentElement.lang = l;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) { /* storage blocked */ }
    paintShell();
    applyI18n();
    document.dispatchEvent(new CustomEvent("langchange", { detail: l }));
  }

  // ---------------- Theme (dark by default, like the original) ----------------
  const THEME_KEY = "bug-theme-v2";
  function storedTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function applyTheme(th) { document.documentElement.setAttribute("data-theme", th === "light" ? "light" : "dark"); }
  function currentTheme() { return document.documentElement.getAttribute("data-theme") || "dark"; }
  applyTheme(storedTheme() || "dark");
  function setTheme(th) {
    applyTheme(th);
    try { localStorage.setItem(THEME_KEY, th); } catch (e) { /* storage blocked */ }
    paintShell();
    document.dispatchEvent(new CustomEvent("themechange"));
  }

  // ---------------- Shell ----------------
  let shellBuilt = false;
  // Sidebar shows only the current area unless the visitor asks for every screen (remembered).
  const NAV_KEY = "bug-nav-all";
  function navAll() { try { return localStorage.getItem(NAV_KEY) === "1"; } catch (e) { return false; } }
  function setNavAll(v) { try { localStorage.setItem(NAV_KEY, v ? "1" : "0"); } catch (e) { /* storage blocked */ } paintShell(); }
  function currentArea() {
    const id = document.body.dataset.page;
    if (id === "area") { const a = new URLSearchParams(location.search).get("a"); return AREAS[a] ? a : null; }
    const p = PAGES.find(x => x.id === id);
    return p && AREAS[p.group] ? p.group : null;
  }
  function mi(name, cls) { return '<span class="material-icons' + (cls ? " " + cls : "") + '" aria-hidden="true">' + name + "</span>"; }

  function paintShell() {
    if (!shellBuilt) return;
    const body = document.body;
    const root = body.dataset.root || "";
    const pageId = body.dataset.page;
    const area = currentArea();
    const page = pageId === "area" && area
      ? { id: "area", icon: AREAS[area].icon, title: GROUPS[area] }
      : (PAGES.find(p => p.id === pageId) || PAGES[0]);
    const all = navAll();
    const link = (href, icon, text, current) => '<a href="' + href + '"' + (current ? ' aria-current="page"' : "") + ' title="' + text + '">' + mi(icon) + '<span class="txt">' + text + "</span></a>";
    const pageLinks = g => PAGES.filter(p => p.group === g).map(p => link(root + p.href, p.icon, L(p.title), p.id === pageId)).join("");
    const areaHref = g => root + "area.html?a=" + g;
    const groups = Object.keys(AREAS);
    let html = '<div class="mc-nav-group"><nav aria-label="' + t("home") + '">' + link(root + "index.html", "apps", t("allAreas"), pageId === "home") + "</nav></div>";
    if (all) {
      // Every area with its screens, segmented; the area label opens the area page.
      html += groups.map(g => '<div class="mc-nav-group"><a class="mc-nav-label mc-nav-label-link" href="' + areaHref(g) + '">' + L(GROUPS[g]) + '</a><nav aria-label="' + L(GROUPS[g]) + '">' + pageLinks(g) + "</nav></div>").join("");
    } else if (area) {
      // Only the current area: its page and its screens.
      html += '<div class="mc-nav-group"><div class="mc-nav-label">' + L(GROUPS[area]) + '</div><nav aria-label="' + L(GROUPS[area]) + '">' +
        link(areaHref(area), AREAS[area].icon, L(GROUPS[area]), pageId === "area") + pageLinks(area) + "</nav></div>";
    } else {
      // Home: one entry per area.
      html += '<div class="mc-nav-group"><div class="mc-nav-label">' + t("areas") + '</div><nav aria-label="' + t("areas") + '">' +
        groups.map(g => link(areaHref(g), AREAS[g].icon, L(GROUPS[g]), false)).join("") + "</nav></div>";
    }
    document.getElementById("mcNav").innerHTML = html;
    const toggle = document.getElementById("mcNavAll");
    toggle.querySelector(".material-icons").textContent = all ? "filter_list" : "view_list";
    toggle.querySelector(".txt").textContent = all ? (area ? t("viewArea") : t("areas")) : t("viewAll");
    toggle.title = toggle.querySelector(".txt").textContent;
    toggle.setAttribute("aria-pressed", String(all));
    document.getElementById("mcTitleIcon").textContent = page.icon;
    document.getElementById("mcTitle").textContent = L(page.title);
    document.title = L(page.title) + " · Business UI Gallery";
    const concept = area && AREAS[area].concept;
    document.getElementById("mcSample").innerHTML = t("sample") + (concept ? ' · <b title="' + t("conceptNote") + '">' + t("concept") + "</b>" : "");
    document.getElementById("mcFooter").innerHTML = mi("apartment") + t("company") + ": <b>" + t("companyName") + "</b>";
    document.querySelectorAll(".mc-lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const lightBtn = document.getElementById("mcLight"), darkBtn = document.getElementById("mcDark");
    lightBtn.classList.toggle("is-active", currentTheme() === "light");
    darkBtn.classList.toggle("is-active", currentTheme() === "dark");
    lightBtn.querySelector(".txt").textContent = t("light");
    darkBtn.querySelector(".txt").textContent = t("dark");
    lightBtn.title = t("light"); darkBtn.title = t("dark");
    document.getElementById("mcHomeTxt").textContent = t("home");
    document.getElementById("mcGit").title = t("source");
    document.getElementById("mcGit").setAttribute("aria-label", t("source"));
    document.getElementById("mcMenu").setAttribute("aria-label", t("menu"));
  }

  function buildShell() {
    const body = document.body;
    const root = body.dataset.root || "";
    const content = document.getElementById("content");
    content.classList.add("mc-content");

    const side = document.createElement("aside");
    side.className = "mc-sidebar";
    side.id = "mcSidebar";
    side.innerHTML =
      '<a class="mc-brand" href="' + root + 'index.html" id="mcHome">' +
        '<span class="mc-brand-mark">' + mi("hub") + '</span><span class="mc-brand-text" id="mcHomeTxt"></span></a>' +
      '<div class="mc-nav" id="mcNav"></div>' +
      '<div class="mc-side-foot">' +
        '<button class="mc-side-btn" type="button" id="mcNavAll">' + mi("view_list") + '<span class="txt"></span></button>' +
        '<button class="mc-side-btn" type="button" id="mcLight">' + mi("light_mode") + '<span class="txt"></span></button>' +
        '<button class="mc-side-btn" type="button" id="mcDark">' + mi("dark_mode") + '<span class="txt"></span></button>' +
      "</div>";

    const main = document.createElement("div");
    main.className = "mc-main";
    main.innerHTML =
      '<header class="mc-topbar">' +
        '<div class="mc-topbar-title">' +
          '<button class="mc-icon-btn mc-menu-btn" type="button" id="mcMenu" aria-controls="mcSidebar" aria-expanded="false">' + mi("menu") + "</button>" +
          '<span class="material-icons" id="mcTitleIcon" aria-hidden="true"></span><h1 id="mcTitle"></h1>' +
          '<span class="mc-sample" id="mcSample"></span>' +
        "</div>" +
        '<div class="mc-topbar-tools">' +
          '<div class="mc-lang" role="group" aria-label="Language / Idioma"><button type="button" data-lang="es">ES</button><button type="button" data-lang="en">EN</button></div>' +
          '<a class="mc-icon-btn" id="mcGit" href="https://github.com/robertomz/business-ui-gallery">' + mi("code") + "</a>" +
        "</div>" +
      "</header>";
    body.insertBefore(side, content);
    body.insertBefore(main, content);
    main.appendChild(content);
    const footer = document.createElement("footer");
    footer.className = "mc-footer";
    footer.id = "mcFooter";
    body.appendChild(footer);
    shellBuilt = true;

    // Desktop: the icon bar expands while the pointer or focus is inside it, like the original.
    side.addEventListener("mouseenter", () => { if (innerWidth > 760) side.classList.add("open"); });
    side.addEventListener("mouseleave", () => { if (innerWidth > 760) side.classList.remove("open"); });
    side.addEventListener("focusin", () => { if (innerWidth > 760) side.classList.add("open"); });
    side.addEventListener("focusout", e => { if (innerWidth > 760 && !side.contains(e.relatedTarget)) side.classList.remove("open"); });
    const menu = document.getElementById("mcMenu");
    menu.addEventListener("click", () => { const o = side.classList.toggle("open"); menu.setAttribute("aria-expanded", String(o)); });
    document.addEventListener("click", e => { if (innerWidth <= 760 && side.classList.contains("open") && !side.contains(e.target) && !menu.contains(e.target)) { side.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); } });
    document.querySelectorAll(".mc-lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
    document.getElementById("mcLight").addEventListener("click", () => setTheme("light"));
    document.getElementById("mcDark").addEventListener("click", () => setTheme("dark"));
    document.getElementById("mcNavAll").addEventListener("click", () => setNavAll(!navAll()));
    paintShell();
    applyI18n();
  }

  // ---------------- Formatting ----------------
  const money = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const int = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  function fmtMoney(n) { return money.format(Math.round(n * 100) / 100); }
  function fmtInt(n) { return int.format(n); }
  function fmtPct(n, d) { return (n * 100).toFixed(d == null ? 1 : d) + "%"; }
  function fmtDate(d) { return d.toISOString().slice(0, 10); }
  // Display date: 16/11/2026 in Spanish, 11/16/2026 in English
  function fmtDay(d) {
    const dd = String(d.getUTCDate()).padStart(2, "0"), mm = String(d.getUTCMonth() + 1).padStart(2, "0"), y = d.getUTCFullYear();
    return lang === "es" ? dd + "/" + mm + "/" + y : mm + "/" + dd + "/" + y;
  }
  function fmtDayShort(d) {
    const dd = String(d.getUTCDate()).padStart(2, "0"), mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    return lang === "es" ? dd + "/" + mm : mm + "/" + dd;
  }
  function monthName(m, short) {
    const n = new Date(Date.UTC(2026, m, 1)).toLocaleString(lang === "es" ? "es" : "en", { month: short ? "short" : "long", timeZone: "UTC" });
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
  function parseMoney(s) { const v = parseFloat(String(s).replace(/,/g, "")); return isNaN(v) ? 0 : v; }
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

  // ---------------- Seeded random (same data on every visit) ----------------
  function rng(seed) {
    let s = seed >>> 0;
    return function () {
      s += 0x6D2B79F5;
      let x = s;
      x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }
  function pick(r, arr) { return arr[Math.floor(r() * arr.length)]; }
  function between(r, a, b) { return a + r() * (b - a); }

  // Sample catalogs. Names are neutral; categories and payment methods are translated with UI.L().
  const DATA = {
    branches: ["North Plaza", "Harbor", "Central Market", "Riverside", "Hillcrest", "West Gate"],
    regions: { "North Plaza": "North", "Harbor": "Coast", "Central Market": "Center", "Riverside": "Center", "Hillcrest": "North", "West Gate": "West" },
    payment: [{ en: "Cash", es: "Contado" }, { en: "Card", es: "Tarjeta" }, { en: "Credit", es: "Crédito" }, { en: "Transfer", es: "Transferencia" }],
    sellers: ["A. Torres", "B. Lopez", "C. Ramos", "D. Medina", "E. Castro", "F. Ortiz", "G. Reyes", "H. Flores", "I. Vargas", "J. Molina"],
    customers: ["Blue Fern Market", "Corner Grocer", "Daily Basket", "Elm Street Store", "Fresh Stop", "Golden Spoon Cafe", "Green Leaf Deli", "Harvest Mini Mart", "Lakeside Foods", "Maple Pantry", "Northside Market", "Oak & Grain", "Pine Valley Shop", "Quick Pick", "Red Barn Grocery", "Sunrise Bakery", "Twin Rivers Market", "Union Corner", "Village Pantry", "Wildflower Foods"],
    categories: [{ en: "Beverages", es: "Bebidas" }, { en: "Dairy", es: "Lácteos" }, { en: "Snacks", es: "Snacks" }, { en: "Cleaning", es: "Limpieza" }, { en: "Personal care", es: "Cuidado personal" }, { en: "Canned goods", es: "Enlatados" }, { en: "Grains", es: "Granos" }],
    products: [
      ["Sparkling water 600 ml", 0], ["Orange juice 1 L", 0], ["Cola 2 L", 0], ["Iced tea 500 ml", 0],
      ["Whole milk 1 L", 1], ["Cheddar cheese 400 g", 1], ["Yogurt 6-pack", 1], ["Butter 250 g", 1],
      ["Potato chips 150 g", 2], ["Salted peanuts 200 g", 2], ["Chocolate bar 90 g", 2], ["Corn crackers 300 g", 2],
      ["Laundry detergent 2 kg", 3], ["Dish soap 750 ml", 3], ["Bleach 1 L", 3], ["Floor cleaner 1 L", 3],
      ["Shampoo 400 ml", 4], ["Toothpaste 100 ml", 4], ["Bath soap 3-pack", 4],
      ["Tuna can 140 g", 5], ["Black beans 400 g", 5], ["Tomato sauce 250 g", 5],
      ["White rice 2 kg", 6], ["Pasta 500 g", 6], ["Oats 800 g", 6]
    ],
    suppliers: ["Northwind Foods", "Contoso Beverages", "Fabrikam Home", "Litware Dairy", "Adventure Snacks", "Tailspin Grains"],
    banks: ["First Harbor Bank", "Metro Savings", "Union Trust", "Pacific Credit"],
    costCenters: [{ en: "Sales North", es: "Ventas Norte" }, { en: "Sales Center", es: "Ventas Centro" }, { en: "Sales Coast", es: "Ventas Costa" }, { en: "Warehouse", es: "Bodega" }, { en: "Logistics", es: "Logística" }, { en: "Administration", es: "Administración" }, { en: "IT", es: "TI" }],
    firstNames: ["Ana", "Luis", "Maria", "Carlos", "Sofia", "Jorge", "Elena", "Pedro", "Lucia", "Diego", "Valeria", "Miguel", "Camila", "Andres", "Paula", "Ricardo", "Daniela", "Hector", "Gabriela", "Oscar"],
    lastNames: ["Torres", "Lopez", "Ramos", "Medina", "Castro", "Ortiz", "Reyes", "Flores", "Vargas", "Molina", "Rivera", "Cruz", "Mendoza", "Herrera", "Aguilar"],
    // Health area (concept screens). Doctors and patients are invented.
    doctors: [
      { name: "Dr. A. Rivera", spec: { en: "General medicine", es: "Medicina general" } },
      { name: "Dra. L. Mendoza", spec: { en: "Pediatrics", es: "Pediatría" } },
      { name: "Dr. M. Herrera", spec: { en: "Internal medicine", es: "Medicina interna" } },
      { name: "Dra. S. Aguilar", spec: { en: "Gynecology", es: "Ginecología" } },
      { name: "Dr. J. Cruz", spec: { en: "Cardiology", es: "Cardiología" } },
      { name: "Dra. P. Flores", spec: { en: "Dermatology", es: "Dermatología" } }
    ],
    clinicServices: [
      { name: { en: "General consultation", es: "Consulta general" }, price: 35 },
      { name: { en: "Specialist consultation", es: "Consulta de especialidad" }, price: 60 },
      { name: { en: "Follow-up visit", es: "Control" }, price: 25 },
      { name: { en: "Lab tests", es: "Laboratorio" }, price: 40 },
      { name: { en: "Ultrasound", es: "Ultrasonido" }, price: 75 },
      { name: { en: "Minor procedure", es: "Procedimiento menor" }, price: 120 }
    ],
    insurers: ["Private pay", "Andes Health", "BlueCross Demo", "Meridian Care", "Pacific Life"],
    allergies: [{ en: "Penicillin", es: "Penicilina" }, { en: "Sulfa drugs", es: "Sulfas" }, { en: "Ibuprofen", es: "Ibuprofeno" }, { en: "Latex", es: "Látex" }, { en: "Peanuts", es: "Maní" }],
    bloodTypes: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+"]
  };

  function cssVar(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

  // ---------------- Widgets ----------------
  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2800);
  }
  // Modals open empty and close only with their buttons (no Esc, no backdrop click). Focus moves in and back.
  function openModal(id) {
    const m = document.getElementById(id);
    m._opener = document.activeElement;
    m.classList.add("open");
    const f = m.querySelector("input:not([type=hidden]), select, textarea, button");
    if (f) f.focus();
  }
  function closeModal(id) {
    const m = document.getElementById(id);
    m.classList.remove("open");
    if (m._opener && m._opener.focus) m._opener.focus();
  }
  // Help "?" button: UI.helpBtn(textKey) returns HTML; clicking opens a small dialog with the translated text.
  function helpBtn(key) { return '<button type="button" class="ig-ayuda" data-help="' + key + '" aria-label="' + t("help") + '">' + mi("help_outline") + "</button>"; }
  function ensureHelpModal() {
    if (document.getElementById("helpModal")) return;
    const d = document.createElement("div");
    d.className = "modal-backdrop"; d.id = "helpModal";
    d.innerHTML = '<div class="modal modal-sm" role="dialog" aria-modal="true" aria-labelledby="helpTitle"><div class="modal-head"><h3 id="helpTitle">' + mi("help_outline") + '<span></span></h3></div>' +
      '<div class="modal-body" id="helpBody" style="font-size:13px;line-height:1.55"></div><div class="modal-foot"><button type="button" class="btn btn-primary" id="helpOk"></button></div></div>';
    document.body.appendChild(d);
    document.getElementById("helpOk").addEventListener("click", () => closeModal("helpModal"));
  }
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-help]");
    if (!b) return;
    ensureHelpModal();
    document.querySelector("#helpTitle span").textContent = t("help");
    document.getElementById("helpBody").innerHTML = t(b.dataset.help);
    document.getElementById("helpOk").textContent = t("close");
    openModal("helpModal");
  });

  // Delta chip like the original: arrow + value (+%) vs date. goodWhenUp decides the color.
  function delta(cur, prev, opts) {
    opts = opts || {};
    const label = opts.label || "";
    if (prev == null || isNaN(prev)) return '<span class="ig-delta">— ' + t("noPrev") + " <small>" + label + "</small></span>";
    const diff = cur - prev;
    const up = diff >= 0;
    const good = opts.goodWhenUp === false ? !up : up;
    const cls = Math.abs(diff) < 1e-9 ? "" : (good ? "is-good" : "is-bad");
    let txt;
    if (opts.points) txt = (up ? "+" : "") + (diff * 100).toFixed(1) + " pts";
    else {
      const pct = prev ? diff / Math.abs(prev) : 0;
      txt = (up ? "+" : "−") + fmtMoney(Math.abs(diff)) + " (" + (up ? "+" : "−") + Math.abs(pct * 100).toFixed(1) + "%)";
      if (opts.int) txt = (up ? "+" : "−") + fmtInt(Math.abs(diff));
    }
    return '<span class="ig-delta ' + cls + '">' + mi(up ? "arrow_upward" : "arrow_downward") + txt + " <small>" + label + "</small></span>";
  }
  // Sparkline: polyline + one HTML dot per day (dots stay round at any width).
  function sparkline(values, labels, title) {
    if (!values || !values.length) return "";
    const min = Math.min.apply(null, values), max = Math.max.apply(null, values);
    const span = max - min || 1;
    const pts = values.map((v, i) => [values.length === 1 ? 50 : (i / (values.length - 1)) * 100, 100 - ((v - min) / span) * 100]);
    const dots = pts.map((p, i) => '<span class="ig-punto' + (i === pts.length - 1 ? " is-ultimo" : "") + '" style="left:' + p[0] + "%;top:" + p[1] + '%" title="' + (labels ? labels[i] + ": " : "") + (Math.abs(values[i]) < 2 && values[i] % 1 !== 0 ? fmtPct(values[i]) : fmtMoney(values[i])) + '"></span>').join("");
    return '<div class="ig-sparkline"><div class="ig-sparkline-head">' + title + '</div><div class="ig-sparkline-area" role="img" aria-label="' + title + '">' +
      '<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polyline vector-effect="non-scaling-stroke" points="' + pts.map(p => p.join(",")).join(" ") + '"/></svg>' + dots +
      '</div><div class="ig-sparkline-eje"><span>' + (labels ? labels[0] : "") + "</span><span>" + (labels ? labels[labels.length - 1] : "") + "</span></div></div>";
  }
  // Standard "About this report" box placed at the end of each screen.
  function aboutBox(key, titleKey) {
    return '<section class="mc-about"><h3>' + mi("info") + '<span data-i18n="' + (titleKey || "about") + '">' + t(titleKey || "about") + '</span></h3><div data-i18n-html="' + key + '">' + t(key) + "</div></section>";
  }
  function csvDownload(filename, rows) {
    const csv = rows.map(r => r.map(v => { const s = String(v == null ? "" : v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
  }

  window.UI = {
    PAGES, GROUPS, AREAS, mi, t, L, strings, applyI18n, get lang() { return lang; }, setLang, currentTheme, setTheme,
    fmtMoney, fmtInt, fmtPct, fmtDate, fmtDay, fmtDayShort, monthName, parseMoney, maskMoney,
    rng, pick, between, DATA, cssVar, toast, openModal, closeModal, helpBtn, delta, sparkline, aboutBox, csvDownload
  };

  document.addEventListener("DOMContentLoaded", buildShell);
})();
