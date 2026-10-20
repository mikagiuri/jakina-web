/* JAKINA · kapitulua «B2 - Aplikazio linealak eta diagonalizazioa - I» (01ma_03diagonalizazioa), desde edicion2/kapituluak/01ma_03diagonalizazioa/01ma_03diagonalizazioa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01ma_03diagonalizazioa"] = {
 "gakoa": "01ma_03diagonalizazioa",
 "titulua": "JAKINA - B2 - Aplicaciones lineales y diagonalización - I",
 "azala": "B2 - Aplicaciones lineales y diagonalización - I",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/01ma_03diagonalizazioa/01ma_03diagonalizazioa.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M11",
   "izenburua": "Aplicaciones lineales y diagonalización",
   "maila": "HERRAMIENTAS"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Construir la matriz de una aplicación lineal y calcular su núcleo y su imagen.",
    "Calcular autovalores y autovectores.",
    "Diagonalizar una matriz, y las simétricas de forma ortogonal.",
    "Reconocer los modos normales como un problema de autovalores."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M10 — Matrices y determinantes; M09 — Espacios vectoriales"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "JAKINAk idatzia",
   "xehetasuna": "no había teoría en el corpus; continuación del capítulo 1 de M09 (cap. 2)",
   "hizkuntza": "eu"
  },
  {
   "mota": "testua",
   "html": ".update(1)"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Aplicaciones lineales y diagonalización",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El capítulo anterior estudió los espacios vectoriales: la estructura en sí. Este estudia las <strong>funciones que respetan</strong> esa estructura —las aplicaciones lineales— y su herramienta más potente: los autovalores y autovectores. Para la física, este capítulo es la cumbre del álgebra lineal. Los modos normales de oscilaciones acopladas, los ejes principales de inercia del sólido rígido y los observables de la mecánica cuántica son, en el fondo, el mismo problema: una <strong>diagonalización</strong>."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Aplicaciones lineales",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Aplicación lineal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mi>W</mi></math> espacios vectoriales sobre un mismo cuerpo IK. Una aplicación <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> es <strong>lineal</strong> si, para cualesquiera <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi></mrow></math> y <math display=\"inline\"><mrow><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><mspace width=\"0.167em\"></mspace><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las dos condiciones juntas se resumen así: <math display=\"inline\"><mi>T</mi></math> transforma combinaciones lineales en combinaciones lineales, <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Consecuencia inmediata: <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn mathvariant=\"bold\">𝟎</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> siempre."
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
       "html": "Son lineales, entre otras: (i) los giros del plano alrededor del origen; (ii) las proyecciones: <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; (iii) la derivación en el espacio de polinomios: <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>p</mi><mo>′</mo></msup></mrow></math>, pues <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mi>q</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mo>=</mo><msup><mi>p</mi><mo>′</mo></msup><mo>+</mo><msup><mi>q</mi><mo>′</mo></msup></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>p</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mo>=</mo><mi>k</mi><msup><mi>p</mi><mo>′</mo></msup></mrow></math>. <strong>No</strong> es lineal <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>  la traslación: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz de una aplicación lineal"
    },
    {
     "mota": "testua",
     "html": "En dimensión finita, una aplicación lineal queda completamente determinada por las imágenes de los vectores de una base. En efecto, si <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es una base y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub></mrow></math>, entonces la linealidad"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da: conociendo todos los <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, se conoce <math display=\"inline\"><mi>T</mi></math> por completo."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Matriz de la aplicación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dada una aplicación lineal <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> y una base <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, la matriz de <math display=\"inline\"><mi>T</mi></math> en la base <math display=\"inline\"><mi>B</mi></math> es <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, donde la <strong>columna</strong> <math display=\"inline\"><mi>j</mi></math> son las coordenadas de <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Entonces las coordenadas de <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> son <math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math>, si <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒙</mi></math> son las de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>: aplicar la aplicación equivale a multiplicar por la matriz."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Giro en el plano",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El giro de ángulo <math display=\"inline\"><mi>θ</mi></math> alrededor del origen transforma los vectores de la base canónica así: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>,</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por tanto, su matriz"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mi>θ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "es. La composición es el producto de matrices: dos giros seguidos, <math display=\"inline\"><mrow><msub><mi>R</mi><mi>α</mi></msub><msub><mi>R</mi><mi>β</mi></msub><mo>=</mo><msub><mi>R</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></msub></mrow></math> — y desarrollar esa igualdad da, de paso, las fórmulas de adición del coseno y del seno gratis."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Núcleo, imagen y rango"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Núcleo e imagen",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dada una aplicación lineal <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi><mo>:</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math> es un subespacio de <math display=\"inline\"><mi>V</mi></math>, y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math> lo es de <math display=\"inline\"><mi>W</mi></math>. La dimensión de <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math> se llama <strong>rango</strong> de <math display=\"inline\"><mi>T</mi></math>: <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El núcleo mide la inyectividad: <math display=\"inline\"><mi>T</mi></math> es inyectiva si y solo si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn mathvariant=\"bold\">𝟎</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. En efecto, si <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, la linealidad implica <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Teorema de las dimensiones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> es lineal y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi></mrow></math> es finito,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ker</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> h</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  una base de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>, que completamos a una base de <math display=\"inline\"><mi>V</mi></math>: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>p</mi></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>q</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, donde <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>q</mi><mo>=</mo><mi>n</mi></mrow></math>. Basta demostrar que <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>q</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es una base de <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math>. <strong>Es sistema generador</strong>: tomando <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cualquiera, se desarrolla <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> en la base y, al aplicar <math display=\"inline\"><mi>T</mi></math>, como <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>, queda una combinación lineal de <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <strong>Es libre</strong>: si <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>j</mi></msub><msub><mi>c</mi><mi>j</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>, entonces <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>j</mi></msub><msub><mi>c</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>j</mi></msub><msub><mi>c</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>j</mi></msub><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>; pero entonces <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></math> es una combinación lineal de ellos, y la independencia de la base completa obliga a que todos los coeficientes sean cero."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cambio de base y semejanza"
    },
    {
     "mota": "testua",
     "html": "La misma aplicación tiene matrices distintas en bases distintas. Si la matriz de paso de la base <math display=\"inline\"><mi>B</mi></math> a la base <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math> es <math display=\"inline\"><mi>P</mi></math> (columnas de <math display=\"inline\"><mi>P</mi></math>: los vectores de <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math> escritos en <math display=\"inline\"><mi>B</mi></math>), las coordenadas se relacionan por <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mi>P</mi><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>′</mo></msup></mrow></math>, y la nueva matriz de la aplicación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. A esa relación se la llama <strong>semejanza</strong>: <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>  son <strong>semejantes</strong>. La pregunta central de este capítulo es: dada <math display=\"inline\"><mi>A</mi></math>, ¿existe una base en la que <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math> sea <strong>diagonal</strong>? Si es así, toda la geometría de la aplicación queda a la vista: solo estira o contrae en ciertas direcciones."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Autovalores y autovectores",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Autovalores y autovectores",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dada una matriz cuadrada <math display=\"inline\"><mi>A</mi></math> de orden <math display=\"inline\"><mi>n</mi></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math> es un <strong>autovalor</strong> si existe un vector <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>≠</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> tal que"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Cada uno de esos <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> es un <strong>autovector</strong> asociado a <math display=\"inline\"><mi>λ</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Geométricamente: la dirección de un autovector no la cambia la aplicación; solo la estira por un factor <math display=\"inline\"><mi>λ</mi></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math>), la contrae (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>) o la invierte (<math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "irudia",
     "oina": "Un vector cualquiera cambia de dirección\n  bajo la aplicación (izquierda); un autovector no (derecha):\n    <math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>.",
     "src": "../media/irudiak/587be582bfeff47f.svg",
     "zabalera": 410
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación característica"
    },
    {
     "mota": "testua",
     "html": "La condición <math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math> es un sistema homogéneo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>. Para que tenga solución no nula, la matriz del sistema debe ser singular:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El miembro izquierdo es un polinomio de grado <math display=\"inline\"><mi>n</mi></math> en <math display=\"inline\"><mi>λ</mi></math> — el <strong>polinomio característico</strong> — y sus raíces son los autovalores. El <strong>espacio propio</strong> de cada autovalor es <math display=\"inline\"><mrow><msub><mi>E</mi><mi>λ</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: todos los autovectores correspondientes a <math display=\"inline\"><mi>λ</mi></math>, junto con el cero."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "El caso completo <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. El polinomio característico:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>λ</mi><mo>+</mo><mn>10</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Autovalores: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn></mrow></math>: el sistema <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>5</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> da <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Comprobación: <math display=\"inline\"><mrow><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub></mrow></math>. ✓"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dos comprobaciones rápidas, válidas para cualquier orden: la <strong>suma</strong> de los autovalores es la traza (<math display=\"inline\"><mrow><mo>∑</mo><msub><mi>λ</mi><mi>i</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>A</mi></mrow></math>; arriba <math display=\"inline\"><mrow><mn>5</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>4</mn><mo>+</mo><mn>3</mn></mrow></math>), y el <strong>producto</strong>, el determinante (<math display=\"inline\"><mrow><mo>∏</mo><msub><mi>λ</mi><mi>i</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>; arriba <math display=\"inline\"><mrow><mn>5</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>12</mn><mo>−</mo><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Multiplicidades"
    },
    {
     "mota": "testua",
     "html": "Un autovalor <math display=\"inline\"><mi>λ</mi></math> puede ser raíz <strong>múltiple</strong> del polinomio característico. Su orden como raíz se llama <strong>multiplicidad algebraica</strong>; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mi>λ</mi></msub></mrow></math>, <strong>multiplicidad geométrica</strong>. Siempre se cumple"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>1</mn><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mi>λ</mi></msub><mo>≤</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aniztasun aljebraikoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la brecha entre ambas es, precisamente, el único obstáculo para la diagonalización."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Independencia de los autovectores",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los autovectores correspondientes a autovalores <strong>distintos</strong> son linealmente independientes."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Por inducción sobre el número. Un único vector es libre (porque es no nulo). Supongamos que <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math> son libres y que"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>c</mi><mi>k</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>k</mi></msub><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Aplicando <math display=\"inline\"><mi>A</mi></math>: <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><msub><mi>λ</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>c</mi><mi>k</mi></msub><msub><mi>λ</mi><mi>k</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>k</mi></msub><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>. Multiplicando la primera ecuación por <math display=\"inline\"><msub><mi>λ</mi><mi>k</mi></msub></math> y restando:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>c</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>λ</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Por la hipótesis de inducción todos los coeficientes son cero, y como <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≠</mo><msub><mi>λ</mi><mi>k</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mi>⋯</mi><mo>=</mo><msub><mi>c</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>; entonces de <math display=\"inline\"><mrow><msub><mi>c</mi><mi>k</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>k</mi></msub><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> resulta <math display=\"inline\"><mrow><msub><mi>c</mi><mi>k</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Diagonalización",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Matriz diagonalizable",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> es <strong>diagonalizable</strong> si existe una matriz invertible <math display=\"inline\"><mi>P</mi></math> tal que"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "es diagonal. Entonces la diagonal de <math display=\"inline\"><mi>D</mi></math> está formada por los autovalores, y las columnas de <math display=\"inline\"><mi>P</mi></math> son los autovectores correspondientes."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En efecto, escribiendo <math display=\"inline\"><mrow><mi>A</mi><mi>P</mi><mo>=</mo><mi>P</mi><mi>D</mi></mrow></math> y leyendo columna a columna, resulta <math display=\"inline\"><mrow><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>j</mi></msub><mo>=</mo><msub><mi>d</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>j</mi></msub></mrow></math>: las columnas de <math display=\"inline\"><mi>P</mi></math> son necesariamente autovectores. De ahí el criterio completo:"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Criterio de diagonalizabilidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una matriz <math display=\"inline\"><mi>A</mi></math> de orden <math display=\"inline\"><mi>n</mi></math> es diagonalizable si y solo si tiene <math display=\"inline\"><mi>n</mi></math> autovectores linealmente independientes; es decir, si la multiplicidad geométrica de cada autovalor es igual a la algebraica. En particular, si <math display=\"inline\"><mi>n</mi></math> tiene autovalores <strong>distintos</strong>, es siempre diagonalizable."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Diagonalización completa y <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con la <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de arriba: <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Las potencias resultan inmediatas:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mi>n</mi></msup><mo>=</mo><mi>P</mi><msup><mi>D</mi><mi>n</mi></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup><mo>+</mo><msup><mn>2</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>5</mn><mi>n</mi></msup><mo>−</mo><msup><mn>2</mn><mi>n</mi></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup><mo>−</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>5</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Este es uno de los usos principales de la diagonalización: calcular la evolución de sistemas dinámicos (recurrencias <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mi>n</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mi>n</mi></msub><mo>=</mo><msup><mi>A</mi><mi>n</mi></msup><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>0</mn></msub></mrow></math>), sea cual sea <math display=\"inline\"><mi>n</mi></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "No siempre es posible. La matriz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> tiene un único autovalor, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>, con multiplicidad algebraica 2; pero <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene dimensión 1 (solo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Un único autovector independiente: no existe <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mi>A</mi></math> no es diagonalizable. Para estudiar tales matrices hacen falta formas canónicas más finas (Jordan), fuera del alcance de este curso."
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Matrices simétricas: teorema espectral",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La mayoría de las matrices que aparecen en física son <strong>simétricas</strong> (<math display=\"inline\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math>): el tensor de inercia, las matrices de las pequeñas oscilaciones, las formas cuadráticas. No es casualidad, y es una gran suerte: para las simétricas la diagonalización siempre es posible y, además, en una base <strong>ortogonal</strong>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Autovalores reales",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>A</mi></math> es real y simétrica, todos sus autovalores son reales."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>≠</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>, posiblemente complejo. Multiplicando por la izquierda por <math display=\"inline\"><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup></math>, <math display=\"inline\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>. El miembro izquierdo es real: es igual a su conjugado traspuesto, porque <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒖</mi><mi>T</mi></msup><mi>A</mi><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><msup><mi>A</mi><mi>T</mi></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>, usando que <math display=\"inline\"><mi>A</mi></math> es real y simétrica. Y como <math display=\"inline\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>u</mi><mi>i</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math> es real y positivo, <math display=\"inline\"><mi>λ</mi></math> es el cociente de esos dos reales: es real."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Autovectores ortogonales",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>A</mi></math> es simétrica, los autovectores correspondientes a autovalores distintos son ortogonales: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Siendo <math display=\"inline\"><mrow><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math>, calculemos <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn><mi>T</mi></msubsup><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math> de dos maneras: por un lado <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math>; por otro, como <math display=\"inline\"><mi>A</mi></math> es simétrica, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math>. Restando: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, y como <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>≠</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, el producto escalar es cero."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Teorema espectral (caso real simétrico)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>A</mi></math> es real y simétrica, existe una matriz <strong>ortogonal</strong> <math display=\"inline\"><mi>Q</mi></math> (<math display=\"inline\"><mrow><msup><mi>Q</mi><mi>T</mi></msup><mi>Q</mi><mo>=</mo><mi>I</mi></mrow></math>, es decir, <math display=\"inline\"><mrow><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>Q</mi><mi>T</mi></msup></mrow></math>) tal que"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>Q</mi><mi>T</mi></msup><mi>A</mi><mi>Q</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "es diagonal: siempre existe una base <strong>ortonormal</strong> formada por autovectores."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El núcleo de la demostración son los dos teoremas anteriores; en el caso de multiplicidad múltiple, dentro de cada espacio propio se puede elegir una base ortonormal (Gram–Schmidt), y los espacios propios distintos son de por sí perpendiculares."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Puente hacia la física: modos normales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "¿Por qué es esto el centro de la física? Tomemos el ejemplo más sencillo: dos masas iguales, unidas por tres muelles iguales."
    },
    {
     "mota": "irudia",
     "oina": "Dos osciladores acoplados: <math display=\"inline\"><mi>m</mi></math> el\n  desplazamiento de cada masa (<math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>) se mide desde su posición de equilibrio.",
     "src": "../media/irudiak/d633a4551b768f2d.svg",
     "zabalera": 386
    },
    {
     "mota": "testua",
     "html": "La segunda ley de Newton (con detalle en el módulo M17) da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>k</mi><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><mi>k</mi><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "o, en forma matricial, escribiendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒙</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Buscar un <strong>modo normal</strong> es buscar una solución en la que las dos masas se muevan con la misma frecuencia y con forma fija: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>. Sustituyendo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒂</mi><mo>:</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es <strong>un problema de autovalores, palabra por palabra</strong>. Los autovalores de esa matriz son <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math> (es simétrica: reales y ortogonales, como prometía el teorema espectral), con autovectores <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por tanto:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>, modo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: las dos masas se mueven <strong>juntas</strong>, sin deformar el muelle central — por eso la frecuencia es la misma que la de una masa libre.",
      "<math display=\"inline\"><mrow><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mn>3</mn><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>, modo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: las masas en <strong>oposición de fase</strong>, deformando el muelle central dos veces — por eso es más rígido, más rápido."
     ]
    },
    {
     "mota": "testua",
     "html": "El movimiento general es una combinación lineal de los dos modos. Y esta receta es totalmente general: toda pequeña oscilación con <math display=\"inline\"><mi>n</mi></math> grados de libertad es una diagonalización (el capítulo 7 de M17 — pequeñas oscilaciones — hará esto mismo con la <math display=\"inline\"><mi>n</mi></math> general). Igual con el tensor de inercia (simétrico: tres ejes principales perpendiculares, siempre) y, más adelante, con la mecánica cuántica: un observable es un operador autoadjunto, los resultados posibles de la medida son sus autovalores, y los estados se desarrollan en la base de sus autovectores. Es lo aprendido en este capítulo, con algunas palabras nuevas."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  : comprueba que es lineal, escribe su matriz en las bases canónicas, y calcula <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math> y el rango. Comprueba el teorema de las dimensiones."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren balio y bektore propioak, y egiaztatu batura aztarnarekin y producto determinanterekin."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Diagonaliza <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: encuentra <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>D</mi></math>, y comprueba explícitamente que <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurreko ejercicioso matrizrekin, calcular <math display=\"inline\"><msup><mi>A</mi><mn>10</mn></msup></math> diagonalizazioaren bidez."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula los valores propios y los autoespacios de <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> , y diagonalízala mediante una <math display=\"inline\"><mi>Q</mi></math>  <strong>ortogonal</strong> (normaliza los vectores propios). ¿Por qué tenías asegurado que eso era posible, sin hacer cálculos?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> no es diagonalizable, comparando las multiplicidades algebraica y geométrica."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>P</mi></math> es una proyección (<math display=\"inline\"><mrow><msup><mi>P</mi><mn>2</mn></msup><mo>=</mo><mi>P</mi></mrow></math>), demuestra que sus únicos valores propios pueden ser <math display=\"inline\"><mn>0</mn></math> y <math display=\"inline\"><mn>1</mn></math>. Interprétalo geométricamente."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el sistema de dos osciladores acoplados, sustituye el muelle central por uno de <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>k</mi></mrow></math> (manteniendo los exteriores <math display=\"inline\"><mi>k</mi></math>). Escribe la matriz de las ecuaciones del movimiento, calcula los dos modos normales y sus frecuencias, y explica por qué ha cambiado uno y el otro no."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> es simétrica y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> son vectores propios con el mismo valor propio, demuestra que cualquier combinación lineal (no nula) de ellos también es vector propio. ¿Qué significa eso respecto de <math display=\"inline\"><msub><mi>E</mi><mi>λ</mi></msub></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este capítulo está escrito expresamente para JAKINA (no hay fuente en el corpus): teoría estándar de las aplicaciones lineales y de la diagonalización, con demostraciones completas, como continuación de los espacios vectoriales del capítulo 1. Ejercicios complementarios resueltos: <code>ocw_ejercicios_resueltos</code>  (en castellano, pendientes de traducir al euskera). Las figuras son dibujos originales en CeTZ."
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 1 nov 2012 alg calc fis general quimi computacion, IMG_2026_07_28_01_07_47S.jpg",
     "xehetasuna": "Cuaderno LANDETA, páginas 2-3: transcripción manuscrita autoauditada y verificada matemáticamente sobre aplicación lineal, bases, dimensión y matriz asociada",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 1,
   "izenburua": "Linealidad y matriz asociada en una base",
   "blokeak": []
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Criterio de linealidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para que <math display=\"inline\"><mi>f</mi></math> sea lineal, debe cumplirse lo siguiente para todos los <math display=\"inline\"><mrow><mi>v</mi><mo>,</mo><msup><mi>v</mi><mo>′</mo></msup><mo>∈</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">𝕂</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>v</mi><mo>+</mo><mi>μ</mi><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En particular, debe ser <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>. Heurísticamente, la aplicación <strong>no es lineal</strong> si en las coordenadas hay un término constante (<math display=\"inline\"><mrow><mi>+</mi><mi>K</mi></mrow></math>) o un producto/cuadrado (<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>)."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "El subespacio <math display=\"inline\"><mi>W</mi></math> y su base",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los generadores son independientes (el determinante de las dos primeras coordenadas es <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>), luego <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">𝕂</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>. La base propuesta <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> también es válida:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>9</mn><mo>≠</mo><mn>0</mn></mrow></math>"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "(ii) Matriz asociada de <math display=\"inline\"><mi>f</mi></math> en la base <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las imágenes de los vectores de la base, expresadas en coordenadas de <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><msub><mi>w</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><mn>4</mn><msub><mi>w</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Colocando las coordenadas en columnas, la matriz asociada es de <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>,</mo><msub><mi>β</mi><mi>W</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — correcciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original escribe &quot;LA MATRIZ SERÁ DE <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>&quot;, razonando que los vectores tienen cuatro coordenadas; eso es <strong>incorrecto</strong>: la matriz de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> en la base <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>) es de <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>, no de <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>. Asimismo, la etiqueta &quot;<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>&quot; posterior no concuerda con la aplicación <math display=\"inline\"><mrow><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> dibujada. La fórmula de <math display=\"inline\"><mi>f</mi></math> no aparece en esta imagen; la matriz se ha deducido a partir de las dos evaluaciones visibles. La nota del margen rojo (&quot;si no puedo pasar el vector <math display=\"inline\"><mn>0</mn></math> no es espacio vectorial&quot;) probablemente se refiere al criterio de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>; sin embargo, que <math display=\"inline\"><mi>f</mi></math> sea no lineal no implica que <math display=\"inline\"><mi>W</mi></math> deje de ser un espacio vectorial."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario algebra ene 2013, IMG_2026_07_28_02_14_56S.jpg, ezkerreko erdia",
     "xehetasuna": "A1_0018i: transcripción literal verificada del desarrollo manuscrito sobre el núcleo y la imagen de aplicaciones lineales; correcciones y verificación matemática por separado",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Edición crítica de la fuente manuscrita",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Unidad:</strong> <code>A1_0018i</code>. <strong>Imágenes:</strong> 1/1. El texto no se ha abreviado: se mantienen por separado la transcripción literal y sus dudas de lectura, las correcciones editoriales y la verificación técnica. Los archivos originales y la tabla de verificación se conservan como evidencia externa."
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Aplicaciones lineales: mitad izquierda de la imagen 0018",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "0018 - IMG_2026_07_28_02_14_56S.jpg"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Origen"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fuente:</strong> espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_14_56S.jpg.",
      "<strong>Decisión de división:</strong> mitad izquierda de una hoja doble, separada como salida individual; este archivo solo recoge la página 34.",
      "<strong>Asignatura:</strong> algebra_primero.",
      "<strong>Función documental:</strong> ejercicio_resuelto_manuscrito.",
      "<strong>Tema validado:</strong> núcleo, imagen y ampliación de una base para construir una aplicación lineal.",
      "<strong>Destino:</strong> JAKINA_alt/kapituluak/koadernoak/02_aplikazio_linealak.typ."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Transcripción literal"
    },
    {
     "mota": "oharra",
     "titulua": "Manuscrito, maquetado (capa literal)",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "2013/2/18"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "ÁLGEBRA <br>LANDETA"
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[hoja izquierda, p. 34]</span>"
      },
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> es conocido, elegiremos <strong>DOS VECTORES <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> PARA LA BASE DEL ESPACIO DE SALIDA</strong>."
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[signo de exclamación dentro de un óvalo; primer término repasado:]</span>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[en azul:]</span>"
      },
      {
       "mota": "testua",
       "html": "<span>EL ESPACIO DE SALIDA SE DESCOMPONE ASÍ:</span>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<span class=\"j-edoh\">[en azul, flecha:]</span> <span>→   VECTORES QUE SE CONVIERTEN EN <math display=\"inline\"><mn>0</mn></math></span>",
        "<span class=\"j-edoh\">[en azul, flecha:]</span> <span>→   VECTORES QUE SE PIERDEN</span>"
       ]
      },
      {
       "mota": "testua",
       "html": "Por tanto, <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[en azul: flechas de los dos primeros vectores hacia <math display=\"inline\"><mn>0</mn></math>; flechas\n  de <math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math> y de <math display=\"inline\"><msub><mi>v</mi><mn>4</mn></msub></math> hacia <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>]</span>"
      },
      {
       "mota": "testua",
       "html": "<strong>PUES BIEN, AHORA AMPLIAREMOS <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> Y <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> HASTA OBTENER UNA BASE DE <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>.</strong>"
      },
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>, <math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>4</mn></msub></math>, <strong>MEDIANTE <math display=\"inline\"><mi>f</mi></math></strong>, generarán <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por ejemplo, tomando <math display=\"inline\"><mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>v</mi><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[en rojo: una pequeña marca bajo el último <math display=\"inline\"><mn>1</mn></math> de <math display=\"inline\"><msub><mi>v</mi><mn>4</mn></msub></math>]</span>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[a lápiz: un círculo alrededor del <math display=\"inline\"><mn>1</mn></math> de la fila 3, columna 1 de la matriz <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>]</span>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[en rojo: pequeñas marcas bajo el <math display=\"inline\"><mn>1</mn></math> inferior derecho de la matriz <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> y del menor <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>]</span>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[en verde; en euskera: &quot;ez zaigu lehenengoan atera&quot;:]</span>"
      },
      {
       "mota": "testua",
       "html": "<span>((NO NOS HA SALIDO A LA PRIMERA))</span>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[pie de página: 34]</span>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Lecturas dudosas"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La relectura ampliada resuelve <code>es conocido</code>, <code>DOS VECTORES</code>, las dos viñetas azules y la nota verde de negación; en esos pasajes no queda ninguna alternativa gráfica razonable.",
      "La línea grande escribe <code>v₁ Y v₂</code>: los subíndices coinciden exactamente con los de la frase de la línea inferior <code>Como v₁ y v₂ ∈ Ker f</code>. No se acepta la alternativa <code>v₃ Y v₄</code>.",
      "Tras la autoauditoría hecha en la resolución original, en esta mitad no queda ninguna lectura marcada como dudosa."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Correcciones editoriales"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Dentro de la transcripción literal no se ha corregido ninguna palabra, fórmula ni entrada de matriz.",
      "La fecha y el rótulo visibles también se conservan en la capa literal; los comentarios de Typst mantienen los metadatos y la secuencia editorial.",
      "<em class=\"j-nab\">En la terminología estándar, los vectores del núcleo pertenecen al espacio de partida o dominio, no al espacio de salida.</em> La expresión del manuscrito <code>BASE DEL ESPACIO SALIDA</code> debería revisarse editorialmente, pero se mantiene tal cual.",
      "La construcción puede explicitarse después como <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y eligiendo <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> para generar <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>; ese paso no se incorpora a la capa literal, porque no está desarrollado de forma visible en esta página."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Verificación matemática"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Los dos vectores del núcleo que aparecen en <math display=\"inline\"><mi>β</mi></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, son linealmente independientes: de la igualdad <math display=\"inline\"><mrow><mi>a</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>b</mi><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, la tercera coordenada da <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> y la segunda <math display=\"inline\"><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>. Por consiguiente, la dimensión del núcleo indicado es <math display=\"inline\"><mn>2</mn></math>.",
      "La igualdad <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> de rango-nulidad es compatible con los valores <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>2</mn></mrow></math>. Correcto."
     ]
    },
    {
     "mota": "testua",
     "html": "✓"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Se ha recalculado el determinante de la matriz cuyas filas son <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El desarrollo por la tercera fila da <math display=\"block\"><mrow><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>; coincide con la anotación del manuscrito <code>1·1 ≠ 0</code>. Los cuatro vectores forman una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>. Correcto. ✓",
      "En esta mitad no se ha detectado ningún resultado numérico falso: el determinante no nulo es correcto. La imprecisión terminológica sobre la expresión <code>espacio salida</code> queda aparte, en el apartado <strong>Correcciones editoriales</strong>."
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Ejercicio (examen): matriz canónica e inversa de una aplicación lineal",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Encuentra <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> dos <strong>bases</strong> en las que <math display=\"inline\"><mi>f</mi></math> la matriz de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋅</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> sea de la forma <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> las <strong>antiimágenes</strong> de "
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>1) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>.</strong> <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (generadores de la imagen). El determinante, desarrollando por la primera columna: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>14</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>16</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Por tanto <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>3</mn><mo>=</mo><mi>r</mi></mrow></math>; <math display=\"inline\"><mi>f</mi></math>  es <strong>biyectiva</strong> y la matriz asociada es <math display=\"inline\"><msub><mi>I</mi><mn>3</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>2) Aurreirudiak — 1. modua (zehatza).</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mo>=</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> De la 1.ª, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>. Sustituyendo en la 2.ª: <math display=\"inline\"><mrow><mn>8</mn><mi>y</mi><mo>+</mo><mn>2</mn><mo>−</mo><mi>z</mi><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>8</mn><mi>y</mi></mrow></math>. En la 3.ª: <math display=\"inline\"><mrow><mn>3</mn><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>3</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. Por tanto <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (comprobación: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ✓)."
      },
      {
       "mota": "testua",
       "html": "<strong>3) Aurreirudiak — 2. modua (orokorra).</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> askatuz: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>a</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>8</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>b</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>c</mi><mo>+</mo><mn>3</mn><mi>a</mi><mo>⇒</mo><mi>z</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>a</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> <math display=\"inline\"><mi>z</mi></math> ordezkatuz: <math display=\"inline\"><mrow><mn>8</mn><mi>y</mi><mo>+</mo><mfrac><mrow><mn>3</mn><mi>a</mi><mo>+</mo><mi>c</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mi>b</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo>⇒</mo><mn>16</mn><mi>y</mi><mo>=</mo><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow><mn>16</mn></mfrac></mrow></math>; y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>7</mn><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow><mn>8</mn></mfrac></mrow></math>. Alderantzizkoa:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>7</mn><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow><mn>8</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow><mn>16</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>a</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Aplicando: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (son la base canónica).<math display=\"inline\"><mi>A</mi></math> las antiimágenes de las columnas de "
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ejercicio de examen («EXÁMENES», «ÁLGEBRA LANDETA», 2013/01/03). Todo verificado: el determinante <math display=\"inline\"><mn>16</mn></math> (cofactores / Sarrus), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>3</mn></mrow></math> (biyectiva, objetivo <math display=\"inline\"><msub><mi>I</mi><mn>3</mn></msub></math>), el sistema del modo 1 (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>) y la inversa explícita del modo 2 (<math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>), con las tres preimágenes. ⚠ El lote antiguo descartado leyó el determinante como «<math display=\"inline\"><mrow><mi>−</mi><mn>16</mn></mrow></math>» (con aritmética errónea); el valor correcto es <math display=\"inline\"><mrow><mi>+</mi><mn>16</mn></mrow></math> (aquí confirmado). La hoja no construye explícitamente las dos bases (continúa en la página siguiente). Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p012.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Cambio de base, determinante paramétrico <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> y subespacios de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tres contenidos: la continuación del ejercicio 2 (diagrama del cambio de base), un determinante <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> con parámetro, y las dimensiones de dos subespacios de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Continuación del ejercicio 2: cambio de base"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math> (la canónica) y <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, la matriz de <math display=\"inline\"><mi>f</mi></math> en las bases <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>,</mo><msup><mi>β</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sale del diagrama conmutativo: <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mo>⋅</mo><mi>B</mi><mo>⋅</mo><mi>P</mi></mrow></math>, donde <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math>), <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><msup><mi>β</mi><mo>′</mo></msup></mrow></msub></mrow></math>. Las columnas de <math display=\"inline\"><mi>Q</mi></math> son las coordenadas de los vectores canónicos en <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> — es decir, las imágenes de <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> de p012: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El determinante paramétrico <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>→</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>4</mn></msub><mo>+</mo><msub><mi>C</mi><mn>5</mn></msub></mrow></math> en <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>, la primera columna queda <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup></mrow></math> (en cada fila se anulan <math display=\"inline\"><mrow><mi>−</mi><mi>λ</mi></mrow></math> y <math display=\"inline\"><mi>λ</mi></math>): <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math> Desarrollando por la primera columna, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>5</mn><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. El menor es triangular inferior, con diagonal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>,</mo><mi>λ</mi><mo>,</mo><mi>λ</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mn>5</mn><mo>⋅</mo><msup><mi>λ</mi><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Subespacios de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. De la segunda, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>; sustituyendo en la primera, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>. Por tanto <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. De ahí <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math> Ambos pares de generadores son linealmente independientes, luego <strong><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math></strong>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo verificado: el diagrama del cambio de base (<math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><msup><mi>β</mi><mo>′</mo></msup></mrow></msub></mrow></math>, columnas las imágenes de <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> de p012), el determinante <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> (sumando a <math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math> y convirtiendo en triangular inferior, <math display=\"inline\"><mrow><mn>5</mn><msup><mi>λ</mi><mn>4</mn></msup></mrow></math>), y los subespacios <math display=\"inline\"><mi>U</mi></math>, <math display=\"inline\"><mi>W</mi></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>). El original deja <math display=\"inline\"><mi>Q</mi></math> <strong>en blanco</strong> (no se rellenó con los valores que llenarían las columnas; aquí tampoco, reflejo de la fuente). Algunas dudas de lectura (la entrada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la matriz, «<math display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>» frente a <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math> en <math display=\"inline\"><mi>W</mi></math> —<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math> es lo correcto—, la broma final del autor) no afectan al fondo. Véase <code>koadernoa_landeta2_alg_p014.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Matriz de una aplicación lineal y cambio de base",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Completando la base <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>"
    },
    {
     "mota": "testua",
     "html": "Se forma una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> completando los dos vectores de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> con otros dos (<math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>∖</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></munder><mo>,</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>∖</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></munder><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estos cuatro vectores son libres, pues el determinante es <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fórmula general de <math display=\"inline\"><mi>f</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Imágenes de los vectores de la base:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Expresando un vector genérico en la nueva base, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, componente a componente: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>μ</mi></mrow></math>; de ahí:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por linealidad, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y sustituyendo <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>δ</mi><mo>+</mo><mn>4</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>δ</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>z</mi><mo>+</mo><mn>4</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(iv) Matriz canónica"
    },
    {
     "mota": "testua",
     "html": "Leyendo en cada componente de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> los coeficientes de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la matriz asociada en la base canónica (<strong>verificada</strong>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(v) Cambio de base"
    },
    {
     "mota": "testua",
     "html": "Una nueva base, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. La matriz de <math display=\"inline\"><mi>f</mi></math> en la base <math display=\"inline\"><mi>B</mi></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><mi>B</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se obtiene mediante el diagrama del cambio de base: <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"double-struck\">ℝ</mi><msub><mi>B</mi><mi>c</mi></msub><mn>4</mn></msubsup><mover><mo>→</mo><mrow><mi>f</mi><mo>=</mo><mi>A</mi></mrow></mover><msubsup><mi mathvariant=\"double-struck\">ℝ</mi><msub><mi>B</mi><mi>c</mi></msub><mn>4</mn></msubsup></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"double-struck\">ℝ</mi><mi>B</mi><mn>4</mn></msubsup><mover><mo>→</mo><mrow><mi>f</mi><mo>=</mo><mi>B</mi></mrow></mover><msubsup><mi mathvariant=\"double-struck\">ℝ</mi><mi>B</mi><mn>4</mn></msubsup></mrow></math>, donde <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><mi>B</mi></mrow></msub></mrow></math> (la matriz del cambio de base) y <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub></mrow></math>. Por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mo>⋅</mo><mi>A</mi><mo>⋅</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> (la matriz de cambio de <math display=\"inline\"><mi>B</mi></math> a la base canónica) se calcula colocando en sus columnas las coordenadas de los vectores de <math display=\"inline\"><mi>B</mi></math> en la canónica. Los valores numéricos de <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y <math display=\"inline\"><mi>B</mi></math> se desarrollan en la página siguiente. En el original la matriz <math display=\"inline\"><mi>A</mi></math> está dibujada dos veces (idénticas). En la &quot;separación por columnas&quot; de <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la primera entrada aparece como &quot;<math display=\"inline\"><mrow><mn>8</mn><mi>x</mi></mrow></math>&quot;, pero eso es incompatible con la entrada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> verificada de <math display=\"inline\"><mi>A</mi></math> (es <math display=\"inline\"><mn>0</mn></math>); ese fragmento no se ha reproducido, por ser un error. Las lecturas de &quot;<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>3</mn></mrow></math>&quot; y del cuarto vector (&quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;) son dudosas."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p040_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Matrices del cambio de base; <math display=\"inline\"><mi>f</mi></math> a partir de tres imágenes",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Las matrices <math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y <math display=\"inline\"><mi>P</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Continuación del cambio de base de la página anterior. Expresando los vectores de <math display=\"inline\"><mi>B</mi></math> en la base canónica, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para calcular <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><mi>B</mi></mrow></msub></mrow></math>, cada vector de la base canónica se expresa en función de <math display=\"inline\"><mi>B</mi></math> (un sistema de ecuaciones para cada uno). Por ejemplo, para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>2</mn></mrow></math>. Resultado:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mo>⋅</mo><mi>A</mi><mo>⋅</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 5: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> a partir de tres imágenes"
    },
    {
     "mota": "testua",
     "html": "Aplicación lineal definida mediante tres imágenes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esto determina <math display=\"inline\"><mi>f</mi></math> de forma única <strong>solo</strong> si los tres vectores generan una base del dominio (es decir, de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>). Comprobación: el rango de la matriz <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> formada por los tres vectores es <math display=\"inline\"><mn>3</mn></math>, luego son una base:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "A continuación se piden: (i) la fórmula general de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y (ii) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a partir del sistema."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — confianza baja",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta página es muy densa (letra pequeña, muchos cálculos) y algunas partes presentan incoherencias internas; no se han reproducido como resultado limpio. En concreto: la fórmula general de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aparece en el original así (lectura dudosa; el &quot;<math display=\"inline\"><mi>z</mi></math>&quot; repetido en la segunda componente es probablemente un error): <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mi>−</mi><mn>16</mn><mi>z</mi><mo>−</mo><mn>11</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>3</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>,</mo><mfrac><mrow><mi>−</mi><mn>4</mn><mi>x</mi><mo>−</mo><mn>5</mn><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> El sistema de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> tampoco concuerda con esa fórmula (la segunda ecuación usa &quot;<math display=\"inline\"><mrow><mn>16</mn><mi>z</mi><mo>+</mo><mn>11</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi></mrow></math>&quot;, sin denominador), y los pasos están abreviados; el resultado final, &quot;<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>3</mn><mi>z</mi></mrow></math>&quot;, aparece dos veces de forma coherente, pero no ha podido verificarse de manera independiente. La primera línea de la página izquierda (&quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>…</mi></mrow></math>&quot;) tampoco concuerda del todo con la matriz <math display=\"inline\"><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub></math> escrita debajo. Según la metodología, todo se ha transcrito literalmente, sin corrección forzada."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p042_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Azpiespazio osagarriak y aldaezinak; diagonalizazioaren hasiera",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ko endomorfismoa). <strong>a)</strong> Demostrar <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <strong>osagarriak</strong> direla. <strong>b)</strong> Comprueba <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><msub><mi>U</mi><mi>i</mi></msub></mrow></math>. <strong>c)</strong> Encuentra <math display=\"inline\"><mi>f</mi></math> diagonalizatzen duen oinarri bat."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>a) Complementarios.</strong> <math display=\"inline\"><msub><mi>U</mi><mn>1</mn></msub></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><mi>z</mi></mrow></math>, por tanto <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. <math display=\"inline\"><msub><mi>U</mi><mn>2</mn></msub></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>z</mi></mrow></math>, por tanto <math display=\"inline\"><mrow><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. El determinante de los tres generadores: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>3</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math> Por tanto es base: <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>+</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, y por dimensiones (<math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow></math>) <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; es decir <strong><math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>⊕</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math></strong> (complementarios)."
      },
      {
       "mota": "testua",
       "html": "<strong>b) Invariancia.</strong> las imágenes de <math display=\"inline\"><mi>f</mi></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> por tanto <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><msub><mi>U</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><msub><mi>U</mi><mn>1</mn></msub></math>  es <strong>invariante</strong>, con valor propio <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>). Y <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> por tanto <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><msub><mi>U</mi><mn>2</mn></msub></math>  es invariante, con valor propio <math display=\"inline\"><mn>2</mn></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>c) Diagonalización (inicio).</strong> <math display=\"inline\"><mi>f</mi></math>: la matriz de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en la base canónica (columnas <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>β</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Los valores propios de esta matriz (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>J</mi><mo>−</mo><mi>I</mi></mrow></math>) son <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (doble) y <math display=\"inline\"><mn>2</mn></math> , coinciden con los que aparecen en b); la base diagonalizadora es la de los vectores propios (<math display=\"inline\"><msub><mi>U</mi><mn>1</mn></msub></math>: dos de <math display=\"inline\"><msub><mi>U</mi><mn>2</mn></msub></math> y uno de "
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sesión «PARTICULAR» (en verde; cf. «GRUPO» en p010). Todo verificado: las bases (<math display=\"inline\"><msub><mi>U</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>U</mi><mn>2</mn></msub></math>), el determinante <math display=\"inline\"><mn>3</mn></math> (adjuntos, <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>⊕</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>), la invariancia con los autovalores (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mn>2</mn></math>), y la matriz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>J</mi><mo>−</mo><mi>I</mi></mrow></math>. Esta matriz es la misma que la de newton p052 (autovalores <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>); la diagonalización se completa como allí. La nota «MISMO ESPACIO: MATRICES SEMEJANTES» es correcta. Véase <code>koadernoa_landeta2_alg_p018.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Diagonalización: polinomio característico, autovalores y autovectores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación de la diagonalización del endomorfismo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de p018."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio característico"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>I</mi><mn>3</mn></msub><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math> Por Sarrus: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>−</mo><mn>3</mn><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo>−</mo><mn>1</mn><mo>−</mo><mn>3</mn><mi>x</mi></mrow></math>, es decir <math display=\"block\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>.</mi></mrow></math> Por Ruffini (raíz <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>): coeficientes <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> → <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, resto <math display=\"inline\"><mn>0</mn></math>. Cociente <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math>, raíces <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mn>8</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> balio propioak: </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mn>1</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Subespacios propios"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>. Como <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>I</mi></mrow></math> es una matriz de unos: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> es decir <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>U</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math> Ecuación 1.ª<math display=\"inline\"><mi>−</mi></math>2.ª: <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>; 1.ª<math display=\"inline\"><mi>−</mi></math>3.ª: <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> (comprobación: <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ✓). Por tanto <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagonalizabilidad"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: las multiplicidades <strong>geométricas</strong> y <strong>algebraicas coinciden</strong>, luego <strong><math display=\"inline\"><mi>f</mi></math> es diagonalizable</strong>. En la base propia <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo verificado: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math> (Sarrus), por Ruffini <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, autovalores <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>U</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, dim 2), <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>z</mi></mrow></math>, dim 1) — ambos coinciden con los subespacios invariantes de p018; y la diagonalizabilidad (multiplicidades iguales). Esta matriz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>J</mi><mo>−</mo><mi>I</mi></mrow></math> es la misma que la de newton p052. Se recogen el «NO SÉ / SÉ RESOLVERLO» del autor y la nota informal final. Véase <code>koadernoa_landeta2_alg_p020.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Cierre de la diagonalización: la matriz en la base propia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Final de la diagonalización de p020: se comprueba, coordenada a coordenada, que la matriz de <math display=\"inline\"><mi>f</mi></math> es diagonal en la base propia."
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> la base propia, cada <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se escribe como combinación de <math display=\"inline\"><mi>B</mi></math> (columnas): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> Colocando los coeficientes por columnas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>B</mi><mi>B</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, <strong><math display=\"inline\"><mi>f</mi></math> es diagonalizable</strong> y <math display=\"inline\"><mi>B</mi></math> es una base de autovectores, de acuerdo con los autovalores de p020 (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> doble, <math display=\"inline\"><mn>2</mn></math>) y con la estructura <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "★ <strong>Rótulo «ÁLGEBRA NEWTON»</strong> dentro del cuaderno físico landeta2: cruce de academias (sesión NEWTON en landeta2; recogida en el mapa SECUENCIAS). Todo verificado: la descomposición de las tres imágenes (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>λ</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>) y <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>B</mi><mi>B</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La hoja es mixta: la parte derecha (p. 23) es FISICA LANDETA, maquetada aparte (<code>koadernoa_landeta2_fisica_p023</code>). Véase <code>koadernoa_landeta2_alg_p022.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 2 ene 2013, IMG_2026_07_28_01_43_28S.jpg",
     "xehetasuna": "ALGEBRA LANDETA (landeta2), páginas 32-33: matrices de paso e inversa mediante la adjunta (todos los cofactores verificados) — transcripción v3",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Matrices de paso e inversa mediante la adjunta (<math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación de la diagonalización de p022: matrices de paso que relacionan <math display=\"inline\"><mi>D</mi></math> y <math display=\"inline\"><mi>A</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Matriz de paso <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><msub><mi>β</mi><mi>c</mi></msub></mrow></msub></mrow></math>, con columnas autovectores: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Determinante</strong> (desarrollando por la primera columna): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>−</mi><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>−</mo><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mn>0</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Inversa mediante la adjunta.</strong> Matriz de cofactores (menor <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>i</mi><mo>+</mo><mi>j</mi></mrow></msup></mrow></math>): <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">adib. </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>C</mi><mn>11</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>C</mi><mn>21</mn></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La adjunta es la traspuesta de <math display=\"inline\"><mi>C</mi></math>, y <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>C</mi><mi>t</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>I</mi></mrow></math> verificado.)"
    },
    {
     "mota": "testua",
     "html": "<strong>Comprobación.</strong> Siendo <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> coincide con el resultado de p022. Las cuatro matrices del diagrama conmutativo: <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><mi>β</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><mi>β</mi></mrow></msub><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo>=</mo><mi>P</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo verificado: <math display=\"inline\"><mi>P</mi></math> (columnas de autovectores), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>3</mn></mrow></math> (desarrollo), todos los cofactores (reconfirmados uno a uno: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>), <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>C</mi><mi>t</mi></msup><mi>/</mi><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El original escribe las filas segunda y tercera de <math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> sin el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> (el factor común se sobreentiende debajo; el producto de abajo lleva <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> completo). Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p032.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 2 ene 2013, IMG_2026_07_28_01_47_13S.jpg — IMG_2026_07_28_01_48_27S.jpg",
     "xehetasuna": "ALGEBRA LANDETA (landeta2), páginas 84-111, 2013/01/18-24: diagonalizabilidad, FORMA CANÓNICA DE JORDAN completa (subespacios generalizados, base, verificación), matrices equivalentes por operaciones elementales, f^2011 mediante Jordan, y el problema inverso del cambio de base — transcripciones verificadas v3",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Diagonalizabilidad en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: multiplicidad algebraica y geométrica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ejemplo de endomorfismo que <strong>no</strong> es diagonalizable (pero sí triangularizable): cuando la multiplicidad geométrica del único autovalor es menor que la algebraica."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio característico"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi></mrow></math> es <strong>triangular superior por bloques</strong> (el bloque inferior izquierdo <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> es nulo): <math display=\"block\"><mrow><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por tanto, el determinante es el producto de los dos bloques diagonales: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math> El autovalor es <strong>único</strong>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, con multiplicidad algebraica <math display=\"inline\"><mn>4</mn></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Subespacio propio <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> id</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>t</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn><mi>t</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>t</mi></math> libres; por tanto <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mi>t</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Conclusión"
    },
    {
     "mota": "testua",
     "html": "Multiplicidad <strong>geométrica</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, <strong>algebraica</strong> <math display=\"inline\"><mn>4</mn></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>2</mn><mo>=</mo><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">geo </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>&lt;</mo><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>4</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> EZ da diagonalizagarria</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Pero <math display=\"inline\"><msub><mi>χ</mi><mi>f</mi></msub></math> se descompone completamente en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, luego <strong><math display=\"inline\"><mi>f</mi></math> es triangularizable</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Contraejemplo:</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math> (distintos) en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> → diagonalizable, <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo verificado: la fórmula de <math display=\"inline\"><mi>f</mi></math> coincide con las filas de <math display=\"inline\"><mi>A</mi></math>; <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math> (triangular superior por bloques, dos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>); <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>4</mn></mrow></math>); <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">geo </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>2</mn></mrow></math>); y como <math display=\"inline\"><mrow><mn>2</mn><mo>&lt;</mo><mn>4</mn></mrow></math>, NO es diagonalizable pero sí triangularizable. El contraejemplo (autovalores distintos → diagonalizable) es correcto. El álgebra vuelve al cuaderno después de un largo bloque de cálculo. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p084.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Cambio de coordenadas: dos métodos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>, las coordenadas del vector <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en dos bases, y dos métodos para pasar de unas a otras."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coordenadas en la base <math display=\"inline\"><mi>β</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, resolviendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>3</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coordenadas en la base <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>: dos métodos"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Método 1:</strong> expresar cada vector de <math display=\"inline\"><mi>β</mi></math> en <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> y componer las coordenadas.",
      "<strong>Método 2:</strong> construir la <strong>matriz del cambio de base</strong> (los vectores de <math display=\"inline\"><mi>β</mi></math> en <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>, como columnas) y multiplicar por las coordenadas en <math display=\"inline\"><mi>β</mi></math>:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>x</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>y</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>z</mi><mo>′</mo></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>β</mi><mo>′</mo></msup></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Nota (variante del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aunque en el enunciado original el tercer vector de <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> puede leerse como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <strong>el desarrollo usa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong> con coherencia, y el resultado es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (verificado con SymPy). Con <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> saldría <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; es una variante de lectura."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0050</code>, páginas 100-101; &quot;ÁLGEBRA LANDETA&quot;). Verificado con SymPy: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>β</mi><mo>′</mo></msup></msub></mrow></math>. Los dos métodos son equivalentes. Variante <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del enunciado mencionada. Sin correcciones. Véase <code>koadernoa_landeta1_alg_p100.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p102_mk.typ",
     "xehetasuna": "transcripción literal y maquetación; verificación, AX=B y subespacios f-invariantes",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Verificación del cambio de coordenadas, <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi></mrow></math> y subespacios <math display=\"inline\"><mi>f</mi></math>-invariantes",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Verificación del cambio de coordenadas anterior (en ambos sentidos), el sistema de ecuaciones matricial <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi></mrow></math>, y un teorema del <strong>tema IV</strong>: la suma de subespacios <math display=\"inline\"><mi>f</mi></math>-invariantes es <math display=\"inline\"><mi>f</mi></math>-invariante."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación del cambio de coordenadas"
    },
    {
     "mota": "testua",
     "html": "Las coordenadas en <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, son correctas: reconstruyen el vector original,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Y en sentido inverso, con <math display=\"inline\"><msubsup><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msubsup></math> (o resolviendo el sistema) se recuperan las coordenadas <math display=\"inline\"><mi>β</mi></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: el cambio es <strong>coherente</strong> en ambos sentidos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El sistema de ecuaciones <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Un sistema lineal escrito en <strong>forma matricial</strong>, si <math display=\"inline\"><mi>A</mi></math> es invertible:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Suma de subespacios <math display=\"inline\"><mi>f</mi></math>-invariantes"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Subespacio f-invariante",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un subespacio <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><mi>V</mi></mrow></math> es <strong><math display=\"inline\"><mi>f</mi></math>-invariante</strong> respecto de <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mi>W</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math> son subespacios <math display=\"inline\"><mi>f</mi></math>-invariantes, su <strong>suma</strong> <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math> también es <math display=\"inline\"><mi>f</mi></math>-invariante."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Demostración.</strong> Siendo <math display=\"inline\"><mrow><msub><mi>W</mi><mi>i</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><msub><mi>w</mi><mrow><mi>i</mi><mn>1</mn></mrow></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, la suma es el subespacio generado por la unión de sus generadores. Como cada <math display=\"inline\"><msub><mi>W</mi><mi>i</mi></msub></math> es <math display=\"inline\"><mi>f</mi></math>-invariante, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><msub><mi>w</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msub><mi>W</mi><mi>i</mi></msub><mo>⊆</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>; por tanto, como <math display=\"inline\"><mi>f</mi></math> lleva todos los generadores a la suma, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": " "
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>◼</mi></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0051</code>, páginas 102-103; &quot;ÁLGEBRA LANDETA&quot;). La verificación del cambio de coordenadas (<math display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi><mo>⇒</mo><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi></mrow></math>, y el teorema de la suma de subespacios <math display=\"inline\"><mi>f</mi></math>-invariantes son correctos. Sin correcciones. Véase <code>koadernoa_landeta1_alg_p102.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p108_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación (SymPy); autovalores y diagonalizabilidad (3×3; corrección: no diagonalizable)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Autovalores y diagonalizabilidad (ejemplo <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>13</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con la matriz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Se estudian los autovalores, los espacios propios y si es diagonalizable."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autovalores y polinomio característico"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>x</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Autovalores: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math> (<strong>multiplicidad algebraica</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>1</mn></mrow></math>) y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espacios propios"
    },
    {
     "mota": "testua",
     "html": "Resolviendo <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "No es diagonalizable (corrección)"
    },
    {
     "mota": "testua",
     "html": "<strong>Criterio de diagonalización:</strong> <math display=\"inline\"><mi>f</mi></math> es diagonalizable si y solo si, para cada autovalor, la <strong>multiplicidad geométrica y la algebraica son iguales</strong>. Aquí, para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "por tanto <math display=\"inline\"><mi>f</mi></math> <strong>NO es diagonalizable</strong> (es <strong>defectuosa</strong>; necesita la forma de Jordan)."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección (diagonalizabilidad)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la página original se escribe al principio &quot;<math display=\"inline\"><mi>f</mi></math> es diagonalizable&quot;, pero <strong>sus propios cálculos</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>) comparados con el criterio (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>), como <math display=\"inline\"><mrow><mn>1</mn><mo>&lt;</mo><mn>2</mn></mrow></math>, <strong>no es diagonalizable</strong>. Verificado con SymPy: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mi>A</mi></math> <strong>no es diagonalizable</strong>. Variante mencionada."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0054</code>, páginas 108-110; &quot;ÁLGEBRA LANDETA&quot;). Verificado con SymPy: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, y <math display=\"inline\"><mi>A</mi></math> <strong>no es diagonalizable</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>). Corrección mencionada arriba. Véase <code>koadernoa_landeta1_alg_p108.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p110_mk.typ",
     "xehetasuna": "transcripción literal y maquetación; diagonalizabilidad en una 4×4 (método; matriz incoherente en el original)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Diagonalizabilidad en una <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>: método",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Procedimiento para estudiar la diagonalizabilidad de un endomorfismo de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> (matriz <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>), aplicando el mismo criterio que en el caso <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio característico"
    },
    {
     "mota": "testua",
     "html": "El polinomio característico de una matriz <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>x</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (polinomio de grado 4). En la práctica se simplifica mediante <strong>operaciones de líneas y columnas</strong> (creando ceros) y se desarrolla por <strong>cofactores</strong>, reduciendo a menores más pequeños, y después se <strong>factoriza</strong> para obtener los autovalores."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Criterio"
    },
    {
     "mota": "testua",
     "html": "Para cada autovalor, se comparan las <strong>multiplicidades</strong>:"
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Criterio de diagonalizabilidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para cada autovalor <math display=\"inline\"><mi>λ</mi></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Algebraica</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: multiplicidad de <math display=\"inline\"><mi>λ</mi></math> en <math display=\"inline\"><msub><mi>χ</mi><mi>A</mi></msub></math>.",
        "<strong>Geométrica</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> es <strong>diagonalizable</strong> si y solo si se escinde en el cuerpo <math display=\"inline\"><msub><mi>χ</mi><mi>A</mi></msub></math> <strong>y</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para todos los autovalores."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para cada autovalor se resuelve <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (sistema <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>) y se compara su dimensión con <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0055</code>, páginas 110-111; &quot;ÁLGEBRA LANDETA&quot;). La <strong>lectura es incoherente</strong> en la matriz original <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> (los bloques <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>I</mi></mrow></math> no encajan, y el desarrollo manual del determinante tiene errores), por lo que los números concretos no son fiables; aquí se presenta el <strong>método</strong> (polinomio característico en <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> y criterio <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>). No forzar correcciones. Véase <code>koadernoa_landeta1_alg_p110.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p112_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación (SymPy); V(-1) y diagonalizabilidad (mitad de álgebra de la hoja mixta; corrección: y=-z)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Espacio propio <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y diagonalizabilidad (final del ejercicio 3)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación y final del ejercicio anterior: calcular el <strong>espacio propio</strong> <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del autovalor <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> y concluir que <math display=\"inline\"><mi>A</mi></math> es <strong>diagonalizable</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Reduciendo</strong> el sistema <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>, las variables dependientes (<math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math>) quedan en función de las libres (<math display=\"inline\"><mrow><mi>z</mi><mo>,</mo><mi>t</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, con los parámetros <math display=\"inline\"><mrow><mi>z</mi><mo>,</mo><mi>t</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagonalizabilidad"
    },
    {
     "mota": "testua",
     "html": "es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (multiplicidad geométrica <math display=\"inline\"><mo>=</mo></math> algebraica). Como para el otro autovalor del ejercicio (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>) también se cumple <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <strong>todas las multiplicidades coinciden</strong>: por tanto"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <math display=\"inline\"><mi>A</mi></math> es <strong>diagonalizable</strong>: la suma de las dimensiones de los espacios propios es <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Correcciones y notas",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Parámetro:</strong> en la página original se escribe <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>t</mi></mrow></math>, pero los generadores (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) exigen <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi></mrow></math> (haciendo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> para obtener <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>); lo correcto es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi></mrow></math> (verificado con SymPy). Cambio mencionado.",
        "<strong>Matriz <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>:</strong> algunas entradas de <math display=\"inline\"><mi>A</mi></math> y de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> presentan dudas de signo en las páginas anteriores (p. ej., la fila <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi></mrow></math>); la lectura internamente coherente (la fila <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi></mrow></math> de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) la dan los generadores del manuscrito. Se ha tomado el resultado estable (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>, diagonalizable).",
        "<strong>Hoja mixta:</strong> la página derecha (p. 113) es &quot;FÍSICA LANDETA&quot; (fluidos, presión <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi></mrow></math>); esa parte va al <strong>apartado de física</strong> (05), no aquí. Véase <code>koadernoa_landeta1_alg_p112.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p128_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación (SymPy); matriz asociada de una aplicación lineal (f: R^3 -> R^2)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Matriz de una aplicación lineal: ejemplo <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Construcción de la <strong>matriz asociada</strong> de una aplicación lineal respecto de unas bases dadas, y un ejemplo con <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz asociada"
    },
    {
     "mota": "testua",
     "html": "La matriz de la aplicación lineal <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> es <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>V</mi></msub><mo>,</mo><msub><mi>β</mi><mi>W</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow></math>), con <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math> (llegada) y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi></mrow></math> (salida). Sus <strong>columnas</strong> son las coordenadas de las imágenes de la base de salida, en la base de llegada. Entonces el valor de <math display=\"inline\"><mi>f</mi></math> es <strong>matriz por vector</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con las bases <math display=\"inline\"><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Imágenes de la base:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Coordenadas en <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> → <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Matriz</strong> (columnas = esas coordenadas):"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>,</mo><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0064</code>, páginas 128-129; &quot;ÁLGEBRA LANDETA&quot;). Verificado con SymPy: las imágenes de la base, las coordenadas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></math>, y <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn></mrow></math>). Sin correcciones. Véase <code>koadernoa_landeta1_alg_p128.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p130_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación (SymPy); f(v) mediante la matriz (ejemplo numérico)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Mediante la matriz <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: ejemplo numérico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del ejemplo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> anterior. La imagen de <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se calcula <strong>mediante la matriz asociada</strong> y se verifica <strong>directamente</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coordenadas de <math display=\"inline\"><mi>v</mi></math> en <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Resolviendo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>3</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mn>4</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La imagen mediante la matriz"
    },
    {
     "mota": "testua",
     "html": "Multiplicando esas coordenadas por <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se obtienen las coordenadas de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>4</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación directa"
    },
    {
     "mota": "testua",
     "html": "Por definición, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.   <math display=\"inline\"><mi>◼</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Los dos caminos dan el mismo resultado: el de la matriz asociada y el de la definición directa."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>LANDETA1_0065</code>, páginas 130-131; &quot;ÁLGEBRA LANDETA&quot;). Verificado con SymPy: las coordenadas de <math display=\"inline\"><mi>v</mi></math> en <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></math> son <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (coordenadas de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></math>), y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (coincide con la definición directa). La página original escribe <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn></mrow></math> en la segunda componente de la columna de coordenadas (confundiendo <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> y el <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn></mrow></math> de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>); aclarado. Sin correcciones importantes (el resultado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es correcto). Véase <code>koadernoa_landeta1_alg_p130.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p132_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y verificación (SymPy); matriz equivalente y coordenadas (f: R^3 -> R^4)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 1,
   "izenburua": "Forma canónica de Jordan: subespacios generalizados y base de Jordan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del endomorfismo <strong>no diagonalizable</strong> de p084 (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">geo </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>2</mn></mrow></math>): se construye la forma de Jordan mediante la cadena de núcleos de las potencias de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Cadena de subespacios propios generalizados",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">sarrera bakarra </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Núcleos: <math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></msup><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Cadena: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊊</mo><msub><mi>E</mi><mn>1</mn></msub><mo>⊊</mo><msub><mi>E</mi><mn>2</mn></msub><mo>⊊</mo><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, dimensiones <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn></mrow></math>, saltos <math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow></math> (índice de nilpotencia <math display=\"inline\"><mn>3</mn></math>)."
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Forma de Jordan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los saltos dan la estructura: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math> <strong>bloques de Jordan</strong>, el mayor de tamaño <math display=\"inline\"><mn>3</mn></math> (el índice); por tanto los tamaños <math display=\"inline\"><mn>3</mn></math> y <math display=\"inline\"><mn>1</mn></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Base de Jordan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tomando un vector de <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>∖</mo><msub><mi>E</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, único): <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Construyendo la cadena: <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Y <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> autovector (de <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), independiente de <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math>. Escrita en orden inverso, la <strong>base de Jordan</strong>: <math display=\"block\"><mrow><msub><mi>B</mi><mi>J</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo verificado: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> (única entrada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>=</mo><mn>0</mn></mrow></math> (índice <math display=\"inline\"><mn>3</mn></math>); la cadena de núcleos (dim <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn></mrow></math>; saltos <math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow></math>); la matriz de Jordan <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; y la base de Jordan (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>∈</mo><msub><mi>E</mi><mn>3</mn></msub><mo>∖</mo><msub><mi>E</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> autovector). Se recogen los dibujos del original (esquema de bloques) y las notas informales (<math display=\"inline\"><mi>A</mi></math> VALE 3 = índice). Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p086.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Verificación de la base de Jordan y matriz de paso",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se verifica la base de Jordan de p086: escribiendo las imágenes de los vectores de <math display=\"inline\"><mi>β</mi></math> como combinación de <math display=\"inline\"><mi>β</mi></math>, se obtienen directamente las columnas de la matriz de Jordan."
    },
    {
     "mota": "testua",
     "html": "La base (en orden de Jordan) <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Usando <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>,</mo><mn>2</mn><mi>z</mi><mo>,</mo><mi>z</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>12</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Colocando los coeficientes por columnas, queda confirmada la <strong>matriz de Jordan</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Matriz de paso.</strong> Por el convenio <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>P</mi><mi>A</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>J</mi><mi>P</mi></mrow></math>, las columnas de <math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> son los vectores de <math display=\"inline\"><mi>β</mi></math>: <math display=\"block\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Resumen (cadena de núcleos): <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>∈</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>∈</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <strong>dos</strong> bloques de Jordan (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>), autovalor <math display=\"inline\"><mn>2</mn></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — correcciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las descomposiciones de las cuatro imágenes están verificadas y confirman <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (la base es correcta). <strong>Correcciones (enumeradas):</strong> (i) el original escribe la imagen <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>», pero lo correcto es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (la tercera componente es <math display=\"inline\"><mrow><mn>2</mn><mi>z</mi><mo>=</mo><mn>2</mn></mrow></math>, no <math display=\"inline\"><mn>1</mn></math>; lapsus de copia, la descomposición es correcta). (ii) La nota «3 BLOQUES DE JORDAN» es errónea: hay <strong>dos</strong> bloques (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>), como muestra la propia matriz <math display=\"inline\"><mi>J</mi></math>; los tres son la cadena de núcleos, no bloques. (iii) En la tabla, <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub></math> se lee «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>», pero el de p086-87 es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Véase <code>koadernoa_landeta2_alg_p088.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Polinomios característicos: raíces complejas y raíz triple",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos ejemplos: cuando el polinomio característico de una matriz no tiene raíces reales en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>, y cuando otra tiene una raíz triple."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 1: raíces complejas, <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi></mrow></math> es <strong>triangular superior por bloques</strong> (el bloque inferior izquierdo es nulo); por tanto, el determinante es el producto de los dos bloques <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Haciendo <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>t</mi><mo>+</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>t</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>⇒</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <strong>no hay raíces reales</strong>."
    },
    {
     "mota": "abisua",
     "titulua": "Solo se descompone en C",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> no tiene factores lineales en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>; por tanto <math display=\"inline\"><mi>f</mi></math> <strong>no es diagonalizable ni triangularizable en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math></strong> (solo se descompone en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 2: raíz triple, <math display=\"inline\"><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La segunda columna de <math display=\"inline\"><mrow><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi></mrow></math> tiene una única entrada (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><mn>3</mn></mrow></math>); desarrollando por ella y reduciendo mediante operaciones de columnas y filas a los menores <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Autovalores: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>) y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>3</mn></mrow></math>). <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (el subespacio del autovalor 0 es el núcleo; el cálculo, en la página siguiente)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — correcciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El ejemplo 1 es correcto: por bloques <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math>, sin raíces reales (solo en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>). En el ejemplo 2: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>), <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>. <strong>Correcciones (enumeradas):</strong> (i) la entrada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de <math display=\"inline\"><mi>A</mi></math> puede leerse aquí como «<math display=\"inline\"><mn>3</mn></math>», pero la página siguiente (escrito <math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi></mrow></math>) obliga a que sea <math display=\"inline\"><mn>5</mn></math> (la traza <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>9</mn><mo>=</mo><mn>0</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn></mrow></math> es coherente con <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>); se ha tomado <math display=\"inline\"><mn>5</mn></math>. (ii) En la línea intermedia escribe «<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>−</mo><mi>x</mi><mo>+</mo><mn>3</mn></mrow></math>», pero para obtener <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn></mrow></math> hace falta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (en el menor aparece <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mn>5</mn></mrow></math>); el resultado es correcto, el lapsus está en la línea intermedia. <strong>Confianza media</strong>: algunas entradas de <math display=\"inline\"><mi>A</mi></math> no se leen con seguridad. Véase <code>koadernoa_landeta2_alg_p094.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Subespacios propios y generalizados; inicio de la base de Jordan (<math display=\"inline\"><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del estudio del endomorfismo <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></math> de p094."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Subespacios propios"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>:</strong> resolviendo <math display=\"inline\"><mrow><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> (de la 4.ª <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>5</mn><mi>t</mi></mrow></math>, de la 3.ª <math display=\"inline\"><mrow><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn><mi>t</mi><mo>⇒</mo><mn>25</mn><mi>t</mi><mo>=</mo><mn>7</mn><mi>t</mi><mo>⇒</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>; de la 2.ª <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>): <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>3</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:</strong> resolviendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> (de la 2.ª <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>3</mn><mi>t</mi><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>, de la 4.ª <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math>, sustituyendo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi></mrow></math>): <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>≠</mo><mn>3</mn><mo>=</mo><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>, por tanto <strong><math display=\"inline\"><mi>f</mi></math> NO es diagonalizable</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Subespacio generalizado <math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>3</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>. Al cuadrado: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>27</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>27</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Una sola ecuación <math display=\"inline\"><mrow><mn>18</mn><mi>x</mi><mo>+</mo><mn>9</mn><mi>z</mi><mo>−</mo><mn>27</mn><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>−</mi><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>=</mo><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>.</mi></mrow></math> La cadena se detiene en <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math> (la dimensión ya es <math display=\"inline\"><mrow><mo>=</mo><msub><mi>m</mi><mtext mathvariant=\"normal\">alg</mtext></msub></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Primeros vectores de la base de Jordan"
    },
    {
     "mota": "testua",
     "html": "Un vector de <math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∖</mo><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Cadena: <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo>⋅</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> col</mtext></mrow><mn>3</mn></msub><mo>+</mo><mn>1</mn><mo>⋅</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> col</mtext></mrow><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "★ Esta página aclara la duda de p094: como la última fila de <math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi></mrow></math> explícita es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>44</mn></msub><mo>=</mo><mn>5</mn></mrow></math> (traza <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>9</mn></mrow></math>, coincide con la suma de las raíces de <math display=\"inline\"><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></math>). Todo comprobado: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>≠</mo><mn>3</mn></mrow></math> → no diagonalizable), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> (las cuatro filas confirmadas), <math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></math>), y los primeros vectores de Jordan (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Se han recogido algunos lapsus del original («Ker f = L₁(3)», matriz «A» = <math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi></mrow></math>). Véase <code>koadernoa_landeta2_alg_p096.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Completar la forma de Jordan y matriz de una aplicación lineal en dos bases",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Final del ejercicio de Jordan de p096: número y tamaños de los bloques a partir de los saltos de dimensión."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Número y tamaños de los bloques"
    },
    {
     "mota": "testua",
     "html": "Dimensiones: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>. Saltos: <math display=\"block\"><mrow><msub><mi>d</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>2</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>1</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math> Bloques de tamaño <math display=\"inline\"><mrow><mo>≥</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>d</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>; <strong>todos</strong> los bloques de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>. Por tanto, para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math> hay <strong>un bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> y uno <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math></strong>. Para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>) hay un bloque <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base completa y matriz de Jordan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>J</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> donde <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math> (bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (bloque <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>), y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (bloque <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>). Matriz de Jordan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz de una aplicación lineal en dos bases"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Matriz asociada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dadas <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>E</mi><mo>→</mo><mi>F</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>β</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, siendo <math display=\"inline\"><mrow><msub><mi>β</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> bases, las <strong>columnas</strong> de <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mn>1</mn></msub><msub><mi>β</mi><mn>2</mn></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son las coordenadas de las imágenes de los vectores de <math display=\"inline\"><msub><mi>β</mi><mn>1</mn></msub></math> en <math display=\"inline\"><msub><mi>β</mi><mn>2</mn></msub></math>: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mn>1</mn></msub><msub><mi>β</mi><mn>2</mn></msub></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mi>i</mi><mo>′</mo></msup></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo comprobado: el número de bloques (saltos <math display=\"inline\"><mrow><msub><mi>d</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow></math> → para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math> un <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> y un <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>; para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> un <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>), la matriz de Jordan <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y la definición de matriz asociada. <strong>Corrección (transcrita):</strong> el original escribe el primer vector «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>», pero el cálculo de p096-97 da <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (lapsus de signo en la primera componente; no afecta a la estructura, porque <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></math> proviene de <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math>). «<math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» = <math display=\"inline\"><mrow><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y otros lapsus de subíndices están recogidos. Véase <code>koadernoa_landeta2_alg_p098.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a37",
   "maila": 1,
   "izenburua": "Forma canónica de equivalencia mediante operaciones elementales (<math display=\"inline\"><mrow><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La matriz de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> se lleva a la forma canónica de equivalencia (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>) mediante operaciones elementales, guardando las matrices de paso."
    },
    {
     "mota": "testua",
     "html": "En las bases dadas <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Rango",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Desarrollando un menor <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> (por la primera fila): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mo>−</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">errango</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> (no <math display=\"inline\"><mn>3</mn></math>), y la forma canónica de equivalencia es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Método: matriz ampliada <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>4</mn></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>A</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>I</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la matriz ampliada <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>I</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> se aplican a la vez <strong>operaciones por filas</strong> y <strong>operaciones por columnas</strong>: las de las filas se acumulan en el bloque izquierdo (<math display=\"inline\"><mrow><mo>→</mo><mi>Q</mi></mrow></math>), las de las columnas en el derecho (<math display=\"inline\"><mrow><mo>→</mo><mi>P</mi></mrow></math>), hasta llegar a la forma canónica <math display=\"inline\"><mi>A</mi></math>. Al final:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>Q</mi><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Secuencia de operaciones aplicada (escrita con claridad en el original): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>F</mi><mn>4</mn></msub><mo>→</mo><msub><mi>F</mi><mn>4</mn></msub><mo>+</mo><msub><mi>F</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>F</mi><mn>1</mn></msub><mo>→</mo><msub><mi>F</mi><mn>1</mn></msub><mo>−</mo><msub><mi>F</mi><mn>2</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>→</mo><msub><mi>C</mi><mn>2</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>3</mn></msub><mo>→</mo><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>F</mi><mn>3</mn></msub><mo>→</mo><msub><mi>F</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msub><mi>F</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>1</mn></msub><mo>→</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>1</mn></msub><mo>→</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>→</mo><mi>−</mi><msub><mi>C</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mtd></mtr></mtable></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Confianza media:</strong> la página es muy densa; <strong>muchas</strong> entradas numéricas de las matrices ampliadas no se leen con seguridad (en especial el bloque derecho, que acumula las operaciones por columnas, <math display=\"inline\"><mrow><mo>→</mo><mi>P</mi></mrow></math>). Lo comprobado y fiable: el rango de <math display=\"inline\"><mi>A</mi></math> es <math display=\"inline\"><mn>2</mn></math> (determinante del menor <math display=\"inline\"><mn>0</mn></math>; la cadena «<math display=\"inline\"><mrow><mn>5</mn><mo>−</mo><mn>4</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math>» del original está mal leída, pero el resultado <math display=\"inline\"><mn>0</mn></math> es correcto), la forma de equivalencia es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>, el método es estándar (forma canónica <math display=\"inline\"><mrow><mi>Q</mi><mi>A</mi><mi>P</mi><mo>=</mo></mrow></math>) y la secuencia de operaciones es coherente (cada paso produce el cero esperado, terminando con las multiplicaciones <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>). Los valores finales de las matrices <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> no se pueden verificar numéricamente; no se han inventado. Véase <code>koadernoa_landeta2_alg_p102.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Matrices equivalentes, espacio de polinomios e imagen inversa vacía",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tres temas: relación entre matrices asociadas en distintos pares de bases, el espacio de polinomios <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y vectores que no están en la imagen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrices equivalentes (cuatro bases)"
    },
    {
     "mota": "testua",
     "html": "Matriz de <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> en dos pares de bases, <math display=\"inline\"><mi>A</mi></math> (<math display=\"inline\"><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>→</mo><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub></mrow></math>) y <math display=\"inline\"><mi>B</mi></math> (<math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>′</mo></msubsup><mo>→</mo><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></mrow></math>). Relacionándola con otra matriz (<math display=\"inline\"><mi>C</mi></math>), <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>B</mi><mi>P</mi><mo>=</mo><msup><mi>Q</mi><mo>′</mo></msup><mi>A</mi><msup><mi>P</mi><mo>′</mo></msup></mrow></math>; de ahí:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>Q</mi><mo>′</mo></msup><mi>A</mi><msup><mi>P</mi><mo>′</mo></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><msup><mi>P</mi><mo>′</mo></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> = coordenadas de <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>′</mo></msubsup></math> respecto de <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></math>, y <math display=\"inline\"><mrow><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>Q</mi><mo>′</mo></msup></mrow></math> = coordenadas de <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub></math> respecto de <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></math> (todas las matrices de paso son invertibles)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espacio de polinomios <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las coordenadas de <math display=\"block\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msub><mi>a</mi><mn>3</mn></msub><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><msup><mi>x</mi><mn>4</mn></msup><mo>:</mo><msub><mi>a</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> oinarri kanonikoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><msup><mi>x</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"0.222em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>5</mn><mi>.</mi></mrow></math> de <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> en la base canónica (<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><msup><mi>x</mi><mn>4</mn></msup></mrow></math> filas) se reúnen en una matriz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Imagen e imagen inversa vacía: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℚ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℚ</mi><mn>3</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>β</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Las columnas son los generadores de la imagen: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>2</mn><mo>&lt;</mo><mn>3</mn><mo>,</mo></mrow></math> por tanto <math display=\"inline\"><mi>f</mi></math> <strong>no es sobreyectiva</strong>: hay vectores sin imagen inversa. Por ejemplo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: es independiente de <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>3</mn><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> por tanto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> y <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. <strong>Condición general:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> si y solo si <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo comprobado: la relación de matrices equivalentes (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>Q</mi><mo>′</mo></msup><mi>A</mi><msup><mi>P</mi><mo>′</mo></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, glosa correcta de las matrices de paso), <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>5</mn></mrow></math>), y la imagen/imagen inversa vacía (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, determinante <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mo>≠</mo><mn>0</mn></mrow></math> → <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>∅</mi></mrow></math>; condición general como condición de determinante). <math display=\"inline\"><mi>T</mi></math> tiene <strong>seis</strong> elementos pero la matriz de coordenadas del original tiene cinco columnas: falta una columna o la última está cortada (duda de lectura); no se ha completado. Véase <code>koadernoa_landeta2_alg_p104.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Matriz equivalente y coordenadas: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La matriz de una aplicación lineal y su <strong>matriz equivalente</strong> (forma <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>0</mn><mo>;</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>), y las coordenadas de un punto en la base de llegada."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz equivalente y rango"
    },
    {
     "mota": "testua",
     "html": "A la matriz de un endomorfismo (o aplicación) le corresponden <strong>infinitas matrices equivalentes</strong>: se pasa de una a otra cambiando las bases. Por ejemplo, la matriz de <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(las filas <math display=\"inline\"><mrow><mn>1</mn><mi>.</mi></mrow></math> y <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi></mrow></math> son iguales; como existe un menor no nulo de orden <math display=\"inline\"><mn>3</mn></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3</mn></mrow></math>.) Como el rango es <math display=\"inline\"><mn>3</mn></math>, su <strong>forma canónica de equivalencia</strong> es"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>3</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coordenadas en la base <math display=\"inline\"><msub><mi>β</mi><mn>3</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><msub><mi>β</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, resolviendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (comprobado con SymPy):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mi>y</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mfrac><mrow><mi>y</mi><mo>+</mo><mi>z</mi></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Multiplicando estas coordenadas por la matriz de <math display=\"inline\"><mi>f</mi></math> se obtiene la <strong>imagen</strong> de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en la base de llegada."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0066</code>, páginas 132-133; &quot;ÁLGEBRA LANDETA&quot;). Comprobado con SymPy: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math> (con la fila repetida) y las coordenadas <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mi>y</mi></mrow><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><mi>y</mi><mo>+</mo><mi>z</mi></mrow><mn>2</mn></mfrac></mrow></math> (<math display=\"inline\"><mi>μ</mi></math> y <math display=\"inline\"><mi>δ</mi></math> coinciden con el original; aclarado el borrador de <math display=\"inline\"><mi>λ</mi></math>). Sin correcciones. Véase <code>koadernoa_landeta1_alg_p132.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p134_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); imagen, núcleo y teorema del rango (corrección: no sobreyectiva)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>: imagen, núcleo y teorema del rango",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La <strong>imagen</strong> y el <strong>núcleo</strong> de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> anterior, y aplicando el <strong>teorema del rango</strong> se concluye que <math display=\"inline\"><mi>f</mi></math> es inyectiva (pero <strong>no</strong> sobreyectiva)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Imagen (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Está <strong>generada por las columnas</strong> de la matriz <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (en la base de llegada), y su dimensión es el rango de la matriz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Núcleo (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>) y teorema del rango"
    },
    {
     "mota": "testua",
     "html": "<strong>Teorema del rango-nulidad</strong> (teorema de la dimensión):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "De ahí <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Inyectiva, pero no sobreyectiva (corrección)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Inyectiva:</strong> como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mi>f</mi></math> es <strong>inyectiva</strong>.",
      "<strong>No sobreyectiva:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, por tanto <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>⊊</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>: <math display=\"inline\"><mi>f</mi></math> <strong>no es sobreyectiva</strong>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Corrección (sobreyectividad)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la página original se escribe &quot;<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> (sobreyectiva)&quot;, pero eso es <strong>imposible</strong>: una aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> tiene siempre <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>, por lo que <strong>nunca es sobreyectiva</strong> sobre <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>. Aquí <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> es un subespacio propio de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>. Comprobado con SymPy (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>). Variación señalada."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0067</code>, páginas 134-135; &quot;ÁLGEBRA LANDETA&quot;). La página es <strong>muy densa</strong> (muchas dudas de lectura en el producto de matrices); las conclusiones están comprobadas con SymPy: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math> (teorema del rango <math display=\"inline\"><mrow><mn>3</mn><mo>=</mo><mn>0</mn><mo>+</mo><mn>3</mn></mrow></math>), <math display=\"inline\"><mi>f</mi></math> <strong>inyectiva</strong> pero <strong>no sobreyectiva</strong>. Corrección «Sobreyectiva» señalada. Véase <code>koadernoa_landeta1_alg_p134.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p174_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); base nueva e independencia lineal mediante un menor (f: R^3 -> R^4)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>: base nueva e independencia lineal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>. Se toma una <strong>base nueva</strong> en el espacio de llegada, se calculan sus imágenes y se demuestra que esas imágenes son <strong>linealmente independientes</strong> mediante un <strong>menor</strong> no nulo de una matriz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base nueva y sus imágenes"
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>10</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>14</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por linealidad, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>μ</mi><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><mi>δ</mi><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>δ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Independencia lineal mediante un menor"
    },
    {
     "mota": "testua",
     "html": "Poniendo las imágenes como <strong>filas</strong> de una matriz <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>, el rango es como máximo <math display=\"inline\"><mn>3</mn></math>. Si el menor <math display=\"inline\"><mrow><mn>2</mn><mi>.</mi></mrow></math> formado por las columnas <math display=\"inline\"><mrow><mn>3</mn><mi>.</mi></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi></mrow></math> y <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> no es nulo, el rango es <math display=\"inline\"><mn>3</mn></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>10</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>28</mn><mo>+</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>60</mn><mo>−</mo><mn>22</mn><mo>=</mo><mn>38</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> son <strong>linealmente independientes</strong>."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Como las tres imágenes son independientes en <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, junto con un cuarto vector adecuado (p. ej. <math display=\"inline\"><mrow><msub><mi>e</mi><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) forman una <strong>base</strong> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>: <math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msub><mi>e</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>.\n  En esa base, la matriz <strong>reducida</strong> de <math display=\"inline\"><mi>f</mi></math> es <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0088</code>, páginas 174-175; &quot;ÁLGEBRA LANDETA&quot;). Comprobado con SymPy: el determinante del menor <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> es <math display=\"inline\"><mrow><mo>=</mo><mn>38</mn><mo>≠</mo><mn>0</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3</mn></mrow></math> y las tres imágenes son independientes. La página original escribe una vez <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (error de signo en la tercera componente); en todo lo demás se usa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (que concuerda con el determinante), y es el que se ha tomado. Véase <code>koadernoa_landeta1_alg_p174.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p176_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); matrices equivalentes C=QAP y coordenadas (corrección: fórmulas de mu, delta)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Matrices equivalentes: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math> y cambio de base",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para que dos matrices sean <strong>equivalentes</strong> (<math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>C</mi></math>) hacen falta matrices de cambio de base. El método construye las matrices <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> para pasar de <math display=\"inline\"><mi>A</mi></math> a la forma reducida <math display=\"inline\"><mi>C</mi></math> (de la forma <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>), y calcula las coordenadas en la base nueva."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Equivalencia y matrices de paso"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>C</mi></math> son <strong>equivalentes</strong> si y solo si existen <math display=\"inline\"><mi>P</mi></math> (cambio de base en el dominio) y <math display=\"inline\"><mi>Q</mi></math> (cambio de base en el codominio), tales que"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hortik </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>C</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Cuidado: producto en orden inverso",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las matrices se multiplican en <strong>orden inverso</strong> en los cambios de base: en <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>, <math display=\"inline\"><mi>P</mi></math> va a la derecha (dominio) y <math display=\"inline\"><mi>Q</mi></math> a la izquierda (codominio). Para recuperar <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>C</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aquí <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>′</mo></msubsup><mo>,</mo><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></mrow></msub></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub><mo>,</mo><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></mrow></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coordenadas en la base <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></math>"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>10</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>14</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, se resuelven las coordenadas de cualquier <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>3</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>μ</mi><mo>−</mo><mn>3</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>10</mn><mi>λ</mi><mo>+</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>14</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mn>3</mn><mi>δ</mi><mo>+</mo><mi>ε</mi></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>μ</mi><mo>=</mo><mfrac><mrow><mn>30</mn><mi>x</mi><mo>+</mo><mn>16</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi></mrow><mn>22</mn></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>δ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>10</mn><mi>x</mi><mo>−</mo><mn>9</mn><mi>y</mi><mo>+</mo><mi>z</mi></mrow><mn>11</mn></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>19</mn><mi>x</mi><mo>+</mo><mn>16</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>11</mn><mi>t</mi></mrow><mrow><mn>11</mn><mi>.</mi></mrow></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Comprobado con SymPy; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>22</mn><mo>≠</mo><mn>0</mn></mrow></math>, por tanto es base.)"
    },
    {
     "mota": "oharra",
     "titulua": "Corrección (fórmulas de las coordenadas)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la página original <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>19</mn><mi>x</mi><mo>+</mo><mn>16</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>11</mn><mi>t</mi></mrow><mn>11</mn></mfrac></mrow></math> son <strong>correctas</strong>, pero las <strong>fórmulas encuadradas de <math display=\"inline\"><mi>μ</mi></math> y <math display=\"inline\"><mi>δ</mi></math> tienen errores</strong>: en <math display=\"inline\"><mi>μ</mi></math> se escribe <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>z</mi></mrow></math> en vez de <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>z</mi></mrow></math>, y en <math display=\"inline\"><mi>δ</mi></math> se escribe <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>y</mi></mrow></math> en vez de <math display=\"inline\"><mrow><mi>−</mi><mn>9</mn><mi>y</mi></mrow></math> (errores de aritmética en las sustituciones intermedias). Corregidas con SymPy. Curiosidad: en la tabla de coordenadas de la página siguiente (<code>p178</code>) aparecen casi siempre los valores <strong>correctos</strong>, a pesar de las fórmulas erróneas. Variaciones señaladas. Véase <code>koadernoa_landeta1_alg_p176.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p178_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); construcción de la matriz Q y equivalencia (corrección: cuarta columna)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Construcción de la matriz <math display=\"inline\"><mi>Q</mi></math> y equivalencia: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Final del método anterior: la matriz de paso <math display=\"inline\"><mi>Q</mi></math> se construye <strong>columna a columna</strong>, usando las fórmulas de las coordenadas, y se comprueba la equivalencia <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Columnas de <math display=\"inline\"><mi>Q</mi></math>: coordenadas en <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></math>"
    },
    {
     "mota": "testua",
     "html": "Cada columna de <math display=\"inline\"><mi>Q</mi></math> son las coordenadas de un vector de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> en la base <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></math> (calculadas con las fórmulas de la página anterior). Comprobadas con SymPy:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mfrac><mn>15</mn><mn>11</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>10</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>19</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>7</mn><mn>11</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>3</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>3</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>11</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>6</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>3</mn><mn>22</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>8</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Equivalencia"
    },
    {
     "mota": "testua",
     "html": "Formando <math display=\"inline\"><mi>Q</mi></math> con esas columnas, y siendo <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>I</mi></mrow></math> (la base del dominio es la canónica), el producto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Esta es la <strong>esencia</strong> de las matrices equivalentes: toda matriz de rango <math display=\"inline\"><mi>r</mi></math> es equivalente a la de forma <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>.\n  Aquí, elegir <math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msub><mi>e</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> convierte la matriz de <math display=\"inline\"><mi>f</mi></math>\n  directamente en <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>: porque la base de la imagen pasa a formar parte de la base del codominio.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Corrección (cuarta columna)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la página original las tres primeras columnas de coordenadas son <strong>correctas</strong> (coinciden con SymPy), pero la cuarta, la de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, está mal: en la página se escribe <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>6</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>4</mn><mn>11</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, pero el valor correcto es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>3</mn><mn>22</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>8</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Como la matriz <math display=\"inline\"><mi>A</mi></math> de abajo también cambia de una página a otra (deslices aritméticos), aquí se destacan el <strong>método</strong> y el resultado principal (la equivalencia <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) más que las columnas concretas. Variación señalada. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta1_alg_p178.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p180_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); forma canónica de Jordan I: endomorfismo, chi=(x-1)^3(x-2), no diagonalizabilidad",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>: <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. Calcula <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Núcleo"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Del sistema homogéneo (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>4</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math>, siendo <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub></mrow></math> libres:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><mi>−</mi><msub><mi>a</mi><mn>4</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(los dos generadores son linealmente independientes)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema de la dimensión"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>4</mn><mo>=</mo><mn>2</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> no es <strong>sobreyectiva</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> es un subespacio estricto de <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), ni <strong>inyectiva</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Imagen"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math> pueden tomar <strong>cualquier</strong> valor real (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub></mrow></math> (o <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math>) pueden variar independientemente), por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><msup><mi>x</mi><mn>2</mn></msup><mo>:</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⊊</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el teorema de la dimensión el original escribe &quot;<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>&quot; (desigualdad), pero eso es un <strong>error</strong> respecto al teorema estándar: es siempre una igualdad (&quot;teorema del rango-nulidad&quot;), como muestra la propia aritmética de <math display=\"inline\"><mrow><mn>4</mn><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math>; aquí se ha corregido como igualdad. El diagrama gráfico (Ker/Im, en rojo &quot;CUIDADO! AUNQUE TIENE LAS MISMAS DIMENSIONES...&quot;) no se ha rehecho aquí."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_leo_p190_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Matrices equivalentes; rango y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrices equivalentes"
    },
    {
     "mota": "testua",
     "html": "Matriz asociada de <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, reduciendo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>;</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> hasta la forma canónica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><msup><mi>B</mi><mo>′</mo></msup></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la misma aplicación lineal <math display=\"inline\"><mi>f</mi></math>, cambiando las bases se obtienen <strong>infinitas</strong> matrices asociadas; todas son <strong>equivalentes</strong> (tienen el mismo rango):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>≔</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La condición principal que cumplen dos matrices equivalentes es tener el <strong>mismo rango</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Rango mediante menores orlados"
    },
    {
     "mota": "testua",
     "html": "Los tres menores <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> (tomando de tres en tres las filas <math display=\"inline\"><mn>4</mn></math>) se anulan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(todos, porque <math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son dependientes: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Sin embargo, un menor <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> no es nulo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimensión de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por el teorema de la dimensión:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Reduciendo la matriz a la forma canónica se obtiene <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, que coincide con <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fórmula explícita de <math display=\"inline\"><mi>f</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>−</mo><mn>6</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(comprobado directamente aplicándola a la matriz asociada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi></msup></mrow></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los tres determinantes <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> y el menor <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> están todos comprobados. El razonamiento directo de la dimensión de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> (&quot;DADO QUE M{0̄} HAY TANTO FILAS COMO...&quot;) tiene una sintaxis muy difícil en el original; aquí se ha usado directamente el teorema de la dimensión (el resultado numérico coincide)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_leo_p192_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> completo; matriz asociada en dos bases arbitrarias",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cálculo de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Del sistema homogéneo de <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> de la página anterior (<math display=\"inline\"><mrow><mi>−</mi><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>2</mn><mi>z</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mi>−</mi><mi>z</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>−</mi><mn>2</mn><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(comprobado: <math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cumple las cuatro ecuaciones originales)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz asociada entre dos bases arbitrarias"
    },
    {
     "mota": "testua",
     "html": "Dadas las bases <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mi>v</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>v</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>v</mi><mn>3</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, las columnas de la matriz asociada son las coordenadas de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>λ</mi><mn>11</mn></msub><msubsup><mi>v</mi><mn>1</mn><mo>′</mo></msubsup><mo>+</mo><msub><mi>λ</mi><mn>21</mn></msub><msubsup><mi>v</mi><mn>2</mn><mo>′</mo></msubsup><mo>+</mo><msub><mi>λ</mi><mn>31</mn></msub><msubsup><mi>v</mi><mn>3</mn><mo>′</mo></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> etab. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>1) A través de la aplicación <math display=\"inline\"><mi>β</mi></math>.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>2) Expresar las imágenes en <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>μ</mi><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>γ</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>μ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>γ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El segundo vector de <math display=\"inline\"><mi>β</mi></math> aparece en el original como &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;, pero el cálculo posterior (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) ha confirmado que el vector real es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; aquí se ha corregido. Todos los demás cálculos (los dos sistemas de <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>) están comprobados. La nota &quot;VERTICAL!! (COMO CASI SIEMPRE)&quot; se refiere a escribir en las columnas de la matriz."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_leo_p194_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Completar la base con <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>; diagrama conmutativo",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Completar la base"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (una parte de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>) se completa con otros dos vectores para obtener una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></munder><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las imágenes, usando la fórmula de <math display=\"inline\"><mi>f</mi></math> de la página anterior:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(las tres comprobadas; la última, al ser la de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>, da cero, como se esperaba). Con las imágenes se forma una base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagrama conmutativo: <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> las matrices (invertibles) de cambio de base, relacionan <math display=\"inline\"><mi>A</mi></math> (en las bases canónicas) y <math display=\"inline\"><mi>B</mi></math> (en las bases nuevas):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — confianza baja",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El paso de construir la base a partir de Ker f y el cálculo de las imágenes están completamente comprobados. La matriz <math display=\"inline\"><mi>P</mi></math> de la página derecha, una matriz <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> con fracciones, y el sistema final de <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi></mrow></math> son de lectura muy difícil en el original (números muy pequeños); no se reproducen aquí como números, sino solo el concepto principal (el diagrama conmutativo <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>, resultado estándar del álgebra lineal). El segundo vector de <math display=\"inline\"><mi>β</mi></math> (&quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; frente a &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;) presenta una diferencia de lectura entre las dos partes de la página."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_leo_p196_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>: factorización completa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cerrando el sistema (<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn></mrow></math>), se obtiene la factorización completa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mo>⋅</mo><mi>A</mi><mo>⋅</mo><mi>P</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Formas canónicas alternativas"
    },
    {
     "mota": "testua",
     "html": "Hay otras dos opciones, cambiando el orden de las bases:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><msubsup><mi>β</mi><mtext mathvariant=\"normal\">jatorrizkoa</mtext><mo>′</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><msub><mi>β</mi><mtext mathvariant=\"normal\">jatorrizkoa</mtext></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comprobación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⋅</mo><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mn>0</mn><mo>⋅</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><msub><mi>v</mi><mn>4</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(trivial, porque <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es a su vez el tercer vector de la base nueva)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — confianza media",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El sistema final de <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi></mrow></math> y el desarrollo de <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math> completo son de lectura muy difícil en el original; se han recogido los valores finales (<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn></mrow></math>), pero los pasos intermedios (sobre todo la expresión &quot;<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>3</mn><mi>λ</mi></mrow></math>&quot;) no son del todo coherentes en la transcripción literal. Las matrices <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>P</mi></math> coinciden con los resultados de p190-194. Este ejercicio (desde Ker <math display=\"inline\"><mi>f</mi></math> hasta la factorización completa B=QAP) se cierra aquí."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p119_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Nukleoa y irudia; ongi definitutako aplikazioa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(13) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (<math display=\"inline\"><mi>n</mi></math> es impar)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>V</mi></math> un espacio vectorial de dimensión finita, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi></mrow></math> <strong>impar</strong>, y <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> una aplicación lineal. Demostrar que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos, por reducción al absurdo, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>. Entonces sus dimensiones son iguales: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>. Por el teorema del rango-nulidad: <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>,</mo></mrow></math>, es decir, <math display=\"inline\"><mi>n</mi></math> es <strong>par</strong>. Pero habíamos supuesto que <math display=\"inline\"><mi>n</mi></math> es impar: contradicción. Por tanto <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y en particular <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(14) <math display=\"inline\"><mi>f</mi></math> ongi definitua <math display=\"inline\"><mi>W</mi></math> azpiespazioan"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>,</mo><mi>−</mi><mn>3</mn><mi>z</mi><mo>−</mo><mi>t</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (i) Demostrar que que <math display=\"inline\"><mi>f</mi></math> está bien definida."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>Los generadores <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>3</mn><mo>≠</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>f</mi></math> está bien definida <math display=\"inline\"><mi>W</mi></math> de <math display=\"inline\"><mi>W</mi></math> si aplica (una única imagen por elemento). Las imágenes de los generadores: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>6</mn><mi>u</mi><mo>+</mo><mi>v</mi><mo>,</mo></mrow></math> ambas <math display=\"inline\"><mi>W</mi></math>. Por tanto <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> está bien definida."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original escribe en el margen rojo &quot;LA SUMA DE DOS NÚMEROS IGUALES NUNCA ES PAR&quot;; eso es <strong>incorrecto</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math> es siempre par), y lo contradice la propia nota negra del autor &quot;PAR&quot; (bajo <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>). El núcleo de la demostración es correcto. En el diagrama de la aplicación hay una &quot;X&quot; roja sobre la flecha con dos salidas desde <math display=\"inline\"><mi>x</mi></math>: una aplicación no puede asignar dos imágenes al mismo elemento. La curva central y la circunferencia <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> (marcadas &quot;MAL&quot;) cortan a una recta vertical más de una vez, por lo que no son gráficas de funciones de <math display=\"inline\"><mi>x</mi></math>. El símbolo rojo posterior a &quot;<math display=\"inline\"><mrow><mi>n</mi><mo>:</mo><mi>n</mi></mrow></math> impar&quot; y &quot;DEMOSTRADO&quot; (¿<math display=\"inline\"><mi>!</mi></math>?) son lecturas dudosas."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p002_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Linealidad y matriz asociada en una base",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Criterio de linealidad"
    },
    {
     "mota": "testua",
     "html": "Para que <math display=\"inline\"><mi>f</mi></math> sea lineal, debe cumplirse lo siguiente para todos los <math display=\"inline\"><mrow><mi>v</mi><mo>,</mo><msup><mi>v</mi><mo>′</mo></msup><mo>∈</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">𝕂</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>v</mi><mo>+</mo><mi>μ</mi><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En particular, debe ser <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>. Heurísticamente, la aplicación <strong>no es lineal</strong> si en las coordenadas hay un término constante (<math display=\"inline\"><mrow><mi>+</mi><mi>K</mi></mrow></math>) o un producto/cuadrado (<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El subespacio <math display=\"inline\"><mi>W</mi></math> y su base"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los generadores son independientes (el determinante de las dos primeras coordenadas es <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>), luego <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">𝕂</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>. La base propuesta <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> también es válida:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>9</mn><mo>≠</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii) Matriz asociada de <math display=\"inline\"><mi>f</mi></math> en la base <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Las imágenes de los vectores de la base, expresadas en coordenadas de <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><msub><mi>w</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><mn>4</mn><msub><mi>w</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Colocando las coordenadas en columnas, la matriz asociada es de <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>,</mo><msub><mi>β</mi><mi>W</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — correcciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original escribe &quot;LA MATRIZ SERÁ DE <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>&quot;, razonando que los vectores tienen cuatro coordenadas; eso es <strong>incorrecto</strong>: la matriz de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> en la base <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>) es de <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>, no de <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>. Asimismo, la etiqueta &quot;<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>&quot; posterior no concuerda con la aplicación <math display=\"inline\"><mrow><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> dibujada. La fórmula de <math display=\"inline\"><mi>f</mi></math> no aparece en esta imagen; la matriz se ha deducido a partir de las dos evaluaciones visibles. La nota del margen rojo (&quot;si no puedo pasar el vector <math display=\"inline\"><mn>0</mn></math> no es espacio vectorial&quot;) probablemente se refiere al criterio de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>; sin embargo, que <math display=\"inline\"><mi>f</mi></math> sea no lineal no implica que <math display=\"inline\"><mi>W</mi></math> deje de ser un espacio vectorial."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p004_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "Coordenadas en la base canónica; rango y forma equivalente",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en la base canónica"
    },
    {
     "mota": "testua",
     "html": "Coordenadas de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en la base canónica de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, resolviendo los sistemas <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi></mrow></math>. Siendo <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>μ</mi><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mo>=</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mn>6</mn><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>3</mn><mo>=</mo><mn>3</mn><mi>μ</mi></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>λ</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>μ</mi><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>6</mn><mo>=</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mn>6</mn><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>12</mn><mo>=</mo><mn>3</mn><mi>μ</mi></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mi>−</mi><mn>4</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>λ</mi><mo>=</mo><mn>10</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "En ambos casos <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>. Poniendo las coordenadas (<math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi></mrow></math>) en columnas, la matriz en la base canónica es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Coincide con el valor de <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math> respecto de <math display=\"inline\"><mrow><msub><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>,</mo><msub><mi>β</mi><mi>W</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> obtenido en la página anterior."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(15) <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>: rango y forma equivalente"
    },
    {
     "mota": "testua",
     "html": "La matriz de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> en las bases canónicas es de <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>3</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El rango es como máximo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">min</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>; si el rango es <math display=\"inline\"><mn>3</mn></math>, <math display=\"inline\"><mi>f</mi></math> es inyectiva (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>). En <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> también se menciona un subespacio, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (sistema generador)."
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
       "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: la dimensión de la imagen de una aplicación lineal es igual al rango de cualquier matriz que la represente. Además, toda matriz de rango <math display=\"inline\"><mi>r</mi></math> tiene una matriz equivalente de esta forma: <img class=\"formula formula-d\" src=\"../media/formulak/8f825691451b9cbf.svg\" alt=\"mat(augment: #(hline: 1, vline: 1), I_r, 0; 0, 0).\" style=\"width:4.349em;height:2.980em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para explicar &quot;generar&quot;, se indica que una base es un sistema generador (S.G.) <strong>y</strong> libre (S.L.): ninguno de los vectores elegidos puede generarse con los demás. La expresión <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es de lectura muy dudosa (un vector, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, tiene tres componentes en vez de cuatro); esa incoherencia se ha recogido sin corregir. Los resultados del cálculo (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>10</mn></mrow></math>) están comprobados. &quot;Y TAES&quot; probablemente es &quot;también&quot;."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p006_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Matrize baliokideak; automorfismoa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "17(1) Matrices equivalentes"
    },
    {
     "mota": "testua",
     "html": "Dos matrices:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>×</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>×</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Matrices equivalentes",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos matrices son <strong>equivalentes</strong> si son matrices asociadas de una misma aplicación lineal respecto de bases distintas. Esto ocurre cuando tienen el <strong>mismo rango</strong>, es decir, cuando tienen la misma forma canónica <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mi>/</mi><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Dado <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">heina</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, si <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><msup><mi>n</mi><mo>′</mo></msup></mrow></math>, entonces <math display=\"inline\"><mi>f</mi></math> y <math display=\"inline\"><msup><mi>f</mi><mo>′</mo></msup></math> tienen la misma forma de la matriz asociada, y <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son equivalentes."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para la aplicación <math display=\"inline\"><mrow><mi>V</mi><mover><mo>→</mo><mi>f</mi></mover><mi>W</mi></mrow></math>, el tamaño de <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow></math>. Un menor <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> de <math display=\"inline\"><mi>A</mi></math> determina el rango:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El rango es como máximo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">min</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (&quot;el rango máximo es el número mínimo&quot;)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema 1: automorfismo"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> una aplicación lineal, definida así: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>14</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (i) Calcula <math display=\"inline\"><mi>f</mi></math> la matriz asociada a <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> respecto de la base canónica de <math display=\"inline\"><mi>f</mi></math> (ii) Sin demostrar directamente la inyectividad/sobreyectividad, deduce si es un automorfismo."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> los vectores <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> forman una base de <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math> , entonces basta con que el determinante de la matriz formada por sus imágenes como columnas sea <math display=\"inline\"><mi>f</mi></math> para deducir que "
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El ejemplo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la página derecha <strong>no es lineal</strong> (término constante, <math display=\"inline\"><mn>3</mn></math>), y que aparezcan tres <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>,</mo><msub><mi>w</mi><mn>3</mn></msub></mrow></math> en la imagen de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math> es incoherente (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math> tiene dos vectores de base); ese apartado es confuso y no se ha desarrollado. La expresión &quot;<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mn>3</mn><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mn>4</mn><msub><mi>w</mi><mn>3</mn></msub></mrow></math>&quot; repite dos veces &quot;<math display=\"inline\"><msub><mi>w</mi><mn>2</mn></msub></math>&quot; (probablemente la primera debería ser &quot;<math display=\"inline\"><msub><mi>w</mi><mn>1</mn></msub></math>&quot;). &quot;dim <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; probablemente es &quot;<math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; (matriz asociada)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p018_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Matriz asociada en la base canónica",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como combinación de <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Se escribe <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como combinación lineal de la base:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Componente a componente, el sistema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>−</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>3</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mn>2</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>−</mo><mi>δ</mi></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Combinando (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>−</mi><mi>μ</mi><mo>+</mo><mn>5</mn><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mn>3</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>7</mn><mi>δ</mi></mrow></math>), el sistema es compatible determinado y se despejan los coeficientes (con denominador <math display=\"inline\"><mn>17</mn></math>); por ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>17</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(las expresiones de <math display=\"inline\"><mi>λ</mi></math> y <math display=\"inline\"><mi>μ</mi></math> son análogas.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fórmula explícita de <math display=\"inline\"><mi>f</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>f</mi></math> es lineal, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>λ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>δ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; sustituyendo los valores del enunciado y simplificando:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz asociada en la base <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Las columnas de la matriz asociada son las imágenes que <math display=\"inline\"><mi>f</mi></math> da a los vectores de la base canónica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — corrección",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El desarrollo algebraico intermedio de la página izquierda es muy denso, con muchas correcciones y tachaduras; no se ha comprobado en detalle, pero la fórmula final (arriba) es de lectura clara y coincide con la matriz. El original escribe &quot;<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;, pero la fórmula y la matriz dan en la segunda componente <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>), no <math display=\"inline\"><mn>1</mn></math>; aquí se ha recogido <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> corregido, porque es coherente con la tercera columna de la matriz (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). En la expresión de <math display=\"inline\"><mi>μ</mi></math> el original usa &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>5</mn><mi>δ</mi></mrow></math>&quot; en el denominador, una confusión de notación."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p020_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Tipos de morfismo; automorfismo mediante el rango",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tipos de morfismo"
    },
    {
     "mota": "testua",
     "html": "Clasificación de una aplicación lineal (aplicación lineal = <strong>homomorfismo</strong>):"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [
        "<strong>Mota</strong>",
        "<strong>Baldintza gehigarria</strong>"
       ],
       "lerroak": [
        [
         "Endomorfismoa",
         "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math>"
        ],
        [
         "Monomorfismoa",
         "injektiboa"
        ],
        [
         "Epimorfismoa",
         "gainkorra (surjektiboa)"
        ],
        [
         "Isomorfismoa",
         "bijektiboa"
        ],
        [
         "Automorfismoa",
         "bijektiboa eta <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii) Automorfismo mediante el rango"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> es automorfismo si y solo si los generadores de la imagen (las columnas de la matriz) son linealmente independientes, es decir, si el determinante es <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math> (rango <math display=\"inline\"><mrow><mo>=</mo><mn>3</mn></mrow></math>, entonces <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>). Así se puede decidir sin demostrar por separado la inyectividad y la sobreyectividad."
    },
    {
     "mota": "testua",
     "html": "Los generadores de <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> son <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; la matriz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El determinante se calcula por la regla de Sarrus; para <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>e</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>g</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>h</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>i</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi><mi>e</mi><mi>i</mi><mo>+</mo><mi>b</mi><mi>f</mi><mi>g</mi><mo>+</mo><mi>c</mi><mi>d</mi><mi>h</mi><mo>−</mo><mi>c</mi><mi>e</mi><mi>g</mi><mo>−</mo><mi>a</mi><mi>f</mi><mi>h</mi><mo>−</mo><mi>b</mi><mi>d</mi><mi>i</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente — precisión",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En las definiciones el original etiqueta el caso inyectivo como &quot;HOMOMORFISMO&quot;; lo correcto es <strong>monomorfismo</strong> (corregido en la tabla de arriba). Sobre el determinante: el determinante de la matriz de arriba (usando la fórmula de la página anterior) es <math display=\"inline\"><mn>0</mn></math> (una nota intermedia decía <math display=\"inline\"><mrow><mi>−</mi><mn>14</mn></mrow></math>, un error de suma); eso sugeriría rango <math display=\"inline\"><mrow><mo>&lt;</mo><mn>3</mn></mrow></math>. Pero los datos originales (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>14</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub></mrow></math> son base, det <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>17</mn></mrow></math>) dan una imagen <strong>independiente</strong> (su determinante es <math display=\"inline\"><mrow><mi>−</mi><mn>260</mn><mo>≠</mo><mn>0</mn></mrow></math>), por lo que <math display=\"inline\"><mi>f</mi></math> <strong>sí</strong> es automorfismo: la matriz <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> derivada en la página anterior tiene un error interno. La conclusión principal (automorfismo) es correcta, por la razón correcta. La matriz <math display=\"inline\"><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub></math> de la derecha (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>) no coincide con <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; probablemente es la matriz que tiene como columnas las imágenes de <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, con algunas diferencias de transcripción. El determinante <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> de abajo (desarrollo de Laplace) es un ejercicio adicional, de lectura densa y baja confianza."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p022_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Azpiespazioak <math display=\"inline\"><mi>U</mi></math> y <math display=\"inline\"><mi>W</mi></math>: dimensión y base",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko subespaciok: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> (i) Calcula <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>. (ii) Calcula <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(i) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Para <math display=\"inline\"><mi>U</mi></math>.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>; sustituyendo en la primera ecuación, <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>. Por tanto, los puntos de <math display=\"inline\"><mi>U</mi></math> son de la forma <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Para <math display=\"inline\"><mi>W</mi></math>.</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math>. Por tanto, los puntos de <math display=\"inline\"><mi>W</mi></math> son de la forma <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii) <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Suma de subespacios",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> es el subespacio vectorial de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> <strong>más pequeño</strong> que contiene a <math display=\"inline\"><mrow><mi>U</mi><mo>∪</mo><mi>W</mi></mrow></math>. Esta definición es necesaria porque, en general, la <strong>unión</strong> (<math display=\"inline\"><mrow><mi>U</mi><mo>∪</mo><mi>W</mi></mrow></math>) de dos subespacios no es un espacio vectorial (no es cerrada para la suma)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El cálculo explícito (la base de <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math>) se desarrolla en la página siguiente (véase <code>koadernoa_landeta1_alg_p036</code>): <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>+</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>∩</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta imagen contiene dos cuadernos: la página izquierda es de física (<code>koadernoa_landeta_fisica_p034</code>), la derecha (esta) de álgebra nueva (2012/11/21). La nota &quot;SIN CONTENER LOS PASOS&quot; junto a <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> es de lectura muy dudosa. La página se interrumpe en la definición del apartado (ii); el cálculo continúa en la siguiente."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p036_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Matrizeen biderketa (795–798)",
   "blokeak": [
    {
     "mota": "problema-gaia",
     "testua": "MATRICES Y FORMAS CUADRÁTICAS"
    },
    {
     "mota": "testua",
     "html": "Para resolver los productos de las siguientes matrices (sin resultado en el original):"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>24</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>16</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>33</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>126</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>20</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>34</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>107</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>68</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>101</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>50</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>140</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>46</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>34</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>120</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>15</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>22</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los cuatro ejercicios (795–798) son solo el enunciado; en el original no hay resultados calculados. Algunos números de dos cifras están escritos muy apretados (p. ej. &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>107</mn></mrow></math>&quot;, &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>120</mn></mrow></math>&quot; en el 797; &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>16</mn></mrow></math>&quot;, &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>15</mn></mrow></math>&quot; en el 798); se ha tomado la lectura más plausible. El ejercicio 796 tiene una cadena de tres matrices (los demás, dos)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p056_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    },
    {
     "mota": "itzulgai",
     "proiektua": "_historico/espazio-ontzia/02_algebra_geometria/algebra_lineal/ocw_ejercicios_resueltos",
     "orrialdeak": "40",
     "jatorria": "es"
    }
   ]
  },
  {
   "id": "a59",
   "maila": 1,
   "izenburua": "Matriz de cambio de base, inversa y autovalores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La matriz de cambio de base (siempre cuadrada e invertible), la fórmula de la matriz inversa y el comienzo de los <strong>autovalores</strong> (polinomio característico)."
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Matriz de cambio de base",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sean <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>v</mi><mi>n</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> dos bases; como ambas generan todo el espacio, una se puede expresar mediante la otra. Escribiendo los vectores de <math display=\"inline\"><mi>β</mi></math> en <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>, <math display=\"inline\"><mrow><mover><msub><mi>v</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mo>∑</mo><mi>j</mi></msub><msub><mi>λ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi><mo>′</mo></msubsup></mrow></math>, y los coeficientes forman la <strong>matriz de cambio de base</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo>=</mo><msubsup><mi>M</mi><mrow><msup><mi>β</mi><mo>′</mo></msup><mi>β</mi></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msubsup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">det</mi><mo>≠</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estas matrices son siempre <strong>cuadradas</strong> (<math display=\"inline\"><mrow><mi>n</mi><mo>×</mo><mi>n</mi></mrow></math>) e <strong>invertibles</strong>. Sobre las coordenadas: <math display=\"inline\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>′</mo></msup><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math> y viceversa. <strong>Criterio de base:</strong> un conjunto es base si y solo si su matriz de cambio de base es invertible."
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "Matriz inversa",
   "blokeak": [
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">adj</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mi>A</mi></math> <strong>no es invertible</strong>; por eso, <strong>toda matriz invertible tiene rango máximo</strong>."
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "Autovalores y polinomio característico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> es un <strong>autovector</strong> y <math display=\"inline\"><mi>λ</mi></math> un <strong>autovalor</strong> si y solo si <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math>, es decir <math display=\"inline\"><mrow><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">polinomio karakteristikoa</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La <strong>multiplicidad algebraica</strong> de <math display=\"inline\"><mi>λ</mi></math> es el número de veces que aparece como raíz en el polinomio característico. Los autovalores se hallan igualando el polinomio característico a <math display=\"inline\"><mn>0</mn></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0041</code>, páginas 80-81; &quot;ÁLGEBRA LANDETA&quot;). La matriz de cambio de base (<math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo>=</mo><msubsup><mi>M</mi><mrow><msup><mi>β</mi><mo>′</mo></msup><mi>β</mi></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msubsup></mrow></math>), la fórmula de la inversa (<math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> adj</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mi>/</mi><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>) y la definición de autovalor (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) son estándar y correctas. Sin correcciones. Véase <code>koadernoa_landeta1_alg_p080.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p086_mk.typ",
     "xehetasuna": "transcripción literal y maquetación; teorema de diagonalización, multiplicidades y escisión",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a63",
   "maila": 2,
   "izenburua": "Teorema de diagonalización: multiplicidades y escisión",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La <strong>multiplicidad algebraica</strong> y <strong>geométrica</strong> de un autovalor, y el <strong>teorema de diagonalización</strong> (cuándo un endomorfismo es diagonalizable), con la escisión (de <math display=\"inline\"><mi mathvariant=\"double-struck\">ℤ</mi></math> a <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Multiplicidad algebraica y geométrica"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Algebraica</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: el número de veces que el autovalor <math display=\"inline\"><mi>λ</mi></math> aparece como <strong>raíz</strong> en el polinomio característico.",
      "<strong>Geométrica</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: la dimensión del <strong>espacio propio</strong> de <math display=\"inline\"><mi>λ</mi></math>, donde <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Siempre se cumple <math display=\"inline\"><mrow><mn>1</mn><mo>≤</mo><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema de diagonalización"
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Teorema (diagonalización)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El endomorfismo <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> es <strong>diagonalizable</strong> si y solo si:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>El polinomio característico se escinde en <math display=\"inline\"><mi>K</mi></math>:</strong> <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>…</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><msub><mi>λ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, con todos los <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>∈</mo><mi>K</mi></mrow></math>.",
        "<strong>Para cada autovalor</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (multiplicidad geométrica = algebraica)."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si se cumplen las condiciones, los autovectores de los espacios propios forman una <strong>base</strong> de <math display=\"inline\"><mi>V</mi></math>, y en esa base la matriz de <math display=\"inline\"><mi>f</mi></math> es <strong>diagonal</strong> (con los autovalores en la diagonal)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Escisión: <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math> frente a <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>"
    },
    {
     "mota": "testua",
     "html": "El polinomio característico debe escindirse en el cuerpo <math display=\"inline\"><mi>K</mi></math>. Por ejemplo, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> in </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"double-struck\">ℂ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baina </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> in </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Se escinde en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math> (raíces complejas <math display=\"inline\"><mrow><mi>±</mi><mi>i</mi></mrow></math>), pero no en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> (no tiene raíces reales): por eso una matriz puede ser no diagonalizable en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> y diagonalizable en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0044</code>, páginas 86-87; &quot;ÁLGEBRA LANDETA&quot;; &quot;sueño de Gauss&quot; = representación de los números imaginarios en el círculo unidad). Las multiplicidades, el teorema de diagonalización (escisión + <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>) y la escisión de <math display=\"inline\"><mrow><mi mathvariant=\"double-struck\">ℂ</mi><mi>/</mi><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></math>) son estándar y correctas. Sin correcciones. Véase <code>koadernoa_landeta1_alg_p086.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p088_mk.typ",
     "xehetasuna": "transcripción literal y maquetación; corolario de la diagonalización y grupo simétrico",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "Forma canónica de Jordan (I): endomorfismo y espacios propios",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ejemplo de forma canónica de Jordan de una matriz <strong>no diagonalizable</strong>. Se parte de un endomorfismo <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> con un autovalor repetido."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Endomorfismo y polinomio característico"
    },
    {
     "mota": "testua",
     "html": "Es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>−</mi><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; como en la base canónica su matriz es <strong>triangular inferior</strong>, los autovalores están en la diagonal:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Autovalores: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>3</mn></mrow></math>) y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espacio propio y no diagonalizabilidad"
    },
    {
     "mota": "testua",
     "html": "Resolviendo <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">id</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mn>3</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mi>f</mi></math> <strong>no es diagonalizable</strong>. Hay que usar la forma canónica de Jordan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espacio propio generalizado"
    },
    {
     "mota": "testua",
     "html": "Al no ser diagonalizable, se toman <strong>potencias mayores</strong> de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi mathvariant=\"normal\">id</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">id</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la cadena se <strong>estabiliza</strong> aquí: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊊</mo><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0091</code>, páginas 180-181; &quot;ÁLGEBRA LANDETA&quot;). Comprobado con SymPy: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> (no diagonalizable, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>&lt;</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>), y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>. Las bases coinciden con el original. Sin correcciones. Véase <code>koadernoa_landeta1_alg_p180.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p182_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); forma de Jordan II: cadena de Jordan, base y comprobación (P^-1 A P = J)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a65",
   "maila": 2,
   "izenburua": "Forma canónica de Jordan (II): cadena de Jordan y base",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación de <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> anterior. Se construye una <strong>cadena</strong> de Jordan a partir de un vector de <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y se completa la <strong>base de Jordan</strong> de <math display=\"inline\"><mi>f</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cadena de Jordan (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Se toma un vector de <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que no esté en <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Su <strong>imagen</strong> cae en el espacio propio mediante <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi mathvariant=\"normal\">id</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>w</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, la cadena del bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>w</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (autovector) y <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Para el bloque <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> hace falta otro autovector independiente de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por último, para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base de Jordan"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comprobación (imágenes)"
    },
    {
     "mota": "testua",
     "html": "La imagen de cada vector de la base según <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>4</mn><mi>.</mi></mrow></msub></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>3</mn></msub></mrow></math> es la clave: <math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math> es un <strong>autovector generalizado</strong> (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi mathvariant=\"normal\">id</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></math>), y eso produce el <math display=\"inline\"><mn>1</mn></math> de la superdiagonal."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0092</code>, páginas 182-183; &quot;ÁLGEBRA LANDETA&quot;). Comprobado con SymPy: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y con la base <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math> se cumple <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>J</mi></mrow></math> (Jordan). La nota &quot;RENUMBRAR&quot; de la página original dice que hay que ajustar el orden de los vectores a la forma de Jordan; se ordena en la página siguiente. Sin correcciones. Véase <code>koadernoa_landeta1_alg_p182.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p184_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); forma de Jordan III: matrices J y P, segundo ejemplo chi=(x-2)^4 (corrección: fila 3)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "Excursus: sobre las aplicaciones (tipos de morfismo)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Clasificación</strong> de las aplicaciones lineales según inyectividad y sobreyectividad, y qué es (y qué no es) una aplicación, con ejemplos reales."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Vocabulario de los morfismos"
    },
    {
     "mota": "testua",
     "html": "Para una aplicación lineal <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math>:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Endomorfismo:</strong> el mismo espacio en sí mismo, <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math>.",
      "<strong>Automorfismo:</strong> endomorfismo <strong>biyectivo</strong>.",
      "<strong>Monomorfismo:</strong> aplicación lineal <strong>inyectiva</strong>.",
      "<strong>Epimorfismo:</strong> aplicación lineal <strong>sobreyectiva</strong>."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Criterio de inyectividad:</strong> <math display=\"inline\"><mi>f</mi></math> es inyectiva si y solo si"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplos: qué es una aplicación"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>↦</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <strong>no inyectiva</strong> (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) y <strong>no sobreyectiva</strong> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mo>+</mo></msup></mrow></math>, no toma valores negativos).",
      "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>↦</mo><mi>x</mi></mrow></math>: <strong>aplicación identidad</strong>, <strong>biyectiva</strong> (inyectiva y sobreyectiva).",
      "La <strong>circunferencia</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>9</mn></mrow></math> (centro <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, radio <math display=\"inline\"><mn>3</mn></math>): <strong>no es una aplicación</strong>, porque a cada <math display=\"inline\"><mi>x</mi></math> le corresponden <strong>dos imágenes</strong>:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mrow><mn>9</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <strong>no inyectiva</strong> (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, dos puntos a la misma altura) y <strong>no sobreyectiva</strong> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mo>+</mo></msup></mrow></math>, no toma ningún valor negativo).",
     "src": "../media/irudiak/054459a6978434d1.svg",
     "zabalera": 176
    },
    {
     "mota": "oharra",
     "titulua": "Nota sobre el ejemplo del encabezado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La página original pone en el encabezado <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo>−</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>+</mo><mi>x</mi><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con la etiqueta &quot;<math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>&quot;. Hay dos contradicciones: (i) tiene <strong>cuatro</strong> componentes (el codominio sería <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, no <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>); (ii) la cuarta componente es una <strong>constante</strong> (<math display=\"inline\"><mn>3</mn></math>), por lo que <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> y <strong>no es lineal</strong> (sino afín). Se documenta como un ejemplo suelto incoherente; el vocabulario y los demás ejemplos son correctos. No se ha forzado el texto original."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>LANDETA1_0095</code>, páginas 188-189; &quot;ÁLGEBRA LANDETA&quot;). El vocabulario de los morfismos (endo/auto/mono/epimorfismo) es <strong>terminología estándar</strong>, correcta. Ejemplos comprobados: <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> (ni iny. ni sob.), identidad (biy.), circunferencia (no es aplicación, dos ramas <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mrow><mn>9</mn><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>). Al final hay una referencia cultural a la &quot;hipótesis del continuo de Cantor&quot;, sin desarrollo. El registro dice &quot;calculo&quot;; el contenido es de <strong>álgebra</strong>. Sin correcciones. Véase <code>koadernoa_landeta1_alg_p188.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p190_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; excursus (cont.): logaritmo/exponencial inversos (corrección: e^2)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Teorema de la dimensión y forma canónica de la matriz asociada (Landeta)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejercicio 5: teorema de la dimensión"
    },
    {
     "mota": "testua",
     "html": "El núcleo del ejercicio de la página anterior:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mi>z</mi><mo>,</mo><mn>3</mn><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El rango de <math display=\"inline\"><mi>f</mi></math> por el teorema de la dimensión (rango-nulidad):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>=</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "(iii) Forma canónica de la matriz asociada"
    },
    {
     "mota": "testua",
     "html": "Cuando el rango de <math display=\"inline\"><mi>f</mi></math> es <math display=\"inline\"><mi>n</mi></math>, la matriz asociada respecto de bases adecuadas tiene esta forma por bloques; en este caso (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mi>B</mi><mo>∈</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Mat</mtext></mrow><mrow><mn>4</mn><mo>×</mo><mn>3</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/5b9368baa531a00f.svg\" alt=\"B = mat(augment: #(hline: 2, vline: 2), I_2, 0; 0, 0)\" style=\"width:7.403em;height:3.673em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Para ello, la base de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> se forma con dos vectores (cuyas imágenes generan <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>) y uno tomado de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bidez </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></munder><mo>,</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></munder><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>, completando los generadores de <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> con otros dos vectores linealmente independientes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> sortzen</mtext></mrow></mrow></munder><mo>,</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> L.I., osatzen</mtext></mrow></munder><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Corolario de la diagonalización (diagonal en la base propia)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La <strong>matriz</strong> de la diagonalización (en la base de autovectores) y un tema nuevo: el <strong>grupo simétrico</strong> (<math display=\"inline\"><msub><mi mathvariant=\"normal\">Σ</mi><mi>n</mi></msub></math>, permutaciones, ciclos y signatura)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Corolario de la diagonalización"
    },
    {
     "mota": "testua",
     "html": "Reuniendo los autovectores de <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> para cada autovalor, se obtiene una <strong>base</strong> de <math display=\"inline\"><mi>V</mi></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>v</mi><mi>m</mi></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>w</mi><mi>p</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. En esa base la matriz de <math display=\"inline\"><mi>f</mi></math> es <strong>diagonal</strong>, con los autovalores (con su multiplicidad) en la diagonal:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mi>β</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diagonalizagarria. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a69",
   "maila": 2,
   "izenburua": "Forma canónica de Jordan (III): <math display=\"inline\"><mi>J</mi></math> y matriz de paso (Landeta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Final del primer ejemplo (<math display=\"inline\"><mi>J</mi></math> y la matriz de paso <math display=\"inline\"><mi>P</mi></math>), y comienzo de un segundo ejemplo (<math display=\"inline\"><mrow><mi>χ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz de Jordan y matriz de paso"
    },
    {
     "mota": "testua",
     "html": "En la base <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math>, las coordenadas de las imágenes forman <math display=\"inline\"><mi>J</mi></math>; el bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> es de la forma <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>,</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde se cumple <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math> (comprobado con SymPy, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>P</mi><mo>=</mo><mn>4</mn></mrow></math>)."
    }
   ]
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "Suma directa, determinante paramétrico y reconstrucción de <math display=\"inline\"><mi>f</mi></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos sesiones: los criterios de la suma directa y un determinante paramétrico (2013/1/23); y la reconstrucción de la aplicación <math display=\"inline\"><mi>f</mi></math> a partir de <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (2013/1/24)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Suma directa <math display=\"inline\"><mrow><mi>U</mi><mo>⊕</mo><mi>V</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>: dos métodos"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mspace width=\"1.0em\"></mspace><mi>U</mi><mo>∩</mo><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.222em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mspace width=\"0.222em\"></mspace><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mspace width=\"1.0em\"></mspace><mi>U</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>V</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -ren oinarrien bilketa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -ren base. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los dos criterios son equivalentes."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Determinante paramétrico"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math> <strong>Método:</strong> crear ceros restando la primera fila a las demás, factorizar <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> fila por fila y reducir el orden (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn><mo>→</mo><mn>3</mn><mo>×</mo><mn>3</mn><mo>→</mo><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>). Resultado: <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math> (<strong>Coherencia:</strong> la matriz original tiene entradas de grado <math display=\"inline\"><mn>2</mn></math>, por lo que el grado de <math display=\"inline\"><mi>D</mi></math> es <math display=\"inline\"><mn>8</mn></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math> tiene exactamente grado <math display=\"inline\"><mn>8</mn></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reconstrucción de <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>U</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>W</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>), y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>W</mi></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>; por el teorema del rango-nulidad <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>4</mn></mrow></math>). Completando la base de <math display=\"inline\"><mi>U</mi></math> a <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mi>f</mi></math> envía el núcleo a <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math> y los vectores de completado a los generadores de <math display=\"inline\"><mi>W</mi></math>: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Expresando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><mi>B</mi></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi><mo>−</mo><mi>μ</mi><mo>+</mo><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>+</mo><mi>μ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>μ</mi></mrow></math>): <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>+</mo><mi>y</mi></mrow></math>. Por tanto: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos criterios de la suma directa son correctos y equivalentes. El <strong>método</strong> del determinante paramétrico (factorizar, crear ceros, reducir el orden) es correcto y el resultado es coherente con el grado <math display=\"inline\"><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math> (grado <math display=\"inline\"><mn>8</mn></math>); <strong>confianza media</strong> en muchas entradas numéricas/paramétricas (los signos y los factores intermedios no se pueden asegurar). La reconstrucción de <math display=\"inline\"><mi>f</mi></math> es un método estándar y correcta: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>4</mn></mrow></math>; <math display=\"inline\"><mi>W</mi></math> tiene <strong>tres</strong> generadores pero la dimensión es <math display=\"inline\"><mn>2</mn></math> (uno depende de los otros; el desarrollo solo usa dos). Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p106.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a71",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><msup><mi>f</mi><mn>2011</mn></msup></math> Jordanen formaren bidez; matrize elkartua y forma kanonikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ejercicio de examen: calcular una <strong>potencia alta</strong> de un endomorfismo mediante la forma de Jordan, sin usar la base canónica."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula <math display=\"inline\"><msup><mi>f</mi><mn>2011</mn></msup></math> , <math display=\"inline\"><mi>f</mi></math> dada una matriz asociada a "
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Matriz de Jordan (en las bases dadas <math display=\"inline\"><mi>B</mi></math>): <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>B</mi><mi>B</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Potencias directamente: <math display=\"block\"><mrow><msup><mi>J</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>J</mi><mn>3</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>J</mi><mn>4</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>81</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>108</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>81</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>81</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la diagonal superior del bloque tiene un <strong>patrón</strong>: <math display=\"block\"><mrow><mn>1</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>27</mn><mo>,</mo><mn>108</mn><mo>=</mo><mn>1</mn><mo>⋅</mo><msup><mn>3</mn><mn>0</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mn>1</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>⋅</mo><msup><mn>3</mn><mn>2</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>⋅</mo><msup><mn>3</mn><mn>3</mn></msup><mo>=</mo><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Por tanto, en general, y para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2011</mn></mrow></math> :"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>J</mi><mi>n</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>J</mi><mn>2011</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2011</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mn>2011</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2011</mn><mo>⋅</mo><msup><mn>3</mn><mn>2010</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mn>2011</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mn>2011</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Eta <math display=\"inline\"><msup><mi>f</mi><mn>2011</mn></msup></math>-ren matriz oinarri kanonikoan <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2011</mn></msup><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>J</mi><mn>2011</mn></msup><mi>P</mi></mrow></math> da (<math display=\"inline\"><mi>P</mi></math> = <math display=\"inline\"><mi>B</mi></math>-ren pasabidea) — Jordanen formaren <strong>baliagarritasun praktikoa</strong>: <math display=\"inline\"><mi>A</mi></math> bere buruaz <math display=\"inline\"><mn>2011</mn></math> aldiz biderkatzea saihesten da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii) <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>: matriz y forma canónica"
    },
    {
     "mota": "testua",
     "html": "La matriz asociada de <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> es <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>, y su forma canónica de equivalencia es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>). El rango se determina encontrando entre los generadores de la imagen un determinante <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> no nulo (en el esquema <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn></mrow></math>, bloque <math display=\"inline\"><msub><mi>I</mi><mn>2</mn></msub></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(i) totalmente comprobado:</strong> las potencias del bloque de Jordan (<math display=\"inline\"><mrow><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>): <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>→</mo><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mo>→</mo><mn>27</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>4</mn><mo>→</mo><mn>108</mn></mrow></math> ✓; el patrón <math display=\"inline\"><mrow><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math> es exacto; <math display=\"inline\"><msup><mi>J</mi><mi>n</mi></msup></math> y <math display=\"inline\"><msup><mi>J</mi><mn>2011</mn></msup></math> son correctos (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2011</mn></msup></mrow></math> negativo, exponente impar). La esencia del método: calcular potencias altas mediante Jordan es viable. <strong>(ii) confianza media:</strong> la fórmula de <math display=\"inline\"><mi>f</mi></math>, la matriz <math display=\"inline\"><mi>A</mi></math> y los generadores de <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> no se leen con seguridad; el concepto (la matriz <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>, forma canónica <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn></mrow></math>) está claro, pero la nota «<math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>4</mn></mrow></math>» no concuerda (debe ser <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>). Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p108.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  },
  {
   "id": "a72",
   "maila": 2,
   "izenburua": "Recuperación de una base a partir de la matriz de paso",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Final de la forma canónica del ejercicio anterior (<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, rango <math display=\"inline\"><mn>2</mn></math>, forma <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>), y el <strong>problema inverso</strong> del cambio de base: recuperar la propia base a partir de la matriz de paso."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema inverso"
    },
    {
     "mota": "testua",
     "html": "Dada <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><mo>←</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, las columnas son las coordenadas de los vectores canónicos en <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>: <math display=\"block\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Solución.</strong> <math display=\"inline\"><mrow><mn>2</mn><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Restándole <math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math> Y sumando <math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> De ahí <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Comprobación:</strong> <math display=\"inline\"><mrow><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> ✓."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo comprobado: la forma canónica (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>, rango <math display=\"inline\"><mn>2</mn></math>), y la recuperación de la base a partir de la matriz de paso: resolviendo el sistema <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con comprobación independiente (<math display=\"inline\"><mrow><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>). Dos rótulos (<math display=\"inline\"><msub><mi>M</mi><mrow><mi>β</mi><msub><mi>β</mi><mi>c</mi></msub></mrow></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><mi>β</mi></mrow></msub></math>) están asociados a la misma matriz; el utilizado es el que expresa los vectores canónicos en función de <math display=\"inline\"><mi>β</mi></math>. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p110.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton_p037_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p001_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); aplicación lineal determinada por sus valores (f: R^3 -> R^4)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a73",
   "maila": 2,
   "izenburua": "Aplicación lineal determinada por sus valores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una aplicación lineal está <strong>completamente determinada</strong> por las <strong>imágenes</strong> de los vectores de una base. Definida <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> mediante las imágenes de <strong>tres vectores</strong>, calcular <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> general."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Datos"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los tres vectores dados forman una <strong>base</strong> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> (determinante <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>), por lo que <math display=\"inline\"><mi>f</mi></math> está completamente determinada."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> general"
    },
    {
     "mota": "testua",
     "html": "Expresando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en esa base y por linealidad, se obtienen la matriz y la imagen de <math display=\"inline\"><mi>f</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>−</mo><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>y</mi><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>z</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>2</mn><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>y</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0001</code>, páginas 1-2; &quot;ÁLGEBRA NEWTON&quot;). <strong>Primera página del cuaderno newton2.</strong> Comprobado con SymPy: los tres vectores forman base (det <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>), y de <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>W</mi><mo>⋅</mo><msup><mi>V</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> se obtiene <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mi>−</mi><mn>2</mn><mi>z</mi><mo>,</mo><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>y</mi><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>z</mi><mo>,</mo><mn>2</mn><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>y</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Núcleo/imagen en la página siguiente (<code>p002</code>). Sin correcciones. Véase <code>koadernoa_newton2_alg_p001.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p002_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); núcleo, imagen, matriz asociada y rango (inyectiva, no sobreyectiva)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a74",
   "maila": 2,
   "izenburua": "Núcleo, imagen, matriz asociada y rango",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La <strong>matriz asociada</strong> (en la base canónica), la <strong>imagen</strong>, el <strong>núcleo</strong> y la <strong>inyectividad</strong> de la aplicación <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> anterior."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matriz asociada (en la base canónica)"
    },
    {
     "mota": "testua",
     "html": "Las columnas son <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "No puede ser sobreyectiva"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>: <strong>no puede ser sobreyectiva</strong> sobre <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Núcleo e inyectividad"
    },
    {
     "mota": "testua",
     "html": "Resolviendo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> (<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> del denominador, luego <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> injektiboa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0002</code>, páginas 2-3; &quot;ÁLGEBRA NEWTON&quot;). Comprobado con SymPy: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> → <strong>inyectiva</strong> pero <strong>no sobreyectiva</strong> (<math display=\"inline\"><mrow><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>). Continuación del ejercicio de <code>p001</code> (mismos valores, componente a componente). Sin correcciones. Véase <code>koadernoa_newton2_alg_p002.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p004_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); forma canónica de Jordan: teoría y ejemplo 4x4 (chi=lambda^2(lambda-1)^2)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a75",
   "maila": 1,
   "izenburua": "Forma canónica de Jordan: teoría y ejemplo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Cuándo</strong> un endomorfismo es triangularizable, la definición de <strong>forma canónica de Jordan</strong>, y un ejemplo completo con una matriz <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "Triangularizabilidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>A</mi><mo>∈</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mi>K</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: si <strong>todas las raíces del polinomio característico son autovalores</strong> (es decir, si <math display=\"inline\"><mrow><msub><mi>P</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>se escinde</strong>), entonces existe una base <math display=\"inline\"><mrow><mo>∃</mo><mi>B</mi></mrow></math> en la que <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi></mrow></math> es <strong>triangular</strong>. Usando una <strong>base de Jordan</strong>, <math display=\"inline\"><mi>T</mi></math> es la <strong>forma canónica de Jordan</strong> (triangular, con algunos <math display=\"inline\"><mn>1</mn></math> en la superdiagonal o en la subdiagonal: <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mo>,</mo><mi>j</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn></mrow></math> o <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mo>,</mo><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>)."
    }
   ]
  },
  {
   "id": "a77",
   "maila": 2,
   "izenburua": "Ejemplo: <math display=\"inline\"><mi>A</mi></math> (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>)",
   "blokeak": [
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Autovalores: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn></mrow></math>) y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn></mrow></math>). <strong>Espacios propios:</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (las multiplicidades son <strong>iguales</strong>, parte diagonalizable).",
      "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<strong>defectivo</strong>: hace falta Jordan)."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0003</code>, páginas 4-5; &quot;ÁLGEBRA NEWTON&quot;). Comprobado con SymPy: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>; para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn></mrow></math>, y para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn></mrow></math> (defectivo). Ejemplo elegido <strong>a propósito</strong>: un autovalor con multiplicidades iguales y el otro no. La base de Jordan en la página siguiente (<code>p006</code>). Sin correcciones. Véase <code>koadernoa_newton2_alg_p004.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p006_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); espacio propio generalizado E_2(1) y base de Jordan (J_1(0)+J_1(0)+J_2(1))",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a78",
   "maila": 2,
   "izenburua": "Espacio propio generalizado y base de Jordan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del ejemplo anterior <math display=\"inline\"><mi>A</mi></math> (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>): el <strong>espacio propio generalizado</strong> <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>, y la <strong>base de Jordan</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y su cuadrado:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>−</mo><mi>I</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Resolviendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>x</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base de Jordan y forma"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow></math>, para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> hay <strong>una única cadena</strong> (bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>). Para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> hay dos autovectores (dos bloques <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>). Forma de Jordan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Las dos convenciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El <math display=\"inline\"><mn>1</mn></math> del bloque de Jordan se puede poner en la <strong>superdiagonal</strong> (<math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mo>,</mo><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>) o en la <strong>subdiagonal</strong> (<math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mo>,</mo><mi>j</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>): las dos convenciones son equivalentes (dependen del orden de la base)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0004</code>, páginas 6-7; &quot;ÁLGEBRA NEWTON&quot;). Comprobado con SymPy: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>), y <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Las dos convenciones (superdiagonal/subdiagonal) son equivalentes. Sin correcciones. Véase <code>koadernoa_newton2_alg_p006.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p008_mk.typ",
     "xehetasuna": "transcripción literal y maquetación; teoría general de Jordan y método de la cadena (diagonalizabilidad, espacios generalizados)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a79",
   "maila": 2,
   "izenburua": "Teoría general de Jordan y método de la cadena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Cuándo</strong> un endomorfismo es <strong>diagonalizable</strong>, por qué hacen falta los <strong>espacios propios generalizados</strong>, y el método de la <strong>cadena</strong> para construir la base de Jordan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los dos casos y la diagonalizabilidad"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Para ser <strong>triangularizable</strong>, <strong>todos</strong> los autovalores deben estar en el cuerpo (<math display=\"inline\"><mi>χ</mi></math> se escinde).",
      "Es <strong>diagonalizable</strong> <strong>si y solo si</strong>, para cada autovalor, la <strong>multiplicidad geométrica = algebraica</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Por qué los espacios propios generalizados"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>&lt;</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math> (defectivo), <strong>el espacio propio no basta</strong>: los vectores que faltan se toman de los <strong>espacios propios generalizados</strong>, de <math display=\"inline\"><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi>λ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>k</mi></msup></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de la cadena"
    },
    {
     "mota": "testua",
     "html": "Aplicando <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi>λ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> <strong>una y otra vez</strong> se genera una <strong>cadena</strong>: <math display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>→</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>→</mo><mi>…</mi><mo>→</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>, donde <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi>λ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>v</mi><mi>j</mi></msub><mo>=</mo><msub><mi>v</mi><mrow><mi>j</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math> y <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> es un autovector. La cadena es un bloque de Jordan."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Los dos órdenes",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La cadena se puede ordenar como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> o como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>v</mi><mi>s</mi></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math>: eso pone el <math display=\"inline\"><mn>1</mn></math> en la <strong>superdiagonal</strong> o en la <strong>subdiagonal</strong> (dos convenciones equivalentes)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0005</code>, páginas 8-9; &quot;ÁLGEBRA NEWTON&quot;). <strong>Razona</strong> el ejemplo de las páginas <math display=\"inline\"><mn>4</mn></math>-<math display=\"inline\"><mn>7</mn></math>: la condición de diagonalizabilidad (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>), la necesidad de los espacios propios generalizados y la generación de la cadena (repitiendo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi>λ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>). Teoría estándar. Sin correcciones. Véase <code>koadernoa_newton2_alg_p008.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p010_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); polinomio característico mediante operaciones elementales (chi=(x-2)^2(x+1)^2) y V(2)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a80",
   "maila": 2,
   "izenburua": "Polinomio característico mediante operaciones elementales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El <strong>polinomio característico</strong> de la matriz <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> de un ejemplo nuevo, <strong>sin desarrollar</strong> el determinante: reducir a la forma por bloques <strong>creando ceros con operaciones elementales</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La matriz y el método"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para calcular <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>I</mi><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se crean ceros con <strong>operaciones por filas y por columnas</strong> (<math display=\"inline\"><mrow><msub><mi>F</mi><mn>1</mn></msub><mo>+</mo><msub><mi>F</mi><mn>4</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>−</mo><msub><mi>C</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>4</mn></msub></mrow></math>), reduciendo el determinante a <strong>dos bloques <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math></strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>I</mi><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>−</mo><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>+</mo><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>+</mo><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espacio propio de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn></mrow></math>, es <strong>defectivo</strong>: hace falta Jordan (en la página siguiente, <code>p012</code>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0006</code>, páginas 10-11; &quot;ÁLGEBRA NEWTON&quot;). <strong>Método excelente:</strong> no desarrolla el determinante de <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>, sino que <strong>crea ceros</strong> con operaciones elementales (cinco pasos) para reducirlo a bloques <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>. Comprobado con SymPy: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, y <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>, defectivo). Sin correcciones. Véase <code>koadernoa_newton2_alg_p010.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p012_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); espacio propio generalizado E_2(2) y cadena de Jordan (corrección: vectores de la cadena)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a81",
   "maila": 2,
   "izenburua": "Espacio propio generalizado y cadena de Jordan (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del ejemplo anterior: el <strong>espacio propio generalizado</strong> <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> y la construcción de la <strong>cadena de Jordan</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se recurre a una <strong>potencia mayor</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La cadena se estabiliza aquí (<math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊊</mo><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cadena de Jordan"
    },
    {
     "mota": "testua",
     "html": "Tomando un vector de <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∖</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>w</mi></math>), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>w</mi></mrow></math> es un <strong>autovector</strong> (el pie de la cadena). Por ejemplo, con un <math display=\"inline\"><mi>w</mi></math> adecuado, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>w</mi></mrow></math> es proporcional al autovector <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Eso produce el bloque de Jordan <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección (vectores de la cadena) y notas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0007</code>, páginas 12-13; &quot;ÁLGEBRA NEWTON&quot;). Comprobado con SymPy: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> tiene <strong>una única cadena</strong> (bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>). ⚠ <strong>Corrección:</strong> la página original toma <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y dice que <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero eso <strong>no concuerda con la matriz</strong> (con <math display=\"inline\"><mi>A</mi></math> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>13</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>28</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>); son errores de lectura en los vectores de la cadena. El autovector <strong>correcto</strong> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), y a partir de <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se construye la cadena. El <strong>método</strong> y la estructura (bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>) son correctos; los vectores concretos de la cadena se han corregido con SymPy. Cierre en <code>p014</code>. Véase <code>koadernoa_newton2_alg_p012.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p014_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación (SymPy); cierre de la forma de Jordan J_1(-1)+J_1(-1)+J_2(2) (página mixta: cálculo->04)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a82",
   "maila": 2,
   "izenburua": "Cierre de la forma de Jordan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Cierre</strong> del ejemplo anterior: reuniendo las aportaciones de los dos autovalores, la <strong>forma de Jordan</strong> completa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aportaciones de los dos autovalores"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<strong>diagonalizable</strong>, dos bloques <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>).",
      "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn></mrow></math> (<strong>defectivo</strong>): <strong>una sola cadena</strong>, bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Forma de Jordan"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0008</code>, páginas 14-15; &quot;ÁLGEBRA NEWTON&quot;). Comprobado con SymPy: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> diagonalizable (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> defectivo (bloque <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>), por tanto <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>Página mixta:</strong> la página derecha es &quot;CÁLCULO NEWTON&quot; (continuidad) + una nota personal; la parte de cálculo va a la <strong>sección 04</strong>, no aquí. Sin correcciones. Véase <code>koadernoa_newton2_alg_p014.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p028_mk.typ",
     "xehetasuna": "transcripción literal y maquetación; los tres casos de Jordan (multiplicidad geométrica y estructura de los bloques)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a83",
   "maila": 2,
   "izenburua": "Los tres casos de Jordan: multiplicidad geométrica y bloques",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para un autovalor repetido, la <strong>estructura de Jordan</strong> depende de la multiplicidad geométrica: a medida que <math display=\"inline\"><msub><mi>m</mi><mi>g</mi></msub></math> baja, los <strong>bloques se fusionan</strong> y aparecen <math display=\"inline\"><mn>1</mn></math> en la superdiagonal."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los tres casos (por ejemplo, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>3</mn></mrow></math>)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><mn>3</mn></mrow></math></strong> (no defectivo): <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>D</mi></mrow></math> <strong>diagonal</strong>, tres bloques <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>.",
      "<strong><math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><mn>2</mn></mrow></math></strong>: <strong>dos bloques</strong>, uno <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> (una cadena) y uno <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>.",
      "<strong><math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><mn>1</mn></mrow></math></strong>: <strong>un único bloque</strong>, <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> (una cadena larga)."
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <strong>El núcleo de la idea de Jordan:</strong> a medida que <math display=\"inline\"><msub><mi>m</mi><mi>g</mi></msub></math> (<math display=\"inline\"><mo>=</mo></math> número de bloques) <strong>disminuye</strong>, los bloques <strong>crecen</strong>\n  y aparecen los <strong><math display=\"inline\"><mn>1</mn></math></strong> (los enlaces de las cadenas). Cuando <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>, todo es diagonal.\n</em>"
    },
    {
     "mota": "testua",
     "html": "Cada caso tiene <strong>su base y su matriz</strong> (autovectores + generalizados en cadenas)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0015</code>, páginas 28-29; &quot;ÁLGEBRA NEWTON&quot;). Los <strong>tres casos desarrollados</strong> de la unidad anterior, cada uno con su base y su matriz (&quot;1 bloque&quot;, &quot;2 bloques&quot;, &quot;<math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>D</mi></mrow></math>&quot;). La idea de Jordan, <strong>a la vista</strong>: al bajar <math display=\"inline\"><msub><mi>m</mi><mi>g</mi></msub></math> los bloques se fusionan y aparecen los <math display=\"inline\"><mn>1</mn></math>. Líneas de coordenadas y matrices comprobadas (correctas en el original). Sin correcciones. Véase <code>koadernoa_newton2_alg_p028.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p030_mk.typ",
     "xehetasuna": "transcripción literal y maquetación; base de Jordan, polinomio mínimo y J=P^-1 A P",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a84",
   "maila": 2,
   "izenburua": "Base de Jordan, polinomio mínimo y <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del ejemplo (<strong>dos bloques</strong>, de tamaños <math display=\"inline\"><mn>2</mn></math> y <math display=\"inline\"><mn>1</mn></math>), el <strong>polinomio mínimo</strong> (por primera vez), y <strong>por qué</strong> es <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Base de Jordan y matriz"
    },
    {
     "mota": "testua",
     "html": "Sale la estructura prevista: <strong>dos bloques</strong>, <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio mínimo"
    },
    {
     "mota": "testua",
     "html": "El <strong>polinomio mínimo</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene como exponente, para cada autovalor, el <strong>tamaño del bloque mayor</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mo>∏</mo><mi>λ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>s</mi><mi>λ</mi></msub></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>s</mi><mi>λ</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> lambda-ren kutxa handienaren tamaina</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Contraste: el polinomio <strong>característico</strong> usa <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como exponente.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Por qué <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como las <strong>columnas de <math display=\"inline\"><mi>P</mi></math> son los vectores de la base de Jordan</strong> (matriz de cambio de base, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></msub></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es decir, <math display=\"inline\"><mi>A</mi></math> en la base canónica y <math display=\"inline\"><mi>J</mi></math> en la base de Jordan son <strong>matrices equivalentes</strong> (<math display=\"inline\"><mi>f</mi></math>, dos representaciones del mismo endomorfismo)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0016</code>, páginas 30-31; &quot;ÁLGEBRA NEWTON&quot;). La estructura del ejemplo anterior (<math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>1</mn></mrow></math> bloques), el <strong>polinomio mínimo</strong> (por primera vez en el cuaderno: el tamaño del bloque mayor como exponente) y la <strong>razón</strong> de <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math> (<math display=\"inline\"><mi>P</mi></math> = matriz de paso de la base de Jordan). Sin correcciones. Véase <code>koadernoa_newton2_alg_p030.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p042_mk.typ",
     "xehetasuna": "transcripción literal y maquetación; Rouché-Frobenius deducido de las aplicaciones lineales (compatibilidad, número de soluciones)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a85",
   "maila": 1,
   "izenburua": "Rouché–Frobenius deducido de las aplicaciones lineales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Leyendo un sistema de ecuaciones <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi></mrow></math> como <strong>aplicación lineal</strong>, se <strong>deduce</strong> el teorema de <strong>Rouché–Frobenius</strong> (no solo se enuncia)."
    }
   ]
  },
  {
   "id": "a86",
   "maila": 2,
   "izenburua": "El sistema como aplicación lineal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El sistema <math display=\"inline\"><mrow><mi>A</mi><mi>x</mi><mo>=</mo><mi>b</mi></mrow></math> es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi></mrow></math>, donde <math display=\"inline\"><mi>f</mi></math> es la aplicación lineal de <math display=\"inline\"><mi>A</mi></math>. De ahí sale todo:"
    }
   ]
  },
  {
   "id": "a87",
   "maila": 2,
   "izenburua": "Compatibilidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El sistema es <strong>compatible</strong> si y solo si <math display=\"inline\"><mrow><mi>b</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>. En términos de matrices, eso es la <strong>igualdad de rangos</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> compatible </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>b</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a88",
   "maila": 2,
   "izenburua": "Número de soluciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El conjunto de soluciones lo determina el <strong>núcleo</strong> (<math display=\"inline\"><mi>n</mi></math> = número de incógnitas):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>⇒</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio bakarra</mtext></mrow><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>⇒</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> infinitu soluzio </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mi mathvariant=\"normal\">ker</mi><mi>f</mi><mo>=</mo><mi>n</mi><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0021</code>, páginas 42-43; &quot;ÁLGEBRA NEWTON&quot;, 2012/12/5). El <strong>valor</strong> de la página: <strong>deduce</strong> Rouché–Frobenius (no lo enuncia), leyendo el sistema como <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi></mrow></math>: la compatibilidad es la igualdad de rangos <math display=\"inline\"><mrow><mo>=</mo><mi>b</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo></mrow></math>; el número de soluciones depende de si el núcleo <math display=\"inline\"><mo>=</mo></math> es nulo o no. Sin correcciones. Véase <code>koadernoa_newton2_alg_p042.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p044_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; Rouché-Frobenius aplicado (tres soluciones imposibles, por reducción al absurdo)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a89",
   "maila": 2,
   "izenburua": "Rouché–Frobenius aplicado: tres soluciones imposibles",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Aplicando</strong> la teoría anterior, un ejercicio <strong>elegante</strong> por reducción al absurdo: dadas tres supuestas soluciones, <strong>no pueden ser las tres a la vez</strong> soluciones."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Razonamiento (por reducción al absurdo)"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub></mrow></math> fueran soluciones de <math display=\"inline\"><mrow><mi>A</mi><mi>x</mi><mo>=</mo><mi>b</mi></mrow></math>, sus <strong>restas</strong> estarían en el núcleo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mo>−</mo><mi>b</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><msub><mi>x</mi><mi>j</mi></msub><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como el <strong>núcleo tiene dimensión uno</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>1</mn></mrow></math>), las tres restas (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub></mrow></math>) tendrían que ser <strong>múltiplos entre sí</strong> (todas sobre la misma recta)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Pero las tres restas <strong>no son proporcionales</strong> (comprobado): <strong>contradicción</strong>. Por tanto, <strong>las tres no pueden\n  ser soluciones a la vez</strong>.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0022</code>, páginas 44-45; &quot;ÁLGEBRA NEWTON&quot;). Ejercicio <strong>curioso</strong>: por reducción al absurdo, las restas de tres supuestas soluciones están en el núcleo, y como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>1</mn></mrow></math> tendrían que ser múltiplos entre sí; como <strong>no lo son</strong>, contradicción → las tres no pueden ser soluciones. Las tres restas y las dos comprobaciones de proporcionalidad son correctas en el original. Sin correcciones. Véase <code>koadernoa_newton2_alg_p044.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p046_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; sistema paramétrico por dos vías (eliminación y matriz ampliada) y matrices elementales de filas",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a90",
   "maila": 2,
   "izenburua": "Sistema paramétrico por dos vías, y matrices elementales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El <strong>mismo sistema por dos caminos</strong> —<strong>eliminando</strong> ecuaciones directamente y comparando rangos con la <strong>matriz ampliada</strong>—: ambas vías dan el <strong>mismo resultado</strong>. El parámetro <math display=\"inline\"><mi>k</mi></math> distingue los casos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El sistema, como aplicación lineal"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>k</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>c</mi></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Primera vía: eliminando ecuaciones"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><mi>k</mi><msub><mi>E</mi><mn>1</mn></msub></mrow></math> y luego sumando <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math>, se <strong>elimina</strong> <math display=\"inline\"><mi>z</mi></math> y queda una única ecuación para <math display=\"inline\"><mi>y</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>c</mi><mo>−</mo><mi>k</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>c</mi><mo>−</mo><mi>k</mi><mi>a</mi><mo>+</mo><mi>b</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ese coeficiente, <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mi>k</mi></mrow></math>, es <strong>el que lo decide todo</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Segunda vía: matriz ampliada y rangos"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><msub><mi>F</mi><mn>3</mn></msub><mo>−</mo><mi>k</mi><msub><mi>F</mi><mn>1</mn></msub></mrow></math> y luego <math display=\"inline\"><mrow><msub><mi>F</mi><mn>3</mn></msub><mo>+</mo><msub><mi>F</mi><mn>2</mn></msub></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"../media/formulak/a52ea27e6377825e.svg\" alt=\"(A|B) = mat(augment: #3, 1, -1, 0, a; 0, 1, -1, b; k, 1, 1, c) ~ mat(augment: #3, 1, -1, 0, a; 0, 1, -1, b; 0, 2+k, 0, c - k a + b).\" style=\"width:28.114em;height:4.526em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Estas dos operaciones son exactamente los dos pasos anteriores</strong>: un único método, escrito de dos maneras."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Discusión del parámetro (los tres casos)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mi>k</mi><mo>≠</mo><mn>0</mn></mrow></math></strong>: <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mo>=</mo></mrow></math> número de incógnitas <math display=\"inline\"><mo>→</mo></math>, <strong>compatible determinado</strong>.",
      "<strong><math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math></strong> (es decir <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>): se anula la tercera fila y <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>:",
      "Si <math display=\"inline\"><mrow><mi>c</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo>+</mo><mi>b</mi><mo>≠</mo><mn>0</mn></mrow></math> entonces <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mo>≠</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <strong>incompatible</strong>.",
      "Si <math display=\"inline\"><mrow><mi>c</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math> entonces <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mn>3</mn></mrow></math>: <strong>infinitas soluciones</strong> (<math display=\"inline\"><mi>y</mi></math> libre, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>b</mi></mrow></math>)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Operaciones elementales de filas"
    },
    {
     "mota": "testua",
     "html": "Cada operación elemental de fila equivale a <strong>multiplicar por la izquierda por una matriz</strong> que se obtiene haciendo la misma operación en <math display=\"inline\"><msub><mi>I</mi><mi>p</mi></msub></math>. Los tres tipos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Intercambiar dos filas</strong> (<math display=\"inline\"><mrow><mi>r</mi><mo>↔</mo><mi>s</mi></mrow></math>): <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi></mrow></math>.",
      "<strong>Multiplicar una fila por <math display=\"inline\"><mrow><mi>k</mi><mo>≠</mo><mn>0</mn></mrow></math></strong>: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mi>A</mi></mrow></math>.",
      "<strong>Sumar a la fila <math display=\"inline\"><mi>r</mi></math> la fila <math display=\"inline\"><mi>s</mi></math> multiplicada por <math display=\"inline\"><mi>k</mi></math></strong>: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mi>A</mi></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Ejemplo (intercambio de las dos primeras filas):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Todas las matrices elementales son <strong>invertibles</strong>; por eso <strong>no cambian el rango de <math display=\"inline\"><mi>A</mi></math></strong>\n  (el cuaderno no lo dice, pero esa es la razón de fondo).\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0024</code>, páginas 46-47; &quot;ÁLGEBRA NEWTON&quot;). El <strong>mismo sistema por dos vías</strong> (eliminación y matriz ampliada), el coeficiente <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mi>k</mi></mrow></math> como clave, y las <strong>matrices elementales</strong> en tres tipos. Aquí <math display=\"inline\"><mrow><mi>c</mi><mo>−</mo><mi>k</mi><mi>a</mi></mrow></math> es lo coherente (en un paso se podía leer <math display=\"inline\"><mrow><mi>+</mi><mi>k</mi><mi>a</mi></mrow></math>, pero todo lo demás es <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>a</mi></mrow></math>). <strong>Primera referencia bibliográfica</strong> del cuaderno: «Emiliano Aparicio, <em>Teoría de grupos</em>». Veinte resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_alg_p046.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p058_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; grupo lineal general GL(n,K) y matrices que conmutan con A",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a91",
   "maila": 2,
   "izenburua": "Grupo lineal general y matrices que conmutan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación de la estructura de anillo: el <strong>grupo lineal general</strong> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, las <strong>consecuencias</strong> del producto no conmutativo, y hallar las <strong>matrices que conmutan con <math display=\"inline\"><mi>A</mi></math></strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Grupo lineal general"
    },
    {
     "mota": "testua",
     "html": "En un anillo <strong>unitario</strong>, los elementos que tienen <strong>inverso</strong> (&quot;unidades&quot;) forman siempre un <strong>grupo</strong> con el producto. En el anillo <math display=\"inline\"><mrow><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, las unidades son las <strong>matrices invertibles</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>A</mi><mo>∈</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo>∃</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">unitateak</mtext><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> taldea</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Consecuencias de la no conmutatividad"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi><mo>≠</mo><mi>B</mi><mi>A</mi></mrow></math>, algunas fórmulas de los números <strong>fallan</strong> con matrices:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mi>A</mi><mi>B</mi><mo>+</mo><mi>B</mi><mi>A</mi><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup><mo>≠</mo><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mi>B</mi><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mi>A</mi><mi>B</mi><mi>A</mi><mi>B</mi><mo>≠</mo><msup><mi>A</mi><mn>2</mn></msup><msup><mi>B</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El término central es <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi><mo>+</mo><mi>B</mi><mi>A</mi></mrow></math>, y solo si <math display=\"inline\"><mrow><mn>2</mn><mi>A</mi><mi>B</mi></mrow></math> <strong>conmutan</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> y el inverso"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>A</mi></math> es <strong>invertible</strong>, de <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> se deduce <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>solo</strong> multiplicando por el inverso:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>I</mi><mi>X</mi><mo>=</mo><mi>X</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sin inverso, en cambio, de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>no se puede</strong> deducir <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> (divisores de cero)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrices que conmutan con <math display=\"inline\"><mi>A</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, planteando <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>X</mi><mi>A</mi></mrow></math> e igualando <strong>componente a componente</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>4</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>X</mi><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las igualdades dan <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></math>, por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>X</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mi>I</mi><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mi>N</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>N</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Las que conmutan con <math display=\"inline\"><mi>A</mi></math> son los <strong>polinomios</strong> de <math display=\"inline\"><mi>A</mi></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>I</mi><mo>+</mo><mi>N</mi></mrow></math>): un ejemplo de un resultado general.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0030</code>, páginas 58-59; &quot;ÁLGEBRA NEWTON&quot;). El <strong>grupo lineal general</strong> (unidades del anillo), las <strong>dos consecuencias</strong> de la no conmutatividad (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>), <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> con el inverso, y los <strong>conmutantes</strong> componente a componente. La interpretación (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mi>I</mi><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mi>N</mi></mrow></math>) no la da el cuaderno. ⚠ Un post-it rosa tapa las primeras líneas de la izquierda; lo tapado no se reconstruye. Catorce resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_alg_p058.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p060_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; binomio de Newton con matrices, descomposición simétrica e inverso como polinomio",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a92",
   "maila": 2,
   "izenburua": "Binomio de Newton, descomposición simétrica e inverso mediante polinomio",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuatro ejercicios, todos operando <strong>como si la matriz fuera un número</strong>, pero cuidando <strong>dónde vale</strong> (la conmutación)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Binomio de Newton: <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math>"
    },
    {
     "mota": "testua",
     "html": "Escribiendo <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>I</mi><mo>+</mo><mi>B</mi></mrow></math>, donde <math display=\"inline\"><mi>B</mi></math> es <strong>nilpotente</strong> (<math display=\"inline\"><mrow><msup><mi>B</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn></mrow></math>). Como <math display=\"inline\"><mrow><mn>2</mn><mi>I</mi></mrow></math> conmuta con <strong>cualquiera</strong>, se puede aplicar el binomio de Newton —y <strong>se corta en tres términos</strong>—:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mi>n</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>I</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mi>I</mi><mo>+</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>B</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mi>n</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><msup><mi>B</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>B</mi><mn>3</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Comprobación para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mn>4</mn><mi>I</mi><mo>+</mo><mn>4</mn><mi>B</mi><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> (coincide)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Descomposición simétrica / antisimétrica"
    },
    {
     "mota": "testua",
     "html": "Toda matriz es, de <strong>forma única</strong>, la suma de una simétrica y una antisimétrica (<math display=\"inline\"><mrow><mi>S</mi><mo>⊕</mo><mi>A</mi><mo>=</mo><mi>E</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>M</mi><mo>=</mo><munder><munder><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><msup><mi>M</mi><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> simetrikoa</mtext></mrow></munder><mo>+</mo><munder><munder><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>−</mo><msup><mi>M</mi><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> antisimetrikoa</mtext></mrow></munder><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Se obtiene sumando y restando <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msup><mi>M</mi><mi>t</mi></msup><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>; es una <strong>suma directa</strong> (existencia y unicidad)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El inverso como polinomio"
    },
    {
     "mota": "testua",
     "html": "Si se cumple <math display=\"inline\"><mrow><msup><mi>A</mi><mn>3</mn></msup><mo>=</mo><mn>8</mn><mi>I</mi></mrow></math>, sin calcular ningún determinante:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>⋅</mo><mfrac><msup><mi>A</mi><mn>2</mn></msup><mn>8</mn></mfrac><mo>=</mo><mfrac><msup><mi>A</mi><mn>3</mn></msup><mn>8</mn></mfrac><mo>=</mo><mi>I</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><msup><mi>A</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>I</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo>−</mo><mi>A</mi><mo>+</mo><msup><mi>A</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi><mo>+</mo><msup><mi>A</mi><mn>3</mn></msup><mo>=</mo><mn>9</mn><mi>I</mi></mrow></math> (suma de cubos, porque <math display=\"inline\"><mi>I</mi></math> conmutan). En general, de <math display=\"inline\"><mrow><mn>3</mn><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>A</mi><mo>−</mo><mi>α</mi><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>α</mi><mo>≠</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>A</mi><mo>+</mo><mn>7</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi><mi>I</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>A</mi><mo>+</mo><mn>7</mn><mi>I</mi></mrow><mi>α</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Si una matriz cumple una ecuación polinómica de <strong>término independiente no nulo</strong>, su inversa\n  es <strong>un polinomio de ella</strong> (anticipo de Cayley–Hamilton).\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0031</code>, páginas 60-61; &quot;ÁLGEBRA NEWTON&quot;). Cuatro ejercicios: <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math> mediante el <strong>binomio de Newton</strong> (<math display=\"inline\"><mi>B</mi></math> nilpotente, se corta en tres términos), <math display=\"inline\"><mrow><mi>S</mi><mo>⊕</mo><mi>A</mi></mrow></math> la <strong>descomposición</strong>, y el <strong>inverso como polinomio</strong> (<math display=\"inline\"><mrow><msup><mi>A</mi><mn>3</mn></msup><mo>=</mo><mn>8</mn><mi>I</mi></mrow></math> y <math display=\"inline\"><mrow><mn>3</mn><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>A</mi><mo>−</mo><mi>α</mi><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>). Fórmula <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math> comprobada para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>. Dieciocho resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_alg_p060.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p062_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; Cayley-Hamilton, simetría y producto, triangulación con matrices elementales",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a93",
   "maila": 2,
   "izenburua": "Cayley–Hamilton, simetría y triangulación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación de la unidad anterior: el inverso mediante <strong>Cayley–Hamilton</strong>, la <strong>trampa</strong> de la simetría en el producto, y la <strong>triangulación con matrices elementales</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El inverso mediante Cayley–Hamilton"
    },
    {
     "mota": "testua",
     "html": "El teorema dice que toda matriz <strong>anula su polinomio característico</strong>, <math display=\"inline\"><mrow><msub><mi>P</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. De <math display=\"inline\"><mrow><msup><mi>A</mi><mn>5</mn></msup><mo>−</mo><mn>4</mn><msup><mi>A</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>3</mn><mi>I</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>A</mi><mn>2</mn></msup><mo>−</mo><msup><mi>A</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>A</mi><mn>4</mn></msup><mo>−</mo><mn>4</mn><msup><mi>A</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matiz fino: cuándo NO existe el inverso"
    },
    {
     "mota": "testua",
     "html": "En el segundo ejemplo <math display=\"inline\"><mrow><msub><mi>P</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>5</mn></msup><mo>−</mo><mn>4</mn><msup><mi>λ</mi><mn>3</mn></msup><mo>+</mo><mi>λ</mi><mo>=</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>4</mn></msup><mo>−</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <strong>sin término independiente</strong>. Entonces <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> es un <strong>autovalor</strong>, y la cadena muestra el fracaso:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> propioa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⇔</mo><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ez isomorfismo </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><mi>∄</mi><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Contraste de los dos casos: en el primero el término independiente es <math display=\"inline\"><mrow><mn>3</mn><mo>≠</mo><mn>0</mn></mrow></math> (el inverso existe); en el segundo <math display=\"inline\"><mn>0</mn></math> (no existe).\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetría y producto"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>A</mi></math> es simétrica, <math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math> <strong>también</strong>: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>A</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>A</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><msup><mi>A</mi><mi>t</mi></msup><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math>. Pero siendo <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> ambas simétricas, <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> <strong>no siempre</strong> es simétrica:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><msup><mi>B</mi><mi>t</mi></msup><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><mi>B</mi><mi>A</mi><mo>≠</mo><mi>A</mi><mi>B</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">oro har; berdin, solo konmutatzen badute</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Al trasponer, <strong>el orden se invierte</strong>: ahí está la trampa.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Triangulación con matrices elementales"
    },
    {
     "mota": "testua",
     "html": "<strong>Creando ceros</strong> bajo la diagonal de <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, encadenando tres operaciones elementales (<math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>E</mi><mn>1</mn></msub></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><msub><mi>E</mi><mn>2</mn></msub></mrow></math>), queda <strong>triangular superior</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>3</mn></msub><msub><mi>E</mi><mn>2</mn></msub><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  De la diagonal se puede leer directamente el <strong>determinante</strong>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>6</mn><mo>=</mo><mi>−</mi><mn>6</mn></mrow></math> (porque esas operaciones\n  no cambian el determinante).\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0032</code>, páginas 62-63; &quot;ÁLGEBRA NEWTON&quot;). <strong>Cayley–Hamilton</strong> para obtener el inverso, y el <strong>matiz fino</strong>: si no hay término independiente, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> es autovalor y no hay inverso (contraste de los dos casos). Luego la <strong>simetría</strong> (<math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math> sí, <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> en general no) y la <strong>triangulación</strong> con tres elementales (<math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><msub><mi>E</mi><mn>2</mn></msub><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi></mrow></math>). Catorce resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_alg_p062.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p048_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; estructura de las matrices (espacio vectorial y anillo, las tres propiedades); mitad de física para 05",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a94",
   "maila": 2,
   "izenburua": "Estructura de las matrices: espacio vectorial y anillo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Cierre</strong> de la teoría de matrices: la tercera matriz elemental, el inverso mediante elementales, y las <strong>dos estructuras</strong> que forman las matrices."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La tercera matriz elemental"
    },
    {
     "mota": "testua",
     "html": "Sumar a la fila <math display=\"inline\"><mi>r</mi></math> la fila <math display=\"inline\"><mi>s</mi></math> multiplicada por <math display=\"inline\"><mi>k</mi></math> es multiplicar por la izquierda por <math display=\"inline\"><msub><mi>E</mi><mn>3</mn></msub></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>3</mn></msub><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn><mo>+</mo><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn><mo>+</mo><mn>2</mn><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn><mo>+</mo><mn>3</mn><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn><mo>+</mo><mn>4</mn><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El inverso mediante elementales"
    },
    {
     "mota": "testua",
     "html": "Si una sucesión de operaciones elementales lleva <math display=\"inline\"><mi>A</mi></math> a la identidad, su producto <math display=\"inline\"><mi>B</mi></math> es el <strong>inverso</strong> (base de Gauss-Jordan):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>p</mi></msub><mi>…</mi><msub><mi>E</mi><mn>2</mn></msub><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mi>A</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las operaciones por columnas también son matrices, pero multiplican <strong>por la derecha</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dos estructuras: espacio vectorial y anillo"
    },
    {
     "mota": "testua",
     "html": "Con las matrices se pueden construir <strong>dos estructuras</strong>, y el símbolo <math display=\"inline\"><mi>⋅</mi></math> designa <strong>dos operaciones</strong> distintas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> con la suma y el <strong>producto por escalares</strong>: <strong>espacio vectorial</strong> sobre <math display=\"inline\"><mi>K</mi></math> (para matrices de cualquier tamaño).",
      "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> con la suma y el <strong>producto de matrices</strong>: <strong>anillo</strong> (solo para matrices cuadradas, para que el producto sea interno)."
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  El anillo es <strong>unitario</strong> (existe <math display=\"inline\"><msub><mi>I</mi><mi>n</mi></msub></math>), <strong>no conmutativo</strong> (<math display=\"inline\"><mrow><mi>A</mi><mi>B</mi><mo>≠</mo><mi>B</mi><mi>A</mi></mrow></math>) y <strong>con divisores de cero</strong>.\n  Las dos últimas propiedades lo distinguen del álgebra de los números.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0025</code>, páginas 48-49; &quot;ÁLGEBRA NEWTON&quot; / &quot;FÍSICA NEWTON&quot;). Aquí solo la <strong>mitad de álgebra</strong>: cierre de la estructura de matrices (elemental, inverso, espacio vectorial y anillo, las tres propiedades). El <strong>bloque de física de la derecha</strong> (dos masas unidas por un muelle; conservación del momento y de la energía) va a la sección <code>05</code> de física de newton2, en la maquetación. Trece resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_alg_p048.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p076_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; sistema con matriz ampliada y forma canónica de Hermite (rango = único invariante)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a95",
   "maila": 2,
   "izenburua": "Sistema con matriz ampliada y forma canónica de Hermite",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un sistema resuelto con la <strong>matriz ampliada</strong> (aplicando Rouché-Frobenius), y la <strong>forma canónica de Hermite</strong>: el rango es el <strong>único invariante</strong> de la equivalencia."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El sistema, con matriz ampliada"
    },
    {
     "mota": "testua",
     "html": "Triangulando con operaciones elementales:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"../media/formulak/c49e2fadf8481bc6.svg\" alt=\"(A|B) = mat(augment: #3, 1, -5, -5, -126; 1, -5, -1, 10; 1, -1, 1, 42) ~ mat(augment: #3, 1, -5, -5, -126; 0, 4, 4, 136; 0, 0, 2, 32).\" style=\"width:26.493em;height:4.526em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mo>=</mo></mrow></math> número de incógnitas <math display=\"inline\"><mo>→</mo></math>, <strong>compatible determinado</strong>. Solución (comprobada en el sistema original): <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>16</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>18</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>44</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Forma canónica de Hermite"
    },
    {
     "mota": "testua",
     "html": "Para toda matriz de tamaño <math display=\"inline\"><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></math> y rango <math display=\"inline\"><mi>r</mi></math>, existen <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> <strong>invertibles</strong> tales que:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mi>A</mi><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Consecuencia profunda</strong>: dos matrices del mismo tamaño y rango tienen la <strong>misma forma canónica</strong>, por tanto son <strong>equivalentes</strong>. El rango es el <strong>único invariante</strong> que determina la clase de equivalencia."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Demostración: si <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>A</mi><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><mi>H</mi><mo>=</mo><msub><mi>P</mi><mn>2</mn></msub><mi>B</mi><msub><mi>Q</mi><mn>2</mn></msub></mrow></math>, entonces <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msubsup><mi>P</mi><mn>1</mn><mrow><mi>−</mi><mn>1</mn></mrow></msubsup><msub><mi>P</mi><mn>2</mn></msub><mi>B</mi><msub><mi>Q</mi><mn>2</mn></msub><msubsup><mi>Q</mi><mn>1</mn><mrow><mi>−</mi><mn>1</mn></mrow></msubsup><mo>=</mo><mi>P</mi><mi>B</mi><mi>Q</mi></mrow></math>\n  (<math display=\"inline\"><mrow><mi>P</mi><mo>,</mo><mi>Q</mi></mrow></math> invertibles) <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son equivalentes.\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo: rango mediante operaciones elementales"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: como el primer pivote es <math display=\"inline\"><mn>0</mn></math> (&quot;este cero molesta&quot;), intercambiar filas y triangular <math display=\"inline\"><mo>→</mo></math> anular la tercera fila <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0039</code>, páginas 76-77; &quot;ÁLGEBRA NEWTON&quot;). Sistema con <strong>matriz ampliada</strong> (solución comprobada en el sistema original: <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>16</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>18</mn><mo>,</mo><mi>x</mi><mo>=</mo><mn>44</mn></mrow></math>) y <strong>forma canónica de Hermite</strong> (rango = único invariante). ⚠ Un post-it (&quot;14.1&quot;) tapa el planteamiento del problema de edades de la izquierda; en las matrices intermedias hay discrepancias de lectura (<math display=\"inline\"><mn>32</mn></math>/<math display=\"inline\"><mn>36</mn></math>), pero los <strong>resultados finales</strong> están comprobados por vías independientes. Confianza media. Sin correcciones. Véase <code>koadernoa_newton2_alg_p076.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p078_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; P y Q como producto de elementales, y sistema paramétrico por rangos",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a96",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> como producto de elementales; sistema paramétrico por rangos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Continuación</strong> de la forma normal: <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> <strong>como producto</strong> de matrices elementales, y un sistema paramétrico resuelto <strong>por rangos</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math>, producto de elementales"
    },
    {
     "mota": "testua",
     "html": "Para llevar <math display=\"inline\"><mi>A</mi></math> a la forma canónica, las <strong>operaciones por filas</strong> multiplican por la izquierda (producto <math display=\"inline\"><mi>P</mi></math>), y las <strong>operaciones por columnas</strong> por la derecha (producto <math display=\"inline\"><mi>Q</mi></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munder><munder><mrow><msub><mi>E</mi><mi>p</mi></msub><mi>…</mi><msub><mi>E</mi><mn>1</mn></msub></mrow><mo accent=\"true\">⏟</mo></munder><mi>P</mi></munder><mspace width=\"0.222em\"></mspace><mi>A</mi><mspace width=\"0.222em\"></mspace><munder><munder><mrow><msub><mi>Q</mi><mn>1</mn></msub><mi>…</mi><msub><mi>Q</mi><mi>s</mi></msub></mrow><mo accent=\"true\">⏟</mo></munder><mi>Q</mi></munder><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el ejemplo <math display=\"inline\"><mi>P</mi></math> se compone de <strong>cuatro</strong> elementales (filas) y <math display=\"inline\"><mi>Q</mi></math> de <strong>ocho</strong> (columnas) —«¡8 matrices!»—. La distinción fila/columna es la razón de que <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> queden <strong>a ambos lados</strong> de <math display=\"inline\"><mi>A</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema paramétrico por rangos"
    },
    {
     "mota": "testua",
     "html": "En un sistema <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> una ecuación es <strong>combinación lineal de las demás</strong> (<math display=\"inline\"><mrow><mn>4</mn><msub><mi>E</mi><mn>2</mn></msub><mo>+</mo><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>), por tanto <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>: <strong>sobra una incógnita</strong>, <strong>compatible indeterminado</strong>."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Estrategia: como sabemos que una incógnita <strong>no se puede despejar</strong>, no la eliminamos: la dejamos como <strong>parámetro</strong>.\n  Pasar <math display=\"inline\"><mi>t</mi></math> al segundo miembro y resolver las otras tres ecuaciones en <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math>, en función de <math display=\"inline\"><mi>t</mi></math>.\n</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Cramer no</strong> corresponde aquí: la regla exige matriz cuadrada y de determinante no nulo (sistema determinado), y aquí <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>. El método del parámetro es el adecuado —elegir la herramienta <strong>según el tipo de sistema</strong>—."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0040</code>, páginas 78-79; &quot;ÁLGEBRA NEWTON&quot;). <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> como <strong>producto de elementales</strong> (filas por la izquierda, columnas por la derecha; <math display=\"inline\"><mrow><mi>P</mi><mi>A</mi><mi>Q</mi><mo>=</mo><mi>H</mi></mrow></math>), y <strong>sistema paramétrico por rangos</strong> (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mi>t</mi></math> parámetro, Cramer no corresponde). Página muy <strong>densa</strong>: las entradas de muchas matrices intermedias son de lectura parcial, pero el <strong>método y las conclusiones</strong> están comprobados. Catorce resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_alg_p078.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p080_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; inverso por Gauss-Jordan, Cramer con parámetros, comienzo de los determinantes",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a97",
   "maila": 2,
   "izenburua": "Inverso por Gauss-Jordan, Cramer con parámetros, comienzo de los determinantes",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El inverso por <strong>Gauss-Jordan</strong>, <strong>cierre con Cramer</strong> del sistema paramétrico anterior, y los <strong>determinantes</strong> como aplicación."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Existencia del inverso y Gauss-Jordan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math> tiene inverso <strong>solo</strong> si es cuadrada y de <strong>rango máximo</strong> (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>n</mi></mrow></math>; es un isomorfismo). Haciendo operaciones por filas en la matriz <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>I</mi></mrow></math> hasta obtener <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>p</mi></msub><mi>…</mi><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mi>p</mi></msub><mi>…</mi><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, el inverso de <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es <math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (comprobado: <math display=\"inline\"><mrow><mi>A</mi><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>I</mi></mrow></math>). <strong>Dos vías</strong>: por filas (<math display=\"inline\"><mrow><mi>P</mi><mi>A</mi><mo>=</mo><mi>I</mi><mo>⇒</mo><mi>P</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>) y por columnas (<math display=\"inline\"><mrow><mi>A</mi><mi>Q</mi><mo>=</mo><mi>I</mi><mo>⇒</mo><mi>Q</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cramer con parámetros"
    },
    {
     "mota": "testua",
     "html": "Se <strong>cierra</strong> el sistema anterior (<math display=\"inline\"><mrow><mi>p</mi><mn>.79</mn></mrow></math>): dejando <math display=\"inline\"><mi>t</mi></math> y <math display=\"inline\"><mi>z</mi></math> como <strong>parámetros</strong>, el sistema <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> restante se resuelve <strong>por Cramer</strong> —ahora SÍ corresponde, porque el determinante es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>—:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>t</mi><mo>−</mo><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>−</mo><mn>2</mn><mi>t</mi><mo>−</mo><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>,</mo><mi>z</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las soluciones quedan en función de <math display=\"inline\"><mrow><mi>t</mi><mo>,</mo><mi>z</mi></mrow></math>: una <strong>familia de soluciones</strong> (sistema indeterminado)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Punto didáctico: en <math display=\"inline\"><mrow><mi>p</mi><mn>.79</mn></mrow></math> Cramer se <strong>descartó</strong> (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>3</mn></mrow></math>); aquí, reducido a la parte determinada,\n  se <strong>admite</strong>. La herramienta, según la <strong>parte</strong> del sistema.\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Determinantes: definición"
    },
    {
     "mota": "testua",
     "html": "Tema nuevo: el determinante como aplicación <strong>de <math display=\"inline\"><mi>n</mi></math> vectores al cuerpo</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>:</mo><msup><mi>E</mi><mi>n</mi></msup><mo>→</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi><mo>=</mo><mi>n</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Forma <strong>multilineal alternada</strong>: definición moderna, más general que la regla de cálculo (<math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℂ</mi></mrow></math> o <math display=\"inline\"><mi mathvariant=\"double-struck\">ℚ</mi></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0041</code>, páginas 80-81; &quot;ÁLGEBRA NEWTON&quot;; dos fechas: 12/10 y 12/12). <strong>Inverso por Gauss-Jordan</strong> (existencia: cuadrada + rango máximo; dos vías), <strong>Cramer con parámetros</strong> (cierra el sistema anterior, ahora <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> determinado), y <strong>comienzo de los determinantes</strong> (aplicación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>:</mo><msup><mi>E</mi><mi>n</mi></msup><mo>→</mo><mi>K</mi></mrow></math>). Inverso del ejemplo comprobado (<math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; la tercera fila a mano es distinta, corregida). Catorce resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_alg_p080.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p082_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; el determinante como forma multilineal alternada, fórmula 2x2 deducida de los axiomas",
     "hizkuntza": "eu"
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p026_mk.typ",
     "xehetasuna": "transcripción literal, maquetación y comprobación; formas de Jordan posibles y cadena de tres niveles (mitad de álgebra de la página mixta; física en 05)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a98",
   "maila": 2,
   "izenburua": "Formas de Jordan posibles y cadena de tres niveles",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cierra la <strong>pregunta que quedó abierta</strong> en <code>NEWTON2_0008</code> (página 14): dado un polinomio característico, ¿cuáles son las formas canónicas de Jordan <strong>posibles</strong>?"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autovalores y multiplicidades"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"inline\"><mrow><mi>χ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>.",
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>.",
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>3</mn></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, los autovalores <strong>simples</strong> fuerzan un único bloque; <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math> da <strong>tres formas</strong> posibles (según la multiplicidad geométrica)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los tres casos según <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  El número de bloques es <math display=\"inline\"><mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y las cadenas de núcleos crecen hasta la multiplicidad:\n  - <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>: un único bloque <math display=\"inline\"><mrow><msub><mi>J</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; los núcleos <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math> (hasta la tercera potencia).\n  - <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>: dos bloques (<math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>1</mn></mrow></math>); los núcleos <math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math> (hasta la segunda potencia).\n  - <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>: tres bloques <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> (diagonalizable; basta la primera potencia).\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cadena de tres niveles (la más larga del cuaderno)"
    },
    {
     "mota": "testua",
     "html": "La cadena del autovalor <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math>, aplicando <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> una y otra vez:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>∈</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>−</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La base de <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la de <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>5</mn></msub><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por tanto <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>5</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (cinco vectores <math display=\"inline\"><mo>=</mo></math> dimensión)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la foto (<code>NEWTON2_0014</code>, páginas 26-27; &quot;FÍSICA NEWTON&quot; / &quot;ÁLGEBRA NEWTON&quot;). <strong>Mitad de álgebra</strong> (página 27): cierra la pregunta de <code>NEWTON2_0008</code> —las <strong>tres formas de Jordan posibles</strong> para <math display=\"inline\"><mrow><mi>χ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>—, y la <strong>cadena de tres niveles</strong> (<math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>→</mo><msub><mi>v</mi><mn>2</mn></msub><mo>→</mo><msub><mi>v</mi><mn>3</mn></msub></mrow></math>, la más larga del cuaderno). El <strong>bloque de física de la izquierda</strong> (conservación de la energía, proyectil explosivo) está en la sección <code>05</code>. Diez resultados correctos. Sin correcciones. Véase <code>koadernoa_newton2_fis_p026.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 2 ene 2013, IMG_2026_07_28_01_42_30S.jpg — IMG_2026_07_28_01_43_04S.jpg (ezker orriak)",
     "xehetasuna": "Cuaderno LANDETA2, páginas 12-15, 18-22: imágenes inversas de aplicaciones lineales, cambio de base, determinante 5×5, subespacios suplementarios e invariantes, diagonalización completa (el rótulo de la página 22 es ALGEBRA NEWTON) — transcripciones v3 comprobadas",
     "hizkuntza": "es"
    }
   ]
  }
 ]
};
