/* JAKINA · kapitulua «B3 - Kalkulua eta analisia - III (funtzio-segidak eta funtzio-serieak)» (01mc_04funtzioserieak), desde edicion2/kapituluak/01mc_04funtzioserieak/01mc_04funtzioserieak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01mc_04funtzioserieak"] = {
 "gakoa": "01mc_04funtzioserieak",
 "titulua": "JAKINA - B3 - Cálculo y análisis - III",
 "azala": "B3 - Cálculo y análisis - III (sucesiones y series de funciones)",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/01mc_04funtzioserieak/01mc_04funtzioserieak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "TEMA 7 — Sucesiones de funciones y series de funciones",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo toma como base el tema 7 de la asignatura <strong>Cálculo Diferencial e Integral</strong> de la UPV/EHU (2012–13, teoría tipografiada), reelaborado y desarrollado. La parte de ejercicios resueltos procede de un documento LaTeX del propio usuario (<code>AAA_TEXES_kalkulatex</code>). Lo que se recoge aquí es la base que luego se usará continuamente en las ecuaciones diferenciales (soluciones en serie), el análisis complejo y las series de Fourier."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "7.1 Sucesiones de funciones",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sucesiones de funciones"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>,</mo><msub><mi>f</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>f</mi><mi>n</mi></msub><mo>,</mo><mi>…</mi></mrow></math> (o <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>) una sucesión de funciones, siendo todos sus términos funciones definidas en un intervalo real <math display=\"inline\"><mi>I</mi></math>. Para cada <math display=\"inline\"><mi>x</mi></math> de <math display=\"inline\"><mi>I</mi></math> se obtiene una sucesión <strong>numérica</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> — y todo lo que sabemos de las sucesiones numéricas puede aplicarse punto a punto."
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
       "html": "El <strong>campo de convergencia</strong> de la sucesión <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>∈</mo><mi>I</mi><mo>:</mo><mo>∃</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, y en él se define la <strong>función límite</strong> (límite puntual): <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mi>.</mi></mrow></math> Con épsilon: <img class=\"formula\" src=\"../media/formulak/ea1ab68dc1e2a75d.svg\" alt=\"forall x in D, forall epsilon &gt; 0, exists n_0 (epsilon, #text(fill: gorria)[$x$]), forall n gt.eq n_0 : |f_n (x) - f(x)| &lt; epsilon\" style=\"width:27.825em;height:1.001em\" loading=\"lazy\"> — observación: ese <math display=\"inline\"><msub><mi>n</mi><mn>0</mn></msub></math> puede <strong>depender del punto</strong>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La convergencia puntual <strong>no</strong> traslada buenas propiedades al límite. Tres contraejemplos clásicos (los mismos de la fuente):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Todas las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> pueden ser <strong>continuas</strong> y <math display=\"inline\"><mi>f</mi></math> no: <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> una sucesión (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mi>x</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mn>1</mn></math> definidas a trozos) tiende a la función signo — el límite es discontinuo en 0.",
      "Todas las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> pueden ser <strong>derivables</strong> y resultar <math display=\"inline\"><mi>f</mi></math> no continua.",
      "Todas las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> pueden ser <strong>integrables</strong> y no ser intercambiables el límite y la integral: con &quot;picos&quot; cada vez más altos y más estrechos de tipo <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> para todo <math display=\"inline\"><mi>n</mi></math>, pero la función límite es <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>f</mi><mo>=</mo><mn>0</mn><mo>≠</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>."
     ]
    },
    {
     "mota": "irudia",
     "oina": "El límite y la integral no siempre son intercambiables: el pico es cada vez más estrecho y más alto, manteniendo constante el área (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>), pero en cada punto fijo <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>. La convergencia puntual es demasiado débil — por eso hace falta la uniforme.",
     "src": "../media/irudiak/b8fd3f8629996325.svg",
     "zabalera": 309
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Convergencia uniforme"
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
       "html": "La sucesión <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es <strong>uniformemente convergente</strong> en <math display=\"inline\"><mi>D</mi></math> hacia <math display=\"inline\"><mi>f</mi></math> si se cumple <math display=\"block\"><mrow><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∃</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo>∀</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ε</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math> — ahora <math display=\"inline\"><msub><mi>n</mi><mn>0</mn></msub></math> es <strong>el mismo</strong> para todos los puntos de <math display=\"inline\"><mi>D</mi></math>. La uniforme implica la puntual (no al revés)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La convergencia uniforme sí traslada las propiedades al límite:"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Los tres teoremas de la convergencia uniforme",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>→</mo><mi>f</mi></mrow></math> uniformemente en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "(<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> todas continuas)  <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mi>f</mi></math> es continua.",
        "(<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> todas integrables)  <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mi>f</mi></math> es integrable y <math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub></mrow></math> (el límite y la integral son intercambiables).",
        "(<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> derivables y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> uniformemente convergente hacia una <math display=\"inline\"><mi>g</mi></math> continua)  <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mi>f</mi></math> es derivable y <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mi>g</mi></mrow></math> (el límite y la derivada son intercambiables)."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Profundización: convergencia puntual y uniforme"
    },
    {
     "mota": "testua",
     "html": "En este complemento se reúnen la convergencia puntual y uniforme de sucesiones de funciones y los intercambios de límites."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Sucesiones de funciones y convergencia puntual"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Campo de convergencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para una sucesión de funciones <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>:</mo><mi>I</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>∈</mo><mi>I</mi><mo>:</mo><mo>∃</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es el <strong>campo de convergencia</strong>. Si <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math>, se define <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para la sucesión <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Por ejemplo, <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>→</mo><mi>∞</mi></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>→</mo><mn>0</mn></mrow></math>; en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> las sumas parciales se alternan y no hay límite real."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Límite discontinuo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mi>n</mi></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math>. El límite puntual de funciones continuas puede ser discontinuo."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Otra aproximación da el salto mediante una transición cada vez más estrecha: <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≤</mo><mi>−</mi><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> y puntualmente se obtiene <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math>. El tramo central también puede sustituirse por una transición suave del tipo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, como en la lectura dudosa de la fotografía."
    },
    {
     "mota": "testua",
     "html": "En la sucesión de triángulos, <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mo>−</mo><mn>2</mn><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> en cada punto <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>, pero la altura de los picos es siempre <math display=\"inline\"><mn>1</mn></math>. Eso distingue la convergencia puntual de la uniforme."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Convergencia uniforme"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Convergencia puntual",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> puntualmente en <math display=\"inline\"><mi>D</mi></math> si y solo si <math display=\"block\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mo>,</mo><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∃</mo><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo>∀</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Convergencia uniforme",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformemente en <math display=\"inline\"><mi>D</mi></math> si y solo si <math display=\"block\"><mrow><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∃</mo><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mo>,</mo><mo>∀</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi><mi>.</mi></mrow></math> El índice puede depender de <math display=\"inline\"><mi>ε</mi></math>, pero no de <math display=\"inline\"><mi>x</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es la negación directa de la uniformidad: <math display=\"block\"><mrow><mo>∃</mo><msub><mi>ε</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∀</mo><msub><mi>n</mi><mn>0</mn></msub><mo>,</mo><mo>∃</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub><mo>,</mo><mo>∃</mo><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><mi>D</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≥</mo><msub><mi>ε</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> [CORREGIDO: en el papel parece figurar un único punto fijo, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover></math>; en general el punto del contraejemplo puede depender de <math display=\"inline\"><mi>n</mi></math>.]"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Continuidad del límite uniforme",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si todas las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> son continuas en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformemente, entonces <math display=\"inline\"><mi>f</mi></math> es continua en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dados el punto <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, por uniformidad se elige primero <math display=\"inline\"><mi>n</mi></math> y luego, por la continuidad de <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>δ</mi></mrow></math>, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac><mo>+</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac><mo>+</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac><mo>=</mo><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Intercambio de límite e integral",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> son integrables en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformemente, entonces <math display=\"inline\"><mi>f</mi></math> es integrable y <math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Profundización: intercambio de límites"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Llevar el límite dentro de la integral y de la derivada"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Intercambio de integral y límite",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformemente en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> y todas las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> son integrables, <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> En efecto, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mi>∞</mi></msub><mo>→</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Límite de las derivadas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> son derivables en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><msub><mi>f</mi><msup><mi>n</mi><mo>′</mo></msup></msub></math> converge uniformemente a <math display=\"inline\"><mi>g</mi></math> y <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es convergente en un punto, entonces <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> converge uniformemente a una <math display=\"inline\"><mi>f</mi></math> y <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mi>g</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La necesidad de la hipótesis es fundamental: la mera convergencia uniforme de funciones derivables no garantiza la convergencia de las derivadas."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Convergencia puntual y uniforme"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Los dos tipos de convergencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> puntualmente en <math display=\"inline\"><mi>D</mi></math> si y solo si <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mo>,</mo><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∃</mo><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> donde, cuando <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "La convergencia es <strong>uniforme</strong> si el mismo <math display=\"inline\"><mrow><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede usarse para todos los puntos <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math>. Equivalentemente, <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mi>∞</mi></msub><mo>→</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La sucesión de saturación <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>←</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>≤</mo><mi>x</mi><mo>≤</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr></mtable></mrow></mrow></math> tiende puntualmente al límite <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math>. Como el límite es discontinuo aunque las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> sean continuas, la convergencia no es uniforme en ningún intervalo cerrado que contenga el cero."
    },
    {
     "mota": "testua",
     "html": "Asimismo, en la sucesión de triángulos <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mo>−</mo><mn>2</mn><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>1</mn></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> el límite puntual es cero, pero <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mi>∞</mi></msub><mo>=</mo><mn>1</mn></mrow></math>; por tanto no hay convergencia uniforme."
    },
    {
     "mota": "testua",
     "html": "La sucesión <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></math> tiene en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> el límite puntual <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math>. No es uniforme: eligiendo <math display=\"inline\"><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mi>n</mi></mfrac></msup></mrow></math>, resulta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "El dominio cambia la uniformidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La sucesión <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mi>n</mi></mrow></mfrac></mrow></math> tiene límite puntual cero en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">sup</mi><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></munder><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mi>n</mi></mrow></mfrac><mo>=</mo><mn>1</mn></mrow></math>, y no es uniforme. En un intervalo fijo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, en cambio, <math display=\"block\"><mrow><mn>0</mn><mo>≤</mo><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mi>n</mi></mrow></mfrac><mo>≤</mo><mfrac><mi>a</mi><mrow><mi>a</mi><mo>+</mo><mi>n</mi></mrow></mfrac><mo>→</mo><mn>0</mn></mrow></math>; por tanto es uniforme."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Criterio de mayoración uniforme",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math> para todo <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>→</mo><mn>0</mn></mrow></math>, entonces <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformemente en <math display=\"inline\"><mi>D</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con este criterio, la sucesión <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac></mrow></math> tiene límite <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>, y <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mi>x</mi><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> cuando <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math>. La convergencia es uniforme en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En la sucesión <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>, el máximo está en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> y <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac></mrow></math>. Por tanto la convergencia a cero es uniforme en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Condición necesaria con puntos móviles",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformemente en <math display=\"inline\"><mi>D</mi></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>∈</mo><mi>D</mi></mrow></math> para cualquier sucesión <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mn>0</mn></mrow></math>. En consecuencia, encontrar una <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> que viole esa condición demuestra la no uniformidad."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La sucesión <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> tiene límite puntual cero en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. Pero tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac></mrow></math>, <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>π</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>n</mi></mrow></mfrac></mrow></mfrac><mo>→</mo><mn>1</mn><mo>,</mo></mrow></math> y, por tanto, la convergencia no es uniforme."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Propiedades de la convergencia uniforme"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Continuidad e integración",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si las <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> son continuas y <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformemente, <math display=\"inline\"><mi>f</mi></math> es continua. En un intervalo cerrado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, además, <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para la derivabilidad no basta que <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> converja uniformemente: también se necesitan la convergencia uniforme de las derivadas <math display=\"inline\"><msub><mi>f</mi><msup><mi>n</mi><mo>′</mo></msup></msub></math> y la convergencia en un punto, como en el teorema anterior."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Último ejemplo: cuando el máximo se desplaza al extremo"
    },
    {
     "mota": "testua",
     "html": "Consideremos <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math>. En cada punto <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>. La derivada tiene <math display=\"block\"><mrow><msub><mi>f</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mi>n</mi><mn>3</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y el máximo no nulo está en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>n</mi></mfrac></mrow></math>: <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>4</mn><msup><mi>e</mi><mn>2</mn></msup></mfrac></mrow></math>. Por tanto no hay convergencia uniforme en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Fijado <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, en cambio, se cumple <math display=\"inline\"><mrow><mfrac><mn>2</mn><mi>n</mi></mfrac><mo>&lt;</mo><mi>a</mi></mrow></math> para todos los <math display=\"inline\"><mi>n</mi></math> grandes; entonces el supremo en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está en el extremo <math display=\"inline\"><mi>a</mi></math> y <math display=\"block\"><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>a</mi></mrow></msup><mo>→</mo><mn>0</mn></mrow></math>. Por eso la convergencia es uniforme en todos los intervalos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio: convergencia puntual y uniforme"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiar la convergencia de la sucesión <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>: calcular la función límite y decidir si la convergencia es uniforme. (Sugerencia: el límite no es continuo.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "7.2 Series de funciones",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Series de funciones"
    },
    {
     "mota": "testua",
     "html": "La convergencia de la serie de funciones <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub></mrow></math> se define mediante la convergencia de la sucesión de sus <strong>sumas parciales</strong> (<math display=\"inline\"><mrow><msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math>), tanto puntual como uniformemente; aplicando a <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> los teoremas del apartado anterior, las series uniformemente convergentes pueden integrarse y derivarse término a término. También se define la <strong>convergencia absoluta</strong> (que <math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> converja puntualmente)."
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
       "html": "Convergencia de la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi></mrow></math>: si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math> el término general no tiende a cero — divergente. Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> el criterio del cociente da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> — absolutamente convergente. En los extremos: en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> la serie armónica (divergente); en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> la serie alternada, convergente por el criterio de Leibniz. Campo de convergencia: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Series de funciones y criterio de Weierstrass"
    },
    {
     "mota": "testua",
     "html": "La suma de una serie de funciones es <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, si existe el límite de las sumas parciales. Con hipótesis adecuadas, cuando hay convergencia uniforme la derivación y la integración pueden hacerse término a término: <math display=\"block\"><mrow><msup><mi>S</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mo>∑</mo><mi>n</mi></munder><msub><mi>f</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><munder><mo>∑</mo><mi>n</mi></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Criterio M de Weierstrass",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math> para todo <math display=\"inline\"><mi>x</mi></math>, y la serie numérica <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>M</mi><mi>n</mi></msub></mrow></math> es convergente, entonces <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>f</mi><mi>n</mi></msub></mrow></math> converge absoluta y uniformemente."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math> cumple <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math>; por tanto converge uniformemente en todo <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Series de funciones"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Convergencia de una serie de funciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Siendo <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>:</mo><mi>I</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, las sumas parciales de la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub></mrow></math> son <math display=\"inline\"><mrow><msub><mi>S</mi><mi>N</mi></msub><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>f</mi><mi>N</mi></msub></mrow></math>. La serie converge puntualmente en el conjunto <math display=\"inline\"><mrow><mi>D</mi><mo>⊂</mo><mi>I</mi></mrow></math> cuando <math display=\"inline\"><mrow><msub><mi>S</mi><mi>N</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene límite finito para todo <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mfrac></mrow></math>, en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> se obtiene <math display=\"inline\"><mrow><mo>∑</mo><mn>1</mn></mrow></math> y la serie es divergente. Cuando <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math>, en cambio, la razón geométrica cumple <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math>; el campo de convergencia es <math display=\"inline\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi mathvariant=\"double-struck\">ℝ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mtd></mtr></mtable></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Series de funciones: convergencia puntual, uniforme y criterio de Weierstrass"
    },
    {
     "mota": "testua",
     "html": "Los tipos de convergencia de las series de funciones (puntual y uniforme) y el criterio <math display=\"inline\"><mi>M</mi></math> de Weierstrass, con un ejemplo de cálculo del conjunto de convergencia."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Convergencia puntual"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Convergencia puntual",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La serie de funciones <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> converge <strong>puntualmente</strong> a <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><mi>D</mi></math> si la sucesión de sumas parciales <math display=\"inline\"><mrow><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> converge a <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir <math display=\"block\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Conjunto de convergencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hallar el conjunto <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> en el que <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></mfrac></mrow></math> es convergente."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Condición necesaria</strong> (<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math> el término no tiende a <math display=\"inline\"><mn>0</mn></math> (o no está definido en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>): <strong>no convergente</strong>. Por tanto se estudia para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math>, con d&#x27;Alembert: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mi>n</mi></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>&lt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por tanto el <strong>conjunto de convergencia</strong>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∪</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Convergencia uniforme"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Convergencia uniforme",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> converge <strong>uniformemente</strong> a <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><mi>D</mi></math>, si para todo <math display=\"inline\"><mrow><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> existe <math display=\"inline\"><msub><mi>n</mi><mn>0</mn></msub></math> (el mismo para todo <math display=\"inline\"><mi>x</mi></math>) tal que <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>f</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi><mi>.</mi></mrow></math> El resto es la cola de la serie: <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Criterio de Weierstrass (criterio M)"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Criterio M de Weierstrass",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> una sucesión de funciones definidas en <math display=\"inline\"><mi>D</mi></math>. Si existen <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math> <math display=\"inline\"><msub><mi>M</mi><mi>n</mi></msub></math> tales que <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math>, y la serie numérica <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math> es convergente, entonces la serie de funciones <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>converge uniformemente</strong> en <math display=\"inline\"><mi>D</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "También se menciona el <strong>criterio de Cauchy (de la raíz)</strong>: <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mroot><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>n</mi></mroot><mo>&lt;</mo><mn>1</mn></mrow></math> convergente, <math display=\"inline\"><mrow><mo>&gt;</mo><mn>1</mn></mrow></math> divergente, <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> dudoso."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CÁLCULO (JOSERRA), 2013/4/23 (páginas 80-81, C2_0041). Todo es <strong>correcto</strong>: conjunto de convergencia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∪</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, cociente <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math>. La simplificación del cociente por parte del autor (<math display=\"inline\"><mrow><mo>→</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>) es válida <strong>solo en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math></strong> (dominan las potencias <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>); en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> la serie no está definida (<math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mi>n</mi></math> impar). La cola debe escribirse con índice mudo (<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). No se ha hecho resumen. Véase <code>01g_koadernoa_kalkulua_c2_0041.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "7.3 Series de potencias",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Series de potencias"
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
       "html": "La <strong>serie de potencias</strong> centrada en el punto <math display=\"inline\"><mi>a</mi></math>: <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>, con <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> y <math display=\"inline\"><mi>a</mi></math> fijos. Existe un <strong>radio de convergencia</strong> <math display=\"inline\"><mi>r</mi></math> (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>r</mi><mo>≤</mo><mi>∞</mi></mrow></math>) tal que la serie es absolutamente convergente en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>r</mi></mrow></math> y divergente cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>r</mi></mrow></math>; los extremos deben estudiarse uno a uno. Del criterio del cociente: <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>1</mn><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo (Cauchy) </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>r</mi><mo>=</mo><mfrac><mn>1</mn><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mroot><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>n</mi></mroot></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ejemplos extremos: <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>n</mi><mi>n</mi></msup><msup><mi>x</mi><mi>n</mi></msup></mrow></math> tiene <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> (solo en el centro); <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math> tiene <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>∞</mi></mrow></math> (convergente en todo <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>)."
    },
    {
     "mota": "testua",
     "html": "Propiedades estructurales en el intervalo de convergencia: dos series pueden sumarse y multiplicarse (<math display=\"inline\"><mrow><mo>∑</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>k</mi></msub><msub><mi>a</mi><mi>k</mi></msub><msub><mi>b</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>, producto de Cauchy); son <strong>uniformemente convergentes en cualquier subintervalo cerrado y acotado</strong>; y la función suma es continua, derivable hasta cualquier orden e integrable/derivable término a término:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Funciones elementales mediante series.</strong> Las siguientes series son convergentes <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, y también pueden tomarse como definición:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(y <math display=\"inline\"><mi mathvariant=\"normal\">cosh</mi></math>, <math display=\"inline\"><mi mathvariant=\"normal\">sinh</mi></math> sin alternancia de signos). Estas son las que aparecerán una y otra vez en las oscilaciones, en la fórmula de Euler (M08) y en las ecuaciones diferenciales."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Series de potencias y Taylor"
    },
    {
     "mota": "testua",
     "html": "Para la serie de potencias <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math>, cuando existen, <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msub><mi>a</mi><mi>n</mi></msub><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">limsup</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mroot><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>n</mi></mroot><mi>.</mi></mrow></math> La serie converge en la región <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math>, diverge fuera, y los extremos deben estudiarse uno a uno. La convergencia uniforme se da en todos los intervalos cerrados interiores. [CORREGIDO: el papel dice que converge uniformemente en todo el intervalo abierto; lo correcto es en cada compacto.]"
    },
    {
     "mota": "testua",
     "html": "Si la serie es la serie de Taylor de <math display=\"inline\"><mi>f</mi></math>, <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mfrac><msub><mi>x</mi><mn>0</mn></msub><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math> y <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow></math> no tiene serie de Taylor ordinaria en <math display=\"inline\"><mn>0</mn></math>, porque la segunda derivada <math display=\"inline\"><mrow><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow></math> no es finita en <math display=\"inline\"><mn>0</mn></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Operaciones con series elementales"
    },
    {
     "mota": "testua",
     "html": "La serie geométrica y sus derivadas: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>2</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>. [CORREGIDO: en un recuadro del papel la primera suma empieza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> pero da <math display=\"inline\"><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac></math>; empezando desde <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> la suma es <math display=\"inline\"><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac></math>.]"
    },
    {
     "mota": "testua",
     "html": "Integrando y derivando, <math display=\"block\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math> Para aproximar <math display=\"inline\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></math> se toma <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>. El error tras cuatro términos no es menor que el primer término descartado, porque todos los términos son positivos. [CORREGIDO: en el papel el error se escribe como menor que <math display=\"inline\"><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>5</mn></msup><mn>5</mn></mfrac></math>; esa es una estimación por debajo, no una cota superior.]"
    },
    {
     "mota": "testua",
     "html": "Series estándar: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>α</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mi>α</mi><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Mediante la serie binomial, <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><msqrt><mrow><mn>2</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> cuando <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn></mrow></math>, y <math display=\"block\"><mrow><msqrt><mrow><mi>x</mi><mo>+</mo><mn>4</mn></mrow></msqrt><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>4</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> cuando <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>4</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Desarrollo del logaritmo derivando y volviendo a integrar: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> De ahí <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2013</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2012</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Serie de la arcotangente y aplicaciones"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn><mo>,</mo></mrow></math> y en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> se obtiene la serie de Leibniz: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>. La serie converge uniformemente en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> por el criterio uniforme de Leibniz. [CORREGIDO: el criterio interior de la serie de potencias no prueba por sí solo la uniformidad en todo el intervalo abierto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.]"
    },
    {
     "mota": "testua",
     "html": "Para desarrollar la función <math display=\"inline\"><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></math> en torno a <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>, <math display=\"block\"><mrow><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> cuando <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Usando la serie de la arcotangente, <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><msup><mn>4</mn><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mfrac><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">arctan</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por último, si <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mi>n</mi><mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mi>n</mi><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></math>. Por tanto, <math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mfrac><mi>t</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La integral corta que aparece antes de los cálculos anteriores también forma parte del bloque de series: con las sustituciones <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> y <math display=\"inline\"><mrow><mfrac><mi>t</mi><mn>3</mn></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"block\"><mrow><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msqrt><mrow><mn>9</mn><mo>−</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow></msqrt></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Cálculos de series de potencias"
    },
    {
     "mota": "testua",
     "html": "Cambiando el centro de la serie geométrica, <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>4</mn><mi>.</mi></mrow></math> De ahí, los coeficientes de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></math> son <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup></mfrac></mrow></math> cuando <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>. En particular, <math display=\"block\"><mrow><msub><mi>a</mi><mn>13</mn></msub><mo>=</mo><mfrac><mn>10</mn><msup><mn>4</mn><mn>15</mn></msup></mfrac></mrow></math> y <math display=\"block\"><mrow><msup><mi>f</mi><mn>13</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>13</mn><mi>!</mi><mo>⋅</mo><mfrac><mn>10</mn><msup><mn>4</mn><mn>15</mn></msup></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La serie del logaritmo da <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac></mrow></math> cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>. Tomando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>8</mn></mfrac></mrow></math>, <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><msup><mn>8</mn><mi>n</mi></msup></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>9</mn><mn>8</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> El resto de la serie alternada es menor que <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>p</mi><msup><mn>8</mn><mi>p</mi></msup></mrow></mfrac></math> tomando los primeros <math display=\"inline\"><mrow><mi>p</mi><mo>−</mo><mn>1</mn></mrow></math> términos; la elección <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>4</mn></mrow></math> ya da un error menor que <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></math>."
    },
    {
     "mota": "testua",
     "html": "Multiplicar los coeficientes por el factor <math display=\"inline\"><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow></math> lleva el radio original a la mitad, porque el crecimiento exponencial dominante es <math display=\"inline\"><msup><mn>2</mn><mi>n</mi></msup></math>. En el ejemplo geométrico, la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><msup><mi>x</mi><mi>n</mi></msup></mrow></math> tiene <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math> y diverge en los dos extremos."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Convertir una serie en una función conocida",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>n</mi></mrow></msup></mrow><mrow><mn>3</mn><mi>n</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mfrac><mn>1</mn><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math> Aquí se ha usado <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mfrac><msup><mi>u</mi><mi>n</mi></msup><mi>n</mi></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Otros desarrollos útiles son <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mo>,</mo></mrow></math> y <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mi>n</mi><mn>5</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>6</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>6</mn></msup></mrow></mfrac></mrow></math>, la variable <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> presenta un crecimiento <math display=\"inline\"><mrow><msup><mn>9</mn><mi>n</mi></msup><msup><mi>u</mi><mi>n</mi></msup></mrow></math>. Por tanto <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>, es decir, <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>7</mn><mn>3</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>←</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></mrow></math>; los dos extremos deben estudiarse por separado."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Unicidad de los coeficientes de las series de potencias",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si dos series de potencias con el mismo centro representan la misma función en un entorno, todos los coeficientes son iguales. En efecto, si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> dentro de su radio de convergencia, derivando término a término se obtiene <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Complemento editorial",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se ha hecho explícita esta unicidad para que el siguiente ejercicio de identidades no quede sin la justificación que necesita, que no se da antes en la teoría."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcular la serie de Taylor de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>3</mn><mi>x</mi><mo>−</mo><mn>5</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn></mrow></mfrac></mrow></math> en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (sugerencia: descomponer en fracciones simples, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y usar la serie geométrica) y el radio de convergencia. Comparar con los tres primeros términos obtenidos derivando término a término."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejercicios de radios de convergencia"
    },
    {
     "mota": "testua",
     "html": "La serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></msup><msup><mi>x</mi><mi>n</mi></msup></mrow></math> tiene <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mi>e</mi></mfrac></mrow></math>, porque <math display=\"inline\"><mrow><mroot><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></msup><mi>n</mi></mroot><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>→</mo><mi>e</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mi>b</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, el radio de la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><msup><mi>a</mi><mi>n</mi></msup><mo>+</mo><msup><mi>b</mi><mi>n</mi></msup></mrow></mfrac></mrow></math> es <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>a</mi></mrow></math>. En los extremos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>a</mi></mrow></math> el módulo del término general no se acerca a cero; los dos extremos divergen."
    },
    {
     "mota": "testua",
     "html": "La serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math> tiene <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>∞</mi></mrow></math>, porque el crecimiento del factorial supera al numerador exponencial acotado."
    },
    {
     "mota": "testua",
     "html": "Para la serie <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>n</mi><msup><mn>4</mn><mi>n</mi></msup></mrow></mfrac></mrow></math>, poniendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> se tiene <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>4</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>2</mn></mrow></math>. El intervalo abierto es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>7</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math> se obtiene <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac></mrow></math>; en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math> también el término, con signo fijo, tiene tamaño armónico. Ambos son divergentes."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Determinar el radio de convergencia de las siguientes series de potencias y estudiar los extremos: a)  <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math>; b)  <math display=\"inline\"><mrow><mo>∑</mo><mi>n</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><msup><mi>x</mi><mi>n</mi></msup></mrow></math>; d)  <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>/</mi><msup><mn>4</mn><mi>n</mi></msup></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "7.4 Desarrollos de Taylor",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Series de Taylor"
    },
    {
     "mota": "testua",
     "html": "Un polinomio &quot;guarda&quot; sus coeficientes en las derivadas: si <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mi>n</mi></msub></mrow></math>. Esta idea se extiende a cualquier función derivable muchas veces:"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Fórmula de Taylor",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>f</mi></math> es derivable <math display=\"inline\"><mi>n</mi></math> veces en el intervalo <math display=\"inline\"><mi>I</mi></math> y <math display=\"inline\"><mrow><mi>a</mi><mo>∈</mo><mi>I</mi></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>…</mi><mo>+</mo><mfrac><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>+</mo><msub><mi>R</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> donde el <strong>resto</strong> (en la forma de Lagrange) es <math display=\"inline\"><mrow><msub><mi>R</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>, siendo <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math> algún punto entre <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>x</mi></math> (también tiene forma integral)."
      }
     ]
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
       "html": "Si <math display=\"inline\"><mi>f</mi></math> tiene derivadas de cualquier orden y <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>R</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>I</mi></mrow></math>, entonces <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> — la <strong>serie de Taylor</strong> de <math display=\"inline\"><mi>f</mi></math> en el punto <math display=\"inline\"><mi>a</mi></math> (cuando <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>, la <strong>serie de Maclaurin</strong>)."
      }
     ]
    },
    {
     "mota": "abisua",
     "titulua": "Cuidado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tener todas las derivadas no es suficiente: el resto debe tender a cero. En otro caso la serie puede ser convergente pero hacia <strong>otra</strong> función (contraejemplo clásico: <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></math>, cuya serie de Maclaurin completa es 0)."
      }
     ]
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
       "html": "Desarrollo de Maclaurin de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>: como <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math>, y el resto de Lagrange <math display=\"inline\"><mrow><msub><mi>R</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><msub><mi>c</mi><mi>n</mi></msub></msup><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi><mo>→</mo><mn>0</mn></mrow></math> para todo <math display=\"inline\"><mi>x</mi></math> fijo: <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>∞</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Series elementales de Taylor"
    },
    {
     "mota": "testua",
     "html": "La serie de Maclaurin de la exponencial es <math display=\"block\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo></mrow></math>. Todas las derivadas son <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> y el resto de Taylor tiende a cero para todo <math display=\"inline\"><mi>x</mi></math> fijo."
    },
    {
     "mota": "testua",
     "html": "Las derivadas del seno se repiten en un ciclo de cuatro pasos; por tanto <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math> La serie del coseno se obtiene derivando o usando directamente el ciclo."
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>α</mi></msup><mo>=</mo><mn>1</mn><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mi>α</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> Si <math display=\"inline\"><mi>α</mi></math> es entero no negativo, la serie se convierte en un polinomio finito."
    },
    {
     "mota": "testua",
     "html": "Las sustituciones directas dan <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo></mrow></math> y <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> [CORREGIDO: en el último ejemplo del papel la razón es <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>, no <math display=\"inline\"><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.]"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie de Taylor de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando el polinomio de Taylor y la <strong>periodicidad de orden cuatro de las derivadas</strong>, se construye la serie completa de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Polinomio de Taylor y patrón de las derivadas"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mi>n</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><msup><mi>x</mi><mi>k</mi></msup><mrow><mi>k</mi><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las derivadas de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> son <strong>periódicas de periodo cuatro</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>,</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo>,</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>,</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi></mrow></math>), y en <math display=\"inline\"><mn>0</mn></math> se repiten <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Serie: solo potencias impares"
    },
    {
     "mota": "testua",
     "html": "Los términos de índice par se anulan; los impares alternan <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>, por lo que quedan <strong>solo potencias impares</strong> con signo alternado:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mrow><mn>7</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Coherencia: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> es una función <strong>impar</strong>, y su serie de Taylor solo puede tener <strong>potencias impares</strong> —la paridad de la función determina la de la serie—. Serie de Maclaurin exacta.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>NEWTON2_0045</code>, páginas 88-89; &quot;CÁLCULO NEWTON&quot;). <strong>Mitad de cálculo</strong> (página 89): <strong>serie de Taylor</strong> de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> (periodicidad de orden cuatro de las derivadas <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>; solo potencias impares; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>). El <strong>bloque de álgebra de la izquierda</strong> (determinante: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, matrices semejantes) está en el apartado <code>03</code>. ⚠ En un término intermedio podía leerse <math display=\"inline\"><mrow><msup><mi>x</mi><mn>7</mn></msup><mi>/</mi><mn>7</mn></mrow></math>, pero es <math display=\"inline\"><mrow><mn>7</mn><mi>!</mi></mrow></math> (coherente con los demás). Catorce resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_alg_p088.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejercicio resuelto (desarrollo correcto)"
    },
    {
     "mota": "testua",
     "html": "Calcular la serie de Taylor de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>4</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mfrac></mrow></math> en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y el intervalo de convergencia."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calculando las derivadas una a una (desarrolladas hasta orden seis en la resolución del usuario) se hace visible el patrón: todas las derivadas de orden impar son 0 en el origen (porque <math display=\"inline\"><mi>f</mi></math> es par), y <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mn>3</mn></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mn>3</mn><mn>2</mn></msup><msup><mn>2</mn><mn>5</mn></msup></mfrac><mo>,</mo><mi>…</mi></mrow></math> De forma más sistemática, puede usarse la serie binomial: <math display=\"block\"><mrow><mfrac><mn>1</mn><msqrt><mrow><mn>4</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mn>2</mn><mi>n</mi></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mn>2</mn><mi>n</mi></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mn>2</mn><mo>⋅</mo><msup><mn>16</mn><mi>n</mi></msup></mrow></mfrac></mrow></math> (solo coeficientes pares). Convergencia: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>2</mn></mrow></math> — el radio llega hasta las singularidades (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>), no más allá. Como comprobación, los primeros términos son <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup></mrow><mn>256</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math>, de acuerdo con los valores de las derivadas."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usar las series de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> para calcular lo siguiente: a)  <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>x</mi></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math>; b)  <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi></mrow></math> con tres decimales (integrando término a término)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demostrar <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> usando el producto completo de series. Comprobar los cuatro primeros órdenes, después el coeficiente general, y explicar por qué la unicidad de las series de potencias da la identidad en el intervalo de convergencia."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "diario 2 de calculo marzo 2013, 0001-0020",
     "xehetasuna": "C2_L01: transcripción literal verificada del cuaderno manuscrito de cálculo; correcciones y comprobaciones matemáticas en capas separadas",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "diario 1 de calculo ene 2013, 0005-0024",
     "xehetasuna": "C1_L03: transcripción literal verificada del cuaderno manuscrito de cálculo; correcciones y comprobaciones matemáticas en capas separadas",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "diario 1 de calculo ene 2013, 0025-0026",
     "xehetasuna": "C1_L04: transcripción literal verificada del cuaderno manuscrito de cálculo; correcciones y comprobaciones matemáticas en capas separadas",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "diario 2 de calculo marzo 2013, 0021-0040",
     "xehetasuna": "C2_L02: transcripción literal verificada del cuaderno manuscrito de cálculo; correcciones y comprobaciones matemáticas en capas separadas",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "diario 2 de calculo marzo 2013, IMG_2026_07_28_02_47_33S.jpg",
     "xehetasuna": "C2_0041: transcripción literal verificada de la teoría manuscrita sobre convergencia de series de funciones y el criterio M de Weierstrass",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 1,
   "izenburua": "Del libro de soluciones (KDI): Sucesiones de funciones y series de funciones",
   "blokeak": []
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Ejercicio 62 — Naturaleza de la serie de potencias <math display=\"inline\"><mrow><mo>∑</mo><mfrac><msup><mi>n</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mi>n</mi></msup></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math> (Stirling + d&#x27;Alembert + Raabe)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial; arriba a la izquierda, en azul, &quot;JOSERRA?&quot; — marca para preguntar al profesor.) Estudiar la naturaleza de la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>n</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mi>n</mi></msup></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Stirling</strong>  (en rojo): <math display=\"inline\"><mrow><mi>n</mi><mi>!</mi><mo>≈</mo><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><mo>⋅</mo><msup><mi>n</mi><mi>n</mi></msup><mo>⋅</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></mrow></math>. Sustituyendo: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>n</mi><mi>n</mi></msup><mrow><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><mo>⋅</mo><msup><mi>n</mi><mi>n</mi></msup><mo>⋅</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo>⋅</mo><msup><mi>e</mi><mi>n</mi></msup></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>D&#x27;Alembert:</strong> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><msup><mi>x</mi><mi>n</mi></msup><mo>⋅</mo><mi>x</mi></mrow><mrow><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><msqrt><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mrow></mfrac><mo>⋅</mo><mfrac><mrow><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><msqrt><mi>n</mi></msqrt></mrow><msup><mi>x</mi><mi>n</mi></msup></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>x</mi><msqrt><mi>n</mi></msqrt></mrow><msqrt><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mfrac><mo>=</mo><mi>x</mi><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msqrt><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></msqrt><mo>=</mo><mi>x</mi></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math> convergente; <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>1</mn></mrow></math> divergente; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> duda."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: Raabe</strong>  (en rojo): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <em>&quot;Como <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></math> tiende a <math display=\"inline\"><mn>1</mn></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></mrow></math> tiende hacia <math display=\"inline\"><mn>0</mn></math>; por tanto&quot;</em>  (infinitésimo del logaritmo &quot;aplicado en el límite&quot;: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>u</mi><mo>∼</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">ln</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">ln</mi><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y de nuevo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>∼</mo><mi>u</mi><mo>−</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>−</mo><mi>n</mi></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>n</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&lt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> DIBERGENTEA </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Conclusión (en el cuaderno): <math display=\"block\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> KONBERGENTEA</mtext></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> DIBERGENTEA </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "El cuaderno escribe <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para la convergencia; como serie de potencias, estrictamente sería <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> (para <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>−</mi><mn>1</mn></mrow></math> la serie de valores absolutos es divergente, pero la propia serie alternada es convergente por Leibniz — ese estudio no está en la página). Se ha transcrito tal como está."
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
         "html": "<math display=\"block\"><mrow><mo>∑</mo><mfrac><msup><mi>n</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi><msup><mi>e</mi><mi>n</mi></msup></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>∼</mo><mo>∑</mo><mfrac><msup><mi>x</mi><mi>n</mi></msup><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt></mfrac><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konb. </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&lt;</mo><mn>1</mn><mrow><mtext mathvariant=\"normal\">-erako, dib. </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>≥</mo><mn>1</mn><mrow><mtext mathvariant=\"normal\">-erako </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Ejercicio 70 — (64)  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math>: campo de convergencia (final del 2012-05-29)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Final del 2012-05-29, ejercicio 64.) Hallar el campo de convergencia de la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math>. (Nota de cabecera: <em>&quot;puede alternar; se dan los valores negativos de este <math display=\"inline\"><mi>x</mi></math>...&quot;</em>)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>d&#x27;Alembert</strong>  (fórmula en rojo: <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>k</mi></mrow></math>; <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>1</mn></mrow></math> convergente, <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>1</mn></mrow></math> divergente, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow></math> duda): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mfrac><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mn>9</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mfrac><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mn>9</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mn>9</mn></mfrac><mo>⋅</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>⋅</mo><mfrac><mn>1</mn><mn>9</mn></mfrac></mrow></math> En palabras (en euskera en el cuaderno): <em>&quot;<math display=\"inline\"><mi>k</mi></math> debe ser menor que uno para ser convergente según el criterio de d&#x27;Alembert&quot;</em>."
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 2:</strong> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mfrac><mn>1</mn><mn>9</mn></mfrac><mo>&lt;</mo><mn>1</mn><mo>⇝</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&lt;</mo><mn>9</mn><mo>→</mo><mi>−</mi><msqrt><mn>9</mn></msqrt><mo>&lt;</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>&lt;</mo><msqrt><mn>9</mn></msqrt><mo>⇝</mo><mi>−</mi><mn>3</mn><mo>&lt;</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>&lt;</mo><mn>3</mn><mo>⇝</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>6</mn></mrow></math> (&quot;sumamos 3 a ambos lados&quot; en azul)."
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 3 — extremos.</strong>  <em>&quot;No sabemos si este campo de convergencia incluye o no <math display=\"inline\"><mn>0</mn></math> ó al <math display=\"inline\"><mn>6</mn></math>; los sustituiremos, pues, en la serie, y luego comparamos con la armónica.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "(3A)  <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mi>n</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>3</mn><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>⋅</mo><mfrac><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> (nota al margen: <em>&quot;vemos que el signo negativo no dará problema porque la potencia es par; podemos eliminarlo&quot;</em>). Enmarcado en rojo el criterio de la serie armónica: <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mn>1</mn><msup><mi>n</mi><mi>q</mi></msup></mfrac></mrow></math>: <math display=\"inline\"><mrow><mi>q</mi><mo>&gt;</mo><mn>1</mn></mrow></math> convergente, <math display=\"inline\"><mrow><mi>q</mi><mo>≤</mo><mn>1</mn></mrow></math> divergente. <em>&quot;Lo que pasa es que la serie se ha reducido a una armónica; de hecho, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mn>1</mn></mrow></math> es divergente, por lo que no podemos incluir <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "(3B)  <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>6</mn></mrow></math>: <math display=\"inline\"><mrow><mo>∑</mo><mfrac><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math> — <em>&quot;esta serie es la misma que 4, por lo que no podemos incluir <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>6</mn></mrow></math>.&quot;</em>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SOLUZIOA: konbergentzia-eremua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> muturrik gabe </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Ejercicio 84 — (pregunta 3, 2013-04-17)  <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><msup><mi>n</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math>: radio de convergencia con Stirling",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Examen del 2013-04-17, pregunta 3.) Hallar el campo de convergencia de la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><msup><mi>n</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Stirling (escrito arriba): <math display=\"inline\"><mrow><mi>n</mi><mi>!</mi><mo>≃</mo><msup><mi>n</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt></mrow></math>: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msup><mi>n</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt></mrow><msup><mi>n</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><msup><mi>e</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>→</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><msup><mi>e</mi><mi>n</mi></msup></mfrac></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><msqrt><mrow><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><msup><mi>e</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mfrac><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><msup><mi>e</mi><mi>n</mi></msup></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>e</mi><mi>n</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>e</mi></mfrac></mrow></math> (en el cuaderno la fracción intermedia está escrita directamente como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>e</mi><mi>n</mi></mrow></mfrac></mrow></math> — el cociente de raíces <math display=\"inline\"><mrow><msqrt><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac></msqrt><mo>→</mo><mn>1</mn></mrow></math> introducido tácitamente; mismo resultado). Por tanto <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>e</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>e</mi><mo>,</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Dibujo: recta con marcas en <math display=\"inline\"><mrow><mi>−</mi><mi>e</mi></mrow></math> y <math display=\"inline\"><mi>e</mi></math>, &quot;uniformemente convergente&quot; en los intervalos cerrados con una línea ondulada."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo>∑</mo><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><msup><mi>n</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mi>e</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>e</mi><mo>,</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Ejercicio 85 — (64, 2012-04-29)  <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math>: PRIMERA pasada del radio",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Hoja de cuaderno del 2012-04-29, la 64 — la misma serie del ejercicio 70, pasada anterior.) Hallar el radio de convergencia de <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mn>9</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></mfrac></mrow></math> En el cuaderno (cociente escrito al revés, inverso del límite de <math display=\"inline\"><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac></math>): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup><mo>⋅</mo><mn>9</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>9</mn></mfrac></mrow></math> y de ahí escribe &quot;<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>9</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;."
      },
      {
       "mota": "oharra",
       "titulua": "Corrección (el exponente es 2n)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "En esta pasada ha calculado el radio de los coeficientes (respecto de <math display=\"inline\"><mi>u</mi></math>, tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>): <math display=\"inline\"><mrow><msub><mi>R</mi><mi>u</mi></msub><mo>=</mo><mn>9</mn></mrow></math>. Pero como el exponente de la serie es <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi></mrow></math>, la condición es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&lt;</mo><mn>9</mn><mo>⇐</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>3</mn><mo>⇐</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — no <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>9</mn></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). La segunda pasada (ejercicio 70, final del 2012-05-29) lo hace correctamente, y también estudia los extremos: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
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
         "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> koadernoan </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>R</mi><mo>=</mo><mn>9</mn><mo>,</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"0.222em\"></mspace><mi>z</mi><mi>u</mi><mi>z</mi><mi>e</mi><mi>n</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mi>k</mi><mi>.</mi><mspace width=\"0.222em\"></mspace><mn>70</mn><mi>.</mi><mspace width=\"0.222em\"></mspace><mi>a</mi><mi>r</mi><mi>i</mi><mi>k</mi><mi>e</mi><mi>t</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Ejercicio 86 — (6.4, 2011-04-13)  <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>: campo con extremos",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Examen del 2011-04-13, 6.4.) Hallar el campo de convergencia de <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>, incluidos los extremos."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><mrow><mi>n</mi><mo>+</mo><mn>3</mn></mrow><mrow><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>⋅</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">goian </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>1</mn><mo>⋅</mo><mfrac><msup><mi>n</mi><mn>3</mn></msup><mrow><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><mi>n</mi></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eskema</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>3</mn></mrow></math>, centro <math display=\"inline\"><mn>2</mn></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Dibujo: recta con marcas en <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mn>5</mn></math>, &quot;¿incluidos?&quot;."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>5</mn></mrow></math>:</strong> <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><msup><mn>3</mn><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>∼</mo><mo>∑</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> NO CONVERGE </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> (al margen en rojo, criterio <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mn>1</mn><msup><mi>n</mi><mi>q</mi></msup></mfrac></mrow></math>: <math display=\"inline\"><mrow><mi>q</mi><mo>≤</mo><mn>1</mn></mrow></math> divergente, <math display=\"inline\"><mrow><mi>q</mi><mo>&gt;</mo><mn>1</mn></mrow></math> convergente)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:</strong> <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mn>3</mn><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> &quot;LEIBNIZ&quot;  (en rojo):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "① <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>→</mo></mrow></math>  <em>&quot;tiende a cero&quot;</em> ✓",
        "② <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>&lt;</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>? <math display=\"inline\"><mrow><mfrac><mrow><mi>n</mi><mo>+</mo><mn>3</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>≃</mo><mfrac><mi>n</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>≃</mo><mfrac><mi>n</mi><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math>: <math display=\"inline\"><mrow><mfrac><mi>n</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>&lt;</mo><mfrac><mi>n</mi><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math> ✓ — &quot;CONVERGE&quot;."
       ]
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo>∑</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Ejercicio 92 — (1)(ii)  <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></mfrac></mrow></math>: convergencia puntual y uniforme; y <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>: derivabilidad de la función suma",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Lista de sucesiones de funciones, (1)(ii) y ejercicio siguiente.)  (I) Estudiar la convergencia puntual y uniforme de la sucesión <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>. (II) Sea <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> una sucesión de funciones definida en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: (a) estudiar si <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math> son convergentes; (b) siendo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la función suma en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ¿es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> derivable en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>(I).</strong> Límite puntual (tabla al margen en rojo: <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>→</mo><mn>0</mn></mrow></math>... exactamente): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math> Dibujo: función límite de tres tramos (<math display=\"inline\"><mn>1</mn></math> en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> fuera, <math display=\"inline\"><mn>0</mn></math> en los puntos <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>, marcados con círculos huecos/llenos). <em>&quot;Por el teorema: <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> son continuas y si <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> fuera uniformemente convergente, entonces <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> continua... pero como <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es continua, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> NO es uniformemente convergente.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>(II)(a).</strong> Criterio M de Weierstrass: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math> d&#x27;Alembert a <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math>: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>&lt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <em>&quot;por tanto <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math> UNIF. CONV.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>(II)(b).</strong>  <em>&quot;Primero derivamos&quot;</em>: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mi>−</mi><msup><mn>3</mn><mi>n</mi></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mrow></math> Criterio M de nuevo (<math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>−</mi><msup><mn>3</mn><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><msup><mn>3</mn><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mfrac><msup><mn>3</mn><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea dela frogatu behar dugu: </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mfrac><msup><mn>3</mn><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><msup><mn>3</mn><mi>n</mi></msup><mo>⋅</mo><mn>3</mn><mo>⋅</mo><mi>n</mi><mi>!</mi></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>&lt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <em>&quot;Por tanto <math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math> converge uniformemente.&quot;</em> Post-it amarillo (&quot;TEOREMA 16&quot;): ① si <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math> converge a <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ② si <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> son derivables ③ si <math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math> es uniformemente convergente <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es derivable y <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math>; <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">lim</mi><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por tanto <math display=\"inline\"><mi>f</mi></math> es derivable en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> (y en todo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (I) puntualki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kasuka, EZ uniformea; </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (II) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> deribagarria, </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>−</mi><msup><mn>3</mn><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Ejercicio 93 — (6)  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac></mrow></math>: demostrar que <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es continua",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Misma lista, 6.; &quot;demuestra que <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es continua&quot;.) Sea <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>. Demostrar que <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> existe y es continua."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>① ¿<math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac></mrow></math> uniformemente convergente?</strong> Criterio M: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><msup><mi>n</mi><mn>3</mn></msup></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>=</mo><mn>3</mn><mo>&gt;</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <em>&quot;por tanto, por el teorema de Weierstrass, <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac></mrow></math> uniformemente convergente.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>② ¿<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> derivable?</strong>  Sí: <math display=\"block\"><mrow><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>③ ¿<math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math> uniformemente convergente?</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>∑</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea; beraz, Weierstrass-en irizpidearen arabera, </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki konbergentea. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "&quot;TEOREMA 16&quot;  (en rojo): como se cumplen las tres condiciones, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es derivable y <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">lim</mi><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math> Como esa misma serie es uniformemente convergente y sus términos son continuos, <math display=\"inline\"><msup><mi>f</mi><mo>′</mo></msup></math> es continua."
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "En la última línea del cuaderno está escrito <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> (<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> en el denominador, en lugar de <math display=\"inline\"><msup><mi>n</mi><mn>2</mn></msup></math>) — mero lapsus de escritura, todas las líneas anteriores llevan <math display=\"inline\"><msup><mi>n</mi><mn>2</mn></msup></math>."
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
         "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> jarraitua </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Ejercicio 94 — <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>: convergencia uniforme por Weierstrass",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial; hoja de &quot;propiedades de la convergencia uniforme&quot;, continuación de 92–93 de c3.) Estudiar la convergencia uniforme de la serie de funciones <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>, usando el criterio de Weierstrass."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "En la mitad superior de la hoja, en rosa/rojo,  <strong>lista de propiedades</strong>  (por puntos, transcrita):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<em>Convergencia uniforme de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> continuas IMPLICA continuidad de <math display=\"inline\"><mi>f</mi></math></em>  (subrayado en verde).",
        "<em>Convergencia uniforme de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> derivables NO implica derivabilidad de <math display=\"inline\"><mi>f</mi></math>.</em>",
        "<em>Convergencia uniforme de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> continuas implica que</em> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>",
        "<em>Si <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es uniformemente convergente, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es derivable:</em> <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">lim</mi><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Enmarcado en rojo (cuadro grande): <em>&quot;si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> NO es continuo, <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> NO converge uniformemente&quot;</em>."
       ]
      },
      {
       "mota": "testua",
       "html": "Bajo la línea azul discontinua, ejercicio: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>a</mi></mrow></msup></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>D&#x27;Alembert</strong>  con la mayorante <math display=\"inline\"><mrow><mo>∑</mo><mi>n</mi><mi>/</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>a</mi></mrow></msup></mrow></math> (escrito &quot;D&#x27;ALEMBERT&quot; a la izquierda): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi></mrow></msup></mfrac><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>a</mi></mrow></msup></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>n</mi><mi>a</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi></mrow></msup><mo>⋅</mo><mi>n</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mi>a</mi></msup><mspace width=\"0.167em\"></mspace><mi>n</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>e</mi><mi>a</mi></msup></mfrac><mo>&lt;</mo><mn>1</mn></mrow></math> (enmarcado). <em>&quot;Convergente por el criterio de d&#x27;Alembert. <math display=\"inline\"><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac></math> converge uniformemente.&quot;</em>"
      },
      {
       "mota": "oharra",
       "titulua": "Comentario analítico (intervalo)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>a</mi></mrow></msup></mrow></math> la cota solo se cumple cuando <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mi>a</mi></mrow></math>; por tanto lo probado es la convergencia uniforme en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> cualquiera (<math display=\"inline\"><mrow><mfrac><mn>1</mn><msup><mi>e</mi><mi>a</mi></msup></mfrac><mo>&lt;</mo><mn>1</mn><mo>⇐</mo><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>). La hoja no escribe el intervalo explícitamente; lo delimita la propia aparición de <math display=\"inline\"><mi>a</mi></math>."
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
         "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtext mathvariant=\"normal\">-n, </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∀</mo><mi>a</mi><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Weierstrass, </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Ejercicio 95 — <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac></mrow></math>: convergencia uniforme en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (p. 69)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Referencia &quot;p. 69&quot; en rojo, sin fuente oficial.) Estudiar la convergencia uniforme de la sucesión de funciones <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Dos escrituras, una bajo la otra: <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>+</mo><mi>x</mi></mrow></mfrac></mrow></math> Dibujo: un haz de curvas (en color) que se acerca a la recta discontinua <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> (en rojo), pasando por el origen."
      },
      {
       "mota": "testua",
       "html": "A la derecha: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi></mrow></math> <strong>PASO 1</strong>  (en rojo): <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>PASO 2</strong>  (en rojo): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>−</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>−</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mi>x</mi><mrow><mi>n</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> <em>&quot;Como <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math> tiende a cero,&quot;</em>  <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math>  <em>converge uniformemente en</em>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (subrayado en azul)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>→</mo><mi>x</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Ejercicio 96 — P4(a): <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> uniformemente convergente en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (2014-07-03)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Examen extraordinario del 2014-07-03, P4(a): &quot;Sea <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>. Demostrar que la sucesión de funciones <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es uniformemente convergente en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.&quot;) En la misma hoja, segundo punto: <em>&quot;Demostrar que la sucesión <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> converge uniformemente.&quot;</em>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>PASO 1</strong>  (en rojo): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>PASO 2</strong>  (en rojo): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> &quot;¿cómo encontramos el </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>a</mi><mi>n</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> superior y convergente?&quot; </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Al margen en rojo, dos ojos dibujados (&quot;OJO&quot;): <em>&quot;Haz el análisis para asegurarte de que es un máximo&quot;</em>."
      },
      {
       "mota": "testua",
       "html": "<em>&quot;Podemos derivar&quot;:</em> <math display=\"block\"><mrow><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>−</mo><mi>n</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>n</mi><mi>x</mi></mrow><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zero denean </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> enmarcado, con una estrellita). <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mo>⋅</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac></mrow></math> y cuando <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math> <em>&quot;tiende a cero&quot;</em>  (con flecha)  <math display=\"inline\"><mo>⇒</mo></math>  <strong>converge uniformemente</strong>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>→</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sup</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac><mo>→</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Ejercicio 97 — <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>: convergente hacia 0 en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, pero NO uniformemente",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Misma hoja, tercer punto, con dos ojos en rojo.)  <em>&quot;Justificar que <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> converge a <math display=\"inline\"><mn>0</mn></math> en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> Pero la convergencia no es uniforme.&quot;</em>  (subrayado en rojo)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>PASO 1</strong>  (en rojo): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>PASO 2</strong>  (en rojo): <em>&quot;si escogemos cuidadosamente&quot;</em> <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>⋅</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>π</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>n</mi></mrow></mfrac></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mo>⇒</mo></math>  <strong>NO es uniformemente convergente</strong>."
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Línea intermedia del cuaderno, literalmente: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>⋅</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> en el numerador, y en el denominador <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>π</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>n</mi></mrow></mfrac><mo>→</mo><mn>1</mn></mrow></math>; por tanto el límite es <math display=\"inline\"><mn>1</mn></math>, no <math display=\"inline\"><mn>0</mn></math> — negación de la convergencia uniforme por el criterio de sucesiones de Cauchy (eligiendo una <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> adecuada)."
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
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>→</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mtext mathvariant=\"normal\">-n, baina EZ uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>→</mo><mn>1</mn><mo>≠</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Ejercicio 98 — <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math>: convergencia uniforme en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial.)  <em>&quot;Demostrar esto <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math></em>  (a)  <em>converge uniformemente en <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y que si</em>  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math>  <em>entonces</em>  <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>x</mi><mn>6</mn></msup><mo>+</mo><mi>…</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>; (b)  <em>calcular <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y probar</em>  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>.&quot;"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>(a) Campo de convergencia.</strong> Serie escrita como sumatorio: <math display=\"block\"><mrow><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mi>x</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>t</mi><mi>n</mi></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math> al margen <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>  (cambio de variable). Esto es una serie de potencias de tipo <math display=\"inline\"><mrow><mi>x</mi><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>; radio: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>3</mn></mrow></mfrac></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>3</mn></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>1</mn></mrow></math> <em>&quot;Converge uniformemente&quot;</em>  <math display=\"inline\"><mrow><mi>t</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>−</mo><mn>1</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>0</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ✓ (&quot;ok&quot; en rojo al margen)."
      },
      {
       "mota": "testua",
       "html": "<strong>Derivada.</strong> <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>x</mi><mn>6</mn></msup><mo>+</mo><msup><mi>x</mi><mn>8</mn></msup><mo>−</mo><mi>…</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><mi>…</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> En rojo, la fórmula de la serie geométrica: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mn>1</mn></msub><mo>⋅</mo><msup><mi>r</mi><mi>n</mi></msup><mo>=</mo><mfrac><msub><mi>a</mi><mn>1</mn></msub><mrow><mn>1</mn><mo>−</mo><mi>r</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>(b)  Recuperación de <math display=\"inline\"><mi>f</mi></math>.</strong> Enmarcado en rojo: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">arctan</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>x</mi></msubsup><mspace width=\"1.0em\"></mspace><mo>⇒</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">arctan</mi><mn>0</mn><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> azpian</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> Al margen en rojo: <em>&quot;- ¡Dominio de la función arctan!&quot;</em> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "La fórmula roja de la serie geométrica está escrita con el índice <math display=\"inline\"><msub><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></msub></math> (<math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> primer término); en el uso empieza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math> — mismo resultado. Y se admite que el valor <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math> también vale para la serie en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> (allí es convergente por el criterio de Leibniz; el cuaderno no lo explicita, sustituye directamente)."
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
         "html": "<math display=\"block\"><mrow><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mi>…</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Ejercicio 99 — <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>: desarrollo en potencias de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial; &quot;desarrollar en potencias de <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>&quot;.) Desarrollar la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math> en potencias de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Fracciones simples:</strong> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>A</mi><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mfrac><mi>B</mi><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mo>−</mo><mi>B</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Llevar el centro a <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>:</strong> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Suma de dos series geométricas:</strong> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>1</mn></mrow><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Comentario analítico (campo de validez)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "La hoja no escribe el campo de convergencia; las dos series geométricas juntas exigen <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math> (la más estricta). El desarrollo es correcto: comprobado que el coeficiente de orden <math display=\"inline\"><mi>n</mi></math> es <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mn>3</mn><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>, p. ej. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>, y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><mn>4</mn><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> ✓."
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
         "html": "<math display=\"block\"><mrow><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Ejercicio 100 — a)  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac></mrow></math>: intervalo de convergencia y convergencia uniforme (criterio <math display=\"inline\"><mi>M</mi></math>)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial, con la etiqueta &quot;a)&quot;.) Estudiar la convergencia y la convergencia uniforme de la serie <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>D&#x27;Alembert:</strong> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mspace width=\"0.167em\"></mspace><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></msup><mo>⋅</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup><mi>x</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> <em>&quot;Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mo>⇐</mo><mi>−</mi><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math> la serie es convergente.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>Extremos:</strong>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<em>&quot;Para <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>:&quot;</em>  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac></mrow></math>  <em>es convergente</em>  (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mo>&gt;</mo><mn>1</mn></mrow></math>).",
        "<em>&quot;Para <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:&quot;</em>  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac></mrow></math>  <em>es alternada convergente.</em> <em>&quot;Es decir, la serie dada es convergente en el intervalo&quot;</em>  <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>1</mn><mo>⇐</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Weierstrass:</strong>  <em>&quot;para todo <math display=\"inline\"><mi>x</mi></math> tal que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>, se cumple&quot;</em> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msup><mi>x</mi><mi>n</mi></msup><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>n</mi></msup></mrow><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mo>≤</mo><mfrac><mn>1</mn><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eligiendo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> se observa que </mtext><mspace width=\"0.333em\"></mspace></mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>M</mi><mi>n</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> es conv. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <em>&quot;Así, la serie dada puede hacerse uniforme, según el criterio <math display=\"inline\"><mi>M</mi></math>, en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>.&quot;</em>"
      },
      {
       "mota": "oharra",
       "titulua": "Borrador al pie de la hoja",
       "blokeak": [
        {
         "mota": "testua",
         "html": "En la parte inferior de la hoja, a lápiz muy tenue, hay unos borradores de definiciones (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">lim</mi><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi></mrow></math>) — intentos sueltos de la definición de convergencia uniforme, sin ejercicio. Se anotan; no completan ninguna solución."
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
         "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mtext mathvariant=\"normal\">-en </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> irizpidea, </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Ejercicio 101 — Ejemplo (p. 43): convergencia de la serie de funciones <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac></mrow></math>",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Ejemplo de los apuntes propios, &quot;p. 43&quot;; en euskera.)  <em>&quot;Ejemplo. Estudiar la convergencia de la serie de funciones <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac></mrow></math>&quot;</em>  (&quot;convergencia de la serie de funciones&quot; enmarcado en rojo)."
      }
     ],
     "ebazpena": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<em>&quot;Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math>, cuando <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math> el término general no tiende a cero y, por tanto, la serie es divergente.&quot;</em>",
        "<em>&quot;Sea ahora <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>. Estudiaremos la convergencia absoluta y para ello&quot;</em> <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> <em>&quot;estudiaremos la naturaleza de la serie. Usando el criterio del cociente:&quot;</em> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>n</mi></msup><mi>/</mi><mi>n</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> <em>&quot;En consecuencia, la serie de funciones es absolutamente convergente (por tanto, convergente) cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>.&quot;</em>",
        "<em>&quot;En el caso <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> tenemos la serie numérica divergente <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math>.&quot;</em>",
        "<em>&quot;En el caso <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mi>n</mi></mfrac></mrow></math> es una serie alternada y, por el criterio de Leibniz, convergencia condicional. [Por tanto, la serie de funciones converge en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, quedando fuera <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>.]&quot;</em>"
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Límite de legibilidad",
       "blokeak": [
        {
         "mota": "testua",
         "html": "La línea final de la última frase (la anterior a los corchetes) es parcialmente ilegible en el manuscrito; el sentido se ha reconstruido por el contexto (campo de convergencia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, consecuencia directa del estudio de los extremos). Todo lo demás está literal."
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
         "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> abs. konb. </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mrow><mtext mathvariant=\"normal\">-en; </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldintzazkoa; </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> dibergentea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇒</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eremua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Ejercicio 102 — <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>: convergencia puntual y estudio de la uniformidad",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial; comparar con G3 del examen del 2011-05-18, que lleva <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> — este lleva el factor <math display=\"inline\"><msup><mi>n</mi><mn>2</mn></msup></math>.) Estudiar la convergencia de la sucesión de funciones <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<em>&quot;Necesitamos una <math display=\"inline\"><mi>x</mi></math> que no contenga <math display=\"inline\"><mi>n</mi></math> en <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math>, así que, en busca de un máximo o mínimo:&quot;</em> <math display=\"block\"><mrow><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mi>x</mi><mo>⋅</mo><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>n</mi><mn>3</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mi>n</mi><mn>3</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mo>−</mo><mi>n</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (sobre <math display=\"inline\"><mrow><msup><mi>n</mi><mn>3</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math> hay una pequeña marca de tachado, al simplificar factores comunes). <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><mn>4</mn></mrow><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>⋅</mo><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>4</mn><msup><mi>e</mi><mn>2</mn></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> &quot;no nos sirve. Tiene que [tender a] cero&quot; </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Debajo, marcado con un número &quot;8&quot;: <em>&quot;si <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>:&quot;</em> <math display=\"block\"><mrow><mfrac><mrow><mn>0</mn><mo>−</mo><mn>0</mn></mrow><mn>1</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>0</mn><mn>2</mn></msup></mrow><msup><mi>e</mi><mrow><mi>n</mi><mo>⋅</mo><mn>0</mn></mrow></msup></mfrac><mo>=</mo><mfrac><mn>0</mn><mn>1</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> &quot;sí nos sirve&quot; </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Conclusión (implícita en el cuaderno)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "El cuaderno no escribe frase de conclusión. Lectura analítica: <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">sup</mi><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>4</mn><msup><mi>e</mi><mn>2</mn></msup></mfrac><mo>↛</mo><mn>0</mn></mrow></math>, por tanto la convergencia NO es uniforme en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ese es el sentido de la nota &quot;No nos sirve, tiene que [tender a] cero&quot; (contrario al caso <math display=\"inline\"><mrow><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac><mo>→</mo><mn>0</mn></mrow></math> del ejercicio 96). La última línea (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>) solo comprueba el valor en ese punto."
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
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>→</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> puntualki, baina EZ uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sup</mi><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>4</mn><msup><mi>e</mi><mn>2</mn></msup></mfrac><mo>↛</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Ejercicio 108 — ① <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> triangulares en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>: convergencia uniforme de <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math> (planteamiento)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial; en la cabecera &quot;Silvia Fernández:&quot; — etiqueta de origen del enunciado.)  <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, cuya gráfica es un triángulo de base en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"0.167em\"></mspace><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> y altura <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math> (fuera <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>). Pregunta (en la hoja): ¿<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? y <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub></mrow></math>  <em>&quot;conv. unif. en&quot;</em>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La hoja es un borrador a lápiz (planteamiento, no solución cerrada). Elementos presentes, literalmente:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Dos dibujos de triángulos: base de <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></math> a <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math>, vértice a altura <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math>; un dibujo de ejes con marcas <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>,</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo>,</mo><mfrac><mn>3</mn><mi>n</mi></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mn>1</mn></mrow></math>.",
        "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>↦</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>.",
        "Área (cálculo de la integral, como área del triángulo): <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math>"
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Corrección",
       "blokeak": [
        {
         "mota": "testua",
         "html": "El área del triángulo es <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> oinarria </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> altuera</mtext></mrow></mrow></math>; en la propia hoja, a la derecha, está corregida en la línea siguiente: ha escrito <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> con la marca del vértice (y ha empezado a plantear la ecuación de la recta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>n</mi></mrow></math> a partir de dos puntos: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y el vértice a altura <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math>). Lo correcto analíticamente: área <math display=\"inline\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>. Ni lo uno ni lo otro cierra una conclusión en la hoja."
        }
       ]
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "La resolución se interrumpe ahí: el argumento de la convergencia uniforme (p. ej. <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">sup</mi><mi>x</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>→</mo><mn>0</mn></mrow></math> con Weierstrass, por ser sumas finitas) NO está desarrollado en la hoja."
       ]
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> triangeluarrak: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">sup</mi><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">planteamendua; itxi gabe jatorrizkoan</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Ejercicio 109 — (9)  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mi>α</mi></msup></mfrac></mrow></math>  en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: Weierstrass y Dirichlet",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial, numerado &quot;(9)&quot;.) Estudiar la convergencia uniforme de la serie de funciones <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mi>α</mi></msup></mfrac></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Criterio de Weierstrass</strong>  (escrito en la hoja, literalmente): <em>&quot;Criterio de Weierstrass: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math>  <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>X</mi></mrow></math> y la serie <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math> convergente <math display=\"inline\"><mrow><mo>⇒</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> converge uniformemente.&quot;</em> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mi>α</mi></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><mn>1</mn><msup><mi>n</mi><mi>α</mi></msup></mfrac><mo>=</mo><msub><mi>M</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><msup><mi>n</mi><mi>α</mi></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>α</mi><mo>&gt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> C</mtext></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>α</mi><mo>≤</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> D</mtext></mrow></mtd></mtr></mtable></mrow></mrow></math> <em>&quot;Para <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>1</mn></mrow></math>, según el criterio de Weierstrass, la serie se transforma igual.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>Caso <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≤</mo><mn>1</mn></mrow></math></strong>  (enmarcado: <em>&quot;para <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≤</mo><mn>1</mn></mrow></math>&quot;</em>): <em>&quot;para productos&quot;</em>  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con dos condiciones (criterio de Dirichlet):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "① <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>f</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>M</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>−</mi><mi>M</mi><mo>≤</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>f</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>M</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>X</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>;",
        "② <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>X</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math>. En el caso: ⓪ (junto a un tachón)  <math display=\"inline\"><mrow><mfrac><mn>1</mn><msup><mi>n</mi><mi>α</mi></msup></mfrac><mo>→</mo><mn>0</mn></mrow></math>  <em>&quot;uniformemente&quot;</em>  (monótona), y lo que hay que acotar: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>M</mi></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Acotación de la suma</strong>  (hoja ②, mediante complejos): <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>x</mi></mrow></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y sumando/restando  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>x</mi></mrow></msup></mrow><mrow><mn>2</mn><mi>i</mi></mrow></mfrac></mrow></math>. Entonces: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mn>2</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>…</mi><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>…</mi><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Es una serie geométrica, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>i</mi><mn>2</mn><mi>x</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>r</mi><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><msup><mi>r</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>S</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>⋅</mo><mi>r</mi><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub></mrow><mrow><mi>r</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>⋅</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> En la parte superior de la tercera hoja, ayuda de factorización (con una división en forma de tabla <math display=\"inline\"><mrow><msup><mi>r</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo>:</mo><mi>r</mi><mo>−</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>+</mo><msup><mi>r</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><mi>…</mi><mo>+</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup><mo>+</mo><mi>…</mi><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Estado en el original",
       "blokeak": [
        {
         "mota": "testua",
         "html": "La acotación se queda ahí (por factorización la suma se escribe como <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup><mo>+</mo><mi>…</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>); la cota explícita <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>M</mi></mrow></math> (del tipo <math display=\"inline\"><mfrac><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac></math>) no está cerrada en la hoja. La conclusión (por Dirichlet, en el caso <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≤</mo><mn>1</mn></mrow></math>, en intervalos cerrados fuera de los entornos de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi></mrow></math>) no está escrita — el planteamiento se ha transcrito hasta donde llega."
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
         "html": "<math display=\"block\"><mrow><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mi>α</mi></msup></mfrac><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>&gt;</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mtext mathvariant=\"normal\">-n (Weierstrass); </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≤</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Dirichlet-en bidez (bornaketa planteatua) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Ejercicio 110 — (11)  <math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>: subsucesión uniformemente convergente",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Sin fuente oficial; en la cabecera, etiquetas &quot;Silvia Fdez — Hoffman&quot;.)  Sucesión <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊂</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, con <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> integrables. Definir <math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>b</mi></mrow></math>. Demostrar que <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> tiene una subsucesión uniformemente convergente."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Antes, el cuadro de teoría (la parte &quot;(11)&quot; de la hoja anterior, literalmente): <em>&quot;función integrable en el sentido de Riemann: <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>ε</mi></mrow></math>&quot;</em>; particiones <math display=\"inline\"><mrow><mi>P</mi><mo>,</mo><msup><mi>P</mi><mo>′</mo></msup></mrow></math>, <em>&quot;<math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math> más fina que <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mrow><mi>P</mi><mo>⊂</mo><msup><mi>P</mi><mo>′</mo></msup></mrow></math>&quot;</em>; <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><mrow><mo>∀</mo><mi>P</mi><mo>,</mo><mi>Q</mi></mrow></math>  particiones de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> (<math display=\"inline\"><mi>L</mi></math>  = ínf, <math display=\"inline\"><mi>U</mi></math>  = sup); y si <math display=\"inline\"><mrow><mi>P</mi><mo>⊂</mo><msup><mi>P</mi><mo>′</mo></msup></mrow></math>: <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><msup><mi>P</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><msup><mi>P</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (dibujos: <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>a</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>b</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msup><mi>P</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>a</mi><mo>,</mo><mi>d</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>e</mi><mo>,</mo><mi>b</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> con rectas divididas)."
      },
      {
       "mota": "testua",
       "html": "Resolución (segunda hoja):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>; <em>&quot;<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> integrable <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es continua <math display=\"inline\"><mrow><mi>a</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>b</mi></mrow></math>&quot;</em>. (Dibujo: curva <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con cotas <math display=\"inline\"><mrow><mi>m</mi><mo>≤</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>M</mi></mrow></math>, y debajo <math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.)",
        "<em>&quot;Hay que demostrar que <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> tiene una subsucesión que converge uniformemente.&quot;</em>",
        "Elección de la subsucesión (al pie de la primera hoja): <em>&quot;sea <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊂</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>&quot;</em>, por ejemplo <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (conjuntos de índices: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>); <math display=\"inline\"><mrow><msub><mi>G</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>  <math display=\"inline\"><mo>→</mo></math>  <em>&quot;continua&quot;</em>.",
        "<em>&quot;Sea esta subsucesión <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>b</mi></mrow></math>Habrá que demostrar. <math display=\"inline\"><mrow><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo>∃</mo><msub><mi>n</mi><mi>ε</mi></msub></mrow></math> tal que <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mi>ε</mi></msub><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>F</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>.&quot;</em>",
        "<em>&quot;Como <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊂</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  <math display=\"inline\"><mo>→</mo></math>  <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>≤</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>  <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>; entonces <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>F</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>ε</mi></mrow></math>, es decir <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>F</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, lo que se cumplirá por su naturaleza <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> continua.&quot;</em>"
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Comentario crítico (estado del argumento)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "El argumento transcrito es de nivel borrador y no es una demostración rigurosa: tomar la subsucesión <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> no asegura por sí solo la uniformidad (la demostración estándar exige la acotación uniforme de <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math>, con lo cual las <math display=\"inline\"><msub><mi>F</mi><mi>n</mi></msub></math> son uniformemente acotadas y equicontinuas y se aplica Ascoli–Arzelà). El camino del original se ha dejado tal cual, sin completar nada: en la hoja del usuario la conclusión se cierra con la frase &quot;lo que se cumplirá por ser continua&quot;."
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
         "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> jarraituak; </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> subsegida hautagaia (zirriborroa, froga itxi gabe) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  }
 ]
};
