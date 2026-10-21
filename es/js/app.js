"use strict";
/* ===== Arranque: navegación entre vistas, rutas por hash y tema =====
   Adaptado de lab_iesmdb (editables_lab_iesmdb/web/js/app.js): mismas funciones show(),
   VIEW_LOADERS y enrutado «#vista/argumento», y el mismo botón de tema (sistema → claro → oscuro).
   depende de: store.js y de los cargadores globales de las vistas (*view.js, cargados antes). */

const tabs = document.getElementById("tabs");
const views = [...document.querySelectorAll(".view")];
function activeViewId(){ const v = views.find(v => v.classList.contains("active")); return v ? v.id : null; }

/* el capítulo abierto se marca en la pestaña «Kapituluak» */
const ENTRY = { kapitulua: "kapituluak" };

function show(id){
  if (!document.getElementById(id)) return;
  views.forEach(v => v.classList.toggle("active", v.id === id));
  const entry = ENTRY[id] || id;
  tabs.querySelectorAll("button[data-view]").forEach(b =>
    b.setAttribute("aria-current", b.dataset.view === entry ? "true" : "false"));
  const cur = (location.hash || "").replace(/^#/, "").split("/")[0];
  if (cur !== id){ try { location.hash = id; } catch (e){} }
  window.scrollTo(0, 0);
  const h = document.getElementById(id).querySelector("h1");
  if (h){ h.setAttribute("tabindex", "-1"); try { h.focus({ preventScroll: true }); } catch (e){} }
}
tabs.addEventListener("click", e => {
  const b = e.target.closest("button[data-view]"); if (!b) return;
  show(b.dataset.view);
  const fn = window.VIEW_LOADERS[b.dataset.view];
  if (fn && typeof window[fn] === "function") window[fn]();
});

/* Registro vista → cargador (como en lab_iesmdb). */
window.VIEW_LOADERS = {
  hasiera: "loadHasiera", kapituluak: "loadKapituluak", kapitulua: "loadKapitulua",
  ariketak: "loadEjercicios", glosarioa: "loadGlosario",
};

function parseHash(){
  const raw = (location.hash || "").replace(/^#/, "");
  if (!raw) return { go: "hasiera", arg: null };
  const [go, ...rest] = raw.split("/");
  let arg = rest.length ? rest.join("/") : null;
  try { if (arg) arg = decodeURIComponent(arg); } catch (e){}
  return document.getElementById(go) && document.getElementById(go).classList.contains("view") ? { go, arg } : null;
}
function routeFromHash(){
  const r = parseHash();
  if (!r){ return; }                           // ancla interna (#a3, #contenido): no es una vista
  if (r.go !== activeViewId()) show(r.go);
  const fn = window.VIEW_LOADERS[r.go];
  if (fn && typeof window[fn] === "function"){
    try { window[fn](r.arg); } catch (e){ console.error(e); }
  }
}
window.addEventListener("hashchange", routeFromHash);
document.addEventListener("DOMContentLoaded", routeFromHash);

/* ----- tema: sistema → claro → oscuro, guardado (clave propia de JAKINA) ----- */
const themeBtn = document.getElementById("theme");
function applyTheme(t){
  if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  else document.documentElement.removeAttribute("data-theme");
}
function themeIcon(t){ return t === "light" ? "☀" : t === "dark" ? "☾" : "◐"; }
let theme = store.get("jakina-theme", "system");
applyTheme(theme);
themeBtn.textContent = themeIcon(theme);
themeBtn.addEventListener("click", () => {
  theme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  store.set("jakina-theme", theme);
  applyTheme(theme);
  themeBtn.textContent = themeIcon(theme);
});

/* ----- botón de lengua (EU | ES): misma vista y #hash en la otra versión; elección recordada ----- */
/* (19-10, dsh-4) La web vasca cuelga de la raíz y la castellana de es/. El enlace llega `hidden` en el HTML
   (nota de coordinación: ninguna publicación puede sacar un botón ES que dé 404) y aquí solo se revela si
   la otra lengua existe de verdad: en eu se sondea es/ y en es basta con mostrar el retorno a eu. El propio
   enlace se reconfigura según dónde estemos, así la copia que genera `eraiki` no necesita cambiar nada.
   La elección se guarda con "jakina-hizk" (store ya envuelve localStorage en try/catch) y una visita nueva
   va directa a la lengua elegida conservando el #hash. */
const hizk = document.getElementById("hizk");
const HIZK_A_ES = { href: "es/", text: "ES", lang: "es", title: "Versión en castellano" };
const HIZK_A_EU = { href: "../", text: "EU", lang: "eu", title: "Euskarazko bertsioa" };
const enEs = /\/es(\/|$)/.test(location.pathname.replace(/\\/g, "/"));
function hizkEzarri(hdest){
  hizk.setAttribute("href", hdest.href);
  hizk.setAttribute("hreflang", hdest.lang);
  hizk.setAttribute("lang", hdest.lang);
  hizk.setAttribute("title", hdest.title);
  hizk.setAttribute("aria-label", hdest.title);
  hizk.textContent = hdest.text;
  hizk.hidden = false;
  hizk.addEventListener("click", () => {
    store.set("jakina-hizk", hdest.lang);   // la elegida es la de destino
    hizk.href = hizk.getAttribute("href").split("#")[0] + location.hash;
  }, { once: false });
}
function hizkEsDago(){                       // sondeo barato, sin caché: 404 si aún no está construida
  return fetch("es/", { cache: "no-store" }).then(r => r.ok).catch(() => false);
}
if (hizk){
  if (enEs){ hizkEzarri(HIZK_A_EU); }
  else {
    hizkEsDago().then(bada => {
      if (!bada) return;
      hizkEzarri(HIZK_A_ES);
      /* si la última elección guardada es el castellano, ir allí conservando el #hash */
      if (store.get("jakina-hizk", null) === "es") location.replace("es/" + location.hash);
    });
  }
}
/* en la copia ES la elección «euskera» siempre puede atenderse: la vasca cuelga de la raíz */
if (enEs && store.get("jakina-hizk", null) === "eu") location.replace("../" + location.hash);

/* ----- (UX 2026-10-20) barra de progreso de lectura (fija, no desplaza) + botón «Goraino» ----- */
(function(){
  var prog = document.createElement("div"); prog.id = "irakur-prog"; prog.setAttribute("aria-hidden", "true");
  document.body.insertBefore(prog, document.body.firstChild);
  var up = document.createElement("button"); up.id = "goraino"; up.type = "button";
  up.setAttribute("aria-label", "Arriba"); up.title = "Arriba"; up.textContent = "↑"; up.hidden = true;
  up.addEventListener("click", function(){ window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(up);
  var tick = false;
  function upd(){
    tick = false;
    var d = document.documentElement, max = Math.max(1, d.scrollHeight - d.clientHeight), y = d.scrollTop || document.body.scrollTop;
    prog.style.width = (100 * y / max) + "%";
    up.hidden = y < 600;
  }
  addEventListener("scroll", function(){ if (!tick){ tick = true; requestAnimationFrame(upd); } }, { passive: true });
  addEventListener("resize", upd, { passive: true }); upd();
})();

/* utilidades comunes de las vistas */
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]); }
window.esc = esc;
