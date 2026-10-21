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
    s.onload = () => KAPITULUAK[g] ? ok(KAPITULUAK[g]) : ko(new Error("faltan los datos: " + g));
    s.onerror = () => ko(new Error("no se ha podido cargar: " + s.src));
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
    case "azpititulua": return '<h4 class="j-azpititulua">' + b.testua + "</h4>";
    case "zerrenda": { if (b.etiketak) return '<ul class="j-etiketatua">' + b.elementuak.map((e, i) =>
      '<li><span class="j-marka">' + esc(b.etiketak[i] || "") + '</span><span class="j-elte">' + e + "</span></li>").join("") + "</ul>";
      const t = b.ordenatua ? "ol" : "ul"; return "<" + t + ">" + b.elementuak.map(e => "<li>" + e + "</li>").join("") + "</" + t + ">"; }
    case "oharra": case "abisua":
      return '<div class="j-' + b.mota + '"><span class="j-et">' + esc(b.titulua) + '.</span> ' + azpi(b.blokeak).replace(/^<p>|<\/p>$/g, "") + "</div>";
    case "iturria":
      return '<div class="j-erreg j-iturria"><span class="j-et">FUENTE</span><code>' + esc(b.proiektua) + "</code>" +
        (b.xehetasuna ? " — " + esc(b.xehetasuna) : "") + '<span class="j-hizk">[' + esc((b.hizkuntza || "").toUpperCase()) + "]</span></div>";
    case "itzulgai":
      return '<div class="j-erreg j-itzulgai"><span class="j-et">POR TRADUCIR ' + esc((b.jatorria || "").toUpperCase()) + " → EU</span><code>" +
        esc(b.proiektua) + "</code>" + (b.orrialdeak ? " (" + esc(b.orrialdeak) + " pág.)" : "") + "</div>";
    case "hutsunea":
      return '<div class="j-erreg j-hutsunea"><span class="j-et">HUECO</span> <strong>' + esc(b.izenburua) + "</strong>" + azpi(b.blokeak) + "</div>";
    case "irudia": {
      // (UX 2026-10-20) figura temática incrustada (b.berria: SVG geometría + etiquetas HTML/MathML, currentColor);
      // si no existe, fallback a la imagen SVG de Typst (sin regresión). La emite el conversor (web-jakina-claude).
      const oina = b.oina ? "<figcaption>" + b.oina + "</figcaption>" : "";
      if (b.berria) return '<figure class="j-irudia j-irudia-berria">' + b.berria + oina + "</figure>";
      return '<figure class="j-irudia"><img src="' + esc(b.src) + '" alt="' + esc((b.oina || "").replace(/<[^>]+>/g, "") || "Figura") + '"' +
        (b.zabalera ? ' width="' + b.zabalera + '"' : "") + ' loading="lazy">' + oina + "</figure>";
    }
    case "ingurunea":
      return '<div class="j-ing j-k-' + b.kolorea + (b.etzana ? " j-etzana" : "") + '"><span class="j-et">' + esc(b.izena) + "</span>" +
        (b.titulua ? ' <strong class="j-ing-tit">(' + b.titulua + ")</strong>" : "") + azpi(b.blokeak) + "</div>";
    case "frogapena":
      return '<div class="j-frog"><em class="j-et-frog">Demostración.</em> ' + azpi(b.blokeak) + '<span class="j-qed" aria-hidden="true">∎</span></div>';
    case "ebazpena":
      return '<details class="j-ebaz"><summary>Solución</summary>' + azpi(b.blokeak) + "</details>";
    case "ariketa": case "problema":
      return '<div class="j-ariketa"><span class="j-et">' + (b.mota === "ariketa" ? "Ejercicio" : "Problema") + "</span>" +
        (b.izena ? " <strong>" + b.izena + "</strong>" : "") + (b.izar ? ' <span class="j-izar">' + "★".repeat(b.izar) + "</span>" : "") +
        azpi(b.blokeak) + (b.ebazpena ? '<details class="j-ebaz"><summary>Solución</summary>' + azpi(b.ebazpena) + "</details>" : "") + "</div>";
    case "kutxa":
      return '<div class="j-kutxa j-k-' + b.kolorea + '">' + (b.titulua ? '<div class="j-kutxa-tit">' + b.titulua + "</div>" : "") + azpi(b.blokeak) + "</div>";
    case "helburuak": case "aurrebaldintzak":
      return '<div class="j-zerr-kutxa j-' + b.mota + '"><div class="j-et">' + (b.mota === "helburuak" ? "OBJETIVOS DE APRENDIZAJE" : "REQUISITOS PREVIOS") +
        "</div><ul>" + b.elementuak.map(e => "<li>" + e + "</li>").join("") + "</ul></div>";
    case "modulua":
      return '<div class="j-modulua"><span class="j-mod-kodea">' + esc(b.kodea) + "</span> " + b.izenburua + (b.maila ? ' <span class="j-mod-maila">' + esc(b.maila) + "</span>" : "") + "</div>";
    case "atala":
      return '<div class="j-atala"><div class="j-et">SECCIÓN</div><div class="j-atala-tit">' + b.izenburua + "</div>" + azpi(b.deskribapena) +
        (b.edukia.length ? "<ul>" + b.edukia.map(e => "<li>" + e + "</li>").join("") + "</ul>" : "") + "</div>";
    case "etiketa":
      return '<div class="j-etiketa"><strong class="j-et">' + b.etiketa + "</strong> " + azpi(b.blokeak) + "</div>";
    case "gai-kutxa":
      return '<div class="j-gai j-k-' + esc(b.kolorea) + '"><div class="j-gai-tit">' + esc(b.izenburua) + "</div>" + azpi(b.blokeak) + "</div>";
    case "sarea":
      return '<div class="j-sarea" style="grid-template-columns:' + esc(b.zutabeak) + '">' +
        (b.zelulak || []).map(z => {
          const zel = Array.isArray(z) ? { blokeak: z } : z;
          const estilo = (zel.zutabeak > 1 ? "grid-column:span " + zel.zutabeak + ";" : "") +
            (zel.errenkadak > 1 ? "grid-row:span " + zel.errenkadak + ";" : "");
          return '<div class="j-gelaxka"' + (estilo ? ' style="' + estilo + '"' : "") + ">" + azpi(zel.blokeak || []) + "</div>";
        }).join("") + "</div>";
    case "pila":
      return '<div class="j-pila">' + (b.lerroak || []).map(l => '<div class="j-pila-lerro">' + azpi(l) + "</div>").join("") + "</div>";
    case "bihur":
      return '<div class="j-bihur">' + azpi(b.a) + '<div class="j-bihur-erdia"><span class="j-bihur-lab">' + (b.lab || "") +
        '</span> <span class="j-gezia">' + (b.bidi ? "↔" : "→") + "</span></div>" + azpi(b.b) + "</div>";
    case "gezi":
      return '<div class="j-gezi' + (b.bertikala ? " j-gezi-bert" : "") + '"><span class="j-gezia">↓</span>' +
        '<span class="j-gezi-ops">' + b.elementuak.map(e => '<span class="j-gezi-op">' + e + "</span>").join("") + "</span></div>";
    case "sistemak":
      return '<div class="j-sistemak">' + b.elementuak.map(e =>
        '<div class="j-sis">' + (e.et ? '<strong class="j-sis-et">' + esc(e.et) + ")</strong>" : "") +
        '<div class="j-sis-edu">' + azpi(e.blokeak) + "</div></div>").join("") + "</div>";
    case "problema-gaia":
      return '<div class="j-gaia">' + b.testua + "</div>";
    case "taula-kutxa":
      return '<figure class="j-taula-kutxa">' + azpi(b.blokeak) + (b.oina ? "<figcaption>" + b.oina + "</figcaption>" : "") + "</figure>";
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
    body.innerHTML = '<p class="hutsik">Este capítulo aún no está en la web.</p>'; toc.innerHTML = ""; return;
  }
  if (body.dataset.gakoa === gakoa){ kapAtalera(atala || null); return; }
  // (UX 2026-10-20) kargatzeko eskeletoa: goiburua (katalogotik) jada margotuta, edukirik ez desplazatzeko
  const kat0 = KATALOGOA[gakoa];
  const goibHtml = '<div class="theory-head"><span class="kick" style="color:var(--accent)">' +
    esc(kat0.aroa ? kat0.aroa + ". etapa · " + kat0.maila : (kat0.azpititulua || "")) + '</span><h1>' + esc(kat0.azala) + '</h1></div>';
  body.innerHTML = goibHtml +
    '<div class="kap-eskeleto" aria-hidden="true"><span class="sk sk-l"></span><span class="sk sk-m"></span><span class="sk sk-l"></span><span class="sk sk-s"></span></div>' +
    '<p class="hutsik kap-kargatzen">Cargando…</p>';
  kapKargatu(gakoa).then(k => {
    const kat = KATALOGOA[gakoa];
    // (web-jakina-7) toggle Leer/Estudiar SOLO si el capítulo tiene datos de estudio (window.IKASGAI)
    const ikasgaiHtml = (window.IKASGAI && window.IKASGAI[gakoa])
      ? '<div class="kap-ikasgai" role="group" aria-label="Modua"><span class="on">Leer</span><a href="#ikasi/' + gakoa + '">Estudiar</a></div>'
      : '';
    const head = '<div class="theory-head"><span class="kick" style="color:var(--accent)">' + esc(kat.aroa ? kat.aroa + ". etapa · " + kat.maila : kat.azpititulua) +
      '</span><h1>' + esc(k.azala) + '</h1>' + ikasgaiHtml + '</div>';
    const sarrera = k.sarrera.map(b => blokeaHtml(b, k)).join("");
    const atalak = k.atalak.map(a => '<h2 id="' + a.id + '" class="maila' + a.maila + '">' + a.izenburua + "</h2>" + a.blokeak.map(b => blokeaHtml(b, k)).join("")).join("");
    const gakoak = Object.keys(KATALOGOA), i = gakoak.indexOf(gakoa);
    // (UX 2026-10-20) aurrekoa/hurrengoa txarteletan, lab_iesmdb-ren erara
    const nav = '<nav class="kap-nav" aria-label="Kapituluen artean">' +
      (i > 0 ? '<a class="kap-nav-a" href="#kapitulua/' + gakoak[i - 1] + '"><small>← Anterior</small>' + esc(KATALOGOA[gakoak[i - 1]].azala) + "</a>" : "<span></span>") +
      (i < gakoak.length - 1 ? '<a class="kap-nav-a" href="#kapitulua/' + gakoak[i + 1] + '"><small>Siguiente →</small>' + esc(KATALOGOA[gakoak[i + 1]].azala) + "</a>" : "") + "</nav>";
    body.innerHTML = head + sarrera + atalak +
      '<p class="kap-iturburua">Fuente: <code>edicion2/' + esc(k.iturburua) + "</code> (JAKINA, Typst). Los datos de la web los genera <code>tools/konbertatu_jakina.py</code>.</p>" + nav;
    body.dataset.gakoa = gakoa;
    formulakJarri(body, k);
    // (UX 2026-10-20) irisgarritasuna: irudi orori alt bat, ez badu (prop. 16)
    body.querySelectorAll("img:not([alt])").forEach(im => { im.alt = "Irudia"; });
    toc.innerHTML = '<div class="toc-title">Secciones del capítulo</div><ol>' +
      k.atalak.map(a => '<li><a href="#kapitulua/' + gakoa + "/" + a.id + '" data-atala="' + a.id + '">' + a.izenburua.replace(/<[^>]+>/g, "") + "</a></li>").join("") + "</ol>";
    /* (dsh-2, 19-10) zubiak B1 → Logika-txokoa: «Txokoan probatu» kaxa atal horien azpian.
       Aditiboa eta atzeraezina; ez du datuik aldatzen. Taula zubiak_logika.js-en (dagoela konprobatuta). */
    if (typeof ZUBIAK_LOGIKA !== "undefined" && typeof ZUBIAK_GAKOA !== "undefined" && gakoa === ZUBIAK_GAKOA) ZUBIAK_LOGIKA.forEach(z => {
      const h = body.querySelector('h2[id="' + z.b1 + '"]'); if (!h) return;
      if (h.nextElementSibling && h.nextElementSibling.classList && h.nextElementSibling.classList.contains("zubia")) return;
      h.insertAdjacentHTML("afterend", '<p class="zubia"><span class="zubia-et">' + ZUBIAK_TXT.txokoan + '</span> <a href="#txokoa/' + esc(z.pieza) + '">' + esc(z.etiketa) + " →</a></p>");
    });
    if (atala) kapAtalera(atala);
  }).catch(e => {
    console.error(e);
    // (UX 2026-10-20) errore atsegina: goiburua + «Saiatu berriz»
    body.innerHTML = goibHtml + '<p class="kap-errore">No se ha podido cargar el capítulo. ' +
      '<button type="button" class="kap-saiatu">Intentar de nuevo</button></p>';
    const btn = body.querySelector(".kap-saiatu");
    if (btn) btn.addEventListener("click", () => { delete body.dataset.gakoa; loadKapitulua(g); });
  });
}
function kapAtalera(id){
  const h = id && document.getElementById(id); if (h) h.scrollIntoView({ block: "start" });
  document.querySelectorAll("#kaptoc a").forEach(a => a.setAttribute("aria-current", a.dataset.atala === id ? "true" : "false"));
}
window.loadKapitulua = loadKapitulua;
