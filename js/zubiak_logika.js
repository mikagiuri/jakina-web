/* Zubiak: B1 · Logika, klaseak eta multzoak (00aa_02logika) ↔ Logika-txokoa (dsh-2, 19-10-2026)
   Taula bat, bi noranzko:
     · kapituluaview.js-ek irakurri eta B1-eko atalen azpian «Txokoan probatu» kaxa pintatzen du;
     · logikatxokoaview.js-ek irakurri eta txokoko pestanaren gainean «Kapituluan: …» esteka jartzen du.
   B1-eko atalen izenak (b1izena) kapituluaren datuetatik aterata daude; testuak hemen, bi aldetan independente.
   ADBISUA: B1-eko M02 blokea (multzoak, erlazioak) ez dago oraindik webean, hortaz «clases y conjuntos»
   gaiak ez du helmugarik B1ean; datozen bihurketetan taula hau zabaldu. */
const ZUBIAK_GAKOA = "00aa_02logika";
const ZUBIAK_TXT = { txokoan: "Txokoan probatu:", kapituluan: "Kapituluan:" };
const ZUBIAK_LOGIKA = [
  /* kuantifikatzaileak */
  { b1: "a9",  pieza: "cuantificadores", etiketa: "Kuantifikatzaileak", b1izena: "8. Kuantifikatzaileak" },
  { b1: "a20", pieza: "cuantificadores", etiketa: "Kuantifikatzaileak", b1izena: "I.6. Aldagai baten agerraldi askea eta lotua" },
  /* formalizazioa */
  { b1: "a12", pieza: "formalizar",      etiketa: "Formalizatu",        b1izena: "11. Formalizazioa" },
  /* dedukzio naturala: erregelak eta ariketak */
  { b1: "a27", pieza: "inferencia",      etiketa: "Inferentzia-arauak", b1izena: "II.1. Inferentzia-erregela primitiboak" },
  { b1: "a29", pieza: "leyes",           etiketa: "Lege logikoak",      b1izena: "II.3. Inferentzia-erregela eratorriak" },
  { b1: "a31", pieza: "leyes",           etiketa: "Lege logikoak",      b1izena: "II.4. Dedukzio-ariketak" },
  { b1: "a26", pieza: "leyes",           etiketa: "Lege logikoak",      b1izena: "TNDren bistaratze estrukturala Frederic-ekin" },
  /* semantika: baliozkotasuna = egia-taularen egia orokortua */
  { b1: "a41", pieza: "tablas",          etiketa: "Egia-taulak",        b1izena: "III.1. Interpretazioak" },
  { b1: "a44", pieza: "tablas",          etiketa: "Egia-taulak",        b1izena: "III.4. Asetasuna, baliozkotasuna eta ondorioa" }
];
