"use strict";
/* ===== Logika-txokoa (dsh-2, 19-10-2026) — lab_iesmdb-ko «Rincón de lógica»ren (Filosofia 1. maila) egokitzapena =====
   Jatorria (solo lectura): lab_iesmdb web/js/logicaview.js + logicamoderna.js; Venn-margotzailea theoryview.js-tik (tvVennSvg).
   Testuak euskaraz logikatxokoa_datos.js-en daude (LOG_TXT / LOGM_TXT eta edukiak): web_i18n tm/eu.json + ui/eu.json-ekin itzulia.
   Aldaketak jatorriarekiko: (1) montajea #logicabox-en, sekzioa #txokoa; (2) loadTxokoa web-jakina-ren ibilbide-ereduarentzat;
   (3) CSS kanpoan (css/logikatxokoa.css); (4) zubi «Kapituluan: …» B1 Logikara (zubiak_logika.js).
   Esteka sakona: #txokoa/tablas|silogismos|cuadrado|conjuntos|puertas|formalizar|inferencia|leyes|cuantificadores|falacias|paradojas|ejercicios|clasicos[/ficha] */

const TVV = {
  2: { vb: "0 0 300 190", c: [[118, 98], [182, 98]], r: 64, etq: [[56, 34, "end"], [244, 34, "start"]],
    cen: { "10": [84, 98], "01": [216, 98], "11": [150, 98], "00": [30, 170] } },
  3: { vb: "0 0 320 300", c: [[120, 118], [200, 118], [160, 188]], r: 74, etq: [[34, 44, "start"], [286, 44, "end"], [160, 290, "middle"]],
    cen: { "100": [86, 92], "010": [234, 92], "110": [160, 78], "001": [160, 236], "101": [112, 166], "011": [208, 166], "111": [160, 136], "000": [26, 280] } }
};
let tvvN = 0;
function tvVennSvg(spec){
  const o = {}; spec.split(";").forEach(p => { const i = p.indexOf("="); if (i > 0) o[p.slice(0, i).trim()] = p.slice(i + 1).trim(); });
  const nom = (o.c || "A,B").split(","), n = nom.length === 3 ? 3 : 2, G = TVV[n], id = "tvv" + (++tvvN);
  const [, , W, H] = G.vb.split(" ").map(Number), lista = k => (o[k] ? o[k].split(",").map(s => s.trim()).filter(Boolean) : []);
  const circ = (j, extra) => '<circle cx="' + G.c[j][0] + '" cy="' + G.c[j][1] + '" r="' + G.r + '"' + (extra || "") + "/>";
  let defs = "<defs>" + G.c.map((_, j) => '<clipPath id="' + id + "c" + j + '">' + circ(j) + "</clipPath>").join("");
  const region = (r, cls) => {   /* rectángulo del universo recortado por los círculos de dentro y enmascarado por los de fuera */
    const fuera = [...r].map((b, j) => b === "0" ? j : -1).filter(j => j >= 0), mid = id + "m" + r;
    if (!defs.includes('id="' + mid + '"')) defs += '<mask id="' + mid + '"><rect width="' + W + '" height="' + H + '" fill="#fff"/>' + fuera.map(j => circ(j, ' fill="#000"')).join("") + "</mask>";
    let g = '<rect x="6" y="6" width="' + (W - 12) + '" height="' + (H - 12) + '" class="' + cls + '" mask="url(#' + mid + ')"/>';
    [...r].forEach((b, j) => { if (b === "1") g = '<g clip-path="url(#' + id + "c" + j + ')">' + g + "</g>"; });
    return g;
  };
  const zonas = lista("sel").map(r => region(r, "tvv-sel")).join("") + lista("vac").map(r => region(r, "tvv-vac")).join("") +
    lista("h1").map(r => region(r, "tvv-h1")).join("") + lista("h2").map(r => region(r, "tvv-h2")).join("");   /* (12-10) rayados del Rincón de lógica */
  const xs = lista("x").map(x => { const ps = x.split("|").map(r => G.cen[r]).filter(Boolean); if (!ps.length) return "";
    const px = ps.reduce((a, p) => a + p[0], 0) / ps.length, py = ps.reduce((a, p) => a + p[1], 0) / ps.length;
    return '<text x="' + px + '" y="' + (py + 7) + '" text-anchor="middle" class="tvv-x">✕</text>'; }).join("");
  const marco = '<rect x="6" y="6" width="' + (W - 12) + '" height="' + (H - 12) + '" rx="4" class="tvv-u"/><text x="14" y="26" class="tvv-t tvv-tu">U</text>';
  const etq = nom.slice(0, n).map((t, j) => '<text x="' + G.etq[j][0] + '" y="' + G.etq[j][1] + '" text-anchor="' + G.etq[j][2] + '" class="tvv-t">' + t.replace(/[&<>]/g, "") + "</text>").join("");
  return '<svg viewBox="' + G.vb + '" role="img" aria-hidden="true">' + defs + "</defs>" + marco + zonas + G.c.map((_, j) => circ(j, ' class="tvv-c"')).join("") + etq + xs + "</svg>";
}

"use strict";

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const logT = (k, v) => String(LOG_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const logEsc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const LOG = { parGrupo: "all", tab: "tablas", formula: "(p → q) ∧ p → q", prem: "p → q; p", concl: "q",
  sil: { S: "", P: "", M: "", may: "A", men: "A", con: "A", fig: 1 }, cu: { tipo: "A", val: true, trad: true, ej: 1 }, co: { izq: "(A ∪ B)ᶜ", der: "Aᶜ ∩ Bᶜ" }, gate: "AND", gA: 1, gB: 0, circ: {} };
const logGuia = k => '<details class="lg-guia"><summary>' + logT("guiaTit") + "</summary>" + logT(k) + "</details>";
const logBox = () => document.getElementById("logicabox");

/* ---------- fórmulas: lectura, cálculo y escritura ---------- */
function logTokens(s){
  const out = [];
  for (let i = 0; i < s.length;){
    const c = s[i], two = s.slice(i, i + 2), three = s.slice(i, i + 3);
    if (/\s/.test(c)){ i++; continue; }
    if (/[p-t]/.test(c)){ out.push({ k: "var", n: c }); i++; continue; }
    if ("¬~!".includes(c)){ out.push({ k: "not" }); i++; continue; }
    if ("∧&·*".includes(c)){ out.push({ k: "and" }); i++; continue; }
    if ("∨|+".includes(c)){ out.push({ k: "or" }); i++; continue; }
    if (three === "<->" || three === "<=>"){ out.push({ k: "iff" }); i += 3; continue; }
    if (c === "↔"){ out.push({ k: "iff" }); i++; continue; }
    if (two === "->" || two === "=>"){ out.push({ k: "imp" }); i += 2; continue; }
    if (c === "→"){ out.push({ k: "imp" }); i++; continue; }
    if (c === "(" || c === ")"){ out.push({ k: c }); i++; continue; }
    if (c === "[" || c === "]"){ out.push({ k: c === "[" ? "(" : ")" }); i++; continue; }   /* (18-10) corchetes, como en las hojas de leyes */
    throw new Error(logT("errCar", { c }));
  }
  return out;
}
function logParse(s){
  if (!String(s).trim()) throw new Error(logT("errVacia"));
  const tk = logTokens(s); let i = 0;
  const peek = () => tk[i] && tk[i].k;
  const iff = () => { let a = imp(); while (peek() === "iff"){ i++; a = { t: "iff", a, b: imp() }; } return a; };
  const imp = () => { const a = or(); if (peek() === "imp"){ i++; return { t: "imp", a, b: imp() }; } return a; };
  const or = () => { let a = and(); while (peek() === "or"){ i++; a = { t: "or", a, b: and() }; } return a; };
  const and = () => { let a = not(); while (peek() === "and"){ i++; a = { t: "and", a, b: not() }; } return a; };
  const not = () => { if (peek() === "not"){ i++; return { t: "not", a: not() }; } return atom(); };
  const atom = () => {
    const x = tk[i];
    if (!x) throw new Error(logT("errFalta"));
    if (x.k === "var"){ i++; return { t: "var", n: x.n }; }
    if (x.k === "("){ i++; const e = iff(); if (peek() !== ")") throw new Error(logT("errParen")); i++; return e; }
    throw new Error(logT("errFalta"));
  };
  const e = iff();
  if (i < tk.length) throw new Error(logT("errSobra", { c: logStr(e) }));
  return e;
}
const LOG_PREC = { iff: 1, imp: 2, or: 3, and: 4, not: 5, var: 6 };
const LOG_SYM = { iff: "↔", imp: "→", or: "∨", and: "∧" };
function logStr(n, pp){
  let s;
  if (n.t === "var") s = n.n;
  else if (n.t === "not") s = "¬" + logStr(n.a, LOG_PREC.not);
  else s = logStr(n.a, LOG_PREC[n.t] + (n.t === "imp" ? 0.5 : 0)) + " " + LOG_SYM[n.t] + " " + logStr(n.b, LOG_PREC[n.t] + (n.t === "imp" ? 0 : 0.5));
  return (pp != null && LOG_PREC[n.t] < pp) ? "(" + s + ")" : s;
}
function logEval(n, v){
  switch (n.t){
    case "var": return v[n.n];
    case "not": return !logEval(n.a, v);
    case "and": return logEval(n.a, v) && logEval(n.b, v);
    case "or": return logEval(n.a, v) || logEval(n.b, v);
    case "imp": return !logEval(n.a, v) || logEval(n.b, v);
    case "iff": return logEval(n.a, v) === logEval(n.b, v);
  }
}
function logVars(nodes){ const s = new Set(); const go = n => { if (n.t === "var") s.add(n.n); else { go(n.a); if (n.b) go(n.b); } }; nodes.forEach(go); return [...s].sort(); }
function logSubs(n, out, seen){ if (n.t === "var") return; logSubs(n.a, out, seen); if (n.b) logSubs(n.b, out, seen); const k = logStr(n); if (!seen.has(k)){ seen.add(k); out.push(n); } }
function logFilas(vars){
  const rows = [];
  for (let i = 0; i < (1 << vars.length); i++){ const v = {}; vars.forEach((x, j) => { v[x] = !((i >> (vars.length - 1 - j)) & 1); }); rows.push(v); }
  return rows;
}
const logVF = b => '<td class="lg-' + (b ? "v" : "f") + '">' + (b ? "V" : "F") + "</td>";

/* ---------- pestaña 1: tablas de verdad y validez ---------- */
function logTablaHtml(){
  let res;
  try {
    const e = logParse(LOG.formula), vars = logVars([e]);
    if (vars.length > 5) throw new Error(logT("errVars"));
    const subs = []; logSubs(e, subs, new Set());
    const filas = logFilas(vars), vals = filas.map(v => logEval(e, v));
    const veredicto = vals.every(Boolean) ? "tautologia" : (!vals.some(Boolean) ? "contradiccion" : "contingencia");
    res = '<div class="tablewrap"><table class="lg-tabla"><thead><tr>' + vars.map(x => "<th>" + x + "</th>").join("") +
      subs.map((s, k) => '<th class="' + (k === subs.length - 1 ? "lg-main" : "") + '">' + logEsc(logStr(s)) + "</th>").join("") + "</tr></thead><tbody>" +
      filas.map(v => "<tr>" + vars.map(x => logVF(v[x])).join("") + subs.map((s, k) => logVF(logEval(s, v)).replace("<td", k === subs.length - 1 ? '<td data-main="1"' : "<td")).join("") + "</tr>").join("") +
      '</tbody></table></div><p class="lg-veredicto lg-' + veredicto + '">' + logT(veredicto) + "</p>";
  } catch (err){ res = '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
  return res;
}
function logArgHtml(){
  try {
    const ps = LOG.prem.split(";").map(x => x.trim()).filter(Boolean).map(logParse), c = logParse(LOG.concl);
    const vars = logVars([...ps, c]);
    if (vars.length > 5) throw new Error(logT("errVars"));
    const filas = logFilas(vars); let valido = true;
    const cuerpo = filas.map(v => {
      const pv = ps.map(p => logEval(p, v)), cv = logEval(c, v), todas = pv.every(Boolean), malo = todas && !cv;
      if (malo) valido = false;
      return '<tr class="' + (malo ? "lg-contra" : (todas ? "lg-ok" : "")) + '">' + vars.map(x => logVF(v[x])).join("") + pv.map(logVF).join("") + logVF(cv) + "</tr>";
    }).join("");
    return '<div class="tablewrap"><table class="lg-tabla"><thead><tr>' + vars.map(x => "<th>" + x + "</th>").join("") +
      ps.map((p, k) => '<th title="' + logEsc(logT("premisa", { n: k + 1 })) + '">' + logEsc(logStr(p)) + "</th>").join("") + '<th class="lg-main">' + logEsc(logStr(c)) + "</th></tr></thead><tbody>" + cuerpo +
      '</tbody></table></div><p class="lg-nota">' + logT("filasPremisas") + '</p><p class="lg-veredicto ' + (valido ? "lg-tautologia" : "lg-contradiccion") + '">' + logT(valido ? "valido" : "noValido") + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
const LOG_EJ_F = [["(p → q) ∧ p → q", "mp"], ["¬(p ∧ q) ↔ ¬p ∨ ¬q", "demorgan"], ["p ∨ ¬p", "tercero"], ["p ∧ ¬p", "nocontra"]];
const LOG_EJ_A = [["p → q; p", "q", "mp"], ["p → q; ¬q", "¬p", "mt"], ["p → q; q", "p", "ac"], ["p ∨ q; ¬p", "q", "sd"], ["p → q; q → r", "p → r", "sh"]];
const LOG_TECLAS = ["p", "q", "r", "s", "t", "¬",   /* t (17-10): el ejercicio de Mónica con cinco letras; logTokens ya admitía p-t */ "∧", "∨", "→", "↔", "(", ")"];
function logTeclado(id){ return '<div class="lg-teclas" data-para="' + id + '">' + LOG_TECLAS.map(k => '<button type="button" class="chip" data-tecla="' + k + '">' + k + "</button>").join("") + "</div>"; }
function logRenderTablas(){
  return '<div class="lg-panel"><label class="lg-label" for="lg-f">' + logT("formula") + '</label><p class="lg-nota">' + logT("ayudaFormula") + '</p>' +
    '<div class="lg-fila"><input id="lg-f" class="lg-input" value="' + logEsc(LOG.formula) + '" autocomplete="off" spellcheck="false"><button type="button" class="btn ghost" data-lg="borrar">' + logT("borrar") + '</button></div>' +
    logTeclado("lg-f") + '<p class="lg-nota">' + logT("ejemplos") + " " + LOG_EJ_F.map(([f, n]) => '<button type="button" class="chip" data-ejf="' + logEsc(f) + '">' + logT(n) + "</button>").join(" ") + '</p>' +
    '<div id="lg-tabla">' + logTablaHtml() + '</div><p><button type="button" class="btn" data-lg="circuito">' + logT("verCircuito") + " →</button></p></div>" +
    '<div class="lg-panel"><h2>' + logT("argTitulo") + '</h2><label class="lg-label" for="lg-p">' + logT("premisas") + '</label><input id="lg-p" class="lg-input" value="' + logEsc(LOG.prem) + '" autocomplete="off" spellcheck="false">' +
    logTeclado("lg-p") + '<label class="lg-label" for="lg-c">' + logT("conclusion") + '</label><div class="lg-fila"><input id="lg-c" class="lg-input" value="' + logEsc(LOG.concl) + '" autocomplete="off" spellcheck="false"><button type="button" class="btn" data-lg="arg">' + logT("comprobar") + "</button></div>" +
    '<p class="lg-nota">' + logT("ejemplos") + " " + LOG_EJ_A.map(([p, c, n]) => '<button type="button" class="chip" data-eja="' + logEsc(p) + '" data-ejc="' + logEsc(c) + '">' + logT(n) + "</button>").join(" ") + '</p><div id="lg-arg">' + logArgHtml() + "</div></div>";
}

/* ---------- pestaña 2: silogismos ---------- */
const LOG_MODOS = { "AAA-1": "Barbara", "EAE-1": "Celarent", "AII-1": "Darii", "EIO-1": "Ferio", "AAI-1": "Barbari", "EAO-1": "Celaront",
  "EAE-2": "Cesare", "AEE-2": "Camestres", "EIO-2": "Festino", "AOO-2": "Baroco", "EAO-2": "Cesaro", "AEO-2": "Camestros",
  "IAI-3": "Disamis", "AII-3": "Datisi", "OAO-3": "Bocardo", "EIO-3": "Ferison", "AAI-3": "Darapti", "EAO-3": "Felapton",
  "AEE-4": "Calemes", "IAI-4": "Dimatis", "EIO-4": "Fresison", "AAI-4": "Bramantip", "EAO-4": "Fesapo", "AEO-4": "Calemos" };
/* términos de cada premisa según la figura: [sujeto, predicado] */
const LOG_FIG = { 1: [["M", "P"], ["S", "M"]], 2: [["P", "M"], ["S", "M"]], 3: [["M", "P"], ["M", "S"]], 4: [["P", "M"], ["M", "S"]] };
const LOG_BIT = { S: 0, P: 1, M: 2 };
const logEn = (r, x) => !!(r & (1 << LOG_BIT[x]));
/* regiones del diagrama 1..7 (bit 0 = S, 1 = P, 2 = M); el 0 (fuera de todo) no cuenta */
const LOG_REG = [1, 2, 3, 4, 5, 6, 7];
function logZona(tipo, x, y){   /* regiones que la proposición vacía (A, E) o en las que afirma que hay algo (I, O) */
  return LOG_REG.filter(r => logEn(r, x) && (tipo === "A" || tipo === "O" ? !logEn(r, y) : logEn(r, y)));
}
function logCumple(m, tipo, x, y){ const z = logZona(tipo, x, y); return tipo === "A" || tipo === "E" ? z.every(r => !m[r]) : z.some(r => m[r]); }
function logSilValido(s, existen){
  const [may, men] = LOG_FIG[s.fig];
  for (let k = 0; k < 128; k++){
    const m = {}; LOG_REG.forEach((r, j) => { m[r] = !!(k & (1 << j)); });
    if (existen && existen.some(x => !LOG_REG.some(r => logEn(r, x) && m[r]))) continue;
    if (logCumple(m, s.may, may[0], may[1]) && logCumple(m, s.men, men[0], men[1]) && !logCumple(m, s.con, "S", "P")) return false;
  }
  return true;
}
function logReglas(s){
  const [may, men] = LOG_FIG[s.fig], dist = (tipo, pos) => pos === 0 ? (tipo === "A" || tipo === "E") : (tipo === "E" || tipo === "O");
  const neg = t => t === "E" || t === "O", part = t => t === "I" || t === "O", rotas = [];
  if (!dist(s.may, may.indexOf("M")) && !dist(s.men, men.indexOf("M"))) rotas.push("r1");
  if (dist(s.con, 1) && !dist(s.may, may.indexOf("P"))) rotas.push("r2P");
  if (dist(s.con, 0) && !dist(s.men, men.indexOf("S"))) rotas.push("r2S");
  if (neg(s.may) && neg(s.men)) rotas.push("r3");
  else if ((neg(s.may) || neg(s.men)) && !neg(s.con)) rotas.push("r4a");
  if (neg(s.con) && !neg(s.may) && !neg(s.men)) rotas.push("r4b");
  if (part(s.may) && part(s.men)) rotas.push("r5");
  else if ((part(s.may) || part(s.men)) && !part(s.con)) rotas.push("r6");
  return rotas;
}
const LOG_CEN = { 1: [86, 92], 2: [234, 92], 3: [160, 78], 4: [160, 236], 5: [112, 166], 6: [208, 166], 7: [160, 136] };
function logVenn(s, nombres){
  const [may, men] = LOG_FIG[s.fig], vacias = new Set(), cruces = [];
  [[s.may, may], [s.men, men]].forEach(([t, xy]) => { if (t === "A" || t === "E") logZona(t, xy[0], xy[1]).forEach(r => vacias.add(r)); });
  [[s.may, may], [s.men, men]].forEach(([t, xy]) => {
    if (t !== "I" && t !== "O") return;
    const z = logZona(t, xy[0], xy[1]).filter(r => !vacias.has(r));
    if (z.length === 1) cruces.push(LOG_CEN[z[0]]);
    else if (z.length === 2) cruces.push([(LOG_CEN[z[0]][0] + LOG_CEN[z[1]][0]) / 2, (LOG_CEN[z[0]][1] + LOG_CEN[z[1]][1]) / 2]);
  });
  const C = { S: [120, 118], P: [200, 118], M: [160, 188] }, R = 74, ids = ["S", "P", "M"];
  let defs = "<defs>" + ids.map(x => '<clipPath id="lgc' + x + '"><circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '"/></clipPath>').join("");
  for (let o = 0; o < 8; o++) defs += '<mask id="lgm' + o + '"><rect width="320" height="300" fill="#fff"/>' + ids.filter((x, j) => o & (1 << j)).map(x => '<circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '" fill="#000"/>').join("") + "</mask>";
  defs += "</defs>";
  let zonas = "";
  vacias.forEach(r => {
    let g = '<rect width="320" height="300" class="lg-vacia" mask="url(#lgm' + (7 & ~r) + ')"/>';
    ids.forEach((x, j) => { if (r & (1 << j)) g = '<g clip-path="url(#lgc' + x + ')">' + g + "</g>"; });
    zonas += g;
  });
  const circ = ids.map(x => '<circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '" class="lg-circ"/>').join("");
  const etq = '<text x="40" y="40" class="lg-vt">S · ' + logEsc(nombres.S) + '</text><text x="280" y="40" text-anchor="end" class="lg-vt">P · ' + logEsc(nombres.P) + '</text><text x="160" y="288" text-anchor="middle" class="lg-vt">M · ' + logEsc(nombres.M) + "</text>";
  const xs = cruces.map(([x, y]) => '<text x="' + x + '" y="' + (y + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("");
  return '<svg viewBox="0 0 320 300" class="lg-venn" role="img" aria-label="' + logEsc(logT("venn")) + '">' + defs + zonas + circ + etq + xs + "</svg>";
}
/* Euler con los tres términos a la vez: se dibujan solo las zonas que las premisas dejan posibles.
   Las 64 disposiciones (premisa mayor × menor × figura) están precalculadas por tools/logica_euler.js, que busca
   para cada caso la colocación de los círculos que dibuja todas las zonas posibles y ninguna imposible.
   Para regenerarlas: node tools/logica_euler.js */
function logEulerJunto(s, nom){
  const cf = LOG_EULER_PRE[s.may + s.men + "-" + s.fig];
  if (!cf) return "";
  const ids = ["S", "P", "M"], cruces = cf.x;
  const [x0, y0, x1, y1] = cf.caja, W = x1 - x0, H = y1 - y0;
  const circ = ids.map((x, j) => '<circle cx="' + cf.c[j][0] + '" cy="' + cf.c[j][1] + '" r="' + cf.c[j][2] + '" class="lg-circ lg-e' + (j + 1) + '"/>').join("");
  const etq = ids.map((x, j) => { const p = cf.etq[j]; return '<text x="' + p[0] + '" y="' + (p[1] + 5) + '" text-anchor="middle" class="lg-vt">' + x + "</text>"; }).join("");
  const xs = cruces.map(([x, y]) => '<text x="' + x + '" y="' + (y + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("");
  return '<figure class="lg-euler lg-euler-junto"><svg viewBox="' + x0 + " " + y0 + " " + W + " " + H + '" role="img" aria-label="' + logEsc(logT("eulerJunto")) + '">' + circ + etq + xs + "</svg><figcaption>" + logEsc(logT("termLeyenda", { s: nom.S, p: nom.P, m: nom.M })) + "</figcaption></figure>";
}
/* Euler: una proposición = dos círculos en la posición que expresa (dentro, separados, cruzados) */
function logEuler(tipo, x, y, titulo){
  const c = (cx, cy, r, cls) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="lg-circ ' + cls + '"/>';
  const l = (tx, ty, t) => '<text x="' + tx + '" y="' + ty + '" text-anchor="middle" class="lg-vt">' + t + "</text>";
  const cruz = (cx, cy) => '<text x="' + cx + '" y="' + (cy + 7) + '" text-anchor="middle" class="lg-x">✕</text>';
  const d = {
    A: c(100, 74, 60, "lg-e2") + c(94, 84, 28, "lg-e1") + l(94, 89, x) + l(100, 32, y),
    E: c(56, 74, 40, "lg-e1") + c(144, 74, 40, "lg-e2") + l(56, 79, x) + l(144, 79, y),
    I: c(78, 74, 48, "lg-e1") + c(122, 74, 48, "lg-e2") + l(52, 79, x) + l(148, 79, y) + cruz(100, 74),
    O: c(78, 74, 48, "lg-e1") + c(122, 74, 48, "lg-e2") + l(56, 52, x) + l(148, 79, y) + cruz(52, 84)
  }[tipo];
  return '<figure class="lg-euler"><svg viewBox="0 0 200 148" role="img" aria-label="' + logEsc(titulo) + '">' + d + "</svg><figcaption>" + logEsc(titulo) + " · " + logEsc(logFrase(tipo, x, y)) + "</figcaption></figure>";
}
function logFrase(tipo, x, y){ return logT("f" + tipo, { x, y }); }
function logSilHtml(){
  const s = LOG.sil, nom = { S: s.S || logT("defS"), P: s.P || logT("defP"), M: s.M || logT("defM") }, [may, men] = LOG_FIG[s.fig];
  const clave = s.may + s.men + s.con + "-" + s.fig, nombre = LOG_MODOS[clave];
  let ver;
  if (logSilValido(s)) ver = '<p class="lg-veredicto lg-tautologia">' + (nombre ? logT("silValido", { nombre }) : logT("silValidoSin")) + "</p>";
  else if (logSilValido(s, ["S", "P", "M"])){
    const basta = ["S", "M", "P"].find(x => logSilValido(s, [x])) || "S";
    ver = '<p class="lg-veredicto lg-contingencia">' + logT("silTrad", { t: nom[basta] }) + (nombre ? " " + logT("silTradNombre", { nombre }) : "") + "</p>";
  } else {
    const rotas = logReglas(s);
    ver = '<p class="lg-veredicto lg-contradiccion">' + logT("silNoValido") + "</p>" + (rotas.length ? '<p class="lg-label">' + logT("reglasRotas") + "</p><ul>" + rotas.map(r => "<li>" + logT(r) + "</li>").join("") + "</ul>" : "");
  }
  return '<div class="lg-sil-cuerpo"><ol class="lg-silo"><li><span>' + logT("pMayor") + "</span> " + logEsc(logFrase(s.may, nom[may[0]], nom[may[1]])) + "</li><li><span>" + logT("pMenor") + "</span> " + logEsc(logFrase(s.men, nom[men[0]], nom[men[1]])) +
    '</li><li class="lg-ccl"><span>' + logT("concl") + "</span> " + logEsc(logFrase(s.con, nom.S, nom.P)) + '</li></ol><p class="lg-nota">' + logT("modo", { m: clave }) + (nombre ? " · " + nombre : " · " + logT("sinNombre")) + "</p>" + ver +
    '</div><div class="lg-venn-caja"><div class="fgroup lg-diag">' + [["venn", "Venn"], ["euler", "Euler"]].map(([k, l]) => '<button type="button" class="fbtn" data-diag="' + k + '" aria-pressed="' + ((s.diag || "venn") === k) + '">' + l + "</button>").join("") + "</div>" +
    (s.diag === "euler"
      ? '<p class="lg-label">' + logT("eulerJunto") + "</p>" + logEulerJunto(s, nom) + '<p class="lg-nota">' + logT("eulerJuntoAyuda") + "</p>" +
        '<p class="lg-label">' + logT("euler") + '</p><div class="lg-euler-fila">' +
        logEuler(s.may, may[0], may[1], logT("pMayor")) + logEuler(s.men, men[0], men[1], logT("pMenor")) + logEuler(s.con, "S", "P", logT("concl")) +
        '</div><p class="lg-nota">' + logT("termLeyenda", { s: nom.S, p: nom.P, m: nom.M }) + '</p><p class="lg-nota">' + logT("eulerAyuda") + '</p><p class="lg-nota">' + logT("eulerConcl") + "</p>"
      : '<p class="lg-label">' + logT("venn") + "</p>" + logVenn(s, nom) + '<p class="lg-nota">' + logT("vennAyuda") + '</p><p class="lg-nota">' + logT("vennConcl") + "</p>") + "</div>";
}
function logSelTipo(id, val){ return '<select id="' + id + '" class="lg-sel">' + ["A", "E", "I", "O"].map(t => '<option value="' + t + '"' + (t === val ? " selected" : "") + ">" + logT("tipo" + t) + "</option>").join("") + "</select>"; }
function logRenderSil(){
  const s = LOG.sil;
  return '<div class="lg-panel"><p class="lg-label">' + logT("terminos") + '</p><div class="lg-terminos">' +
    [["S", "tS", "defS"], ["P", "tP", "defP"], ["M", "tM", "defM"]].map(([k, l, d]) => '<label>' + logT(l) + '<input class="lg-input" data-term="' + k + '" value="' + logEsc(s[k]) + '" placeholder="' + logEsc(logT(d)) + '"></label>').join("") +
    '</div><div class="lg-terminos"><label>' + logT("pMayor") + logSelTipo("lg-may", s.may) + "</label><label>" + logT("pMenor") + logSelTipo("lg-men", s.men) + "</label><label>" + logT("concl") + logSelTipo("lg-con", s.con) +
    "</label><label>" + logT("figura") + '<select id="lg-fig" class="lg-sel">' + [1, 2, 3, 4].map(n => '<option value="' + n + '"' + (n === s.fig ? " selected" : "") + ">" + logT("figN", { n }) + "</option>").join("") + "</select></label></div>" +
    '<p class="lg-nota">' + logT("figAyuda") + '</p><p class="lg-nota">' + logT("ejemplos") + " " + ["AAA-1", "EAE-2", "AII-3", "AAI-3", "AEE-1", "IAI-1"].map(k => '<button type="button" class="chip" data-ejs="' + k + '">' + (LOG_MODOS[k] || k) + "</button>").join(" ") +
    '</p></div><div class="lg-panel lg-sil" id="lg-sil">' + logSilHtml() + "</div>";
}

/* ---------- pestaña 3: puertas lógicas ---------- */
const LOG_GATES = ["NOT", "AND", "OR", "NAND", "NOR", "XOR", "XNOR"];
const LOG_GF = { NOT: (a) => !a, AND: (a, b) => a && b, OR: (a, b) => a || b, NAND: (a, b) => !(a && b), NOR: (a, b) => !(a || b), XOR: (a, b) => a !== b, XNOR: (a, b) => a === b };
/* símbolo de cada puerta (52×40, entradas a la izquierda, salida a la derecha en y=20) */
function logGateShape(g, x, y, on){
  const t = "translate(" + x + "," + (y - 20) + ")", cls = 'class="lg-gate' + (on ? " on" : "") + '"';
  const and = '<path d="M0,0 H26 A20,20 0 0 1 26,40 H0 Z" ' + cls + "/>", or = '<path d="M0,0 Q16,20 0,40 Q34,40 50,20 Q34,0 0,0 Z" ' + cls + "/>";
  const burbuja = cx => '<circle cx="' + cx + '" cy="20" r="4" ' + cls + "/>", extra = '<path d="M-6,0 Q10,20 -6,40" class="lg-wire"/>';
  const d = { NOT: '<path d="M0,2 L40,20 L0,38 Z" ' + cls + "/>" + burbuja(44), AND: and, OR: or, NAND: and + burbuja(50), NOR: or + burbuja(54), XOR: extra + or, XNOR: extra + or + burbuja(54) }[g];
  return '<g transform="' + t + '">' + d + "</g>";
}
const logGateOut = g => (g === "NAND" ? 54 : g === "NOR" || g === "XNOR" ? 58 : g === "NOT" ? 48 : 50);
function logRenderPuertaSola(){
  const g = LOG.gate, una = g === "NOT", a = !!LOG.gA, b = !!LOG.gB, out = una ? LOG_GF[g](a) : LOG_GF[g](a, b);
  const pin = (lbl, val, y, key) => '<g class="lg-pin" data-pin="' + key + '" tabindex="0" role="button" aria-label="' + lbl + " = " + (val ? 1 : 0) + '"><rect x="6" y="' + (y - 14) + '" width="34" height="28" rx="6" class="lg-sw' + (val ? " on" : "") + '"/><text x="23" y="' + (y + 5) + '" text-anchor="middle" class="lg-swt">' + lbl + " " + (val ? 1 : 0) + "</text></g>" +
    '<line x1="40" y1="' + y + '" x2="110" y2="' + y + '" class="lg-wire' + (val ? " on" : "") + '"/>';
  let svg = '<svg viewBox="0 0 300 120" class="lg-circ1">' + (una ? pin("A", a, 60, "A") : pin("A", a, 50, "A") + pin("B", b, 70, "B")) + logGateShape(g, 110, 60, out) +
    '<line x1="' + (110 + logGateOut(g)) + '" y1="60" x2="230" y2="60" class="lg-wire' + (out ? " on" : "") + '"/><circle cx="246" cy="60" r="16" class="lg-lamp' + (out ? " on" : "") + '"/><text x="246" y="100" text-anchor="middle" class="lg-swt">' + logT("salida") + " " + (out ? 1 : 0) + "</text></svg>";
  const filas = una ? [[0], [1]] : [[0, 0], [0, 1], [1, 0], [1, 1]];
  const tabla = '<table class="lg-tabla lg-mini"><thead><tr><th>A</th>' + (una ? "" : "<th>B</th>") + "<th>" + logT("salida") + "</th></tr></thead><tbody>" +
    filas.map(f => { const o = una ? LOG_GF[g](!!f[0]) : LOG_GF[g](!!f[0], !!f[1]), act = una ? f[0] === +a : f[0] === +a && f[1] === +b; return '<tr class="' + (act ? "lg-ok" : "") + '">' + f.map(x => "<td>" + x + "</td>").join("") + "<td>" + (o ? 1 : 0) + "</td></tr>"; }).join("") + "</tbody></table>";
  return '<div class="lg-puerta">' + svg + '<div><p class="lg-label">' + logT("tablaPuerta") + "</p>" + tabla + "</div></div>";
}
/* la fórmula como circuito: → se convierte en ¬p ∨ q y ↔ en XNOR */
function logACircuito(n){
  if (n.t === "var") return n;
  if (n.t === "not") return { t: "NOT", a: logACircuito(n.a) };
  if (n.t === "imp") return { t: "OR", a: { t: "NOT", a: logACircuito(n.a) }, b: logACircuito(n.b) };
  return { t: { and: "AND", or: "OR", iff: "XNOR" }[n.t], a: logACircuito(n.a), b: logACircuito(n.b) };
}
function logCircuitoHtml(){
  let e;
  try { e = logACircuito(logParse(LOG.formula)); } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
  const vars = logVars([logParse(LOG.formula)]);
  vars.forEach(v => { if (LOG.circ[v] == null) LOG.circ[v] = true; });
  const val = n => n.t === "var" ? !!LOG.circ[n.n] : (n.t === "NOT" ? !val(n.a) : LOG_GF[n.t](val(n.a), val(n.b)));
  const prof = n => n.t === "var" ? 0 : 1 + Math.max(prof(n.a), n.b ? prof(n.b) : 0), D = prof(e);
  let hoja = 0; const DX = 96, Y0 = 70, DY = 52, X0 = 70;
  const sit = (n, d) => {   /* d = distancia a la salida */
    if (n.t === "var"){ n.y = Y0 + (hoja++) * DY; n.x = X0; return; }
    sit(n.a, d + 1); if (n.b) sit(n.b, d + 1);
    n.x = X0 + 40 + (D - d - 1) * DX; n.y = n.b ? (n.a.y + n.b.y) / 2 : n.a.y;
  };
  sit(e, 0);
  const W = X0 + 40 + D * DX + 90, H = Y0 + Math.max(1, hoja) * DY;
  let cables = "", puertas = "", pines = "";
  const salidaX = n => n.t === "var" ? n.x : n.x + logGateOut(n.t);
  const dib = n => {
    if (n.t === "var"){ pines += '<text x="' + (n.x - 8) + '" y="' + (n.y + 5) + '" text-anchor="end" class="lg-swt' + (val(n) ? " on" : "") + '">' + n.n + "</text>"; return; }
    const ins = n.b ? [n.y - 10, n.y + 10] : [n.y];
    [n.a, n.b].filter(Boolean).forEach((c, j) => { dib(c); const x1 = salidaX(c), xm = (x1 + n.x) / 2;
      cables += '<polyline points="' + x1 + "," + c.y + " " + xm + "," + c.y + " " + xm + "," + ins[j] + " " + n.x + "," + ins[j] + '" class="lg-wire' + (val(c) ? " on" : "") + '"/>'; });
    puertas += logGateShape(n.t, n.x, n.y, val(n));
  };
  dib(e);
  const sx = salidaX(e), out = val(e);
  const sw = vars.map((v, i) => '<g class="lg-pin" data-var="' + v + '" tabindex="0" role="button" aria-label="' + v + " = " + (LOG.circ[v] ? 1 : 0) + '"><rect x="' + (8 + i * 48) + '" y="8" width="40" height="28" rx="6" class="lg-sw' + (LOG.circ[v] ? " on" : "") + '"/><text x="' + (28 + i * 48) + '" y="27" text-anchor="middle" class="lg-swt">' + v + " " + (LOG.circ[v] ? 1 : 0) + "</text></g>").join("");
  return '<svg viewBox="0 0 ' + W + " " + H + '" class="lg-circ2" style="max-width:' + W + 'px">' + sw + cables + puertas + pines +
    '<line x1="' + sx + '" y1="' + e.y + '" x2="' + (W - 40) + '" y2="' + e.y + '" class="lg-wire' + (out ? " on" : "") + '"/><circle cx="' + (W - 24) + '" cy="' + e.y + '" r="16" class="lg-lamp' + (out ? " on" : "") + '"><title>' + logT("lampara") + "</title></circle></svg>" +
    '<p class="lg-nota">' + logEsc(logStr(logParse(LOG.formula))) + " = " + (out ? "1" : "0") + "</p>";
}
function logRenderPuertas(){
  return '<div class="lg-panel"><div class="fgroup">' + LOG_GATES.map(g => '<button type="button" class="fbtn" data-gate="' + g + '" aria-pressed="' + (g === LOG.gate) + '">' + g + "</button>").join("") +
    '</div><p class="lg-nota">' + logT("g" + LOG.gate) + '</p><p class="lg-nota">' + logT("entradas") + '</p><div id="lg-puerta">' + logRenderPuertaSola() + "</div></div>" +
    '<div class="lg-panel"><h2>' + logT("circuito") + '</h2><p class="lg-nota">' + logT("circAyuda") + '</p><div class="lg-fila"><input id="lg-f2" class="lg-input" value="' + logEsc(LOG.formula) + '" autocomplete="off" spellcheck="false"></div>' + logTeclado("lg-f2") +
    '<div id="lg-circ" class="lg-scroll">' + logCircuitoHtml() + "</div></div>";
}

/* ---------- pestaña 4: paradojas (07-10) ---------- */
/* fórmula que se abre en la pestaña de tablas: p = «la frase es verdadera», «el barbero se afeita», «es heterológica»… */
const LOG_PAR_F = { mentiroso: "p ↔ ¬p", barbero: "p ↔ ¬p", grelling: "p ↔ ¬p", epimenides: "p → ¬p", carroll: "(p ∧ (p → q)) → q", infelices: "(p ∧ q) → ¬r", tanto: "(q ∨ s) → p", monica: "((q ∧ r) → p) ∧ (¬q ∧ r → ¬p)", agustin: "p → q", agustin2: "p → q ∧ r", contrafactico: "q ∧ r → p" };
/* diagrama de Euler de una frase (campo euler de paradojas.js): mismas clases que los de la pestaña de silogismos */
function logParEuler(e){
  const c = e.circulos.filter(k => k.r).map(k => '<circle cx="' + k.cx + '" cy="' + k.cy + '" r="' + k.r + '" class="lg-circ ' + k.cls + '"/>').join("");
  const t = e.circulos.filter(k => k.etq).map(k => '<text x="' + k.ex + '" y="' + k.ey + '" text-anchor="middle" class="lg-vt">' + logEsc(k.etq) + "</text>").join("");
  const x = (e.cruces || []).map(([a, b]) => '<text x="' + a + '" y="' + (b + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("") +
    (e.dudas || []).map(([a, b]) => '<text x="' + a + '" y="' + (b + 7) + '" text-anchor="middle" class="lg-x lg-duda">?</text>').join("");
  return '<figure class="lg-euler lg-par-euler"><svg viewBox="' + e.vista + '" role="img" aria-label="' + logEsc(logT("parEuler")) + '">' + c + t + x + "</svg></figure>" + (e.lectura || "") +
    (e.contingencia ? '<p class="lg-label">' + (e.contTitulo || logT("parConting")) + "</p>" + e.contingencia : "");
}
/* frases de grados (campo escala de paradojas.js): eje, franja en que la frase es verdadera (borde izquierdo
   discontinuo: el límite vago) y punto de referencia; los textos llevan su posición */
function logParEscala(e){
  const [x1, x2, y] = e.eje, [b1, b2] = e.banda;
  const svg = '<rect x="' + b1 + '" y="' + (y - 14) + '" width="' + (b2 - b1) + '" height="28" class="lg-banda"/>' +
    '<line x1="' + x1 + '" y1="' + y + '" x2="' + x2 + '" y2="' + y + '" class="lg-eje"/>' +
    '<path d="M' + (x2 - 8) + "," + (y - 5) + " L" + x2 + "," + y + " L" + (x2 - 8) + "," + (y + 5) + '" class="lg-eje"/>' +
    '<path d="M' + (x1 + 8) + "," + (y - 5) + " L" + x1 + "," + y + " L" + (x1 + 8) + "," + (y + 5) + '" class="lg-eje"/>' +
    '<line x1="' + b1 + '" y1="' + (y - 30) + '" x2="' + b1 + '" y2="' + (y + 20) + '" class="lg-vago"/>' +
    '<line x1="' + e.marca + '" y1="' + 42 + '" x2="' + e.marca + '" y2="' + y + '" class="lg-eje"/><circle cx="' + e.marca + '" cy="' + y + '" r="6" class="lg-marca"/>' +
    e.textos.map(t => '<text x="' + t.x + '" y="' + t.y + '" text-anchor="' + t.align + '" class="lg-vt">' + logEsc(t.t) + "</text>").join("");
  return '<figure class="lg-euler lg-par-euler lg-par-escala"><svg viewBox="' + e.vista + '" role="img" aria-label="' + logEsc(logT("parEscala")) + '">' + svg + "</svg></figure>" + (e.lectura || "") +
    (e.contingencia ? '<p class="lg-label">' + (e.contTitulo || logT("parConting")) + "</p>" + e.contingencia : "");
}
const LOG_PAR_VISTAS = ["paradojas", "ejercicios", "clasicos"];
/* (07-10) pestañas «Paradojas», «Ejercicios» y «Argumentos clásicos»: los mismos datos, repartidos por el campo view de cada grupo.
   En las dos últimas, los plegables son «Forma lógica» y «Qué dice…»; el desplegable de grupos solo sale si hay más de uno. */
function logRenderParadojas(vista){
  vista = vista || "paradojas";
  const grupos = (typeof PARADOJAS_GRUPOS !== "undefined" ? PARADOJAS_GRUPOS : []).filter(g => (g.view || "paradojas") === vista), todas = typeof PARADOJAS !== "undefined" ? PARADOJAS : [];
  const analisis = vista !== "paradojas";
  /* un desplegable y no una fila de botones: seis grupos con títulos largos serían una nube de chips (regla de diseño) */
  const g0 = grupos.some(g => g.id === LOG.parGrupo) ? LOG.parGrupo : "all", filtro = grupos.length < 2 ? "" : '<label class="lg-label lg-pargrupos">' + logT("parGrupo") + '<select id="lg-pargrupo" class="lg-sel">' + [["all", logT("parTodas")], ...grupos.map(g => [g.id, g.titulo])].map(([k, l]) =>
    '<option value="' + k + '"' + (g0 === k ? " selected" : "") + ">" + l + "</option>").join("") + "</select></label>";
  const tarjeta = p => '<article class="lg-panel lg-par" id="par-' + p.id + '"><h3>' + p.titulo + '</h3><p class="lg-nota">' + p.origen + '</p><p class="lg-enun">' + p.enunciado + "</p>" +
    '<details><summary>' + logT(analisis ? "parForma" : "parProblema") + "</summary>" + (/^<ul>/.test(p.problema) ? p.problema : "<p>" + p.problema + "</p>") +
    (LOG_PAR_F[p.id] ? '<p><button type="button" class="btn ghost" data-parf="' + logEsc(LOG_PAR_F[p.id]) + '">' + logT("parTabla") + " · " + logEsc(LOG_PAR_F[p.id]) + " →</button></p>" : "") +
    (p.euler ? '<p class="lg-label">' + (p.euler.titulo || logT("parEuler")) + "</p>" + logParEuler(p.euler) : "") +
    (p.euler2 ? '<p class="lg-label">' + (p.euler2.titulo || logT("parEuler")) + "</p>" + logParEuler(p.euler2) : "") +
    (p.escala ? '<p class="lg-label">' + logT("parEscala") + "</p>" + logParEscala(p.escala) : "") + "</details>" +
    '<details><summary>' + logT(analisis ? "parDice" : "parSalidas") + "</summary>" + p.salidas + "</details>" +
    '<p class="lg-pensar"><strong>' + logT("parPensar") + "</strong> " + p.pensar + "</p></article>";
  return (vista === "paradojas" ? '<div class="lg-panel"><p class="lg-nota">' + logT("parIntro") + "</p>" + logGuia("guiaParad") + filtro + "</div>" : (filtro ? '<div class="lg-panel">' + filtro + "</div>" : "")) +
    grupos.filter(g => g0 === "all" || g.id === g0).map(g => '<section class="lg-pargrupo"><h2>' + g.titulo + '</h2><p class="lg-nota">' + g.intro + "</p>" +
      todas.filter(p => p.grupo === g.id).map(tarjeta).join("") + "</section>").join("");
}

/* ---------- pestaña: cuadrado de oposición (10-10) ----------
   Se prueba con todos los «mundos» posibles de dos clases: hay o no hay S fuera de P (r10) y S dentro de P (r11).
   La lectura tradicional descarta el mundo sin S. Una proposición se sigue (V/F) si vale lo mismo en todos los
   mundos compatibles con el dato; si no, «no se sabe». */
const LOG_CU_VAL = { A: m => !m.r10, E: m => !m.r11, I: m => m.r11, O: m => m.r10 };
function logCuResultado(cu){
  const mundos = [];
  [false, true].forEach(r10 => [false, true].forEach(r11 => { if (!cu.trad || r10 || r11) mundos.push({ r10, r11 }); }));
  const ok = mundos.filter(m => LOG_CU_VAL[cu.tipo](m) === cu.val), res = {};
  ["A", "E", "I", "O"].forEach(t => { const vs = ok.map(LOG_CU_VAL[t]); res[t] = vs.every(Boolean) ? "V" : (!vs.some(Boolean) ? "F" : "?"); });
  return res;
}
function logCuadradoHtml(){
  const cu = LOG.cu, res = logCuResultado(cu), ej = "cuEj" + cu.ej;
  const esq = t => '<button type="button" class="lg-cu-esq lg-cu-' + t + (t === cu.tipo ? " lg-cu-dato" : "") + ' lg-cu-' + { V: "v", F: "f", "?": "q" }[res[t]] + '" data-cutipo="' + t + '" aria-pressed="' + (t === cu.tipo) + '">' +
    '<span class="lg-cu-letra">' + t + '</span><span class="lg-cu-frase">' + logEsc(logT(ej + t)) + '</span><span class="lg-cu-valor">' + logT({ V: "cuV", F: "cuF", "?": "cuQ" }[res[t]]) + (t === cu.tipo ? " · " + logT("cuDato") : "") + "</span></button>";
  const rel = (k, cls) => '<span class="lg-cu-rel ' + cls + (k !== "cuContradictorias" && !cu.trad ? " lg-cu-perdida" : "") + '">' + logT(k) + (k !== "cuContradictorias" && !cu.trad ? '<span class="lg-cu-sp">' + logT("cuPerdida") + "</span>" : "") + "</span>";
  const linea = (x1, y1, x2, y2, contra) => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="lg-cu-l' + (!contra && !cu.trad ? " lg-cu-ld" : "") + '" vector-effect="non-scaling-stroke"/>';
  const svg = '<svg class="lg-cu-lineas" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' + linea(18, 14, 82, 14) + linea(18, 86, 82, 86) + linea(14, 18, 14, 82) + linea(86, 18, 86, 82) + linea(20, 20, 80, 80, true) + linea(80, 20, 20, 80, true) + "</svg>";
  return '<div class="lg-cu">' + svg + esq("A") + rel("cuContrarias", "lg-cu-arriba") + esq("E") + rel("cuSubalternas", "lg-cu-izq") + rel("cuContradictorias", "lg-cu-centro") + rel("cuSubalternas", "lg-cu-der") +
    esq("I") + rel("cuSubcontrarias", "lg-cu-abajo") + esq("O") + '</div><p class="lg-nota">' + logT(cu.trad ? "cuNotaTrad" : "cuNotaActual") + "</p>";
}
function logRenderCuadrado(){
  const cu = LOG.cu, grupo = (attr, pares, actual) => '<div class="fgroup">' + pares.map(([v, l]) => '<button type="button" class="fbtn" data-' + attr + '="' + v + '" aria-pressed="' + (String(actual) === String(v)) + '">' + l + "</button>").join("") + "</div>";
  return '<div class="lg-panel"><p class="lg-label">' + logT("cuTerminos") + "</p>" + grupo("cuej", [1, 2, 3].map(n => [n, logT("cuEj" + n)]), cu.ej) +
    '<p class="lg-label">' + logT("cuElige") + "</p>" + grupo("cutipo", ["A", "E", "I", "O"].map(t => [t, t]), cu.tipo) +
    grupo("cuval", [["1", logT("cuEsV")], ["0", logT("cuEsF")]], cu.val ? "1" : "0") +
    '<p class="lg-label">' + logT("cuLectura") + "</p>" + grupo("cutrad", [["1", logT("cuTrad")], ["0", logT("cuActual")]], cu.trad ? "1" : "0") +
    '</div><div class="lg-panel" id="lg-cu">' + logCuadradoHtml() + "</div>";
}

/* ---------- pestaña: leyes de conjuntos (10-10) ----------
   Expresiones con A, B, C, U y ∅; ∪, ∩, −, ᶜ y paréntesis (∩ liga más que ∪ y −). Cada expresión se calcula
   como el conjunto de regiones del diagrama (bit j = dentro del círculo j; la región 0 es fuera de todos)
   y se dibuja con tvVennSvg (theoryview.js). */
function logCoTokens(s){
  const out = [];
  for (const c of s){
    if (/\s/.test(c)) continue;
    if (/[abcABC]/.test(c)) out.push({ k: "var", j: "ABC".indexOf(c.toUpperCase()) });
    else if (c === "U" || c === "u") out.push({ k: "U" });
    else if ("∅Ø0".includes(c)) out.push({ k: "0" });
    else if ("∪+|".includes(c)) out.push({ k: "or" });
    else if ("∩·&*^".includes(c)) out.push({ k: "and" });
    else if ("−-\\".includes(c)) out.push({ k: "dif" });
    else if ("ᶜ'’".includes(c)) out.push({ k: "c" });
    else if (c === "(" || c === ")") out.push({ k: c });
    else throw new Error(logT("coErrCar", { c }));
  }
  return out;
}
function logCoEval(s){
  if (!String(s).trim()) throw new Error(logT("coErrVacia"));
  const tk = logCoTokens(s); let i = 0, usaC = false;
  const peek = () => tk[i] && tk[i].k, TODO = 255;
  const expr = () => { let a = term(); while (peek() === "or" || peek() === "dif"){ const op = tk[i++].k, b = term(); a = op === "or" ? a | b : a & ~b & TODO; } return a; };
  const term = () => { let a = fac(); while (peek() === "and"){ i++; a &= fac(); } return a; };
  const fac = () => { let a = atom(); while (peek() === "c"){ i++; a = ~a & TODO; } return a; };
  const atom = () => {
    const x = tk[i]; if (!x) throw new Error(logT("coErrFalta"));
    if (x.k === "var"){ i++; if (x.j === 2) usaC = true; let m = 0; for (let r = 0; r < 8; r++) if (r & (1 << x.j)) m |= 1 << r; return m; }
    if (x.k === "U"){ i++; return TODO; }
    if (x.k === "0"){ i++; return 0; }
    if (x.k === "("){ i++; const e = expr(); if (peek() !== ")") throw new Error(logT("coErrParen")); i++; return e; }
    throw new Error(logT("coErrFalta"));
  };
  const m = expr();
  if (i < tk.length) throw new Error(logT("coErrFalta"));
  return { m, usaC };
}
const LOG_CO_EJ = [["A ∪ B", "B ∪ A", "coConm"], ["(A ∪ B) ∪ C", "A ∪ (B ∪ C)", "coAsoc"], ["(A ∪ B)ᶜ", "Aᶜ ∩ Bᶜ", "coDM1"], ["(A ∩ B)ᶜ", "Aᶜ ∪ Bᶜ", "coDM2"],
  ["A ∩ (B ∪ C)", "(A ∩ B) ∪ (A ∩ C)", "coDist"], ["A ∪ (B ∩ C)", "(A ∪ B) ∩ (A ∪ C)", "coDist2"], ["A ∪ Aᶜ", "U", "coComp"], ["A − B", "A ∩ Bᶜ", "coDif"], ["(A ∪ B)ᶜ", "Aᶜ ∪ Bᶜ", "coTrampa"]];
const LOG_CO_TECLAS = ["A", "B", "C", "∪", "∩", "−", "ᶜ", "(", ")", "U", "∅"];
function logCoRegiones(m, n){ const out = []; for (let r = 0; r < (1 << n); r++) if (m & (1 << r)) out.push([...Array(n)].map((_, j) => (r >> j) & 1).join("")); return out.join(","); }
/* (12-10) Cada lado se construye a la vista: «diagrama ∪ diagrama = diagrama» (petición del profesor: no basta poner
   dos veces el mismo diagrama; hacen falta los tres para llegar a la conclusión). Y la comprobación en los cinco casos
   de Euler con dos conjuntos: un dibujo de Euler ilustra una ley, pero solo los cinco juntos la comprueban. */
function logCoArbol(s){
  const tk = logCoTokens(s); let i = 0;
  const peek = () => tk[i] && tk[i].k;
  const expr = () => { let a = term(); while (peek() === "or" || peek() === "dif"){ const k = tk[i++].k; a = { k, a, b: term() }; } return a; };
  const term = () => { let a = fac(); while (peek() === "and"){ i++; a = { k: "and", a, b: fac() }; } return a; };
  const fac = () => { let a = atom(); while (peek() === "c"){ i++; a = { k: "c", a }; } return a; };
  const atom = () => {
    const x = tk[i]; if (!x) throw new Error(logT("coErrFalta"));
    if (x.k === "var" || x.k === "U" || x.k === "0"){ i++; return x; }
    if (x.k === "("){ i++; const e = expr(); if (peek() !== ")") throw new Error(logT("coErrParen")); i++; return e; }
    throw new Error(logT("coErrFalta"));
  };
  const t = expr(); if (i < tk.length) throw new Error(logT("coErrFalta"));
  return t;
}
const LOG_CO_OP = { or: "∪", and: "∩", dif: "−" };
function logCoTxt(n, dentro){
  if (n.k === "var") return "ABC"[n.j];
  if (n.k === "U") return "U";
  if (n.k === "0") return "∅";
  if (n.k === "c"){ const a = logCoTxt(n.a, false); return (n.a.k === "var" || n.a.k === "U" || n.a.k === "0" ? a : "(" + a + ")") + "ᶜ"; }
  const s = logCoTxt(n.a, true) + " " + LOG_CO_OP[n.k] + " " + logCoTxt(n.b, true);
  return dentro ? "(" + s + ")" : s;
}
function logCoMask(n){
  if (n.k === "var"){ let m = 0; for (let r = 0; r < 8; r++) if (r & (1 << n.j)) m |= 1 << r; return m; }
  if (n.k === "U") return 255;
  if (n.k === "0") return 0;
  if (n.k === "c") return ~logCoMask(n.a) & 255;
  const a = logCoMask(n.a), b = logCoMask(n.b);
  return n.k === "or" ? a | b : n.k === "and" ? a & b : a & ~b & 255;
}
/* una «ecuación de diagramas» por lado: operando, operación, operando, =, resultado (cada uno con su color) */
function logCoEcuacion(arbol, n, nom, titulo){
  const todo = (1 << (1 << n)) - 1;
  const reg = nodo => logCoRegiones(logCoMask(nodo) & todo, n);
  /* los operandos van rayados (/ el primero, \ el segundo); el resultado, de color y con los dos rayados encima, para que se vea de dónde sale */
  const fig = (nodo, cls, h1, h2) => '<figure class="tv-venn lg-co-fig ' + cls + '">' + tvVennSvg("c=" + nom + ";sel=" + reg(nodo) + (h1 ? ";h1=" + reg(h1) : "") + (h2 ? ";h2=" + reg(h2) : "")) + "<figcaption>" + logEsc(logCoTxt(nodo, false)) + "</figcaption></figure>";
  const op = t => '<span class="lg-co-op" aria-hidden="true">' + t + "</span>";
  let fila;
  if (arbol.k === "or" || arbol.k === "and" || arbol.k === "dif") fila = fig(arbol.a, "lg-op1") + op(LOG_CO_OP[arbol.k]) + fig(arbol.b, "lg-op2") + op("=") + fig(arbol, "lg-res", arbol.a, arbol.b);
  else if (arbol.k === "c") fila = op("(") + fig(arbol.a, "lg-op1") + op(")ᶜ") + op("=") + fig(arbol, "lg-res", arbol.a);
  else fila = fig(arbol, "lg-res");
  return '<h3 class="lg-co-h">' + logEsc(titulo) + "</h3>" + '<div class="lg-co-ec">' + fila + "</div>";
}
/* Euler con dos conjuntos: las cinco relaciones posibles; cada una dibuja solo las regiones que existen */
const LOG_EU_CASOS = [
  ["coEuSep", [[88, 98, 56], [212, 98, 56]], [[40, 34], [260, 34]]],
  ["coEuCorte", [[118, 98, 64], [182, 98, 64]], [[56, 34], [244, 34]]],
  ["coEuAB", [[128, 112, 40], [150, 98, 82]], [[128, 98], [244, 30]]],
  ["coEuBA", [[150, 98, 82], [172, 112, 40]], [[56, 30], [172, 98]]],
  ["coEuIg", [[150, 98, 70], [150, 98, 70]], [[150, 70], [150, 70]]]
];
let logEuN = 0;
function logEulerSvg(caso, m){
  const [, C, E] = caso, id = "lgeu" + (++logEuN), W = 300, H = 190;
  const circ = (j, extra) => '<circle cx="' + C[j][0] + '" cy="' + C[j][1] + '" r="' + C[j][2] + '"' + (extra || "") + "/>";
  let defs = "<defs>" + C.map((_, j) => '<clipPath id="' + id + "c" + j + '">' + circ(j) + "</clipPath>").join("");
  let zonas = "";
  for (let r = 0; r < 4; r++){
    if (!(m & (1 << r))) continue;
    const dentro = [0, 1].filter(j => r & (1 << j)), fuera = [0, 1].filter(j => !(r & (1 << j))), mid = id + "m" + r;
    defs += '<mask id="' + mid + '"><rect width="' + W + '" height="' + H + '" fill="#fff"/>' + fuera.map(j => circ(j, ' fill="#000"')).join("") + "</mask>";
    let g = '<rect x="6" y="6" width="' + (W - 12) + '" height="' + (H - 12) + '" class="tvv-sel" mask="url(#' + mid + ')"/>';
    dentro.forEach(j => { g = '<g clip-path="url(#' + id + "c" + j + ')">' + g + "</g>"; });
    zonas += g;
  }
  const igual = caso[0] === "coEuIg";
  const etq = igual ? '<text x="150" y="104" text-anchor="middle" class="tvv-t">A = B</text>'
    : ["A", "B"].map((t, j) => '<text x="' + E[j][0] + '" y="' + E[j][1] + '" text-anchor="middle" class="tvv-t">' + t + "</text>").join("");
  return '<svg viewBox="0 0 300 190" role="img" aria-hidden="true">' + defs + '</defs><rect x="6" y="6" width="288" height="178" rx="4" class="tvv-u"/><text x="14" y="26" class="tvv-t tvv-tu">U</text>' + zonas + C.map((_, j) => circ(j, ' class="tvv-c"')).join("") + etq + "</svg>";
}
function logCoEuler(a, b, n){
  if (n === 3) return '<p class="lg-nota">' + logT("coEuTres") + "</p>";
  const ma = logCoMask(a) & 15, mb = logCoMask(b) & 15;
  /* regiones que hay en cada caso (bit r: 0 fuera, 1 solo A, 2 solo B, 3 A y B), en el orden de LOG_EU_CASOS: separados (sin región 3), se cortan (todas), A dentro de B (sin 1), B dentro de A (sin 2), iguales (sin 1 ni 2) */
  const ex = [7, 15, 13, 11, 9];
  let ok = 0, unoBien = null;
  const cartas = LOG_EU_CASOS.map((c, i) => {
    const e = ex[i], va = ma & e, vb = mb & e, si = va === vb; if (si){ ok++; if (!unoBien) unoBien = logT(c[0]); }
    const f = (m, t) => '<figure class="tv-venn lg-co-fig lg-res">' + logEulerSvg(c, m) + "<figcaption>" + logEsc(t) + "</figcaption></figure>";
    return '<div class="lg-eu-caso ' + (si ? "lg-eu-si" : "lg-eu-no") + '"><h4>' + logT(c[0]) + '</h4><div class="lg-eu-par">' + f(va, logCoTxt(a, false)) + f(vb, logCoTxt(b, false)) + '</div><p class="lg-eu-v">' + (si ? "✓ " + logT("coEuSi") : "✗ " + logT("coEuNo")) + "</p></div>";
  }).join("");
  const resumen = ok === 5 ? logT("coEuTodos") : logT("coEuFalla", { n: 5 - ok }) + (unoBien ? " " + logT("coEuTrampa", { c: unoBien }) : "");
  return '<p class="lg-nota">' + logT("coEuIntro") + '</p><div class="lg-eu-casos">' + cartas + '</div><p class="lg-veredicto ' + (ok === 5 ? "lg-tautologia" : "lg-contradiccion") + '">' + resumen + "</p>";
}
function logConjHtml(){
  let a, b, ta, tb;
  try { a = logCoEval(LOG.co.izq); b = logCoEval(LOG.co.der); ta = logCoArbol(LOG.co.izq); tb = logCoArbol(LOG.co.der); } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
  if (typeof tvVennSvg !== "function") return "";
  const n = a.usaC || b.usaC ? 3 : 2, nom = n === 3 ? "A,B,C" : "A,B", todo = (1 << (1 << n)) - 1, ma = a.m & todo, mb = b.m & todo, iguales = ma === mb;
  const fig = (m, tit, cls) => '<figure class="tv-venn' + (cls ? " lg-co-fig " + cls : "") + '">' + tvVennSvg("c=" + nom + ";sel=" + logCoRegiones(m, n)) + "<figcaption>" + logEsc(tit) + "</figcaption></figure>";
  const pat = (id, rot, cls) => '<pattern id="' + id + '" patternUnits="userSpaceOnUse" width="9" height="9" patternTransform="rotate(' + rot + ')"><rect width="3.2" height="9" class="' + cls + '"/></pattern>';
  return '<svg class="lg-co-pats" width="0" height="0" aria-hidden="true" focusable="false"><defs>' + pat("lgCoH1", 45, "lg-co-p1") + pat("lgCoH2", -45, "lg-co-p2") + "</defs></svg>" +
    '<p class="lg-nota">' + logT("coRayas") + "</p>" +
    logCoEcuacion(ta, n, nom, logT("coIzq")) + logCoEcuacion(tb, n, nom, logT("coDer")) +
    '<h3 class="lg-co-h">' + logT("coCompara") + '</h3><div class="lg-co-ec">' + fig(ma, LOG.co.izq, "lg-res") + '<span class="lg-co-op" aria-hidden="true">' + (iguales ? "=" : "≠") + "</span>" + fig(mb, LOG.co.der, "lg-res") + "</div>" +
    '<p class="lg-veredicto ' + (iguales ? "lg-tautologia" : "lg-contradiccion") + '">' + logT(iguales ? "coIguales" : "coDistintas") + "</p>" +
    (iguales ? "" : '<div class="tv-venns">' + fig((ma ^ mb) & todo, logT("coDifieren")) + "</div>") +
    '<p class="lg-nota">' + logT("coUnivVacio") + "</p>" +
    '<p><button type="button" class="btn ghost" data-lg="euler" aria-expanded="' + !!LOG.co.euler + '">' + logT(LOG.co.euler ? "coEuOcultar" : "coEuBtn") + "</button></p>" +
    (LOG.co.euler ? logCoEuler(ta, tb, n) : "");
}
function logRenderConjuntos(){
  const tecl = id => '<div class="lg-teclas" data-para="' + id + '">' + LOG_CO_TECLAS.map(k => '<button type="button" class="chip" data-tecla="' + k + '">' + k + "</button>").join("") + "</div>";
  return '<div class="lg-panel"><p class="lg-nota">' + logT("coAyuda") + '</p><label class="lg-label" for="lg-co1">' + logT("coIzq") + '</label><input id="lg-co1" class="lg-input" value="' + logEsc(LOG.co.izq) + '" autocomplete="off" spellcheck="false">' + tecl("lg-co1") +
    '<label class="lg-label" for="lg-co2">' + logT("coDer") + '</label><input id="lg-co2" class="lg-input" value="' + logEsc(LOG.co.der) + '" autocomplete="off" spellcheck="false">' + tecl("lg-co2") +
    '<p class="lg-nota">' + logT("coLeyes") + " " + LOG_CO_EJ.map(([x, y, k]) => '<button type="button" class="chip" data-ejco1="' + logEsc(x) + '" data-ejco2="' + logEsc(y) + '">' + logT(k) + "</button>").join(" ") + "</p></div>" +
    '<div class="lg-panel" id="lg-co">' + logConjHtml() + "</div>";
}

/* ---------- montaje y eventos ---------- */
const LOG_SUB_SIL = ["silogismos", "cuadrado", "conjuntos"];
/* (12-10) «Lógica moderna»: tablas de verdad, formalizar, reglas de inferencia y puertas lógicas (las dos del medio, en logicamoderna.js) */
const LOG_SUB_MOD = ["tablas", "formalizar", "inferencia", "leyes", "cuantificadores", "puertas"];   /* (18-10) + «Leyes lógicas» */
const LOG_INTRO = { tablas: "introTablas", silogismos: "introSilog", cuadrado: "introCuadrado", conjuntos: "introConjuntos", puertas: "introPuertas", ejercicios: "introEjerc", clasicos: "introClasicos", formalizar: "introFormalizar", inferencia: "introInferencia", leyes: "introLeyes", cuantificadores: "introCuantificadores", falacias: "introFalacias" };
const LOG_GUIA = { tablas: "guiaTablas", silogismos: "guiaSilog", puertas: "guiaPuertas", ejercicios: "guiaEjerc", clasicos: "guiaClasicos" };
function logRender(){
  const box = logBox(); if (!box) return;
  /* (12-10) arriba: «Lógica clásica» y «Lógica moderna», cada una con sus subpestañas (no más de 6 pestañas arriba) */
  const grupo = LOG_SUB_SIL.includes(LOG.tab) ? "silogismos" : LOG_SUB_MOD.includes(LOG.tab) ? "tablas" : LOG.tab;
  const tabs = [["silogismos", "tabClasica"], ["tablas", "tabModerna"], ...(typeof logRenderFalacias === "function" ? [["falacias", "tabFalacias"]] : []), ["paradojas", "tabParad"], ["ejercicios", "tabEjerc"], ["clasicos", "tabClasicos"]];
  const sub = LOG_SUB_SIL.includes(LOG.tab) ? [["silogismos", "tabSilog"], ["cuadrado", "tabCuadrado"], ["conjuntos", "tabConjuntos"]]
    : LOG_SUB_MOD.includes(LOG.tab) ? [["tablas", "tabTablas"], ["formalizar", "tabFormalizar"], ["inferencia", "tabInferencia"], ["leyes", "tabLeyes"], ["cuantificadores", "tabCuantificadores"], ["puertas", "tabPuertas"]].filter(([k]) => ["tablas", "puertas"].includes(k) || typeof logRenderFormalizar === "function") : null;
  const cuerpo = LOG.tab === "silogismos" ? logRenderSil() : LOG.tab === "cuadrado" ? logRenderCuadrado() + (typeof logmConversion === "function" ? logmConversion() : "") : LOG.tab === "conjuntos" ? logRenderConjuntos() : LOG.tab === "puertas" ? logRenderPuertas()
    : LOG.tab === "formalizar" && typeof logRenderFormalizar === "function" ? logRenderFormalizar() : LOG.tab === "inferencia" && typeof logRenderInferencia === "function" ? logRenderInferencia() : LOG.tab === "leyes" && typeof logRenderLeyes === "function" ? logRenderLeyes() : LOG.tab === "cuantificadores" && typeof logRenderCuantificadores === "function" ? logRenderCuantificadores() : LOG.tab === "falacias" && typeof logRenderFalacias === "function" ? logRenderFalacias()
    : LOG_PAR_VISTAS.includes(LOG.tab) ? logRenderParadojas(LOG.tab) : logRenderTablas();
  box.innerHTML = '<div class="fgroup lg-tabs" role="tablist">' + tabs.map(([k, l]) => '<button type="button" class="fbtn" data-lgtab="' + k + '" aria-pressed="' + (grupo === k) + '">' + logT(l) + "</button>").join("") + "</div>" +
    (sub ? '<div class="fgroup lg-subtabs">' + sub.map(([k, l]) => '<button type="button" class="fbtn" data-lgtab="' + k + '" aria-pressed="' + (LOG.tab === k) + '">' + logT(l) + "</button>").join("") + "</div>" : "") +
    /* (08-10) una introducción breve en cada pestaña, por si se llega a ella sin contexto (Paradojas ya tiene la suya) */
    (LOG_INTRO[LOG.tab] ? '<p class="lg-intro">' + logT(LOG_INTRO[LOG.tab]) + "</p>" + (LOG_GUIA[LOG.tab] ? logGuia(LOG_GUIA[LOG.tab]) : "") : "") +
    zubiaHtml(LOG.tab) +
    '<div class="lg-cuerpo">' + cuerpo + "</div>";
}
function logInsertar(input, txt){
  const a = input.selectionStart != null ? input.selectionStart : input.value.length, b = input.selectionEnd != null ? input.selectionEnd : a;
  input.value = input.value.slice(0, a) + txt + input.value.slice(b); input.focus(); input.setSelectionRange(a + txt.length, a + txt.length);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}
function logRefrescar(id){
  const el = document.getElementById(id); if (!el) return;
  el.innerHTML = id === "lg-tabla" ? logTablaHtml() : id === "lg-arg" ? logArgHtml() : id === "lg-sil" ? logSilHtml() : id === "lg-circ" ? logCircuitoHtml() : id === "lg-cu" ? logCuadradoHtml() : id === "lg-co" ? logConjHtml() : logRenderPuertaSola();
}
function logWire(){
  const box = logBox(); if (!box || box.dataset.lgWired) return;
  box.dataset.lgWired = "1";
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button, .lg-pin"); if (!b) return;
    if (b.dataset.lgtab){ LOG.tab = b.dataset.lgtab; LOG.parGrupo = "all"; logRender(); return; }
    if (b.dataset.tecla){ const inp = document.getElementById(b.parentElement.dataset.para); if (inp) logInsertar(inp, b.dataset.tecla); return; }
    if (b.dataset.ejf != null){ LOG.formula = b.dataset.ejf; logRender(); return; }
    if (b.dataset.eja != null){ LOG.prem = b.dataset.eja; LOG.concl = b.dataset.ejc; logRender(); return; }
    if (b.dataset.ejs){ const [m, f] = b.dataset.ejs.split("-"); Object.assign(LOG.sil, { may: m[0], men: m[1], con: m[2], fig: +f }); logRender(); return; }
    if (b.dataset.diag){ LOG.sil.diag = b.dataset.diag; logRefrescar("lg-sil"); return; }
    if (b.dataset.parf){ LOG.formula = b.dataset.parf; LOG.tab = "tablas"; logRender(); const t = document.getElementById("lg-tabla"); if (t) t.scrollIntoView({ block: "center" }); return; }
    if (b.dataset.cuej){ LOG.cu.ej = +b.dataset.cuej; logRender(); return; }
    if (b.dataset.cutipo){ LOG.cu.tipo = b.dataset.cutipo; logRender(); return; }
    if (b.dataset.cuval){ LOG.cu.val = b.dataset.cuval === "1"; logRender(); return; }
    if (b.dataset.cutrad){ LOG.cu.trad = b.dataset.cutrad === "1"; logRender(); return; }
    if (b.dataset.ejco1 != null){ LOG.co.izq = b.dataset.ejco1; LOG.co.der = b.dataset.ejco2; logRender(); return; }
    if (b.dataset.gate){ LOG.gate = b.dataset.gate; logRender(); return; }
    if (b.dataset.pin){ LOG["g" + b.dataset.pin] = LOG["g" + b.dataset.pin] ? 0 : 1; logRefrescar("lg-puerta"); return; }
    if (b.dataset.var){ LOG.circ[b.dataset.var] = !LOG.circ[b.dataset.var]; logRefrescar("lg-circ"); return; }
    if (b.dataset.lg === "borrar"){ LOG.formula = ""; logRender(); const i = document.getElementById("lg-f"); if (i) i.focus(); return; }
    if (b.dataset.lg === "circuito"){ LOG.tab = "puertas"; logRender(); const c = document.getElementById("lg-circ"); if (c) c.scrollIntoView({ block: "center" }); return; }
    if (b.dataset.lg === "euler"){ LOG.co.euler = !LOG.co.euler; logRefrescar("lg-co"); return; }
    if (b.dataset.lg === "arg"){ logRefrescar("lg-arg"); }
  });
  box.addEventListener("keydown", ev => { const p = ev.target.closest(".lg-pin"); if (p && (ev.key === "Enter" || ev.key === " ")){ ev.preventDefault(); p.dispatchEvent(new MouseEvent("click", { bubbles: true })); } });
  box.addEventListener("input", ev => {
    const t = ev.target;
    if (t.id === "lg-f"){ LOG.formula = t.value; logRefrescar("lg-tabla"); }
    else if (t.id === "lg-f2"){ LOG.formula = t.value; logRefrescar("lg-circ"); }
    else if (t.id === "lg-co1" || t.id === "lg-co2"){ LOG.co[t.id === "lg-co1" ? "izq" : "der"] = t.value; logRefrescar("lg-co"); }
    else if (t.id === "lg-p" || t.id === "lg-c"){ LOG[t.id === "lg-p" ? "prem" : "concl"] = t.value; logRefrescar("lg-arg"); }
    else if (t.dataset.term){ LOG.sil[t.dataset.term] = t.value; logRefrescar("lg-sil"); }
  });
  box.addEventListener("change", ev => {
    const t = ev.target, k = { "lg-may": "may", "lg-men": "men", "lg-con": "con", "lg-fig": "fig" }[t.id];
    if (k){ LOG.sil[k] = k === "fig" ? +t.value : t.value; logRefrescar("lg-sil"); }
    else if (t.id === "lg-pargrupo"){ LOG.parGrupo = t.value; logRender(); }
  });
}
function loadTxokoa(arg){
  /* (07-10) #logica/<paradojas|ejercicios|clasicos>/<id>: abre la pestaña de esa ficha, en su grupo, y la lleva a la vista */
  const m = /^(?:paradojas|ejercicios|clasicos)\/([\w-]+)$/.exec(arg || ""), ficha = m && typeof PARADOJAS !== "undefined" ? PARADOJAS.find(p => p.id === m[1]) : null;
  const grupo = ficha && typeof PARADOJAS_GRUPOS !== "undefined" ? PARADOJAS_GRUPOS.find(g => g.id === ficha.grupo) : null;
  if (ficha){ LOG.tab = (grupo && grupo.view) || "paradojas"; LOG.parGrupo = ficha.grupo; }
  else if (arg && ["tablas", "silogismos", "cuadrado", "conjuntos", "puertas", "formalizar", "inferencia", "cuantificadores", "falacias", ...LOG_PAR_VISTAS].includes(arg)){ LOG.tab = arg; LOG.parGrupo = "all"; }
  logRender(); logWire();
  if (ficha){ const el = document.getElementById("par-" + ficha.id); if (el) el.scrollIntoView({ block: "start" }); }
}
/* (dsh-2) el arranque lo hace txokoaBoot() al final del fichero */

/* (dsh-2) LOG_EULER_PRE → logikatxokoa_datos.js */

/* ---------- Lógica moderna (logicamoderna.js-ren egokitzapena) ---------- */
"use strict";
const logmT = (k, v) => String(LOGM_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

/* ---------- Formalizar ---------- */
function logmEquiv(a, b){
  const vars = logVars([a, b]);
  return logFilas(vars).find(v => logEval(a, v) !== logEval(b, v)) || null;
}
function logmFzRes(i){
  const z = LOGM_FZ[i], st = LOG.fz[i] || {};
  if (st.sol) return '<p class="lg-nota">' + logmT("sol", { s: logEsc(z.s) }) + "</p>";
  if (!st.hecho) return "";
  if (!String(st.f || "").trim()) return '<p class="lg-error">' + logmT("vacia") + "</p>";
  try {
    const a = logParse(st.f), b = logParse(z.s), dif = logmEquiv(a, b);
    if (!dif) return '<p class="lg-veredicto lg-tautologia">' + logmT("bien", { s: logEsc(z.s) }) + "</p>";
    const fila = Object.keys(dif).map(x => x + " = " + (dif[x] ? "V" : "F")).join(", ");
    return '<p class="lg-veredicto lg-contradiccion">' + logmT("mal", { fila, a: logmT(logEval(a, dif) ? "verdadero" : "falso"), b: logmT(logEval(b, dif) ? "verdadero" : "falso") }) +
      '</p><p class="lg-nota"><b>' + logmT("pista") + ":</b> " + logEsc(z.pista) + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
function logRenderFormalizar(){
  const N = LOGM_FZ.length;
  return '<details class="lg-guia"><summary>' + logmT("guiaTitF") + "</summary>" + logmT("guiaF") + "</details>" +
    LOGM_FZ.map((z, i) => {
      const st = LOG.fz[i] || {};
      return '<div class="lg-panel lg-fz" id="lg-fz-' + i + '"><p class="lg-nota">' + logmT("ejercicio", { n: i + 1, m: N }) + '</p><p class="lg-fz-frase">' + logEsc(z.f) + "</p>" +
        '<p class="lg-nota">' + logmT("diccionario") + " " + z.d.map(([l, t]) => "<b>" + l + "</b> = " + logEsc(t)).join(" · ") + "</p>" +
        '<label class="lg-label" for="lg-fzi-' + i + '">' + logmT("tuFormula") + '</label><div class="lg-fila"><input id="lg-fzi-' + i + '" class="lg-input" data-fz="' + i + '" value="' + logEsc(st.f || "") + '" autocomplete="off" spellcheck="false">' +
        '<button type="button" class="btn" data-fzok="' + i + '">' + logmT("comprobar") + '</button></div>' + logTeclado("lg-fzi-" + i) +
        '<p><button type="button" class="btn ghost" data-fzsol="' + i + '">' + logmT("solucion") + '</button></p><div id="lg-fzr-' + i + '">' + logmFzRes(i) + "</div></div>";
    }).join("");
}

/* ---------- Reglas de inferencia ---------- */
function logmTodas(){ return LOGM_REGLAS.concat(LOGM_FALACIAS); }
function logmForma(x){ return x.p.split(";").map(s => s.trim()).join(" · ") + " ⊢ " + x.c; }
function logmCarta(x, fal){
  return '<div class="lg-regla' + (fal ? " lg-falaz" : "") + '"><h3>' + logEsc(x.n) + '</h3><p class="lg-forma"><b>' + logmT("forma") + ":</b> " + logEsc(logmForma(x)) + "</p>" +
    '<p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p>" + (fal ? '<p><b>' + logmT("porQue") + ":</b> " + logEsc(x.por) + "</p>" : "") +
    '<p><button type="button" class="btn ghost" data-infp="' + logEsc(x.p) + '" data-infc="' + logEsc(x.c) + '">' + logmT("verTabla") + " →</button></p></div>";
}
function logRenderInferencia(){
  const T = logmTodas();
  return '<div class="lg-panel"><h2>' + logmT("validas") + '</h2><div class="lg-reglas">' + LOGM_REGLAS.map(x => logmCarta(x, false)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<p><button type="button" class="btn ghost" data-lgtab="falacias">' + logmT("falVer") + "</button></p>" +
    '<p><button type="button" class="btn ghost" data-lgtab="leyes">' + logmT("leyesIr") + "</button></p>" +
    '<div class="lg-panel"><h2>' + logmT("ejTit") + '</h2><p class="lg-nota">' + logmT("ejAyuda") + "</p>" +
    LOGM_EJ.map((e, i) => {
      const r = LOG.inf[i], bien = T.find(x => x.k === e.r);
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.t) + '</p><div class="lg-teclas">' + T.map(x => '<button type="button" class="chip' + (r === x.k ? (x.k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + '" data-infej="' + i + '" data-infr="' + x.k + '"' + (r ? " disabled" : "") + ">" + logEsc(x.n) + "</button>").join("") + "</div>" +
        (r ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "acierto" : "fallo", { r: logEsc(bien.n) }) + " " + logmT("formaArg", { f: logEsc(logmForma(bien)) }) + "</p>" : "") + "</div>";
    }).join("") + "</div>";
}

/* ---------- Cuantificadores (lógica de predicados) ---------- */
/* Las cuatro proposiciones de Aristóteles en lógica de predicados, un «mundo pequeño» donde se evalúan (con el caso
   del sujeto vacío: el compromiso existencial del tema 4) y un ejercicio de elegir la fórmula de cada frase. */
const LOGM_CQ_IND = ["a", "b", "c", "d", "e"];
function logmCqEval(m){
  const ix = i => LOGM_CQ_IND[i], S = m.map(r => !!r[0]), P = m.map(r => !!r[1]), all = [0, 1, 2, 3, 4];
  const res = {
    A: { v: all.every(i => !S[i] || P[i]), malos: all.filter(i => S[i] && !P[i]) },
    E: { v: all.every(i => !S[i] || !P[i]), malos: all.filter(i => S[i] && P[i]) },
    I: { v: all.some(i => S[i] && P[i]), buenos: all.filter(i => S[i] && P[i]) },
    O: { v: all.some(i => S[i] && !P[i]), buenos: all.filter(i => S[i] && !P[i]) }
  };
  Object.values(res).forEach(r => { r.txt = r.malos ? (r.malos.length ? logmT("cqContra", { x: r.malos.map(ix).join(", ") }) : (S.some(Boolean) ? "" : logmT("cqSinS"))) : (r.buenos.length ? logmT("cqTesti", { x: r.buenos.map(ix).join(", ") }) : logmT("cqNadie")); });
  return res;
}
function logmCqMundo(){
  const m = LOG.cq.m, res = logmCqEval(m);
  return '<div class="tablewrap"><table class="lg-tabla lg-cq-mundo"><thead><tr><th>' + logmT("cqInd") + "</th>" + LOGM_CQ_IND.map(x => "<th>" + x + "</th>").join("") + "</tr></thead><tbody>" +
    ["S", "P"].map((k, j) => "<tr><th>" + k + "</th>" + m.map((r, i) => '<td><button type="button" class="chip lg-cq-cel' + (r[j] ? " on" : "") + '" data-cqi="' + i + '" data-cqj="' + j + '" aria-pressed="' + !!r[j] + '">' + (r[j] ? "✓" : "·") + "</button></td>").join("") + "</tr>").join("") +
    '</tbody></table></div><div class="tablewrap"><table class="lg-tabla"><tbody>' +
    LOGM_CQ4.map(([t, , f]) => '<tr><th>' + t + "</th><td>" + logEsc(f) + "</td>" + logVF(res[t].v) + '<td class="lg-cq-x">' + logEsc(res[t].txt) + "</td></tr>").join("") + "</tbody></table></div>";
}
function logRenderCuantificadores(){
  const ej = LOG.cq.ej;
  return '<div class="lg-panel"><h2>' + logmT("cqCuatro") + '</h2><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("cqProp") + "</th><th>" + logmT("cqFormula") + "</th><th>" + logmT("cqLee") + "</th></tr></thead><tbody>" +
    LOGM_CQ4.map(([t, p, f, l]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + '</td><td class="lg-forma">' + logEsc(f) + "</td><td>" + logEsc(l) + "</td></tr>").join("") + "</tbody></table></div>" +
    '<p class="lg-nota">' + logmT("cqTrampa") + '</p><p class="lg-nota">' + logmT("cqNeg") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqMundo") + '</h2><p class="lg-nota">' + logmT("cqMundoAyuda") + '</p><p class="lg-nota">' + logmT("cqPresets") + " " +
    [["p1", "cqP1"], ["p2", "cqP2"], ["p3", "cqP3"], ["p4", "cqP4"]].map(([k, l]) => '<button type="button" class="chip" data-cqpre="' + k + '">' + logmT(l) + "</button>").join(" ") + "</p>" +
    '<div id="lg-cq">' + logmCqMundo() + '</div><p class="lg-nota">' + logmT("cqVacio") + "</p></div>" +
    logmGeneralizacion() +
    /* (12-10) la falacia del cambio de orden de los cuantificadores, con su contraejemplo */
    logmCqOrden() +
    '<div class="lg-panel"><h2>' + logmT("cqEjTit") + '</h2><p class="lg-nota">' + logmT("cqEjAyuda") + "</p>" +
    LOGM_CQ_EJ.map((e, i) => {
      const r = ej[i];
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.f) + ' <span class="lg-nota">(' + logEsc(e.d) + ')</span></p><div class="lg-teclas">' +
        e.o.map((o, k) => '<button type="button" class="chip lg-forma' + (r != null && r === k ? (k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + (r != null && k === e.r && r !== k ? " lg-chip-ok" : "") + '" data-cqej="' + i + '" data-cqo="' + k + '"' + (r != null ? " disabled" : "") + ">" + logEsc(o) + "</button>").join("") + "</div>" +
        (r != null ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "cqBien" : "cqMal") + " " + logEsc(e.por) + "</p>" : "") + "</div>";
    }).join("") + '<details class="lg-guia"><summary>' + logmT("cqEjemplo") + "</summary><p>" + logmT("cqEjemploTxt") + "</p></details></div>";
}


/* ---------- (12-10) lo que faltaba: conversión ilícita, generalización apresurada y «lo que la lógica puede y no puede refutar» ---------- */
function logmConversion(){
  return '<div class="lg-panel"><h2>' + logmT("convTit") + '</h2><p class="lg-nota">' + logmT("convIntro") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("convProp") + "</th><th>" + logmT("convConv") + "</th><th>" + logmT("convVale") + "</th><th>" + logmT("convEj") + "</th></tr></thead><tbody>" +
    LOGM_CONV.map(([t, p, c, v, e]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + "</td><td>" + logEsc(c) + '</td><td class="lg-' + (v === "si" ? "v" : "f") + '">' + logmT(v === "si" ? "convSi" : "convNo") + (t === "A" ? "<br><small>" + logmT("convAcc") + "</small>" : "") + "</td><td>" + logEsc(e) + "</td></tr>").join("") + "</tbody></table></div></div>";
}
function logmGeneralizacion(){
  return '<div class="lg-panel"><h2>' + logmT("genTit") + "</h2><p>" + logmT("gen") + '</p><p><button type="button" class="btn ghost" data-cqpre="p3">' + logmT("genVer") + "</button></p></div>";
}
function logmPuedeNoPuede(){
  const duelo = document.getElementById("duelo") ? '<p><button type="button" class="btn ghost" data-igo="duelo" data-iarg="">' + logmT("lpDuelo") + "</button></p>" : "";
  return '<div class="lg-panel"><h2>' + logmT("lpTit") + '</h2><p class="lg-nota">' + logmT("lpIntro") + "</p><h3>" + logmT("lpAyuda") + '</h3><div class="lg-reglas">' +
    LOGM_AYUDA.map(x => '<div class="lg-regla lg-medio"><h3>' + logEsc(x.n) + '</h3><p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p><p><b>" + logmT("lpQueVe") + ":</b> " + logEsc(x.ve) + "</p></div>").join("") + "</div>" +
    "<h3>" + logmT("lpNo") + '</h3><p class="lg-nota">' + logmT("lpNoIntro") + '</p><ul class="lg-nof">' + LOGM_NOFORMAL.map(([n, d]) => "<li><b>" + logEsc(n) + ":</b> " + logEsc(d) + "</li>").join("") + "</ul>" + duelo + "</div>";
}

/* ---------- (12-10) pestaña «Falacias»: todas las falacias del Rincón, reunidas (estaban repartidas por Cuadrado, Reglas de inferencia y Cuantificadores) ---------- */
const LOGM_FAL_SIL = [["r1", "AAA-2"], ["r2P", "AEE-1"], ["r2S", "AAA-3"], ["r3", "EEE-1"], ["r4a", "AEA-1"], ["r5", "III-1"]];
function logmCqOrden(){
  return '<div class="lg-panel"><h2>' + logmT("cqOrdenTit") + "</h2><p>" + logmT("cqOrden") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th>x</th><th>' + logmT("cqOrdenMadre") + "</th></tr></thead><tbody>" +
    [["a", "m1"], ["b", "m2"], ["c", "m3"]].map(([x, y]) => "<tr><td>" + x + "</td><td>" + y + "</td></tr>").join("") + '</tbody></table></div><p class="lg-nota">' + logmT("cqOrdenContra") + '</p><p class="lg-nota">' + logmT("cqOrdenFilo") + "</p></div>";
}
function logRenderFalacias(){
  return '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falSilTit") + '</h2><p class="lg-nota">' + logmT("falSilIntro") + '</p><div class="lg-reglas">' +
    LOGM_FAL_SIL.map(([r, m]) => '<div class="lg-regla lg-falaz"><h3>' + logmT("falR" + r.slice(1)) + "</h3><p>" + logT(r) + '</p><p class="lg-forma">' + m + '</p><p><button type="button" class="btn ghost" data-falsil="' + m + '">' + logmT("falProbar") + "</button></p></div>").join("") + "</div></div>" +
    logmConversion() + logmGeneralizacion() + logmCqOrden() + logmPuedeNoPuede();
}


/* ---------- (18-10) pestaña «Leyes lógicas»: las 70 leyes elementales y las 21 reglas derivadas de deducción ----------
   Transcritas de dos fotocopias que trajo el profesor el 18-10 («Leyes elementales de la lógica de enunciados», 2 hojas
   a máquina, y «Reglas derivadas de deducción», 2 hojas). Las 70 leyes se han comprobado como tautologías y las 21 reglas
   como argumentos válidos con este mismo motor (logParse/logEval). Erratas de la hoja corregidas: en la 40 falta la
   flecha de «(p r)». La 68 lleva (p → r), la forma habitual de la ley de ese nombre; la hoja pone (q → r), que también
   es tautología (orden del profesor del 18-10). Las abreviaturas de los nombres se escriben enteras («Lcp» = ley de carga de premisa, regla Cpr). */
/* reglas: [nº, nombre, abreviatura, formas]; cada forma = [premisas separadas por «;», conclusión, raya doble] */
function logmDeduccion(p, c, doble){
  return '<div class="lg-ded" dir="ltr">' + p.split(";").map(x => "<span>" + logEsc(x.trim()) + "</span>").join("") + '<span class="lg-ded-c' + (doble ? " lg-ded-2" : "") + '">' + logEsc(c) + "</span></div>";
}
function logRenderLeyes(){
  const tit = logmT("verTabla");
  return '<div class="lg-panel"><h2>' + logmT("leyesTit") + '</h2><p class="lg-nota">' + logmT("leyesNota") + "</p>" +
    LOGM_LEYES.map(([g, ls], k) => '<details class="lg-leyes"' + (k ? "" : " open") + "><summary>" + logEsc(g) + " (" + ls[0][0] + "–" + ls[ls.length - 1][0] + ')</summary><ol class="lg-leyes-l">' +
      ls.map(([n, f, nom]) => '<li value="' + n + '"><span class="lg-ley-n">' + n + '.</span><span class="lg-ley-f" dir="ltr">' + logEsc(f) + '</span><span class="lg-ley-nom">' + logEsc(nom) + '</span><button type="button" class="chip" data-ley="' + logEsc(f) + '" title="' + tit + '">' + logmT("leyTabla") + "</button></li>").join("") + "</ol></details>").join("") + "</div>" +
    '<div class="lg-panel"><h2>' + logmT("derTit") + '</h2><p class="lg-nota">' + logmT("derNota") + '</p><div class="lg-reglas">' +
    LOGM_DERIVADAS.map(([n, nom, ab, fs]) => '<div class="lg-regla"><h3>' + n + ". " + logEsc(nom) + " <small>(" + ab + ")</small></h3>" +
      (fs ? '<div class="lg-ded-fila">' + fs.map(([p, c, d]) => '<div class="lg-ded-caja">' + logmDeduccion(p, c, d) + '<button type="button" class="chip" data-infp="' + logEsc(p) + '" data-infc="' + logEsc(c) + '" title="' + tit + '">' + logmT("leyTabla") + "</button></div>").join("") + "</div>"
        : '<div class="lg-ded-fila"><div class="lg-ded-caja"><div class="lg-ded" dir="ltr"><span>A ↔ B</span><span>C<sub>A</sub></span><span class="lg-ded-c">C<sub>B</sub></span></div></div></div><p>' + logmT("derInter") + "</p>") + "</div>").join("") + "</div></div>";
}


/* ---------- eventos (delegados en la caja del Rincón; logicaview.js maneja los demás) ---------- */
function logmWire(){
  const box = document.getElementById("logicabox"); if (!box) return; if (box.dataset.lgmWired) return; box.dataset.lgmWired = "1";
  LOG.fz = LOG.fz || {}; LOG.inf = LOG.inf || {}; LOG.cq = LOG.cq || { m: LOGM_CQ_PRE.p3.map(r => r.slice()), ej: {} };
  Object.assign(LOG_TXT, LOGM_TXT);   // (dsh-2) el render lo hace txokoaBoot()
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.fzok != null){ const i = +b.dataset.fzok; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { hecho: true, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.fzsol != null){ const i = +b.dataset.fzsol; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { sol: true }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.ley != null){ LOG.formula = b.dataset.ley; LOG.tab = "tablas"; logRender(); const t = document.getElementById("lg-tabla"); if (t) t.scrollIntoView({ block: "center" }); }
    else if (b.dataset.infp != null){ LOG.prem = b.dataset.infp; LOG.concl = b.dataset.infc; LOG.tab = "tablas"; logRender(); const a = document.getElementById("lg-arg"); if (a) a.scrollIntoView({ block: "center" }); }
    else if (b.dataset.cqi != null){ const r = LOG.cq.m[+b.dataset.cqi]; r[+b.dataset.cqj] = r[+b.dataset.cqj] ? 0 : 1; const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.falsil){ const [m, f] = b.dataset.falsil.split("-"); Object.assign(LOG.sil, { may: m[0], men: m[1], con: m[2], fig: +f }); LOG.tab = "silogismos"; logRender(); const c = document.getElementById("lg-sil"); if (c) c.scrollIntoView({ block: "start" }); }
    else if (b.dataset.cqpre){ if (!document.getElementById("lg-cq")){ LOG.tab = "cuantificadores"; logRender(); } LOG.cq.m = LOGM_CQ_PRE[b.dataset.cqpre].map(r => r.slice()); const c = document.getElementById("lg-cq"); if (c){ c.innerHTML = logmCqMundo(); if (b.closest(".lg-panel") !== c.closest(".lg-panel")) c.scrollIntoView({ block: "center" }); } }
    else if (b.dataset.cqej != null){ LOG.cq.ej[+b.dataset.cqej] = +b.dataset.cqo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
    else if (b.dataset.infej != null){ LOG.inf[+b.dataset.infej] = b.dataset.infr; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
  });
  box.addEventListener("input", ev => { const t = ev.target; if (t.dataset && t.dataset.fz != null){ const i = +t.dataset.fz; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { f: t.value, hecho: false, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = ""; } });
  box.addEventListener("keydown", ev => { const t = ev.target; if (ev.key === "Enter" && t.dataset && t.dataset.fz != null){ ev.preventDefault(); const ok = box.querySelector('[data-fzok="' + t.dataset.fz + '"]'); if (ok) ok.click(); } });
}

/* ---------- (dsh-2) zubiak B1 Logikarekin eta arranquea ---------- */
/* «Kapituluan: …»: txokoko pestaña bakoitzaren gokan, B1-eko atal dagokion esteka. Taula zubiak_logika.js-en. */
function zubiaHtml(tab){
  if (typeof ZUBIAK_LOGIKA === "undefined" || typeof ZUBIAK_TXT === "undefined") return "";
  const ez = ZUBIAK_LOGIKA.filter(z => z.pieza === tab);
  if (!ez.length) return "";
  return '<p class="zubia zubia-txoko"><span class="zubia-et">' + ZUBIAK_TXT.kapituluan + "</span> " +
    ez.map(z => '<a href="#kapitulua/' + ZUBIAK_GAKOA + "/" + z.b1 + '">' + logEsc(z.b1izena) + " →</a>").join(" · ") + "</p>";
}
function txokoaBoot(){
  const box = logBox(); if (!box) return;
  if (!box.dataset.txBoot){ box.dataset.txBoot = "1"; logmWire(); }   /* behin: fz/inf/cq egoera, LOGM_TXT LOG_TXT-en eta entzuleak */
  logRender(); logWire();
}
window.loadTxokoa = loadTxokoa;
if (logBox()) txokoaBoot();
document.addEventListener("DOMContentLoaded", txokoaBoot);
