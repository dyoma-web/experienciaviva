# Experiencia Viva
### Plataforma Nacional de Conocimiento Aplicado · PNUD Guatemala

> *"No se propone una biblioteca digital, sino una plataforma de conocimiento aplicado que convierte proyectos, publicaciones y experiencias en aprendizaje, colaboración, evidencia y soluciones reutilizables."*

MVP navegable de la plataforma nacional de conocimiento aplicado para el desarrollo. Construido sobre el [UNDP Design System](https://design.undp.org) y los lineamientos de marca del PNUD.

---

## Principio central

La plataforma **no usa inteligencia artificial generativa**. Es una decisión deliberada de diseño basada en:

- **Trazabilidad institucional** — cada pieza publicada es revisada y firmada por equipos humanos
- **Soberanía tecnológica** — sin dependencias de modelos de terceros
- **Control editorial** — gobernanza editorial documentada y auditable
- **Protección de datos** — cumplimiento normativo nacional

El sistema activa el conocimiento mediante **arquitectura de información, metadatos, taxonomías controladas, curaduría editorial, búsqueda avanzada, dashboards, mapas, rutas de aprendizaje y comunidades de práctica**.

---

## Módulos del MVP

| # | Módulo | Pantalla |
|---|---|---|
| 1 | Repositorio estructurado | `repositorio.html` · `recurso.html` |
| 2 | Banco de proyectos | `proyectos.html` · `proyecto.html` |
| 3 | Explorador de evidencia | `explorador.html` |
| 4 | Mapa de conocimiento | `mapa.html` |
| 5 | Dashboards | `dashboards.html` |
| 6 | Banco de lecciones aprendidas | `lecciones.html` · `leccion.html` |
| 7 | Catálogo de soluciones replicables | `soluciones.html` · `solucion.html` |
| 8 | Rutas de aprendizaje | `aprendizaje.html` |
| 9 | Comunidades de práctica (Fase 2) | `comunidades.html` |
| 10 | Constructor humano de briefs | `briefs.html` |
| 11 | Panel editorial | `editorial.html` |

---

## Stack técnico

- **HTML5 + CSS3 + JavaScript vanilla** — sin frameworks pesados
- **[UNDP Design System](https://design.undp.org)** — `@undp/design-system-assets` desde CDN jsDelivr
- **[Leaflet](https://leafletjs.com)** + OpenStreetMap — mapa territorial
- **[Chart.js](https://www.chartjs.org)** — dashboards y visualizaciones
- **Fuentes** — Proxima Nova (UNDP)
- **Iconos** — 45 SVG inline en estilo UNDP (trazo 2px, geometría simple)

---

## Estructura

```
/
├── index.html              Inicio
├── repositorio.html        Listado de recursos
├── recurso.html            Detalle de recurso
├── proyectos.html          Listado de proyectos
├── proyecto.html           Detalle de proyecto
├── explorador.html         Explorador con dossier consolidado
├── mapa.html               Mapa territorial (Leaflet)
├── dashboards.html         Tableros (Chart.js)
├── lecciones.html          Banco de lecciones
├── leccion.html            Detalle de lección
├── soluciones.html         Catálogo de soluciones
├── solucion.html           Detalle de solución
├── aprendizaje.html        Rutas formativas
├── comunidades.html        Comunidades de práctica
├── briefs.html             Constructor humano de briefs
├── editorial.html          Panel editorial
└── assets/
    ├── css/
    │   └── undp-custom.css   Estilos personalizados sobre UNDP DS
    ├── img/
    │   ├── undp-logo-blue.svg
    │   └── pics/             Fotografías temáticas
    └── js/
        ├── icons.js          Sistema de iconos UNDP
        ├── data.js           Datos mock (proyectos, recursos, etc.)
        └── app.js            Header, footer, helpers comunes
```

---

## Cómo correrlo localmente

Servidor web estático en la raíz del proyecto. Con WAMP/XAMPP:

```
http://localhost/Guatemala/index.html
```

O con Python:

```bash
python -m http.server 8080
# Luego abre http://localhost:8080
```

---

## Datos mock incluidos

- **10 proyectos** vinculados a 22 departamentos de Guatemala
- **12 recursos** (publicaciones, datasets, videos, guías, manuales)
- **10 lecciones aprendidas** con estructura accionable
- **6 soluciones replicables** con pasos, plantillas e indicadores
- **6 rutas formativas** temáticas
- **5 comunidades de práctica**
- **17 ODS** con colores oficiales

Todo interconectado: cada recurso pertenece a un proyecto, cada proyecto tiene lecciones, cada solución viene de un proyecto y conecta con rutas.

---

## Estado del MVP

Fase 1 — **MVP navegable completo**. Listo para revisión institucional y validación con stakeholders.

Próximas fases:
- **Fase 2** — Activación de comunidades, constructor de briefs operativo, integración Moodle, API pública
- **Fase 3** — Federación con otras plataformas, grafo de conocimiento, multilingüe completo

---

## Licencia y atribución

Propuesta institucional para el PNUD Guatemala. Logo y marca propiedad de UNDP.
Fotografías de stock con licencia de uso libre.

---

**PNUD Guatemala · 2026**
