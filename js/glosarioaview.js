"use strict";
/* ===== Glosarioa: términos en euskera (de los #definizioa), modelo de glosarioview.js de lab_iesmdb =====
   depende de: datos_glosarioa.js */

function loadGlosarioa(){
  const el = document.getElementById("glosariozerrenda");
  if (!GLOSARIOA.length){
    el.innerHTML = '<p class="hutsik">Laginaren kapituluak ez du definiziorik. Kapituluetako <code>#definizioa</code> blokeetatik beteko da glosarioa.</p>';
    return;
  }
  el.innerHTML = '<dl class="theory">' + GLOSARIOA.map(t => '<dt><strong>' + esc(t.t) + '</strong></dt><dd>' + t.def +
    (t.kapitulua ? ' <a href="#kapitulua/' + esc(t.kapitulua) + '">→</a>' : "") + '</dd>').join("") + '</dl>';
}
window.loadGlosarioa = loadGlosarioa;
