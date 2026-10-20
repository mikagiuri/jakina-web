"use strict";
/* ===== Glosarioa: términos en euskera (de los #definizioa con título), modelo de glosarioview.js de lab_iesmdb =====
   Buscador sin acentos y orden alfabético; cada término enlaza al apartado del capítulo donde se define.
   depende de: datos_glosarioa.js, datos_katalogoa.js y blokeaHtml() de kapituluaview.js */

function glosNorm(s){ return String(s).replace(/<[^>]+>/g, "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }

/* (dsh-2, 19-10) Filosofia 1eko logika-terminoak (datos_glosarioa_filosofia1.js) nahasten ditu.
   Araua: JAKINAko definizioa da nagusi; terminoa dago badago, fil1 doa azpian, «Filosofia 1» markarekin;
   inoiz ez dira sarrerak bikoizten. */
function glosNahasi(){
  const base = GLOSARIOA.slice();
  if (typeof GLOSARIOA_FIL1 === "undefined") return base;
  const idx = new Map(); base.forEach((t, i) => idx.set(glosNorm(t.t), i));
  for (const t of GLOSARIOA_FIL1){
    const i = idx.get(glosNorm(t.t));
    if (i == null){ base.push(t); idx.set(glosNorm(t.t), base.length - 1); }
    else if (!base[i].fil1) base[i] = Object.assign({}, base[i], { fil1: t });
  }
  return base;
}
function glosTxartela(t){
  const marka = ' <span class="j-fil1-mark">Filosofía 1</span>';
  let h = '<div class="theory j-glos"><h3>' + t.t + (t.kapitulua === "filosofia1" ? marka : "") + "</h3>" + t.blokeak.map(b => blokeaHtml(b)).join("");
  if (t.fil1) h += '<div class="j-glos-fil1">' + '<span class="j-fil1-mark">Filosofía 1</span>' + t.fil1.blokeak.map(b => blokeaHtml(b)).join("") + "</div>";
  h += t.kapitulua === "filosofia1"
    ? ''
    : '<p class="j-glos-kap"><a href="#kapitulua/' + esc(t.kapitulua) + "/" + esc(t.atala) + '">' + esc(KATALOGOA[t.kapitulua] ? KATALOGOA[t.kapitulua].azala : t.kapitulua) + " →</a></p>";
  return h + "</div>";
}

function loadGlosarioa(){
  const el = document.getElementById("glosariozerrenda");
  if (!glosNahasi().length){
    el.innerHTML = '<p class="hutsik">Aún no hay definiciones en los capítulos ya convertidos.</p>';
    return;
  }
  if (!el.dataset.done){
    el.innerHTML = '<input type="search" class="j-bilatu" id="glosbilatu" placeholder="Buscar término…" aria-label="Buscar término">' +
      '<p class="hutsik" id="gloskop"></p><div id="glostermak"></div>';
    document.getElementById("glosbilatu").addEventListener("input", glosMarraztu);
    el.dataset.done = "1";
  }
  glosMarraztu();
}
function glosMarraztu(){
  const q = glosNorm(document.getElementById("glosbilatu").value.trim());
  const zerr = glosNahasi().filter(t => !q || glosNorm(t.t).includes(q))
    .sort((a, b) => glosNorm(a.t).localeCompare(glosNorm(b.t), "es"));
  document.getElementById("gloskop").textContent = zerr.length + " términos";
  document.getElementById("glostermak").innerHTML = zerr.map(glosTxartela).join("");
}
window.loadGlosarioa = loadGlosarioa;
