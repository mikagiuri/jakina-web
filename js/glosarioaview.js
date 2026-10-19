"use strict";
/* ===== Glosarioa: términos en euskera (de los #definizioa con título), modelo de glosarioview.js de lab_iesmdb =====
   Buscador sin acentos y orden alfabético; cada término enlaza al apartado del capítulo donde se define.
   depende de: datos_glosarioa.js, datos_katalogoa.js y blokeaHtml() de kapituluaview.js */

function glosNorm(s){ return String(s).replace(/<[^>]+>/g, "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }

function loadGlosarioa(){
  const el = document.getElementById("glosariozerrenda");
  if (!GLOSARIOA.length){
    el.innerHTML = '<p class="hutsik">Oraindik ez dago definiziorik bihurtutako kapituluetan.</p>';
    return;
  }
  if (!el.dataset.done){
    el.innerHTML = '<input type="search" class="j-bilatu" id="glosbilatu" placeholder="Bilatu terminoa…" aria-label="Bilatu terminoa">' +
      '<p class="hutsik" id="gloskop"></p><div id="glostermak"></div>';
    document.getElementById("glosbilatu").addEventListener("input", glosMarraztu);
    el.dataset.done = "1";
  }
  glosMarraztu();
}
function glosMarraztu(){
  const q = glosNorm(document.getElementById("glosbilatu").value.trim());
  const zerr = GLOSARIOA.filter(t => !q || glosNorm(t.t).includes(q))
    .sort((a, b) => glosNorm(a.t).localeCompare(glosNorm(b.t), "eu"));
  document.getElementById("gloskop").textContent = zerr.length + " termino";
  document.getElementById("glostermak").innerHTML = zerr.map(t =>
    '<div class="theory j-glos"><h3>' + t.t + '</h3>' + t.blokeak.map(b => blokeaHtml(b)).join("") +
    '<p class="j-glos-kap"><a href="#kapitulua/' + esc(t.kapitulua) + "/" + esc(t.atala) + '">' +
    esc(KATALOGOA[t.kapitulua] ? KATALOGOA[t.kapitulua].azala : t.kapitulua) + " →</a></p></div>").join("");
}
window.loadGlosarioa = loadGlosarioa;
