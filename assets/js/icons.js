/* ============================================================
   Sistema de iconos — Estilo UNDP Design System
   Trazo 2px, geometría simple, color de marca configurable
   ============================================================ */

const ICONS = {
  // ========= MÓDULOS / CATEGORÍAS =========
  repository: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 4h14a2 2 0 0 1 2 2v22H7a2 2 0 0 1-2-2V4z" stroke="currentColor" stroke-width="2"/>
    <path d="M9 4v22" stroke="currentColor" stroke-width="2"/>
    <path d="M13 10h4M13 14h4" stroke="currentColor" stroke-width="2"/>
    <path d="M21 6h6v22h-6" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  projects: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8h10l2 3h12v17H4V8z" stroke="currentColor" stroke-width="2"/>
    <path d="M4 14h24" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  explorer: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="9" stroke="currentColor" stroke-width="2"/>
    <path d="M20.5 20.5L28 28" stroke="currentColor" stroke-width="2"/>
    <path d="M10 14h8M14 10v8" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  map: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7l8-3 10 3 8-3v21l-8 3-10-3-8 3V7z" stroke="currentColor" stroke-width="2"/>
    <path d="M11 4v21M21 7v21" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  dashboard: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28V14M12 28V4M20 28v-9M28 28V10" stroke="currentColor" stroke-width="2"/>
    <path d="M3 28h26" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  lessons: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3a9 9 0 0 0-6 15.7c1.4 1.3 2 2.4 2 3.8v.5h8v-.5c0-1.4.6-2.5 2-3.8A9 9 0 0 0 16 3z" stroke="currentColor" stroke-width="2"/>
    <path d="M13 27h6M14 30h4" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  solutions: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 11h22v17H5V11z" stroke="currentColor" stroke-width="2"/>
    <path d="M12 11V6h8v5" stroke="currentColor" stroke-width="2"/>
    <path d="M5 18h22M14 16v4M18 16v4" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  learning: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12l14-6 14 6-14 6L2 12z" stroke="currentColor" stroke-width="2"/>
    <path d="M8 15v8c0 2 3.6 4 8 4s8-2 8-4v-8" stroke="currentColor" stroke-width="2"/>
    <path d="M28 12v8" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  communities: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="4" stroke="currentColor" stroke-width="2"/>
    <circle cx="22" cy="13" r="3" stroke="currentColor" stroke-width="2"/>
    <path d="M3 26c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="2"/>
    <path d="M19 22c1-2 3-3 5-3 3 0 5 2 5 5" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  briefs: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3h13l5 5v21H7V3z" stroke="currentColor" stroke-width="2"/>
    <path d="M20 3v5h5" stroke="currentColor" stroke-width="2"/>
    <path d="M12 14h11M12 18h11M12 22h7" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  editorial: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" stroke="currentColor" stroke-width="2"/>
    <path d="M10 16l4 4 8-8" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  taxonomy: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" stroke="currentColor" stroke-width="2"/>
    <path d="M3 16h26M16 3c4 4 4 22 0 26M16 3c-4 4-4 22 0 26" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  // ========= UI / ACCIONES =========
  search: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.12" cy="8.44" r="6.7" stroke="currentColor" stroke-width="2"/>
    <path d="M18.8 17.88L12.87 13.23" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  download: `<svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 10.15V16.3h17.5V10.15" stroke="currentColor" stroke-width="2"/>
    <path d="M9.77 0v11.19" stroke="currentColor" stroke-width="2"/>
    <path d="M5 6.85l4.8 5.14 4.8-5.14" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  external: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3h6v6M17 3l-9 9" stroke="currentColor" stroke-width="2"/>
    <path d="M14 12v5H3V6h5" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  check: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10l5 5 9-10" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  times: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  arrowRight: `<svg viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6h18M13 1l5 5-5 5" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  chevronRight: `<svg viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3l6 7-6 7" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  mail: `<svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="18" height="14" stroke="currentColor" stroke-width="2"/>
    <path d="M1 1l9 8 9-8" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  filter: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3h18l-7 9v6l-4-2v-4L1 3z" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  package: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6l8-4 8 4v8l-8 4-8-4V6z" stroke="currentColor" stroke-width="2"/>
    <path d="M2 6l8 4 8-4M10 10v8" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  target: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
    <circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="2"/>
    <circle cx="10" cy="10" r="1" fill="currentColor"/>
  </svg>`,

  alert: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L1 17h18L10 2z" stroke="currentColor" stroke-width="2"/>
    <path d="M10 8v4M10 14v.5" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  refresh: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10a8 8 0 0 1 14-5l2-2v6h-6" stroke="currentColor" stroke-width="2"/>
    <path d="M18 10a8 8 0 0 1-14 5l-2 2v-6h6" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  document: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 1h9l4 4v14H4V1z" stroke="currentColor" stroke-width="2"/>
    <path d="M13 1v4h4M7 10h6M7 13h6M7 16h4" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  tools: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2a3 3 0 0 0-3 4l-8 8 3 3 8-8a3 3 0 0 0 4-3l-2 2-2-2 2-2-2-2z" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  clock: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
    <path d="M10 5v5l3 3" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  money: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
    <path d="M10 5v10M7 8h4.5a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3H13" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  globe: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
    <path d="M2 10h16M10 2c3 3 3 13 0 16M10 2c-3 3-3 13 0 16" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  link: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12a4 4 0 0 1 0-5l3-3a4 4 0 0 1 5 5l-2 2" stroke="currentColor" stroke-width="2"/>
    <path d="M12 8a4 4 0 0 1 0 5l-3 3a4 4 0 0 1-5-5l2-2" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  attach: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 7l-7 7a3 3 0 0 1-4-4l8-8a4 4 0 0 1 6 6l-9 9a5 5 0 0 1-7-7" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  pencil: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17l3-1L17 5l-2-2L4 14l-1 3z" stroke="currentColor" stroke-width="2"/>
    <path d="M13 5l2 2" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  shield: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5l7-3z" stroke="currentColor" stroke-width="2"/>
    <path d="M7 10l2 2 4-4" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  save: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h12l3 3v12H3V3z" stroke="currentColor" stroke-width="2"/>
    <path d="M6 3v5h8V3M6 18v-6h8v6" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  chat: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3h16v12H7l-5 4V3z" stroke="currentColor" stroke-width="2"/>
    <path d="M6 8h8M6 11h6" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  construction: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 17h16M3 13h14v4H3v-4z" stroke="currentColor" stroke-width="2"/>
    <path d="M5 13V8h10v5M8 8V4h4v4" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  pin: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18s6-6 6-11a6 6 0 0 0-12 0c0 5 6 11 6 11z" stroke="currentColor" stroke-width="2"/>
    <circle cx="10" cy="7" r="2" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  exclam: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
    <path d="M10 5v6M10 14v.5" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  star: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2l2.5 5 5.5.8-4 4 1 5.5L10 14.7 5 17.3l1-5.5-4-4L7.5 7l2.5-5z" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  video: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="11" height="10" stroke="currentColor" stroke-width="2"/>
    <path d="M13 9l5-3v8l-5-3V9z" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  book: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h6c1 0 2 1 2 2v13c0-1-1-2-2-2H3V3z" stroke="currentColor" stroke-width="2"/>
    <path d="M17 3h-6c-1 0-2 1-2 2v13c0-1 1-2 2-2h6V3z" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  case: `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6h16v12H2V6z" stroke="currentColor" stroke-width="2"/>
    <path d="M7 6V3h6v3" stroke="currentColor" stroke-width="2"/>
  </svg>`
};

/* Render helper: icon(name, opts?)
   opts.size — px (default 24)
   opts.color — CSS color (default currentColor)
   opts.cls — extra CSS class */
function icon(name, opts = {}) {
  const svg = ICONS[name] || ICONS.check;
  const size = opts.size || 24;
  const color = opts.color || "currentColor";
  const cls = opts.cls || "";
  return svg.replace(
    "<svg ",
    `<svg class="undp-icon ${cls}" style="width:${size}px;height:${size}px;color:${color};vertical-align:middle;flex-shrink:0;" `
  );
}
