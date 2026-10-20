"use strict";
/* ===== Kapituluak: el índice del catálogo por aroak, con chips de filtro (como los de la teoría de lab_iesmdb) =====
   depende de: datos_katalogoa.js, hasieraview.js (katalogoaAroka) */

let kapAroa = "all";

function loadKapituluak(aroa){
  if (aroa) kapAroa = aroa;
  const taldeak = katalogoaAroka();
  const chips = document.getElementById("arochips");
  chips.innerHTML = ['<button class="chip" data-aroa="all" aria-pressed="' + (kapAroa === "all") + '">Todas</button>']
    .concat([...taldeak.keys()].map(a => '<button class="chip" data-aroa="' + esc(a) + '" aria-pressed="' + (kapAroa === a) + '">' + esc(a) + '</button>')).join("");
  chips.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
    kapAroa = b.dataset.aroa;
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
        (k.eskuragarri ? "" : '<span class="laster">pronto</span>') + '</li>';
    }).join("") + '</ul>');
  }
  document.getElementById("kapzerrenda").innerHTML = html.join("");
}
window.loadKapituluak = loadKapituluak;
