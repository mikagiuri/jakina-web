"use strict";
/* ===== Ariketak: enunciado + solución desplegable (<details>), como los ejemplos resueltos de lab_iesmdb =====
   Agrupados por capítulo y apartado; cada uno enlaza a su sitio en el capítulo.
   depende de: datos_ariketak.js (lo genera tools/konbertatu_jakina.py desde #ariketa / #problema + #ebazpena),
   datos_katalogoa.js y blokeaHtml() de kapituluaview.js */

function loadAriketak(){
  const el = document.getElementById("ariketazerrenda");
  /* (dsh-2, 19-10) Txokoaren ariketak, «Filosofia 1» etiketarekin (datos_ariketak_filosofia1.js) */
  const zerr = Object.entries(ARIKETAK).concat(Object.entries(typeof ARIKETAK_FIL1 !== "undefined" ? ARIKETAK_FIL1 : {}));
  if (!zerr.length){
    el.innerHTML = '<p class="hutsik">Aún no hay ejercicios en los capítulos ya convertidos.</p>';
    return;
  }
  let html = "", kap = null, atala = null;
  for (const [, a] of zerr){
    if (a.kapitulua !== kap){
      kap = a.kapitulua; atala = null;
      html += '<h2 class="kapzer-aroa">' + esc(kap === "filosofia1" ? "Filosofía 1 · lógica" : (KATALOGOA[kap] ? KATALOGOA[kap].azala : kap)) + "</h2>";
    }
    if (a.atala !== atala){
      atala = a.atala;
      html += kap === "filosofia1"
        ? '<h3 class="j-ar-atala">' + a.atalaIzena + "</h3>"
        : '<h3 class="j-ar-atala"><a href="#kapitulua/' + kap + "/" + a.atala + '">' + a.atalaIzena + "</a></h3>";
    }
    html += '<div class="theory">' + blokeaHtml({ mota: a.mota, izena: a.izena, izar: a.izar,
      blokeak: a.blokeak, ebazpena: a.ebazpena }) + "</div>";
    if (a.esteka) html += '' + esc(a.esteka) + '';
  }
  el.innerHTML = html;
}
window.loadAriketak = loadAriketak;
