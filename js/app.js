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
  ariketak: "loadAriketak", glosarioa: "loadGlosarioa"
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

/* utilidades comunes de las vistas */
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]); }
window.esc = esc;
