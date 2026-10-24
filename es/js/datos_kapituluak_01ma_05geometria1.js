/* JAKINA · kapitulua «B2 - Geometria eta koadernoak - III» (01ma_05geometria1), desde edicion2/kapituluak/01ma_05geometria1/01ma_05geometria1.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01ma_05geometria1"] = {
 "gakoa": "01ma_05geometria1",
 "titulua": "JAKINA - B2 - Geometría y cuadernos - III",
 "azala": "B2 - Geometría y cuadernos - III",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/01ma_05geometria1/01ma_05geometria1.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "koadernoa_joserra_p001_mk.typ",
   "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Producto vectorial y ecuación de un plano",
   "blokeak": []
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Otro subespacio: el plano",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> no genera todo <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, sino un plano. Añadiendo una dirección perpendicular (<math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">→</mo></mover></math>), el sistema completo generaría todo <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Producto vectorial",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>×</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>n</mi><mo accent=\"true\">→</mo></mover></mrow></math> (también escrito <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>∧</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math>), <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Usando las reglas de la base <math display=\"inline\"><mrow><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mover><mi>j</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>j</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, etc.), desarrollando por distributividad:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo>×</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>y</mi></msub><msub><mi>B</mi><mi>z</mi></msub><mo>−</mo><msub><mi>A</mi><mi>z</mi></msub><msub><mi>B</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>z</mi></msub><msub><mi>B</mi><mi>x</mi></msub><mo>−</mo><msub><mi>A</mi><mi>x</mi></msub><msub><mi>B</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>j</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>x</mi></msub><msub><mi>B</mi><mi>y</mi></msub><mo>−</mo><msub><mi>A</mi><mi>y</mi></msub><msub><mi>B</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "o, de forma equivalente, mediante el determinante simbólico:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo>×</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mi>j</mi><mo accent=\"true\">̂</mo></mover></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>A</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>A</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>A</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Ejemplo: <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>×</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>×</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mi>j</mi><mo accent=\"true\">̂</mo></mover></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>j</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Comprobación de la ortogonalidad (con el producto escalar)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Usando <math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mi>A</mi><mi>x</mi></msub><msub><mi>B</mi><mi>x</mi></msub><mo>+</mo><msub><mi>A</mi><mi>y</mi></msub><msub><mi>B</mi><mi>y</mi></msub><mo>+</mo><msub><mi>A</mi><mi>z</mi></msub><msub><mi>B</mi><mi>z</mi></msub></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(los tres comprobados): <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">→</mo></mover></math> <math display=\"inline\"><mover><mi>u</mi><mo accent=\"true\">→</mo></mover></math> es perpendicular a <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></math>, la propiedad principal del producto vectorial."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Ecuación implícita de <math display=\"inline\"><mi>S</mi></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>, es decir <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>b</mi></mrow></math>. El rango del menor que no es <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math> es <math display=\"inline\"><mn>2</mn></math>, y se obtiene <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> (<math display=\"inline\"><mi>z</mi></math> libre):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La fórmula general, el ejemplo numérico y las tres comprobaciones de ortogonalidad están todos verificados. En la página izquierda hay un dibujo <math display=\"inline\"><mn>3</mn></math>D (el vector <math display=\"inline\"><mi>n</mi></math> sobre el plano), que no se ha reproducido por no estar traducido al euskera."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_joserra_p010_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a7",
   "maila": 1,
   "izenburua": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>: puntos, vectores y subespacio afín (7.2)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los elementos de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> pueden considerarse <strong>puntos</strong> (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) o <strong>vectores</strong>. Entre dos puntos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>−</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">non </mtext><mspace width=\"0.333em\"></mspace></mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Subespacio afín (7.2)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Subespacio afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un conjunto <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> (no vacío) es un <strong>subespacio afín</strong> si existen <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> y un subespacio vectorial <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> tales que <math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>q</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/3fa2a080358e11e1.svg",
     "zabalera": 241
    },
    {
     "mota": "abisua",
     "titulua": "Cuidado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los subespacios afines son <strong>copias trasladadas</strong> de los subespacios vectoriales: pueden pasar por <strong>cualquier punto</strong> (no necesariamente por el origen, a diferencia de los subespacios vectoriales)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/19 (páginas 62-63, transición B05→B06). La existencia del adjunto es <strong>correcta</strong>: <math display=\"inline\"><mrow><msup><mi>Z</mi><mi>T</mi></msup><mo>=</mo><msup><mi>X</mi><mi>T</mi></msup><mi>B</mi><mo>⇒</mo><mi>Z</mi><mo>=</mo><msup><mi>B</mi><mi>T</mi></msup><mi>X</mi></mrow></math>, luego <math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>B</mi><mi>T</mi></msup></mrow></math> en una base ortonormal (la unicidad, en la página 0031). Inicio de la geometría afín: <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>q</mi><mo>−</mo><mi>p</mi></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math>, y <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math>, tres descripciones equivalentes del subespacio afín. La autora dice en euskera que los subespacios afines son &quot;copias&quot; que pueden pasar por cualquier punto. La página izquierda de la foto (62) es la existencia del adjunto (álgebra lineal, a1_0032i); la derecha (63), la de afín. No se ha hecho resumen. Véase <code>a1_0032d_geometria_afina_euskera_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p033_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Subespacios afines: dirección (única) y dimensión",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La <strong>dirección</strong> <math display=\"inline\"><mi>W</mi></math> (subespacio vectorial) de un subespacio afín es única; el punto <math display=\"inline\"><mi>p</mi></math>, en cambio, no (sirve cualquier punto de <math display=\"inline\"><mi>S</mi></math>). Corolarios y definición de dimensión."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Unicidad de la dirección"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi><mo>⇔</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Proposición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> son subespacios vectoriales: <math display=\"block\"><mrow><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>W</mi><mn>1</mn></msub><mo>=</mo><msub><mi>W</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>q</mi><mo>∈</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, la <strong>dirección <math display=\"inline\"><mi>W</mi></math> de un subespacio afín es única</strong>; el punto <math display=\"inline\"><mi>p</mi></math> no (puede usarse como base cualquier punto de <math display=\"inline\"><mi>S</mi></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Corolario"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Corolario",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math> es un subespacio afín:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>s</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi><mo>⇒</mo><mover><mrow><mi>r</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>. (Demostración: <math display=\"inline\"><mrow><mover><mrow><mi>r</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>r</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>p</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>, pues ambos están en <math display=\"inline\"><mi>W</mi></math>.)",
        "<math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi><mo>⇔</mo><mi>q</mi><mo>+</mo><mi>W</mi><mo>=</mo><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dirección y dimensión"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Dirección y dimensión",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un subespacio afín <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, el subespacio vectorial <math display=\"inline\"><mi>W</mi></math> es la <strong>dirección de <math display=\"inline\"><mi>S</mi></math></strong> (cualquier descripción de <math display=\"inline\"><mi>S</mi></math> tiene la misma dirección). <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi></mrow></math> es (<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>). <strong>Dimensión:</strong> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/389637e245d7c34a.svg",
     "zabalera": 223
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/19 (páginas 64-65). Todo es <strong>correcto</strong>: la unicidad de la dirección (proposición), el corolario (<math display=\"inline\"><mrow><mover><mrow><mi>r</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>r</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>p</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>; <math display=\"inline\"><mrow><mi>q</mi><mo>+</mo><mi>W</mi><mo>=</mo><mi>S</mi></mrow></math>) y la definición de dimensión (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>). La dirección del subespacio afín (<math display=\"inline\"><mi>W</mi></math>) es única; el punto base <math display=\"inline\"><mi>p</mi></math> no. Estas hojas originales están escritas sobre todo en euskera. La autora deja la demostración de la proposición como ejercicio. No se ha hecho resumen. Véase <code>a1_0033_geometria_afina_euskera_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p034_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Tipos de subespacios afines según la dimensión; proposición de inclusión",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Nombres especiales de los subespacios afines según la dimensión (punto, recta, plano, hiperplano, espacio completo) y la proposición de <strong>inclusión</strong>: de <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> a <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tipos de subespacios afines"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Tipos según la dimensión",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La dimensión del subespacio afín <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> — <strong>punto</strong> (conjunto de un único elemento).",
        "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> — <strong>recta afín</strong> (copia de una recta vectorial).",
        "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> — <strong>plano afín</strong> (copia de un plano vectorial).",
        "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>: <strong>hiperplano afín</strong> (copia de un hiperplano vectorial).",
        "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mi>n</mi></mrow></math>: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>n</mi></mrow></math> — <strong>todo el espacio</strong> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>)."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Caracterización"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> es un <strong>subespacio afín</strong> si y solo si existen un punto <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> (sirve cualquier punto de <math display=\"inline\"><mi>S</mi></math>) y un subespacio vectorial <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> (<strong>único</strong>, la dirección de <math display=\"inline\"><mi>S</mi></math>) tales que <math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>q</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposición de inclusión"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Proposición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> subespacios afines, <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> subespacios vectoriales."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>.",
        "<math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>W</mi><mn>2</mn></msub><mo>⇒</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(1) Demostración.</strong> Hipótesis: <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>; tesis: <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>2</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. Como <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, también puede escribirse <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></mrow></math>. Entonces <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></mrow></math>). Como <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, es decir <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>, esto es <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. Por tanto <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. <math display=\"inline\"><mi>◼</mi></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>(4)</strong> Si <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>, todo <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>W</mi><mn>1</mn></msub></mrow></math>) está en <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math>; por tanto <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>1</mn></msub><mo>⊆</mo><mi>p</mi><mo>+</mo><msub><mi>W</mi><mn>2</mn></msub></mrow></math> (consecuencia directa de la definición de traslación)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/19-20 (páginas 66-67, en euskera). La clasificación (punto <math display=\"inline\"><mrow><mo>=</mo><mn>0</mn></mrow></math>, recta <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math>, plano <math display=\"inline\"><mrow><mo>=</mo><mn>2</mn></mrow></math>, hiperplano <math display=\"inline\"><mrow><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>, total <math display=\"inline\"><mrow><mo>=</mo><mi>n</mi></mrow></math>) es la estándar. La demostración de la proposición de inclusión es <strong>correcta</strong>: tomando <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, y porque <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. El original interrumpe la demostración al final de la página; aquí se ha completado siguiendo los pasos lógicos. La autora numera los apartados <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (sin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en esta página). No se ha hecho resumen. Véase <code>a1_0034_geometria_afina_euskera_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p035_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 1,
   "izenburua": "Corolario de igualdad y posición relativa de subespacios afines (7.3)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "De la inclusión y la igualdad de dimensiones se deduce la <strong>igualdad</strong>; y la <strong>posición relativa</strong> de subespacios afines (intersecarse): cuándo se cortan."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Corolario de igualdad",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Corolario",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Subespacios afines <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub></mrow></math></span>.",
        "<math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math></span>."
       ]
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(1)</strong> <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub><mover><mo>⇒</mo><mrow><mtext mathvariant=\"normal\">prop. </mtext><mspace width=\"0.333em\"></mspace></mrow></mover><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>, luego <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<strong>(2)/(4)</strong> Como <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math></span> (subespacios vectoriales de dimensión finita), <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. Además, como <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mi>S</mi><mn>1</mn></msub></mrow></math>. <math display=\"inline\"><mi>◼</mi></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Posición relativa (7.3): intersecarse",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Proposición (unión)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mi>p</mi><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math> subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. Entonces: <math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(<math display=\"inline\"><mo>⇒</mo></math>)</strong> Si <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi></mrow></math>, existe <math display=\"inline\"><mrow><mi>r</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mi>r</mi><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>r</mi><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. Entonces <math display=\"block\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>r</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>r</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>,</mo></mrow></math> y por tanto <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. <math display=\"inline\"><mi>◼</mi></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/5e276dc082749c2a.svg",
     "zabalera": 218
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/20 (páginas 68-69, en euskera). Las demostraciones son <strong>correctas</strong>: el corolario de igualdad (inclusión + misma dimensión → igualdad, usando una propiedad de los subespacios vectoriales y que <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>∈</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>) y la proposición 7.3 (cortarse <math display=\"inline\"><mo>⇔</mo></math>: el vector entre los puntos está en la suma de las direcciones), clásicas. El sentido directo (<math display=\"inline\"><mo>⇒</mo></math>) se demuestra tomando <math display=\"inline\"><mrow><mi>r</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>r</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><mi>r</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. El sentido inverso (<math display=\"inline\"><mo>⇐</mo></math>) se completa en la página siguiente. &quot;ELKAR MOZTEA&quot; es el nombre técnico que la autora da a la intersección. No se ha hecho resumen. Véase <code>a1_0035_geometria_afina_euskera_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p036_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Recíproco de la unión, paralelismo y proposición de la dimensión",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El sentido <strong>inverso</strong> de la proposición 7.3, la definición de <strong>paralelismo</strong> entre subespacios afines (puro frente a estricto), los que se cruzan, y la proposición de las dimensiones."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Recíproco de la proposición 7.3"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(<math display=\"inline\"><mo>⇐</mo></math>)</strong> <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>⇒</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>). Tomemos <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>p</mi><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⇒</mo><mi>r</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub></mrow></math>. Por otra parte, <math display=\"block\"><mrow><mover><mrow><mi>q</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>q</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>∈</mo><msub><mi>S</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Por tanto <math display=\"inline\"><mrow><mi>r</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi></mrow></math>. <math display=\"inline\"><mi>◼</mi></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paralelismo"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Paralelismo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los subespacios afines <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> son <strong>paralelos</strong> si la dirección de uno de ellos está contenida en la del otro: <math display=\"block\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math> (misma dimensión): <strong>paralelos puros</strong>.",
        "Inclusión estricta (uno dentro del otro): <strong>paralelos (no estrictos)</strong>; si se cortan, <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> se <strong>cruzan</strong> si <strong>no</strong> son paralelos y <strong>no</strong> se cortan."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/7094e414d1c44d90.svg",
     "zabalera": 316
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposición de la dimensión"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Proposición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Subespacios afines <strong>paralelos</strong> <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi></mrow></math></span> <strong>o</strong> <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>⇒</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi></mrow></math></span> <strong>o</strong> <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 2013/2/20 (páginas 70-71, en euskera). El sentido inverso es <strong>correcto</strong>: <math display=\"inline\"><mrow><mover><mrow><mi>q</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math> (comprobado), luego <math display=\"inline\"><mrow><mi>r</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>. La definición de paralelismo (una dirección contenida en la otra; iguales → paralelos puros) y la proposición de la dimensión son estándar y coherentes con los corolarios de la página 0035. La autora distingue &quot;PARALELO PURUAK&quot;, &quot;PARALELOAK (estriktuak ez)&quot; y &quot;GURUTZATUAK&quot;; mezcla euskera y castellano en algunas notas. No se ha hecho resumen. Véase <code>a1_0036_geometria_afina_euskera_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p037_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Geometría afín: posición relativa de subespacios afines y teorema de la intersección",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Comenzamos el tema 7: <strong>geometría afín</strong>. Se clasifica la posición relativa de dos subespacios afines (paralelos, que se cruzan o secantes) y se demuestra el <strong>teorema de la intersección</strong>: cuando la intersección es no vacía, es un subespacio afín."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Posición relativa de subespacios afines"
    },
    {
     "mota": "testua",
     "html": "Sean <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mi>p</mi><mo>+</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math> subespacios afines, siendo <math display=\"inline\"><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></math> sus <strong>direcciones</strong> (subespacios vectoriales). Condición para que la intersección sea no vacía:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es decir, el vector <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> que une los orígenes debe descomponerse en la suma de las dos direcciones. Posiciones relativas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Paralelos:</strong> una dirección contenida en la otra, <math display=\"inline\"><mrow><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>⊆</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math> (o al revés, o iguales).",
      "<strong>Que se cruzan:</strong> <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi></mrow></math> y las direcciones no están contenidas una en otra (<math display=\"inline\"><mrow><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>⊈</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math>)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema de la intersección"
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Teorema (intersección)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. Si <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi></mrow></math>, entonces <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math> es un <strong>subespacio afín</strong> y su dirección es <math display=\"inline\"><mrow><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>∩</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Demostración.</strong> Como <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi></mrow></math>, tomemos <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>; entonces <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math> (con el mismo origen). Para cualquier <math display=\"inline\"><mi>q</mi></math>, la cadena de equivalencias:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>q</mi><mo>∈</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.222em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>∩</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo>∈</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>∩</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>∩</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: es un subespacio afín de dirección <math display=\"inline\"><mrow><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>∩</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math>.   <math display=\"inline\"><mi>◼</mi></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La unión, en general, no es afín"
    },
    {
     "mota": "testua",
     "html": "La intersección (cuando es no vacía) conserva la estructura afín; <strong>la unión no</strong>, en general."
    },
    {
     "mota": "oharra",
     "titulua": "La unión no es afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tomemos <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (un punto cada uno de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, subespacios afines de dimensión 0). Su unión <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∪</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <strong>no es un subespacio afín</strong>: cualquier subespacio afín que contenga <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math> debe contener la recta entera que los une, no solo los dos puntos. Por tanto la unión no es una operación cerrada en geometría afín (a diferencia de la intersección)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0046</code>, IMG_2026_07_28_02_17_08S, páginas 90-91; &quot;ALJEBRA &lt;2.17&quot;, universidad). Inicio del tema 7 (geometría afín). La teoría y la cadena de equivalencias son <strong>correctas</strong> (demostración completa y rigurosa). No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0046.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p047_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; envolvente afín y suma afín",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Posición relativa de dos rectas en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>: se cruzan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Procedimiento para determinar la posición relativa de dos subespacios afines (paralelos, secantes o que se cruzan), y un ejemplo: dos rectas que se <strong>cruzan</strong> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Procedimiento de la posición relativa"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Estudiar la <strong>relación entre las direcciones</strong>: ¿<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>? ¿<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? ¿<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>?",
      "Estudiar la <strong>intersección</strong>: <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Clasificación: <strong>paralelos</strong> (una dirección contenida en la otra), <strong>secantes</strong> (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>) o que <strong>se cruzan</strong> (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math> y direcciones independientes)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo: dos rectas que se cruzan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son <strong>linealmente independientes</strong> (no proporcionales), luego <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Intersección: <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; para ver si <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, se comprueba si <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> son dependientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>6</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>, los tres son <strong>independientes</strong>, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, luego <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>: las rectas <strong>se cruzan</strong> (skew). Fórmula de Grassmann afín:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>3</mn><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y como <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> (dos rectas que se cruzan generan todo <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0065</code>, IMG_2026_07_28_02_18_55S, páginas 128-129; &quot;ALJEBRA IRAIDE&quot;, universidad). Comprobado con SymPy: <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math> independientes, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mspace width=\"0.222em\"></mspace><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mspace width=\"0.222em\"></mspace><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mn>6</mn><mo>≠</mo><mn>0</mn></mrow></math> (cruce), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>. El papel original lee el determinante <math display=\"inline\"><mrow><mi>−</mi><mn>8</mn></mrow></math>; el nuevo cálculo da <math display=\"inline\"><mrow><mi>−</mi><mn>6</mn></mrow></math>, pero <strong>en cualquier caso <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math></strong>, por lo que la conclusión (cruce) se mantiene. Corrección mencionada. Véase <code>koadernoa_algebra2013_alg_0065.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p066_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; posición relativa en R⁴: planos que se cruzan / recta∥plano",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Posición relativa en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: dos planos que se cruzan; recta y plano paralelos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Otros dos casos de posición relativa, en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: dos planos que <strong>se cruzan</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>), y una recta y un plano <strong>paralelos</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dos planos que se cruzan"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> (ambos planos afines, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>). <strong>Comparten</strong> una dirección (<math display=\"inline\"><mrow><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), luego <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Intersección: <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>v</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>w</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> son <strong>linealmente independientes</strong> (<math display=\"inline\"><mn>4</mn></math> vectores en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, de rango <math display=\"inline\"><mn>4</mn></math>), luego <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>: los planos <strong>se cruzan</strong>. Fórmula de Grassmann afín:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>4</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>+</mo><mi>T</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Una recta y un plano paralelos"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> <strong>recta</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>) y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> <strong>plano</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>). La dirección de la recta está en la del plano:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>w</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>: <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> son <strong>paralelos</strong> (la recta es paralela al plano)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0066</code>, IMG_2026_07_28_02_19_00S, páginas 130-131; &quot;ALJEBRA IRAIDE&quot;, universidad). Comprobado con SymPy: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>17</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>v</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>w</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>4</mn></mrow></math> (cruce, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>); <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>w</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, paralelos). No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0066.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p067_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; paralelos puros y envolvente de cuatro puntos (plano)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Paralelismo puro y envolvente de cuatro puntos (plano)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se decide si una recta y un plano son paralelos <strong>puros</strong> (probando un punto) y se calcula la <strong>envolvente afín</strong> de cuatro puntos (un plano, por ser coplanarios)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Recta y plano paralelos puros"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> (recta) y <math display=\"inline\"><mi>T</mi></math> (plano) son <strong>paralelos</strong> (<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mn>0066</mn></math>). Por tanto, o bien <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>T</mi></mrow></math>, o bien <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>. Para decidirlo, se mira si un punto de <math display=\"inline\"><mi>S</mi></math>, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, está en <math display=\"inline\"><mi>T</mi></math> (en la ecuación <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> de <math display=\"inline\"><mi>T</mi></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>0</mn><mo>+</mo><mn>2</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>∉</mo><mi>T</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>p</mi><mo>∉</mo><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>⊈</mo><mi>T</mi></mrow></math> y <strong><math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math></strong>: la recta es paralela al plano <strong>sin tocarlo</strong> (paralelos puros)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Envolvente de cuatro puntos = plano"
    },
    {
     "mota": "testua",
     "html": "Envolvente afín del conjunto <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>. Siendo <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>r</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>s</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Pero <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>r</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover></mrow></math> (dependiente), luego se descarta; los otros dos son independientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">plano afina</mtext><mo>,</mo><mi mathvariant=\"normal\">dim</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Los cuatro puntos son <strong>coplanarios</strong>, como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> de <math display=\"inline\"><mn>0062</mn></math>; aquí la variedad se identifica como un <strong>plano</strong>.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0067</code>, IMG_2026_07_28_02_19_04S, páginas 132-133; &quot;ALJEBRA IRAIDE&quot;, universidad). Comprobado con SymPy: <math display=\"inline\"><mrow><mi>p</mi><mo>∉</mo><mi>T</mi></mrow></math> (<math display=\"inline\"><mrow><mn>0</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>, paralelos puros) y la envolvente es un plano (<math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>r</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover></mrow></math> dependiente, los otros dos independientes). No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0067.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p068_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; ecuación del plano 9x+8y-5z=10, plano paralelo e hiperplano",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Ecuación implícita de un plano, plano paralelo e hiperplano",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se calcula la <strong>ecuación implícita</strong> del plano anterior (mediante determinantes), se obtiene un <strong>plano paralelo</strong> por otro punto y se construye un <strong>hiperplano</strong> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> (que contiene un subespacio y es paralelo a otro)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación implícita del plano"
    },
    {
     "mota": "testua",
     "html": "La ecuación del plano <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><msub><mi>d</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><msub><mi>d</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math></span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>−</mo><mn>10</mn><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>10</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mn>9</mn><mo>+</mo><mn>16</mn><mo>−</mo><mn>15</mn><mo>=</mo><mn>10</mn></mrow></math>; las direcciones cumplen la ecuación homogénea.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Plano paralelo por otro punto"
    },
    {
     "mota": "testua",
     "html": "El plano que pasa por el punto <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y es <strong>paralelo</strong> a <math display=\"inline\"><mi>S</mi></math> (<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>): tiene la misma parte lineal, <math display=\"inline\"><mrow><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mi>D</mi></mrow></math>, y <math display=\"inline\"><mi>D</mi></math> lo fija <math display=\"inline\"><mi>q</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>9</mn><mo>⋅</mo><mn>4</mn><mo>+</mo><mn>8</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>5</mn><mo>⋅</mo><mn>0</mn><mo>=</mo><mn>20</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>≡</mo><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>20</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Planos paralelos: misma ecuación, salvo el término independiente.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Un hiperplano de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>H</mi></mrow></math>, <math display=\"inline\"><mrow><mi>H</mi><mo>∥</mo><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> el <strong>hiperplano</strong> tiene <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow></math>. Para que <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>H</mi></mrow></math> hace falta <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, y para que <math display=\"inline\"><mrow><mi>H</mi><mo>∥</mo><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover></mrow></math>; por tanto <math display=\"inline\"><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover></math> debe contener las dos direcciones:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>H</mi><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las tres direcciones son independientes (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn></mrow></math>), y como <math display=\"inline\"><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover></math> contiene tanto <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> como <math display=\"inline\"><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></math>, se cumplen <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>H</mi></mrow></math> y <math display=\"inline\"><mrow><mi>H</mi><mo>∥</mo><mi>T</mi></mrow></math>. La ecuación implícita (única, por ser un hiperplano) se calcula por el procedimiento del rango."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0068</code>, IMG_2026_07_28_02_19_13S, páginas 134-135; &quot;ALJEBRA IRAIDE&quot;, universidad). Comprobado con SymPy: <math display=\"inline\"><mrow><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>10</mn></mrow></math> (el coeficiente de <math display=\"inline\"><mi>y</mi></math> es <math display=\"inline\"><mn>8</mn></math>, no <math display=\"inline\"><mn>3</mn></math>: lectura aclarada del original <math display=\"inline\"><mrow><mn>8</mn><mi>/</mi><mn>3</mn></mrow></math>), <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>20</mn></mrow></math> en el plano paralelo, y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn></mrow></math> (hiperplano). No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0068.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Ejercicios 14-15: posición relativa (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 14: dos planos que se cruzan"
    },
    {
     "mota": "testua",
     "html": "Parametrizando <math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, y dado <math display=\"inline\"><mi>T</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> (comparten una dirección) y <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>: los dos <strong>planos se cruzan</strong>. Por Grassmann:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>4</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>+</mo><mi>T</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 15: recta y plano"
    },
    {
     "mota": "testua",
     "html": "Parametrizando a partir de las ecuaciones implícitas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> es una <strong>recta</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow></math>) y <math display=\"inline\"><mi>T</mi></math> un <strong>plano</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mn>2</mn></mrow></math>). Para determinar la posición, hay que estudiar si la dirección de <math display=\"inline\"><mi>S</mi></math>, <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></math>, está en <math display=\"inline\"><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></math> (paralelos si <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta página tiene numerosas discrepancias de transcripción. En el ejercicio 14 el original dice &quot;<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>&quot;, pero los vectores escritos tienen en la tercera componente <math display=\"inline\"><mn>2</mn></math> frente a <math display=\"inline\"><mn>1</mn></math>; y <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> aparece como &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;, pero la diferencia de los puntos base da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La conclusión principal (<math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>) es sólida. En el ejercicio 15 las parametrizaciones originales (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>, <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>) contienen errores; aquí se recogen las rehechas directamente a partir de las ecuaciones implícitas. Con esos vectores, la comprobación de paralelismo &quot;<math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>&quot; no se cumple (<math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>); por tanto la conclusión &quot;paralelos&quot; del original es dudosa, debido a problemas de transcripción."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p132_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Paralelos puros; envolvente afín de cuatro puntos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejercicio 15: paralelos puros"
    },
    {
     "mota": "testua",
     "html": "Se comprueba que <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi></mrow></math>, pero <math display=\"inline\"><mrow><mi>p</mi><mo>∉</mo><mi>T</mi></mrow></math> (las ecuaciones implícitas de <math display=\"inline\"><mi>T</mi></math> dan un valor no nulo). Por tanto <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> pero <math display=\"inline\"><mrow><mi>S</mi><mo>≠</mo><mi>T</mi></mrow></math>: <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> son <strong>paralelos &quot;puros&quot;</strong> (<math display=\"inline\"><mi>S</mi></math> no está contenido en <math display=\"inline\"><mi>T</mi></math>, pero su dirección está en la de <math display=\"inline\"><mi>T</mi></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 8: envolvente afín"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Envoltura afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Envoltura afín</strong> de un subconjunto <math display=\"inline\"><mrow><mi>A</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>q</mi><mo>∈</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>∈</mo><mi>A</mi></mrow></math> con cualquier punto."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para cuatro puntos, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>: tomando <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, los vectores diferencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>r</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">l.d.</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>s</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>r</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover></math> es dependiente, el espacio de direcciones lo generan dos vectores:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">plano afina</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>S</mi><mo>⇔</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>s</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover></math> aparece en el original como &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;, pero el cálculo correcto es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>,</mo><mn>6</mn><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (la segunda componente es <math display=\"inline\"><mn>1</mn></math>, no <math display=\"inline\"><mn>3</mn></math>); aquí corregido. Estos cuatro puntos son los mismos del cuaderno CHUSA (koadernoa_chusa_p120–122), trabajados en otro idioma: el resultado (plano afín) coincide, como comprobación cruzada. La lectura del punto base del ejercicio 15 también es dudosa (véase p130)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p134_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Ejercicios 8-9-17: planos implícitos y subespacio <math display=\"inline\"><mi>H</mi></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejercicio 8: ecuación implícita"
    },
    {
     "mota": "testua",
     "html": "Eliminando los parámetros de la envolvente afín mediante determinantes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>10</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 9: plano paralelo"
    },
    {
     "mota": "testua",
     "html": "El plano que pasa por el punto <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y es paralelo a <math display=\"inline\"><mi>S</mi></math> (misma dirección). Como la ecuación de <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mrow><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mi>D</mi></mrow></math>. Imponiendo <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>T</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>9</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>8</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn><mo>=</mo><mi>D</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>:</mo><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>20</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 17: subespacio <math display=\"inline\"><mi>H</mi></math>"
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>. Hallar el <math display=\"inline\"><mi>H</mi></math> de menor dimensión tal que <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>H</mi></mrow></math> y <math display=\"inline\"><mi>H</mi></math> sea paralelo a <math display=\"inline\"><mi>T</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Para <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mi>H</mi></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y el punto de <math display=\"inline\"><mi>S</mi></math> en <math display=\"inline\"><mi>H</mi></math>; para que <math display=\"inline\"><mi>H</mi></math> y <math display=\"inline\"><mi>T</mi></math> sean paralelos, <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover></mrow></math>. Por tanto <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>; como una de las direcciones es compartida (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>H</mi><mo>=</mo><mn>3</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El determinante del ejercicio 8 está comprobado (desarrollando por la primera columna, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>9</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>8</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>9</mn><mi>x</mi><mo>+</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>−</mo><mn>10</mn></mrow></math></span>). El ejercicio 9 también está comprobado (<math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>20</mn></mrow></math>). El desarrollo del ejercicio 17 (ecuaciones paramétricas e implícitas de <math display=\"inline\"><mi>H</mi></math>) queda incompleto en esta imagen; &quot;<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>H</mi><mo>=</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo>−</mo><mn>4</mn><mi>λ</mi></mrow></math>&quot; y las líneas finales tienen mal OCR. La notación &quot;ä)&quot; y la &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; de <math display=\"inline\"><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></math> también son dudosas."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p136_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Ejercicio: posición de los planos <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, sean:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>: dado por una ecuación (la lectura en el original es dudosa; véase abajo la parametrización clara).",
        "<math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>: pasa por el punto <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con direcciones <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Calcular: (a) la posición relativa de <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>; (b) el subespacio afín generado por <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∪</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>; (c) hallar, si existe, una recta que pase por el punto <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y sea paralela a <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y a <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Método (en rojo en el original):</strong> para (a), buscar las ecuaciones implícitas de <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>, y un punto y los vectores directores de <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Parametrización de <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Del desarrollo claro de la página, <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> es un plano afín:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>t</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>, donde <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las ecuaciones iniciales de <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> (&quot;<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>&quot;, &quot;<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>z</mi></mrow></math>&quot;) tienen una sintaxis incoherente tomadas literalmente (&quot;<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>&quot; sería contradictorio); probablemente son ecuaciones paramétricas mal transcritas. El desarrollo del final de la página (<math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) es más claro y coherente internamente, y es el que se ha tomado como parametrización de <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>. La resolución del apartado (c) no está en esta imagen (continúa en la página siguiente). La mitad izquierda de la imagen es otro cuaderno (IRAIDE, en euskera)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p152_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>: posición, envolvente afín, recta paralela",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>, ambos planos afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Posición relativa"
    },
    {
     "mota": "testua",
     "html": "Suma de los espacios de direcciones, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>. Reduciendo por filas quedan cuatro vectores independientes, luego el <strong>rango es <math display=\"inline\"><mn>4</mn></math></strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por la fórmula de Grassmann vectorial, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math></span>, es decir <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Como <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, siempre <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>, y por consiguiente <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi></mrow></math>. Siendo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, se cortan <strong>en un único punto</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Envolvente afín"
    },
    {
     "mota": "testua",
     "html": "Como ya <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∪</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>4</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(c) Recta paralela a los dos planos"
    },
    {
     "mota": "testua",
     "html": "La recta <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>q</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> que pasa por el punto <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y es paralela tanto a <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> como a <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> necesita <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>. Pero como <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, no existe tal vector <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>: <strong>no existe tal recta</strong>."
    },
    {
     "mota": "abisua",
     "titulua": "Error del original",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original calcula el rango de <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math> como &quot;<math display=\"inline\"><mn>3</mn></math>&quot; (incorrecto: es <math display=\"inline\"><mn>4</mn></math>), tomando <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como dependiente. En consecuencia, comprobando <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> solo con tres generadores, concluye &quot;<math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi></mrow></math>, se cruzan&quot;; eso es <strong>incorrecto</strong>. En realidad, como el rango es <math display=\"inline\"><mn>4</mn></math>, los planos se cortan en un único punto: <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (comprobado igualando las dos parametrizaciones). En el apartado (b), añadir <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> sobra. En el apartado (c) la autora escribe &quot;((NO LO PILLO))&quot;: la razón es <math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, así que la recta pedida no existe; el ejercicio no tiene solución tal como está planteado."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p154_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Plano paralelo a dos hiperplanos",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hallar el plano que pasa por el punto <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y es paralelo a los dos hiperplanos de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>; ecuaciones de los hiperplanos: <math display=\"block\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>5</mn><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>H</mi><mn>2</mn></msub><mo>:</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Condición de paralelismo"
    },
    {
     "mota": "testua",
     "html": "Para que el plano <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> sea paralelo a <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> y a <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></math> son hiperplanos (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></math>), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> (las direcciones vectoriales siempre se cortan al menos en <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>; en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> la dimensión <math display=\"inline\"><mn>5</mn></math> es imposible). Dado que el plano exige <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cálculo de <math display=\"inline\"><mrow><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos ecuaciones homogéneas, <math display=\"inline\"><mrow><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>5</mn><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Sumando, para eliminar <math display=\"inline\"><mi>t</mi></math>: <math display=\"block\"><mrow><mn>5</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>6</mn><mi>z</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>−</mi><mn>5</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>z</mi><mi>.</mi></mrow></math> Sustituyendo en la segunda ecuación: <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>5</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>13</mn><mi>x</mi><mo>−</mo><mn>17</mn><mi>z</mi><mi>.</mi></mrow></math> Por tanto los puntos son de la forma <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mn>5</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>−</mi><mn>13</mn><mi>x</mi><mo>−</mo><mn>17</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir: <math display=\"block\"><mrow><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>13</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>17</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La solución, por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>13</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>17</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las parametrizaciones de <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> (despejando <math display=\"inline\"><mi>t</mi></math>) están comprobadas: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>H</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>. La expresión de <math display=\"inline\"><mi>t</mi></math> aparece una vez como &quot;<math display=\"inline\"><mrow><mn>13</mn><mi>x</mi><mo>−</mo><mn>17</mn><mi>z</mi></mrow></math>&quot; (sin signo) y luego como &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>13</mn><mi>x</mi></mrow></math>&quot;; ambas son <math display=\"inline\"><mrow><mi>−</mi><mn>13</mn><mi>x</mi><mo>−</mo><mn>17</mn><mi>z</mi></mrow></math> (mero olvido del signo)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p156_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Recta de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>7</mn></msup></math> paralela a dos hiperplanos",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el espacio afín <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>7</mn></msup></math>, hallar (si existe) la recta que pasa por el punto <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y es paralela a los dos hiperplanos de ecuaciones: <math display=\"block\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>5</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>7</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>H</mi><mn>2</mn></msub><mo>:</mo><mn>3</mn><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><msub><mi>x</mi><mn>6</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Condición de paralelismo"
    },
    {
     "mota": "testua",
     "html": "La recta <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es paralela a <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> y a <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> si y solo si:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>⊆</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Del sistema de las dos ecuaciones homogéneas, despejando <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>6</mn></msub></math> (las demás libres):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>5</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>7</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>6</mn></msub><mo>=</mo><mi>−</mi><mn>3</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mrow><mn>4</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como hay <math display=\"inline\"><mn>7</mn></math> variables y <math display=\"inline\"><mn>2</mn></math> ecuaciones independientes, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn></mrow></math>. Generadores de la dirección (correspondientes a cada <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>4</mn></msub><mo>,</mo><msub><mi>x</mi><mn>5</mn></msub><mo>,</mo><msub><mi>x</mi><mn>7</mn></msub></mrow></math> libre):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>∩</mo><msub><mover><mi>H</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Tomando cualquier <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></math> con esos valores, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es la recta pedida."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Segundo ejercicio (planteamiento, <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hallar la recta que pasa por el punto <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y corta a los tres subespacios afines <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo>,</mo><msub><mi>S</mi><mn>3</mn></msub></mrow></math> (dados en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> mediante ecuaciones implícitas)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Parametrizando <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> a partir de una forma continua (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>3</mn><mo>=</mo><mi>y</mi><mi>/</mi><mn>4</mn><mo>=</mo><mi>z</mi><mi>/</mi><mn>5</mn></mrow></math>), <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original usa varias veces el símbolo &quot;<math display=\"inline\"><mi>π</mi></math>&quot; en la ecuación de <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> (&quot;<math display=\"inline\"><mrow><mn>3</mn><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><msub><mi>x</mi><mn>6</mn></msub><mo>−</mo><mi>π</mi><msub><mi>x</mi><mn>7</mn></msub><mo>=</mo><mn>0</mn></mrow></math>&quot;, punto base &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;), pero en este contexto algebraico no tiene sentido, y el otro desarrollo de la página (&quot;<math display=\"inline\"><mrow><mn>3</mn><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><msub><mi>x</mi><mn>6</mn></msub><mo>=</mo><mn>0</mn></mrow></math>&quot;, sin <math display=\"inline\"><mi>π</mi></math>) lo usa; aquí se ha tomado este último. Las listas de vectores de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>7</mn></msup></math> son muy densas y de confianza media; la intersección es de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>5</mn></mrow></math> (la lista original podría tener un generador más, sobrante). El segundo ejercicio (cortar <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo>,</mo><msub><mi>S</mi><mn>3</mn></msub></mrow></math>) no está desarrollado por completo en esta imagen."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p158_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Condición <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><msub><mi>S</mi><mi>i</mi></msub></mrow></math>; parametrización de <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>3</mn></msub></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Parametrización de <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>3</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Continuación del ejercicio de la página anterior. Parametrizando los subespacios <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>3</mn></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>p</mi><mn>2</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>3</mn></msub><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>t</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>p</mi><mn>3</mn></msub><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Condición de intersección"
    },
    {
     "mota": "testua",
     "html": "Condición para que la recta buscada <math display=\"inline\"><mi>R</mi></math> corte a cada uno de los tres subespacios (la misma condición de intersección no vacía de dos subespacios afines):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>∩</mo><msub><mi>S</mi><mi>i</mi></msub><mo>≠</mo><mi>∅</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><msub><mi>p</mi><mi>i</mi></msub></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La parametrización de <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> (&quot;<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><mi>z</mi></mrow></math>&quot;) no concuerda con la ecuación implícita de p156 (&quot;<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>&quot;, es decir <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo>+</mo><mn>3</mn></mrow></math>); diferencia de lectura. <math display=\"inline\"><msub><mi>S</mi><mn>3</mn></msub></math> etiqueta la cuarta coordenada como &quot;<math display=\"inline\"><mi>t</mi></math>&quot; (&quot;<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>−</mo><mn>5</mn></mrow></math>&quot;), distinta del &quot;<math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>&quot; de p156 (<math display=\"inline\"><mi>z</mi></math> frente a <math display=\"inline\"><mi>t</mi></math>, y <math display=\"inline\"><mrow><mi>−</mi><mn>5</mn></mrow></math> frente a <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math>); se recogen ambas sin corregir. La mitad derecha de la imagen es otro cuaderno (IRAIDE)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p182_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Posición de <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math> (según el parámetro <math display=\"inline\"><mi>a</mi></math>)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Subespacios"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>a</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>a</mi><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Parametrizando <math display=\"inline\"><mi>S</mi></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>β</mi></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Posición relativa: condición <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para hallar la intersección de <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math>, se sustituye un punto de <math display=\"inline\"><mi>S</mi></math> en la ecuación de <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math>. Para que el sistema resultante sea compatible debe ser <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn></mrow></math>. En ese caso:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>=</mo><mn>2</mn><mo>−</mo><mn>2</mn><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>t</mi></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Se cumple <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> para todo <math display=\"inline\"><mi>t</mi></math>: el sistema es <strong>compatible indeterminado</strong> con un grado de libertad, es decir, el resultado es una <strong>recta</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Recta <math display=\"inline\"><mi>R</mi></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msub><mi>T</mi><mn>2</mn></msub></math> se cortan según una recta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La parametrización de <math display=\"inline\"><mi>S</mi></math> de la página izquierda y la sustitución en <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math> son de lectura muy difícil (con muchas correcciones); el resultado de arriba es fiable. El punto base de <math display=\"inline\"><mi>R</mi></math> aparece en el original como &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;, pero la parametrización (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mo>−</mo><mn>2</mn><mi>t</mi></mrow></math>) da <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn></mrow></math> para <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, no <math display=\"inline\"><mn>3</mn></math>; por tanto el punto base correcto es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (corregido aquí). Ya había una duda de lectura en la segunda componente (&quot;<math display=\"inline\"><mn>3</mn></math>&quot; frente a &quot;<math display=\"inline\"><mn>2</mn></math>&quot;)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p184_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Caso <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>2</mn></mrow></math>; nuevo ejercicio en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>5</mn></msup></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del caso <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>a</mi><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no está en <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Calculando el rango mediante operaciones por filas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rg </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>≠</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math> <strong>no son paralelos</strong> (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>∉</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>) y <strong>no se cortan</strong> (<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mi>a</mi></msub></mrow></math>). En consecuencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio nuevo (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>5</mn></msup></math>)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>5</mn></msup></math>, el subespacio <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span> y la recta <math display=\"inline\"><mi>R</mi></math> por el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con dirección <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Sean <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><msub><mi>S</mi><mrow><mi>a</mi><mo>,</mo><mi>b</mi></mrow></msub></math> el subespacio paralelo a <math display=\"inline\"><mi>S</mi></math> que pasa por el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Hallar las ecuaciones implícitas de <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math> y de <math display=\"inline\"><mrow><msub><mi>S</mi><mrow><mi>a</mi><mo>,</mo><mi>b</mi></mrow></msub><mo>∩</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, y la posición relativa de <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mrow><mi>a</mi><mo>,</mo><mi>b</mi></mrow></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Parametrización de <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math>"
    },
    {
     "mota": "testua",
     "html": "Sumando y restando las dos ecuaciones, el sistema equivalente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>5</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mrow><mn>4</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>5</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>4</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>5</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>4</mn></msub><mo>,</mo><msub><mi>x</mi><mn>5</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Construcción de <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Desde el punto base de <math display=\"inline\"><mi>R</mi></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) hasta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el vector es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; como no es múltiplo de <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mi>R</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>R</mi><mo>∩</mo><mi>P</mi><mo>=</mo><mi>∅</mi></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la operación por filas el original escribe &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo>−</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;, pero <math display=\"inline\"><mrow><msub><mi>F</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>F</mi><mn>2</mn></msub></mrow></math> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo>−</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (el último signo); no cambia la conclusión sobre el rango. El sistema reducido de <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> aparece en el original como &quot;<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn></mrow></math>&quot;, pero eso es <strong>incorrecto</strong>: combinando las ecuaciones se obtienen <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (corregido aquí). La parametrización final, en cambio, es correcta (cumple las dos ecuaciones originales). La notación &quot;<math display=\"inline\"><mrow><mi>p</mi><mo>→</mo><mi>p</mi></mrow></math>&quot; designa el vector <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p186_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Ecuaciones implícitas de <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math>, <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∩</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones implícitas de <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>. Eliminando los parámetros (comprobado):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mi>b</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones implícitas de <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Eliminando la parametrización (<math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></math>), las ecuaciones que obtiene el original:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>4</mn></msub><mo>−</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>4</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>λ</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∩</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Juntando las ecuaciones de las dos familias. De las dos primeras, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>; sustituyendo en la ecuación <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>b</mi></mrow></math>, es decir: <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>b</mi><mi>/</mi><mn>2</mn><mi>.</mi></mrow></math> El resto en <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>λ</mi><mo>+</mo><mi>b</mi><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>/</mi><mn>2</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> La compatibilidad del sistema depende del determinante: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mi>.</mi></mrow></math> Si <math display=\"inline\"><mrow><mi>λ</mi><mo>≠</mo><mn>2</mn></mrow></math>, hay solución única; si <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, hay que estudiar el caso especial (continúa en la página siguiente)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La derivación intermedia de las ecuaciones de <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math> es de lectura muy difícil (en el original aparecen expresiones como &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;, probablemente errores); las tres ecuaciones finales son de lectura clara y son las que se han recogido. En la parametrización de <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math> aparece un <math display=\"inline\"><mi>λ</mi></math> que no concuerda del todo con las direcciones de p184 (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>); incertidumbre del desarrollo intermedio. El recuento de generadores de <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>) no es natural, pero las ecuaciones implícitas no dependen de él."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p188_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Casos de compatibilidad; posición general",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El determinante principal <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>2</mn><mo>−</mo><mi>λ</mi></mrow></math>, luego si <math display=\"inline\"><mrow><mi>λ</mi><mo>≠</mo><mn>2</mn></mrow></math> es <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>, y se anula si <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Caso I: <math display=\"inline\"><mrow><mi>λ</mi><mo>≠</mo><mn>2</mn></mrow></math> (compatible determinado)"
    },
    {
     "mota": "testua",
     "html": "Por la regla de Cramer, el sistema tiene solución única. <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mi>b</mi><mi>/</mi><mn>2</mn></mrow></math>, y <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> (y <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>/</mi><mn>2</mn><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></math>) mediante los determinantes, en función de <math display=\"inline\"><mrow><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>λ</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Caso II: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones son <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mo>+</mo><mi>b</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>/</mi><mn>2</mn></mrow></math>. Para que sea compatible, ambas deben coincidir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munder><munder><mrow><mn>2</mn><mo>+</mo><mi>b</mi><mo>≠</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>/</mi><mn>2</mn></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>.</mi><mspace width=\"0.222em\"></mspace><mi>k</mi><mi>a</mi><mi>s</mi><mi>u</mi><mi>a</mi></mrow></munder><mo>→</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∩</mo><msub><mi>T</mi><mi>λ</mi></msub><mo>=</mo><mi>∅</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><munder><munder><mrow><mn>2</mn><mo>+</mo><mi>b</mi><mo>=</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>/</mi><mn>2</mn></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>.</mi><mspace width=\"0.222em\"></mspace><mi>k</mi><mi>a</mi><mi>s</mi><mi>u</mi><mi>a</mi></mrow></munder><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mi>b</mi><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mo>+</mo><mi>b</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Posición general: paralelismo"
    },
    {
     "mota": "testua",
     "html": "Para que <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><msub><mi>T</mi><mi>λ</mi></msub></math> sean paralelos, se necesita <math display=\"inline\"><mrow><msub><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mi>λ</mi></msub><mo>⊆</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mi>λ</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>). Al añadir a los tres generadores de <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> los de <math display=\"inline\"><msub><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mi>λ</mi></msub></math>, el rango de la matriz es <strong>4</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rg </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>4</mn><mo>&gt;</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como el rango aumenta, <math display=\"inline\"><mrow><msub><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mi>λ</mi></msub><mo>⊈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <strong>no son paralelos, se cruzan</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de <math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∪</mo><msub><mi>T</mi><mi>λ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Según la posición relativa, dos casos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>1</mn><mi>.</mi><mspace width=\"0.222em\"></mspace><mi>k</mi><mi>a</mi><mi>s</mi><mi>u</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> puntua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mi>λ</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>2</mn><mi>.</mi><mspace width=\"0.222em\"></mspace><mi>k</mi><mi>a</mi><mi>s</mi><mi>u</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> puntua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mi>λ</mi></msub><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La expresión exacta de <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> mediante determinantes en el caso I es de lectura muy difícil y no se ha comprobado del todo. El original escribe a veces &quot;<math display=\"inline\"><msub><mi>x</mi><mn>3</mn></msub></math>&quot; en lugar de &quot;<math display=\"inline\"><msub><mi>x</mi><mn>5</mn></msub></math>&quot; (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mi>b</mi><mi>/</mi><mn>2</mn></mrow></math>); a partir de la relación de p186 (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>), lo correcto es <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><msub><mi>x</mi><mn>5</mn></msub><mo>=</mo><mi>b</mi><mi>/</mi><mn>2</mn></mrow></math>. El origen de la fila &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; de la segunda matriz reducida no se sigue del todo a partir de las operaciones, pero la conclusión de que el rango es <math display=\"inline\"><mn>4</mn></math> es sólida (confirma la ausencia de paralelismo)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p209_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Ejercicios 16-19: parámetro y paralelogramo",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 16: posición de <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math>"
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>6</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>7</mn><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>T</mi><mi>a</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mi>a</mi></math> parámetro). Parametrizando <math display=\"inline\"><mi>S</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las direcciones (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) son linealmente independientes, luego <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Para saber si se cortan, se estudia mediante un determinante si <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi><mo>+</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cuando el determinante se anula, se cortan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (puntu batean ebaki)</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>: <strong>se cruzan</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 19: diagonales del paralelogramo"
    },
    {
     "mota": "testua",
     "html": "Punto de intersección de las diagonales de un paralelogramo de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>. En el sistema de referencia <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>a</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>c</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(por la condición de paralelogramo <math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>a</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>). Las diagonales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>D</mi><mn>1</mn></msub><mo>=</mo><mi>a</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>a</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>D</mi><mn>2</mn></msub><mo>=</mo><mi>b</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>b</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La intersección de ambas es el <strong>punto medio</strong>, en coordenadas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math>: las diagonales de un paralelogramo se cortan en su punto medio."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el ejercicio 16, la lectura de la dirección de <math display=\"inline\"><msub><mi>T</mi><mi>a</mi></msub></math> (&quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; frente a &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;) y de <math display=\"inline\"><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover></math> es dudosa; el determinante aparece en el original como &quot;<math display=\"inline\"><mrow><mi>a</mi><mo>+</mo><mn>1</mn></mrow></math>&quot;, pero según los valores exactos de los vectores un cálculo independiente podría dar otro resultado. El método (valor crítico <math display=\"inline\"><mi>a</mi></math> para anular el determinante) es correcto, y <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> es la conclusión del original. Las anotaciones al margen como &quot;¿AS=3 GENERO?&quot; tienen mal OCR."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p137cont_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Cierre del ejercicio 19: intersección de las diagonales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el sistema <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>a</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, vértices <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math>. Diagonales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>a</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sus ecuaciones implícitas respecto de <math display=\"inline\"><mi>E</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>:</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Punto de intersección"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resolviendo el sistema: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>, es decir: <math display=\"block\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub><mi>.</mi></mrow></math> Se comprueba que <math display=\"inline\"><mi>m</mi></math> es el <strong>punto medio</strong>: <math display=\"block\"><mrow><mover><mrow><mi>a</mi><mi>m</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mover><mrow><mi>a</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mrow><mi>b</mi><mi>m</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mover><mrow><mi>b</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math> Por tanto las dos diagonales del paralelogramo se cortan en su <strong>punto medio común</strong>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todos los cálculos están comprobados: <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math> es el punto medio de las dos diagonales. Las notaciones &quot;<math display=\"inline\"><mover><mrow><mi>a</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover></math>&quot; y &quot;<math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>c</mi></mrow></math>&quot; (con barra encima) designan la mitad de la diagonal correspondiente. La mitad izquierda de la imagen es el cuaderno CHUSA (en castellano)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p146_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Intersección de planos afines: ejemplos y ecuaciones",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo: <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> (vectores con la cuarta componente nula). Como la cuarta componente de <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> es <math display=\"inline\"><mrow><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, luego <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Planos que se cortan en un único punto"
    },
    {
     "mota": "testua",
     "html": "Si los planos <math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> se cortan en un único punto, <math display=\"inline\"><mrow><mo>∃</mo><mi>c</mi><mo>∈</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> y <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>c</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Según la dimensión:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zuzena</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> planoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al ser un único punto, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Por ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paramétricas <math display=\"inline\"><mo>↔</mo></math> implícitas"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>. Eliminando los parámetros (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>+</mo><mi>β</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>β</mi></mrow></math>): <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>t</mi><mo>−</mo><mn>1</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>t</mi><mo>−</mo><mn>1</mn></mrow></math>. Ecuaciones implícitas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A la inversa, para parametrizar <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, dejando <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math> libre, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la expresión inicial de <math display=\"inline\"><mi>S</mi></math> el original escribe el vector director <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero en el desarrollo usa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (segunda componente <math display=\"inline\"><mn>2</mn></math>); se ha usado este último. La expresión de <math display=\"inline\"><mi>z</mi></math> aparece en el original como &quot;<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>t</mi><mo>−</mo><mn>2</mn></mrow></math>&quot;, pero el cálculo correcto es <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>+</mo><mi>t</mi><mo>−</mo><mn>1</mn></mrow></math> (y la segunda ecuación implícita es <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>, no <math display=\"inline\"><mrow><mi>+</mi><mn>2</mn></mrow></math>); corregido aquí. La parametrización de <math display=\"inline\"><mi>T</mi></math> está comprobada: el punto base <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cumple las dos ecuaciones."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p142_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Clausura de <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>; ejercicio <math display=\"inline\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>∩</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Recta <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cerrando el sistema de intersección de los planos <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> de la página anterior (p140), la solución depende de un único parámetro (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi></mrow></math>), luego <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> es una <strong>recta</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por Grassmann, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio <math display=\"inline\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>∩</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> (planteamiento)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, sean:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Recta <math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math>: pasa por el punto <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con dirección <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msub><mi>R</mi><mn>1</mn></msub></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "Plano <math display=\"inline\"><mi>S</mi></math>: pasa por los puntos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "Subespacio afín <math display=\"inline\"><mi>T</mi></math>: pasa por el punto <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con la dirección fijada por <math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math>.",
        "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Hallar <math display=\"inline\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>∩</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — confianza baja",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta página es muy densa (letra muy pequeña) y gran parte no se puede leer con fiabilidad. La conclusión fiable es la de arriba (recta <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>). Las ecuaciones implícitas de <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi></mrow></math>, el sistema de referencia <math display=\"inline\"><mi>E</mi></math> y el desarrollo de las coordenadas afines (página derecha) son de lectura muy dudosa y no se han recogido aquí. También hay una incoherencia interna en el sistema <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> de la página izquierda (&quot;<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>&quot; frente a &quot;<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>1</mn></mrow></math>&quot;): el primero da <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (coincide con el punto base, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> donde <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>), el segundo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>; debido a la incertidumbre de la lectura. La resolución del ejercicio <math display=\"inline\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>∩</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math> no está en esta imagen (probablemente continúa en la página siguiente)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p144_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>∩</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>: resolución (incompatible)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones implícitas de la recta <math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, es decir <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Eliminando <math display=\"inline\"><mi>λ</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>z</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones implícitas del plano <math display=\"inline\"><mi>S</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, es decir <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>β</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>β</mi></mrow></math>. Eliminando los parámetros:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>z</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Subespacio <math display=\"inline\"><mi>T</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math></span>, donde <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow></math>. El núcleo es un subespacio vectorial:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>:</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>∩</mo><mi>S</mi><mo>∩</mo><mi>T</mi></mrow></math>"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Juntando las ecuaciones de los tres subespacios y sustituyendo: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math>) y <math display=\"inline\"><mrow><mi>y</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mi>S</mi></math>) <math display=\"inline\"><mrow><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math>) <math display=\"inline\"><mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>z</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mi>S</mi></math>) <math display=\"inline\"><mrow><mo>→</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>. Pero comprobando la segunda ecuación de <math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math>: <math display=\"block\"><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mi>z</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math> <strong>Contradicción</strong>: el sistema es <strong>incompatible</strong>. Por tanto no existe ningún punto que esté a la vez en <math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math>, <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math>: <math display=\"block\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>∩</mo><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi><mi>.</mi></mrow></math> (las ecuaciones de <math display=\"inline\"><mi>T</mi></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, tampoco se cumplen: <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>+</mo><mn>0</mn><mo>−</mo><mn>0</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>.)"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original remata el resultado con &quot;IMPOSIBLE&quot;, indicando que el sistema es incompatible. La dirección del subespacio afín <math display=\"inline\"><mi>T</mi></math> coincide con <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> (núcleo de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow></math>), de ahí que la ecuación &quot;<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>&quot; se remate en ambos contextos. El dibujo de la página derecha (que enlaza los valores <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> entre las ecuaciones) es una ayuda de la autora para la resolución por sustitución."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p151_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a37",
   "maila": 1,
   "izenburua": "Geometría afín: envolvente afín y suma afín",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del tema 7. Se define la <strong>envolvente afín</strong> de un conjunto (el menor subespacio afín que lo contiene) y, con ella, la <strong>suma afín</strong> de dos subespacios —como la unión no es afín, se toma su envolvente—."
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Envolvente afín",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Envolvente afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>A</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> un subconjunto cualquiera. La <strong>envolvente afín</strong> de <math display=\"inline\"><mi>A</mi></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, el <strong>menor subespacio afín</strong> que contiene a <math display=\"inline\"><mi>A</mi></math>, y puede expresarse así (con <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>A</mi></mrow></math> cualquiera): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>q</mi><mo>∈</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math> Su dirección es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>q</mi><mo>∈</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, y no depende del <math display=\"inline\"><mi>p</mi></math> elegido."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ejemplos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si <math display=\"inline\"><mi>A</mi></math> ya es un subespacio afín, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>A</mi></mrow></math> (el menor afín que lo contiene es él mismo).",
      "Siendo <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>p</mi><mo>≠</mo><mi>q</mi></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es la <strong>recta afín</strong> (dimensión 1) que une <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math>.",
      "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo>,</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Si <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover></math> son <strong>linealmente independientes</strong>, es un <strong>plano afín</strong> (dimensión 2); si son <strong>dependientes</strong>, <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> se reduce a una <strong>recta afín</strong>. (La dimensión de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es el rango de los vectores <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math>.)"
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Suma afín",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La unión de dos subespacios afines, en general, no es afín (véase <math display=\"inline\"><mn>0046</mn></math>); por eso la <strong>suma afín</strong> se define como su envolvente:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Suma afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. Su <strong>suma afín</strong> es el <strong>menor</strong> subespacio afín que contiene a su unión: <math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≔</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∪</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es decir, el menor afín que contiene todos los puntos de <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>. La operación es <strong>cerrada</strong> (un buen sustituto de la unión), análoga a la suma <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> de subespacios vectoriales."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0047</code>, IMG_2026_07_28_02_17_12S, páginas 92-93; &quot;ALJEBRA 2.1&quot;, universidad). Las definiciones y los ejemplos son <strong>correctos</strong> (geometría afín estándar): la envolvente afín como punto + dirección generada, y la suma afín como envolvente de la unión. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0047.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p048_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; fórmula de Grassmann afín y posición de dos planos",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Fórmula de Grassmann afín y posición de dos planos en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se determina la dirección de la suma afín y de ahí la <strong>fórmula de Grassmann afín</strong> (en dos casos, según los subespacios se corten o no). Como consecuencia: en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> dos planos afines no pueden cruzarse en un único punto."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dirección de la suma afín"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mi>p</mi><mo>+</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math>, la dirección de la suma afín contiene las dos direcciones <strong>y</strong> el vector <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> que une los orígenes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>p</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi></mrow></math>, es <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math> (véase <math display=\"inline\"><mn>0046</mn></math>), y el término <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> sobra: <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>p</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fórmula de Grassmann afín"
    },
    {
     "mota": "testua",
     "html": "Recordando la de Grassmann de los espacios vectoriales, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>1</mn></msub><mo>+</mo><msub><mi>U</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>U</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>U</mi><mn>2</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>U</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, se pasa al caso afín:"
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Fórmula de Grassmann afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>(1) Si se cortan</strong> (<math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≠</mo><mi>∅</mi></mrow></math>): <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>",
        "<strong>(2) Si no se cortan</strong> (<math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mi>∅</mi></mrow></math>): <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>∩</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mi>.</mi></mrow></math>"
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Demostración.</strong> La dimensión afín es la de su dirección, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, y se aplica la fórmula de Grassmann vectorial. En el caso <strong>(1)</strong>, como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> sobra, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, y al cortarse <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>∩</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (<math display=\"inline\"><mn>0046</mn></math>). En el caso <strong>(2)</strong>, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∉</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math>, luego <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∩</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn></mrow></math>: de ahí viene el término <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math>.   <math display=\"inline\"><mi>◼</mi></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Consecuencia: dos planos afines en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Dos planos no pueden cruzarse en un punto",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, dos planos afines <strong>no pueden cruzarse en un único punto</strong>. Por reducción al absurdo: si <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> fueran planos (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>) siendo <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>), por la fórmula de Grassmann <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se tendría <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>4</mn></mrow></math></span>. Pero como <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, debería ser <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>3</mn></mrow></math>: contradicción (<math display=\"inline\"><mrow><mn>4</mn><mo>&gt;</mo><mn>3</mn></mrow></math>). Por tanto, en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> dos planos son paralelos o <strong>se cortan en una recta</strong> (nunca en un único punto)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0048</code>, IMG_2026_07_28_02_17_17S, páginas 94-95; &quot;ALJEBRA 2.1&quot;, universidad). Las dos fórmulas y la consecuencia son <strong>correctas</strong>: el recuento de dimensiones de cada caso (<math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>4</mn><mo>&gt;</mo><mn>3</mn></mrow></math> imposible) es correcto. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0048.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p049_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; consecuencias de Grassmann y sistema de referencia afín",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a41",
   "maila": 1,
   "izenburua": "Consecuencias de Grassmann y sistema de referencia afín (7.4)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Más consecuencias de la fórmula de Grassmann afín (posiciones de planos y rectas según la dimensión) y, después, la definición de <strong>sistema de referencia afín</strong>: en geometría afín las coordenadas necesitan <strong>un punto y una base</strong>."
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Consecuencias de Grassmann",
   "blokeak": [
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>4</mn></mrow></math>) dos planos pueden cortarse en un punto.</strong> Si <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow></math></span> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>4</mn></mrow></math></span>; en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> es imposible, pero en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>4</mn></mrow></math>) es posible.",
      "<strong>En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> una recta y un plano no pueden cruzarse.</strong> Si <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> recta (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>) y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> plano (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>) fueran disjuntos y <math display=\"inline\"><mrow><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>∩</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>), Grassmann en el caso <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> daría <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>4</mn><mo>&gt;</mo><mn>3</mn></mrow></math></span>: imposible. Por tanto, en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> una recta y un plano <strong>se cortan</strong> (en un punto) <strong>o son paralelos</strong> (<math display=\"inline\"><mrow><mover><msub><mi>S</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>⊆</mo><mover><msub><mi>S</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></mrow></math>); nunca se cruzan."
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "7.4 Sistema de referencia afín",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En un espacio vectorial las coordenadas se dan respecto de una <strong>base</strong> (implícitamente desde el origen, <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>). En el espacio afín no hay un origen privilegiado: hacen falta <strong>un punto y una base</strong>."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sistema de referencia afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> un punto y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>v</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>v</mi><mi>n</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> una base de la dirección. Al par <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se le llama <strong>sistema de referencia afín</strong> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, y al punto <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> el <strong>origen</strong> del sistema. Las <strong>coordenadas afines</strong> de cada punto provienen de la descomposición <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>x</mi><mi>i</mi></msub><mover><msub><mi>v</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Independencia afín",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Independencia afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los puntos <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> son <strong>afínmente independientes</strong> si y solo si los vectores <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mi>n</mi></msub></mrow><mo accent=\"true\">→</mo></mover></mrow></math> son <strong>linealmente independientes</strong>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> puntos afinmente independientes generan un subespacio afín de dimensión <math display=\"inline\"><mi>n</mi></math> (un <strong>símplice</strong>) y definen un sistema de referencia afín."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0049</code>, IMG_2026_07_28_02_17_23S, páginas 96-97; &quot;ALJEBRA 2.1&quot;, universidad). Las consecuencias y las definiciones son <strong>correctas</strong>: el recuento de dimensiones (<math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>4</mn></mrow></math>; <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>4</mn><mo>&gt;</mo><mn>3</mn></mrow></math>) y la noción de sistema de referencia afín (punto + base) son estándar. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0049.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p050_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; coordenadas afines, sistema canónico y ejemplo",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Envolvente afín de tres puntos (recta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sean los puntos <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Para calcular su envolvente afín, <math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, los vectores diferencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los dos vectores son linealmente <strong>dependientes</strong> (uno es múltiplo del otro, con factor <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>), luego los tres puntos están <strong>alineados</strong> y la envolvente afín es una <strong>recta</strong> (no un plano):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi mathvariant=\"script\">ℒ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones paramétricas y continua"
    },
    {
     "mota": "testua",
     "html": "Desarrollando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>λ</mi></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando <math display=\"inline\"><mi>λ</mi></math> de cada ecuación, la <strong>ecuación continua</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>−</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>y</mi><mo>−</mo><mn>2</mn></mrow><mn>1</mn></mfrac><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mn>3</mn></mrow><mrow><mi>−</mi><mn>2</mn></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original escribe <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero el cálculo correcto es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>−</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; es un lapsus en la primera componente (<math display=\"inline\"><mn>1</mn></math> en lugar de <math display=\"inline\"><mn>2</mn></math>). Con el valor correcto, la igualdad <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover></mrow></math> (la que dice el original) es <strong>exacta</strong> y confirma la alineación. Aquí se ha recogido <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> corregido. El dibujo tridimensional de la derecha muestra los tres puntos, el vector director <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></math> y la recta resultante; <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> está dibujado fuera de la recta roja, probablemente por la imprecisión del dibujo a mano. Los mismos puntos (<code>koadernoa_chusa_p122</code>) se trabajan de nuevo (2013/3/3)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p120_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Subespacios afines: Grassmann y posición relativa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Subespacios afines (variedades afines)"
    },
    {
     "mota": "testua",
     "html": "En un espacio afín <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, una parte <math display=\"inline\"><mi>S</mi></math> es un <strong>subespacio afín</strong> si tiene estructura afín:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, donde <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> es un subespacio vectorial de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>. Si <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>p</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, la <strong>ecuación paramétrica</strong>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>p</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>p</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Intersección y envolvente afín"
    },
    {
     "mota": "testua",
     "html": "Dados dos subespacios <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>q</mi><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta kasu horretan </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>c</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>c</mi><mo>∈</mo><mi>S</mi><mo>∩</mo><mi>T</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La unión (<math display=\"inline\"><mrow><mi>S</mi><mo>∪</mo><mi>T</mi></mrow></math>) no es un subespacio afín; su <strong>envolvente afín</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>∪</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Grassmann, caso afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Posición relativa (ejercicio)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos <strong>planos</strong> afines <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> de <math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> (ambos <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>2</mn></mrow></math></span>) se <strong>cruzan</strong> (no son paralelos, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>≠</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>; y <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>). ¿Cuál es la dimensión de <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Como no son paralelos y <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>, Grassmann da <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn></mrow></math></span>. Como <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>4</mn></mrow></math>, luego: <math display=\"block\"><mrow><mn>4</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo>≤</mo><mn>4</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>1</mn><mi>.</mi></mrow></math> Además, como <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>≠</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>2</mn></mrow></math>. Combinando ambas condiciones: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la página derecha, junto a &quot;1) SI CORTAN&quot; aparece &quot;<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> o <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>⊆</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>&quot;, pero eso corresponde al caso de paralelismo, no al de intersección; probablemente la flecha va al segundo bloque (&quot;2) NO SE CORTAN&quot;). La línea final &quot;<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi><mo>⇔</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi><mo>+</mo><mi>T</mi></mrow></math>&quot; usa &quot;<math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi></mrow></math>&quot; en lugar de &quot;<math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>&quot; (sin barra), incoherente con la definición de la izquierda. Las anotaciones al margen &quot;CAUSA&quot;/&quot;CONTRA&quot; son oscuras sin contexto."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p140_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Coordenadas afines: sistema canónico y ejemplo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dado un sistema de referencia afín, se definen las <strong>coordenadas afines</strong> de un punto: las coordenadas en la base del vector que va del origen al punto. En el sistema canónico coinciden con las componentes usuales; en otro sistema, en cambio, no."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coordenadas afines"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> puntos afinmente independientes dan un sistema de referencia: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mi>n</mi></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Coordenadas afines",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> un sistema de referencia afín de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> y <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> un punto. Las <strong>coordenadas de <math display=\"inline\"><mi>p</mi></math> respecto a <math display=\"inline\"><mi>E</mi></math></strong> son las coordenadas del vector <math display=\"inline\"><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover></math> respecto a <math display=\"inline\"><mi>β</mi></math>: <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>E</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub><mover><msub><mi>v</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es decir, el problema afín se reduce al vectorial: <math display=\"inline\"><mi>p</mi></math> se mide desde el origen (<math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math>), en las direcciones de <math display=\"inline\"><mi>β</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema canónico"
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>β</mi><mi>K</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>e</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>e</mi><mi>n</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (base canónica), <math display=\"inline\"><mrow><msub><mi>E</mi><mi>K</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>β</mi><mi>K</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es el <strong>sistema canónico</strong>. Para un punto <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>p</mi><mo>−</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>=</mo><mo>∑</mo><msub><mi>x</mi><mi>i</mi></msub><mover><msub><mi>e</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover></mrow></math>, luego"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>E</mi><mi>K</mi></msub></msub><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "las coordenadas afines <strong>coinciden con las componentes usuales del punto</strong>. (Por eso en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> normalmente no se distingue entre punto y vector.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo"
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math> sea <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> el sistema de referencia (<math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><msub><mi>v</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) y <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> el punto. Entonces <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y resolviendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>4</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El mismo punto tiene <strong>componentes usuales <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong> pero <strong>coordenadas afines <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong> en el sistema <math display=\"inline\"><mi>E</mi></math>: las coordenadas dependen de <math display=\"inline\"><mi>E</mi></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0050</code>, IMG_2026_07_28_02_17_27S, páginas 98-99; &quot;ALJEBRA 2.1&quot;, universidad). Ejemplo comprobado con SymPy: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math>. La definición y el sistema canónico son estándar. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0050.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p051_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; cambio de sistema de referencia afín (X̄=Q+PX)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Cambio de sistema de referencia afín: <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>Q</mi><mo>+</mo><mi>P</mi><mi>X</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dados dos sistemas de referencia afines, se determina la relación entre las coordenadas de un mismo punto: una <strong>parte lineal</strong> (cambio de base de las direcciones) más una <strong>traslación</strong> (desplazamiento del origen)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Relación entre los dos sistemas"
    },
    {
     "mota": "testua",
     "html": "Sean <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>0</mn></msub><mo>,</mo><mover><mi>β</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dos sistemas de referencia afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, y <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> un punto, con coordenadas <math display=\"inline\"><mi>X</mi></math> en <math display=\"inline\"><mi>E</mi></math> y coordenadas <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover></math> en <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math> (matrices columna)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema del cambio de coordenadas"
    },
    {
     "mota": "testua",
     "html": "Escribiendo el punto <math display=\"inline\"><mi>p</mi></math> en los dos sistemas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Respecto de <math display=\"inline\"><mi>E</mi></math>: <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mi>β</mi><mo>⋅</mo><mi>X</mi></mrow></math> (el origen más el vector con coordenadas <math display=\"inline\"><mi>X</mi></math> en <math display=\"inline\"><mi>β</mi></math>).",
      "Respecto de <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math>: <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>+</mo><mover><mi>β</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Igualando ambas expresiones y llevándolo todo a las coordenadas de <math display=\"inline\"><mover><mi>β</mi><mo accent=\"true\">¯</mo></mover></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>Q</mi><mo>+</mo><mi>P</mi><mi>X</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Componentes del cambio de coordenadas",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msubsup><mi>M</mi><mover><mi>β</mi><mo accent=\"true\">¯</mo></mover><mi>β</mi></msubsup></mrow></math> es la <strong>matriz de cambio de base</strong>: sus columnas son los vectores de <math display=\"inline\"><mi>β</mi></math>, expresados en coordenadas de <math display=\"inline\"><mover><mi>β</mi><mo accent=\"true\">¯</mo></mover></math>.",
        "<math display=\"inline\"><mi>Q</mi></math> = coordenadas de <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> (el origen de <math display=\"inline\"><mi>E</mi></math>) en el sistema <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es decir, el cambio de coordenadas afín es la suma de una <strong>parte lineal</strong> (<math display=\"inline\"><mrow><mi>P</mi><mi>X</mi></mrow></math>, cambio de base de las direcciones) y una <strong>traslación</strong> (<math display=\"inline\"><mi>Q</mi></math>, desplazamiento del origen); esta es la forma general de la <strong>aplicación afín</strong> entre dos sistemas de coordenadas."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0051</code>, IMG_2026_07_28_02_17_32S, páginas 100-101; &quot;ALJEBRA 2.1&quot;, universidad; la página derecha casi vacía). La fórmula <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>Q</mi><mo>+</mo><mi>P</mi><mi>X</mi></mrow></math> es <strong>correcta</strong>: sale de igualar <math display=\"inline\"><mi>p</mi></math> en <math display=\"inline\"><mi>E</mi></math> y en <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math>, siendo <math display=\"inline\"><mi>P</mi></math> el cambio de base y <math display=\"inline\"><mi>Q</mi></math> el desplazamiento del origen. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0051.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p052_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; estructura del espacio afín (φ_p, Chasles) en la versión de Chusa",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Estructura del espacio afín: la aplicación <math display=\"inline\"><msub><mi>φ</mi><mi>p</mi></msub></math> y la relación de Chasles",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Chusa también trabaja la <strong>geometría afín</strong>, <strong>en paralelo</strong> con el curso universitario. Aquí se fija la estructura afín de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> (con la aplicación <math display=\"inline\"><msub><mi>φ</mi><mi>p</mi></msub></math> que relaciona puntos y vectores, y la relación de Chasles), y se reconstruyen el sistema de referencia y las coordenadas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Estructura afín: <math display=\"inline\"><msub><mi>φ</mi><mi>p</mi></msub></math> y Chasles"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> es un <strong>conjunto de puntos</strong> y, a la vez, un <strong>espacio vectorial</strong> sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. El vínculo entre ambos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>φ</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para cada punto, la aplicación <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>p</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> es <strong>biyectiva</strong>, y se cumple la <strong>relación de Chasles</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>q</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo>,</mo><mi>r</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estas dos condiciones convierten <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> en un <strong>espacio afín</strong> (sobre el espacio vectorial <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>). Consecuencias:"
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Consecuencias de Chasles",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mi>q</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><mi>q</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>.",
        "<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>r</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>q</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> (regla del paralelogramo afín)."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema de referencia y coordenadas"
    },
    {
     "mota": "testua",
     "html": "Fijando un punto (<math display=\"inline\"><mi>p</mi></math>, el origen) y una base (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>e</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>e</mi><mi>n</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>), las <strong>coordenadas</strong> del punto <math display=\"inline\"><mi>q</mi></math> son las del vector <math display=\"inline\"><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></math> en <math display=\"inline\"><mi>β</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>C</mi><mi>β</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub><mover><msub><mi>e</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Respecto de un origen (<math display=\"inline\"><mi>O</mi></math>), <strong>el vector entre dos puntos es la resta de coordenadas</strong>: siendo <math display=\"inline\"><mrow><mover><mrow><mi>O</mi><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mover><mrow><mi>O</mi><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, por Chasles"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>1</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>O</mi><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><mi>O</mi><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por último, <math display=\"inline\"><msub><mi>φ</mi><mi>p</mi></msub></math> es <strong>inyectiva</strong>: si <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>p</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>φ</mi><mi>p</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>, y en coordenadas <math display=\"inline\"><mrow><msub><mi>b</mi><mi>i</mi></msub><mo>−</mo><msub><mi>a</mi><mi>i</mi></msub><mo>=</mo><msub><mi>c</mi><mi>i</mi></msub><mo>−</mo><msub><mi>a</mi><mi>i</mi></msub></mrow></math> (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), luego <math display=\"inline\"><mrow><msub><mi>b</mi><mi>i</mi></msub><mo>=</mo><msub><mi>c</mi><mi>i</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>r</mi></mrow></math>. Entre espacios de la misma dimensión es, por tanto, <strong>biyectiva</strong>: fijado el origen, puntos y vectores <strong>pueden identificarse</strong>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0052</code>, IMG_2026_07_28_02_17_40S, páginas 102-103; &quot;ÁLGEBRA NEWTON&quot; / Chusa). Chasles, las consecuencias, la resta de coordenadas y la inyectividad de <math display=\"inline\"><msub><mi>φ</mi><mi>p</mi></msub></math> son <strong>correctos</strong> (axiomas de Weyl del espacio afín). El <strong>mismo</strong> tema de la versión universitaria (<math display=\"inline\"><mn>0046</mn></math>-<math display=\"inline\"><mn>0051</mn></math>), dado por Chusa en paralelo. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0052.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p053_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; cambio de coordenadas afín en dos pasos (X=A+PY)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Cambio de coordenadas afín en dos pasos (versión de Chusa): <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>P</mi><mi>Y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Chusa descompone el cambio de coordenadas afín <strong>en dos pasos</strong> —primero el <strong>origen</strong>, luego la <strong>base</strong>— y recupera la fórmula universitaria <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>Q</mi><mo>+</mo><mi>P</mi><mi>X</mi></mrow></math> (<math display=\"inline\"><mn>0051</mn></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paso 1: cambio de origen (traslación)"
    },
    {
     "mota": "testua",
     "html": "Manteniendo la misma base (<math display=\"inline\"><msub><mi>β</mi><mn>1</mn></msub></math>) pero cambiando el origen de <math display=\"inline\"><msub><mi>O</mi><mn>1</mn></msub></math> a <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>O</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> = coordenadas de <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math> en el sistema de <math display=\"inline\"><msub><mi>O</mi><mn>1</mn></msub></math>), por Chasles <math display=\"inline\"><mrow><mover><mrow><msub><mi>O</mi><mn>2</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><msub><mi>O</mi><mn>1</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><msub><mi>O</mi><mn>1</mn></msub><msub><mi>O</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover></mrow></math>; en coordenadas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo>=</mo><mi>X</mi><mo>−</mo><mi>A</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las coordenadas nuevas son las antiguas <strong>menos</strong> las del nuevo origen: una <strong>traslación</strong> pura."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paso 2: cambio de base (parte lineal)"
    },
    {
     "mota": "testua",
     "html": "Manteniendo el mismo origen pero cambiando la base de <math display=\"inline\"><msub><mi>β</mi><mn>1</mn></msub></math> a <math display=\"inline\"><msub><mi>β</mi><mn>2</mn></msub></math>, la relación entre las coordenadas de un vector es <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>P</mi><msup><mi>X</mi><mo>″</mo></msup></mrow></math>, donde <math display=\"inline\"><mi>P</mi></math> es la <strong>matriz del cambio de base</strong> (columnas: los vectores de una base en coordenadas de la otra). Es la <strong>parte lineal</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cambio afín general"
    },
    {
     "mota": "testua",
     "html": "Encadenando los dos pasos —primero el origen (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo>=</mo><mi>X</mi><mo>−</mo><mi>A</mi></mrow></math>), luego la base (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo>=</mo><mi>P</mi><mi>Y</mi></mrow></math>)—:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>X</mi><mo>−</mo><mi>A</mi><mo>=</mo><mi>P</mi><mi>Y</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>X</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>P</mi><mi>Y</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El cambio de coordenadas afín tiene, pues, una <strong>parte lineal</strong> (<math display=\"inline\"><mrow><mi>P</mi><mi>Y</mi></mrow></math>, cambio de base) y una <strong>traslación</strong> (<math display=\"inline\"><mi>A</mi></math>, desplazamiento del origen). Es la <strong>forma equivalente</strong> de la fórmula <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>Q</mi><mo>+</mo><mi>P</mi><mi>X</mi></mrow></math> de <math display=\"inline\"><mn>0051</mn></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>Q</mi></mrow></math> las coordenadas del origen, <math display=\"inline\"><mi>P</mi></math> el cambio de base); solo cambia qué sistema se toma como &quot;viejo/nuevo&quot;."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0053</code>, IMG_2026_07_28_02_17_48S, páginas 104-105; &quot;ÁLGEBRA NEWTON&quot; / Chusa). Los dos pasos (traslación <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo>=</mo><mi>X</mi><mo>−</mo><mi>A</mi></mrow></math> y cambio de base <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>P</mi><msup><mi>X</mi><mo>″</mo></msup></mrow></math>) y la composición (<math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>P</mi><mi>Y</mi></mrow></math>) son <strong>correctos</strong>; versión equivalente de <math display=\"inline\"><mn>0051</mn></math> de la universidad. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0053.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p054_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; variedades lineales: ecuaciones paramétricas y continuas",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Cambio de sistema de referencia: origen y base",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dependencia afín"
    },
    {
     "mota": "testua",
     "html": "Para los puntos <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, los vectores diferencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>3</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al reducir el sistema homogéneo se obtienen <math display=\"inline\"><mrow><mn>5</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>2</mn></msub><mo>+</mo><msub><mi>k</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>2</mn></msub><mo>+</mo><msub><mi>k</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>k</mi><mn>3</mn></msub></mrow></math> (solución no trivial). Por tanto los tres vectores son <strong>dependientes</strong>: no generan <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> (al contrario que el caso de p120)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cambio de origen (traslación)"
    },
    {
     "mota": "testua",
     "html": "De <math display=\"inline\"><mrow><msub><mtext mathvariant=\"normal\">SR</mtext><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>a</mi><mo>;</mo><msub><mi>β</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> a <math display=\"inline\"><mrow><msub><mtext mathvariant=\"normal\">SR</mtext><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>b</mi><mo>;</mo><msub><mi>β</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, siendo <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> el nuevo origen. Por la relación de Chasles, <math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>, luego <math display=\"inline\"><mrow><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>a</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>, donde <math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>. Igualando coeficientes, las coordenadas nuevas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cambio de base"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mtext mathvariant=\"normal\">SR</mtext><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>b</mi><mo>;</mo><msub><mi>β</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, con los vectores de la nueva base:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Desarrollando <math display=\"inline\"><mrow><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mi>y</mi><mn>3</mn></msub><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> y agrupando según <math display=\"inline\"><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><mi>b</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Igualando con <math display=\"inline\"><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><msub><mi>c</mi><mi>i</mi></msub></mrow></math>, las ecuaciones del cambio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El cálculo correcto de <math display=\"inline\"><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>3</mn></msub></mrow><mo accent=\"true\">→</mo></mover></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo>−</mo><mn>2</mn><mo>,</mo><mn>6</mn><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero el original escribe &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; en la primera componente; aquí se ha recogido <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En cualquier caso, la conclusión (dependencia) es válida. Las marcas &quot;ⓐ&quot;, &quot;A&quot;, &quot;B&quot; son referencias cruzadas de la autora. &quot;<math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>β</mi><mn>1</mn></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; probablemente es &quot;<math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>β</mi><mn>1</mn></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; (coherente con <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p124_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Matriz del cambio de base: ortonormalidad",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz de cambio y su inversa"
    },
    {
     "mota": "testua",
     "html": "En el cambio de base anterior en forma matricial, siendo las columnas de <math display=\"inline\"><mi>P</mi></math> los vectores <math display=\"inline\"><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></math> (en coordenadas de <math display=\"inline\"><msub><mi>β</mi><mn>1</mn></msub></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mi>P</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>P</mi></math> es <strong>ortogonal</strong>, su inversa es su transpuesta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comprobación de la base ortonormal"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Los productos escalares cruzados son <strong>nulos</strong> (ortogonales):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mo>+</mo><mn>4</mn><mo>−</mo><mn>2</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>−</mo><mn>2</mn><mo>−</mo><mn>2</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>⋅</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mo>−</mo><mn>2</mn><mo>+</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las normas son <strong>uno</strong> (normalizados):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>4</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>1</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>4</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es una <strong>base ortonormal</strong> del espacio vectorial euclídeo <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, lo que confirma la ortogonalidad de <math display=\"inline\"><mi>P</mi></math> (<math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se supone que la base <math display=\"inline\"><mrow><msub><mi>β</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es ortonormal, tomando las ternas como vectores del euclídeo <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>. El dibujo en dimensión <math display=\"inline\"><mn>3</mn></math> de la derecha muestra los dos sistemas de referencia superpuestos (orígenes <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math>), con los vectores <math display=\"inline\"><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></math> y el vector <math display=\"inline\"><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover></math>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p138_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "SEMINARIO: intersección de planos afines y base",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(1a) Dos planos que se cruzan"
    },
    {
     "mota": "testua",
     "html": "Si dos planos afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> <math display=\"inline\"><mrow><mi>S</mi><mo>,</mo><mi>T</mi></mrow></math> se cruzan, ¿cuál es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? Por Grassmann (<math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo>≤</mo><mn>4</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, sería <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (paralelos, descartado por el enunciado). Por tanto <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo.</strong> <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, y <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>∉</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> (luego <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mi>∅</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(1b) Dos planos que se cortan en un único punto"
    },
    {
     "mota": "testua",
     "html": "Si se cortan en un único punto, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo.</strong> <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, y como tienen el mismo punto base <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (un único punto)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(2) Sistema de referencia"
    },
    {
     "mota": "testua",
     "html": "Sean <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Para demostrar que <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es un sistema de referencia, los cuatro vectores deben formar una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como el determinante es <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>, son una base, y <math display=\"inline\"><mi>E</mi></math> es un sistema de referencia."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los argumentos de (1a) y (1b) son los mismos que los de la p138 del cuaderno CHUSA, en otro idioma; los resultados coinciden (comprobación cruzada). Las anotaciones rojas al margen (&quot;GIROTUKO&quot;, &quot;GONALEZKAR DEY&quot;, &quot;GLOBORATZE&quot;) tienen muy mal OCR/manuscrito. La demostración del ejercicio 2 continúa en la página siguiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p148_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "SEMINARIO: coordenadas, dimensión y ecuaciones",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(iii) Dimensión del espacio generado"
    },
    {
     "mota": "testua",
     "html": "Los vectores <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> cumplen una relación (son dependientes):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(iv) Ecuaciones implícitas de <math display=\"inline\"><mi>T</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (dirección de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>, <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math> sobra). Anulando el menor de orden <math display=\"inline\"><mn>3</mn></math> de la matriz ampliada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 3: <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>T</mi></math> viene de las ecuaciones implícitas (<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>t</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>). Entre las direcciones, siendo <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> la relación, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>∩</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> (ninguna está contenida en la otra). Para comprobar si <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>, se estudia <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — confianza baja",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta página es muy densa y tiene numerosas discrepancias de transcripción: en el apartado (ii) los vectores del enunciado (&quot;<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;) y del desarrollo (&quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;) no coinciden, y <math display=\"inline\"><msub><mi>q</mi><mn>0</mn></msub></math> aparece como &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; frente a &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;; por eso el cálculo de coordenadas de (ii) no se ha recogido aquí. Se han recogido las conclusiones fiables (iii, iv) y la estructura del ejercicio 3. El ejercicio 3 es igual al de las p071/p140 del cuaderno CHUSA (en otro idioma), como comprobación cruzada. El apartado (v) y las líneas finales tienen mal OCR."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p150_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Ecuación implícita de <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi></mrow></math>; cambio de coordenadas",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(iii) Ecuación implícita de <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>S</mi><mo>∩</mo><mi>T</mi><mo>≠</mo><mi>∅</mi></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi></mrow></math> lo forman tres direcciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>+</mo><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eliminando los parámetros, la ecuación implícita <math display=\"inline\"><msub><mi>E</mi><mi>k</mi></msub></math> en la base canónica:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(iv) Cambio de coordenadas"
    },
    {
     "mota": "testua",
     "html": "En el sistema de referencia <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, el cambio de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>E</mi><mi>k</mi></msub></msub></mrow></math> a <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>′</mo></msup><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo><msup><mi>z</mi><mo>′</mo></msup><mo>,</mo><msup><mi>t</mi><mo>′</mo></msup><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi></msub></mrow></math>, mediante la matriz que tiene como columnas los vectores de <math display=\"inline\"><mi>β</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>t</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>x</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>y</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>z</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>t</mi><mo>′</mo></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Coordenada a coordenada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><msup><mi>z</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><msup><mi>t</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La ecuación implícita (<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>) concuerda con el resultado de la p146 del cuaderno CHUSA (en otro idioma), como comprobación cruzada. Las columnas de la matriz de cambio son los vectores de <math display=\"inline\"><mi>β</mi></math>, en coordenadas de la base canónica. La mitad derecha de la imagen es el cuaderno CHUSA."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p160_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Ejercicio 13: cambio de coordenadas y subespacio <math display=\"inline\"><mi>T</mi></math>",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dados <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: (i) calcular el cambio de coordenadas al nuevo sistema de referencia <math display=\"inline\"><mi>E</mi></math>; (ii) las coordenadas de <math display=\"inline\"><msub><mi>q</mi><mn>0</mn></msub></math> en <math display=\"inline\"><mi>E</mi></math>; (iii) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; (iv) las ecuaciones paramétricas e implícitas de <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(iii) Dimensión"
    },
    {
     "mota": "testua",
     "html": "Reduciendo por filas la matriz, se comprueba que la última fila es combinación de las otras dos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(iv) <math display=\"inline\"><mi>T</mi></math>: ecuaciones paramétricas e implícitas"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>). Ecuación vectorial: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> son únicos para todo <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>T</mi></mrow></math>. Las ecuaciones implícitas provienen de que el rango de la matriz ampliada sea <math display=\"inline\"><mn>2</mn></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">heina</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — confianza baja",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta página tiene muchos números pequeños, superpuestos con numerosas correcciones; el propio nombre del cuaderno es dudoso (&quot;JAVIER&quot; frente a &quot;SAVIER&quot;). La matriz exacta del cambio de coordenadas de <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> y de <math display=\"inline\"><msub><mi>q</mi><mn>0</mn></msub></math> (apartados i-ii) no se ha comprobado del todo, y no se ha reproducido aquí en números (porque la lectura no es fiable). La conclusión del apartado (iii) (dim <math display=\"inline\"><mrow><mo>=</mo><mn>2</mn></mrow></math>) está comprobada a partir de la estructura general de la matriz. El planteamiento del apartado (iv) (ecuación paramétrica <math display=\"inline\"><mo>→</mo></math> a implícita) es el método estándar, pero las entradas exactas de la matriz <math display=\"inline\"><mi>A</mi></math> (que dependen de las coordenadas de <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> respecto de <math display=\"inline\"><mi>E</mi></math>) no se han podido reconstruir con confianza."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_javier_p166_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Ecuaciones implícitas de <math display=\"inline\"><mi>T</mi></math>; recta y cuatro puntos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones implícitas de <math display=\"inline\"><mi>T</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Anulando los menores <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>4</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, las ecuaciones implícitas de <math display=\"inline\"><mi>T</mi></math> son:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>4</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 8: una recta por dos puntos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>+</mo><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>λ</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eliminando <math display=\"inline\"><mi>λ</mi></math>, las ecuaciones implícitas son:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(comprobado: las de <math display=\"inline\"><mi>λ</mi></math> son independientes, sustituyendo en la parametrización)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(v) Dependencia de cuatro puntos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Los vectores diferencia son <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; como <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> (dependientes), el rango es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><mi>p</mi><mi>s</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la segunda ecuación de <math display=\"inline\"><mi>T</mi></math> el original escribe «<math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn></mrow></math>», pero el desarrollo correcto del determinante (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>3</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>) da «<math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>4</mn></mrow></math>»; aquí se ha corregido. Todos los demás cálculos (las ecuaciones de <math display=\"inline\"><mi>S</mi></math>, el rango de (v)) están comprobados. Que <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>r</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> explica directamente por qué el rango es <math display=\"inline\"><mn>2</mn></math> (y no <math display=\"inline\"><mn>3</mn></math>)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p001_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a58",
   "maila": 1,
   "izenburua": "Variedades lineales: ecuaciones paramétricas y continuas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Subespacios afines (<strong>variedades lineales</strong>) y sus ecuaciones: paramétricas (un punto más direcciones) y, para una recta en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, <strong>ecuaciones continuas</strong>."
    }
   ]
  },
  {
   "id": "a59",
   "maila": 2,
   "izenburua": "Variedad lineal y ecuaciones paramétricas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El subespacio afín es <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, siendo <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> un punto y <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> la <strong>dirección</strong> (subespacio vectorial); <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si una base de <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>v</mi><mi>k</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> y las coordenadas de <math display=\"inline\"><mi>p</mi></math> son <math display=\"inline\"><mi>A</mi></math>, entonces las <strong>ecuaciones paramétricas</strong> del punto <math display=\"inline\"><mrow><mi>q</mi><mo>∈</mo><mi>S</mi></mrow></math> son:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mo>+</mo><msub><mi>λ</mi><mn>1</mn></msub><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mover><msub><mi>v</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>k</mi></msub><mover><msub><mi>v</mi><mi>k</mi></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Un punto más todas las combinaciones lineales de los vectores de dirección. (La misma transformación afín puede escribirse también en <strong>coordenadas homogéneas</strong>, con la matriz ampliada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mi>P</mi></math> la parte lineal y <math display=\"inline\"><mi>A</mi></math> la traslación, a la vez.)"
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Recta en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>: ecuaciones continuas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el caso de <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es una <strong>recta</strong>. Siendo <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><msub><mi>r</mi><mn>2</mn></msub><mo>,</mo><msub><mi>r</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, las ecuaciones paramétricas son <math display=\"inline\"><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><msub><mi>a</mi><mi>i</mi></msub><mo>+</mo><mi>λ</mi><msub><mi>r</mi><mi>i</mi></msub></mrow></math>; despejando <math display=\"inline\"><mi>λ</mi></math> de cada una e igualando, las <strong>ecuaciones continuas</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>a</mi><mn>2</mn></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub></mrow><msub><mi>r</mi><mn>3</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mi>i</mi></msub><mo>≠</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Con números:</strong> siendo <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>3</mn><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mo>+</mo><mn>4</mn><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>3</mn><mo>+</mo><mn>5</mn><mi>λ</mi></mrow></math>, es decir"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mi>y</mi><mo>−</mo><mn>2</mn></mrow><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mn>3</mn></mrow><mrow><mn>5</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La recta que pasa por el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con la dirección <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0054</code>, IMG_2026_07_28_02_17_56S, páginas 106-107; «ÁLGEBRA NEWTON» / Chusa). Las ecuaciones paramétricas y continuas de la <strong>recta</strong> son correctas: en el ejemplo <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> → <math display=\"inline\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mi>y</mi><mo>−</mo><mn>2</mn></mrow><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mn>3</mn></mrow><mn>5</mn></mfrac></mrow></math>. No se aplica ninguna corrección. Véase <code>koadernoa_algebra2013_alg_0054.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p055_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; clasificación, ecuación del plano y puntos colineales",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "Clasificación de las variedades lineales, ecuación de un plano y puntos colineales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las variedades lineales se clasifican por su <strong>dimensión</strong>, se calcula la <strong>ecuación implícita</strong> de un plano y se estudia la variedad generada por un conjunto de puntos (en un ejemplo, unos puntos colineales generan una <strong>recta</strong>, no un plano)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación por la dimensión"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>0</mn></mrow></math>: <strong>punto</strong> (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi></mrow></math>).",
      "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>: <strong>recta afín</strong> (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>).",
      "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>: <strong>plano afín</strong> (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>v</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, con <math display=\"inline\"><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mover><msub><mi>v</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover></math> linealmente independientes)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación implícita de un plano"
    },
    {
     "mota": "testua",
     "html": "Sea <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> un plano en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>. Un <strong>vector normal</strong> es el producto vectorial de las direcciones:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∝</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El plano que pasa por el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es, por tanto, <math display=\"inline\"><mrow><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>7</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(De manera equivalente, desarrollando <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math></span>, <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>−</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Variedad generada por puntos"
    },
    {
     "mota": "testua",
     "html": "La <strong>variedad lineal</strong> generada por un conjunto de puntos: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mi>n</mi></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo:</strong> <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Entonces <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; pero"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mn>3</mn><mo>⋅</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es decir, <strong>no son linealmente independientes</strong> (son proporcionales): los tres puntos son <strong>colineales</strong> y su variedad es una <strong>recta</strong> (no un plano):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>:</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La variedad de <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> puntos no siempre tiene dimensión <math display=\"inline\"><mi>n</mi></math>; aquí <math display=\"inline\"><mn>3</mn></math> puntos dan dimensión <math display=\"inline\"><mn>1</mn></math>, porque no son afínmente independientes."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0055</code>, IMG_2026_07_28_02_18_02S, páginas 108-109; «ÁLGEBRA NEWTON» / Chusa). Comprobado con SymPy: la normal del plano es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, la ecuación <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>7</mn></mrow></math> y la colinealidad <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>−</mi><mn>3</mn><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover></mrow></math>. <strong>Corrección (señalada):</strong> el determinante de la página derecha del original se lee como <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi></mrow></math>, pero el plano correcto es <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>7</mn></mrow></math> (comprobado con el producto vectorial y con el determinante <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> de la izquierda); es un lapsus de transcripción del manuscrito. Véase <code>koadernoa_algebra2013_alg_0055.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p056_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; ecuaciones de los subespacios afines: paramétricas e implícitas (7.5)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "Ecuaciones de los subespacios afines: paramétricas e implícitas (7.5)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las dos descripciones generales de un subespacio afín: <strong>ecuaciones paramétricas</strong> (<math display=\"inline\"><mi>k</mi></math> parámetros, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi mathvariant=\"normal\">dim</mi></mrow></math>) y <strong>ecuaciones implícitas</strong> (<math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></math> ecuaciones, a partir de una condición de rango)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones paramétricas"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> un subespacio afín, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mi>k</mi></mrow></math>, y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>w</mi><mi>k</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> una base de la dirección (<math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math>). Entonces:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>∈</mo><mi>S</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><mi>p</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>λ</mi><mi>k</mi></msub><mover><msub><mi>w</mi><mi>k</mi></msub><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>p</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>k</mi></munderover><msub><mi>λ</mi><mi>i</mi></msub><mover><msub><mi>w</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el sistema de referencia <math display=\"inline\"><mi>E</mi></math> con coordenadas (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mover><msub><mi>w</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>a</mi><mrow><mi>n</mi><mi>i</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), componente a componente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><msub><mi>p</mi><mi>j</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>k</mi></munderover><msub><mi>λ</mi><mi>i</mi></msub><msub><mi>a</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>k</mi></math> parámetros (<math display=\"inline\"><msub><mi>λ</mi><mi>i</mi></msub></math>) para un afín de dimensión <math display=\"inline\"><mi>k</mi></math>: estas son las <strong>ecuaciones paramétricas</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones implícitas (mediante el rango)"
    },
    {
     "mota": "testua",
     "html": "Eliminando los <math display=\"inline\"><mi>λ</mi></math>, se obtienen relaciones entre las <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math> (ecuaciones implícitas). Modo sistemático: la condición <math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>w</mi><mi>k</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> se refleja en el <strong>rango de la matriz ampliada</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>k</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mi>n</mi></msub><mo>−</mo><msub><mi>p</mi><mi>n</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>n</mi><mi>k</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Añadir la columna <math display=\"inline\"><mover><mrow><mi>p</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover></math> <strong>no aumenta el rango</strong> si y solo si <math display=\"inline\"><mover><mrow><mi>p</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover></math> está en el espacio generado. Por tanto, todos los <strong>menores de orden <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deben ser nulos</strong>: fijadas <math display=\"inline\"><mi>k</mi></math> filas independientes, cada una de las <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></math> filas restantes da un determinante <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que debe ser nulo. De ahí salen <strong><math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></math> ecuaciones implícitas</strong> independientes."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "k parámetros o n-k ecuaciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un afín de dimensión <math display=\"inline\"><mi>k</mi></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> se describe con <math display=\"inline\"><mi>k</mi></math> parámetros <strong>o</strong> con <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></math> ecuaciones implícitas: por ejemplo, la recta en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mi>k</mi><mo>=</mo><mn>2</mn></mrow></math> ecuaciones) o el plano (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mi>k</mi><mo>=</mo><mn>1</mn></mrow></math> ecuaciones, como en <math display=\"inline\"><mn>0055</mn></math>)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0056</code>, IMG_2026_07_28_02_18_08S, páginas 110-111; rótulo «ALJEBRA IRAIDE»). <strong>IRAIDE</strong> es el profesor de álgebra de la universidad (<strong>tercera fuente</strong> confirmada: ni Chusa/Newton, ni Leo/Landeta). Las ecuaciones paramétricas y la condición de rango (<math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></math> ecuaciones) son <strong>correctas</strong>. No se aplica ninguna corrección. Véase <code>koadernoa_algebra2013_alg_0056.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p057_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; ejemplos paramétrico↔implícito en R⁴",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a63",
   "maila": 2,
   "izenburua": "Ejemplos: ecuaciones paramétricas e implícitas en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> (7.5)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Conversión en los dos sentidos: de paramétricas a implícitas (mediante rango/menores) y de implícitas a paramétricas (despejando las variables libres). Recuerda: el <strong>número de ecuaciones implícitas</strong> de un subespacio afín es <math display=\"inline\"><mrow><mo>=</mo><mi>n</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi></mrow></math>, y <math display=\"inline\"><mi>S</mi></math> y su dirección <math display=\"inline\"><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></math> tienen la misma ecuación (quitando el término independiente)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(1) De paramétricas a implícitas"
    },
    {
     "mota": "testua",
     "html": "Sea <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>. Ecuaciones paramétricas: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>λ</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>. Para obtener las implícitas, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mrow><mi>p</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mspace width=\"0.222em\"></mspace><mover><msub><mi>w</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>2</mn></mrow></math> (es decir, todos los menores <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> nulos):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>4</mn></msub><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, las <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mi>k</mi><mo>=</mo><mn>4</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>2</mn></mrow></math> ecuaciones implícitas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(2) De implícitas a paramétricas"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><mi>T</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: <math display=\"inline\"><mn>4</mn></math> incógnitas, <math display=\"inline\"><mn>2</mn></math> ecuaciones, luego <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mn>2</mn></math> son variables libres. Tomando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn></mrow></math>. Paramétricas: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn></mrow></math>; como punto + dirección:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las dos direcciones cumplen <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, y el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cumple las ecuaciones originales."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección (segunda dirección)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La <strong>segunda dirección correcta</strong> de <math display=\"inline\"><mi>T</mi></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (cumple <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>). Aunque el original pueda leerse como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, esa daría <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>, es decir, <strong>no sería una dirección de</strong> <math display=\"inline\"><mi>T</mi></math>: es un <strong>desliz de signo</strong> en la componente <math display=\"inline\"><mi>y</mi></math>. Comprobado con SymPy."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0057</code>, IMG_2026_07_28_02_18_13S, páginas 112-113; «ALJEBRA IRAIDE», universidad). Comprobado con SymPy: (1) los menores <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>4</mn></msub><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>; (2) las direcciones <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Corrección señalada en la segunda dirección. Véase <code>koadernoa_algebra2013_alg_0057.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p058_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; matriz de la aplicación lineal en nuevas bases B=PAQ",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "Independencia afín: cuatro puntos en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Independencia afín de cuatro puntos"
    },
    {
     "mota": "testua",
     "html": "Sean <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Los vectores diferencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>3</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para comprobar la independencia, el sistema homogéneo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>k</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>2</mn><msub><mi>k</mi><mn>1</mn></msub><mo>−</mo><mn>3</mn><msub><mi>k</mi><mn>2</mn></msub><mo>+</mo><mn>4</mn><msub><mi>k</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>k</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>k</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>2</mn><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><mo>+</mo><mn>3</mn><msub><mi>k</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al resolver este sistema, la única solución es la trivial: <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><msub><mi>k</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Por tanto, los tres vectores forman una <strong>familia libre</strong>, generan <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, y los cuatro puntos son afínmente independientes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo>,</mo><msub><mi>p</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El sistema de referencia <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SR </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo>;</mo><mspace width=\"0.222em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>3</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, donde los vectores son una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Criterio general de independencia afín"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el espacio afín <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, los <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> puntos <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> son afínmente <strong>independientes</strong> si y solo si, para cualquier punto <math display=\"inline\"><mi>p</mi></math>, <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>λ</mi><mi>i</mi></msub><mspace width=\"0.167em\"></mspace><mover><mrow><msub><mi>p</mi><mi>i</mi></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>λ</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Si son independientes, la dimensión de <math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es <math display=\"inline\"><mi>n</mi></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la página derecha se desarrolla un ejemplo del criterio (formulación simétrica, sin fijar un punto como base), pero ese sistema es muy denso y tiene incoherencias de notación (por ejemplo, en la primera ecuación falta el coeficiente de <math display=\"inline\"><msub><mi>λ</mi><mn>4</mn></msub></math>); no se desarrolla aquí numéricamente. En el dibujo de dimensión <math display=\"inline\"><mn>3</mn></math> de la derecha, las etiquetas «<math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math>» y «<math display=\"inline\"><msub><mi>p</mi><mn>3</mn></msub></math>» podrían estar intercambiadas. Los marcadores «③», «⑤» son la numeración del autor."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p122_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a65",
   "maila": 1,
   "izenburua": "TEMA 9: Aplicaciones afines (definición y propiedades)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Aplicación afín (9.1)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> y <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>m</mi></msup></math> espacios afines, y <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>m</mi></msup></mrow></math> una aplicación. Con <math display=\"inline\"><mrow><mi>X</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> (matriz columna de <math display=\"inline\"><mi>x</mi></math>) y <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mi>f</mi></math> es una <strong>aplicación afín</strong> si existen <math display=\"inline\"><mrow><mi>A</mi><mo>∈</mo><msub><mi>M</mi><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo>∈</mo><msub><mi>M</mi><mrow><mi>m</mi><mo>×</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tales que, para todo <math display=\"inline\"><mrow><mi>X</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, <math display=\"block\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>A</mi></math> parte lineal, <math display=\"inline\"><mi>B</mi></math> traslación.)"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> está comprobado mediante la fórmula del hiperplano <math display=\"inline\"><mi>N</mi></math> (el original escribe «<math display=\"inline\"><mrow><mn>0</mn><mo>−</mo><mn>0</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>0</mn><mo>−</mo><mn>1</mn></mrow></math>», olvidando la cuarta componente de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; con <math display=\"inline\"><mn>2</mn></math> resulta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mn>2</mn><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>). Otro camino a la izquierda (<math display=\"inline\"><mrow><mi>H</mi><mo>∩</mo><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) da «<math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>/</mi><mn>2</mn></mrow></math>», pero eso no es aritméticamente coherente con ese punto (sería <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>); incertidumbre de transcripción. El título del tema 9 y el texto de debajo son OCR muy deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p204_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "Aplicaciones afines: ejemplos y propiedades",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplos"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1) La <strong>identidad</strong> <math display=\"inline\"><mrow><msub><mtext mathvariant=\"normal\">id</mtext><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></msub><mo>:</mo><mi>x</mi><mo>→</mo><mi>x</mi></mrow></math> es una aplicación afín, con <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mi>X</mi><mo>+</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "(2) La <strong>aplicación constante</strong> <math display=\"inline\"><mrow><msub><mi>f</mi><msup><mi>y</mi><mo>*</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>y</mi><mo>*</mo></msup></mrow></math> (con <math display=\"inline\"><mrow><msup><mi>y</mi><mo>*</mo></msup><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> fijo), para todo <math display=\"inline\"><mi>x</mi></math>: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> (matriz nula) y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>y</mi><mo>*</mo></msup></mrow></math> (<math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mn>0</mn><mo>⋅</mo><mi>X</mi><mo>+</mo><msup><mi>y</mi><mo>*</mo></msup><mo>=</mo><msup><mi>y</mi><mo>*</mo></msup></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "(3) <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>m</mi></msup></mrow></math> es <strong>lineal</strong> si y solo si es afín con <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi></mrow></math>)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Propiedad: descomposición"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Toda aplicación afín puede escribirse como la <strong>composición de una aplicación lineal y una traslación</strong>. Dada <math display=\"inline\"><mi>f</mi></math> afín, fijado el origen <math display=\"inline\"><mi>o</mi></math>, existe una única aplicación lineal <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math> (de matriz <math display=\"inline\"><mi>A</mi></math>) tal que: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>o</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>, tomando <math display=\"inline\"><mrow><mi>o</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>o</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>⋅</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>+</mo><mi>B</mi><mo>=</mo><mi>B</mi><mo>=</mo><mi>b</mi></mrow></math>; y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>o</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>o</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi></mrow></math></span>, donde <math display=\"inline\"><mrow><msub><mi>f</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>v</mi></mrow></math> es la parte lineal (la misma matriz, sin término independiente)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todos los ejemplos se comprueban trivialmente. La propiedad descompone cualquier aplicación afín (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>) en una parte lineal (<math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math>) y una traslación (<math display=\"inline\"><mi>b</mi></math>). El original tiene muchos fragmentos de texto con OCR/manuscrito muy deficiente («GOOGEIN», «HUBIRUNDU», «SE UN Ⓐ», «APLIKAZIO HUTSA»...); el contenido matemático es claro por las fórmulas."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p206_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Propiedades de las aplicaciones afines y su determinación",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Propiedades"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edozein erreferentzia-puntu</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo></mrow></math> <math display=\"block\"><mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Demostración de (2)"
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><msub><mi>p</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (propiedad con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>), y por Chasles + linealidad: <math display=\"block\"><mrow><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>o</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><msub><mi>p</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Sumando: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>b</mi><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><msub><mi>p</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><msub><mi>p</mi><mn>0</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>b</mi><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Observación: <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>o</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la expresión de <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi></mrow></math>, tomando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mo>⋅</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>+</mo><mi>B</mi><mo>=</mo><mi>B</mi></mrow></math>; como <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: la <strong>imagen del origen</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema de determinación"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub></mrow></math> son afínmente independientes, <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mi>n</mi></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. Una aplicación afín <math display=\"inline\"><mi>f</mi></math> queda <strong>totalmente determinada</strong> por las imágenes de sus <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> puntos (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), pues las condiciones <math display=\"inline\"><mrow><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mi>i</mi></msub></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">→</mo></mover></mrow></math> determinan un único <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math>, y junto con <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> todo <math display=\"inline\"><mi>f</mi></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La demostración muestra que <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es válido para <strong>cualquier</strong> punto de referencia (no solo para el origen). El teorema de determinación se apoya en la propiedad estándar de las aplicaciones lineales (las imágenes de una base determinan <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math>). La página derecha es OCR/manuscrito muy deficiente («KUALZUN MATASITZAILEN», «NOKIAZ»...); el contenido matemático es claro."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p208_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Existencia y determinación de una aplicación afín",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposición (existencia y unicidad)"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> puntos afínmente independientes <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>q</mi><mn>0</mn></msub><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> cualesquiera. Entonces existe una <strong>única aplicación afín</strong> <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> tal que: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>…</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>q</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Observación: base canónica"
    },
    {
     "mota": "testua",
     "html": "En particular, tomando <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>=</mo><msub><mi>e</mi><mi>i</mi></msub></mrow></math> (base canónica), <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>q</mi><mi>i</mi></msub></mrow></math>. Las columnas de la matriz de la aplicación lineal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><msub><mi>q</mi><mi>i</mi></msub></mrow><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por la propiedad <math display=\"inline\"><mrow><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">→</mo></mover></mrow></math>. Por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><msub><mi>q</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><msub><mi>q</mi><mi>n</mi></msub></mrow><mo accent=\"true\">→</mo></mover></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>q</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La proposición es la formalización del teorema de existencia y unicidad de las p206-207. En el caso de la base canónica, las columnas de <math display=\"inline\"><mi>A</mi></math> se obtienen directamente (<math display=\"inline\"><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><msub><mi>q</mi><mi>i</mi></msub></mrow><mo accent=\"true\">→</mo></mover></math> vectores diferencia), sin resolver ningún sistema adicional: un resultado práctico útil. La mitad derecha de la imagen es el cuaderno de CHUSA (en castellano)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p222_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a69",
   "maila": 2,
   "izenburua": "Diagonales del rombo; repaso de aplicaciones afines",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio: rombo y diagonales perpendiculares"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>a</mi><mi>b</mi><mi>c</mi><mi>d</mi></mrow></math> es un paralelogramo (<math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>c</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>). Demostrar que <math display=\"inline\"><mrow><mi>a</mi><mi>b</mi><mi>c</mi><mi>d</mi></mrow></math> es un <strong>rombo</strong> si y solo si sus diagonales (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>a</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>) son perpendiculares."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las diagonales se cortan en el punto <math display=\"inline\"><mi>m</mi></math>. Por Chasles, <math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>b</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mover><mrow><mi>b</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>b</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>d</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>; multiplicando: <math display=\"block\"><mrow><mover><mrow><mi>a</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>b</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>b</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>d</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>b</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>b</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mrow><mi>b</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>d</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math> En un rombo (todos los lados iguales, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>a</mi><mi>b</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>b</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow></mrow></math>), estos términos se anulan, dando <math display=\"inline\"><mrow><mover><mrow><mi>a</mi><mi>d</mi></mrow><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mrow><mi>b</mi><mi>c</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: las diagonales son perpendiculares. El recíproco se demuestra con el teorema de Pitágoras (<math display=\"inline\"><mrow><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, con ángulo recto en <math display=\"inline\"><mi>m</mi></math>)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teoría de las aplicaciones afines (repaso)"
    },
    {
     "mota": "testua",
     "html": "Repetido (véase p202–p208): <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> es afín si <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi></mrow></math>; <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> puntos afínmente independientes y sus imágenes determinan una única <math display=\"inline\"><mi>f</mi></math>; en la base canónica las columnas de <math display=\"inline\"><mi>A</mi></math> son <math display=\"inline\"><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><msub><mi>q</mi><mi>i</mi></msub></mrow><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Nota del autor en rojo: este ejercicio era de la sesión anterior y lo subió más tarde. El resultado del rombo (diagonales perpendiculares) es clásico; el desarrollo intermedio, denso, mediante Chasles se apoya en la igualdad de los lados del rombo. La parte de aplicaciones afines es una repetición de p202–p208, sin cambios. Palabras como «NIROTZIJA», «f-NI ELKARZUTUKO» son OCR deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p224_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "Grupo afín: composición de aplicaciones afines",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>=</mo><mn>2</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Fijados <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub></mrow></math> afínmente independientes). Las columnas <math display=\"inline\"><mrow><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><msub><mi>q</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mover><mrow><msub><mi>q</mi><mn>0</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>X</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9.1.1 Grupo afín"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>m</mi></msup></mrow></math> y <math display=\"inline\"><mrow><mi>g</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>m</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>l</mi></msup></mrow></math> son afines, <math display=\"inline\"><mrow><mi>g</mi><mo>∘</mo><mi>f</mi></mrow></math> también es una <strong>aplicación afín</strong>, y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi></msub><mo>=</mo><msub><mi>g</mi><mi>A</mi></msub><mo>∘</mo><msub><mi>f</mi><mi>A</mi></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Siendo <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>Y</mi><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mi>X</mi><mo>+</mo><msub><mi>B</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>g</mi><mo>:</mo><mi>Z</mi><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mi>Y</mi><mo>+</mo><msub><mi>B</mi><mn>2</mn></msub></mrow></math>: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mi>X</mi><mo>+</mo><msub><mi>B</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><munder><munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>2</mn></msub><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mi>A</mi></munder><mi>X</mi><mo>+</mo><munder><munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub><mo>+</mo><msub><mi>B</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mi>B</mi></munder><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mi>g</mi><mo>∘</mo><mi>f</mi></mrow></math> es afín, con matriz <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><msub><mi>A</mi><mn>1</mn></msub></mrow></math> y vector <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub><mo>+</mo><msub><mi>B</mi><mn>2</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Biyectividad"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>f</mi></math> una aplicación afín: <math display=\"inline\"><mi>f</mi></math> es <strong>inyectiva / suprayectiva / biyectiva</strong> si y solo si lo es <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math> (su parte lineal)."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi><mo>+</mo><msub><mi>f</mi><mi>A</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mrow><mi>o</mi><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mi>f</mi></math> es la composición de una traslación (siempre biyectiva) y <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math>; por tanto, el comportamiento de <math display=\"inline\"><mi>f</mi></math> es el mismo que el de <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Consecuencia.</strong> Si <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>m</mi></msup></mrow></math> afín es biyectiva, <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math> es biyectiva, y eso obliga a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi></mrow></math> (isomorfismos de dimensión finita)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La demostración de la composición es álgebra pura (asociatividad de las matrices); la parte lineal de <math display=\"inline\"><mrow><mi>g</mi><mo>∘</mo><mi>f</mi></mrow></math> es <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><msub><mi>g</mi><mi>A</mi></msub><mo>∘</mo><msub><mi>f</mi><mi>A</mi></msub></mrow></math>. La matriz del ejemplo está comprobada. Palabras como «ARO BEHIAGO», «NORTAN» son OCR deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p226_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a71",
   "maila": 2,
   "izenburua": "Corolario: biyectividad y aplicación inversa",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Corolario",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> afín, con <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi></mrow></math>: <math display=\"inline\"><mi>f</mi></math> es <strong>biyectiva</strong> si y solo si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≠</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Directamente: <math display=\"inline\"><mi>f</mi></math> biyectiva <math display=\"inline\"><mo>⇔</mo></math> <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math> biyectiva <math display=\"inline\"><mo>⇔</mo></math> <math display=\"inline\"><mi>A</mi></math> invertible <math display=\"inline\"><mo>⇔</mo></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≠</mo><mn>0</mn></mrow></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aplicación inversa"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> afín es biyectiva, <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> también es afín, y su parte lineal es la inversa de <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math>: <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Siendo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math> y <math display=\"inline\"><mi>A</mi></math> invertible, despejando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>y</mi><mo>−</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi><mi>.</mi></mrow></math> Es una aplicación afín, con parte lineal <math display=\"inline\"><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y traslación <math display=\"inline\"><mrow><mi>−</mi><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El corolario se deduce del resultado de las p224-225 (<math display=\"inline\"><mi>f</mi></math> biyectiva <math display=\"inline\"><mo>⇔</mo></math> <math display=\"inline\"><msub><mi>f</mi><mi>A</mi></msub></math> biyectiva), con el criterio del álgebra lineal (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≠</mo><mn>0</mn></mrow></math>). La reducción matricial detallada del ejercicio 11 no se ha comprobado por completo (lectura de la variable <math display=\"inline\"><mi>λ</mi></math>), pero la distinción de casos es coherente. Palabras como «NIRUPLANA», «APLIKATZIO AFINO» son OCR/manuscrito deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p230_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a72",
   "maila": 2,
   "izenburua": "Demostración de <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>; grupo afín <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">TA</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Demostración de <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> (composición)"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi></mrow></math>, despejando <math display=\"inline\"><mi>X</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi><mo>⇔</mo><mi>Y</mi><mo>−</mo><mi>B</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>⇔</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Y</mi><mo>−</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>Y</mi><mo>−</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi></mrow></math>. Por tanto <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Z</mi><mo>=</mo><mi>C</mi><mi>Y</mi><mo>+</mo><mi>D</mi></mrow></math>, donde:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>∈</mo><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mi>−</mi><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi><mo>∈</mo><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> es una <strong>aplicación afín</strong>, y su parte lineal es <math display=\"inline\"><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> (es decir, <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transformación afín y grupo afín"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Transformación afín",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> es una aplicación afín <strong>biyectiva</strong>, se llama <strong>transformación afín</strong>. <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mtext mathvariant=\"normal\">TA</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> transformazio afina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">TA</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>∘</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un <strong>grupo</strong> (grupo afín). Los cuatro axiomas:"
      }
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Operación interna:</strong> si <math display=\"inline\"><mrow><mi>f</mi><mo>,</mo><mi>g</mi></mrow></math> son transformaciones, <math display=\"inline\"><mrow><mi>g</mi><mo>∘</mo><mi>f</mi></mrow></math> también es afín y biyectiva (composición de dos biyecciones).",
      "<strong>Asociatividad:</strong> <math display=\"inline\"><mrow><mi>h</mi><mo>∘</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>∘</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∘</mo><mi>f</mi></mrow></math> (propiedad general de la composición de funciones).",
      "<strong>Elemento neutro:</strong> <math display=\"inline\"><msub><mtext mathvariant=\"normal\">id</mtext><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></msub></math> (aplicación afín, véase p204).",
      "<strong>Inverso:</strong> cada <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> TA</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> tiene <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> (demostrado arriba), cumpliendo <math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Y</mi><mo>−</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>X</mi><mo>=</mo><mi>X</mi></mrow></math>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El despeje algebraico está comprobado (<math display=\"inline\"><mi>A</mi></math> invertible, porque <math display=\"inline\"><mi>f</mi></math> es biyectiva). Los cuatro axiomas se apoyan en resultados de las páginas anteriores (composición afín p224; identidad p204; <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> afín, en esta página). Palabras como «ALDI BEHIAGO», «ELKARZUTUKO» son OCR/manuscrito deficiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_iraide_p232_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a73",
   "maila": 2,
   "izenburua": "Demostración del grupo afín: cierre",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para demostrar que <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">TA</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>∘</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un grupo, los dos últimos axiomas (neutro e inverso):"
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>3) Elemento neutro.</strong> <math display=\"inline\"><mrow><mi>e</mi><mo>≔</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> id</mtext></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></msub></mrow></math>, porque para cualquier <math display=\"inline\"><mi>f</mi></math>: <math display=\"block\"><mrow><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> id</mtext></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></msub><mo>∘</mo><mi>f</mi><mo>=</mo><mi>f</mi><mo>∘</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> id</mtext></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></msub><mo>=</mo><mi>f</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>4) Inverso.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> TA</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, existe <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> TA</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (pues <math display=\"inline\"><mi>f</mi></math> es biyectiva, y porque <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> es afín, p230), tal que: <math display=\"block\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>∘</mo><mi>f</mi><mo>=</mo><mi>f</mi><mo>∘</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> id</mtext></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></msub><mo>=</mo><mi>e</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Comprobados los cuatro axiomas (operación interna p228, asociatividad p230, neutro e inverso aquí), <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">TA</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>∘</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> es un <strong>grupo</strong>. <math display=\"inline\"><mi>◼</mi></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos axiomas son triviales: la composición con la identidad (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">id </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∘</mo><mi>f</mi><mo>=</mo><mi>f</mi></mrow></math>) se cumple para cualquier función, y la existencia de <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> viene de la biyectividad de <math display=\"inline\"><mi>f</mi></math> (en p230 se demostró que <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> también es una transformación afín). Con esto la demostración del grupo afín queda completa. La página derecha (233) está en blanco en el original."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_javier_p164_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a74",
   "maila": 1,
   "izenburua": "Atlas visual de la geometría afín",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Aportación editorial independiente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El atlas recupera el significado geométrico de las ecuaciones afines. El desarrollo algebraico de los cuadernos se mantiene íntegro y estas figuras se usan como orientación visual junto a él."
      }
     ]
    }
   ]
  },
  {
   "id": "a75",
   "maila": 2,
   "izenburua": "Posiciones relativas y envoltura afín",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "editoriala([La posición relativa de dos rectas se clasifica en tres casos: secantes, paralelas o que se cruzan.])",
     "src": "../media/irudiak/e1ae52492e690998.svg",
     "zabalera": 325
    },
    {
     "mota": "irudia",
     "oina": "editoriala([La envoltura afín de tres puntos no alineados es el plano; dos direcciones generan la estructura del paralelogramo.])",
     "src": "../media/irudiak/f4a78cd5508234e5.svg",
     "zabalera": 274
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "Transformaciones afines",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "editoriala([La transformación afín conserva las rectas y el paralelismo; la parte matricial codifica la deformación y el vector, la traslación.])",
     "src": "../media/irudiak/65676c3b66a61d14.svg",
     "zabalera": 434
    }
   ]
  }
 ]
};
