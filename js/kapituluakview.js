"use strict";
/* ===== Kapituluak: el índice del catálogo por aroak, con chips de filtro (como los de la teoría de lab_iesmdb) =====
   depende de: datos_katalogoa.js, hasieraview.js (katalogoaAroka) */

let kapAroa = "all";
let kapChipsZabalik = false;   // (UX) «+ N gehiago» sakatuta dagoen

function loadKapituluak(aroa){
  if (aroa) kapAroa = aroa;
  const taldeak = katalogoaAroka();
  const chips = document.getElementById("arochips");
  // chip bakoitza; 6tik gora, gainerakoak tolestuta «+ N gehiago» botoiaren atzean (mahaigainean ere), lab_iesmdb-ren araua
  const chipHtml = (a, label) => '<button class="chip" data-aroa="' + esc(a) + '" aria-pressed="' + (kapAroa === a) + '">' + esc(label) + '</button>';
  const denak = [["all", "Denak"]].concat([...taldeak.keys()].map(a => [a, a]));
  const ikusgai = denak.slice(0, 6), gehiago = denak.slice(6);
  const erakutsiDenak = kapChipsZabalik || gehiago.some(ad => ad[0] === kapAroa);
  let chipsHtml = ikusgai.map(ad => chipHtml(ad[0], ad[1])).join("");
  if (gehiago.length && erakutsiDenak) chipsHtml += gehiago.map(ad => chipHtml(ad[0], ad[1])).join("");
  else if (gehiago.length) chipsHtml += '<button type="button" class="chip chip-more" aria-expanded="false">+ ' + gehiago.length + ' gehiago</button>';
  chips.innerHTML = chipsHtml;
  const moreBtn = chips.querySelector(".chip-more");
  if (moreBtn) moreBtn.addEventListener("click", () => { kapChipsZabalik = true; loadKapituluak(); });
  chips.querySelectorAll(".chip[data-aroa]").forEach(b => b.addEventListener("click", () => {
    kapAroa = b.dataset.aroa; kapChipsZabalik = false;
    try { history.replaceState(null, "", "#kapituluak" + (kapAroa === "all" ? "" : "/" + encodeURIComponent(kapAroa))); } catch (e){}
    loadKapituluak();
  }));
  const html = [];
  for (const [izena, gakoak] of taldeak){
    if (kapAroa !== "all" && kapAroa !== izena) continue;
    html.push('<h2 class="kapzer-aroa">' + esc(izena) + '</h2><ul class="kapzer">' + gakoak.map(g => {
      const k = KATALOGOA[g];
      const izenburua = k.eskuragarri ? '<a href="#kapitulua/' + g + '">' + esc(k.azala) + '</a>' : '<span>' + esc(k.azala) + '</span>';
      return '<li class="' + (k.eskuragarri ? "eskuragarri" : "") + '"><div>' + izenburua + ' <span class="gakoa">' + g + '</span></div>' +
        (k.eskuragarri ? "" : '<span class="laster">laster</span>') + '</li>';
    }).join("") + '</ul>');
  }
  document.getElementById("kapzerrenda").innerHTML = html.join("");
}
window.loadKapituluak = loadKapituluak;
