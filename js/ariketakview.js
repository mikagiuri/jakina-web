"use strict";
/* ===== Ariketak: enunciado + solución desplegable (<details>), como los ejemplos resueltos de lab_iesmdb =====
   depende de: datos_ariketak.js (lo genera tools/konbertatu_jakina.py desde #ariketa / #problema + #ebazpena) */

function loadAriketak(){
  const el = document.getElementById("ariketazerrenda");
  const zerr = Object.entries(ARIKETAK);
  if (!zerr.length){
    el.innerHTML = '<p class="hutsik">Laginaren kapituluak (<em>Sarrera eta ibilbidea</em>) ez du ariketarik. Ariketak dituzten kapituluak bihurtzean beteko da atal hau.</p>';
    return;
  }
  el.innerHTML = zerr.map(([id, a]) => '<article class="theory" id="ar-' + esc(id) + '"><h3>' + esc(a.zenbakia || id) + '</h3>' + a.enuntziatua +
    (a.ebazpena ? '<details><summary>Ebazpena</summary>' + a.ebazpena + '</details>' : "") + '</article>').join("");
}
window.loadAriketak = loadAriketak;
