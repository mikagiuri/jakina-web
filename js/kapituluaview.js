"use strict";
/* ===== Kapitulua: un capítulo abierto, con su índice a la izquierda =====
   Patrón de theoryview.js de lab_iesmdb (.theory-layout: .toc + .theory, cabecera con .kick + h1).
   Los datos de cada capítulo van en su propio fichero (datos_kapituluak_<gakoa>.js) y se cargan
   al abrirlo: hay capítulos de varios MB y la portada no debe pagarlos.
   depende de: datos_katalogoa.js; js/datos_kapituluak_<gakoa>.js (bajo demanda) */

window.KAPITULUAK = window.KAPITULUAK || {};
const kapKargak = {};

function kapKargatu(g){
  if (KAPITULUAK[g]) return Promise.resolve(KAPITULUAK[g]);
  if (!kapKargak[g]) kapKargak[g] = new Promise((ok, ko) => {
    const s = document.createElement("script");
    s.src = "js/datos_kapituluak_" + g + ".js";
    s.onload = () => KAPITULUAK[g] ? ok(KAPITULUAK[g]) : ko(new Error("datuak falta dira: " + g));
    s.onerror = () => ko(new Error("ezin izan da kargatu: " + s.src));
    document.head.appendChild(s);
  });
  return kapKargak[g];
}

/* bloques del motor de JAKINA → HTML */
function blokeaHtml(b, k){
  const azpi = bs => (bs || []).map(x => blokeaHtml(x, k)).join("");
  switch (b.mota){
    case "testua": return "<p>" + b.html + "</p>";
    case "izenburua": return "<h3>" + b.testua + "</h3>";
    case "zerrenda": { const t = b.ordenatua ? "ol" : "ul"; return "<" + t + ">" + b.elementuak.map(e => "<li>" + e + "</li>").join("") + "</" + t + ">"; }
    case "oharra": case "abisua":
      return '<div class="j-' + b.mota + '"><span class="j-et">' + esc(b.titulua) + '.</span> ' + azpi(b.blokeak).replace(/^<p>|<\/p>$/g, "") + "</div>";
    case "iturria":
      return '<div class="j-erreg j-iturria"><span class="j-et">ITURRIA</span><code>' + esc(b.proiektua) + "</code>" +
        (b.xehetasuna ? " — " + esc(b.xehetasuna) : "") + '<span class="j-hizk">[' + esc((b.hizkuntza || "").toUpperCase()) + "]</span></div>";
    case "itzulgai":
      return '<div class="j-erreg j-itzulgai"><span class="j-et">ITZULGAI ' + esc((b.jatorria || "").toUpperCase()) + " → EU</span><code>" +
        esc(b.proiektua) + "</code>" + (b.orrialdeak ? " (" + esc(b.orrialdeak) + " orr.)" : "") + "</div>";
    case "hutsunea":
      return '<div class="j-erreg j-hutsunea"><span class="j-et">HUTSUNEA</span> <strong>' + esc(b.izenburua) + "</strong>" + azpi(b.blokeak) + "</div>";
    case "irudia":
      return '<figure class="j-irudia"><img src="' + esc(b.src) + '" alt="' + esc((b.oina || "").replace(/<[^>]+>/g, "") || "Irudia") + '" loading="lazy">' +
        (b.oina ? "<figcaption>" + b.oina + "</figcaption>" : "") + "</figure>";
    case "taula":
      return '<div class="j-taula"><table>' + (b.goiburua.length ? "<thead><tr>" + b.goiburua.map(c => "<th>" + c + "</th>").join("") + "</tr></thead>" : "") +
        "<tbody>" + b.lerroak.map(r => "<tr>" + r.map(c => "<td>" + c + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>";
    case "zentratua": return '<div style="text-align:center">' + azpi(b.blokeak) + "</div>";
    default: return '<p class="j-ezezaguna">[' + esc(b.mota) + (b.izena ? " #" + esc(b.izena) : "") + ": bihurtzeke]</p>";
  }
}

function formulakJarri(body, k){
  body.querySelectorAll(".formula[data-f]").forEach(s => { const svg = k.formulak && k.formulak[s.dataset.f]; if (svg) s.innerHTML = svg; });
}

function loadKapitulua(g){
  const body = document.getElementById("kapbody"), toc = document.getElementById("kaptoc");
  if (!g){ const lehena = Object.keys(KATALOGOA).find(x => KATALOGOA[x].eskuragarri); if (!lehena) return; g = lehena; }
  const [gakoa, atala] = g.split("/");
  if (!KATALOGOA[gakoa] || !KATALOGOA[gakoa].eskuragarri){
    body.innerHTML = '<p class="hutsik">Kapitulu hau ez dago oraindik webean.</p>'; toc.innerHTML = ""; return;
  }
  if (body.dataset.gakoa === gakoa){ kapAtalera(atala || null); return; }
  body.innerHTML = '<p class="hutsik">Kargatzen…</p>';
  kapKargatu(gakoa).then(k => {
    const kat = KATALOGOA[gakoa];
    const head = '<div class="theory-head"><span class="kick" style="color:var(--accent)">' + esc(kat.aroa ? kat.aroa + ". aroa · " + kat.maila : kat.azpititulua) +
      '</span><h1>' + esc(k.azala) + '</h1></div>';
    const sarrera = k.sarrera.map(b => blokeaHtml(b, k)).join("");
    const atalak = k.atalak.map(a => '<h2 id="' + a.id + '" class="maila' + a.maila + '">' + a.izenburua + "</h2>" + a.blokeak.map(b => blokeaHtml(b, k)).join("")).join("");
    const gakoak = Object.keys(KATALOGOA), i = gakoak.indexOf(gakoa);
    const nav = '<div class="kap-nav">' + (i > 0 ? '<a href="#kapitulua/' + gakoak[i - 1] + '">← ' + esc(KATALOGOA[gakoak[i - 1]].azala) + "</a>" : "<span></span>") +
      (i < gakoak.length - 1 ? '<a href="#kapitulua/' + gakoak[i + 1] + '">' + esc(KATALOGOA[gakoak[i + 1]].azala) + " →</a>" : "") + "</div>";
    body.innerHTML = head + sarrera + atalak +
      '<p class="kap-iturburua">Iturburua: <code>edicion2/' + esc(k.iturburua) + "</code> (JAKINA, Typst). Webeko datuak <code>tools/konbertatu_jakina.py</code>-k sortzen ditu.</p>" + nav;
    body.dataset.gakoa = gakoa;
    formulakJarri(body, k);
    toc.innerHTML = '<div class="toc-title">Kapituluaren atalak</div><ol>' +
      k.atalak.map(a => '<li><a href="#kapitulua/' + gakoa + "/" + a.id + '" data-atala="' + a.id + '">' + a.izenburua.replace(/<[^>]+>/g, "") + "</a></li>").join("") + "</ol>";
    if (atala) kapAtalera(atala);
  }).catch(e => { console.error(e); body.innerHTML = '<p class="hutsik">Ezin izan da kapitulua kargatu.</p>'; });
}
function kapAtalera(id){
  const h = id && document.getElementById(id); if (h) h.scrollIntoView({ block: "start" });
  document.querySelectorAll("#kaptoc a").forEach(a => a.setAttribute("aria-current", a.dataset.atala === id ? "true" : "false"));
}
window.loadKapitulua = loadKapitulua;
