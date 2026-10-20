"use strict";
/* ===== Hasiera: una tarjeta por aro del catálogo (como las tarjetas de materia de lab_iesmdb) =====
   depende de: datos_katalogoa.js */

/* Los aroak salen del campo azpititulua del catálogo («I. aroa - Tresnak»…);
   lo que no lleva aro (Sarrera, Eranskinak) va en su propio grupo. */
function katalogoaAroka(){
  const taldeak = new Map();
  for (const [g, k] of Object.entries(KATALOGOA)){
    const izena = k.aroa ? k.aroa + ". etapa · " + k.maila : (g.startsWith("09zz") ? "Anexos" : "Introducción");
    if (!taldeak.has(izena)) taldeak.set(izena, []);
    taldeak.get(izena).push(g);
  }
  return taldeak;
}
window.katalogoaAroka = katalogoaAroka;

function loadHasiera(){
  const el = document.getElementById("aroak");
  if (!el || el.dataset.done) return;
  const html = [];
  for (const [izena, gakoak] of katalogoaAroka()){
    const esk = gakoak.filter(g => KATALOGOA[g].eskuragarri).length;
    html.push('<div class="course" role="button" tabindex="0" data-aroa="' + esc(izena) + '">' +
      '<span class="kick">' + esc(izena.split(" · ")[0]) + '</span>' +
      '<h3>' + esc(izena.split(" · ").pop()) + '</h3>' +
      '<p>' + gakoak.map(g => esc(KATALOGOA[g].azala)).slice(0, 4).join(" · ") + (gakoak.length > 4 ? " …" : "") + '</p>' +
      '<div class="meta"><span><b>' + gakoak.length + '</b> capítulos</span><span><b>' + esk + '</b> en la web</span></div></div>');
  }
  el.innerHTML = html.join("");
  el.querySelectorAll(".course").forEach(c => {
    const joan = () => { location.hash = "kapituluak/" + encodeURIComponent(c.dataset.aroa); };
    c.addEventListener("click", joan);
    c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); joan(); } });
  });
  el.dataset.done = "1";
}
window.loadHasiera = loadHasiera;
document.addEventListener("DOMContentLoaded", loadHasiera);
