/* JAKINA · kapitulua «B2 - Aljebra lineala eta geometria (algebra2013) - II» (01ma_04algebra2013), desde edicion2/kapituluak/01ma_04algebra2013/01ma_04algebra2013.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01ma_04algebra2013"] = {
 "gakoa": "01ma_04algebra2013",
 "titulua": "JAKINA - B2 - Aljebra lineala eta geometria (algebra2013) - II",
 "azala": "B2 - Aljebra lineala eta geometria (algebra2013) - II",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/01ma_04algebra2013/01ma_04algebra2013.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M11",
   "izenburua": "Formak, espazio euklidearrak eta espektrala",
   "maila": "TRESNAK"
  },
  {
   "mota": "iturria",
   "proiektua": "koadernoa_algebra2013_alg_p001_mk.typ",
   "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Espazio euklidearra: norma, distantzia eta biderkadura eskalarra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>-ko bektore baten norma eta bi punturen arteko distantzia, eta oro har espazio bektorial batean biderkadura eskalarra nola definitzen den, bektoreen arteko angeluarekin lotuta."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Bektorearen norma eta puntuen distantzia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oinarri baten gaineko bektorea <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> idazten da; haren <strong>norma</strong> (luzera) Pitagorasen teoremaz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><msqrt><mrow><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi puntu <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> emanda, haien arteko <strong>distantzia</strong> <math display=\"inline\"><mover><mrow><mi>P</mi><mi>Q</mi></mrow><mo accent=\"true\">→</mo></mover></math> bektorearen norma da; osagaiak <math display=\"inline\"><mrow><msub><mi>q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> dituen triangelu zuzenaren hipotenusa:"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/441a329388edd65a.svg",
     "zabalera": 284
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>2</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Biderkadura eskalarra",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Biderkadura eskalarra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> gaineko espazio bektoriala. <strong>Biderkadura eskalarra</strong> ondoko funtzioa da: <math display=\"block\"><mrow><mi>φ</mi><mo>:</mo><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<em class=\"j-nab\">Osagai baliokideak biderkatu eta biderkadura horiek batzen dira:</em>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>u</mi><mn>2</mn></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Angeluarekiko lotura: biderkadura eskalarra normen eta angeluaren bidez ere adieraz daiteke, eta Cauchy–Schwarz-en desberdintzaz kosinua bornatuta dago:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>1</mn><mo>≤</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></mfrac><mo>≤</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Muturreko kasuak: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> denean bektoreak <strong>elkarzutak</strong> dira (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math> denean <strong>paraleloak</strong> eta norabide berekoak (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkiaren arabera osatua (a1_0001, IMG_2026_07_28_02_13_41S). Formula guztiak <strong>zuzenak</strong> dira: norma euklidearra <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>-n, bi punturen distantzia, eta Cauchy–Schwarz-en ondoriozko <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≤</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>≤</mo><mn>1</mn></mrow></math> borne-tartea. Behealdeko lerroa (<math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> / <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math> kasuen marrazki txikiak) argazkitik jaso da, txostenak jaso ez zuena. Definizioaren azpian dagoen hitz urdin azpimarratu bat irakurtezina da jatorrizkoan; testuinguruak &quot;biderkadura eskalarra&quot; adierazten duela dirudi. Ez da laburpenik egin. Ikus <code>a1_0001_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p002_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Biderkadura eskalarraren axiomak, adibideak eta Gram-en matrizea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Biderkadura eskalar batek bete behar dituen lau propietateak (adibide zenbakidun batekin egiaztatuta), biderkadura eskalarraren lau adibide klasiko, eta oinarri orokor batean biderkadura eskalarra adierazten duen <strong>Gram-en matrizea</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Biderkadura eskalarraren axiomak"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Espazio euklidearra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> gaineko espazio bektoriala biderkadura eskalar batekin hornitua (<strong>espazio euklidearra</strong>). Orduan ondoko propietateak betetzen dira, <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math> eta <math display=\"inline\"><mrow><mo>∀</mo><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (simetria) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (batu-linealtasuna) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (homogeneotasuna) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (positiboki definitua) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Egiaztapen zenbakiduna</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) hartuta:"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1) Simetria:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⋅</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow></math>. Berdinak. ✓",
        "<strong>2) Batu-linealtasuna:</strong> <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, beraz <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>7</mn></mrow></math>; eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>7</mn></mrow></math>. Berdinak. ✓",
        "<strong>3) Homogeneotasuna:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>0</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>6</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>6</mn></mrow></math>. Berdinak. ✓",
        "<strong>4) Positiboki definitua:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup><mo>=</mo><mn>5</mn><mo>&gt;</mo><mn>0</mn></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibideak"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Biderkadura eskalarrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>[1]</strong> <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math> edo <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, biderkadura eskalar arrunta: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>y</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>[2]</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math>; matrize simetriko batekin definitua: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Matrizea simetrikoa da eta bere menor nagusiak positiboak (<math display=\"inline\"><mrow><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>): beraz <strong>biderkadura eskalar baliozkoa</strong> da. (Egileak <math display=\"inline\"><mi>?</mi></math> gorriz markatu zuen; hemen berretsita.)"
      },
      {
       "mota": "testua",
       "html": "<strong>[3]</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub></mrow></math> soilik (<math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math>): <strong>ez da</strong> biderkadura eskalar baliozkoa, <strong>degeneratua</strong> baita — adibidez <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> hartuta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, eta 4) axioma huts egiten du. (Egileak <math display=\"inline\"><mi>?</mi></math> gorriz markatu zuen; bere zalantza justifikatua da.)"
      },
      {
       "mota": "testua",
       "html": "<strong>[4]</strong> <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> (funtzio jarraituak), edo <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> (polinomioak): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gram-en matrizea (oinarri orokor batean)"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi>n</mi></math> dimentsioko espazio euklidearra, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri batekin. <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math> direnean, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>x</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>y</mi><mi>j</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub></mrow></math>, beraz biderketa bilinealtasunez zabalduz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>y</mi><mi>j</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub><msub><mi>y</mi><mi>j</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koefiziente horiek <strong>Gram-en matrizea</strong> osatzen dute, <math display=\"inline\"><mrow><msub><mi>G</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Modu trinkoan, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><mi>G</mi><mi>y</mi></mrow></math>; <math display=\"inline\"><mi>G</mi></math> simetrikoa eta positiboki definitua da biderkadura eskalarra izan dadin."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkia (IMG_2026_07_28_02_13_48S) <strong>orri bikoitza</strong> da (2-3 orriak); a1_0002 txostenak ezkerreko orria (2) baino ez zuen jaso, eta eskuineko orria (3, Gram-en matrizea) hemen berreskuratu da argazkitik. Egiaztapen zenbakidunak <strong>zuzenak</strong> dira (1), 2), 3) axiomak: emaitzak <math display=\"inline\"><mrow><mn>3</mn><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mn>7</mn><mo>=</mo><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>=</mo><mn>6</mn></mrow></math>). Adibideez: [2] matrize simetriko definitu-positiboa baliozkoa da; [3] <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub></mrow></math> degeneratua da (4) axioma huts) — bi kasuak egileak berak <math display=\"inline\"><mi>?</mi></math>-z markatu zituen. Gram-en matrizearen lehen errenkada jatorrizkoan diagonalki apur bat nahasia dago; forma kanonikoa <math display=\"inline\"><mrow><msub><mi>G</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, hemen zuzendua. Definizioaren amaierako hitz bat (&quot;...betetzen dira[n]&quot;) irakurtezina da. Ez da laburpenik egin. Ikus <code>a1_0002_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p003_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 1,
   "izenburua": "Forma bilinealak eta forma koadratiko elkartua (polarizazioa)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal baten definizioa, hari elkartutako forma koadratikoa, eta forma koadratikotik forma bilineal simetrikoa berreskuratzeko <strong>polarizazio-formula</strong>."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Forma bilineala",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Forma bilineala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi>K</mi></math> gaineko espazio bektoriala (<math display=\"inline\"><mi>K</mi></math> = eskalarren gorputza). <strong>Forma bilineala</strong> ondoko funtzioa da, argumentu bakoitzean <strong>lineala</strong>: <math display=\"block\"><mrow><mi>b</mi><mo>:</mo><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Forma koadratiko elkartua",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Forma koadratikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Forma bilineal <math display=\"inline\"><mi>b</mi></math> bati <strong>forma koadratiko</strong> bat elkartzen zaio: <math display=\"block\"><mrow><msub><mi>Q</mi><mi>b</mi></msub><mo>:</mo><mi>E</mi><mo>→</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>↦</mo><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Homogeneotasun koadratikoa: <math display=\"inline\"><mrow><mi>λ</mi><mo>∈</mo><mi>K</mi></mrow></math> bada, <math display=\"block\"><mrow><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Polarizazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma koadratikotik forma bilineala berreskura daiteke. <math display=\"inline\"><mrow><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> zabalduz, bilinealtasunez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, zati simetrikoa askatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>b</mi></math> <strong>simetrikoa</strong> bada (<math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), forma bilineala erabat berreskuratzen da <math display=\"inline\"><mn>2</mn></math>-z zatituz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkiaren eskuin orria (11), NEWTON, 2013/2/6. Deribazioa <strong>zuzena</strong> da: polarizazio-formula simetrikoa lortzeko urrats estandarra. Bi zehaztapen <strong>mahairatuak (aipamenarekin)</strong>: (1) bigarren bilinealtasun-lerroan jatorrizkoak lehen gaian <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> idatzi zuen, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izan behar duena (lehen argumentua <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> finkoa da); hemen zuzendua. (2) Jatorrizko orria batura simetrikoan (<math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) gelditzen da; egileak &quot;<math display=\"inline\"><mrow><mn>2</mn><mi>b</mi><mo>=</mo><mi>Q</mi></mrow></math>&quot; bilatzen zuela markatu zuen, eta hemen <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> faktorearekin osatu da <math display=\"inline\"><mi>b</mi></math> simetrikorako (egileak orri horretan amaitu gabe utzi zuen urratsa). Ezkerreko orria (10) determinante-ariketak dira (a1_0006i, beste unitate batekoa). Ez da laburpenik egin. Ikus <code>a1_0006d_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p007_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Forma bilineal simetrikoak, b-ortogonaltasuna eta matrize elkartua (Gram)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal simetrikoak eta haien forma polarra, b-ortogonaltasunaren eta b-isotropiaren definizioak, biderkadura oinarri batean adierazten duen <strong>matrize elkartua</strong> (Gram-en matrizea), eta <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ko adibide bat."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Forma bilineal simetrikoak eta forma polarra"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Forma bilineal simetrikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>b</mi></math> forma bilineala <strong>simetrikoa</strong> da baldin <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Kasu horretan <math display=\"inline\"><msub><mi>Q</mi><mi>b</mi></msub></math>-ri elkartutako <strong>forma polarra</strong> da, eta polarizazioz berreskuratzen da: <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "b-ortogonaltasuna eta b-isotropia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>b</mi></math> forma bilineal simetrikoa <math display=\"inline\"><mi>E</mi></math>-n."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> eta <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></math> <strong>b-ortogonalak</strong> dira <math display=\"inline\"><mrow><mo>⇔</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>.",
        "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> <strong>b-isotropoa</strong> da <math display=\"inline\"><mrow><mo>⇔</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize elkartua (Gram-en matrizea)"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarria, <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <strong>Matrize elkartua</strong> (<math display=\"inline\"><mi>b</mi></math>-rena, <math display=\"inline\"><msub><mi>Q</mi><mi>b</mi></msub></math>-rena) <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> oinarrian:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mspace width=\"0.222em\"></mspace><mi>…</mi><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mspace width=\"0.222em\"></mspace><mi>…</mi><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>b</mi></math> simetrikoa bada, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, beraz <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math> <strong>simetrikoa</strong> da (<math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi>G</mi><mn>1</mn><mi>T</mi></msubsup></mrow></math>). Beti aurki daiteke <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri bat, non <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math>); orduan matrizea <strong>diagonala</strong> da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Matrize elkartua R³-n",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>b</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarrian <math display=\"block\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Aurkitu <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarria non <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mo>∀</mo><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math>)."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Errenkada-bektorea <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math>-ekin biderkatuz: <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math> (<math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> diagonalizatzailea hurrengo orrian eraikitzen da.)"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/6 (12-13 orriak). Teoria osoa <strong>zuzena</strong> da: polarizazio-formula (0006 orrian ireki gelditu zena hemen ixten da), matrize elkartuaren simetria (<math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi>G</mi><mn>1</mn><mi>T</mi></msubsup></mrow></math>), eta <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ko adibidearen <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub></mrow></math> biderkadura argazkiarekin bat dator zehatz. <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math> simetrikoa da, aurreko teoriarekin koherentea. Ez da laburpenik egin. Ikus <code>a1_0007_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p008_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 1,
   "izenburua": "Forma bilineal baten diagonalizazioa: b-oinarri ortogonala eta Sylvester (hasiera)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal simetriko baten oinarri diagonalizatzailea nola eraiki (b-ortogonala, ez-isotropoa), <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ko adibidea osorik, eta Sylvester-en teoremaren hasiera."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Oinarri diagonala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> diagonalizatzailean matrizea diagonala da eta biderkadura gai gurutzatuik gabe idazten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>d</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>d</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>d</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mn>1</mn></msub><msub><mi>d</mi><mn>1</mn></msub><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mn>2</mn></msub><msub><mi>d</mi><mn>2</mn></msub><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mn>3</mn></msub><msub><mi>d</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Nola aurkitu <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>?",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Prozedura (b-ortogonalizazioa)",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Hartu <math display=\"inline\"><mi>E</mi></math>-ko bektore <strong>ez-isotropo</strong> bat.",
        "Aukeratu hurrengoa aurrekoekin <strong>b-ortogonala</strong> eta, ahal bada, ez-isotropoa (aurrekoen osagarri ortogonala ebatziz)."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea jarraituz</strong> (<math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>):"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1) <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math>:</strong> <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> (ez-isotropoa)."
      },
      {
       "mota": "testua",
       "html": "<strong>2) <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></math>:</strong> <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> b-ortogonalak; <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math> (ez-isotropoa). Beraz <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>3) <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math>:</strong> <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></math>-rekiko ortogonala. Osagarri ortogonala: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>:</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ebazpena: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mi>−</mi><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, eta <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitza:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msubsup><mi>a</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>a</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>a</mi><mn>3</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hiru koefizienteak positiboak direnez, forma <strong>definitu positiboa</strong> da: <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇔</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Sylvester (hasiera)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <math display=\"inline\"><mi>E</mi></math>-ren oinarria (<math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> gaineko espazio bektoriala), <math display=\"inline\"><mi>b</mi></math> forma bilineal simetrikoa non <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math> <strong>(...hurrengo orrian jarraitzen du.)</strong>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/6 (14-15 orriak). Adibide osoa <strong>zuzena</strong> da: <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math> ez-isotropoak (<math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math>-en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> b-ortogonalitatea, osagarri ortogonaletik <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mn>2</mn><mo>−</mo><mn>4</mn><mo>+</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta forma definitu positiboa dira ondorio koherenteak. Sylvester-en enuntziatua orri honetan eten egiten da (hurrengoan jarraitzen du). Ez da laburpenik egin. Ikus <code>a1_0008_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p009_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Sylvester-en teorema (inertziaren legea) eta sinadura",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oinarri diagonala normalizatuz, forma bilineal simetriko baten matrizea <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mn>0</mn></math> balioetara ekartzen da: Sylvester-en <strong>inertziaren legea</strong> eta <strong>sinadura</strong>. <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ko adibidea ere ixten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarri diagonaletik sinaduraraino"
    },
    {
     "mota": "testua",
     "html": "Oinarri diagonalean, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>x</mi><mi>i</mi></msub><msub><mi>y</mi><mi>i</mi></msub></mrow></math>. Diagonaleko balioen zeinuaren arabera sailkatzen dira oinarri-bektoreak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (positiboak) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (negatiboak) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mi>r</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (nuluak) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Oinarri berria</strong> <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, normalizatuz:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Normalizazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>s</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>r</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mi>−</mi><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Egiaztapena (bilinealtasunez eskalarra karratura ateratzen da):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mo>,</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mi>+</mi><mn>1</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>−</mi><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Sylvester-en inertziaren legea eta sinadura",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Forma bilineal simetriko baten matrizea oinarri egoki batean <strong>diagonal kanonikoa</strong> da, <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math> (<math display=\"inline\"><mi>p</mi></math> aldiz), <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (<math display=\"inline\"><mi>q</mi></math> aldiz) eta <math display=\"inline\"><mn>0</mn></math> balioekin. <math display=\"inline\"><mi>p</mi></math> eta <math display=\"inline\"><mi>q</mi></math> kopuruak <strong>oinarriarekiko independenteak</strong> dira: <math display=\"inline\"><mi>b</mi></math>-ren <strong>sinadura</strong> <math display=\"inline\"><mrow><msub><mi>σ</mi><mi>b</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (<math display=\"inline\"><mi>p</mi></math> = <math display=\"inline\"><mn>1</mn></math>-en kopurua, <math display=\"inline\"><mi>q</mi></math> = <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>-en kopurua)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidearen itxiera (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "testua",
     "html": "Aurreko adibidean <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn></mrow></math> (hirurak positiboak). Normalizatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msqrt><mn>1</mn></msqrt></mfrac><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>G</mi><mo>″</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>I</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><msubsup><mi>y</mi><mn>2</mn><mo>′</mo></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup><msubsup><mi>y</mi><mn>3</mn><mo>′</mo></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>σ</mi><mi>b</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Forma <strong>definitu positiboa</strong> da (sinadura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, biderkadura eskalar arrunt bat bezala)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/6 (16-17 orriak). Sylvester-en deribazioa <strong>zuzena</strong> da: normalizazioak <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>+</mi><mn>1</mn><mi>/</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>0</mn></mrow></math> ematen ditu, eskalarra karratura ateratzen delako. Adibidearen itxiera zuzena: hiru balio positiboek <math display=\"inline\"><mrow><msup><mi>G</mi><mo>″</mo></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> eta sinadura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dakartzate (definitu positiboa). Egileak jatorrizkoan <math display=\"inline\"><mfrac><mo>+</mo><mo>−</mo></mfrac></math> zirkulatuak erabiltzen ditu zeinua adierazteko; sinadura zenbakiz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> orri horretan ez du esplizituki idazten. Ez da laburpenik egin. Ikus <code>a1_0009_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p010_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Forma bilineal degeneratu baten diagonalizazioa R⁴-n (sinadura (2,0))",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal simetriko <strong>degeneratu</strong> bat diagonalizatzen da <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-n: oinarri b-ortogonala eraiki, bektore isotropoak identifikatu eta sinadura kalkulatu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enuntziatua"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Forma bilineala R⁴-n",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> bilineala, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarrian <math display=\"block\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi>G</mi><mn>1</mn><mi>T</mi></msubsup></mrow></math> denez, <math display=\"inline\"><mi>f</mi></math> <strong>simetrikoa</strong> da. Aurkitu <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarria non <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math>), eta kalkulatu sinadura."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lehen bi bektoreak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> direnez (matrizearen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sarrerak), har daitezke: <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> delako</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Osagarri ortogonala eta bektore isotropoak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup></mrow></math> bilatzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ebazpena (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Familia horretako bektore <strong>guztiak isotropoak</strong> dira (radikalean daude, <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>). Aukeratuz: <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Egiaztapena: <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, beraz <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza eta sinadura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> matrizea </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi>B</mi><mo>′</mo></msup><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Sig</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>=</mo><mn>2</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> positibo</mtext></mrow><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>q</mi><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> negatibo</mtext></mrow><mo>,</mo><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Forma <strong>degeneratua</strong> da (bi balio nulu; erradikala <math display=\"inline\"><mn>2</mn></math> dimentsiokoa)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/6-7 (18-19 orriak). ⚠ <strong>Matrizearen berreraiketa (argazkia + barne-koherentzia):</strong> a1_0010 txostenak <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math>-en behe-eskuineko sarrerak irakurtezin/oker jaso zituen (hirugarren errenkadaren azken sarrera eta laugarren errenkada). Argazkiak eta koadernoaren beraren datuek matrize hau finkatzen dute: <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Lau egiaztapenek berresten dute: (1) simetrikoa da; (2) <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (18. orriak dioena); (3) bigarren baldintza <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> da (19. orriak dioena, <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub></math>-ren zutabea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delako); (4) heina <math display=\"inline\"><mn>2</mn></math> da (<math display=\"inline\"><mrow><mn>3</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mo>=</mo><mn>2</mn><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi></mrow></math>), sinadura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta bi balio nuluekin bat. Aukeratutako <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> isotropoak dira (<math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>): egilearen emaitzarekin zehatz bat. Jatorrizkoan multzo-adierazpenean azken koordenatuan <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> agertzen da (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math> izan behar duena); zeinu-labaindura hori hemen zuzendua, baina hautatutako bektoreak eta emaitza aldatu gabe. Tarteko isotropia-lerroa jatorrizkoan oso trinkoa da; hemen <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>-z ordezkatu da, garbiago. Ez da laburpenik egin. Ikus <code>a1_0010_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p011_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Adibide osoa: sinatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — forma bilineal indefinitua baina ez-degeneratua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal simetriko baten <strong>diagonalizazio osoa</strong>, sinatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ekin: oinarri ortogonala Gram-Schmidt bilinealez, forma diagonala, eta Sylvester-en normalizazioa (<math display=\"inline\"><mrow><mi>+</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>). Kasu <strong>indefinitua baina ez-degeneratua</strong> (aurreko adibideak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ziren)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea eta oinarri ortogonala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> simetrikoa. <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></math> <strong>isotropoa</strong> da (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>), beraz <strong>ez</strong> du balio hasieran. Algoritmoa (Gram-Schmidt bilineala):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math> ez-isotropoa (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>).",
      "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>3</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (planoa <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n).",
      "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ortogonalean, ez-isotropoa (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>)."
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Lehen bektorea <strong>ez-isotropoa</strong> izan behar da (normalizatzeko); produktu eskalar euklidearrean, definitu\n  positiboa, hori ez da beharrezkoa.\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarri ortogonala eta matrize diagonala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aurkituta, <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ortogonalean forma <strong>diagonala</strong> da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ortonormalizazioa eta signatura"
    },
    {
     "mota": "testua",
     "html": "Bektore bakoitza bere «normaren» balio absolutuaren erroaz zatituz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>: bi positibo, bat negatibo. Ez dago zerorik → forma <strong>ez-degeneratua</strong> (heina <math display=\"inline\"><mn>3</mn></math>), baina <strong>ez-definitua</strong> (bi zeinu)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta jatorria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Adibidea NEWTON2 koadernotik dator (<code>NEWTON2_0053</code>/<code>0054</code>, 104–107 orriak; &quot;ÁLGEBRA NEWTON&quot;): forma simetriko baten Gram-Schmidt bilineala, forma diagonala <math display=\"inline\"><mrow><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta Sylvester-en normalizazioa <math display=\"inline\"><mrow><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, sinatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>2026-08-26ko berrantolaketan</strong> <code>diagonalizazioa</code>-tik ekarria: han teoria bikoiztuaren barruan zegoen; hemen gordetzen da sinatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kasu landu bakarra delako. Zuzenketarik ez."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Forma bilineal baten matrizearen oinarri-aldaketa (azterketa-ariketa)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal simetriko baten matrizea oinarri batetik (<math display=\"inline\"><mi>B</mi></math>) <strong>oinarri kanonikora</strong> eramaten da; horrekin forma osoa <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n idazten da."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Enuntziatua (Udazkena 2012)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Azterketa-ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math> forma bilineal simetrikoa <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarrian <math display=\"block\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Kalkulatu <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> (oinarri kanonikoa erabiliz).",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea <math display=\"inline\"><mi>f</mi></math>-ri elkartua egon daiteke? Baietz bada, aurkitu <math display=\"inline\"><mi>B</mi></math> oinarri bat."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "1) Matrizea oinarri kanonikoan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> non <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>. Alderantziz, oinarri kanonikoa <math display=\"inline\"><mi>B</mi></math>-ren menpe:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>−</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Matrize kanonikoaren sarrerak <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup></mrow></math>:"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>12</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>5</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>12</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>8</mn><mo>,</mo><mn>7</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>15</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>8</mn><mo>,</mo><mn>7</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>8</mn><mo>+</mo><mn>7</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>13</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>7</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>18</mn><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>15</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Matrizea <strong>simetrikoa</strong> da, forma bilineal simetriko baten oinarri-aldaketari dagokion bezala. 2) atala orri honetan planteatzen da, baina ez da ebazten <strong>(hurrengo orrian jarraitzen du).</strong>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/7 (20-21 orriak), Udazkena 2012 azterketa. Kalkulu guztiak <strong>zuzenak</strong> dira: <math display=\"inline\"><mrow><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> errenkadak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>8</mn><mo>,</mo><mn>7</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>7</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta emaitzak <math display=\"inline\"><mrow><mn>12</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>12</mn><mo>,</mo><mn>15</mn><mo>,</mo><mn>13</mn><mo>,</mo><mn>18</mn></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren tarteko urratsa argazkian zalantzazkoa da (badirudi &quot;15&quot; jar dezakeela), baina balio zuzena <strong>13</strong> da (<math display=\"inline\"><mrow><mn>8</mn><mo>+</mo><mn>7</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>13</mn></mrow></math>) eta amaierako matrizeak <math display=\"inline\"><mn>13</mn></math> dakar argi: ez da egilearen akatsa, irakurketa-zalantza baizik. Eskuineko orriaren data koadernaketaren orbanak estaltzen du. Ez da laburpenik egin. Ikus <code>a1_0011_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p012_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Sinadura aldaezina eta forma bilinealen sailkapena (Sylvester)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko azterketa-ariketaren itxiera (sinadura oinarri-aldaketapean aldaezina delako, <math display=\"inline\"><mi>A</mi></math> matrizea ezin da <math display=\"inline\"><mi>f</mi></math>-rena izan), eta forma bilineal simetrikoen sailkapen osoa sinaduraren arabera."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1) atalaren emaitza"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>15</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> erabiliz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>12</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>5</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>12</mn><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>15</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>13</mn><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>12</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>13</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>18</mn><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2) atala: A ezin da f-ren matrizea izan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> diagonalizatuz. <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>. Hirugarrena osagarri ortogonaletik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>5</mn><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>7</mn><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>7</mn></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>35</mn></mrow></math> hartuz, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>35</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>14</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><mn>10</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>. Diagonaleko balioak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>5</mn><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>7</mn><mo>&gt;</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>35</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>35</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>162</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>35</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>5670</mn><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hiru balio positibo, beraz <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Baina <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>A</mi></math>-k bi positibo eta bat negatibo). Sinadura <strong>aldaezina</strong> denez oinarri-aldaketapean:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Sig</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Sig</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>∄</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> oinarririk </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mrow><mtext mathvariant=\"normal\">-n non </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>M</mi><mrow><mtext mathvariant=\"normal\">ort</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>A</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teoria: sailkapena sinaduraren arabera"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mi>f</mi></math> forma bilineal simetrikoa <math display=\"inline\"><mi>E</mi></math> (<math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> gaineko espazio bektoriala, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi><mo>=</mo><mi>n</mi></mrow></math>) gainean, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Forma bilineal simetrikoen sailkapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "I) <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>q</mi><mo>=</mo><mi>n</mi><mo>⇒</mo></mrow></math> <strong>ez-degeneratua</strong>; <math display=\"inline\"><mspace width=\"1.0em\"></mspace></math> II) <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>q</mi><mo>&lt;</mo><mi>n</mi><mo>⇒</mo></mrow></math> <strong>degeneratua</strong>.",
        "III) <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>n</mi></mrow></math>: forma kanonikoa <math display=\"inline\"><mrow><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>, <strong>definitu positiboa</strong> (<math display=\"inline\"><mi>⊕</mi></math>).",
        "IV) <math display=\"inline\"><mrow><mi>p</mi><mo>&lt;</mo><mi>n</mi></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mn>0</mn></mrow></math>: <strong>erdi-definitu positiboa</strong> (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>).",
        "V) <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>&lt;</mo><mi>n</mi></mrow></math>: <strong>erdi-definitu negatiboa</strong> (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>).",
        "VI) <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>n</mi></mrow></math>: forma kanonikoa <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><msub><mi>I</mi><mi>n</mi></msub></mrow></math>, <strong>definitu negatiboa</strong> (<math display=\"inline\"><mi>⊖</mi></math>).",
        "VII) <math display=\"inline\"><mrow><mi>p</mi><mo>≠</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>≠</mo><mn>0</mn></mrow></math>: <strong>indefinitua</strong> (positibo eta negatiboak)."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Forma kanonikoa beti da <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mn>0</mn></math> balioekin osatutako matrize diagonala (identitatearen zeinudun aldaera bat)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/7 (22-23 orriak). Ondorioa <strong>zuzena</strong> da: sinadura Sylvester-en aldaezina denez, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Sig</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izateak <math display=\"inline\"><mi>A</mi></math> ezin dela <math display=\"inline\"><mi>f</mi></math>-ren matrizea izan frogatzen du. Zehaztapenak (aipamenarekin): (1) 1) ataleko soluzio-lerroan jatorrizkoak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>/<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> posizioetan &quot;<math display=\"inline\"><mn>3</mn></math>&quot; jar dezakeela dirudi, baina matrizeak <math display=\"inline\"><mn>5</mn></math> dakar argi (<math display=\"inline\"><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub></math>-ren sarrera); <math display=\"inline\"><mn>5</mn></math> erabili da. (2) <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren balio zehatza argazkian irakurtezina da (egileak <math display=\"inline\"><mi>⊕</mi></math>-z markatu zuen, positiboa); hemen kalkulatua: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>35</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>M</mi><mi>B</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>162</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><mrow><mn>5670</mn><mo>&gt;</mo><mn>0</mn></mrow></math>. Sailkapen-koadroa (I–VII) Sylvester-en sailkapen estandarra da, ondo enuntziatua. Ez da laburpenik egin. Ikus <code>a1_0012_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p013_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Forma bilineal parametriko baten degenerazioa eta oinarri f-ortogonala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Parametro bat duen forma bilineal simetriko baten degenerazioa aztertzen da (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>), eta <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> kasurako oinarri f-ortogonala eta sinadura kalkulatzen dira. Amaieran <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> ariketa hasten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enuntziatua"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Matrize parametrikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da <math display=\"inline\"><mi>f</mi></math> forma bilineal simetrikoaren matrizea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n, oinarri kanonikoan."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aurkitu <math display=\"inline\"><mrow><mi>a</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> balioak, zeinetarako <math display=\"inline\"><mi>f</mi></math> <strong>degeneratua</strong> den.",
        "<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> kasuan, aurkitu oinarri f-ortogonala eta <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1) Degenerazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> degeneratua da <math display=\"inline\"><mrow><mo>⇔</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Zutabe/errenkada eragiketen ondoren faktorizatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erroak: <math display=\"inline\"><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mi>a</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><mn>3</mn></mrow><mn>4</mn></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, eta lehen faktoretik <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>. Beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> degeneratua da </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><mi>a</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ez-degeneratua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><mi>a</mi><mo>∉</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2) <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>: oinarri f-ortogonala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> denean <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">heina</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (isotropoak), baina <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aukeratuz <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> (ez-isotropoa)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⇒</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oinarri f-ortogonala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math>, balioak <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Sig</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> degeneratua</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hurrengo ariketaren hasiera (<math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> forma bilineal simetrikoa, <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Aurkitu, existitzen bada, <math display=\"inline\"><mrow><mi>P</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> non <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> <strong>(hurrengo orrian jarraitzen du).</strong>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/7 (24-25 orriak). ⚠ <strong>Zuzenketa (aipamenarekin):</strong> jatorrizkoak &quot;<math display=\"inline\"><mi>f</mi></math> ez-degeneratua <math display=\"inline\"><mrow><mi>a</mi><mo>∉</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>&quot; idazten du, baina <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> <strong>falta da</strong>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> delako, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>-ek ere <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> egiten du (egileak berak aurkitu zuen <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> faktorizazioan, eta 2) atalean erabili zuen). Multzo osoa <math display=\"inline\"><mrow><mi>a</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> da. Gainerako kalkuluak zuzenak: <math display=\"inline\"><mi mathvariant=\"normal\">det</mi></math>-en erroak (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>4</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, jatorrizkoak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du, emaitza bera); <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>-en <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> isotropoa, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, heina <math display=\"inline\"><mn>2</mn></math>. Jatorrizkoan hasierako esaldia (&quot;degeneratua ... heina 3 izaten jarraitzen badu&quot;) nahasia da, egileak berak zuzendua ondorioan. Azken ariketako <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub></math> soberan) lapsus bat da, matrizea <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> baita. Ez da laburpenik egin. Ikus <code>a1_0013_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p014_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Forma bilineal parametrikoa: degenerazioa eta oinarri ortogonala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal bat <strong>bi parametrorekin</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi></mrow></math>): bere matrizea, <strong>noiz den ez-degeneratua</strong>, eta oinarri ortogonala isotropia zainduz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrizea eta degenerazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren koefizienteetatik matrizea (<strong>ez simetrikoa</strong>, forma bilineal orokorra), eta determinantea:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>μ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>M</mi><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>μ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>M</mi><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>μ</mi><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">ez-degeneratua</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Determinantea, heina eta degenerazioa <strong>lotuta</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>: oinarri ortogonala eta isotropia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-rekin, <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math> <strong>isotropoa</strong> da (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>), beraz <strong>ezin da lehen hartu</strong> (ezin normalizatu):"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Isotropiaren <strong>ondorio praktikoa</strong> (<code>0053</code>n aipatua, orain aplikatua): <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> hartzen\n  da (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>), gero <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>), etab.\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hurrengo gaiaren iragarpena"
    },
    {
     "mota": "testua",
     "html": "Goian, gorriz: «<strong>cónicas y cuádricas</strong>». Koadernoak forma koadratiko <strong>abstraktuetatik</strong> geometriara egingo du salto —konikak eta kuadrikak forma koadratikoak dira, eta <strong>signaturaz</strong> sailkatzen dira—."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0063</code>, 124-125 orriak; &quot;ÁLGEBRA NEWTON&quot;). Forma bilineal <strong>parametrikoa</strong>: matrizea (ez simetrikoa), <strong>degenerazioa</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>M</mi><mo>≠</mo><mn>0</mn><mo>⇔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>n</mi><mo>⇔</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>μ</mi><mo>≠</mo><mn>0</mn></mrow></math>), eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>-rekin <strong>oinarri ortogonala</strong> isotropia zainduz (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math> isotropoa → <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>). ⚠ Determinantea (<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>μ</mi></mrow></math>) matrizearen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sarrera irakurketa-seguru ez baten menpe dago (ikus edizio kritikoa). <strong>Hurrengo gaia iragartzen du</strong>: konikak eta kuadrikak. ⚠ Erregistroak <code>calculo</code> dio; edukia aljebra da. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p124.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Kongruentzia eta <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> irizpidea; 4×4 matrizeen zerrenda",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal baten matrizearen oinarri-aldaketa <strong>kongruentzia</strong>-transformazioa da; horrek <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> noiz duen soluzioa erabakitzen du (matrize definitu positiboak). Ondoren <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrizeen zerrenda (Proskuriakov 257–262, ebatzi gabe)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarri-aldaketa: kongruentzia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>B</mi></math> oinarrian <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri kanonikoan <math display=\"inline\"><mrow><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi></mrow></math> (forma kanonikoa). Oinarri-aldaketa <math display=\"inline\"><mrow><mi>Q</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>Q</mi><mi>T</mi></msup><mi>A</mi><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>2</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>3</mn><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><msup><mi>Q</mi><mi>T</mi></msup><mi>A</mi><mi>Q</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">kongruentzia</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortik <math display=\"inline\"><mi>A</mi></math> askatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mi>T</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>S</mi><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mi>S</mi><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> irizpidea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup></mrow></math> eginez, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>P</mi><mi>S</mi><msup><mi>P</mi><mi>T</mi></msup></mrow></math>. Beraz <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> <strong>soluzioa du soilik</strong> <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math> denean, hau da, <math display=\"inline\"><mi>f</mi></math> <strong>definitu positiboa</strong> denean:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∃</mo><mi>P</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> definitu positiboa </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Cholesky-ren faktorizazioa: <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup></mrow></math> formako matrize oro simetriko eta definitu positiboa da; <math display=\"inline\"><mi>A</mi></math> ez bada definitu positiboa, ez dago halako <math display=\"inline\"><mi>P</mi></math>-rik.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zerrenda: 4×4 matrizeak (Proskuriakov 257–262)"
    },
    {
     "mota": "testua",
     "html": "Enuntziaturik gabe agertzen dira orrian (ziurrenik determinanteak; <strong>ebatzi gabe</strong>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>257</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>258</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>259</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>260</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>261</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>262</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/7 (26-27 orriak). Ezkerreko orriko deribazioa <strong>zuzena</strong> da: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msup><mi>Q</mi><mi>T</mi></msup><mi>A</mi><mi>Q</mi></mrow></math> kongruentziatik <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mi>S</mi><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, eta <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> soluzioa <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math> (definitu positiboa) denean bakarrik (Cholesky/kongruentzia). Eskuineko orrian <math display=\"inline\"><mn>257</mn></math>–<math display=\"inline\"><mn>262</mn></math> <strong>enuntziaturik gabe</strong> daude: ez da idatzi zer eskatzen den (ziurrenik determinanteak, Proskuriakov-en serieari jarraituz), eta <strong>ebatzi gabe</strong> daude; ez da asmatu ez enuntziaturik ez emaitzarik. clasificacion.csv-k &quot;irakurgarritasun ertaina&quot; abisatzen du orri honetarako; zifra batzuk (259 2.err., 260 3.err., 262 3.err.) trazu finekoak dira, baina irakurketa probableena jaso da. Ez da laburpenik egin. Ikus <code>a1_0014_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p015_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Determinanteen zerrenda (Proskuriakov 263–273, ebatzi gabe)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> determinanteen zerrenda, enuntziaturik eta garapenik gabe jatorrizkoan (0014 orriko <math display=\"inline\"><mn>257</mn></math>–<math display=\"inline\"><mn>262</mn></math> zerrendaren jarraipena). <strong>Ebatzi gabe</strong> transkribatzen dira, ezer asmatu gabe."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>263</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>264</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>265</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>266</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>267</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>268</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>269</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>272</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>35</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>59</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>71</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>42</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>70</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>77</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>54</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>43</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>68</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>72</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>29</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>49</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>65</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>50</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>273</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>44</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>40</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>55</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>20</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>64</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>21</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>40</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>20</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>24</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>46</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>45</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>55</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>84</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> determinanteak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>270</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>21</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>271</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "&quot;ALJEBRA&quot;, 28-29 orriak. Orri osoa <strong>matrizeen zerrenda</strong> da, enuntziaturik gabe (<math display=\"inline\"><mn>257</mn></math>–<math display=\"inline\"><mn>262</mn></math> zerrendaren jarraipena, ziurrenik determinanteak Proskuriakov-en seriean); <strong>ebatzi gabe</strong> dago, ez dago kalkulurik. Ez da enuntziaturik ez emaitzarik asmatu. <math display=\"inline\"><mn>270</mn></math> eta <math display=\"inline\"><mn>271</mn></math> <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> dira. clasificacion.csv-k &quot;irakurgarritasun ertaina&quot; abisatzen du; trazu-zalantza batzuk (264 2.err. hasiera, 266 <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, 268 azken errenkada) daude, baina irakurketa probableena jaso da, zifrarik asmatu gabe. Ez da laburpenik egin. Ikus <code>a1_0015_algebra_primero_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p016_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 1,
   "izenburua": "Determinanteen zerrenda (amaiera) eta aplikazio lineal baten matrizea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Determinante-zerrendaren amaiera (<math display=\"inline\"><mn>274</mn></math>–<math display=\"inline\"><mn>278</mn></math>, zatikiekin eta erroekin, ebatzi gabe) eta aplikazio lineal baten ariketa garrantzitsua (LANDETA): irudi batzuetatik matrize elkartua eta automorfismo-izaera."
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Determinanteak <math display=\"inline\"><mn>274</mn></math>–<math display=\"inline\"><mn>278</mn></math> (ebatzi gabe)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>274</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>24</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>17</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>19</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>51</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>32</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>40</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>46</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>61</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>19</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>50</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>59</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>62</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>15</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>80</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>45</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>70</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>275</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>4</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>8</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>4</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>3</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>4</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>276</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>21</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>15</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>4</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>4</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mn>7</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>7</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>7</mn></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>277</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>4</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>6</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>4</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>4</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>14</mn><mn>3</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>4</mn><mn>3</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>12</mn><mn>5</mn></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>278</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>5</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>6</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>21</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>10</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>10</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msqrt><mn>15</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>6</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msqrt><mn>6</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>10</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>15</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math>"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Ariketa garrantzitsua (LANDETA, 2013/2/11)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Aplikazio linealaren matrizea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> aplikazio lineala, honela definitua: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Kalkulatu <math display=\"inline\"><mi>f</mi></math>-ren matrize elkartua <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren oinarri kanonikoan.",
        "Injektibitatea/supraiektibitatea <strong>zuzenean probatu gabe</strong>, <math display=\"inline\"><mi>f</mi></math> automorfismoa den ondorioztatu daiteke?"
       ]
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Aurretik: sarrera-bektoreak oinarria dira?</strong> Aplikazio lineal bat definitzeko irteera-espazioaren oinarri bat behar da. Egiaztatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> linealki independenteak diren: <math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>λ</mi><mo>−</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>3</mn><mi>δ</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mn>2</mn><mi>δ</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Lehen bi ekuazioak batuz <math display=\"inline\"><mrow><mi>−</mi><mi>μ</mi><mo>+</mo><mn>5</mn><mi>δ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>μ</mi><mo>=</mo><mn>5</mn><mi>δ</mi></mrow></math>; ordezkatuz soluzio bakarra tribiala da. Baliokidea: matrizearen determinantea <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>17</mn><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> beraz hiru bektoreak <strong>linealki independenteak</strong> dira eta <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren oinarria osatzen dute. (Matrizearen kalkulua eta 2) atala hurrengo orrian jarraitzen dira.)"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ezkerreko orria (30) determinante-zerrendaren amaiera da (<math display=\"inline\"><mn>274</mn></math>–<math display=\"inline\"><mn>278</mn></math>, zatiki eta erroekin), <strong>ebatzi gabe</strong>; zatikiak jatorrizko forman utzi dira (ez sinplifikatu). Eskuineko orriak (31) &quot;ÁLGEBRA LANDETA, 2013/2/11&quot; goiburua darama —ariketaren iturria LANDETA da—; hemen jaso da goiburua bere horretan. Base-egiaztapena <strong>zuzena</strong> da: sistemak soluzio tribiala baino ez du (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>17</mn><mo>≠</mo><mn>0</mn></mrow></math>, egilearen <math display=\"inline\"><mrow><mi>−</mi><mn>17</mn><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math> urratsarekin bat); hiru bektoreak oinarria dira. Egilearen tarteko lerroa (&quot;<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn><mi>δ</mi><mi>/</mi><mn>2</mn></mrow></math>&quot;) argazkian osorik ez da irakurtzen, baina ondorioa (linealki independenteak) zuzena da. ⚠ <strong>Irakurketa-zuzenketa:</strong> lehen irudia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (ez <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): argazkian zifra <math display=\"inline\"><mn>16</mn></math> da argi, eta 0017 orriko matrizeak eta formulak berresten dute (<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi></mrow></math>-k <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mn>16</mn></mrow></math> ematen du). a1_0016 txostenak <math display=\"inline\"><mn>10</mn></math> jarri zuen. Ez da laburpenik egin. Ikus <code>a1_0016_algebra_primero_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p017_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Aplikazio linealaren matrizea eta automorfismo-izaera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko ariketaren itxiera: bektore generikoa oinarrian idatzi, <math display=\"inline\"><mi>f</mi></math>-ren adierazpen esplizitua eta matrize elkartua lortu, eta automorfismoa den erabaki. Amaieran <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> ariketa berria hasten da (nukleoa eta irudia emanda)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bektore generikoa oinarrian"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> askatuz (izendatzailea <math display=\"inline\"><mn>17</mn></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi></mrow><mn>17</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>7</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi></mrow><mn>17</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mrow><mn>17</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Linealtasunez, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Osagaiak batuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize elkartua eta automorfismo-izaera"
    },
    {
     "mota": "testua",
     "html": "Zutabe bakoitza <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da (oinarri kanonikoan):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(ii) Automorfismoa da?</strong> Injektibitatea/supraiektibitatea zuzenean probatu gabe, matrizearen <strong>heina</strong> aztertzen da. Ohartu <math display=\"inline\"><mrow><mn>3</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mi>e</mi><mi>n</mi><mi>k</mi><mi>a</mi><mi>d</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mo>=</mo><mn>2</mn><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi></mrow></math> (<math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), beraz errenkadak <strong>menpekoak</strong> dira: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mn>3</mn><mi>.</mi></mrow></math> Ondorioz <math display=\"inline\"><mi>f</mi></math> <strong>ez da automorfismoa</strong> (ez injektiboa, ez supraiektiboa): irudiaren dimentsioa <math display=\"inline\"><mn>2</mn></math> da, ez <math display=\"inline\"><mn>3</mn></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ebaluazio-adibidea:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>0</mn><mo>−</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>7</mn><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa berria: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> (nukleoa eta irudia emanda)"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "f zehaztu nukleotik eta irudititik (2013/2/18)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu, posible bada, <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> lineala: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>-k <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n bizi da, baina <math display=\"inline\"><mn>2</mn></math> dimentsio baino ez ditu.) <strong>(Hurrengo orrian ebazten da.)</strong>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "LANDETA, 2013/2/11 (32-33 orriak). Emaitza nagusiak <strong>zuzenak</strong> dira eta argazkiarekin bat: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; hiru datu-pareek berresten dute (lehen irudia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ikus 0016 orriko zuzenketa). ⚠ <strong>Zehaztapenak (aipamenarekin):</strong> (1) jatorrizkoak <math display=\"inline\"><mi>λ</mi></math> kutxan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>17</mn></mrow></math> idazten du, baina zeinu zuzena <math display=\"inline\"><mrow><mi>+</mi><mn>7</mn><mi>z</mi></mrow></math> da (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>17</mn></mrow></math>); egileak berak <math display=\"inline\"><mrow><mi>+</mi><mn>119</mn><mi>z</mi></mrow></math> (hots, <math display=\"inline\"><mrow><mi>+</mi><mn>7</mn><mi>z</mi></mrow></math>) erabili zuen azken ordezkapenean, beraz kutxako <math display=\"inline\"><mrow><mi>−</mi><mn>7</mn><mi>z</mi></mrow></math> idazketa-akatsa da. (2) <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren emaitza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da; jatorrizkoak &quot;<math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn></mrow></math>&quot; idatzi zuen, hori <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baita (lehen zutabea) — etiketa-labaindura. (3) egileak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>M</mi><mo>=</mo><mn>0</mn></mrow></math> ez du esplizituki idazten, baina heina <math display=\"inline\"><mn>2</mn></math> da eta <math display=\"inline\"><mi>f</mi></math> <strong>ez da automorfismoa</strong> (irudia <math display=\"inline\"><mn>2</mn></math> dimentsiokoa). Ez da laburpenik egin. Ikus <code>a1_0017_algebra_primero_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p018_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Matrizeen biderkadurak (Proskuriakov 788–794)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Zazpi matrize-biderkadura, enuntziatu gisa jatorrizkoan (<strong>ebatzi gabe</strong>). Emaitzak <strong>hemen kalkulatu dira</strong> (jatorrizkoan ez daude idatzita) irakurgai gisa, argi markatuta."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enuntziatuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>788</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>789</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>β</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>γ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>794</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>790</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>791</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>792</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>793</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitzak (hemen kalkulatuak, jatorrizkoan ez daude)"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>788</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mn>789</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>α</mi><mo>+</mo><mi>b</mi><mi>γ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>β</mi><mo>+</mo><mi>b</mi><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><mi>α</mi><mo>+</mo><mi>d</mi><mi>γ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><mi>β</mi><mo>+</mo><mi>d</mi><mi>δ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mn>794</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>790</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mn>791</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>22</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>29</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>32</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>17</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>792</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>17</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>19</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>23</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>17</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>23</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>35</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>20</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mn>793</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "&quot;MATRICES Y FORMAS CUADRÁTICAS&quot;, 35. orria (2013/2/18), Proskuriakov 788–794. Argazkia orri bikoitza da: ezkerreko orria (34) <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> ariketaren jarraipena da (nukleoa/irudia; a1_0018i, beste unitate batekoa) eta ez da hemen sartzen. Eskuineko orrian (35) biderkadurak <strong>enuntziatu gisa</strong> daude, <strong>ebatzi gabe</strong>: jatorrizkoak ez du emaitzarik idazten. Emaitzak <strong>hemen kalkulatu dira</strong> (ez asmatu: matrize-biderkadura determinista da) eta banan-banan egiaztatu; argi markatu dira jatorrizkoan ez daudela. Ez da laburpenik egin. Ikus <code>a1_0018d_matrices_algebra_primero.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p019_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a30",
   "maila": 1,
   "izenburua": "Biderkadura eskalarretik norma euklidearrera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal simetriko definitu positibo bat <strong>biderkadura eskalar</strong> gisa hartuta, <strong>norma euklidearra</strong> definitzen da; horrek espazio euklidearra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eratzen du. Normaren axiomak, beste norma batzuk, angelua eta adierazpen matriziala."
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Biderkadura eskalarra eta norma euklidearra",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Biderkadura eskalarra eta norma euklidearra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Biderkadura eskalarra</strong> <math display=\"inline\"><mi>E</mi></math> (<math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> gaineko espazio bektoriala) gaineko forma bilineal simetriko <strong>definitu positiboa</strong> da. <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>) denez, <strong>norma euklidearra</strong> honela definitzen da: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><msqrt><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">bektoreak neurtzeko modu bat</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beste norma batzuk ere badaude; adibidez, funtzio jarraituen espazioan (<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>g</mi><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> jarraituak</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>), <strong>goreneko norma</strong>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><munder><mi mathvariant=\"normal\">max</mi><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Normaren axiomak",
   "blokeak": [
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>≥</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>0</mn><mo>⇔</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>≤</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">triangeluarra</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bikoteari <strong>espazio euklidearra</strong> deritzo (<math display=\"inline\"><mi>f</mi></math> = biderkadura eskalarra)."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Angelua eta adierazpen matriziala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> eta <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></math> bektoreek osatzen duten angelua <math display=\"inline\"><mi>θ</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarrian, <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> direla, forma bilineala matrizialki (Gram-en matrizea):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mspace width=\"0.222em\"></mspace><mi>…</mi><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/13 (37. orria). Deribazio-katea <strong>koherentea</strong> da: forma bilineal simetriko definitu positibotik norma euklidearra, hiru axiomekin, espazio euklidearra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, angelua eta adierazpen matriziala (Gram) — eraikuntza estandarra. Gai hau <strong>0001-0002 orriekiko afina</strong> da (espazio euklidearra, norma, angelua; ikus <code>koadernoa_algebra2013_alg_p001_mk</code> eta"
      },
      {
       "mota": "testua",
       "html": "<code>...p002_mk</code>"
      },
      {
       "mota": "testua",
       "html": "), baina ez da orri bera: data desberdina (2013/2/13 vs 2013/1/29), NEWTON goiburua, eta ikuspegi formalagoa (norma forma bilineal definitu positibotik abiatuta, forma bilinealen arkoa —0006-0012— geometria euklidearrarekin lotuz). Beraz osorik transkribatu da, ez baztertu, bigarren azalpen independente gisa. Argazkiaren ezkerreko orria (36) matrize-biderkaduren jarraipena da (795–798, a1_0019i, beste unitate batekoa). Ez da laburpenik egin. Ikus <code>a1_0019d_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p020_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Oinarri ortonormalak eta Gram–Schmidt-en algoritmoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Biderkadura eskalar definitu positibo batek oinarri ortonormala onartzen du; Gram–Schmidt-en algoritmoak eraikitzen du. Adibide osoa funtzio-espazio batean, biderkadura eskalar integralarekin."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarri ortonormala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> definitu positiboa denez, badago <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri <strong>ortonormala</strong>. Bertan matrizea <math display=\"inline\"><msub><mi>I</mi><mi>n</mi></msub></math> da eta biderkadura eskalar kanonikoa lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>I</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>b</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>b</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><msub><mi>b</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msub><mi>b</mi><mn>2</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><msub><mi>b</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>≠</mo><mi>j</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gram–Schmidt-en algoritmoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarritik abiatuta, oinarri <strong>ortogonala</strong> eraikitzen da, aurrekoekiko ortogonaltasuna behartuz:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Gram–Schmidt",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>21</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>λ</mi><mn>21</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>31</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>32</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>λ</mi><mn>31</mn></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>λ</mi><mn>32</mn></msub></mtd></mtr></mtable></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><msub><mi>λ</mi><mrow><mi>n</mi><mi>j</mi></mrow></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea: funtzio-espazio bat"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Oinarri ortonormala funtzioetan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Biderkadura eskalarra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mo>,</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> espazioan. Aurkitu oinarri ortonormala."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Ez dira ortogonalak: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>e</mi><mi>x</mi></msup><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mn>1</mn></msubsup><mo>=</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Gram–Schmidt:</strong> <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>k</mi><mo>⋅</mo><mn>1</mn></mrow></math>, non <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mn>1</mn><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi><mo>⇒</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>e</mi><mi>.</mi></mrow></math> Beraz <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <strong>oinarri ortogonala</strong> da."
      },
      {
       "mota": "testua",
       "html": "<strong>Normak:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></msqrt><mo>=</mo><mn>1</mn></mrow></math>, eta <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>≈</mo><mn>0.242</mn><mo>,</mo></mtd></mtr></mtable></math> beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></msqrt><mo>≈</mo><mn>0.492</mn></mrow></math>. Oinarri ortonormala: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi></mrow><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/13 (38-39 orriak; 0019d-ren jarraipena). Teoria eta adibidea <strong>zuzenak</strong> dira: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mi>e</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>e</mi></mrow></math>, eta karratuaren garapena. Jatorrizkoan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>-ren kalkulua <strong>eten egiten da</strong> (lehen zatikia <math display=\"inline\"><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mi>/</mi><mn>2</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mn>1</mn></msubsup></math> bazterrean planteatuta, ebaluatu gabe); hemen <strong>osatu da</strong> (aipamenarekin): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> direnez, jatorrizko adierazpena kalkulatutakoarekin bat dator. Gai hau 0001-0002 eta 0019d orriekin lotua dago (biderkadura eskalarraren blokea). Ez da laburpenik egin. Ikus <code>a1_0020_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p021_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a35",
   "maila": 1,
   "izenburua": "Endomorfismo adjuntua eta endomorfismo autoadjuntuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Espazio euklidear batean, endomorfismo baten <strong>adjuntua</strong> <math display=\"inline\"><msup><mi>f</mi><mo>*</mo></msup></math> definitzen da; oinarri ortonormalean haren matrizea transposatua da. Endomorfismo bereziak (autoadjuntuak, isometriak) eta matrize simetriko errealen propietateak."
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Endomorfismo adjuntua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> gaineko espazio bektorial euklidearra, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi><mo>=</mo><mi>n</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarrian <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Endomorfismo adjuntua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Badago <math display=\"inline\"><mrow><msup><mi>f</mi><mo>*</mo></msup><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>bakarra</strong> non <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msup><mi>f</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Matrizea:</strong> <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><mi>x</mi></mrow></math> denez, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi><mspace width=\"0.222em\"></mspace><mi>y</mi></mrow></math>; eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msup><mi>f</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><mi>G</mi><mi>B</mi><mspace width=\"0.222em\"></mspace><mi>y</mi></mrow></math>. Berdinduz <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi><mo>=</mo><mi>G</mi><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>G</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> alderanzgarria da, heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><msup><mi>G</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oinarri <strong>ortonormalean</strong> (<math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>): <math display=\"inline\"><mrow><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>T</mi></msup></mrow></math>."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Endomorfismo bereziak",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Autoadjuntuak eta isometriak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "I) <strong>Autoadjuntuak</strong> (simetrikoak): <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mi>f</mi><mo>*</mo></msup></mrow></math>.",
        "II) <strong>Isometriak</strong> (ortogonalak): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math>, hots <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Oinarri ortonormalean: <math display=\"inline\"><mrow><msup><mi>x</mi><mi>T</mi></msup><mi>I</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><msup><mi>A</mi><mi>T</mi></msup><mi>I</mi><mi>A</mi><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>⇒</mo><mi>I</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup><mi>A</mi></mrow></math> (matrize ortogonala)."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Oinarri ortonormalean (<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> autoadjuntua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><mi>f</mi><mo>=</mo><msup><mi>f</mi><mo>*</mo></msup><mo>⇔</mo><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Matrize simetriko errealaren propietateak",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Matrize simetriko erreala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math> autoadjuntua (matrizea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup></mrow></math> erreala) bada:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Polinomio karakteristikoaren <strong>erro guztiak errealak</strong> dira (autobalioak).",
        "Azpiespazio propioen dimentsioa = biderkoiztasuna: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>i</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (osagarriaren aldaezintasuna).",
        "<math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≠</mo><msub><mi>λ</mi><mi>j</mi></msub></mrow></math> bada, <math display=\"inline\"><mrow><mo>∀</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>∈</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo>∈</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (azpiespazio propioak <strong>ortogonalak</strong>)."
       ]
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/13 (40-41 orriak). Adjunzio-identitatea <strong>zuzena</strong> da: <math display=\"inline\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi><mo>=</mo><mi>G</mi><mi>B</mi></mrow></math> eta <math display=\"inline\"><mi>G</mi></math>-ren ez-degenerazioa (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">heina</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi></mrow></math>) direla-eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>G</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi></mrow></math>; isometria batentzat oinarri ortonormalean <math display=\"inline\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mi>A</mi><mo>=</mo><mi>I</mi></mrow></math>; autobalio desberdinen azpiespazio propioen ortogonaltasuna autoadjuntuentzat betetzen da. Goiko lerroko oinarri ortonormalizatua aurreko orrikoa da (0020: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math>). Ez da laburpenik egin. Ikus <code>a1_0021_0040_algebra_lineal_avanzada.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p022_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Teorema espektrala: endomorfismo autoadjuntuen diagonalizazio ortogonala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Endomorfismo autoadjuntu oro diagonalizagarria da eta autobektoreen oinarri ortonormala onartzen du (teorema espektrala). Adibide oso bat <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Teorema espektrala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Endomorfismo <strong>autoadjuntu</strong> oro diagonalizagarria da, eta gainera <strong>autobektoreen oinarri ortonormala</strong> lor daiteke."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Diagonalizazio ortogonala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri ortonormalean <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup></mrow></math> eta <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> ortonormala direnez, <math display=\"inline\"><mi>f</mi></math> <strong>autoadjuntua</strong> da: diagonalizagarria eta autobektoreen oinarri ortonormala du."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Polinomio karakteristikoa:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Autobalioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇔</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Oinarria: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Oinarria: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Beraz <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autobektoreen oinarri ortogonala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (autobalio desberdinak → ortogonalak), baina <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> barruan). Gram–Schmidt-ez <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><mi>k</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>k</mi><mo>⇒</mo><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (Normalizazioa hurrengo orrian.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/13 (42-43 orriak). Dena <strong>zuzena</strong> da: polinomio karakteristikoa <math display=\"inline\"><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, autoespazioak zuzen (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), eta Gram–Schmidt-en <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Autobalio desberdinen autobektoreak jada ortogonalak dira; <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> barruko biak bakarrik ortogonalizatu behar dira. Diagonalizazioa hurrengo orrian normalizatzen da. Ez da laburpenik egin. Ikus <code>a1_0022_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p023_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Autobektoreen oinarri ortonormala eta isometriak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko adibidearen itxiera (autobektoreen oinarri ortonormala, <math display=\"inline\"><mi>P</mi></math> matrize ortogonala), eta isometrien hasiera: definizioa, adibidea <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, eta konposizioa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autobektoreen oinarri ortonormala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ortogonala normalizatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow><msqrt><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><msqrt><mn>3</mn></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Trantsizio-matrizea ortogonala da (<math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>2</mn></msqrt><msqrt><mn>3</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><mn>1</mn></mrow><msqrt><mn>2</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msub><mi>B</mi><msup><mn>2</mn><mo>″</mo></msup></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Isometriak"
    },
    {
     "mota": "testua",
     "html": "Espazio euklidear <strong>isometrikoak identifikatu</strong> egiten dira. Isometria batek luzera (eta biderkadura eskalarra, angelua) gordetzen ditu."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Isometria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> <strong>isometria</strong> da baldin biderkadura eskalarra gordetzen badu: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>V</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Isometria R² → R³",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub><mo>=</mo><mi>x</mi><mi>u</mi><mo>+</mo><mi>y</mi><mi>v</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup></mrow></math> garatuz: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> gaiak deuseztatzen dira, eta <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math>-ren koefizienteak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn></mrow></math> ematen du.) Beraz <math display=\"inline\"><mi>f</mi></math> <strong>isometria</strong> da (norma gordetzen du)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Konposizioa:</strong> bi isometriaren konposizioa isometria da. <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>g</mi><mo>:</mo><msub><mi>V</mi><mn>2</mn></msub><mo>→</mo><msub><mi>V</mi><mn>3</mn></msub></mrow></math> isometriak badira, <math display=\"inline\"><mrow><mi>g</mi><mo>∘</mo><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>3</mn></msub></mrow></math> ere isometria da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/13-14 (44-45 orriak). Normalizazioa eta <math display=\"inline\"><mi>P</mi></math> ortogonala <strong>zuzenak</strong> dira. <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> adibidea <strong>isometria da</strong>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> egiaztatu da (<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> gaiak deuseztatu, <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math>: <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn></mrow></math>); hirugarren osagaia (<math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>/</mi><mn>2</mn><mspace width=\"0.222em\"></mspace><mi>y</mi></mrow></math>) zuzena da (a1_0023 txostenak zalantzazko markatu zuen, baina argazkiak eta kalkuluak berresten dute). Konposizioaren isometria-izaera zuzena da. Ez da laburpenik egin. Ikus <code>a1_0023_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p024_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a41",
   "maila": 1,
   "izenburua": "Isometriak: alderantzizkoa, oinarri ortonormalaren irizpidea eta matrize ortogonala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Isometria baten alderantzizkoa isometria da; isometria bat <strong>oinarri ortonormal batean</strong> egiaztatzea nahikoa da; eta oinarri ortonormalean isometriaren matrizea <strong>ortogonala</strong> da. Adibidea: <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ko <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko errotazioa."
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Alderantzizkoa isometria da",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> isometria <strong>supraiektiboa</strong> bada, <math display=\"inline\"><mrow><mo>∀</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>∈</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> badira <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> non <math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <strong>isometria baten alderantzizkoa isometria da</strong>."
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Oinarri ortonormalaren irizpidea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aplikazio lineal bat isometria den egiaztatzeko, <strong>oinarri bat aztertzea</strong> nahikoa da."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "28. proposizioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math> <strong>isometria da baldin eta soilik baldin</strong> oinarri ortonormal bat oinarri ortonormal bihurtzen badu. Isometria bada: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "30. korolarioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aplikazio isometriko baten <strong>matrize elkartua oinarri ortonormal batean ortogonala</strong> da (<math display=\"inline\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mi>A</mi><mo>=</mo><mi>I</mi></mrow></math>)."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Adibidea: <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko errotazioa",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Errotazioa R³-n",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zutabeak <strong>ortonormalak</strong> dira: <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>4</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> besteekiko ortogonala. Beraz <math display=\"inline\"><mi>A</mi></math> ortogonala da eta <math display=\"inline\"><mi>f</mi></math> <strong>isometria</strong> (<math display=\"inline\"><mi>z</mi></math> ardatzaren inguruko <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko errotazioa; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/14 (46-47 orriak). Dena <strong>zuzena</strong> da: isometria supraiektibo baten alderantzizkoa isometria da; 28. proposizioa (isometria ⟺ oinarri ortonormala ortonormal bihurtu) eta 30. korolarioa (matrizea ortogonala) estandarrak dira. Errotazio-matrizearen zutabeak ortonormalak dira (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mi>z</mi></math> ardatzeko <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko errotazioa). Eskuineko orriko &quot;<math display=\"inline\"><mrow><mi>p</mi><mo>⇔</mo><mi>q</mi></mrow></math>&quot; oharrak logika-notak dira. Ez da laburpenik egin. Ikus <code>a1_0024_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p025_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Isometria-taldeak eta oinarri ortonormalen arteko aldaketa ortogonala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dimentsio bereko bi espazio euklidear beti dira isometrikoak (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> bakarra da isometria-baliokidetasunez). Isometria-taldeak (<math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) eta oinarri ortonormalen arteko trantsizio-matrizea ortogonala dela."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsio bereko espazioak eta taldeak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>V</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>f</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> oinarri ortonormalak badira, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≔</mo><msub><mover><mi>f</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math> (<math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math>) aplikazio lineala <strong>isometria da</strong>: <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>i</mi></msup><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>i</mi></msup><msub><mover><mi>f</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Beraz <strong>3 dimentsioko espazio euklidear bakarra dago: <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math></strong>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> isometriak</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>↔</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtext mathvariant=\"normal\">matrize ortogonalak</mtext><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> isometria </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>f</mi><mo>*</mo></msup><mo>⇔</mo><mi>A</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ortogonala </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarri ortonormalen arteko trantsizioa"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Trantsizio-matrize ortogonala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-ren oinarri ortonormalak badira, eta <math display=\"inline\"><mi>P</mi></math> haien arteko trantsizio-matrizea, orduan <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>I</mi></mrow></math> (<math display=\"inline\"><mi>P</mi></math> <strong>ortogonala</strong>)."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> ortonormalak direnez, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math>. Koordenatuak <math display=\"inline\"><mi>Q</mi></math> trantsizioaz: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mo>=</mo><mi>Q</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup></mrow></math>. Orduan <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>I</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>I</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> eta ordezkatuz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><msub><mi>I</mi><mi>n</mi></msub><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><msub><mi>I</mi><mi>n</mi></msub><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mo>,</mo></mrow></math> hots <math display=\"inline\"><mrow><msup><mi>Q</mi><mi>T</mi></msup><mi>Q</mi><mo>=</mo><mi>I</mi></mrow></math>. Beraz trantsizio-matrizea <strong>ortogonala</strong> da."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/14 (48-49 orriak). Dena <strong>zuzena</strong> da: dimentsio bereko bi espazio euklidear isometrikoak dira (oinarri ortonormala oinarri ortonormalera bidaliz), beraz <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> bakarra da; isometria-taldeen korrespondentzia (<math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), eta oinarri ortonormalen arteko trantsizioaren ortogonaltasuna (<math display=\"inline\"><mrow><msup><mi>Q</mi><mi>T</mi></msup><mi>Q</mi><mo>=</mo><mi>I</mi></mrow></math>). Jatorrizkoak <math display=\"inline\"><mi>P</mi></math> (enuntziatuan) eta <math display=\"inline\"><mi>Q</mi></math> (frogapenean) erabiltzen ditu; biak trantsizio bera edo elkarren alderantzizkoak dira (konbentzioa ez du finkatzen), baina ondorioa zuzena da. Ez da laburpenik egin. Ikus <code>a1_0025_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p026_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a46",
   "maila": 1,
   "izenburua": "Forma bilinealaren sinadura endomorfismo autoadjuntu baten bidez",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma bilineal simetriko baten sinadura haren matrizearen autobalioen zeinuek ematen dute. Lotura: matrize bera duen <strong>endomorfismo autoadjuntu laguntzaile</strong> <math display=\"inline\"><mi>h</mi></math> diagonalizatuz, <math display=\"inline\"><mrow><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math> lortzen da. Adibidea <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n."
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Bi objektu, matrize bera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>E</mi></math> espazio euklidearra, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri ortonormala, <math display=\"inline\"><mi>f</mi></math> forma bilineal simetrikoa, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>). Definitu <strong>endomorfismo laguntzaile</strong> <math display=\"inline\"><mi>h</mi></math> non <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mi>f</mi></math> simetrikoa <math display=\"inline\"><mrow><mo>⇒</mo><mi>A</mi></mrow></math> simetrikoa;",
      "<math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> ortonormala <math display=\"inline\"><mrow><mo>⇒</mo><mi>h</mi></mrow></math> <strong>autoadjuntua</strong>."
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz badago <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> <strong>oinarri ortonormala autobektoreena</strong>, non <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi></mrow></math> (<math display=\"inline\"><mi>P</mi></math> ortogonala)."
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Sinadura",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> direla, <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>-n: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Sig</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>i</mi><mo>+</mo></msup><mo>,</mo><msup><mi>i</mi><mo>−</mo></msup><mo>,</mo><msup><mi>i</mi><mn>0</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "hau da, <math display=\"inline\"><mi>A</mi></math>-ren autobalio positibo, negatibo eta nuluen kopurua."
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Adibidea (planteamendua)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Sinadura A-ren autobalioetatik",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Diagonalizagarria da? (Bai: autoadjuntua.)",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada (<math display=\"inline\"><mi>f</mi></math> forma bilineal simetrikoa <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>), ebaluatu <math display=\"inline\"><mi>f</mi></math>-ren sinadura."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>-rekiko ortonormala hartuz eta <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> (<math display=\"inline\"><mrow><mi>h</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), <math display=\"inline\"><mi>h</mi></math> <strong>autoadjuntua</strong> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>-rekiko eta <math display=\"inline\"><mi>A</mi></math> diagonalizagarria. (Autobalioak eta sinadura hurrengo orrian.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/14 (50-51 orriak). Prozedura <strong>zuzena</strong> da: matrize simetriko errealak endomorfismo autoadjuntu bat definitzen du, ortogonalki diagonalizatzen da eta <math display=\"inline\"><mrow><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math> ematen du; sinadura ondoren lortzen da diagonaleko autobalioen <strong>zeinuak zenbatuz</strong> (ez diagonalizazioa egiaztatze hutsez). <math display=\"inline\"><mi>f</mi></math> (forma bilineala) eta <math display=\"inline\"><mi>h</mi></math> (endomorfismo autoadjuntu laguntzailea) bereizten dira, matrize bera (<math display=\"inline\"><mi>A</mi></math>) izan arren. Adibidearen ebazpena (<math display=\"inline\"><mi>A</mi></math>-ren autobalioak <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn></mrow></math>; sinadura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) hurrengo orrian jarraitzen da. Ez da laburpenik egin. Ikus <code>a1_0026_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p027_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Sinaduraren adibidea, deskonposizio ortogonala eta osagarri ortogonala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko adibidearen ebazpena: <math display=\"inline\"><mi>A</mi></math>-ren autobalioak (<math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn></mrow></math>), <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren <strong>deskonposizio ortogonala</strong> autoespazioetan, eta <strong>osagarri ortogonalaren</strong> (<math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math>) definizioa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autobalioak eta sinadura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>3</mn></msup><mo>+</mo><mn>18</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>99</mn><mi>λ</mi><mo>+</mo><mn>162</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erroak <math display=\"inline\"><mn>162</mn></math>-ren zatitzaileen artean bilatuz (<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>8</mn></mrow></math>, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>3</mn></msub><mo>=</mo><mn>9</mn></mrow></math> (<math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Badago <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> autobektoreen oinarri ortonormala, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>2</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>3</mn><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>i</mi></msub><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Sig</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deskonposizio ortogonala eta osagarri ortogonala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⨁</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⨁</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">ortogonala, ez soilik osagarria</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Osagarri ortogonala (S⊥)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> azpiespazioaren <strong>osagarri ortogonala</strong>: <math display=\"block\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> Betetzen da <math display=\"inline\"><mrow><mi>S</mi><mo>⨁</mo><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mi>E</mi></mrow></math>, eta <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi>S</mi><mo>⟂</mo></msup><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "media/irudiak/4a984e5bbe27f498.svg",
     "zabalera": 224
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/14 (52-53 orriak). Dena <strong>zuzena</strong> da: polinomio karakteristikoa <math display=\"inline\"><mrow><mi>−</mi><msup><mi>λ</mi><mn>3</mn></msup><mo>+</mo><mn>18</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>99</mn><mi>λ</mi><mo>+</mo><mn>162</mn></mrow></math> (aztarna <math display=\"inline\"><mrow><mo>=</mo><mn>18</mn><mo>=</mo><mn>6</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>7</mn></mrow></math>, determinantea <math display=\"inline\"><mrow><mo>=</mo><mn>162</mn><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><mn>9</mn></mrow></math>), erroak <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn></mrow></math> (<math display=\"inline\"><mn>162</mn></math>-ren zatitzaileen tanteoz), guztiak positiboak, beraz <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (definitu positiboa). <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren deskonposizioa autoespazioetan <strong>ortogonala</strong> da (<math display=\"inline\"><mi>A</mi></math> simetrikoa delako), ez soilik osagarria. Egileak &quot;OSAGARRIA&quot; (euskaraz) idazten du osagarri ortogonala izendatzeko. Ez da laburpenik egin. Ikus <code>a1_0027_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p028_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Osagarri ortogonala polinomioetan; proiekzioa eta distantzia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Osagarri ortogonalaren adibidea <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n, biderkadura eskalar integralarekin, eta azpiespazio bateko <strong>proiekzio ortogonala</strong> eta <strong>distantzia euklidearra</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Osagarri ortogonala <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "S⊥ P₂(ℝ)-n",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>:</mo><msub><mi>a</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, biderkadura eskalarra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, eta azpiespazioa <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo>∈</mo><msub><mi>P</mi><mn>2</mn></msub><mo>:</mo><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Aurkitu <math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mi>S</mi></math>-ren oinarria:</strong> <math display=\"inline\"><mrow><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math>, beraz <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: oinarria <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math> baldintzak</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>), bakoitiak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-en deuseztatuz: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>3</mn><msub><mi>a</mi><mn>0</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mn>3</mn><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ebatziz: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn></mrow></math>, beraz <math display=\"block\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>3</mn><mo>+</mo><mn>4</mn><mi>x</mi><mo>−</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proiekzio ortogonala eta distantzia"
    },
    {
     "mota": "testua",
     "html": "Bi punturen arteko <strong>distantzia euklidearra</strong> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>−</mo><msub><mi>z</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>z</mi><mn>1</mn></msub><mo>−</mo><msub><mi>z</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>z</mi><mn>1</mn></msub><mo>−</mo><msub><mi>z</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></math> = <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></math>-ren <strong>proiekzio ortogonala</strong> <math display=\"inline\"><mi>S</mi></math>-ren gainean; orduan <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math> eta <strong>azpiespazioarekiko distantzia</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi>S</mi><mo>⟂</mo></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/14 (54-55 orriak). Dena <strong>zuzena</strong> da: <math display=\"inline\"><mi>S</mi></math>-ren oinarria <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math>-tik), eta <math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math>-en bi baldintzak (<math display=\"inline\"><mrow><mn>3</mn><msub><mi>a</mi><mn>0</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mn>3</mn><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) integral bakoitiak deuseztatuz. Jatorrizkoak baldintzak planteatzen ditu baina <strong>ez du <math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math> osatzen</strong>; hemen ebatzi da (aipamenarekin): <math display=\"inline\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>3</mn><mo>+</mo><mn>4</mn><mi>x</mi><mo>−</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn></mrow></math>). Proiekzio ortogonalaren eta distantziaren formulak (<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi>S</mi><mo>⟂</mo></msup></mrow></math>) estandarrak dira. Ez da laburpenik egin. Ikus <code>a1_0028_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p029_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Aplikazio lineala nukleotik eta irudititik; nukleoa eta irudia P₂-n",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> aplikazioaren adierazpen esplizitua (nukleoa eta irudia emanda), eta <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baten nukleoaren eta irudiaren kalkulua."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> ebaztea"
    },
    {
     "mota": "testua",
     "html": "Bektore generikoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> oinarrian: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Irudiak: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Linealtasunez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>+</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>ε</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koordenatuak askatuz: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>μ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>+</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mi>ε</mi><mo>=</mo><mi>y</mi><mo>+</mo><mi>ε</mi><mo>⇒</mo><mi>ε</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi></mrow></math>. Beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mi>y</mi><mo>+</mo><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa 6: nukleoa eta irudia <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "f: R⁴ → P₂(ℝ)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Kalkulatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> hots <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <strong>(Hurrengo orrian osatzen da.)</strong>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "LANDETA, 2013/2/18 (56-57 orriak). <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>-ren ebazpena <strong>zuzena</strong> da eta 0017 orrian hasitako ariketa ixten du: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo>+</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (egiaztatua: <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>t</mi><mo>+</mo><mi>z</mi></mrow></math>); <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (emandako nukleo-sortzaileak, linealki independenteak, <math display=\"inline\"><mi>f</mi></math>-k <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>-ra bidaltzen dituenak). Ariketa 6-n <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: nukleoaren baldintzak <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; hurrengo orrian jarraitzen da. Ez da laburpenik egin. Ikus <code>a1_0029_algebra_primero_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p030_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a53",
   "maila": 1,
   "izenburua": "Isometrien oharrak, talde ortogonalak eta <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> matrizeen sailkapena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Isometriei buruzko ohar batzuk (<math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n, balio absolutua), talde ortogonal eta berezien egitura (<math display=\"inline\"><mi>O</mi></math>, <math display=\"inline\"><mtext mathvariant=\"normal\">SO</mtext></math>, <math display=\"inline\"><mtext mathvariant=\"normal\">SL</mtext></math>, <math display=\"inline\"><mtext mathvariant=\"normal\">GL</mtext></math>), eta plano ortogonalen matrizeen sailkapena: errotazioak eta islapenak."
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Oharrak isometriei buruz",
   "blokeak": [
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "(ii) <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> espazio euklidearrean, isometria bakarrak <strong>identitatea eta bere aurkakoa</strong> dira.",
      "(iii) <math display=\"inline\"><mrow><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> <strong>balio absolutua norma da, baina ez isometria</strong>: norma gordetzen du (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>), baina ez da lineala, eta ez du biderkadura eskalarra gordetzen: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≠</mo><mi>x</mi><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>.",
      "(iv) <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, isometria da (0023 orrian egiaztatua)."
     ]
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Talde ortogonalak eta bereziak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Errotazioak:</strong> <math display=\"inline\"><mrow><msup><mtext mathvariant=\"normal\">GL</mtext><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren azpitalde (normala) da, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> duten <math display=\"inline\"><mi>n</mi></math> ordenako matrize errealena: <strong>talde lineal berezia</strong> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊇</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊇</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SO</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oinarri ortonormal batek talde-korrespondentziak ematen ditu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SO</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SO</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> matrize ortogonalen sailkapena",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Errotazioak eta islapenak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mn>2</mn></math> ordenako matrize ortogonal oro bietako bat da: <math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">det</mi><mo>=</mo><mn>1</mn><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> errotazioa</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">det</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> islapena</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/18 (58-59 orriak). Dena <strong>zuzena</strong> da: <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-ko isometriak (<math display=\"inline\"><mrow><mi>±</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> id</mtext></mrow></mrow></math>), balio absolutua (norma bai, isometria ez —ez lineala, ez du biderkadura gordetzen—), <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> isometria (0023), talde-egitura (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">SO </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⊆</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⊆</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo>⊆</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow></mrow></math>; <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">SO </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⊆</mo><mi>O</mi></mrow></math>) eta korrespondentziak oinarri ortonormalaren bidez. <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> matrize ortogonalen sailkapena: <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>, errotazioa), <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, islapena). Jatorrizkoak, gainera, gai-kanpoko ohar pertsonal bat (gorriz, irakurtezina) darama; ez da matematika-edukia, ez da hemen jaso. Ez da laburpenik egin. Ikus <code>a1_0030_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p031_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Matrize ortogonal eta simetrikoen autobalioak; Sylvester; adjuntuaren bakartasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Matrize ortogonal baten autobalioek <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math> betetzen dute; matrize simetriko erreal baten autobalioak <strong>errealak</strong> dira. Sylvester-en irizpidea eta endomorfismo adjuntuaren <strong>bakartasuna</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize ortogonalaren autobalioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>∈</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ortogonala bada, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">det</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>, eta polinomio karakteristikoaren edozein erro <math display=\"inline\"><mi>λ</mi></math>-k <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math> betetzen du. <strong>Autobalio erreal bakarrak <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mn>1</mn></math> dira</strong> (gainerakoak konplexuak, <math display=\"inline\"><mrow><mi>A</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize simetriko errealaren autobalioak errealak dira"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Proposizioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Matrize erreal <strong>simetriko</strong> baten polinomio karakteristikoaren erroak <strong>errealak</strong> dira."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mi>λ</mi></math> autobalioa, <math display=\"inline\"><mrow><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></mrow></math>). Traposatu konjokatua hartuz (<math display=\"inline\"><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup></math>): <math display=\"block\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>λ</mi><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math> Beste aldetik, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup></mrow></math>, eta <math display=\"inline\"><mi>A</mi></math> erreala eta simetrikoa denez (<math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup></mrow></math>): <math display=\"block\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.222em\"></mspace><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math> Beraz <math display=\"inline\"><mrow><mi>λ</mi><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.222em\"></mspace><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math>, eta <math display=\"block\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>⋯</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> (<math display=\"inline\"><mrow><mi>z</mi><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></math>). Sinplifikatuz <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, hots <math display=\"inline\"><mrow><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sylvester-en irizpidea"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Sylvester-en irizpidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Matrize karratu erreal bat <strong>biderkadura eskalar baten matrizea</strong> da baldin <strong>simetrikoa</strong> bada eta bere <strong>menor nagusi guztiak positiboak</strong> badira (hots, <strong>definitu positiboa</strong>, ez-degeneratua, aplikazio bilineala)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Endomorfismo adjuntuaren bakartasuna"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>V</mi></math> espazio euklidearra, <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> endomorfismoa. Erlazioak <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>f</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>V</mi></mrow></math> endomorfismo <strong>bakarra</strong> <math display=\"inline\"><mrow><msup><mi>f</mi><mo>*</mo></msup><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> definitzen du."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Bakartasuna:</strong> <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>V</mi></mrow></math> biek <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen badute (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>), kenduz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></mrow></math>. Biderkadura eskalarra ez-degeneratua denez, <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, hots <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math>. <strong>(Orri honetan eten egiten da azken urratsa.)</strong>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/19 (60-61 orriak). Frogapenak <strong>zuzenak</strong> dira: matrize simetriko errealaren autobalioak errealak (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></math>-ra pasata, forma hermitikoa erabiliz, <math display=\"inline\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo>∑</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>x</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>); Sylvester-en irizpide klasikoa; eta adjuntuaren bakartasuna (<math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math> guztiekiko ortogonala → <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math>). ⚠ <strong>Aipamena:</strong> jatorrizkoak &quot;erro erreal bakarrak <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math> edo <math display=\"inline\"><mn>1</mn></math>&quot; idazten du, baina <math display=\"inline\"><mn>0</mn></math> ezinezkoa da matrize ortogonal batentzat (beti alderanzgarria da); erreal bakarrak <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mn>1</mn></math> dira, hemen zuzendua. Bakartasunaren azken urratsa orri honetan eten egiten da. Ez da laburpenik egin. Ikus <code>a1_0031_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p032_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Adjuntuaren existentzia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Endomorfismo adjuntuaren <strong>existentzia</strong> (bakartasunaren osagarria), eta <strong>geometria afinaren</strong> hasiera: <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>-ko puntuak eta bektoreak, eta <strong>azpiespazio afinaren</strong> definizioa (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adjuntuaren existentzia"
    },
    {
     "mota": "testua",
     "html": "Aurreko bakartasunetik: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>V</mi><mo>⇒</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> (guztiekiko elkarzuta den bektore bakarra <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math> da; ez-degenerazioa)."
    },
    {
     "mota": "testua",
     "html": "<strong>Existentzia:</strong> oinarri ortonormal batean (<math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>), <math display=\"inline\"><mrow><mi>X</mi><mo>,</mo><mi>Y</mi><mo>,</mo><mi>Z</mi></mrow></math> izanik <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover></mrow></math>-ren zutabe-matrizeak. Baldintza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></mrow></math>, matrizialki (<math display=\"inline\"><mi>B</mi></math> = <math display=\"inline\"><mi>f</mi></math>-ren matrizea oinarri ortonormalean):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>Z</mi><mi>T</mi></msup><mi>Y</mi><mo>=</mo><msup><mi>X</mi><mi>T</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mi>Y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>Y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>Z</mi><mi>T</mi></msup><mo>=</mo><msup><mi>X</mi><mi>T</mi></msup><mi>B</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>Z</mi><mo>=</mo><msup><mi>B</mi><mi>T</mi></msup><mi>X</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><msup><mi>f</mi><mo>*</mo></msup></math> <strong>existitzen da</strong>, eta <math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>B</mi><mi>T</mi></msup></mrow></math> oinarri ortonormalean."
    }
   ]
  },
  {
   "id": "a59",
   "maila": 1,
   "izenburua": "Ariketa osoa: biderkadura eskalar bat, oinarri ortonormala eta isometria",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Biderkadura eskalar zehatz batekin <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n: oinarri ortonormala (Gram–Schmidt), isometria-egiaztapena, eta matrizea oinarri ez-ortonormalean <strong>ez dela ortogonala</strong> (paradoxarik gabe)."
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Enuntziatua",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Biderkadura eskalarra R³-n",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><msub><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aurkitu <math display=\"inline\"><mi>B</mi></math> oinarri ortonormala biderkadura honekiko.",
        "<math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> isometria da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>-rekiko?",
        "Aurkitu <math display=\"inline\"><mi>g</mi></math>-ren matrizea <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>-n eta <math display=\"inline\"><mi>B</mi></math>-n.",
        "<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ortogonala da? Teoria kontraesaten al du?"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "1) Oinarri ortonormala (Gram–Schmidt)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>+</mo><mi>A</mi><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mi>B</mi><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>. Ortogonaltasuna behartuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>A</mi><mo>⋅</mo><mn>1</mn><mo>+</mo><mi>B</mi><mo>⋅</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>=</mo><mn>0</mn><mo>+</mo><mi>A</mi><mo>⋅</mo><mn>0</mn><mo>+</mo><mi>B</mi><mo>⋅</mo><mn>1</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Normak: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>, eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>. <strong>Oinarri ortonormala</strong> <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "2) <math display=\"inline\"><mi>g</mi></math> isometria da?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>g</mi></math> isometria da <math display=\"inline\"><mrow><mo>⇔</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math>. Kalkulatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ordezkatuz forma koadratikoan (<math display=\"inline\"><mrow><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>y</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>y</mi><mn>1</mn></msub><msub><mi>y</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>y</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> isometria da. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a63",
   "maila": 2,
   "izenburua": "3)–4) Matrizea eta ortogonaltasuna",
   "blokeak": [
    {
     "mota": "abisua",
     "titulua": "Kontuz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> oinarri kanonikoa <strong>ez da ortonormala</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> honekiko (<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><mo>≠</mo><mi>I</mi></mrow></math>). Beraz <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>ez izateak ortogonala ez du teoria kontraesaten</strong>: matrize ortogonala izatearen irizpidea <strong>oinarri ortonormaletan</strong> baino ez da baliozkoa. Oinarri ortonormal <math display=\"inline\"><mi>B</mi></math>-n, ordea, <math display=\"inline\"><mi>g</mi></math>-ren matrizeak ortogonala izan behar du (isometria delako)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, &nbsp;2013/3/20 (72-73 orriak). Ariketa <strong>zuzena</strong> da osorik: Gram–Schmidt-ez <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, oinarri ortonormala; eta <math display=\"inline\"><mi>g</mi></math> <strong>isometria da</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>, egiaztatua). Puntu giltzarria: <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> ez da ortonormala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>-rekiko, beraz <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ez-ortogonalak ez du paradoxarik sortzen (irizpidea oinarri ortonormaletan bakarrik). ⚠ <strong>Aipamena:</strong> enuntziatuko lerroko formulan jatorrizkoak <math display=\"inline\"><mrow><mi>−</mi><msub><mi>x</mi><mn>3</mn></msub><msub><mi>y</mi><mn>3</mn></msub></mrow></math> idazten du, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>3</mn></msub></mrow></math> izan behar duena (<math display=\"inline\"><mi>A</mi></math> matrize simetrikoaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sarrera); matrizea da erreferentzia. Ez da laburpenik egin. Ikus <code>a1_0037_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p038_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "g-ren matrizea oinarri bietan; matrize ortogonala ≠ isometria (kontraadibidea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko ariketaren itxiera (<math display=\"inline\"><mi>g</mi></math>-ren matrizea <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>-n eta <math display=\"inline\"><mi>B</mi></math> ortonormalean), eta kontraadibide argigarria: matrize ortogonala izateak <strong>ez du</strong> isometria bermatzen oinarria ez-ortonormala bada."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>g</mi></math>-ren matrizea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (errenkada-hitzarmenez). <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri ortonormalean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>⇒</mo><msub><mi>C</mi><mi>B</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>⇒</mo><msub><mi>C</mi><mi>B</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>⇒</mo><msub><mi>C</mi><mi>B</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">permutazioa, ortogonala: </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi></msup><mo>=</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ordea, <strong>ez da ortogonala</strong> (<math display=\"inline\"><mrow><mi>Q</mi><msup><mi>Q</mi><mi>T</mi></msup><mo>≠</mo><mi>I</mi></mrow></math>: lehen errenkada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "abisua",
     "titulua": "Kontuz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>Q</mi></math> ez-ortogonala izateak <strong>ez du teoria kontraesaten</strong>: oinarri kanonikoak ez du ortonormala izan behar. Oinarri ortonormal <math display=\"inline\"><mi>B</mi></math>-n, <math display=\"inline\"><mi>g</mi></math> isometria denez, matrizea ortogonala da (<math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> permutazioa)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kontraadibidea: matrize ortogonala baina isometria EZ"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "f matrize ortogonalarekin",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Biderkadura eskalar bera. <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (ortogonala). <math display=\"inline\"><mi>f</mi></math> isometria da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>-rekiko?"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> ez da ortonormala (<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>), beraz <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ortogonala izateak <strong>ez du</strong> isometria esan nahi. Egiaztatu behar da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> denez: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math> <strong>Desberdinak!</strong> Beraz <math display=\"inline\"><mi>f</mi></math> <strong>ez da isometria</strong> (nahiz eta <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ortogonala izan)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/20 (74-75 orriak). Dena <strong>zuzena</strong> da: <math display=\"inline\"><mi>g</mi></math>-ren matrizea <math display=\"inline\"><mi>B</mi></math> oinarri ortonormalean permutazioa da (ortogonala), <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>-n <math display=\"inline\"><mi>Q</mi></math> ez-ortogonala (kontraesanik gabe, <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> ez baita ortonormala). Kontraadibidea <strong>argigarria da</strong>: <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ortogonala izan arren, <math display=\"inline\"><mi>f</mi></math> <strong>ez da isometria</strong>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math> vs <math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>, egiaztatua). Ironia: <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> matrize <strong>bera</strong> dira (permutazio ortogonala), baina <math display=\"inline\"><mi>g</mi></math> isometria da eta <math display=\"inline\"><mi>f</mi></math> ez —aldea oinarriaren ortonormaltasuna da. Ez da laburpenik egin. Ikus <code>a1_0038_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p039_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a65",
   "maila": 2,
   "izenburua": "Biderkadura eskalarra oinarri ortonormal batetik; isometria eta autoadjuntua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oinarri bat <strong>ortonormala</strong> dela jakinda (biderkadura eskalar ezezaguna), haren matrizea <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>-n berreskuratzen da (<math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math>-tik), eta <math display=\"inline\"><mi>f</mi></math> isometria/autoadjuntua den aztertzen da, matrizea <math display=\"inline\"><mi>B</mi></math> ortonormalean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enuntziatua"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> biderkadura eskalarra, zeinekiko <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri <strong>ortonormala</strong> den. <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>-n zutabeka <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aurkitu <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "<math display=\"inline\"><mi>f</mi></math> isometria da? Autoadjuntua da?"
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1) Biderkadura eskalarraren matrizea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>. <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math> denez, oinarri kanonikoa <math display=\"inline\"><mi>B</mi></math>-ren menpe askatuz: <math display=\"block\"><mrow><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (euklidearra, <math display=\"inline\"><mi>B</mi></math> ortonormala baita):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><msub><mi>I</mi><mn>3</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mi>c</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ez da ortonormala. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Matrizea simetrikoa eta definitu positiboa da: menor nagusiak <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2) Isometria eta autoadjuntua"
    },
    {
     "mota": "testua",
     "html": "Irizpideak, <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik (<math display=\"inline\"><mi>B</mi></math> ortonormala): <math display=\"block\"><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> isometria </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><msup><mi>A</mi><mo>′</mo></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ortogonala</mtext></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> autoadjuntua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><msup><mi>A</mi><mo>′</mo></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> simetrikoa</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren koordenatuak <math display=\"inline\"><mi>B</mi></math>-n kalkulatuz, <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math> lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Isometria?</strong> <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>-ren bigarren zutabea <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math> da, beraz <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>; orduan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>0</mn><mo>≠</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math> (<math display=\"inline\"><mi>B</mi></math> ortonormala). Beraz <math display=\"inline\"><mi>f</mi></math> <strong>ez da isometria</strong> (<math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math> ez da ortogonala, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>Autoadjuntua?</strong> <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>T</mi></msup></mrow></math> (simetrikoa), beraz <math display=\"inline\"><mi>f</mi></math> <strong>autoadjuntua da</strong>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/20 (76-77 orriak). <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <strong>egiaztatua</strong> da (sei balioak: <math display=\"inline\"><mrow><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren biderkadura euklidearrak, <math display=\"inline\"><mi>B</mi></math> ortonormala delako); simetrikoa eta definitu positiboa. Ondorioak <strong>zuzenak</strong> dira: <math display=\"inline\"><mi>f</mi></math> <strong>ez da isometria</strong> (<math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>-ren <math display=\"inline\"><mn>2</mn></math>. zutabea <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>, beraz <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, norma <math display=\"inline\"><mrow><mn>0</mn><mo>≠</mo><mn>1</mn></mrow></math>), eta <math display=\"inline\"><mi>f</mi></math> <strong>autoadjuntua da</strong> (<math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>T</mi></msup></mrow></math>). ⚠ <strong>Aipamena:</strong> jatorrizkoak <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>-n zuzenean <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> kalkulatzean gaien arteko labaindurak ditu (txostenak <math display=\"inline\"><mi>A</mi></math> zutabeetatik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortu zuen, ez <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>); <math display=\"inline\"><mi>B</mi></math> oinarri ortonormaleko <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>-tik, ordea, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> garbi ateratzen da, egilearen ondorioarekin bat. Ez da laburpenik egin. Ikus <code>a1_0039_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p040_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "V(0)-ren oinarri ortonormala; uzkurdura eta Bessel-en desberdintza",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko ariketaren itxiera (<math display=\"inline\"><mi>f</mi></math>-ren autobektoreen oinarri ortonormala), eta bi ariketa teoriko: autobalio guztiak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math> dituen endomorfismo autoadjuntua <strong>uzkurtzailea</strong> da; eta <strong>Bessel-en desberdintza</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "V(0)-ren oinarri ortonormala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren autobalioak: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msup><mi>A</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hots <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Oinarria: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>). Normak (<math display=\"inline\"><mi>B</mi></math> ortonormala): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>1</mn></mrow></math>. <strong>Oinarri ortonormala:</strong>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><mrow><msqrt><mn>2</mn></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Uzkurdura (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Ariketa teorikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>E</mi></math> espazio euklidearra, <math display=\"inline\"><mi>f</mi></math> endomorfismo <strong>autoadjuntua</strong>. <math display=\"inline\"><mi>f</mi></math>-ren autobalio guztiek <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math> betetzen badute, orduan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>≤</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math> (<strong>uzkurtzailea</strong>)."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math> autoadjuntua denez, badago <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> autobektoreen oinarri ortonormala. <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo>∑</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math> bada, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo>∑</mo><msub><mi>λ</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>. <math display=\"inline\"><mi>B</mi></math> ortonormala (<math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><msubsup><mi>x</mi><mi>i</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mn>1</mn><mo>⇒</mo><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><mo>≤</mo><mn>1</mn><mo>⇒</mo><mo>∑</mo><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup><mo>≤</mo><mo>∑</mo><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>, beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>≤</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>. <math display=\"inline\"><mi>◼</mi></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bessel-en desberdintza (enuntziatua)"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Bessel-en desberdintza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>k</mi></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> multzo <strong>ortonormala</strong> bada (ez nahitaez oinarria) <math display=\"inline\"><mi>V</mi></math> espazio euklidearrean, orduan <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>k</mi></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>≤</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>V</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/20 (78-79 orriak). Polinomio karakteristikoa <math display=\"inline\"><mrow><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>zuzena</strong> da (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> bi aldiz, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>). Uzkurdura-ariketaren frogapena <strong>osoa eta zuzena</strong> da (teorema espektrala erabiliz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>v</mi><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo>∑</mo><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo>∑</mo><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>, eta <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><mo>≤</mo><mn>1</mn></mrow></math> gaiz gai). Bigarrena Bessel-en desberdintza da (klasikoa), enuntziatua bakarrik. ⚠ <strong>Aipamena:</strong> <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren oinarrian jatorrizkoak <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> idazten du, baina norma-kalkuluak <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> darabil (eta <math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup></mrow></math> baldintzarekin bat dator); <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> da zuzena, hemen erabilia. Ez da laburpenik egin. Ikus <code>a1_0040_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p041_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Gram–Schmidt R⁴-n eta diagonalizazio espektrala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi ariketa: (1) Gram–Schmidt-en algoritmoa <math display=\"inline\"><mrow><mi>U</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> hiperplano baten oinarrian; (2) matrize simetriko baten diagonalizazio espektrala (autobektoreen oinarri ortonormala)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa 1: Gram–Schmidt R⁴-n"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "U-ren oinarri ortonormala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko biderkadura eskalar estandarrarekin, aurkitu <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>:</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>) azpiespazioaren oinarri ortonormala."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Gram–Schmidt:</strong> <math display=\"block\"><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><mfrac><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>⋅</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup></mrow><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>⋅</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup></mrow></mfrac><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn><mo>′</mo></msubsup><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>−</mo><mfrac><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></mfrac><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>4</mn><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math> Normalizatuz: <math display=\"block\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>,</mo><mfrac><mn>2</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>6</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>6</mn></mfrac><mo>,</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>6</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>β</mi><mi>U</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> da <math display=\"inline\"><mi>U</mi></math>-ren oinarri ortonormala."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa 2: diagonalizazio espektrala"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Autobektoreen oinarri ortonormala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<strong>simetrikoa</strong>, singularra). Posible da <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren autobektoreen oinarri ortonormala aurkitzea?"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Biderkadura eskalar estandarrean <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> ortonormala da, eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup></mrow></math>; beraz <math display=\"inline\"><mi>f</mi></math> <strong>autoadjuntua</strong> da eta <strong>badago</strong> autobektoreen oinarri ortonormala (teorema espektrala)."
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>λ</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⇒</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac><mo>,</mo><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⇒</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⇒</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>,</mo><mfrac><mn>2</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>,</mo><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> autobektoreen oinarri ortonormala da (<math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≠</mo><msub><mi>λ</mi><mi>j</mi></msub></mrow></math>)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "ALJEBRA 2.1, 2013/2/21 (80-81 orriak). ⚠ <strong>Etiketa:</strong> a1_0041 &quot;geometria afina&quot; etiketatuta dago, baina edukia <strong>algebra lineal orokorra</strong> da (Gram–Schmidt, teorema espektrala), koaderno bereko beste gai bat. Bi ariketak <strong>zuzenak</strong> dira: Gram–Schmidt-en <math display=\"inline\"><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac></mrow></math> (egiaztatua); eta <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, autobektoreak <math display=\"inline\"><mrow><mi>A</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> betez (egiaztatuak: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo></mrow></math> bera, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). <math display=\"inline\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math>-ren hirugarren osagaia jatorrizkoan lauso idatzita dago; normalizazio zuzena <math display=\"inline\"><mrow><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>2</mn></mrow></math> da (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>2</mn><mi>/</mi><msqrt><mn>3</mn></msqrt></mrow></math>). Egileak ohar pertsonal bat ere badu gaztelaniaz (mintegia zaila zaiola); ez da matematika-edukia. Ez da laburpenik egin. Ikus <code>a1_0041_geometria_afina_euskera_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p042_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapen matematikoa (SymPy); Sylvester, isometria eta Gram-Schmidt",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Sylvester, isometria eta Gram-Schmidt: forma bilinealetatik biderketa eskalarrera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azterketa-orri honek bi gauza egiten ditu: forma bilineal simetriko bat noiz den <strong>biderketa eskalarra</strong> bereizten du Sylvester-en irizpideaz, eta gero biderketa eskalar jakin batekin <strong>isometria</strong> bat eta <math display=\"inline\"><mi>f</mi></math>-rekiko <strong>oinarri ortonormal</strong> bat eraikitzen ditu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Forma bera, orain forma bilineal gisa: Sylvester-en irizpidea"
    },
    {
     "mota": "testua",
     "html": "Demagun <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea, oraingoan <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> forma bilineal simetriko bati elkartua (aurreko orrian matrize bera endomorfismo gisa aztertu zen). Bi galdera:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Oinarri ortogonala (<math display=\"inline\"><mi>f</mi></math>-rekiko)?</strong> <math display=\"inline\"><mi>A</mi></math> simetrikoa denez, <math display=\"inline\"><mi>f</mi></math> forma bilineal simetrikoa da; forma simetrikoen teoremaren arabera <strong>beti existitzen da</strong> oinarri ortogonal bat. <strong>Bai.</strong>",
      "<strong>Oinarri ortonormala (<math display=\"inline\"><mi>f</mi></math>-rekiko)?</strong> Horretarako <math display=\"inline\"><mi>f</mi></math> <strong>biderketa eskalarra</strong> izan behar da (definitu positiboa). Sylvester-en irizpideaz egiaztatzen da: goi-ezkerreko azpideterminante nagusi guztiek positiboak izan behar dute."
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denez (ez positiboa), <math display=\"inline\"><mi>f</mi></math> <strong>ez da definitu positiboa</strong>, beraz <strong>ez da biderketa eskalarra</strong> eta <strong>ez dago <math display=\"inline\"><mi>f</mi></math>-rako oinarri ortonormalik</strong>."
    },
    {
     "mota": "oharra",
     "titulua": "Endomorfismoa vs forma",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontraste ederra: matrize <strong>bera</strong> endomorfismo gisa ortonormalki diagonalizatzen da (bektore propioen oinarri ortonormala, teorema espektrala), baina forma bilineal gisa <strong>endekatua</strong> da (<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>) eta ez du oinarri ortonormalik onartzen."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Biderketa eskalar berri bat: isometria eta oinarri ortonormala"
    },
    {
     "mota": "testua",
     "html": "Izan bedi orain <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> forma bilineala, elkartutako matrize simetrikoarekin:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>′</mo></msup><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo><msup><mi>z</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><msup><mi>x</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>z</mi><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>z</mi><msup><mi>z</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mi>f</mi></math> biderketa eskalarra da (Sylvester)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hiru determinante nagusiak positiboak dira, beraz <math display=\"inline\"><mi>A</mi></math> definitu positiboa da eta <math display=\"inline\"><mi>f</mi></math> <strong>biderketa eskalarra</strong> da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mi>h</mi></math> isometria da"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aplikazioa, hots <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea. <math display=\"inline\"><mi>h</mi></math> isometria da <math display=\"inline\"><mi>f</mi></math>-rekiko baldin eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> betetzen bada beti; hori, matrize bidez, honela idazten da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>H</mi><mi>T</mi></msup><mi>A</mi><mi>H</mi><mo>=</mo><mi>A</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Berdintza osagaiz osagai berresten da (SymPy-z egiaztatua), beraz <math display=\"inline\"><mi>h</mi></math>-k <math display=\"inline\"><mi>f</mi></math> biderketa eskalarra <strong>gordetzen du</strong>: isometria da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Gram-Schmidt-en bidezko oinarri ortonormala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>e</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>e</mi><mn>2</mn></msub></math> jada <math display=\"inline\"><mi>f</mi></math>-ortonormalak dira, zeren <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><msub><mi>e</mi><mn>3</mn></msub></math> ortogonalizatuz (<math display=\"inline\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math> bektore berria):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mi>e</mi><mn>3</mn></msub><mo>−</mo><mfrac><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>3</mn></msub><mo>,</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><msub><mi>e</mi><mn>1</mn></msub><mo>−</mo><mfrac><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>3</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><msub><mi>e</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>0</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> denez, <math display=\"inline\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math> jada normalizatuta dago. Beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren oinarri ortonormala da <math display=\"inline\"><mi>f</mi></math>-rekiko. Oinarri horretan <math display=\"inline\"><mi>h</mi></math>-ri elkartutako matrizea <strong>ortogonala</strong> da, hain zuzen <math display=\"inline\"><mi>h</mi></math> isometria delako."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>ALGEBRA_ENE2013_0042</code>, IMG_2026_07_28_02_16_46S, 82-83 orriak; ziurrenik unibertsitateko materiala). Kalkulu guztiak <strong>SymPy-z egiaztatuta</strong>: <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> lehen matrizean (endekatua), <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>1</mn></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn></mrow></math> bigarrenean, <math display=\"inline\"><mrow><msup><mi>H</mi><mi>T</mi></msup><mi>A</mi><mi>H</mi><mo>=</mo><mi>A</mi></mrow></math> zehazki, eta Gram-Schmidt-en <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>). Jatorrizko orrian «copio esto porque sí: no entiendo nada» ohar pertsonala ageri da; hala ere, aplikatutako isometria-definizioa —biderketa eskalarra gordetzea— <strong>zuzena</strong> da. Zuzenketarik ez aplikatu. Ikus <code>koadernoa_algebra2013_alg_0042.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p043_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapen matematikoa (SymPy); kongruentzia, paralelogramoaren legea eta isometriak",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a69",
   "maila": 2,
   "izenburua": "Kongruentzia bidezko diagonalizazioa, paralelogramoaren legea eta isometriak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orri honek hiru gauza biltzen ditu: forma bilineal simetriko baten diagonalizazio <strong>praktikoa</strong> (kongruentziaz eta Cholesky), espazio euklidearren <strong>paralelogramoaren legea</strong>, eta <strong>isometria</strong> baten (matrize ortogonalaren) ariketa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kongruentzia bidezko diagonalizazioa: <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Matrize simetriko bat kongruentziaz diagonalizatzeko, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> matrizean <strong>lerro- eta zutabe-eragiketa simetrikoak</strong> egiten dira: lerro-eragiketa bakoitza (<math display=\"inline\"><mrow><msub><mi>E</mi><mi>i</mi></msub><mo>+</mo><mi>c</mi><msub><mi>E</mi><mi>j</mi></msub></mrow></math>) bere zutabe-parearekin (<math display=\"inline\"><mrow><msub><mi>C</mi><mi>i</mi></msub><mo>+</mo><mi>c</mi><msub><mi>C</mi><mi>j</mi></msub></mrow></math>) batera. Erdiko blokea <math display=\"inline\"><mi>D</mi></math> diagonal bihurtzen da, eta eskuinekoak <math display=\"inline\"><mi>P</mi></math> metatzen du (<math display=\"inline\"><msup><mi>P</mi><mi>T</mi></msup></math> ezkerrean):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Menor nagusiak <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> dira, beraz <strong>sinadura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong> da (positibo bat, negatibo bat, nulu bat: 2. mailako endekatua)."
    },
    {
     "mota": "oharra",
     "titulua": "Cholesky",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Forma <strong>definitu positiboa</strong> bada, algoritmoak <math display=\"inline\"><mrow><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math> lortzen du (pibote guztiak positibo eta normalizatuak), eta hortik <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>: <strong>Cholesky-ren deskonposizioa</strong>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paralelogramoaren legea"
    },
    {
     "mota": "testua",
     "html": "Espazio euklidear batean norma biderkadura eskalarretik dator (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>), eta <strong>paralelogramoaren berdintza</strong> betetzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Froga, biderkadura eskalarra garatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>±</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>±</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "eta biak batzean <math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> gaiak elkar ezeztatzen dira. Berdintza honek biderkadura eskalar batetik datozen normak <strong>ezaugarritzen</strong> ditu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Isometriak: matrize ortogonala (ariketa)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> estandarrean (oinarri kanonikoa ortonormala), <math display=\"inline\"><mi>f</mi></math> <strong>isometria da</strong> baldin eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>B</mi><mi>c</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> matrizea <strong>ortogonala</strong> bada (<math display=\"inline\"><mrow><mi>A</mi><msup><mi>A</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>). Emanda:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emandako bi zutabeak <strong>jada ortonormalak</strong> dira: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>4</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math>. Hirugarren zutabeak oinarri ortonormala osatu behar du, hots <math display=\"inline\"><mrow><mi>±</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz <strong>bi isometria</strong> daude:"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mi>+</mi><mn>1</mn></mrow></math>: <strong>biraketa</strong>; eta\n  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <strong>islapena (biraketa inpropioa)</strong>.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>ALGEBRA_ENE2013_0043</code>, IMG_2026_07_28_02_16_50S, 84-85 orriak; &quot;ÁLGEBRA NEWTON&quot; / Chusa). SymPy-z egiaztatua: kongruentziaren <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (sinadura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), zutabeen ortonormaltasuna, eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Zuzenketarik ez aplikatu. Ikus <code>koadernoa_algebra2013_alg_0043.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p044_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapen matematikoa (SymPy); isometrien ebazpena: giroa eta simetria",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "Isometrien ebazpena: giroa eta simetria <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko orriko ariketaren jarraipena: <math display=\"inline\"><mrow><mi>A</mi><msup><mi>A</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> ebatziz <strong>bi isometria</strong> lortzen dira, eta bakoitza sailkatzen da —bata <strong>giroa</strong>, bestea <strong>simetria</strong>—, ardatza, angelua eta plano finkoa aurkituz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>A</mi><msup><mi>A</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> ebaztea: bi isometria"
    },
    {
     "mota": "testua",
     "html": "Hirugarren zutabearen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> osagaiek <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>9</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>a</mi><mi>b</mi><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mi>c</mi><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mn>9</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mi>c</mi><mo>=</mo><mfrac><mn>2</mn><mn>9</mn></mfrac></mrow></math> betetzen dituzte. Bi soluzio daude:"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <math display=\"inline\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, matrizea <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>\n  (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mi>+</mi><mn>1</mn></mrow></math>: <strong>giroa</strong>); eta\n  <math display=\"inline\"><mrow><msub><mi>f</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <strong>simetria</strong>).\n</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n, jatorria finko uzten duten isometriak <strong>bi klase</strong> hauek dira (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Giroa: ardatza eta angelua"
    },
    {
     "mota": "testua",
     "html": "<strong>Ardatza</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>-en bektore propioen espazioa da (geldi geratzen diren bektoreak), hots <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Angelua</strong> aztarnatik ateratzen da: biraketa batentzat <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Hemen <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>−</mo><mn>1</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>, beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Polinomio karakteristikoak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> faktorizatzen du: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> erroa (ardatza) eta <math display=\"inline\"><msup><mi>e</mi><mrow><mi>±</mi><mi>i</mi><mi>θ</mi></mrow></msup></math> erro konplexu konjugatuak (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>), giro bati dagokion bezala (diskriminantea <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mo>&lt;</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetria: plano finkoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> simetriarako, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>−</mo><mi>I</mi></mrow></math> matrizeak <strong>1 errango</strong> du (lerro guztiak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren proportzionalak), beraz haren nukleoak (espazio finkoak) <strong>2 dimentsio</strong> ditu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>2</mn></msub><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hots, <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> <strong>plano oso baten</strong> islapena da (simetriak plano bat finkatzen du; giroak, aldiz, zuzen bat baino ez —ardatza—)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>ALGEBRA_ENE2013_0044</code>, IMG_2026_07_28_02_16_56S, 86-87 orriak; &quot;ÁLGEBRA NEWTON&quot; / Chusa). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>⇒</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>, ardatza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>−</mo><mi>I</mi></mrow></math> 1 errangokoa (plano finkoa, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>). Zuzenketarik ez aplikatu. Ikus <code>koadernoa_algebra2013_alg_0044.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p045_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapen matematikoa (SymPy); simetriaren diagonalizazioa eta matrize ortogonala",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a71",
   "maila": 2,
   "izenburua": "Simetriaren diagonalizazioa eta <math display=\"inline\"><mi>h</mi></math>-ren matrize ortogonala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orri honek bi haria ixten ditu: alde batetik <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> <strong>simetriaren diagonalizazioa</strong> (islapen gisa), eta bestetik aurreko examen bateko <math display=\"inline\"><mi>h</mi></math> isometriaren <strong>matrizea oinarri ortonormal batean ortogonala</strong> dela frogatzea."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Isometria baten balio propioak: <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>λ</mi></math> isometria baten balio propioa bada (<math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> bektore propioarekin), orduan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>, beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math>, hots"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> simetriarako, balio propioak <math display=\"inline\"><mn>1</mn></math> (plano finkoa, 2 anizkoiztasuna) eta <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (1 anizkoiztasuna) dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> simetriaren diagonalizazioa: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> autoadjuntua denez, balio propio desberdinen espazio propioak <strong>ortogonalak</strong> dira, beraz <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>. <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> izanik, osagarri ortogonala"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri propioan, <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> diagonala da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><msup><mi>β</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hots, <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> <strong>islapena</strong> da <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> planoarekiko (balio propioa <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> norabide normalean)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>h</mi></math>-ren matrizea <math display=\"inline\"><mi>β</mi></math> oinarrian: ortogonala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>w</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (<math display=\"inline\"><mi>f</mi></math>-rekiko oinarri ortonormala) izanik, zutabeak <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren <math display=\"inline\"><mi>β</mi></math>-koordenatuak dira: <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>w</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>w</mi><mn>1</mn></msub></mrow></math>; hortaz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><msub><mi>M</mi><mi>β</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>B</mi><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> denez (zeinu-permutazio matrizea), <math display=\"inline\"><mi>B</mi></math> <strong>ortogonala</strong> da, eta horrek <math display=\"inline\"><mi>h</mi></math> <strong>isometria</strong> dela berresten du. Ortogonaltasuna hiru modu baliokidez froga daiteke: <math display=\"inline\"><mrow><mi>B</mi><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, edo zutabe ortonormalak."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>ALGEBRA_ENE2013_0045</code>, IMG_2026_07_28_02_17_01S, 88-89 orriak; orri <strong>mixtoa</strong>: Chusa + unibertsitatea). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⟂</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⟂</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (beraz <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>), eta <math display=\"inline\"><mrow><mi>B</mi><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>. Zuzenketarik ez aplikatu. Ikus <code>koadernoa_algebra2013_alg_0045.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p046_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; geometria afina: posizio erlatiboa eta ebakiduraren teorema",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a72",
   "maila": 1,
   "izenburua": "Aplikazio linealaren matrizea oinarri berrietan: <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aplikazio lineal baten matrizea <strong>oinarri desberdinetan</strong> nola aldatzen den: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, oinarri kanonikoetan <math display=\"inline\"><mi>A</mi></math> matrizea izanik, oinarri berrietako <math display=\"inline\"><mi>B</mi></math> matrizea <strong>baliokidetzaz</strong> lortzen da, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>."
    }
   ]
  },
  {
   "id": "a73",
   "maila": 2,
   "izenburua": "Problema eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aplikazioaren matrizea, oinarri kanonikoetan (zutabe-notazioan):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>×</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-n <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> eta <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>-n <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> oinarri berrietako matrizea <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> da, <math display=\"inline\"><mi>Q</mi></math> <strong>domeinuko</strong> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>) oinarri-aldaketa eta <math display=\"inline\"><mi>P</mi></math> <strong>kodomeinuko</strong> (<math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>) oinarri-aldaketa izanik. <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> <strong>baliokideak</strong> dira (errango bera); domeinua eta kodomeinua berdinak balira (endomorfismoa) eta oinarri bera bi aldeetan, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>Q</mi></mrow></math> <strong>antzekoak</strong> lirateke."
    },
    {
     "mota": "oharra",
     "titulua": "Matrizeak koordenatuak eramaten ditu",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math>-k <strong>bektoreak</strong> eramaten ditu; <math display=\"inline\"><mi>A</mi></math> matrizeak, ordea, <strong>koordenatuak</strong> (finkatutako oinarriekiko). Horregatik oinarri-aldaketa <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> bihurtzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a74",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mi>Q</mi></math> eta <math display=\"inline\"><mi>P</mi></math> oinarri-aldaketen matrizeak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>Q</mi></math>-ren zutabeak <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren oinarri berria dira, kanonikoetan (goi-triangeluar unitarioa):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>-ren oinarri berria <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-ren bektoreak <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-n <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira, hots <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Koordenatuen aldaketa <math display=\"inline\"><mi>β</mi></math>-tik <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-ra <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>M</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msup><mi>M</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mi>M</mi><mo>=</mo><msub><mi>I</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>ALGEBRA_ENE2013_0058</code>, IMG_2026_07_28_02_18_17S, 114-115 orriak; &quot;ÁLGEBRA LEO&quot; / Landeta). SymPy-z egiaztatua: <math display=\"inline\"><mi>Q</mi></math>, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>M</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>P</mi><mi>M</mi><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>. Produktua <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> eta bektore baten irudia hurrengo orrian. Zuzenketarik ez aplikatu. Ikus <code>koadernoa_algebra2013_alg_0058.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p059_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; B=PAQ produktua eta bektore baten irudia",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a75",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> produktua eta bektore baten irudia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko problemaren jarraipena: <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> produktua egiten da eta, eranskin gisa, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektorearen irudia kalkulatzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> produktua"
    },
    {
     "mota": "testua",
     "html": "Lehenik <math display=\"inline\"><mrow><mi>A</mi><mi>Q</mi></mrow></math> (zutabeak <math display=\"inline\"><mi>A</mi></math>-ren zutabeen batura metatuak dira):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gero <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mi>P</mi></math> kalkulatzeko, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarri zaharra <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-n adierazten da: <math display=\"inline\"><mrow><mn>1</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hots <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektorearen irudia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren koordenatuak <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren oinarri berrian <math display=\"inline\"><mrow><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira. Irudia <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-n:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>23</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Egiaztapena <strong>bide zuzenetik</strong>: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>20</mn><mo>,</mo><mn>28</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira irudiaren koordenatuak <math display=\"inline\"><mi>β</mi></math>-n, hots <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-ra pasatuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>23</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "bi bideek <strong>bat egiten dute</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), <math display=\"inline\"><mi>B</mi></math> produktua berretsiz."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>ALGEBRA_ENE2013_0059</code>, IMG_2026_07_28_02_18_22S, 116-117 orriak; &quot;ÁLGEBRA LEO&quot; / Landeta). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mi>A</mi><mi>Q</mi></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>, koordenatuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta irudia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (bi bidez). Jatorrizko paperean <math display=\"inline\"><mi>B</mi></math>-ren zatiki txikiak irakurtzeko zailak dira; hemen SymPy-z berretsitako <math display=\"inline\"><mi>B</mi></math> jasotzen da. Ikus <code>koadernoa_algebra2013_alg_0059.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p060_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; irudia bi bidetatik + hiru puntu kolineal (zuzena)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "Irudiaren egiaztapena bi bidetatik",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orri mixtoa: alde batetik <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> problemaren <strong>itxiera</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren irudia bi bidetatik, Leo), eta bestetik hiru puntu <strong>kolinealek</strong> sortutako <strong>zuzena</strong> (Chusa)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Irudia bi bidetatik (Leo)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren irudia bi eratara kalkulatzen da, eta <strong>bat egin behar dute</strong>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Bide zuzena</strong> (<math display=\"inline\"><mi>A</mi></math>, koordenatu kanonikoak): <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>20</mn><mo>,</mo><mn>28</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hots <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.",
      "<strong><math display=\"inline\"><mi>B</mi></math>-ren bidez</strong> (koordenatu berriak): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren koordenatuak <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub></math>-n <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira, eta <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-tik itzuliz, <math display=\"inline\"><mrow><mn>23</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Bi bideek <strong>emaitza bera</strong> ematen dute: <math display=\"inline\"><mrow><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketa (kalkulu-akatsak jatorrian)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko orrian ikasleak zenbaki-akats batzuk egiten ditu —<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>12</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (zuzena <math display=\"inline\"><mn>20</mn></math>; <math display=\"inline\"><mrow><mn>20</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>8</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>B</mi><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>19</mn><mo>,</mo><mi>−</mi><mn>9</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (zuzena <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)—, eta <strong>berak antzematen du inkoherentzia</strong> («berdina izan beharko litzateke»). <strong>Balio zuzena <math display=\"inline\"><mrow><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-n <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>, SymPy-z egiaztatua. Metodoaren egitura zuzena da; akatsak aritmetikoak baino ez."
      }
     ]
    }
   ]
  },
  {
   "id": "a77",
   "maila": 2,
   "izenburua": "Aplikazio lineal baten nukleoa eta irudia: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aplikazio lineal baten <strong>nukleoa</strong> eta <strong>irudia</strong> kalkulatzen dira, eta <strong>dimentsioen teorema</strong> (rango-nulitatea) egiaztatzen. Izan bedi"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nukleoa (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> izateko, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>4</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math>. Beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><mi>−</mi><msub><mi>a</mi><mn>4</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Irudia (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math> <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> osoan <strong>askatasunez</strong> higitzen direnez, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>s</mi><mi>x</mi><mo>+</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> oinarrian <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsioen teorema eta izaera"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>4</mn><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> <strong>ez da injektiboa</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>) eta <strong>ez da surjektiboa</strong> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>-ren azpiespazio propioa da, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>&lt;</mo><mn>3</mn></mrow></math>; <math display=\"inline\"><mn>1</mn></math> norabidea falta da)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>ALGEBRA_ENE2013_0064</code>, IMG_2026_07_28_02_18_50S, 126-127 orriak; &quot;ÁLGEBRA LEO&quot; / Landeta). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, eta <math display=\"inline\"><mrow><mn>4</mn><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math>. Ez injektiboa, ez surjektiboa. Zuzenketarik ez aplikatu. Ikus <code>koadernoa_algebra2013_alg_0064.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p065_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; bi zuzenen posizio erlatiboa R³-n (gurutzatzea, dim S+T=3)",
     "hizkuntza": "eu"
    }
   ]
  }
 ]
};
