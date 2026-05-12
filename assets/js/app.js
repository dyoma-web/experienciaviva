/* ============================================================
   App común — header, footer, búsqueda y tabs
   ============================================================ */

function renderHeader(activePage) {
  const nav = [
    { id: "home",        label: "Inicio",         href: "index.html" },
    { id: "repositorio", label: "Repositorio",    href: "repositorio.html" },
    { id: "proyectos",   label: "Proyectos",      href: "proyectos.html" },
    { id: "explorador",  label: "Explorador",     href: "explorador.html" },
    { id: "mapa",        label: "Mapa",           href: "mapa.html" },
    { id: "dashboards",  label: "Dashboards",     href: "dashboards.html" },
    { id: "lecciones",   label: "Lecciones",      href: "lecciones.html" },
    { id: "soluciones",  label: "Soluciones",     href: "soluciones.html" },
    { id: "aprendizaje", label: "Aprendizaje",    href: "aprendizaje.html" },
    { id: "comunidades", label: "Comunidades",    href: "comunidades.html" }
  ];

  const navHTML = nav.map(n =>
    `<a href="${n.href}" class="${activePage===n.id?'active':''}">${n.label}</a>`
  ).join("");

  return `
  <div class="pnud-bar">
    <div>República de Guatemala · Programa de las Naciones Unidas para el Desarrollo</div>
    <div>
      <a href="#">Español</a>
      <a href="#">English</a>
      <a href="editorial.html">Acceso editorial</a>
    </div>
  </div>
  <header class="pnud-header">
    <div class="pnud-header-inner">
      <a href="index.html" class="pnud-logo">
        <div class="pnud-logo-mark"><img src="assets/img/undp-logo-blue.svg" alt="UNDP"></div>
        <div class="pnud-logo-text">
          Plataforma de Conocimiento Aplicado
          <small>PNUD Guatemala</small>
        </div>
      </a>
      <nav class="pnud-nav">${navHTML}</nav>
      <div class="pnud-actions">
        <div class="pnud-search-mini">
          ${icon("search",{size:14,color:"var(--undp-dark-gray)"})}
          <input type="text" placeholder="Buscar…" id="globalSearch">
        </div>
        <a href="briefs.html" class="btn btn-primary btn-sm">Briefs</a>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="pnud-footer">
    <div class="container">
      <div class="pnud-footer-grid">
        <div>
          <div class="pnud-logo" style="color:white;">
            <div class="pnud-logo-mark on-dark"><img src="assets/img/undp-logo-blue.svg" alt="UNDP"></div>
            <div class="pnud-logo-text" style="color:white;">
              Plataforma de Conocimiento Aplicado
              <small style="color:rgba(255,255,255,0.7)">PNUD Guatemala</small>
            </div>
          </div>
          <p style="margin-top:16px; opacity:0.8; font-size:13px;">
            Infraestructura nacional de conocimiento aplicado para el desarrollo.
            No es una biblioteca digital, es un ecosistema que convierte proyectos, publicaciones
            y experiencias en aprendizaje, colaboración y soluciones reutilizables.
          </p>
        </div>
        <div>
          <h5>Explorar</h5>
          <ul>
            <li><a href="repositorio.html">Repositorio</a></li>
            <li><a href="proyectos.html">Proyectos</a></li>
            <li><a href="explorador.html">Explorador de evidencia</a></li>
            <li><a href="mapa.html">Mapa de conocimiento</a></li>
            <li><a href="dashboards.html">Dashboards</a></li>
          </ul>
        </div>
        <div>
          <h5>Aplicar</h5>
          <ul>
            <li><a href="lecciones.html">Lecciones aprendidas</a></li>
            <li><a href="soluciones.html">Catálogo de soluciones</a></li>
            <li><a href="aprendizaje.html">Rutas de aprendizaje</a></li>
            <li><a href="comunidades.html">Comunidades de práctica</a></li>
            <li><a href="briefs.html">Constructor de briefs</a></li>
          </ul>
        </div>
        <div>
          <h5>Institucional</h5>
          <ul>
            <li><a href="editorial.html">Panel editorial</a></li>
            <li><a href="#">Gobernanza editorial</a></li>
            <li><a href="#">Términos de uso</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Accesibilidad</a></li>
          </ul>
        </div>
      </div>
      <div class="pnud-footer-bottom">
        <div>© 2026 PNUD Guatemala · Programa de las Naciones Unidas para el Desarrollo</div>
        <div>v 1.0 MVP · Construido con UNDP Design System</div>
      </div>
    </div>
  </footer>`;
}

function mountChrome(activePage) {
  const h = document.getElementById("siteHeader");
  if (h) h.innerHTML = renderHeader(activePage);
  const f = document.getElementById("siteFooter");
  if (f) f.innerHTML = renderFooter();

  // Búsqueda global redirige al explorador
  const gs = document.getElementById("globalSearch");
  if (gs) {
    gs.addEventListener("keydown", e => {
      if (e.key === "Enter" && gs.value.trim()) {
        location.href = "explorador.html?q=" + encodeURIComponent(gs.value);
      }
    });
  }
}

function activateTabs() {
  document.querySelectorAll(".tabs").forEach(tabs => {
    tabs.querySelectorAll(".tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.target;
        tabs.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const container = tabs.parentElement;
        container.querySelectorAll(".tab-panel").forEach(p => {
          p.classList.toggle("active", p.id === target);
        });
      });
    });
  });
}

function qs(name) {
  const u = new URLSearchParams(location.search);
  return u.get(name);
}

function recursoCard(r, mediaText = null) {
  const ods = (r.ods || []).slice(0, 3).map(n => `<span class="ods-badge ods-${n}" title="ODS ${n}">${n}</span>`).join("");
  const territorios = (r.territorio || []).map(t => getTerritorio(t)?.nombre).filter(Boolean).join(", ");
  const pic = foto(r.id);
  const mediaClass = pic ? "has-photo" : `ods-${r.color||17}`;
  const mediaStyle = pic ? `style="background-image:url('${pic}');"` : "";
  return `
    <a href="recurso.html?id=${r.id}" class="card">
      <div class="card-media ${mediaClass}" ${mediaStyle}><span class="media-tag">${mediaText || r.tipo}</span></div>
      <div class="card-body">
        <div class="card-eyebrow">${r.tipo} · ${r.anio}</div>
        <h3 class="card-title">${r.titulo}</h3>
        <p class="card-desc">${r.descripcion}</p>
        <div class="card-meta">
          ${ods}
          <span style="margin-left:8px;">${territorios || "Nacional"}</span>
        </div>
      </div>
    </a>`;
}

function proyectoCard(p) {
  const ods = (p.ods || []).slice(0, 3).map(n => `<span class="ods-badge ods-${n}">${n}</span>`).join("");
  const territorios = (p.territorio || []).map(t => getTerritorio(t)?.nombre).filter(Boolean).join(", ");
  const estadoClass = ({"Activo":"tag-green","Cerrado":"tag","Escalado":"tag-blue","En diseño":"tag-yellow","Replicado":"tag-blue"})[p.estado] || "tag";
  const pic = foto(p.id);
  const mediaClass = pic ? "has-photo" : `ods-${p.ods[0]||17}`;
  const mediaStyle = pic ? `style="background-image:url('${pic}');"` : "";
  return `
    <a href="proyecto.html?id=${p.id}" class="card">
      <div class="card-media ${mediaClass}" ${mediaStyle}><span class="media-tag">${p.programa}</span></div>
      <div class="card-body">
        <div class="card-eyebrow">
          <span class="tag ${estadoClass}">${p.estado}</span>
        </div>
        <h3 class="card-title">${p.nombre}</h3>
        <p class="card-desc">${p.resumen}</p>
        <div class="card-meta">
          ${ods}
          <span style="margin-left:8px;">${territorios}</span>
        </div>
      </div>
    </a>`;
}

function leccionCard(l) {
  const ods = (l.ods || []).slice(0, 3).map(n => `<span class="ods-badge ods-${n}">${n}</span>`).join("");
  const pic = foto(l.id);
  const bgStyle = pic
    ? `background-image:url('${pic}'); aspect-ratio: 5/2;`
    : `background: linear-gradient(135deg, var(--undp-blue-dark), var(--undp-blue)); aspect-ratio: 5/2;`;
  const cls = pic ? "has-photo" : "";
  return `
    <a href="leccion.html?id=${l.id}" class="card">
      <div class="card-media ${cls}" style="${bgStyle}">
        <span class="media-tag">LECCIÓN APRENDIDA</span>
      </div>
      <div class="card-body">
        <div class="card-eyebrow">${l.proyectoNombre}</div>
        <h3 class="card-title">${l.titulo}</h3>
        <p class="card-desc"><strong>Qué funcionó:</strong> ${l.queFunciono}</p>
        <div class="card-meta">${ods}</div>
      </div>
    </a>`;
}

function solucionCard(s) {
  const ods = (s.ods || []).slice(0, 3).map(n => `<span class="ods-badge ods-${n}">${n}</span>`).join("");
  const pic = foto(s.id);
  const bgStyle = pic
    ? `background-image:url('${pic}'); aspect-ratio: 5/2;`
    : `background: linear-gradient(135deg, #00558B, var(--undp-blue-light)); aspect-ratio: 5/2;`;
  const cls = pic ? "has-photo" : "";
  return `
    <a href="solucion.html?id=${s.id}" class="card">
      <div class="card-media ${cls}" style="${bgStyle}">
        <span class="media-tag">${s.tipo.toUpperCase()}</span>
      </div>
      <div class="card-body">
        <div class="card-eyebrow">Solución replicable</div>
        <h3 class="card-title">${s.nombre}</h3>
        <p class="card-desc">${s.problema}</p>
        <div class="card-meta">
          ${ods}
          <span style="margin-left:8px; display:inline-flex; align-items:center; gap:4px;">${typeof icon==="function"?icon("clock",{size:13,color:"var(--undp-dark-gray)"}):""} ${s.tiempo}</span>
        </div>
      </div>
    </a>`;
}
