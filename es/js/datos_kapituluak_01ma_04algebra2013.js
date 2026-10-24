/* JAKINA · kapitulua «B2 - Aljebra lineala eta geometria (algebra2013) - II» (01ma_04algebra2013), desde edicion2/kapituluak/01ma_04algebra2013/01ma_04algebra2013.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01ma_04algebra2013"] = {
 "gakoa": "01ma_04algebra2013",
 "titulua": "JAKINA - B2 - Álgebra lineal y geometría (algebra2013) - II",
 "azala": "B2 - Álgebra lineal y geometría (algebra2013) - II",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/01ma_04algebra2013/01ma_04algebra2013.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M11",
   "izenburua": "Formas, espacios euclídeos y espectral",
   "maila": "HERRAMIENTAS"
  },
  {
   "mota": "iturria",
   "proiektua": "koadernoa_algebra2013_alg_p001_mk.typ",
   "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Espacio euclídeo: norma, distancia y producto escalar",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La norma de un vector de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math> y la distancia entre dos puntos, y, en general, cómo se define el producto escalar en un espacio vectorial, en relación con el ángulo entre vectores."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Norma de un vector y distancia entre puntos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un vector respecto a una base se escribe <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>; su <strong>norma</strong> (longitud) es, por el teorema de Pitágoras:"
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
     "html": "Dados dos puntos <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, la <strong>distancia</strong> entre ellos es la norma del vector <math display=\"inline\"><mover><mrow><mi>P</mi><mi>Q</mi></mrow><mo accent=\"true\">→</mo></mover></math>; la hipotenusa del triángulo rectángulo de componentes <math display=\"inline\"><mrow><msub><mi>q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>p</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>−</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math>:"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/441a329388edd65a.svg",
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
   "izenburua": "Producto escalar",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Producto escalar",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>E</mi></math> un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. El <strong>producto escalar</strong> es la siguiente función: <math display=\"block\"><mrow><mi>φ</mi><mo>:</mo><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<em class=\"j-nab\">Se multiplican las componentes correspondientes y se suman esos productos:</em>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>u</mi><mn>2</mn></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Relación con el ángulo: el producto escalar también puede expresarse mediante las normas y el ángulo, y, por la desigualdad de Cauchy–Schwarz, el coseno está acotado:"
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
     "html": "Casos extremos: cuando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>, los vectores son <strong>perpendiculares</strong> (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), y cuando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math> son <strong>paralelos</strong> y de la misma dirección (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (a1_0001, IMG_2026_07_28_02_13_41S). Todas las fórmulas son <strong>correctas</strong>: la norma euclídea en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>, la distancia entre dos puntos y el intervalo de cotas <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≤</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>≤</mo><mn>1</mn></mrow></math> que se deduce de Cauchy–Schwarz. La línea inferior (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>A</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>B</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math></span> y los dibujos pequeños de los casos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> / <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math>) se ha tomado de la foto, aunque el informe no la recogía. Una palabra azul subrayada bajo la definición es ilegible en el original; por el contexto parece indicar &quot;producto escalar&quot;. No se ha hecho resumen. Véase <code>a1_0001_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p002_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Axiomas del producto escalar, ejemplos y matriz de Gram",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las cuatro propiedades que debe cumplir un producto escalar (comprobadas con un ejemplo numérico), cuatro ejemplos clásicos de producto escalar, y la <strong>matriz de Gram</strong>, que expresa el producto escalar en una base general."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Axiomas del producto escalar"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Espacio euclídeo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>E</mi></math> un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> dotado de un producto escalar (<strong>espacio euclídeo</strong>). Entonces se cumplen las siguientes propiedades, <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math> y <math display=\"inline\"><mrow><mo>∀</mo><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (simetria) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (batu-linealtasuna) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (homogeneotasuna) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (positiboki definitua) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Comprobación numérica</strong> tomando <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1) Simetría:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⋅</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow></math>. Son iguales. ✓",
        "<strong>2) Linealidad respecto a la suma:</strong> <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>7</mn></mrow></math>; y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>7</mn></mrow></math></span>. Son iguales. ✓",
        "<strong>3) Homogeneidad:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>0</mn><mo>+</mo><mn>2</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>6</mn></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>6</mn></mrow></math>. Son iguales. ✓",
        "<strong>4) Definido positivo:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1</mn><mn>2</mn></msup><mo>=</mo><mn>5</mn><mo>&gt;</mo><mn>0</mn></mrow></math>."
       ]
      }
     ]
    },
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
     "titulua": "Productos escalares",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>[1]</strong> <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math> o <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, el producto escalar usual: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>y</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>[2]</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math>; definido con una matriz simétrica: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La matriz es simétrica y sus menores principales son positivos (<math display=\"inline\"><mrow><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>): por tanto es un <strong>producto escalar válido</strong>. (El autor marcó <math display=\"inline\"><mi>?</mi></math> en rojo; aquí queda confirmado.)"
      },
      {
       "mota": "testua",
       "html": "<strong>[3]</strong> Solo <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math>): <strong>no es</strong> un producto escalar válido, porque es <strong>degenerado</strong> — por ejemplo, tomando <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> resulta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, y falla el axioma 4). (El autor marcó <math display=\"inline\"><mi>?</mi></math> en rojo; su duda está justificada.)"
      },
      {
       "mota": "testua",
       "html": "<strong>[4]</strong> <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> (funciones continuas), o <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> (polinomios): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz de Gram (en una base general)"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mi>E</mi></math> un espacio euclídeo de dimensión <math display=\"inline\"><mi>n</mi></math> con una base <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Cuando <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>x</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>y</mi><mi>j</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub></mrow></math>, extendiendo por bilinealidad el producto:"
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
     "html": "Estos coeficientes forman la <strong>matriz de Gram</strong>, <math display=\"inline\"><mrow><msub><mi>G</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En forma compacta, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><mi>G</mi><mi>y</mi></mrow></math>; <math display=\"inline\"><mi>G</mi></math> es simétrica y definida positiva para que sea un producto escalar."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La foto (IMG_2026_07_28_02_13_48S) es una <strong>hoja doble</strong> (páginas 2-3); el informe a1_0002 solo recogió la página izquierda (2), y la página derecha (3, matriz de Gram) se ha recuperado aquí a partir de la foto. Las comprobaciones numeradas son <strong>correctas</strong> (axiomas 1), 2), 3): resultados <math display=\"inline\"><mrow><mn>3</mn><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mn>7</mn><mo>=</mo><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>=</mo><mn>6</mn></mrow></math>). En los ejemplos: [2] una matriz simétrica definida positiva es válida; [3] <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub></mrow></math> es degenerada (falla el axioma 4)) — el propio autor marcó ambos casos con <math display=\"inline\"><mi>?</mi></math>. La primera fila de la matriz de Gram está algo desordenada en diagonal en el original; la forma canónica es <math display=\"inline\"><mrow><msub><mi>G</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, corregida aquí. Una palabra al final de la definición (&quot;...se cumplen&quot;) es ilegible. No se ha hecho resumen. Véase <code>a1_0002_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p003_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 1,
   "izenburua": "Formas bilineales y forma cuadrática asociada (polarización)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Definición de forma bilineal, la forma cuadrática asociada a ella y la <strong>fórmula de polarización</strong> para recuperar la forma bilineal simétrica a partir de la forma cuadrática."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Forma bilineal",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Forma bilineal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>E</mi></math> un espacio vectorial sobre <math display=\"inline\"><mi>K</mi></math> (<math display=\"inline\"><mi>K</mi></math> = cuerpo de escalares). Una <strong>forma bilineal</strong> es una función <strong>lineal</strong> en cada argumento: <math display=\"block\"><mrow><mi>b</mi><mo>:</mo><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Forma cuadrática asociada",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Forma cuadrática",
     "blokeak": [
      {
       "mota": "testua",
       "html": "A una forma bilineal <math display=\"inline\"><mi>b</mi></math> se le asocia una <strong>forma cuadrática</strong>: <math display=\"block\"><mrow><msub><mi>Q</mi><mi>b</mi></msub><mo>:</mo><mi>E</mi><mo>→</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>↦</mo><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Homogeneidad cuadrática: si <math display=\"inline\"><mrow><mi>λ</mi><mo>∈</mo><mi>K</mi></mrow></math>, <math display=\"block\"><mrow><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Polarización",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La forma bilineal puede recuperarse a partir de la forma cuadrática. Desarrollando <math display=\"inline\"><mrow><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, por bilinealidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, despejando la parte simétrica:"
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
     "html": "Si <math display=\"inline\"><mi>b</mi></math> es <strong>simétrica</strong> (<math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), la forma bilineal se recupera por completo dividiendo entre <math display=\"inline\"><mn>2</mn></math>:"
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
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Página derecha de la foto (11), NEWTON, 6/2/2013. La derivación es <strong>correcta</strong>: es el paso estándar para obtener la fórmula de polarización simétrica. Dos precisiones <strong>señaladas (con cita)</strong>: (1) en la segunda línea de bilinealidad, el original escribió en el primer término <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, que debe ser <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (el primer argumento <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> es fijo); corregido aquí. (2) La página original se queda en la suma simétrica (<math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>); el autor marcó que buscaba &quot;<math display=\"inline\"><mrow><mn>2</mn><mi>b</mi><mo>=</mo><mi>Q</mi></mrow></math>&quot;, y aquí se ha completado con el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> para <math display=\"inline\"><mi>b</mi></math> simétrica (paso que el autor dejó sin terminar en esa página). La página izquierda (10) son ejercicios de determinantes (a1_0006i, de otra unidad). No se ha hecho resumen. Véase <code>a1_0006d_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p007_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Formas bilineales simétricas, b-ortogonalidad y matriz asociada (Gram)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Formas bilineales simétricas y su forma polar, definiciones de b-ortogonalidad y b-isotropía, la <strong>matriz asociada</strong> (matriz de Gram) que expresa el producto en una base, y un ejemplo en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Formas bilineales simétricas y forma polar"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Forma bilineal simétrica",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una forma bilineal <math display=\"inline\"><mi>b</mi></math> es <strong>simétrica</strong> si <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. En ese caso, <math display=\"inline\"><msub><mi>Q</mi><mi>b</mi></msub></math> es la <strong>forma polar</strong> asociada, y se recupera por polarización: <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "b-ortogonalidad y b-isotropía",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>b</mi></math> una forma bilineal simétrica en <math display=\"inline\"><mi>E</mi></math>."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></math> son <strong>b-ortogonales</strong> si <math display=\"inline\"><mrow><mo>⇔</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>.",
        "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> es <strong>b-isótropo</strong> si <math display=\"inline\"><mrow><mo>⇔</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz asociada (matriz de Gram)"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> una base, <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La <strong>matriz asociada</strong> (a <math display=\"inline\"><mi>b</mi></math>, a <math display=\"inline\"><msub><mi>Q</mi><mi>b</mi></msub></math>) en la base <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> es:"
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
     "html": "Si <math display=\"inline\"><mi>b</mi></math> es simétrica, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, luego <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math> es <strong>simétrica</strong> (<math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi>G</mi><mn>1</mn><mi>T</mi></msubsup></mrow></math>). Siempre se puede encontrar una base <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> tal que <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math>); entonces la matriz es <strong>diagonal</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Matriz asociada en R³",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la base <math display=\"inline\"><mrow><mi>b</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Encontrar una base <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> tal que <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mo>∀</mo><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math>)."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Multiplicando el vector fila <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math> por: <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math> (la matriz diagonalizante <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> se construye en la página siguiente.)"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 6/2/2013 (páginas 12-13). Toda la teoría es <strong>correcta</strong>: la fórmula de polarización (que quedó abierta en la página 0006 se cierra aquí), la simetría de la matriz asociada (<math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi>G</mi><mn>1</mn><mi>T</mi></msubsup></mrow></math>), y el producto <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub></mrow></math> del ejemplo de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> coincide exactamente con la foto. <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math> es simétrica, coherente con la teoría anterior. No se ha hecho resumen. Véase <code>a1_0007_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p008_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 1,
   "izenburua": "Diagonalización de una forma bilineal: base b-ortogonal y Sylvester (inicio)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cómo construir una base diagonalizante de una forma bilineal simétrica (b-ortogonal, no isótropa), el ejemplo de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> completo, y el inicio del teorema de Sylvester."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Base diagonal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la base diagonalizante <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> la matriz es diagonal y el producto se escribe sin términos cruzados:"
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
   "izenburua": "¿Cómo encontrar <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>?",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Procedimiento (b-ortogonalización)",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Tomar un vector <strong>no isótropo</strong> de <math display=\"inline\"><mi>E</mi></math>.",
        "Elegir el siguiente <strong>b-ortogonal</strong> a los anteriores y, si es posible, no isótropo (resolviendo el complemento ortogonal de los anteriores)."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Continuando el ejemplo</strong> (<math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>):"
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1) <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math>:</strong> <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> (no isótropo)."
      },
      {
       "mota": "testua",
       "html": "<strong>2) <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></math>:</strong> <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> b-ortogonales; <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math> (no isótropo). Por tanto <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>3) <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math>:</strong> ortogonal a <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math> y a <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></math>. Complemento ortogonal: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>:</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Solución: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mi>−</mi><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, luego <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, y <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Resultado:"
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
     "html": "Como los tres coeficientes son positivos, la forma es <strong>definida positiva</strong>: <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇔</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Sylvester (inicio)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> una base de <math display=\"inline\"><mi>E</mi></math> (<math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> espacio vectorial sobre), <math display=\"inline\"><mi>b</mi></math> una forma bilineal simétrica donde <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math> <strong>(...continúa en la página siguiente.)</strong>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 6/2/2013 (páginas 14-15). El ejemplo completo es <strong>correcto</strong>: <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math> no isótropos (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> de <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>), b-ortogonalidad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, de complemento ortogonal <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mn>2</mn><mo>−</mo><mn>4</mn><mo>+</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la forma definida positiva son consecuencias coherentes. El enunciado de Sylvester se interrumpe en esta página (continúa en la siguiente). No se ha hecho resumen. Véase <code>a1_0008_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p009_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Teorema de Sylvester (ley de inercia) y signatura",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Normalizando la base diagonal, la matriz de una forma bilineal simétrica se reduce a los valores <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mn>0</mn></math>: <strong>ley de inercia</strong> de Sylvester y <strong>signatura</strong>. También se cierra el ejemplo de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "De la base diagonal a la signatura"
    },
    {
     "mota": "testua",
     "html": "En la base diagonal, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>x</mi><mi>i</mi></msub><msub><mi>y</mi><mi>i</mi></msub></mrow></math></span>. Los vectores de la base se clasifican según el signo de los valores de la diagonal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (positiboak) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (negatiboak) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mi>r</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (nuluak) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Nueva base</strong> <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, normalizando:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Normalización",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>s</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>r</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mi>−</mi><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Comprobación (por bilinealidad el escalar sale al cuadrado):"
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
     "titulua": "Ley de inercia de Sylvester y signatura",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La matriz de una forma bilineal simétrica en una base adecuada es <strong>diagonal canónica</strong>, con los valores <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math> (<math display=\"inline\"><mi>p</mi></math> veces), <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (<math display=\"inline\"><mi>q</mi></math> veces) y <math display=\"inline\"><mn>0</mn></math>. Los números <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math> son <strong>independientes de la base</strong>: la <strong>signatura</strong> de <math display=\"inline\"><mi>b</mi></math> es <math display=\"inline\"><mrow><msub><mi>σ</mi><mi>b</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>p</mi></math> = número de <math display=\"inline\"><mn>1</mn></math>, <math display=\"inline\"><mi>q</mi></math> = número de <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejemplo (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>)"
    },
    {
     "mota": "testua",
     "html": "En el ejemplo anterior <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn></mrow></math> (los tres positivos). Normalizando:"
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
     "html": "La forma es <strong>definida positiva</strong> (signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, como un producto escalar ordinario)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 6/2/2013 (páginas 16-17). La derivación de Sylvester es <strong>correcta</strong>: la normalización da <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>+</mi><mn>1</mn><mi>/</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>0</mn></mrow></math>, porque el escalar sale al cuadrado. El cierre del ejemplo es correcto: los tres valores positivos implican <math display=\"inline\"><mrow><msup><mi>G</mi><mo>″</mo></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> y signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (definida positiva). En el original el autor usa <math display=\"inline\"><mfrac><mo>+</mo><mo>−</mo></mfrac></math> rodeados con un círculo para indicar el signo; en esa página no escribe explícitamente la signatura numérica <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. No se ha hecho resumen. Véase <code>a1_0009_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p010_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Diagonalización de una forma bilineal degenerada en R⁴ (signatura (2,0))",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se diagonaliza una forma bilineal simétrica <strong>degenerada</strong> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: construir una base b-ortogonal, identificar los vectores isótropos y calcular la signatura."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enunciado"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Forma bilineal en R⁴",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La bilineal <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, en la base <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> con <math display=\"block\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi>G</mi><mn>1</mn><mi>T</mi></msubsup></mrow></math>, es <strong>simétrica</strong> <math display=\"inline\"><mi>f</mi></math>. Encontrar una base <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> tal que <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math>), y calcular la signatura."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los dos primeros vectores"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (entradas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la matriz), se pueden tomar: <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> delako</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Complemento ortogonal y vectores isótropos"
    },
    {
     "mota": "testua",
     "html": "Se buscan <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>G</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Solución (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Todos los vectores de esa familia <strong>son isótropos</strong> (están en el radical, <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>). Eligiendo: <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Comprobación: <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, luego <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado y signatura"
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
     "html": "La forma es <strong>degenerada</strong> (dos valores nulos; el radical tiene dimensión <math display=\"inline\"><mn>2</mn></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 6-7/2/2013 (páginas 18-19). ⚠ <strong>Reconstrucción de la matriz (foto + coherencia interna):</strong> el informe a1_0010 recogió ilegibles/erróneas las entradas inferiores derechas de <math display=\"inline\"><msub><mi>G</mi><mn>1</mn></msub></math> (la última entrada de la tercera fila y la cuarta fila). La foto y los propios datos del cuaderno fijan esta matriz: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Cuatro comprobaciones lo confirman: (1) es simétrica; (2) <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (lo que dice la página 18); (3) la segunda condición es <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (lo que dice la página 19, porque la columna de <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>); (4) el rango es <math display=\"inline\"><mn>2</mn></math> (<math display=\"inline\"><mrow><mn>3</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mo>=</mo><mn>2</mn><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi></mrow></math>), lo que concuerda con la signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y con los dos valores nulos. Los <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> elegidos son isótropos (<math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>): coinciden exactamente con el resultado del autor. En el original, en la expresión como conjunto aparece <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> en la última coordenada (que debe ser <math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math>); ese desliz de signo se ha corregido aquí, pero los vectores elegidos y el resultado no cambian. La línea intermedia de isotropía es muy densa en el original; aquí se ha sustituido por <math display=\"inline\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, más claro. No se ha hecho resumen. Véase <code>a1_0010_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p011_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Ejemplo completo: signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — forma bilineal indefinida pero no degenerada",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Diagonalización completa</strong> de una forma bilineal simétrica, con signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: base ortogonal mediante Gram-Schmidt bilineal, forma diagonal y normalización de Sylvester (<math display=\"inline\"><mrow><mi>+</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>). Caso <strong>indefinido pero no degenerado</strong> (los ejemplos anteriores eran <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo y base ortogonal"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> simétrica. <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></math> es <strong>isótropo</strong> (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>), así que <strong>no</strong> sirve para empezar. Algoritmo (Gram-Schmidt bilineal):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math> no isótropo (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>).",
      "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>3</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (plano en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>).",
      "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en el ortogonal, no isótropo (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>)."
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  El primer vector debe ser <strong>no isótropo</strong> (para poder normalizarlo); en el producto escalar euclídeo, definido\n  positivo, eso no hace falta.\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base ortogonal y matriz diagonal"
    },
    {
     "mota": "testua",
     "html": "Encontrados <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en la base ortogonal <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> la forma es <strong>diagonal</strong>:"
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
     "testua": "Ortonormalización y signatura"
    },
    {
     "mota": "testua",
     "html": "Dividiendo cada vector entre la raíz del valor absoluto de su «norma»:"
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
     "html": "<strong>Signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>: dos positivos, uno negativo. No hay ningún cero → la forma es <strong>no degenerada</strong> (rango <math display=\"inline\"><mn>3</mn></math>), pero <strong>indefinida</strong> (dos signos)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas y origen de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El ejemplo procede del cuaderno NEWTON2 (<code>NEWTON2_0053</code>/<code>0054</code>, páginas 104–107; &quot;ÁLGEBRA NEWTON&quot;): Gram-Schmidt bilineal de una forma simétrica, forma diagonal <math display=\"inline\"><mrow><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y normalización de Sylvester <math display=\"inline\"><mrow><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>En la reorganización del 26/08/2026</strong> se trajo desde <code>diagonalizazioa</code>: allí estaba dentro de una teoría duplicada; aquí se conserva porque es el único caso trabajado de signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Sin correcciones."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Cambio de base de la matriz de una forma bilineal (ejercicio de examen)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La matriz de una forma bilineal simétrica se lleva de una base (<math display=\"inline\"><mi>B</mi></math>) a la <strong>base canónica</strong>; con ella se escribe la forma completa en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Enunciado (otoño de 2012)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejercicio de examen",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Forma bilineal simétrica <math display=\"inline\"><mi>f</mi></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, en la base <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span> <math display=\"block\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Calcular <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> (usando la base canónica).",
        "¿Puede estar asociada la matriz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> a <math display=\"inline\"><mi>f</mi></math>? En caso afirmativo, encontrar una base <math display=\"inline\"><mi>B</mi></math>."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "1) La matriz en la base canónica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> donde <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>. Recíprocamente, la base canónica en función de <math display=\"inline\"><mi>B</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>−</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entradas de la matriz canónica <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup></mrow></math></span>:"
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
     "html": "La matriz es <strong>simétrica</strong>, como corresponde al cambio de base de una forma bilineal simétrica. El apartado 2) se plantea en esta página, pero no se resuelve <strong>(continúa en la página siguiente).</strong>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 7/2/2013 (páginas 20-21), examen de otoño de 2012. Todos los cálculos son <strong>correctos</strong>: la fila <math display=\"inline\"><mrow><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>8</mn><mo>,</mo><mn>7</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>7</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y los resultados <math display=\"inline\"><mrow><mn>12</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>12</mn><mo>,</mo><mn>15</mn><mo>,</mo><mn>13</mn><mo>,</mo><mn>18</mn></mrow></math>. El paso intermedio de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es dudoso en la foto (parece que podría poner &quot;15&quot;), pero el valor correcto es <strong>13</strong> (<math display=\"inline\"><mrow><mn>8</mn><mo>+</mo><mn>7</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>13</mn></mrow></math>) y la matriz final da claramente <math display=\"inline\"><mn>13</mn></math>: no es un error del autor, sino una duda de lectura. La fecha de la página derecha la tapa la mancha de la encuadernación. No se ha hecho resumen. Véase <code>a1_0011_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p012_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Signatura invariante y clasificación de las formas bilineales (Sylvester)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cierre del ejercicio de examen anterior (como la signatura es invariante bajo cambio de base, la matriz <math display=\"inline\"><mi>A</mi></math> no puede ser la de <math display=\"inline\"><mi>f</mi></math>), y clasificación completa de las formas bilineales simétricas según la signatura."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado del apartado 1)"
    },
    {
     "mota": "testua",
     "html": "Usando <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>15</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>:"
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
     "testua": "Apartado 2): A no puede ser la matriz de f"
    },
    {
     "mota": "testua",
     "html": "Diagonalizando <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Como <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>. El tercero, a partir del complemento ortogonal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>5</mn><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>7</mn><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>7</mn></mrow></math>; tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>35</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>35</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>14</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><mn>10</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>. Valores de la diagonal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>5</mn><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>7</mn><mo>&gt;</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>35</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>35</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>162</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>35</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>5670</mn><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tres valores positivos, luego <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Pero <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>A</mi></math> tiene dos positivos y uno negativo). Como la signatura es <strong>invariante</strong> bajo cambio de base:"
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
     "testua": "Teoría: clasificación según la signatura"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mi>f</mi></math> una forma bilineal simétrica sobre <math display=\"inline\"><mi>E</mi></math> (<math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> espacio vectorial sobre, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi><mo>=</mo><mi>n</mi></mrow></math>), <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Clasificación de las formas bilineales simétricas",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "I) <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>q</mi><mo>=</mo><mi>n</mi><mo>⇒</mo></mrow></math> <strong>no degenerada</strong>; <math display=\"inline\"><mspace width=\"1.0em\"></mspace></math> II) <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>q</mi><mo>&lt;</mo><mi>n</mi><mo>⇒</mo></mrow></math> <strong>degenerada</strong>.",
        "III) <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>n</mi></mrow></math>: forma canónica <math display=\"inline\"><mrow><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>, <strong>definida positiva</strong> (<math display=\"inline\"><mi>⊕</mi></math>).",
        "IV) <math display=\"inline\"><mrow><mi>p</mi><mo>&lt;</mo><mi>n</mi></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mn>0</mn></mrow></math>: <strong>semidefinida positiva</strong> (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>).",
        "V) <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>&lt;</mo><mi>n</mi></mrow></math>: <strong>semidefinida negativa</strong> (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>).",
        "VI) <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>n</mi></mrow></math>: forma canónica <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><msub><mi>I</mi><mi>n</mi></msub></mrow></math>, <strong>definida negativa</strong> (<math display=\"inline\"><mi>⊖</mi></math>).",
        "VII) <math display=\"inline\"><mrow><mi>p</mi><mo>≠</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>≠</mo><mn>0</mn></mrow></math>: <strong>indefinida</strong> (positivos y negativos)."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La forma canónica es siempre la matriz diagonal formada por los valores <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mn>0</mn></math> (una variante con signos de la identidad)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 7/2/2013 (páginas 22-23). La conclusión es <strong>correcta</strong>: como la signatura de Sylvester es invariante, que <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Sig</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> demuestra que <math display=\"inline\"><mi>A</mi></math> no puede ser la matriz de <math display=\"inline\"><mi>f</mi></math>. Precisiones (con cita): (1) en la línea de solución del apartado 1) el original parece poner &quot;<math display=\"inline\"><mn>3</mn></math>&quot; en las posiciones <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>/<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero la matriz da claramente <math display=\"inline\"><mn>5</mn></math> (entrada de <math display=\"inline\"><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub></math>); se ha usado <math display=\"inline\"><mn>5</mn></math>. (2) El valor exacto de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es ilegible en la foto (el autor lo marcó con <math display=\"inline\"><mi>⊕</mi></math>, positivo); calculado aquí: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>35</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>M</mi><mi>B</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>162</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"inline\"><mrow><mn>5670</mn><mo>&gt;</mo><mn>0</mn></mrow></math>. El cuadro de clasificación (I–VII) es la clasificación estándar de Sylvester, bien enunciada. No se ha hecho resumen. Véase <code>a1_0012_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p013_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Degeneración de una forma bilineal paramétrica y base f-ortogonal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se estudia la degeneración de una forma bilineal simétrica con un parámetro (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>), y se calculan una base f-ortogonal y la signatura para el caso <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>. Al final comienza el ejercicio <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enunciado"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Matriz paramétrica",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es la matriz de la forma bilineal simétrica <math display=\"inline\"><mi>f</mi></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, en la base canónica."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Encontrar los valores de <math display=\"inline\"><mrow><mi>a</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> para los que <math display=\"inline\"><mi>f</mi></math> es <strong>degenerada</strong>.",
        "En el caso <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>, encontrar una base f-ortogonal y <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1) Degeneración"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> es degenerada <math display=\"inline\"><mrow><mo>⇔</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Factorizando tras las operaciones entre columnas/filas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Raíces: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mi>a</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><mn>3</mn></mrow><mn>4</mn></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>, y del primer factor <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>. Por tanto:"
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
     "testua": "2) <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>: base f-ortogonal"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">heina</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (isótropos), pero <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eligiendo <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math></span> (no isótropo)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⟂</mo></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⇒</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Base f-ortogonal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math>, valores <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn></mrow></math>:"
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
     "testua": "Inicio del ejercicio siguiente (<math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Forma bilineal simétrica <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Encontrar, si existe, <math display=\"inline\"><mrow><mi>P</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tal que <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> <strong>(continúa en la página siguiente).</strong>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 7/2/2013 (páginas 24-25). ⚠ <strong>Corrección (con cita):</strong> el original escribe &quot;<math display=\"inline\"><mi>f</mi></math> no degenerada <math display=\"inline\"><mrow><mi>a</mi><mo>∉</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>&quot;, pero <strong>falta</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>: como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> también hace <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (el propio autor lo encontró en la factorización <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> y lo usó en el apartado 2)). El conjunto completo es <math display=\"inline\"><mrow><mi>a</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. El resto de los cálculos son correctos: raíces de <math display=\"inline\"><mi mathvariant=\"normal\">det</mi></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>4</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, el original escribe <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el mismo resultado); en <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> isótropo, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, rango <math display=\"inline\"><mn>2</mn></math>. En el original la frase inicial (&quot;degenerada ... si sigue teniendo rango 3&quot;) es confusa, corregida por el propio autor en la conclusión. El <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub></math> sobrante) del último ejercicio es un lapsus, pues la matriz es <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>. No se ha hecho resumen. Véase <code>a1_0013_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p014_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Forma bilineal paramétrica: degeneración y base ortogonal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una forma bilineal con <strong>dos parámetros</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi></mrow></math>): su matriz, <strong>cuándo es no degenerada</strong> y una base ortogonal cuidando la isotropía."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz y degeneración"
    },
    {
     "mota": "testua",
     "html": "Matriz a partir de los coeficientes de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<strong>no simétrica</strong>, forma bilineal general), y determinante:"
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
     "html": "Determinante, rango y degeneración están <strong>relacionados</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>: base ortogonal e isotropía"
    },
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math> es <strong>isótropo</strong> (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>), así que <strong>no se puede tomar primero</strong> (no se puede normalizar):"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <strong>Consecuencia práctica</strong> de la isotropía (citada en <code>0053</code>, ahora aplicada): se toma <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>\n  (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>), luego <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>), etc.\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Anuncio del tema siguiente"
    },
    {
     "mota": "testua",
     "html": "Arriba, en rojo: «<strong>cónicas y cuádricas</strong>». El cuaderno dará el salto de las formas cuadráticas <strong>abstractas</strong> a la geometría —las cónicas y las cuádricas son formas cuadráticas y se clasifican por la <strong>signatura</strong>—."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0063</code>, páginas 124-125; &quot;ÁLGEBRA NEWTON&quot;). Forma bilineal <strong>paramétrica</strong>: matriz (no simétrica), <strong>degeneración</strong> (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>M</mi><mo>≠</mo><mn>0</mn><mo>⇔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>n</mi><mo>⇔</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>μ</mi><mo>≠</mo><mn>0</mn></mrow></math></span>) y, con <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>, <strong>base ortogonal</strong> cuidando la isotropía (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math> isótropo → <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>). ⚠ El determinante (<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>μ</mi></mrow></math>) depende de una entrada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la matriz cuya lectura no es segura (véase la edición crítica). <strong>Anuncia el tema siguiente</strong>: cónicas y cuádricas. ⚠ El registro dice <code>calculo</code>; el contenido es álgebra. Sin correcciones. Véase <code>koadernoa_newton2_alg_p124.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Congruencia y criterio de <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math>; lista de matrices 4×4",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El cambio de base de la matriz de una forma bilineal es una transformación de <strong>congruencia</strong>; ella decide cuándo <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> tiene solución (matrices definidas positivas). A continuación, la lista de matrices <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> (Proskuriakov 257–262, sin resolver)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cambio de base: congruencia"
    },
    {
     "mota": "testua",
     "html": "En la base <math display=\"inline\"><mi>B</mi></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, y <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> en la base canónica <math display=\"inline\"><mrow><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi></mrow></math> (forma canónica). Con el cambio de base <math display=\"inline\"><mrow><mi>Q</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>Q</mi><mi>T</mi></msup><mi>A</mi><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>2</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>3</mn><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><msup><mi>Q</mi><mi>T</mi></msup><mi>A</mi><mi>Q</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">kongruentzia</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando de ahí <math display=\"inline\"><mi>A</mi></math>:"
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
     "testua": "Criterio de <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>P</mi><mi>S</mi><msup><mi>P</mi><mi>T</mi></msup></mrow></math>. Por tanto <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> <strong>solo tiene solución</strong> cuando <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>, es decir, cuando <math display=\"inline\"><mi>f</mi></math> es <strong>definida positiva</strong>:"
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
     "html": "(Factorización de Cholesky: toda matriz de la forma <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup></mrow></math> es simétrica y definida positiva; si <math display=\"inline\"><mi>A</mi></math> no es definida positiva, no existe tal <math display=\"inline\"><mi>P</mi></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lista: matrices 4×4 (Proskuriakov 257–262)"
    },
    {
     "mota": "testua",
     "html": "Aparecen en la página sin enunciado (probablemente determinantes; <strong>sin resolver</strong>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>257</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>258</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>259</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>260</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>261</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>262</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 7/2/2013 (páginas 26-27). La derivación de la página izquierda es <strong>correcta</strong>: de la congruencia <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msup><mi>Q</mi><mi>T</mi></msup><mi>A</mi><mi>Q</mi></mrow></math> se llega a <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mi>S</mi><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, y <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math> tiene solución solo cuando <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math> (definida positiva) (Cholesky/congruencia). En la página derecha <math display=\"inline\"><mn>257</mn></math>–<math display=\"inline\"><mn>262</mn></math> están <strong>sin enunciado</strong>: no se escribió qué se pide (probablemente determinantes, siguiendo la serie de Proskuriakov) y están <strong>sin resolver</strong>; no se ha inventado ni enunciado ni resultado. clasificacion.csv avisa de &quot;legibilidad media&quot; para esta página; algunas cifras (259 fila 2, 260 fila 3, 262 fila 3) son de trazo fino, pero se ha recogido la lectura más probable. No se ha hecho resumen. Véase <code>a1_0014_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p015_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Lista de determinantes (Proskuriakov 263–273, sin resolver)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lista de determinantes <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> y <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math>, sin enunciado ni desarrollo en el original (continuación de la lista <math display=\"inline\"><mn>257</mn></math>–<math display=\"inline\"><mn>262</mn></math> de la página 0014). Se transcriben <strong>sin resolver</strong>, sin inventar nada."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>263</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>264</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>265</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>266</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>267</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mn>268</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>269</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>272</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>35</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>59</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>71</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>42</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>70</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>77</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>54</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>43</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>68</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>72</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>29</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>49</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>65</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>50</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>273</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>44</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>40</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>55</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>20</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>64</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>21</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>40</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>20</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>24</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>46</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>45</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>55</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>84</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Determinantes <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>270</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>21</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>271</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "&quot;ÁLGEBRA&quot;, páginas 28-29. Toda la página es una <strong>lista de matrices</strong>, sin enunciado (continuación de la lista <math display=\"inline\"><mn>257</mn></math>–<math display=\"inline\"><mn>262</mn></math>, probablemente determinantes de la serie de Proskuriakov); está <strong>sin resolver</strong>, no hay cálculo. No se ha inventado ni enunciado ni resultado. <math display=\"inline\"><mn>270</mn></math> y <math display=\"inline\"><mn>271</mn></math> son <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math>. clasificacion.csv avisa de &quot;legibilidad media&quot;; hay algunas dudas de trazo (264 inicio de la fila 2, 266 <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, 268 última fila), pero se ha recogido la lectura más probable, sin inventar ninguna cifra. No se ha hecho resumen. Véase <code>a1_0015_algebra_primero_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p016_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 1,
   "izenburua": "Fin de la lista de determinantes y matriz de una aplicación lineal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Final de la lista de determinantes (<math display=\"inline\"><mn>274</mn></math>–<math display=\"inline\"><mn>278</mn></math>, con fracciones y raíces, sin resolver) y un ejercicio importante de aplicación lineal (LANDETA): matriz asociada y carácter de automorfismo a partir de unas imágenes."
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Determinantes <math display=\"inline\"><mn>274</mn></math>–<math display=\"inline\"><mn>278</mn></math> (sin resolver)",
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
   "izenburua": "Ejercicio importante (LANDETA, 11/2/2013)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Matriz de una aplicación lineal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aplicación lineal <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> definida así: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Calcular la matriz asociada de <math display=\"inline\"><mi>f</mi></math> en la base canónica de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>.",
        "Sin probar <strong>directamente</strong> la inyectividad/suprayectividad, ¿se puede deducir si <math display=\"inline\"><mi>f</mi></math> es un automorfismo?"
       ]
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Previo: ¿los vectores de entrada son una base?</strong> Para definir una aplicación lineal hace falta una base del espacio de salida. Comprobar que <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math></span> son linealmente independientes: <math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>λ</mi><mo>−</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>3</mn><mi>δ</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mn>2</mn><mi>δ</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Sumando las dos primeras ecuaciones <math display=\"inline\"><mrow><mi>−</mi><mi>μ</mi><mo>+</mo><mn>5</mn><mi>δ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>μ</mi><mo>=</mo><mn>5</mn><mi>δ</mi></mrow></math>; sustituyendo, la única solución es la trivial. Equivalente: el determinante de la matriz es <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>17</mn><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math>, por lo que los tres vectores son <strong>linealmente independientes</strong> y forman una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>. (El cálculo de la matriz y el apartado 2) continúan en la página siguiente.)"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La página izquierda (30) es el final de la lista de determinantes (<math display=\"inline\"><mn>274</mn></math>–<math display=\"inline\"><mn>278</mn></math>, con fracciones y raíces), <strong>sin resolver</strong>; las fracciones se han dejado en su forma original (sin simplificar). La página derecha (31) lleva el encabezado &quot;ÁLGEBRA LANDETA, 11/2/2013&quot; —la fuente del ejercicio es LANDETA—; el encabezado se ha recogido tal cual. La comprobación de la base es <strong>correcta</strong>: el sistema solo tiene la solución trivial (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>17</mn><mo>≠</mo><mn>0</mn></mrow></math>, de acuerdo con el paso <math display=\"inline\"><mrow><mi>−</mi><mn>17</mn><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math> del autor); los tres vectores son base. La línea intermedia del autor (&quot;<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn><mi>δ</mi><mi>/</mi><mn>2</mn></mrow></math>&quot;) no se lee entera en la foto, pero la conclusión (linealmente independientes) es correcta. ⚠ <strong>Corrección de lectura:</strong> la primera imagen es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (no <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): en la foto la cifra es claramente <math display=\"inline\"><mn>16</mn></math>, y lo confirman la matriz y las fórmulas de la página 0017 (<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi></mrow></math> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mn>16</mn></mrow></math>). El informe a1_0016 puso <math display=\"inline\"><mn>10</mn></math>. No se ha hecho resumen. Véase <code>a1_0016_algebra_primero_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p017_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Matriz de la aplicación lineal y carácter de automorfismo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cierre del ejercicio anterior: escribir el vector genérico en la base, obtener la expresión explícita de <math display=\"inline\"><mi>f</mi></math> y la matriz asociada, y decidir si es automorfismo. Al final comienza un nuevo ejercicio <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> (núcleo e imagen dados)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Vector genérico en la base"
    },
    {
     "mota": "testua",
     "html": "Despejando <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (denominador <math display=\"inline\"><mn>17</mn></math>):"
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
     "html": "Por linealidad, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Sumando las componentes:"
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
     "testua": "Matriz asociada y carácter de automorfismo"
    },
    {
     "mota": "testua",
     "html": "Cada columna es <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (en la base canónica):"
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
       "html": "<strong>(ii) ¿Es automorfismo?</strong> Sin probar directamente la inyectividad/suprayectividad, se estudia el <strong>rango</strong> de la matriz. Obsérvese que <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>3</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mi>e</mi><mi>n</mi><mi>k</mi><mi>a</mi><mi>d</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mo>=</mo><mn>2</mn><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>.</mi><mi>e</mi><mi>r</mi><mi>r</mi></mrow></math></span> (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>), luego las filas son <strong>dependientes</strong>: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mn>3</mn><mi>.</mi></mrow></math> En consecuencia <math display=\"inline\"><mi>f</mi></math> <strong>no es automorfismo</strong> (ni inyectiva ni suprayectiva): la dimensión de la imagen es <math display=\"inline\"><mn>2</mn></math>, no <math display=\"inline\"><mn>3</mn></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo de evaluación:</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>0</mn><mo>−</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>−</mo><mn>0</mn><mo>+</mo><mn>7</mn><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nuevo ejercicio: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> (núcleo e imagen dados)"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Determinar f a partir del núcleo y de la imagen (18/2/2013)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Encontrar, si es posible, <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> lineal: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> vive en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, pero solo tiene <math display=\"inline\"><mn>2</mn></math> dimensiones.) <strong>(Se resuelve en la página siguiente.)</strong>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "LANDETA, 11/2/2013 (páginas 32-33). Los resultados principales son <strong>correctos</strong> y coinciden con la foto: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>; los tres pares de datos lo confirman (la primera imagen es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, véase la corrección de la página 0016). ⚠ <strong>Precisiones (con cita):</strong> (1) en el recuadro <math display=\"inline\"><mi>λ</mi></math> el original escribe <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>17</mn></mrow></math>, pero el signo correcto es <math display=\"inline\"><mrow><mi>+</mi><mn>7</mn><mi>z</mi></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>17</mn></mrow></math>); el propio autor usó <math display=\"inline\"><mrow><mi>+</mi><mn>119</mn><mi>z</mi></mrow></math> (es decir, <math display=\"inline\"><mrow><mi>+</mi><mn>7</mn><mi>z</mi></mrow></math>) en la sustitución final, así que <math display=\"inline\"><mrow><mi>−</mi><mn>7</mn><mi>z</mi></mrow></math> en el recuadro es un error de escritura. (2) El resultado de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; el original escribió &quot;<math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn></mrow></math>&quot;, que es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (la primera columna) — un desliz de etiqueta. (3) el autor no escribe explícitamente <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>M</mi><mo>=</mo><mn>0</mn></mrow></math>, pero el rango es <math display=\"inline\"><mn>2</mn></math> y <math display=\"inline\"><mi>f</mi></math> <strong>no es automorfismo</strong> (la imagen tiene dimensión <math display=\"inline\"><mn>2</mn></math>). No se ha hecho resumen. Véase <code>a1_0017_algebra_primero_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p018_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Productos de matrices (Proskuriakov 788–794)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Siete productos de matrices, como enunciados en el original (<strong>sin resolver</strong>). Los resultados se <strong>han calculado aquí</strong> (no están escritos en el original) como ayuda de lectura, claramente marcados."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enunciados"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>788</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>789</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>β</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>γ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>794</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>790</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>791</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>792</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>793</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultados (calculados aquí, no están en el original)"
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
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "&quot;MATRICES Y FORMAS CUADRÁTICAS&quot;, página 35 (18/2/2013), Proskuriakov 788–794. La foto es una hoja doble: la página izquierda (34) es la continuación del ejercicio <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> (núcleo/imagen; a1_0018i, de otra unidad) y no se incluye aquí. En la página derecha (35) los productos están <strong>como enunciados</strong>, <strong>sin resolver</strong>: el original no escribe resultados. Los resultados <strong>se han calculado aquí</strong> (no inventados: el producto de matrices es determinista) y comprobado uno a uno; se marca claramente que no están en el original. No se ha hecho resumen. Véase <code>a1_0018d_matrices_algebra_primero.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p019_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a30",
   "maila": 1,
   "izenburua": "Del producto escalar a la norma euclídea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tomando una forma bilineal simétrica definida positiva como <strong>producto escalar</strong>, se define la <strong>norma euclídea</strong>; esta constituye el espacio euclídeo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Axiomas de la norma, otras normas, ángulo y expresión matricial."
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Producto escalar y norma euclídea",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Producto escalar y norma euclídea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El <strong>producto escalar</strong> es una forma bilineal simétrica <strong>definida positiva</strong> sobre <math display=\"inline\"><mi>E</mi></math> (espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>). Como <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>), la <strong>norma euclídea</strong> se define así: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><msqrt><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">bektoreak neurtzeko modu bat</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Existen también otras normas; por ejemplo, en el espacio de funciones continuas (<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>g</mi><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> jarraituak</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>), la <strong>norma del supremo</strong>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><munder><mi mathvariant=\"normal\">max</mi><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Axiomas de la norma",
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
     "html": "Al par <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se le llama <strong>espacio euclídeo</strong> (<math display=\"inline\"><mi>f</mi></math> = producto escalar)."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Ángulo y expresión matricial",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El ángulo que forman los vectores <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></math> es <math display=\"inline\"><mi>θ</mi></math>:"
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
     "html": "En la base <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, siendo <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, la forma bilineal en forma matricial (matriz de Gram):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mspace width=\"0.222em\"></mspace><mi>…</mi><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 13/2/2013 (página 37). La cadena de derivación es <strong>coherente</strong>: de la forma bilineal simétrica definida positiva a la norma euclídea, con tres axiomas, el espacio euclídeo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el ángulo y la expresión matricial (Gram) — construcción estándar. Este tema es <strong>afín a las páginas 0001-0002</strong> (espacio euclídeo, norma, ángulo; véase <code>koadernoa_algebra2013_alg_p001_mk</code> y"
      },
      {
       "mota": "testua",
       "html": "<code>...p002_mk</code>"
      },
      {
       "mota": "testua",
       "html": "), pero no es la misma página: fecha distinta (13/2/2013 frente a 29/1/2013), encabezado NEWTON y enfoque más formal (norma a partir de una forma bilineal definida positiva, enlazando el arco de formas bilineales —0006-0012— con la geometría euclídea). Por eso se ha transcrito entera, no descartado, como segunda exposición independiente. La página izquierda de la foto (36) es la continuación de los productos de matrices (795–798, a1_0019i, de otra unidad). No se ha hecho resumen. Véase <code>a1_0019d_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p020_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Bases ortonormales y algoritmo de Gram–Schmidt",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un producto escalar definido positivo admite una base ortonormal; el algoritmo de Gram–Schmidt la construye. Ejemplo completo en un espacio de funciones, con el producto escalar integral."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base ortonormal"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>f</mi></math> es definido positivo, existe una base <strong>ortonormal</strong> <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>n</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. En ella la matriz es <math display=\"inline\"><msub><mi>I</mi><mi>n</mi></msub></math> y se obtiene el producto escalar canónico:"
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
     "testua": "Algoritmo de Gram–Schmidt"
    },
    {
     "mota": "testua",
     "html": "A partir de una base <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, se construye una base <strong>ortogonal</strong>, imponiendo la ortogonalidad con los anteriores:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
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
     "testua": "Ejemplo: un espacio de funciones"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Base ortonormal de funciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Producto escalar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mo>,</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, en el espacio <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Encontrar una base ortonormal."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. No son ortogonales: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>e</mi><mi>x</mi></msup><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mn>1</mn></msubsup><mo>=</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Gram–Schmidt:</strong> <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>k</mi><mo>⋅</mo><mn>1</mn></mrow></math>, donde <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mn>1</mn><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi><mo>⇒</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>e</mi><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es una <strong>base ortogonal</strong>."
      },
      {
       "mota": "testua",
       "html": "<strong>Normas:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></msqrt><mo>=</mo><mn>1</mn></mrow></math>, y <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>≈</mo><mn>0.242</mn><mo>,</mo></mtd></mtr></mtable></math> luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></msqrt><mo>≈</mo><mn>0.492</mn></mrow></math>. Base ortonormal: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi></mrow><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 13/2/2013 (páginas 38-39; continuación de 0019d). La teoría y el ejemplo son <strong>correctos</strong>: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mi>e</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>e</mi></mrow></math> y el desarrollo del cuadrado. En el original el cálculo de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math> <strong>se interrumpe</strong> (la primera fracción <span class=\"j-mat-luzea\"><math display=\"inline\"><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mi>/</mi><mn>2</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mn>1</mn></msubsup></math></span> planteada al margen, sin evaluar); aquí <strong>se ha completado</strong> (con cita): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>. Como <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>e</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, la expresión original coincide con la calculada. Este tema está ligado a las páginas 0001-0002 y 0019d (bloque del producto escalar). No se ha hecho resumen. Véase <code>a1_0020_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p021_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a35",
   "maila": 1,
   "izenburua": "Endomorfismo adjunto y endomorfismos autoadjuntos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En un espacio euclídeo se define el <strong>adjunto</strong> <math display=\"inline\"><msup><mi>f</mi><mo>*</mo></msup></math> de un endomorfismo; en una base ortonormal su matriz es la transpuesta. Endomorfismos especiales (autoadjuntos, isometrías) y propiedades de las matrices simétricas reales."
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Endomorfismo adjunto",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mi>E</mi></math> un espacio vectorial euclídeo sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi><mo>=</mo><mi>n</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en la base <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Endomorfismo adjunto",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Existe un <strong>único</strong> <math display=\"inline\"><mrow><msup><mi>f</mi><mo>*</mo></msup><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tal que <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msup><mi>f</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Matriz:</strong> como <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi><mspace width=\"0.222em\"></mspace><mi>y</mi></mrow></math>; y si <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msup><mi>f</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><mi>G</mi><mi>B</mi><mspace width=\"0.222em\"></mspace><mi>y</mi></mrow></math>. Igualando <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi><mo>=</mo><mi>G</mi><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>G</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> alderanzgarria da, heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><msup><mi>G</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En una base <strong>ortonormal</strong> (<math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>): <math display=\"inline\"><mrow><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>T</mi></msup></mrow></math>."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Endomorfismos especiales",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Autoadjuntos e isometrías",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "I) <strong>Autoadjuntos</strong> (simétricos): <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mi>f</mi><mo>*</mo></msup></mrow></math>.",
        "II) <strong>Isometrías</strong> (ortogonales): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. En base ortonormal: <math display=\"inline\"><mrow><msup><mi>x</mi><mi>T</mi></msup><mi>I</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><msup><mi>A</mi><mi>T</mi></msup><mi>I</mi><mi>A</mi><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>⇒</mo><mi>I</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup><mi>A</mi></mrow></math> (matriz ortogonal)."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En una base ortonormal (<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
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
   "izenburua": "Propiedades de la matriz simétrica real",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Matriz simétrica real",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>f</mi></math> es autoadjunto (matriz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup></mrow></math> real):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>Todas las raíces</strong> del polinomio característico son reales (autovalores).",
        "Dimensión del subespacio propio = multiplicidad: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>i</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (invariancia del complemento).",
        "Si <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≠</mo><msub><mi>λ</mi><mi>j</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>∈</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo>∈</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (los subespacios propios son <strong>ortogonales</strong>)."
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
       "html": "NEWTON, 13/2/2013 (páginas 40-41). La identidad de adjunción es <strong>correcta</strong>: <math display=\"inline\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi><mo>=</mo><mi>G</mi><mi>B</mi></mrow></math> y, por la no degeneración de <math display=\"inline\"><mi>G</mi></math> (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">heina</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi></mrow></math>), <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>G</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>A</mi><mi>T</mi></msup><mi>G</mi></mrow></math>; para una isometría en base ortonormal <math display=\"inline\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mi>A</mi><mo>=</mo><mi>I</mi></mrow></math>; la ortogonalidad de los subespacios propios de autovalores distintos se cumple para los autoadjuntos. La base ortonormalizada de la línea superior es la de la página anterior (0020: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>1</mn><mo>−</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math></span>). No se ha hecho resumen. Véase <code>a1_0021_0040_algebra_lineal_avanzada.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p022_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Teorema espectral: diagonalización ortogonal de endomorfismos autoadjuntos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Todo endomorfismo autoadjunto es diagonalizable y admite una base ortonormal de autovectores (teorema espectral). Un ejemplo completo en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Teorema espectral",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo endomorfismo <strong>autoadjunto</strong> es diagonalizable y, además, se puede obtener una <strong>base ortonormal de autovectores</strong>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Diagonalización ortogonal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, en la base ortonormal <math display=\"inline\"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Como <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup></mrow></math> y <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> es ortonormal, <math display=\"inline\"><mi>f</mi></math> es <strong>autoadjunto</strong>: es diagonalizable y tiene una base ortonormal de autovectores."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Polinomio característico:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Autovalores: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇔</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Base: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Base: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por tanto <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math></span>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base ortogonal de autovectores"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (autovalores distintos → ortogonales), pero <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> (dentro de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Por Gram–Schmidt sobre <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><mi>k</mi><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>k</mi><mo>⇒</mo><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (La normalización, en la página siguiente.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 13/2/2013 (páginas 42-43). Todo es <strong>correcto</strong>: polinomio característico <math display=\"inline\"><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, autoespacios bien calculados (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) y el <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> de Gram–Schmidt (<math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Los autovectores de autovalores distintos ya son ortogonales; solo hay que ortogonalizar los dos que están dentro de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La diagonalización se normaliza en la página siguiente. No se ha hecho resumen. Véase <code>a1_0022_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p023_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Base ortonormal de autovectores e isometrías",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cierre del ejemplo anterior (base ortonormal de autovectores, <math display=\"inline\"><mi>P</mi></math> matriz ortogonal) e inicio de las isometrías: definición, ejemplo <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> y composición."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base ortonormal de autovectores"
    },
    {
     "mota": "testua",
     "html": "Normalizando el ortogonal <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>B</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow><msqrt><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mfrac><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><msqrt><mn>3</mn></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La matriz de paso es ortogonal (<math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>2</mn></msqrt><msqrt><mn>3</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><mn>1</mn></mrow><msqrt><mn>2</mn></msqrt></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msub><mi>B</mi><msup><mn>2</mn><mo>″</mo></msup></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Isometrías"
    },
    {
     "mota": "testua",
     "html": "Los espacios euclídeos <strong>isométricos se identifican</strong>. Una isometría conserva la longitud (y el producto escalar, el ángulo)."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Isometría",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> es una <strong>isometría</strong> si conserva el producto escalar: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>V</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Isometría R² → R³",
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
       "html": "Desarrollando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup></mrow></math>: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> (los términos <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> se anulan, y el coeficiente de <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> da <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn></mrow></math>.) Por tanto <math display=\"inline\"><mi>f</mi></math> es una <strong>isometría</strong> (conserva la norma)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Composición:</strong> la composición de dos isometrías es una isometría. Si <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>g</mi><mo>:</mo><msub><mi>V</mi><mn>2</mn></msub><mo>→</mo><msub><mi>V</mi><mn>3</mn></msub></mrow></math> son isometrías, <math display=\"inline\"><mrow><mi>g</mi><mo>∘</mo><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>3</mn></msub></mrow></math> también es una isometría."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 13-14/2/2013 (páginas 44-45). La normalización y el <math display=\"inline\"><mi>P</mi></math> ortogonal son <strong>correctos</strong>. El ejemplo <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> <strong>es una isometría</strong>: se ha comprobado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (se anulan los términos <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math>: <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn></mrow></math>); la tercera componente (<math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>/</mi><mn>2</mn><mspace width=\"0.222em\"></mspace><mi>y</mi></mrow></math>) es correcta (el informe a1_0023 la marcó como dudosa, pero la foto y el cálculo lo confirman). El carácter de isometría de la composición es correcto. No se ha hecho resumen. Véase <code>a1_0023_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p024_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a41",
   "maila": 1,
   "izenburua": "Isometrías: inversa, criterio de la base ortonormal y matriz ortogonal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La inversa de una isometría es una isometría; basta comprobar una isometría <strong>en una base ortonormal</strong>; y en una base ortonormal la matriz de una isometría es <strong>ortogonal</strong>. Ejemplo: la rotación de <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "La inversa es una isometría",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> es una isometría <strong>suprayectiva</strong>, si <math display=\"inline\"><mrow><mo>∀</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>∈</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> son <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> tales que <math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, <strong>la inversa de una isometría es una isometría</strong>."
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Criterio de la base ortonormal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para comprobar que una aplicación lineal es una isometría, basta <strong>estudiar una base</strong>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Proposición 28",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mi>f</mi></math> <strong>es una isometría si y solo si</strong> transforma una base ortonormal en una base ortonormal. Si es una isometría: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>b</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Corolario 30",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La <strong>matriz asociada de una aplicación isométrica en una base ortonormal es ortogonal</strong> (<math display=\"inline\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mi>A</mi><mo>=</mo><mi>I</mi></mrow></math>)."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Ejemplo: rotación en <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Rotación en R³",
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
       "html": "Las columnas son <strong>ortonormales</strong>: <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>4</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es ortogonal a las demás. Por tanto <math display=\"inline\"><mi>A</mi></math> es ortogonal y <math display=\"inline\"><mi>f</mi></math> es una <strong>isometría</strong> (rotación de <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> alrededor del eje <math display=\"inline\"><mi>z</mi></math>; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SO</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 14/2/2013 (páginas 46-47). Todo es <strong>correcto</strong>: la inversa de una isometría suprayectiva es una isometría; la proposición 28 (isometría ⟺ transforma una base ortonormal en ortonormal) y el corolario 30 (matriz ortogonal) son estándar. Las columnas de la matriz de rotación son ortonormales (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, rotación de <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> alrededor del eje <math display=\"inline\"><mi>z</mi></math>). Las anotaciones &quot;<math display=\"inline\"><mrow><mi>p</mi><mo>⇔</mo><mi>q</mi></mrow></math>&quot; de la página derecha son notas de lógica. No se ha hecho resumen. Véase <code>a1_0024_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p025_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Grupos de isometrías y cambio ortogonal entre bases ortonormales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos espacios euclídeos de la misma dimensión son siempre isométricos (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> es único salvo equivalencia isométrica). Grupos de isometrías (<math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) y la matriz de paso entre bases ortonormales es ortogonal."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espacios de la misma dimensión y grupos"
    },
    {
     "mota": "testua",
     "html": "Si <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>V</mi><mn>2</mn></msub></mrow></math></span> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>f</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> son bases ortonormales, la aplicación lineal <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≔</mo><msub><mover><mi>f</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math> (<math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math>) <strong>es una isometría</strong>: <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>i</mi></msup><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>i</mi></msup><msub><mover><mi>f</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, <strong>solo hay un espacio euclídeo de dimensión 3: <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math></strong>."
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
     "testua": "Paso entre bases ortonormales"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Matriz de paso ortogonal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> son bases ortonormales de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"inline\"><mi>P</mi></math> la matriz de paso entre ellas, entonces <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mi>T</mi></msup><mo>=</mo><mi>I</mi></mrow></math> (<math display=\"inline\"><mi>P</mi></math> es <strong>ortogonal</strong>)."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> son ortonormales, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math>. Coordenadas <math display=\"inline\"><mi>Q</mi></math> por la matriz de paso: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mo>=</mo><mi>Q</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup></mrow></math>. Entonces <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>I</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>I</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> y sustituyendo: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><msub><mi>I</mi><mi>n</mi></msub><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><msub><mi>I</mi><mi>n</mi></msub><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mo>,</mo></mrow></math> es decir <math display=\"inline\"><mrow><msup><mi>Q</mi><mi>T</mi></msup><mi>Q</mi><mo>=</mo><mi>I</mi></mrow></math>. Por tanto la matriz de paso es <strong>ortogonal</strong>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 14/2/2013 (páginas 48-49). Todo es <strong>correcto</strong>: dos espacios euclídeos de la misma dimensión son isométricos (enviando una base ortonormal a una base ortonormal), por lo que <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> es único; la correspondencia de grupos de isometrías (<math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) y la ortogonalidad del paso entre bases ortonormales (<math display=\"inline\"><mrow><msup><mi>Q</mi><mi>T</mi></msup><mi>Q</mi><mo>=</mo><mi>I</mi></mrow></math>). El original usa <math display=\"inline\"><mi>P</mi></math> (en el enunciado) y <math display=\"inline\"><mi>Q</mi></math> (en la demostración); ambas son la misma matriz de paso o inversas una de otra (no fija la convención), pero la conclusión es correcta. No se ha hecho resumen. Véase <code>a1_0025_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p026_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a46",
   "maila": 1,
   "izenburua": "Signatura de una forma bilineal mediante un endomorfismo autoadjunto",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La signatura de una forma bilineal simétrica la dan los signos de los autovalores de su matriz. Relación: diagonalizando el <strong>endomorfismo autoadjunto auxiliar</strong> <math display=\"inline\"><mi>h</mi></math> con la misma matriz, se obtiene <math display=\"inline\"><mrow><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math>. Ejemplo en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>."
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Dos objetos, la misma matriz",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>E</mi></math> espacio euclídeo, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> base ortonormal, <math display=\"inline\"><mi>f</mi></math> forma bilineal simétrica, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>). Se define el <strong>endomorfismo auxiliar</strong> <math display=\"inline\"><mi>h</mi></math> tal que <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mi>f</mi></math> simétrica <math display=\"inline\"><mrow><mo>⇒</mo><mi>A</mi></mrow></math> simétrica;",
      "<math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> ortonormal <math display=\"inline\"><mrow><mo>⇒</mo><mi>h</mi></mrow></math> es <strong>autoadjunto</strong>."
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto existe una <strong>base ortonormal de autovectores</strong> <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>, donde <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi></mrow></math></span> (<math display=\"inline\"><mi>P</mi></math> ortogonal)."
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Signatura",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><msub><mi>C</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, en <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>y</mi><mi>n</mi><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
     "html": "es decir, el número de autovalores positivos, negativos y nulos de <math display=\"inline\"><mi>A</mi></math>."
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Ejemplo (planteamiento)",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Signatura a partir de los autovalores de A",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "¿Es diagonalizable? (Sí: es autoadjunto.)",
        "Si <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>f</mi></math> forma bilineal simétrica en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>), evaluar la signatura de <math display=\"inline\"><mi>f</mi></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math> ortonormal respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>1</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> (<math display=\"inline\"><mrow><mi>h</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), <math display=\"inline\"><mi>h</mi></math> es <strong>autoadjunto</strong> respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mi>A</mi></math> es diagonalizable. (Los autovalores y la signatura, en la página siguiente.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 14/2/2013 (páginas 50-51). El procedimiento es <strong>correcto</strong>: la matriz simétrica real define un endomorfismo autoadjunto, se diagonaliza ortogonalmente y da <math display=\"inline\"><mrow><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math>; la signatura se obtiene después <strong>contando los signos</strong> de los autovalores de la diagonal (no con la mera comprobación de la diagonalización). Se distinguen <math display=\"inline\"><mi>f</mi></math> (forma bilineal) y <math display=\"inline\"><mi>h</mi></math> (endomorfismo autoadjunto auxiliar), aunque tengan la misma matriz (<math display=\"inline\"><mi>A</mi></math>). La resolución del ejemplo (autovalores de <math display=\"inline\"><mi>A</mi></math> <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn></mrow></math>; signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) continúa en la página siguiente. No se ha hecho resumen. Véase <code>a1_0026_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p027_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Ejemplo de signatura, descomposición ortogonal y complemento ortogonal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Resolución del ejemplo anterior: autovalores de <math display=\"inline\"><mi>A</mi></math> (<math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn></mrow></math>), <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <strong>descomposición ortogonal</strong> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> en autoespacios, y definición del <strong>complemento ortogonal</strong> (<math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autovalores y signatura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>3</mn></msup><mo>+</mo><mn>18</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>99</mn><mi>λ</mi><mo>+</mo><mn>162</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Buscando las raíces entre los divisores de <math display=\"inline\"><mn>162</mn></math> (<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>8</mn></mrow></math>, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>3</mn></msub><mo>=</mo><mn>9</mn></mrow></math> (<math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Existe una base ortonormal <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math> de autovectores, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mn>2</mn></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi></mrow></math>."
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
     "testua": "Descomposición ortogonal y complemento ortogonal"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⨁</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⨁</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">ortogonala, ez soilik osagarria</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Complemento ortogonal (S⊥)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Complemento ortogonal</strong> del subespacio <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> Se cumple <math display=\"inline\"><mrow><mi>S</mi><mo>⨁</mo><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mi>E</mi></mrow></math>, y <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi>S</mi><mo>⟂</mo></msup><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/4a984e5bbe27f498.svg",
     "zabalera": 224
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 14/2/2013 (páginas 52-53). Todo es <strong>correcto</strong>: polinomio característico <math display=\"inline\"><mrow><mi>−</mi><msup><mi>λ</mi><mn>3</mn></msup><mo>+</mo><mn>18</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>99</mn><mi>λ</mi><mo>+</mo><mn>162</mn></mrow></math> (traza <math display=\"inline\"><mrow><mo>=</mo><mn>18</mn><mo>=</mo><mn>6</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>7</mn></mrow></math>, determinante <math display=\"inline\"><mrow><mo>=</mo><mn>162</mn><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>6</mn><mo>⋅</mo><mn>9</mn></mrow></math>), raíces <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn></mrow></math> (por tanteo con los divisores de <math display=\"inline\"><mn>162</mn></math>), todas positivas, luego <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Sig</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (definida positiva). La descomposición de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> en autoespacios es <strong>ortogonal</strong> (porque <math display=\"inline\"><mi>A</mi></math> es simétrica), no solo suplementaria. El autor escribe &quot;OSAGARRIA&quot; (en euskera) para nombrar el complemento ortogonal. No se ha hecho resumen. Véase <code>a1_0027_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p028_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Complemento ortogonal en polinomios; proyección y distancia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ejemplo de complemento ortogonal en <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con el producto escalar integral, y <strong>proyección ortogonal</strong> sobre un subespacio y <strong>distancia euclídea</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Complemento ortogonal en <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "S⊥ P₂(ℝ)-n",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>:</mo><msub><mi>a</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>, producto escalar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, y subespacio <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo>∈</mo><msub><mi>P</mi><mn>2</mn></msub><mo>:</mo><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Encontrar <math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Base de <math display=\"inline\"><mi>S</mi></math>:</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math></span>, luego <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: base <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Condiciones de <math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math></strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>), anulándose las impares en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>3</mn><msub><mi>a</mi><mn>0</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mn>3</mn><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Resolviendo: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn></mrow></math>, luego <math display=\"block\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>3</mn><mo>+</mo><mn>4</mn><mi>x</mi><mo>−</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proyección ortogonal y distancia"
    },
    {
     "mota": "testua",
     "html": "<strong>Distancia euclídea</strong> entre dos puntos (en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>):"
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
     "html": "<math display=\"inline\"><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></math> = <strong>proyección ortogonal</strong> de <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></math> sobre <math display=\"inline\"><mi>S</mi></math>; entonces <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math> y la <strong>distancia al subespacio</strong>:"
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
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 14/2/2013 (páginas 54-55). Todo es <strong>correcto</strong>: la base de <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> (de <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math>), y las dos condiciones de <math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math> (<math display=\"inline\"><mrow><mn>3</mn><msub><mi>a</mi><mn>0</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><mn>3</mn><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) con las integrales impares anuladas. El original plantea las condiciones pero <strong>no completa <math display=\"inline\"><msup><mi>S</mi><mo>⟂</mo></msup></math></strong>; aquí se ha resuelto (con cita): <math display=\"inline\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>3</mn><mo>+</mo><mn>4</mn><mi>x</mi><mo>−</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn></mrow></math>). Las fórmulas de la proyección ortogonal y de la distancia (<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi>S</mi><mo>⟂</mo></msup></mrow></math>) son estándar. No se ha hecho resumen. Véase <code>a1_0028_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p029_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Aplicación lineal a partir del núcleo y de la imagen; núcleo e imagen en P₂",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Expresión explícita de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> (dados el núcleo y la imagen), y cálculo del núcleo y la imagen de una <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resolver <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Vector genérico en la base <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math></span>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Imágenes: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por linealidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>+</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>ε</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando las coordenadas: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>μ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>+</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mi>ε</mi><mo>=</mo><mi>y</mi><mo>+</mo><mi>ε</mi><mo>⇒</mo><mi>ε</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi></mrow></math>. Por tanto:"
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
     "testua": "Ejercicio 6: núcleo e imagen en <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "f: R⁴ → P₂(ℝ)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Calcular <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es decir <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <strong>(Se completa en la página siguiente.)</strong>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "LANDETA, 18/2/2013 (páginas 56-57). La resolución de <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> es <strong>correcta</strong> y cierra el ejercicio iniciado en la página 0017: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo>+</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (comprobado: <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>t</mi><mo>+</mo><mi>z</mi></mrow></math>); <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> (los generadores del núcleo dados, linealmente independientes, que <math display=\"inline\"><mi>f</mi></math> envía a <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>). En el ejercicio 6 <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: las condiciones del núcleo <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; continúa en la página siguiente. No se ha hecho resumen. Véase <code>a1_0029_algebra_primero_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p030_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a53",
   "maila": 1,
   "izenburua": "Observaciones sobre isometrías, grupos ortogonales y clasificación de matrices <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Algunas observaciones sobre isometrías (en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, valor absoluto), estructura de los grupos ortogonal y especial (<math display=\"inline\"><mi>O</mi></math>, <math display=\"inline\"><mtext mathvariant=\"normal\">SO</mtext></math>, <math display=\"inline\"><mtext mathvariant=\"normal\">SL</mtext></math>, <math display=\"inline\"><mtext mathvariant=\"normal\">GL</mtext></math>), y clasificación de las matrices ortogonales del plano: rotaciones y simetrías."
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Observaciones sobre isometrías",
   "blokeak": [
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "(ii) En el espacio euclídeo <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, las únicas isometrías son <strong>la identidad y su opuesta</strong>.",
      "(iii) En <math display=\"inline\"><mrow><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> el <strong>valor absoluto es una norma, pero no una isometría</strong>: conserva la norma (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>), pero no es lineal y no conserva el producto escalar: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≠</mo><mi>x</mi><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>.",
      "(iv) <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, es una isometría (comprobado en la página 0023)."
     ]
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Grupos ortogonales y especiales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Rotaciones:</strong> subgrupo (normal) de <math display=\"inline\"><mrow><msup><mtext mathvariant=\"normal\">GL</mtext><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, formado por las matrices reales de orden <math display=\"inline\"><mi>n</mi></math> con <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>: el <strong>grupo lineal especial</strong> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">SL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊇</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊇</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SO</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Una base ortonormal da las correspondencias de grupos:"
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
   "izenburua": "Clasificación de las matrices ortogonales <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Rotaciones y simetrías",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Toda matriz ortogonal de orden <math display=\"inline\"><mn>2</mn></math> es de uno de estos dos tipos: <math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">det</mi><mo>=</mo><mn>1</mn><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> errotazioa</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">det</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> islapena</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 18/2/2013 (páginas 58-59). Todo es <strong>correcto</strong>: las isometrías de <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> (<math display=\"inline\"><mrow><mi>±</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> id</mtext></mrow></mrow></math>), el valor absoluto (norma sí, isometría no —no es lineal, no conserva el producto—), <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> isometría (0023), la estructura de grupo (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">SO </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⊆</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SL </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⊆</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo>+</mo></msup><mo>⊆</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow></mrow></math>; <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">SO </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⊆</mo><mi>O</mi></mrow></math>) y las correspondencias mediante la base ortonormal. Clasificación de las matrices ortogonales <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>, rotación), <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, simetría). El original lleva además una nota personal ajena al tema (en rojo, ilegible); no es contenido matemático y no se ha recogido aquí. No se ha hecho resumen. Véase <code>a1_0030_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p031_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Autovalores de matrices ortogonales y simétricas; Sylvester; unicidad del adjunto",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los autovalores de una matriz ortogonal cumplen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math>; los autovalores de una matriz simétrica real son <strong>reales</strong>. Criterio de Sylvester y <strong>unicidad</strong> del endomorfismo adjunto."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autovalores de la matriz ortogonal"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>A</mi><mo>∈</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es ortogonal, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">det</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>, y cualquier raíz del polinomio característico <math display=\"inline\"><mi>λ</mi></math> cumple <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math>. <strong>Los únicos autovalores reales son <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mn>1</mn></math></strong> (los demás, complejos, <math display=\"inline\"><mrow><mi>A</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los autovalores de una matriz simétrica real son reales"
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
       "html": "Las raíces del polinomio característico de una matriz real <strong>simétrica</strong> son <strong>reales</strong>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mi>λ</mi></math> autovalor, <math display=\"inline\"><mrow><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></mrow></math>). Tomando la transpuesta conjugada (<math display=\"inline\"><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup></math>): <math display=\"block\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>λ</mi><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math> Por otro lado, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup></mrow></math>, y como <math display=\"inline\"><mi>A</mi></math> es real y simétrica (<math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup></mrow></math>): <math display=\"block\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.222em\"></mspace><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mi>λ</mi><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.222em\"></mspace><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math>, y <math display=\"block\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>⋯</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> (<math display=\"inline\"><mrow><mi>z</mi><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></math>). Simplificando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mover><mi>λ</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, es decir <math display=\"inline\"><mrow><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Criterio de Sylvester"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Criterio de Sylvester",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una matriz cuadrada real es la <strong>matriz de un producto escalar</strong> si es <strong>simétrica</strong> y todos sus <strong>menores principales son positivos</strong> (es decir, <strong>definida positiva</strong>, no degenerada, aplicación bilineal)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Unicidad del endomorfismo adjunto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>V</mi></math> espacio euclídeo, <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> endomorfismo. La relación define un <strong>único</strong> endomorfismo <math display=\"inline\"><mrow><msup><mi>f</mi><mo>*</mo></msup><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> tal que <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>f</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>V</mi></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Unicidad:</strong> si <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>V</mi></mrow></math> ambos cumplen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>*</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>), restando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></mrow></math>. Como el producto escalar es no degenerado, <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, es decir <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math>. <strong>(En esta página se interrumpe el último paso.)</strong>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 19/2/2013 (páginas 60-61). Las demostraciones son <strong>correctas</strong>: autovalores reales de la matriz simétrica real (pasando a <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℂ</mi><mi>n</mi></msup></math>, usando la forma hermítica, <math display=\"inline\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo>∑</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>x</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>); el criterio clásico de Sylvester; y la unicidad del adjunto (<math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math> ortogonal a todos → <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover></mrow></math>). ⚠ <strong>Cita:</strong> el original escribe &quot;las únicas raíces reales <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math> o <math display=\"inline\"><mn>1</mn></math>&quot;, pero <math display=\"inline\"><mn>0</mn></math> es imposible para una matriz ortogonal (siempre es invertible); las únicas reales son <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mn>1</mn></math>, corregido aquí. El último paso de la unicidad se interrumpe en esta página. No se ha hecho resumen. Véase <code>a1_0031_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p032_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Existencia del adjunto",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La <strong>existencia</strong> del endomorfismo adjunto (complemento de la unicidad), y el inicio de la <strong>geometría afín</strong>: puntos y vectores de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, y definición de <strong>subespacio afín</strong> (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Existencia del adjunto"
    },
    {
     "mota": "testua",
     "html": "De la unicidad anterior: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>V</mi><mo>⇒</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>−</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> (el único vector perpendicular a todos es <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>; no degeneración)."
    },
    {
     "mota": "testua",
     "html": "<strong>Existencia:</strong> en una base ortonormal (<math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>), siendo <math display=\"inline\"><mrow><mi>X</mi><mo>,</mo><mi>Y</mi><mo>,</mo><mi>Z</mi></mrow></math> las matrices columna de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover></mrow></math>. La condición <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></mrow></math>, en forma matricial (<math display=\"inline\"><mi>B</mi></math> = matriz de <math display=\"inline\"><mi>f</mi></math> en la base ortonormal):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>Z</mi><mi>T</mi></msup><mi>Y</mi><mo>=</mo><msup><mi>X</mi><mi>T</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mi>Y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>Y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>Z</mi><mi>T</mi></msup><mo>=</mo><msup><mi>X</mi><mi>T</mi></msup><mi>B</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>Z</mi><mo>=</mo><msup><mi>B</mi><mi>T</mi></msup><mi>X</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><msup><mi>f</mi><mo>*</mo></msup></math> <strong>existe</strong>, y <math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>B</mi><mi>T</mi></msup></mrow></math> en base ortonormal."
    }
   ]
  },
  {
   "id": "a59",
   "maila": 1,
   "izenburua": "Ejercicio completo: un producto escalar, base ortonormal e isometría",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Con un producto escalar concreto en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>: base ortonormal (Gram–Schmidt), comprobación de la isometría, y que la matriz en una base no ortonormal <strong>no es ortogonal</strong> (sin paradoja)."
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Producto escalar en R³",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><msub><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Encontrar una base ortonormal <math display=\"inline\"><mi>B</mi></math> respecto de este producto.",
        "¿Es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> una isometría respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>?",
        "Encontrar la matriz de <math display=\"inline\"><mi>g</mi></math> en <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> y en <math display=\"inline\"><mi>B</mi></math>.",
        "¿Es <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ortogonal? ¿Contradice esto la teoría?"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "1) Base ortonormal (Gram–Schmidt)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>+</mo><mi>A</mi><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mi>B</mi><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>. Imponiendo la ortogonalidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>A</mi><mo>⋅</mo><mn>1</mn><mo>+</mo><mi>B</mi><mo>⋅</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mo>=</mo><mn>0</mn><mo>+</mo><mi>A</mi><mo>⋅</mo><mn>0</mn><mo>+</mo><mi>B</mi><mo>⋅</mo><mn>1</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Normas: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>, y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math></span>. <strong>Base ortonormal</strong> <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "2) ¿Es <math display=\"inline\"><mi>g</mi></math> una isometría?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>g</mi></math> es una isometría de <math display=\"inline\"><mrow><mo>⇔</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math>. Calculando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en la forma cuadrática (<math display=\"inline\"><mrow><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>y</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>y</mi><mn>1</mn></msub><msub><mi>y</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>y</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
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
   "izenburua": "3)–4) Matriz y ortogonalidad",
   "blokeak": [
    {
     "mota": "abisua",
     "titulua": "Cuidado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La base canónica <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> <strong>no es ortonormal</strong> respecto de este <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><mo>≠</mo><mi>I</mi></mrow></math>). Por tanto, que <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>no sea ortogonal no contradice la teoría</strong>: el criterio de matriz ortogonal solo es válido en <strong>bases ortonormales</strong>. En la base ortonormal <math display=\"inline\"><mi>B</mi></math>, en cambio, la matriz de <math display=\"inline\"><mi>g</mi></math> sí debe ser ortogonal (porque es una isometría)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, &nbsp;20/3/2013 (páginas 72-73). El ejercicio es <strong>correcto</strong> por completo: por Gram–Schmidt <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, base ortonormal; y <math display=\"inline\"><mi>g</mi></math> <strong>es una isometría</strong> (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math></span>, comprobado). Punto clave: <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> no es ortonormal respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, por lo que <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no ortogonal no produce paradoja (el criterio solo vale en bases ortonormales). ⚠ <strong>Cita:</strong> en la fórmula de la línea del enunciado el original escribe <math display=\"inline\"><mrow><mi>−</mi><msub><mi>x</mi><mn>3</mn></msub><msub><mi>y</mi><mn>3</mn></msub></mrow></math>, que debe ser <math display=\"inline\"><mrow><mi>−</mi><msub><mi>x</mi><mn>1</mn></msub><msub><mi>y</mi><mn>3</mn></msub></mrow></math> (entrada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la matriz simétrica <math display=\"inline\"><mi>A</mi></math>); la referencia es la matriz. No se ha hecho resumen. Véase <code>a1_0037_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p038_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "Matriz de g en ambas bases; matriz ortogonal ≠ isometría (contraejemplo)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cierre del ejercicio anterior (matriz de <math display=\"inline\"><mi>g</mi></math> en <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> y en la ortonormal <math display=\"inline\"><mi>B</mi></math>), y un contraejemplo ilustrativo: que la matriz sea ortogonal <strong>no</strong> garantiza la isometría si la base no es ortonormal."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz de <math display=\"inline\"><mi>g</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (por convenio de filas). <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span> en la base ortonormal:"
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
     "html": "<math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en cambio, <strong>no es ortogonal</strong> (<math display=\"inline\"><mrow><mi>Q</mi><msup><mi>Q</mi><mi>T</mi></msup><mo>≠</mo><mi>I</mi></mrow></math>: primera fila <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "abisua",
     "titulua": "Cuidado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Que <math display=\"inline\"><mi>Q</mi></math> no sea ortogonal <strong>no contradice la teoría</strong>: la base canónica no tiene por qué ser ortonormal. En la base ortonormal <math display=\"inline\"><mi>B</mi></math>, como <math display=\"inline\"><mi>g</mi></math> es una isometría, la matriz es ortogonal (<math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> permutación)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Contraejemplo: matriz ortogonal pero NO isometría"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "f con matriz ortogonal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El mismo producto escalar. <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (ortogonal). ¿Es <math display=\"inline\"><mi>f</mi></math> una isometría respecto de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>?"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> no es ortonormal (<math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>), por lo que que <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sea ortogonal <strong>no implica</strong> isometría. Hay que comprobar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Como <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>3</mn></msub><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>3</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math> <strong>¡Distintos!</strong> Por tanto <math display=\"inline\"><mi>f</mi></math> <strong>no es una isometría</strong> (aunque <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sea ortogonal)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 20/2/2013 (páginas 74-75). Todo es <strong>correcto</strong>: la matriz de <math display=\"inline\"><mi>g</mi></math> en la base ortonormal <math display=\"inline\"><mi>B</mi></math> es una permutación (ortogonal), en <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> <math display=\"inline\"><mi>Q</mi></math> es no ortogonal (sin contradicción, porque <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> no es ortonormal). El contraejemplo es <strong>ilustrativo</strong>: aunque <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es ortogonal, <math display=\"inline\"><mi>f</mi></math> <strong>no es una isometría</strong>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math> frente a <math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>, comprobado). Ironía: <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son <strong>la misma</strong> matriz (permutación ortogonal), pero <math display=\"inline\"><mi>g</mi></math> es una isometría y <math display=\"inline\"><mi>f</mi></math> no —la diferencia es la ortonormalidad de la base. No se ha hecho resumen. Véase <code>a1_0038_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p039_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a65",
   "maila": 2,
   "izenburua": "Producto escalar a partir de una base ortonormal; isometría y autoadjunto",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sabiendo que una base es <strong>ortonormal</strong> (producto escalar desconocido), se recupera su matriz en <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> (a partir de <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math>), y se estudia si <math display=\"inline\"><mi>f</mi></math> es isometría/autoadjunto, con la matriz <math display=\"inline\"><mi>B</mi></math> en la base ortonormal."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enunciado"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejercicio",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Producto escalar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, respecto del cual <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span> es una base <strong>ortonormal</strong>. <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, en <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> por columnas <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Encontrar <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "¿Es <math display=\"inline\"><mi>f</mi></math> una isometría? ¿Es autoadjunta?"
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1) Matriz del producto escalar"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>. Como <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi></mrow></math>, despejando la base canónica en función de <math display=\"inline\"><mi>B</mi></math>: <math display=\"block\"><mrow><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> (euclídeo, porque <math display=\"inline\"><mi>B</mi></math> es ortonormal):"
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
     "html": "(La matriz es simétrica y definida positiva: menores principales <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2) Isometría y autoadjunto"
    },
    {
     "mota": "testua",
     "html": "Criterios, siendo <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>B</mi></math> ortonormal): <math display=\"block\"><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> isometria </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><msup><mi>A</mi><mo>′</mo></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ortogonala</mtext></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> autoadjuntua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><msup><mi>A</mi><mo>′</mo></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> simetrikoa</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Calculando las coordenadas de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en <math display=\"inline\"><mi>B</mi></math>, se obtiene <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>:"
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
       "html": "<strong>¿Isometría?</strong> La segunda columna de <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math> es <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>, luego <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>; entonces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>0</mn><mo>≠</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math> (<math display=\"inline\"><mi>B</mi></math> ortonormal). Por tanto <math display=\"inline\"><mi>f</mi></math> <strong>no es una isometría</strong> (<math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math> no es ortogonal, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>¿Autoadjunta?</strong> <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>T</mi></msup></mrow></math> (simétrica), luego <math display=\"inline\"><mi>f</mi></math> <strong>es autoadjunta</strong>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 20/2/2013 (páginas 76-77). <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> está <strong>comprobada</strong> (los seis valores: productos euclídeos de <math display=\"inline\"><mrow><msub><mi>C</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, porque <math display=\"inline\"><mi>B</mi></math> es ortonormal); simétrica y definida positiva. Las conclusiones son <strong>correctas</strong>: <math display=\"inline\"><mi>f</mi></math> <strong>no es una isometría</strong> (la columna <math display=\"inline\"><mn>2</mn></math> de <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math> es <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>, luego <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, norma <math display=\"inline\"><mrow><mn>0</mn><mo>≠</mo><mn>1</mn></mrow></math>), y <math display=\"inline\"><mi>f</mi></math> <strong>es autoadjunta</strong> (<math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><msup><mi></mi><mi>T</mi></msup></mrow></math>). ⚠ <strong>Cita:</strong> el original, al calcular directamente <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>, tiene deslices entre términos (el informe obtuvo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a partir de las columnas <math display=\"inline\"><mi>A</mi></math>, no <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>); a partir de <math display=\"inline\"><mi>B</mi></math> en la base ortonormal, <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>, en cambio, sale limpiamente <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, de acuerdo con la conclusión del autor. No se ha hecho resumen. Véase <code>a1_0039_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p040_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "Base ortonormal de V(0); contracción y desigualdad de Bessel",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cierre del ejercicio anterior (base ortonormal de autovectores de <math display=\"inline\"><mi>f</mi></math>), y dos ejercicios teóricos: un endomorfismo autoadjunto cuyos autovalores son todos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math> es <strong>contractivo</strong>; y la <strong>desigualdad de Bessel</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base ortonormal de V(0)"
    },
    {
     "mota": "testua",
     "html": "Autovalores de <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msup><mi>A</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Base: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>⋅</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>). Normas (<math display=\"inline\"><mi>B</mi></math> ortonormal): <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn></mrow></math></span>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>1</mn></mrow></math>. <strong>Base ortonormal:</strong>"
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
     "testua": "Contracción (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Ejercicio teórico",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>E</mi></math> espacio euclídeo, <math display=\"inline\"><mi>f</mi></math> endomorfismo <strong>autoadjunto</strong>. Si todos los autovalores de <math display=\"inline\"><mi>f</mi></math> cumplen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>, entonces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>≤</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math> (<strong>contractivo</strong>)."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mi>f</mi></math> es autoadjunto, existe una base ortonormal <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> de autovectores. Si <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo>∑</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo>∑</mo><msub><mi>λ</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>. Como <math display=\"inline\"><mi>B</mi></math> es ortonormal (<math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><msubsup><mi>x</mi><mi>i</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mn>1</mn><mo>⇒</mo><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><mo>≤</mo><mn>1</mn><mo>⇒</mo><mo>∑</mo><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup><mo>≤</mo><mo>∑</mo><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math></span>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>≤</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math>. <math display=\"inline\"><mi>◼</mi></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Desigualdad de Bessel (enunciado)"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Desigualdad de Bessel",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>k</mi></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> es un conjunto <strong>ortonormal</strong> (no necesariamente una base) en el espacio euclídeo <math display=\"inline\"><mi>V</mi></math>, entonces <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>k</mi></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>≤</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>V</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "NEWTON, 20/2/2013 (páginas 78-79). El polinomio característico <math display=\"inline\"><mrow><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <strong>correcto</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> doble, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>). La demostración del ejercicio de contracción es <strong>completa y correcta</strong> (usando el teorema espectral, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>v</mi><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo>∑</mo><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo>∑</mo><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mi>i</mi><mn>2</mn></msubsup><mo>≤</mo><mn>1</mn></mrow></math> término a término). El segundo es la desigualdad de Bessel (clásica), solo el enunciado. ⚠ <strong>Cita:</strong> en la base de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> el original escribe <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, pero el cálculo de normas usa <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> (y concuerda con la condición <math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>3</mn><mo>′</mo></msubsup></mrow></math>); lo correcto es <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>, usado aquí. No se ha hecho resumen. Véase <code>a1_0040_algebra_lineal_avanzada_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p041_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Gram–Schmidt en R⁴ y diagonalización espectral",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos ejercicios: (1) algoritmo de Gram–Schmidt en una base de un hiperplano <math display=\"inline\"><mrow><mi>U</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>; (2) diagonalización espectral de una matriz simétrica (base ortonormal de autovectores)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 1: Gram–Schmidt en R⁴"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Base ortonormal de U",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con el producto escalar estándar de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, encontrar una base ortonormal del subespacio <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>:</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span> (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>)."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Gram–Schmidt:</strong> <math display=\"block\"><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><mfrac><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>⋅</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup></mrow><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>⋅</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup></mrow></mfrac><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn><mo>′</mo></msubsup><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>−</mo><mfrac><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></mfrac><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>4</mn><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math> Normalizando: <math display=\"block\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>,</mo><mfrac><mn>2</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>6</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>6</mn></mfrac><mo>,</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>6</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>β</mi><mi>U</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es una base ortonormal de <math display=\"inline\"><mi>U</mi></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 2: diagonalización espectral"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Base ortonormal de autovectores",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<strong>simétrica</strong>, singular). ¿Es posible encontrar una base ortonormal de vectores propios de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>?"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con el producto escalar estándar <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> es ortonormal, y <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup></mrow></math>; por tanto <math display=\"inline\"><mi>f</mi></math> es <strong>autoadjunto</strong> y <strong>existe</strong> una base ortonormal de vectores propios (teorema espectral)."
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>λ</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⇒</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac><mo>,</mo><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⇒</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⇒</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>,</mo><mfrac><mn>2</mn><msqrt><mn>6</mn></msqrt></mfrac><mo>,</mo><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es una base ortonormal de vectores propios (<math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⟂</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≠</mo><msub><mi>λ</mi><mi>j</mi></msub></mrow></math>)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "ALJEBRA 2.1, 2013/2/21 (páginas 80-81). ⚠ <strong>Etiqueta:</strong> a1_0041 está etiquetado como &quot;geometria afina&quot;, pero el contenido es de <strong>álgebra lineal general</strong> (Gram–Schmidt, teorema espectral), otro tema del mismo cuaderno. Los dos ejercicios son <strong>correctos</strong>: <math display=\"inline\"><mrow><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac></mrow></math> de Gram–Schmidt (comprobado); y <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, cumpliendo los vectores propios <math display=\"inline\"><mrow><mi>A</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> (comprobados: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo></mrow></math> misma, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). La tercera componente de <math display=\"inline\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math> está escrita de forma poco clara en el original; la normalización correcta es <math display=\"inline\"><mrow><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mn>2</mn><mi>/</mi><msqrt><mn>3</mn></msqrt></mrow></math>). La autora tiene además una nota personal en castellano (que el seminario se le hace difícil); no es contenido matemático. No se ha hecho resumen. Véase <code>a1_0041_geometria_afina_euskera_claude.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p042_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación matemática (SymPy); Sylvester, isometría y Gram-Schmidt",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Sylvester, isometría y Gram-Schmidt: de las formas bilineales al producto escalar",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Esta hoja de examen hace dos cosas: distingue mediante el criterio de Sylvester cuándo una forma bilineal simétrica es un <strong>producto escalar</strong> y, después, con un producto escalar concreto, construye una <strong>isometría</strong> y una <strong>base ortonormal</strong> respecto de <math display=\"inline\"><mi>f</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La misma forma, ahora como forma bilineal: criterio de Sylvester"
    },
    {
     "mota": "testua",
     "html": "Consideremos la matriz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, esta vez asociada a una forma bilineal simétrica <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> (en la hoja anterior se estudió la misma matriz como endomorfismo). Dos preguntas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>¿Base ortogonal (respecto de <math display=\"inline\"><mi>f</mi></math>)?</strong> Como <math display=\"inline\"><mi>A</mi></math> es simétrica, <math display=\"inline\"><mi>f</mi></math> es una forma bilineal simétrica; por el teorema de las formas simétricas, <strong>siempre existe</strong> una base ortogonal. <strong>Sí.</strong>",
      "<strong>¿Base ortonormal (respecto de <math display=\"inline\"><mi>f</mi></math>)?</strong> Para ello <math display=\"inline\"><mi>f</mi></math> debe ser un <strong>producto escalar</strong> (definida positiva). Se comprueba con el criterio de Sylvester: todos los menores principales superiores izquierdos deben ser positivos."
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
     "html": "Como <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (no positivo), <math display=\"inline\"><mi>f</mi></math> <strong>no es definida positiva</strong>, luego <strong>no es un producto escalar</strong> y <strong>no existe una base ortonormal para <math display=\"inline\"><mi>f</mi></math></strong>."
    },
    {
     "mota": "oharra",
     "titulua": "Endomorfismo frente a forma",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un buen contraste: la <strong>misma</strong> matriz como endomorfismo se diagonaliza de forma ortonormal (base ortonormal de vectores propios, teorema espectral), pero como forma bilineal es <strong>degenerada</strong> (<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>) y no admite base ortonormal."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Un nuevo producto escalar: isometría y base ortonormal"
    },
    {
     "mota": "testua",
     "html": "Sea ahora <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> la forma bilineal con la matriz simétrica asociada:"
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
     "testua": "<math display=\"inline\"><mi>f</mi></math> es un producto escalar (Sylvester)"
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
     "html": "Los tres determinantes principales son positivos, luego <math display=\"inline\"><mi>A</mi></math> es definida positiva y <math display=\"inline\"><mi>f</mi></math> es un <strong>producto escalar</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mi>h</mi></math> es una isometría"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la aplicación de matriz <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mi>h</mi></math> es una isometría respecto de <math display=\"inline\"><mi>f</mi></math> si se cumple siempre <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; con matrices, esto se escribe así:"
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
     "html": "La igualdad se confirma componente a componente (comprobado con SymPy), luego <math display=\"inline\"><mi>h</mi></math> <strong>conserva</strong> el producto escalar <math display=\"inline\"><mi>f</mi></math>: es una isometría."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Base ortonormal mediante Gram-Schmidt"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>e</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>e</mi><mn>2</mn></msub></math> ya son <math display=\"inline\"><mi>f</mi></math>-ortonormales, pues <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>2</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. Ortogonalizando <math display=\"inline\"><msub><mi>e</mi><mn>3</mn></msub></math> (nuevo vector <math display=\"inline\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math>):"
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
     "html": "Como <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math> ya está normalizado. Por tanto"
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
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> es una base ortonormal respecto de <math display=\"inline\"><mi>f</mi></math>. En esa base la matriz asociada a <math display=\"inline\"><mi>h</mi></math> es <strong>ortogonal</strong>, precisamente porque <math display=\"inline\"><mi>h</mi></math> es una isometría."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0042</code>, IMG_2026_07_28_02_16_46S, páginas 82-83; probablemente material universitario). Todos los cálculos <strong>comprobados con SymPy</strong>: <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> en la primera matriz (degenerada), <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>1</mn></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn></mrow></math> en la segunda, <math display=\"inline\"><mrow><msup><mi>H</mi><mi>T</mi></msup><mi>A</mi><mi>H</mi><mo>=</mo><mi>A</mi></mrow></math> exactamente, y <math display=\"inline\"><mrow><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de Gram-Schmidt (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>). En la hoja original aparece la nota personal «copio esto porque sí: no entiendo nada»; con todo, la definición de isometría aplicada —conservar el producto escalar— es <strong>correcta</strong>. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0042.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p043_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación matemática (SymPy); congruencia, ley del paralelogramo e isometrías",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a69",
   "maila": 2,
   "izenburua": "Diagonalización por congruencia, ley del paralelogramo e isometrías",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Esta hoja reúne tres cosas: la diagonalización <strong>práctica</strong> de una forma bilineal simétrica (por congruencia y Cholesky), la <strong>ley del paralelogramo</strong> de los espacios euclídeos y un ejercicio sobre una <strong>isometría</strong> (matriz ortogonal)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagonalización por congruencia: <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para diagonalizar por congruencia una matriz simétrica se hacen <strong>operaciones simétricas por filas y por columnas</strong> en la matriz <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>: cada operación por filas (<math display=\"inline\"><mrow><msub><mi>E</mi><mi>i</mi></msub><mo>+</mo><mi>c</mi><msub><mi>E</mi><mi>j</mi></msub></mrow></math>) junto con su operación por columnas homóloga (<math display=\"inline\"><mrow><msub><mi>C</mi><mi>i</mi></msub><mo>+</mo><mi>c</mi><msub><mi>C</mi><mi>j</mi></msub></mrow></math>). El bloque central <math display=\"inline\"><mi>D</mi></math> se vuelve diagonal, y el de la derecha acumula <math display=\"inline\"><mi>P</mi></math> (<math display=\"inline\"><msup><mi>P</mi><mi>T</mi></msup></math> a la izquierda):"
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
     "html": "Los menores principales son <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mn>3</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>, luego la <strong>signatura es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong> (un positivo, un negativo, un nulo: degenerada de rango 2)."
    },
    {
     "mota": "oharra",
     "titulua": "Cholesky",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la forma es <strong>definida positiva</strong>, el algoritmo da <math display=\"inline\"><mrow><msup><mi>P</mi><mi>T</mi></msup><mi>A</mi><mi>P</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></math> (todos los pivotes positivos y normalizados), y de ahí <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>: la <strong>descomposición de Cholesky</strong>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ley del paralelogramo"
    },
    {
     "mota": "testua",
     "html": "En un espacio euclídeo la norma procede del producto escalar (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>), y se cumple la <strong>igualdad del paralelogramo</strong>:"
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
     "html": "Demostración, desarrollando el producto escalar:"
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
     "html": "y al sumar ambas, los términos <math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> se anulan entre sí. Esta igualdad <strong>caracteriza</strong> las normas que provienen de un producto escalar."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Isometrías: matriz ortogonal (ejercicio)"
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> estándar (base canónica ortonormal), <math display=\"inline\"><mi>f</mi></math> <strong>es una isometría</strong> si la matriz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>B</mi><mi>c</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <strong>ortogonal</strong> (<math display=\"inline\"><mrow><mi>A</mi><msup><mi>A</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>). Dada:"
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
     "html": "Las dos columnas dadas ya son <strong>ortonormales</strong>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"postfix\">∥</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>4</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>4</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math></span>. La tercera columna debe completar una base ortonormal, es decir <math display=\"inline\"><mrow><mi>±</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
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
     "html": "Por tanto hay <strong>dos isometrías</strong>:"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\\n  si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mi>+</mi><mn>1</mn></mrow></math>: <strong>giro</strong>; y\\n  si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <strong>reflexión (giro impropio)</strong>.\\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0043</code>, IMG_2026_07_28_02_16_50S, páginas 84-85; &quot;ÁLGEBRA NEWTON&quot; / Chusa). Comprobado con SymPy: <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la congruencia (signatura <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), la ortonormalidad de las columnas, y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0043.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p044_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación matemática (SymPy); resolución de isometrías: giro y simetría",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "Resolución de isometrías: giro y simetría en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del ejercicio de la hoja anterior: al resolver <math display=\"inline\"><mrow><mi>A</mi><msup><mi>A</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> se obtienen <strong>dos isometrías</strong>, y cada una se clasifica —una es un <strong>giro</strong>, la otra una <strong>simetría</strong>—, hallando el eje, el ángulo y el plano fijo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resolución de <math display=\"inline\"><mrow><mi>A</mi><msup><mi>A</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>: dos isometrías"
    },
    {
     "mota": "testua",
     "html": "Las componentes <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la tercera columna cumplen <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>9</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>a</mi><mi>b</mi><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mi>c</mi><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mn>9</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mi>c</mi><mo>=</mo><mfrac><mn>2</mn><mn>9</mn></mfrac></mrow></math>. Hay dos soluciones:"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\\n  <math display=\"inline\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, matriz <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>\\n  (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mi>+</mi><mn>1</mn></mrow></math>: <strong>giro</strong>); y\\n  <math display=\"inline\"><mrow><msub><mi>f</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <strong>simetría</strong>).\\n</em>"
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, las isometrías que dejan fijo el origen son de estas <strong>dos clases</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Giro: eje y ángulo"
    },
    {
     "mota": "testua",
     "html": "El <strong>eje</strong> es el espacio de vectores propios de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> (los vectores que permanecen quietos), es decir <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>:"
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
     "html": "El <strong>ángulo</strong> se obtiene de la traza: para un giro, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span>. Aquí <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>−</mo><mn>1</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>, luego"
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
     "html": "El polinomio característico factoriza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: la raíz <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> (el eje) y <math display=\"inline\"><msup><mi>e</mi><mrow><mi>±</mi><mi>i</mi><mi>θ</mi></mrow></msup></math> raíces complejas conjugadas (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>), como corresponde a un giro (discriminante <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mo>&lt;</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetría: plano fijo"
    },
    {
     "mota": "testua",
     "html": "Para la simetría <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math>, la matriz <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>−</mo><mi>I</mi></mrow></math> tendrá <strong>rango 1</strong> (todas las filas son proporcionales a <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), luego su núcleo (el espacio fijo) tiene <strong>dimensión 2</strong>:"
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
     "html": "Es decir, <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> es la reflexión respecto de <strong>un plano entero</strong> (la simetría fija un plano; el giro, en cambio, solo una recta —el eje—)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0044</code>, IMG_2026_07_28_02_16_56S, páginas 86-87; &quot;ÁLGEBRA NEWTON&quot; / Chusa). Comprobado con SymPy: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>⇒</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math></span>, el eje <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>−</mo><mi>I</mi></mrow></math> de rango 1 (plano fijo, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>). No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0044.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p045_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación matemática (SymPy); diagonalización de la simetría y matriz ortogonal",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a71",
   "maila": 2,
   "izenburua": "Diagonalización de la simetría y matriz ortogonal de <math display=\"inline\"><mi>h</mi></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Esta hoja cierra dos hilos: por un lado la <strong>diagonalización de la simetría</strong> <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> (como reflexión) y, por otro, demostrar que la matriz de la isometría <math display=\"inline\"><mi>h</mi></math> de un examen anterior <strong>en una base ortonormal es ortogonal</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Valores propios de una isometría: <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>λ</mi></math> es un valor propio de una isometría (con vector propio <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>), entonces <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math></span>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mrow></math>, es decir"
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
     "html": "Para la simetría <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math>, los valores propios son <math display=\"inline\"><mn>1</mn></math> (plano fijo, multiplicidad 2) y <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (multiplicidad 1)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagonalización de la simetría <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math>: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> es autoadjunto, los espacios propios de valores propios distintos son <strong>ortogonales</strong>, luego <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>. Siendo <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, el complemento ortogonal"
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
     "html": "En la base propia <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>, <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> es diagonal:"
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
     "html": "Es decir, <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> es la <strong>reflexión</strong> respecto del plano <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (el valor propio es <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> en la dirección normal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz de <math display=\"inline\"><mi>h</mi></math> en la base <math display=\"inline\"><mi>β</mi></math>: ortogonal"
    },
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>w</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span> (base ortonormal respecto de <math display=\"inline\"><mi>f</mi></math>), las columnas son las coordenadas <math display=\"inline\"><mi>β</mi></math> de <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>w</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>w</mi><mn>1</mn></msub></mrow></math>; por tanto"
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
     "html": "Como <math display=\"inline\"><mrow><mi>B</mi><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> (matriz de permutación con signos), <math display=\"inline\"><mi>B</mi></math> es <strong>ortogonal</strong>, lo que confirma que <math display=\"inline\"><mi>h</mi></math> es una <strong>isometría</strong>. La ortogonalidad puede probarse de tres modos equivalentes: <math display=\"inline\"><mrow><mi>B</mi><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, o por columnas ortonormales."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0045</code>, IMG_2026_07_28_02_17_01S, páginas 88-89; hoja <strong>mixta</strong>: Chusa + universidad). Comprobado con SymPy: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⟂</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⟂</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (luego <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>⟂</mo></msup></mrow></math>), y <math display=\"inline\"><mrow><mi>B</mi><msup><mi>B</mi><mi>T</mi></msup><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0045.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p046_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; geometría afín: posición relativa y teorema de la intersección",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a72",
   "maila": 1,
   "izenburua": "Matriz de una aplicación lineal en bases nuevas: <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cómo cambia la matriz de una aplicación lineal <strong>en bases distintas</strong>: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; si en las bases canónicas la matriz es <math display=\"inline\"><mi>A</mi></math>, la matriz <math display=\"inline\"><mi>B</mi></math> en las bases nuevas se obtiene por <strong>equivalencia</strong>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>."
    }
   ]
  },
  {
   "id": "a73",
   "maila": 2,
   "izenburua": "El problema y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Matriz de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en las bases canónicas (en notación por columnas):"
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
     "html": "La matriz en las bases nuevas <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math></span> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> de <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> es <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>, siendo <math display=\"inline\"><mi>Q</mi></math> el cambio de base del <strong>dominio</strong> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>) y <math display=\"inline\"><mi>P</mi></math> el cambio de base del <strong>codominio</strong> (<math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>). <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son <strong>equivalentes</strong> (mismo rango); si el dominio y el codominio fueran iguales (endomorfismo) y se usara la misma base a ambos lados, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>Q</mi></mrow></math> serían <strong>semejantes</strong>."
    },
    {
     "mota": "oharra",
     "titulua": "La matriz transforma coordenadas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math> transforma <strong>vectores</strong>; en cambio la matriz <math display=\"inline\"><mi>A</mi></math> transforma <strong>coordenadas</strong> (respecto de las bases fijadas). Por eso el cambio de base se convierte en <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a74",
   "maila": 2,
   "izenburua": "Matrices de los cambios de base <math display=\"inline\"><mi>Q</mi></math> y <math display=\"inline\"><mi>P</mi></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las columnas de <math display=\"inline\"><mi>Q</mi></math> son la base nueva de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, expresada en las canónicas (triangular superior unitaria):"
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
     "html": "Los vectores de la base nueva de <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> son, en <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. El cambio de coordenadas de <math display=\"inline\"><mi>β</mi></math> a <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> es <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>M</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>:"
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
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0058</code>, IMG_2026_07_28_02_18_17S, páginas 114-115; &quot;ÁLGEBRA LEO&quot; / Landeta). Comprobado con SymPy: <math display=\"inline\"><mi>Q</mi></math>, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>M</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mi>M</mi><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>. El producto <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> y la imagen de un vector, en la página siguiente. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0058.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p059_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; producto B=PAQ e imagen de un vector",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a75",
   "maila": 2,
   "izenburua": "El producto <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> y la imagen de un vector",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del problema anterior: se efectúa el producto <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> y, como apéndice, se calcula la imagen del vector <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El producto <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Primero <math display=\"inline\"><mrow><mi>A</mi><mi>Q</mi></mrow></math> (las columnas son sumas acumuladas de las columnas de <math display=\"inline\"><mi>A</mi></math>):"
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
     "html": "Después <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
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
     "html": "(Para calcular <math display=\"inline\"><mi>P</mi></math>, la base antigua <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> se expresa en <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mn>1</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Imagen del vector <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las coordenadas de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en la base nueva de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> son <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. La imagen en <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>:"
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
     "html": "Comprobación por el <strong>camino directo</strong>: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>20</mn><mo>,</mo><mn>28</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son las coordenadas de la imagen en <math display=\"inline\"><mi>β</mi></math>, es decir <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. Pasando a <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>,"
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
     "html": "los dos caminos <strong>coinciden</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), lo que confirma el producto <math display=\"inline\"><mi>B</mi></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0059</code>, IMG_2026_07_28_02_18_22S, páginas 116-117; &quot;ÁLGEBRA LEO&quot; / Landeta). Comprobado con SymPy: <math display=\"inline\"><mrow><mi>A</mi><mi>Q</mi></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math>, coordenadas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, e imagen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (por dos caminos). En el papel original las fracciones pequeñas de <math display=\"inline\"><mi>B</mi></math> son difíciles de leer; aquí se recoge el <math display=\"inline\"><mi>B</mi></math> confirmado con SymPy. Véase <code>koadernoa_algebra2013_alg_0059.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p060_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; imagen por dos caminos + tres puntos colineales (recta)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "Comprobación de la imagen por dos caminos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hoja mixta: por un lado el <strong>cierre</strong> del problema <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mi>A</mi><mi>Q</mi></mrow></math> (la imagen de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> por dos caminos, Leo) y, por otro, la <strong>recta</strong> determinada por tres puntos <strong>colineales</strong> (Chusa)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La imagen por dos caminos (Leo)"
    },
    {
     "mota": "testua",
     "html": "La imagen de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se calcula de dos maneras, y <strong>deben coincidir</strong>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Camino directo</strong> (<math display=\"inline\"><mi>A</mi></math>, coordenadas canónicas): <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>20</mn><mo>,</mo><mn>28</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.",
      "<strong>A través de <math display=\"inline\"><mi>B</mi></math></strong> (coordenadas nuevas): las coordenadas de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub></math> son <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; volviendo desde <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>23</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math></span>."
     ]
    },
    {
     "mota": "testua",
     "html": "Los dos caminos dan el <strong>mismo resultado</strong>: <math display=\"inline\"><mrow><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección (errores de cálculo en el original)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la hoja original la alumna comete algunos errores numéricos —<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>12</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (lo correcto es <math display=\"inline\"><mn>20</mn></math>; <math display=\"inline\"><mrow><mn>20</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>8</mn></mrow></math>) y <math display=\"inline\"><mrow><mi>B</mi><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>19</mn><mo>,</mo><mi>−</mi><mn>9</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (lo correcto es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)— y <strong>ella misma detecta la incoherencia</strong> («debería ser igual»). <strong>El valor correcto es <math display=\"inline\"><mrow><mn>20</mn><mo>+</mo><mn>28</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>23</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>, comprobado con SymPy. La estructura del método es correcta; los errores son solo aritméticos."
      }
     ]
    }
   ]
  },
  {
   "id": "a77",
   "maila": 2,
   "izenburua": "Núcleo e imagen de una aplicación lineal: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se calculan el <strong>núcleo</strong> y la <strong>imagen</strong> de una aplicación lineal, y se comprueba el <strong>teorema de la dimensión</strong> (rango-nulidad). Sea"
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
     "testua": "Núcleo (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Para que <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>4</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math>. Por tanto:"
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
     "testua": "Imagen (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math> se mueven <strong>libremente</strong> en todo <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>s</mi><mi>x</mi><mo>+</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en la base <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>):"
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
     "testua": "Teorema de la dimensión y carácter"
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
     "html": "<math display=\"inline\"><mi>f</mi></math> <strong>no es inyectiva</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>) y <strong>no es suprayectiva</strong> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es un subespacio propio de <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>&lt;</mo><mn>3</mn></mrow></math>; falta la dirección <math display=\"inline\"><mn>1</mn></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>ALGEBRA_ENE2013_0064</code>, IMG_2026_07_28_02_18_50S, páginas 126-127; &quot;ÁLGEBRA LEO&quot; / Landeta). Comprobado con SymPy: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math></span>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, y <math display=\"inline\"><mrow><mn>4</mn><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math>. Ni inyectiva ni suprayectiva. No aplicar correcciones. Véase <code>koadernoa_algebra2013_alg_0064.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_algebra2013_alg_p065_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; posición relativa de dos rectas en R³ (cruce, dim S+T=3)",
     "hizkuntza": "eu"
    }
   ]
  }
 ]
};
