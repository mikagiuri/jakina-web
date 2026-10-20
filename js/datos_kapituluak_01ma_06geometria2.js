/* JAKINA · kapitulua «B2 - Geometria eta koadernoak - IV» (01ma_06geometria2), desde edicion2/kapituluak/01ma_06geometria2/01ma_06geometria2.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01ma_06geometria2"] = {
 "gakoa": "01ma_06geometria2",
 "titulua": "JAKINA - B2 - Geometria eta koadernoak - IV",
 "azala": "B2 - Geometria eta koadernoak - IV",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/01ma_06geometria2/01ma_06geometria2.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "koadernoa_iraide_p110_mk.typ",
   "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "8. GAIA: Geometria euklidearra",
   "blokeak": []
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "8.1 <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>-ko egitura afin euklidearra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> espazio afinean biderkadura eskalar estandarra dugu; horrekin, distantzia euklidearra:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Distantzia euklidearra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>,</mo></mrow></math> hots, bi puntu lotzen dituen bektorearen norma (modulua). Propietateak (<math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi><mo>,</mo><mi>r</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>): <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>p</mi><mo>=</mo><mi>q</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iv) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(iv) desberdintza triangeluarra Minkowski-ren desberdintzatik dator:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>r</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>≤</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>r</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Pitagoras-en teorema (puntuen hizkuntzan)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Pitagoras",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi><mo>,</mo><mi>n</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> izanik, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⟂</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> (hau da, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math>) bada: <math display=\"block\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> espazio afina distantzia euklidearraz hornitzen dugunean, <strong>espazio afin euklidear</strong> deitzen zaio."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "8.2 Perpendikulartasuna",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Perpendikulartasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>-ren azpiespazio afinak <strong>perpendikularrak (elkarzutak)</strong> dira baldin haien norabideak <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> ortogonalak badira (<math display=\"inline\"><mrow><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>∀</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math>) eta elkar ebakitzen badute."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eduki bera gaztelaniaz jasota dago CHUSA koadernoan (p209 eta hurrengoak), gurutze-egiaztapen gisa. Pitagoras-en froga: <math display=\"inline\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>2</mn><mover><mrow><mi>p</mi><mi>n</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></mrow></math>; ortogonaltasunez gurutze-gaia deuseztatzen da. Jatorrizkoan gaztelania eta euskera nahasten dituzten esaldi batzuk OCR/eskuizkribu txarrekoak dira. Amaierako bi marrazkiek (&quot;EZ&quot;/&quot;BAI&quot;) perpendikulartasuna ilustratzen dute."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p162_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Bertsorea (bektore unitarioa)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Bertsorea</strong> modulua <strong>bat</strong> duen bektorea da (bektore unitarioa). Edozein bektoretatik haren <strong>norabideko</strong> bertsorea lortzen da, moduluaz zatituz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zein bektorek du modulua bat?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>1</mn></mrow></math> betetzen duenak. <strong>Oinarri kanonikoaren</strong> bektoreek (<math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) modulua bat dute."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bertsorearen formula"
    },
    {
     "mota": "testua",
     "html": "Bektore baten norabideko bertsorea, moduluaz zatituz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mfrac><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mfrac><mo>=</mo><mi>λ</mi><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">eskalarra</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mrow><msup><mn>0</mn><mn>2</mn></msup><mo>+</mo><msup><mn>4</mn><mn>2</mn></msup><mo>+</mo><msup><mn>7</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mn>65</mn></msqrt><mo>≈</mo><mn>8.06</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mfrac><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><msqrt><mn>65</mn></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>65</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>u</mi><mo accent=\"true\">→</mo></mover></math> <math display=\"inline\"><mover><mi>a</mi><mo accent=\"true\">→</mo></mover></math>-ren norabideko bektore unitarioa da."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orri soltea (<code>LANDETA1_0118</code>, apaisatua, zenbakirik gabe; <code>0117</code>ren jarraipena). Egiaztatua: bertsorearen formula <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mrow></math>, oinarri kanonikoaren moduluak <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math>, eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mn>65</mn></msqrt><mo>≈</mo><mn>8.06</mn></mrow></math> (jatorrian <math display=\"inline\"><mn>8.065</mn></math>; biribiltze-alde txikia, <math display=\"inline\"><mrow><msqrt><mn>65</mn></msqrt><mo>=</mo><mn>8.062</mn></mrow></math>). Erregistroak &quot;fisica_general&quot; dio; edukia <strong>bektoreak/aljebra</strong> da. Zuzenketa handirik ez. Ikus <code>koadernoa_landeta1_alg_bertsorea.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_bertsorea_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; bertsorea (bektore unitarioa) u=a/norm(a), adibidea a=(0,4,7) (orri soltea)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Perpendikulartasuna: ebakidura eta proiekzioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Oharra.</strong> <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math> perpendikularrak badira, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (bektore ez-nulu bat ezin da bere buruarekiko ortogonala izan)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposizioa 8.4"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>-ren azpiespazio afinak badira eta <strong>perpendikularrak</strong>, orduan <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> <strong>puntu bakarra</strong> da."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Perpendikularrak direnez, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math> (ikus behean), beraz <math display=\"inline\"><mrow><mo>∃</mo><msub><mi>p</mi><mn>0</mn></msub><mo>∈</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>. Gainera <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, hortaz: <math display=\"block\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Osagarri ortogonala eta ebakidura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>W</mi><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mo>∀</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> izanik, <math display=\"inline\"><mrow><mi>W</mi><mo>⟂</mo><msup><mi>W</mi><mo>⟂</mo></msup></mrow></math>. <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><msup><mi>W</mi><mo>⟂</mo></msup></mrow></math> azpiespazioek <strong>beti</strong> ebakitzen dute puntu batean:"
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demagun absurdura eramateko <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>. Grassmann-ez (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi>W</mi><mo>⟂</mo></msup><mo>=</mo><mi>n</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>W</mi><mo>∩</mo><msup><mi>W</mi><mo>⟂</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">dim</mi><mi>W</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>.</mi></mrow></math> Baina <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> denez, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>n</mi></mrow></math>; <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>&gt;</mo><mi>n</mi></mrow></math> kontraesana da. Beraz <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proiekzio ortogonala"
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>S</mi></math> azpiespazio afina eta <math display=\"inline\"><mi>p</mi></math> puntua emanik, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> <math display=\"inline\"><mi>S</mi></math>-ri perpendikularra da eta <math display=\"inline\"><mi>p</mi></math>-tik igarotzen den <strong>zuzen bakarra</strong>. 8.4 proposizioaz, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> puntu bakarra da: hori <math display=\"inline\"><mi>p</mi></math>-ren <strong>proiekzio ortogonala</strong> da <math display=\"inline\"><mi>S</mi></math>-ren gainean."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ezkerreko &quot;<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>+</mo><mi>n</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>&quot; pausoa <math display=\"inline\"><mi>n</mi></math>-ra sinplifikatzen da, eta Grassmann-en &quot;<math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math>&quot; gehituz <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> ematen du (jatorrizko disposizioa nahasia da). &quot;ISEMPRE&quot; (&quot;siempre&quot;), &quot;ERPIKO&quot; eta &quot;<math display=\"inline\"><msub><mi>x</mi><mi>p</mi></msub></math>&quot; notazioak OCR/ eskuizkribu txarrekoak dira."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p168_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Osagarri ortogonala: batura zuzena eta dimentsio-muga (Chusa)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Biderkadura eskalarrak induzitzen duen distantziaren forma esplizitua (barne-biderkaduraren jatorria agerian):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> , </mtext><mspace width=\"0.333em\"></mspace></mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Osagarri ortogonala eta batura zuzena"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-ren azpiespazio bektoriala bada, existitzen da <math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> osagarri ortogonala, non <math display=\"block\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊕</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>∀</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perpendikularren dimentsio-muga"
    },
    {
     "mota": "testua",
     "html": "Azpiespazio afin perpendikularretarako (perpendikulartasunaren definizioa 8.2-n), ondorioak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mi>S</mi><mn>3</mn></msub><mo>=</mo><mi>a</mi><mo>+</mo><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup></mrow></math> <strong>beti</strong> da <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>-en perpendikularra (<math display=\"inline\"><mi>a</mi></math> puntu bera partekatzen dute).",
      "<math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>⊆</mo><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup></mrow></math> bada, <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> ere <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>-en perpendikularra da."
     ]
    },
    {
     "mota": "testua",
     "html": "Azkenik, <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊕</mo><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> denez, perpendikularrak badira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>≤</mo><mi>n</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Osagarri ortogonalaren batura zuzena eta perpendikularren dimentsio-muga CHUSA koadernotik (p210) jasoak, IRAIDEren espinari gehitutako osagarri gisa; definizio eta distantzia-propietate errepikatuak (IRAIDEn daudenak) kendu dira."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p210_mk.typ",
     "xehetasuna": "osagarri ortogonala (batura zuzena) eta perpendikularren dim-muga (errepikapenak kenduta)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 1,
   "izenburua": "Distantzia azpiespazioetara; proiekzio ortogonala",
   "blokeak": []
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Perpendikulartasunaren gogoratzea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>⟂</mo><mi>T</mi><mo>⇔</mo><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, kasu horretan <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Puntu batetik, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> <math display=\"inline\"><mi>S</mi></math>-ri perpendikularra da, eta <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> <math display=\"inline\"><mi>p</mi></math>-ren <strong>proiekzio ortogonala</strong> da <math display=\"inline\"><mi>S</mi></math>-ren gainean."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "8.3 Azpiespazioen arteko distantzia",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Distantzia (def. 9.6)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> bi azpimultzoren arteko distantzia: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>a</mi><mo>∈</mo><mi>A</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> Bereziki, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> denean, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Oharrak 8.7.</strong> (1) <math display=\"inline\"><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>≠</mo><mi>∅</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. (2) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Proposizioa 8.8",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>S</mi></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>-ren azpiespazio afina eta <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> izanik: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> non <math display=\"inline\"><msub><mi>π</mi><mi>p</mi></msub></math> <math display=\"inline\"><mi>p</mi></math>-ren <math display=\"inline\"><mi>S</mi></math>-rako proiekzio ortogonala den."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1) <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> hartu. (2) 8.4 proposizioaz, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> puntu bakarra da. (3) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>q</mi><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> infimoa <math display=\"inline\"><msub><mi>π</mi><mi>p</mi></msub></math> puntuan lortzen da (perpendikularraren oina), beraz <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Proposizioa 8.8 zuzenean dator 8.4-tik (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>-k <math display=\"inline\"><mi>S</mi></math> puntu bakarrean ebakitzen du). Infimoa <math display=\"inline\"><msub><mi>π</mi><mi>p</mi></msub></math>-n lortzen dela (eta ez <math display=\"inline\"><mi>S</mi></math>-ko beste puntu batean) Pitagoras-en teoremaz frogatzen da; azken pauso hori hurrengo orrialdean osatzen da. Jatorrizkoak hitz asko OCR/eskuizkribu txarrekoak ditu (&quot;GOOGEIK&quot; = azpiespazio afinak, &quot;ALGISUAK&quot;, &quot;EZ DA ERROREARIK&quot;...)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p170_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "8.8-ren froga; hiperplano baterako distantzia (8.10)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "8.8 proposizioaren froga (Pitagoras)"
    },
    {
     "mota": "testua",
     "html": "Helburua: <math display=\"inline\"><mrow><mo>∀</mo><mi>q</mi><mo>∈</mo><mi>S</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi></mrow></math> edozein. <math display=\"inline\"><mrow><msub><mi>π</mi><mi>p</mi></msub><mo>→</mo><mi>p</mi><mo>∈</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>π</mi><mi>p</mi></msub><mo>→</mo><mi>q</mi><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> direnez, <math display=\"inline\"><mrow><msub><mi>π</mi><mi>p</mi></msub><mo>→</mo><mi>p</mi><mo>⟂</mo><msub><mi>π</mi><mi>p</mi></msub><mo>→</mo><mi>q</mi></mrow></math>. Pitagoras-en teoremaz: <math display=\"block\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>π</mi><mi>p</mi></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>≥</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> eta erro karratua hartuz (distantziak ez-negatiboak), <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mi>q</mi></math> ororako. Beraz <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Oharra 8.9.</strong> Erreferentzia-sistema afin baten oinarria <strong>ortonormala</strong> denean, <strong>erreferentzia-sistema ortonormala</strong> deitzen zaio."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Korolarioa 8.10: distantzia hiperplano batera"
    },
    {
     "mota": "ingurunea",
     "izena": "Korolarioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> eta <math display=\"inline\"><mi>W</mi></math> hiperplano afina izanik, <math display=\"inline\"><mi>E</mi></math> erreferentzia-sistema ortonormalean <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mi>W</mi></math>-ren ekuazio inplizitua <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>A</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> badira: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>A</mi><mi>n</mi></msub><msub><mi>p</mi><mi>n</mi></msub><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msubsup><mi>A</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mi>…</mi><mo>+</mo><msubsup><mi>A</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> hiperplanoa da (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>2</mn><mo>=</mo><mn>3</mn><mo>−</mo><mn>1</mn></mrow></math>); ekuazio inplizitua <math display=\"inline\"><msub><mi>E</mi><mi>k</mi></msub></math>-n: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>. Formula aplikatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>1</mn><mo>+</mo><mn>0</mn><mo>+</mo><mn>0</mn><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Adibidean, emaitza (<math display=\"inline\"><mrow><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>3</mn></mrow></math>) <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>E</mi><mi>k</mi></msub></msub></mrow></math> balioarekin dator bat (jatorrizkoak garapenean darabilena); enuntziatuko &quot;<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;-rekin <math display=\"inline\"><msqrt><mn>3</mn></msqrt></math> litzateke. Irakurketa-desberdintasuna dago (agian <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mi>S</mi></math>-ko puntu bat da). &quot;<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>&quot; idazkerak &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>&quot; esan nahi du. Formularen froga Castillo/Llorente liburuan dago (302. orr.), egileak gorriz adierazia."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p172_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Bi azpiespazio paraleloren arteko distantzia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Gogoratuz: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>a</mi><mo>∈</mo><mi>A</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, eta puntu batetik azpiespazio baterako <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><msub><mi>π</mi><mi>p</mi></msub></math> = <math display=\"inline\"><mi>p</mi></math>-ren proiekzio ortogonala <math display=\"inline\"><mi>S</mi></math>-ren gainean)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposizioa"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez <math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>-ren azpiespazio afinak, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>. Izan bedi <math display=\"inline\"><mi>P</mi></math> azpiespazio bat, <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math>-ri perpendikularra, <math display=\"inline\"><mrow><mi>P</mi><mo>∩</mo><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>P</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-rekin. Orduan: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>s</mi><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>∈</mo><mi>T</mi></mrow></math> direnez, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Alderantzizko desberdintza frogatzeko, izan bitez <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>T</mi></mrow></math> edozein. <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (paraleloak) denez, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><mi>S</mi></mrow></math> definitu daiteke <math display=\"inline\"><mrow><mover><mrow><mi>s</mi><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>t</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> betez. Orduan <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (norabide komuna) eta <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⟂</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>; Pitagoras-en teoremaz: <math display=\"block\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>≥</mo><msup><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> (<math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, translazio paraleloagatik). Beraz <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi></mrow></math> ororako, eta hortik <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Bi desberdintzak bateratuz, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Emaitza klasikoa da: bi azpiespazio afin paralelo eta disjuntu arteko distantzia perpendikular komunaren oinen (<math display=\"inline\"><mrow><mi>s</mi><mo>,</mo><mi>t</mi></mrow></math>) arteko distantzia da. Jatorrizkoak pauso batzuk trinkotzen ditu (bereziki <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> translazioz). Amaierako gorriko &quot;RIPÓSOLO&quot; (&quot;¡RESUELTO!&quot;) frogapenaren itxiera da. &quot;<math display=\"inline\"><msub><mover><mi>t</mi><mo accent=\"true\">→</mo></mover><mi>q</mi></msub></math>&quot; eta &quot;<math display=\"inline\"><mover><mi>p</mi><mo accent=\"true\">¯</mo></mover></math>&quot; notazioak OCR txarrekoak dira."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p174_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Azpiespazioen arteko distantzia: kasu paraleloa eta orokorra",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposizioa (kasu paraleloa)"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez <math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>-ko bi azpiespazio afin <strong>paralelo</strong>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>. Orduan <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi></mrow></math> edozein izanik."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paraleloak eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math> direnez, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>. Bi kasu:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>T</mi></mrow></math>, beraz <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (edozein <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi><mo>⊆</mo><mi>T</mi></mrow></math>).",
        "<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> eraikitzen da; <math display=\"inline\"><mi>R</mi></math> <math display=\"inline\"><mi>T</mi></math>-ri perpendikularra da, eta <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>-tik <math display=\"inline\"><mrow><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>⊆</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>, beraz <math display=\"inline\"><mi>R</mi></math> <math display=\"inline\"><mi>S</mi></math>-ri ere perpendikularra. <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>r</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> izanik, aurreko proposizioaz <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>r</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msub><mi>r</mi><mi>p</mi></msub></math> = <math display=\"inline\"><mi>p</mi></math>-ren proiekzio ortogonala <math display=\"inline\"><mi>T</mi></math>-n)."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposizioa (kasu orokorra)"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (ez nahitaez paraleloak), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>. Izan bedi <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>, <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math>-ri perpendikularra den azpiespazio <strong>txikiena</strong>. Orduan: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>∈</mo><mi>S</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edozein izanik. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bigarren proposizioa lehenaren orokortzea da: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math> <math display=\"inline\"><mi>S</mi></math>-ri eta <math display=\"inline\"><mi>T</mi></math>-ri perpendikularra da (<math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></math> bi norabideen osagarri ortogonala baita), eta kasu paraleloko &quot;zubi&quot; perpendikularraren papera betetzen du. Bigarrenaren froga osoa ez dago irudi honetan (enuntziatua soilik). &quot;ARGISTATUA&quot;, &quot;OROKORREAN&quot; notazioak eskuizkribu txarrekoak dira."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p176_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Kasu orokorraren froga; 7. ariketa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kasu orokorraren froga (laburpena)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math> (<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>). <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math>-ri perpendikularra den <math display=\"inline\"><mi>P</mi></math> azpiespazioa eraikitzen da, <math display=\"inline\"><mrow><mi>P</mi><mo>∩</mo><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>P</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-rekin; orduan <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math> hartuz, <math display=\"inline\"><mi>R</mi></math> eta <math display=\"inline\"><mi>S</mi></math> paraleloak dira (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>R</mi></mrow></math>), beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>p</mi><mo>∈</mo><mi>S</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "7. ariketa: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-n, <math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Prozedura hiru pausotan: (1) <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>; (2) <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; (3) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>1) <math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> eta <math display=\"inline\"><mi>T</mi></math>.</strong> <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Ekuazioen bektore normalak <math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> sortzen dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mn>4</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> ekuazio homogeneoen bektore normalek sortzen dute (aljebra linealaren emaitza estandarra); egiaztatua dago (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> linealki independenteak, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>). <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> kalkulua hurrengo orrialdean jarraitzen da. Ezkerreko frogapena oso trinkoa da jatorrizkoan; &quot;<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>&quot; idazkerak <math display=\"inline\"><mo>⟂</mo></math> galtzen du (aurreko orrialdean <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></math>)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p178_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "7. eta 8. ariketak: distantziak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "7. ariketaren itxiera"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math>-ren ekuazio inplizituak: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> ebatziz (lau ekuazio):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>π</mi><mi>p</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Distantzia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>π</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><msub><mi>π</mi><mi>p</mi></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mn>5</mn></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "8. ariketa: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (planoa) eta <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>3</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (zuzena). Parametrizatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⊆</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), beraz <math display=\"inline\"><mi>T</mi></math> zuzena <math display=\"inline\"><mi>S</mi></math> planoari <strong>paraleloa</strong> da. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mi>S</mi></mrow></math> denez (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>−</mo><mn>5</mn><mo>+</mo><mn>0</mn><mo>=</mo><mi>−</mi><mn>6</mn><mo>≠</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>: <strong>paralelo puruak</strong>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> edozein <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>T</mi></mrow></math>-rako. <math display=\"inline\"><mi>S</mi></math> hiperplanoa denez, 8.10 korolarioaren formula:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>−</mi><mn>1</mn><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>6</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>=</mo><msqrt><mn>6</mn></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulu guztiak egiaztatuak daude (<math display=\"inline\"><mrow><msub><mi>π</mi><mi>p</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mn>5</mn></msqrt></mrow></math>; <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mn>6</mn></msqrt></mrow></math>). &quot;S NIRPALANOA&quot; ziurrenik &quot;S HIPERPLANOA&quot; da (hiperplano-formula aplikatzen baita). &quot;<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mn>2</mn></mrow></math>&quot;-ko &quot;<math display=\"inline\"><mrow><mi>⋅</mi><mn>2</mn></mrow></math>&quot; parametroaren eskala- ohar bat da, ez ekuazioaren zati."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p180_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "11. ariketa: <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mi>a</mi></math> parametroarekin)",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n, <math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>7</mn><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>T</mi><mi>a</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mi>a</mi></math>-ren arabera."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> zuzena: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi kasu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math>-ren norabidea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> finkoa da; oinarri-puntua bakarrik aldatzen da <math display=\"inline\"><mi>a</mi></math>-rekin. Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munder><munder><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ⓐ</mtext></mrow></munder><mo>→</mo><mi>S</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>T</mi><mi>a</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> puntu batean ebaki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><munder><munder><mrow><mi>a</mi><mo>≠</mo><mi>−</mi><mn>1</mn></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ⓑ</mtext></mrow></munder><mo>→</mo><mi>S</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>T</mi><mi>a</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> paraleloak. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mi>−</mi><mn>1</mn></mrow></math>: prozedura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math>-ri perpendikularra eta <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math>-ri paraleloa den <math display=\"inline\"><mi>R</mi></math> azpiespazioa eraikitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Haren ekuazio inplizitua determinantez (<math display=\"inline\"><mover><mrow><mi>p</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover></math>, <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></math>, <math display=\"inline\"><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></math> zutabetzat):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi><mo>−</mo><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>5</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orrialde honek transkripzio-desberdintasun batzuk ditu: <math display=\"inline\"><mi>S</mi></math>-ren lehen ekuazioa &quot;<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>b</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn></mrow></math>&quot; gisa agertzen da (ziurrenik &quot;<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>6</mn></mrow></math>&quot;); oinarri-puntuak (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) ez ditu ekuazioak zehazki betetzen; eta matrizearen <math display=\"inline\"><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></math> zutabea &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; da (ez <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mi>R</mi></math>-ren definizioan bezala). Determinantea garatuz <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>5</mn><mo>=</mo><mn>0</mn></mrow></math> lortzen da (bi metodoz egiaztatua); jatorrizkoak &quot;<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>+</mo><mn>5</mn><mo>=</mo><mn>0</mn></mrow></math>&quot; idazten du, <math display=\"inline\"><mi>z</mi></math>-ren zeinuan desberdina (errenkaden ordena edo egilearen akatsa)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p197_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "6. ariketa: <math display=\"inline\"><mi>S</mi></math>-ri perpendikularra den zuzena",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n, <math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mi>O</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntutik igaro eta <math display=\"inline\"><mi>S</mi></math>-ri perpendikularra den zuzenaren ekuazioa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> parametrizatuz: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, hots <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perpendikulartasunaren definizioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> zuzenak <math display=\"inline\"><mi>S</mi></math>-ri perpendikularra izateko bi baldintza:"
    },
    {
     "mota": "testua",
     "html": "<strong>a) <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>:</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>a</mi><mo>−</mo><mi>b</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><mn>2</mn><mi>a</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>b) <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>:</strong> <math display=\"inline\"><mrow><mover><mrow><msub><mi>s</mi><mn>0</mn></msub><msub><mi>t</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, determinantez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>c</mi><mo>−</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>a</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>c</mi><mo>=</mo><mn>5</mn><mi>a</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>b</mi><mo>=</mo><mn>2</mn><mi>a</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -rekin</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta bilatutako zuzena:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkuluak egiaztatuak daude: <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>2</mn><mi>a</mi></mrow></math> (a atala) eta <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>5</mn><mi>a</mi></mrow></math> (b atala, determinantea <math display=\"inline\"><mrow><mi>c</mi><mo>−</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> jatorrizkoan behin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta gero <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gisa agertzen da; biek azpiespazio bera sortzen dute. Amaierako <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> determinanteen blokea (jatorrizkoan &quot;<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>&quot;, &quot;<math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>&quot;) oso irakurketa zailekoa da eta ez da hemen jaso; <math display=\"inline\"><mi>T</mi></math>-ren norabidea (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) fidagarria da."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p198_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "6. ariketaren 2. era; 12. ariketa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "6. ariketa: 2. era (plano baten bidez)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> da, ekuazio inplizituekin <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>5</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Bigarren era:</strong> <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> plano perpendikularra. <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; ekuazioen normalek <math display=\"inline\"><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> sortzen dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>S</mi></mrow></math> ebatziz (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>5</mn><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo>∩</mo><mi>R</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>∝</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: lehen erako <math display=\"inline\"><mi>T</mi></math> bera lortzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12. ariketa (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-n, <math display=\"inline\"><mrow><mi>P</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>=</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> askea</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntutik igaro eta <math display=\"inline\"><mi>P</mi></math> zein <math display=\"inline\"><mi>T</mi></math>-ri perpendikularra den zuzena."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Parametrizatuz (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>P</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "6. ariketaren bi erek <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> bera ematen dute; <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egiaztatua. <math display=\"inline\"><mi>T</mi></math>-ren azken lerroan &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; vs &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; oinarri-puntuen inkoherentzia dago, baina ekuazio inplizituak (<math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>5</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) bat datoz. 12. ariketan <math display=\"inline\"><mi>P</mi></math>-ren oinarri-puntuak (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) ez du &quot;<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>t</mi></mrow></math>&quot; zehazki betetzen (<math display=\"inline\"><mrow><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>); irakurketa-desberdintasuna. Ebazpena hurrengo orrialdean jarraitzen da."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p200_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "13. ariketa (jarr.): <math display=\"inline\"><mi>S</mi></math> perpendikularra bilatzea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>T</mi></math>-ri perpendikularra den <math display=\"inline\"><mi>S</mi></math> azpiespazioa bilatzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. era: osagarri ortogonalen ebakidura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> direnez, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>∩</mo><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⇒</mo><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>); <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⇒</mo><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></math>). Ebakidura:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>∩</mo><msup><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. era: perpendikulartasun zuzena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> ezarriz (biderkadura eskalarrak nuluak):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mi>a</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mi>−</mi><mi>c</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>⇒</mo><mi>c</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>−</mi><mi>a</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>−</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, 1. erarekin bat."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii)-(iii) Kokapena eta distantziak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>P</mi></math> gurutzatzen dira; <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math> ere bai. (iii) atalean <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi erek <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> ematen dute (gurutze- egiaztapena). Hala ere, bi metodoek <math display=\"inline\"><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover></math>-ren ekuazio-normalen zeinu desberdinak darabiltzate (<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> vs <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); horregatik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren perpendikulartasun-egiaztapenak zeinu-koherentzia eskatzen du metodo bakoitzean. (ii)-ko &quot;gurutzatzen dira&quot; eta (iii)-ko &quot;<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>&quot; (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>) elkarren aurkakoak dirudite jatorrizkoan. Ezkerreko amaierako &quot;<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>&quot; blokea eta &quot;<math display=\"inline\"><mrow><mi>t</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>&quot; (ziurrenik &quot;<math display=\"inline\"><mrow><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>&quot;) OCR/eskuizkribu txarrekoak dira."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p202_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "13. ariketaren itxiera: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "13. ariketaren itxiera: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>). <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kalkulatzeko, <math display=\"inline\"><mi>P</mi></math> barne hartzen duen eta <math display=\"inline\"><mi>S</mi></math>-ri paraleloa den <math display=\"inline\"><mi>N</mi></math> hiperplanoa eraikitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo>:</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Distantzia (8.10 formula), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntutik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>N</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>0</mn><mo>−</mo><mn>0</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Distantziaren errepasoa; gurutzatzen diren bi zuzen (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposizioa (errepasoa)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> paraleloak eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math> badira, orduan <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, edozein <math display=\"inline\"><mrow><mi>P</mi><mo>∈</mo><mi>p</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>-rako."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa: gurutzatzen diren bi zuzen <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math> forma jarraietik parametrizatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mfrac><msub><mi>x</mi><mn>1</mn></msub><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn></mrow><mrow><mi>−</mi><mn>4</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>1</mn></mrow><mn>4</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>T</mi><mo>:</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn></mrow><mn>5</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>4</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>1</mn></mrow><mrow><mi>−</mi><mn>2</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Biak zuzenak dira (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>). <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> sistema ebatziz, <strong>bateraezina</strong> da: <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>, eta <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (norabideak independenteak): zuzenak <strong>gurutzatu</strong> egiten dira."
    },
    {
     "mota": "testua",
     "html": "Estalki afina (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Perpendikular komun bat <math display=\"inline\"><msub><mi>N</mi><mi>p</mi></msub></math> aurkitzeko, <math display=\"inline\"><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>) kalkulatzen da, <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup></mrow></math> parametrizatzen da, eta <math display=\"inline\"><mrow><msub><mi>N</mi><mi>p</mi></msub><mo>=</mo><mi>P</mi><mo>∩</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><msup><mover><mi>P</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ariketa hau oso trinkoa da eta egileak berak &quot;???&quot; gorriz markatzen du <math display=\"inline\"><mi>P</mi></math>-ren ekuazio inplizituaren determinantearen kalkuluan (bere ziurgabetasuna); hemen ez da balio zenbakizko zehatza jaso, egiturazko urratsak baizik. Matrizearen errenkada-murrizketak (4 ekuazio) irakurketa zailekoak dira, baina ondorioa (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>, gurutzatzen dira) sendoa da. Errepaso-proposizioan &quot;<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>&quot; idazkerak <math display=\"inline\"><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></math> errepikatzen du (ziurrenik &quot;<math display=\"inline\"><mrow><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>&quot;)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p228_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> itxiera (gurutzatzen diren zuzenak)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> itxiera"
    },
    {
     "mota": "testua",
     "html": "Aurreko ariketaren distantzia perpendikular komunaren bidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>4</mn><mo>⋅</mo><mn>0</mn><mo>−</mo><mn>26</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>29</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msqrt><mrow><msup><mn>4</mn><mn>2</mn></msup><mo>+</mo><msup><mn>26</mn><mn>2</mn></msup><mo>+</mo><msup><mn>29</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — ariketa osatugabea kenduta",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko p228-ko &quot;11. ariketa&quot; aldaera (<math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>a</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>) osatu gabe zegoen (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><msub><mi>T</mi><mi>a</mi></msub><mo>=</mo><mi>∅</mi></mrow></math>-n eteten da, <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> kalkulatu gabe); ez da hemen jaso. 11. ariketaren bertsio osoa (beste datuekin, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> kritikoa) gorago dago (IRAIDE p197)."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Distantziak; azpiespazio perpendikularra",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perpendikulartasuna: kasu orokorra (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>&gt;</mo><mi>n</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>&gt;</mo><mi>n</mi></mrow></math> denean, <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> perpendikularrak dira baldin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(1) Puntu batetik barietate baterako distantzia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>b</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> barietaterako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">min</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>q</mi><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msub><mi>q</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mi>S</mi><mo>∩</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><msup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⟂</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(2) Bi azpiespazioren arteko distantzia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">min</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>p</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><mi>q</mi><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi azpiespazioei perpendikularra den <math display=\"inline\"><mi>W</mi></math> bektorea eraikiz, <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> badira, orduan <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa: <math display=\"inline\"><mi>Q</mi></math> eta <math display=\"inline\"><mi>R</mi></math>-ri perpendikularra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>Q</mi></math> eta <math display=\"inline\"><mi>R</mi></math> zuzenei aldi berean perpendikularra den <math display=\"inline\"><mi>W</mi></math> azpiespazioa <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math> hartuz lortzen da. Norabideen batura:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><msup><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup><mo>=</mo><mn>4</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>1</mn></mrow></math>, eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hiru sortzaileei perpendikularra denez:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>W</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizkoak <math display=\"inline\"><mover><mi>W</mi><mo accent=\"true\">¯</mo></mover></math> &quot;<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>&quot; ekuazioekin deskribatzen du, baina hori inkoherentea da sortzailearekin (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k <math display=\"inline\"><mi>z</mi></math> aske du); zuzena &quot;<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>&quot; da (<math display=\"inline\"><mi>z</mi></math> aske). Ariketak jarraitzen du: <math display=\"inline\"><mi>W</mi></math> eta <math display=\"inline\"><mi>Q</mi></math>-ren ebakidura (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>c</mi><mo>+</mo><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>) puntu bat da, eta distantziaren kalkulua hurrengo orrialdean. <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>Q</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup><mo>=</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi></mrow></math> egiaztatua dago."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p212_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mi>W</mi></math>-ren ebakidura; <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math>-ren kokapena (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perpendikular komuna eta distantzia"
    },
    {
     "mota": "testua",
     "html": "Aurreko ariketaren jarraipena: <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Bi zuzenen arteko distantzia perpendikular komunaren bidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>q</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>R</mi><mo>∩</mo><msub><mi>W</mi><mo>⟂</mo></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mi>Q</mi><mo>∩</mo><msub><mi>W</mi><mo>⟂</mo></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><msub><mi>W</mi><mo>⟂</mo></msub></math> bakoitzari perpendikularra den barietatea den."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa berria: <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko bi azpiespazio afin: <math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>t</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> (a) <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren ekuazioak eta norabidea; (b) <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math>-ren perpendikular komun bat; (c) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kokapen erlatiboa"
    },
    {
     "mota": "testua",
     "html": "Ekuazioak ebatziz, biak <strong>zuzenak</strong> dira (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>p</mi><mn>2</mn></msub></math> lotzen dituen bektorea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>2</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(lehen osagaia <math display=\"inline\"><mrow><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>, baina <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>-ko bektoreek lehen bi osagaiak nuluak dituzte). Beraz <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>T</mi></math> <strong>ez dute elkar ebakitzen</strong>; eta <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>≠</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> denez, <strong>ez dira paraleloak</strong>: <strong>gurutzatzen dira</strong>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>S</mi></math>-ren parametrizazioan, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuak lehen eta hirugarren ekuazioak betetzen ditu (<math display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>5</mn><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>−</mo><mn>5</mn><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>), baina bigarrena ez (<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>+</mo><mn>0</mn><mo>−</mo><mn>5</mn><mo>=</mo><mi>−</mi><mn>7</mn><mo>≠</mo><mn>3</mn></mrow></math>); enuntziatuan edo garapen tartekoan lapsus bat dago, ezin izan dena bateratu. &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>δ</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;-n <math display=\"inline\"><mi>δ</mi></math> ziurrenik <math display=\"inline\"><mi>c</mi></math> da. Perpendikular komunaren eta <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren kalkulua (b, c atalak) hurrengo orrialdeetan."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p214_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>; bi zuzenei perpendikularra den planoa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><msub><mi>p</mi><mn>2</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Parametroak ezabatuz, ekuazio inplizitua <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Perpendikular komuna"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≠</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> denez, haren osagarri ortogonala kalkula daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math> eraikiz, <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>S</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>T</mi><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math> ebaki-puntuak lortzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(c) <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mrow><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa berria (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>): planoa bi zuzenei perpendikularra"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n, <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> planoak. Zehaztu <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>-ri perpendikularra den planoa, haien ebakiduraren <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> koordenatuko puntu batetik igarotzen dena."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ekuazio inplizituak (normala = zuzentzaileen biderkadura bektoriala):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>:</mo><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mn>2</mn></msub><mo>:</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistema ebatziz (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>, gero <math display=\"inline\"><mrow><mn>5</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>), ebakidura <strong>zuzen</strong> bat da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>4</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>-ren ekuazio inplizituak egiaztatuak daude biderkadura bektorialaz (normala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; oinarri-puntuek betetzen dituzte). Bigarren &quot;<math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>S</mi></mrow></math>&quot; agerpena ziurrenik &quot;<math display=\"inline\"><mrow><mi>W</mi><mo>∩</mo><mi>T</mi></mrow></math>&quot; da (<math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> ematen duena). <math display=\"inline\"><mover><mrow><msub><mi>p</mi><mn>2</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover></math>-ren hirugarren osagaia orrialde honetan &quot;<math display=\"inline\"><mn>1</mn></math>&quot; da, aurrekoan &quot;<math display=\"inline\"><mn>0</mn></math>&quot; (<math display=\"inline\"><mi>z</mi></math> osagaian irakurketa-desberdintasuna). Perpendikular komunaren <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> kalkulua <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math> puntuen lehen osagaien diferentziatik (<math display=\"inline\"><mrow><mn>2</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>2</mn></mrow></math>) dator."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p216_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Plano perpendikularra osatzea; zuzen-familia <math display=\"inline\"><msub><mi>R</mi><mi>λ</mi></msub></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketaren itxiera: plano perpendikularra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>-ren <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> puntua <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>) direnez, <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>-ri perpendikularra izateko <math display=\"inline\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>⊆</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup><mo>⊆</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> behar dira."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; osagarri ortogonala:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz bilatutako planoa:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa berria: zuzen-familia <math display=\"inline\"><msub><mi>R</mi><mi>λ</mi></msub></math>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Plano afin euklidearrean, izan bedi zuzen-familia <math display=\"block\"><mrow><msub><mi>R</mi><mi>λ</mi></msub><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mn>2</mn><mi>λ</mi><mi>y</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>λ</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math> Frogatu <math display=\"inline\"><mi>P</mi></math> punturen bat existitzen den, non <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> konstantea den (<math display=\"inline\"><mi>λ</mi></math>-ren mende ez dagoena)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi>y</mi><mo>+</mo><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> zuzenerako, norabide-bektorea <math display=\"inline\"><mrow><mover><mi>V</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>,</mo><mi>−</mi><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (edo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>B</mi><mo>,</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) da, eta normala <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Kasu honetan <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik igarotzen den <math display=\"inline\"><msub><mi>N</mi><mi>λ</mi></msub></math> zuzen normala:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub></math> jatorrizkoan &quot;<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>,</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>&quot; gisa agertzen da, baina hori ez da <math display=\"inline\"><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub></math>-ren perpendikularra (<math display=\"inline\"><mrow><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>λ</mi></msub><mo>=</mo><mn>2</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math>); formula zuzenak (<math display=\"inline\"><mrow><mover><mi>V</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>,</mo><mi>−</mi><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>,</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> ematen du (hemen zuzendua; &quot;<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>&quot; gaizki irakurria &quot;<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi></mrow></math>&quot; gisa). <math display=\"inline\"><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></math>-en lehen sortzailea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (ez <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), osagarri ortogonalaren kalkuluarekin bat. <math display=\"inline\"><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn><mo>⟂</mo></msubsup></math> eta <math display=\"inline\"><msubsup><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn><mo>⟂</mo></msubsup></math> biak egiaztatuak daude biderkadura eskalarraz."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p218_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Zuzen-familiaren ariketa: <math display=\"inline\"><mi>P</mi></math> puntua",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proiekzioa: <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>R</mi><mi>λ</mi></msub><mo>∩</mo><msub><mi>N</mi><mi>λ</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren proiekzioa <math display=\"inline\"><msub><mi>R</mi><mi>λ</mi></msub></math>-ren gainean. <math display=\"inline\"><msub><mi>N</mi><mi>λ</mi></msub></math>-ren parametrizazioa <math display=\"inline\"><msub><mi>R</mi><mi>λ</mi></msub></math>-ren ekuazioan sartuz, <math display=\"inline\"><mi>k</mi></math> askatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>λ</mi><mi>b</mi><mo>−</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> denez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>λ</mi><mi>b</mi><mo>−</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mn>2</mn></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Distantzia: <math display=\"inline\"><mrow><msup><mi>d</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>d</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>k</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mo>+</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mi>λ</mi><mi>b</mi><mo>−</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Balio zehatzetan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>1</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>P</mi></math> puntua aurkitzea"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mrow><mi>−</mi><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eskatuz: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>3</mn><mo>−</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>b</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. &quot;<math display=\"inline\"><mrow><mn>3</mn><mo>−</mo><mi>b</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>b</mi></mrow></math>&quot; ezinezkoa da; &quot;<math display=\"inline\"><mrow><mn>3</mn><mo>−</mo><mi>b</mi><mo>=</mo><mi>b</mi><mo>−</mo><mn>1</mn></mrow></math>&quot;-tik <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>2</mn></mrow></math>. Orduan <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math>-tik <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Egiaztapena.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>b</mi><mo>=</mo><mn>2</mn></mrow></math> bada, zenbakitzailea <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mn>4</mn><mi>λ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup></mrow></math> da, beraz <math display=\"inline\"><mrow><msup><mi>d</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><msub><mi>R</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> <strong><math display=\"inline\"><mi>λ</mi></math> ororako</strong>. <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3</mn><mo>,</mo><mi>b</mi><mo>=</mo><mn>2</mn></mrow></math> bada, zenbakitzailea <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>+</mo><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow></math> da, konstantea ez dena (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>-rako <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>11</mn><mi>/</mi><mn>5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>≠</mo><mn>1</mn></mrow></math>). Beraz soluzio bakarra: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Propietate geometriko berria"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposizioa",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>c</mi></math> <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math>-ren <strong>erdiko puntua</strong> den (segmentu baten diametroan angelu zuzena)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulu guztiak egiaztatuak daude: <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> (ez <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3</mn></mrow></math>), <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Propietate berrian jatorrizkoak &quot;<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; idazten du, baina ziurrenik &quot;<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; da (marrazkiak <math display=\"inline\"><mrow><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>p</mi></mrow></math> soilik ditu). Amaierako &quot;ÁNGULO RECTO&quot; oharra propietate horri lotua dago (Thales-en zirkunferentzia)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p220_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 1,
   "izenburua": "Thales-en propietatea; bektore arteko angelua",
   "blokeak": []
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Frogapena: <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇔</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>c</mi></math> <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math>-ren erdiko puntua denez, <math display=\"inline\"><mrow><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><mi>c</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>. Chasles-en erlazioaz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Biderkadura eskalarra garatuz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> gurutze-gaiak deuseztatzen baitira (biderkadura eskalarra simetrikoa da). Beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> baldin eta soilik baldin <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></mrow></math>, hots <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (Diametroan inskribatutako angelua zuzena da: Thales.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Bektore arteko angelua",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi bektoreren arteko angeluaren kosinua: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>u</mi><mo accent=\"true\">→</mo></mover></math> eta <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> artean (bektore unitarioak, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mn>1</mn></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Biak berdinak direnez, <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> norabidea <strong>erdikaria</strong> (bisektrizea) da."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Erronboaren diagonalak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi bisektrizeek (<math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover></mrow></math>) osatzen duten angelua:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mrow></math> denean (erronboa), diagonalak beti <strong>perpendikularrak</strong> dira: bisektrizeek <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> osatzen dute."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizkoak behin &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≤</mo><mn>0</mn></mrow></math>&quot; idazten du, baina &quot;<math display=\"inline\"><mrow><mo>=</mo><mn>0</mn></mrow></math>&quot; izan behar da (garapenak berdintza ematen du). &quot;<math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>&quot; lerroak &quot;<math display=\"inline\"><mo>=</mo></math>&quot; darabil, baina &quot;<math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>c</mi><mi>a</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>&quot; da (hurrengo lerroaren analogoa). Kosinu-formuletan <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> notazio laburtua biderkadura eskalarra da; <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> suposatzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 1,
   "izenburua": "Geometria euklidearraren ikus-atlasa",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Aportazio editorial bereizia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atlasak ekuazio afinen esanahi geometrikoa berreskuratzen du. Koadernoetako garapen algebraikoa osorik mantentzen da eta irudi hauek haren ondoko orientazio bisual gisa erabiltzen dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Proiekzioak eta distantziak",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "editoriala([Proiekzio ortogonalak <math display=\"inline\"><mi>v</mi></math> bektorea azpiespazioko osagaiaren eta osagai normalaren batura bakarrean deskonposatzen du.])",
     "src": "media/irudiak/3087477f8c477f30.svg",
     "zabalera": 246
    },
    {
     "mota": "irudia",
     "oina": "editoriala([Puntu baten eta hiperplano baten arteko distantzia segmentu normalaren luzera da; proiekzio-puntuak minimo bakarra ematen du.])",
     "src": "media/irudiak/445068a5cce6431f.svg",
     "zabalera": 260
    },
    {
     "mota": "irudia",
     "oina": "editoriala([Zuzen gurutzatuen arteko distantzia bi norabideekiko perpendikularra den segmentu bakarrak neurtzen du.])",
     "src": "media/irudiak/4b241282c057f192.svg",
     "zabalera": 239
    }
   ]
  }
 ]
};
