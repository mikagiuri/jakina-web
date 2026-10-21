/* JAKINA · kapitulua «B9.1 - Oinarrizko kontzeptuak» (05mk_01kontzeptuak), desde edicion2/kapituluak/05mk_01kontzeptuak/05mk_01kontzeptuak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_01kontzeptuak"] = {
 "gakoa": "05mk_01kontzeptuak",
 "titulua": "JAKINA - B9 - Mecánica clásica - 1/10",
 "azala": "B9.1 - Conceptos básicos",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_01kontzeptuak/05mk_01kontzeptuak.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Mecánica clásica",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "Segunda pasada de la física: partiendo de las leyes de Newton, hacia los sistemas de referencia relativos, la relatividad especial, las fuerzas centrales y el sólido rígido; y después la mecánica analítica —Lagrange y Hamilton—, que reconstruye toda la física a partir de un único principio. El formalismo de Hamilton es la puerta de la física cuántica: por eso el bloque está a las puertas de la etapa IV."
    }
   ],
   "edukia": [
    "Conceptos básicos y movimiento relativo",
    "Relatividad especial",
    "Fuerzas centrales y sólido rígido",
    "Mecánica analítica: Lagrange y Hamilton",
    "Pequeñas oscilaciones y caos determinista",
    "Ondas y medios continuos"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M25",
   "izenburua": "Mecánica clásica — Parte I",
   "maila": "L2"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Aplicar las leyes de Newton en sistemas de referencia generales.",
    "Dominar los fundamentos de la relatividad especial.",
    "Utilizar los formalismos de Lagrange y de Hamilton.",
    "Analizar las oscilaciones normales y los sistemas caóticos."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M20 — Ecuaciones diferenciales; M15 — Cálculo vectorial; M11 — Diagonalización (modos normales); M16 — Física general (primera pasada)"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "fullmekanika",
   "xehetasuna": "Capítulos 1–10 (Aguirregabiria)",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Conceptos básicos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En este primer tema se repasan sobre todo algunos conceptos básicos de mecánica. Daremos por supuesto que se dominan bien la mecánica y el cálculo vectorial que se aprenden en los cursos de física general. Si en tu caso no es así, lector, acude a un texto de nivel elemental. Por la misma razón, no se repetirán aquí las demostraciones conocidas de algunos resultados."
    },
    {
     "mota": "testua",
     "html": "El formalismo que utilizaremos en este tema, al que a veces se llama <strong>mecánica vectorial</strong> o <strong>mecánica newtoniana</strong>, es desde cierto punto de vista el más antiguo de la mecánica clásica, empezando por Newton. Como veremos en el tema 6, existen otras formas de hacer mecánica clásica, mucho más útiles para realizar los cálculos y para entender algunos conceptos utilizados en la física moderna."
    },
    {
     "mota": "testua",
     "html": "Para empezar, estudiaremos la cinemática, para recordar después las leyes y los principios principales de la mecánica. Tras ver la utilidad de los diagramas de energía al estudiar las propiedades cualitativas del equilibrio y del movimiento, abordaremos la dinámica de los sistemas de partículas. Por último, se estudiarán las colisiones."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Cinemática de la partícula puntual",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para hacer la cinemática que describe el movimiento de una partícula (y, más adelante, la dinámica que explica su porqué) elegiremos un <strong>sistema de referencia</strong>. Utilizaremos los componentes de este concepto —triedro cartesiano, regla y reloj— para definir una por una las magnitudes cinemáticas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Geometría euclídea"
    },
    {
     "mota": "testua",
     "html": "Al hacer la cinemática en la mecánica clásica se usa la geometría como punto de partida: concretamente la geometría euclídea, pues la posibilidad misma de otras geometrías solo se consideró en el siglo XIX. Desde el punto de vista de Newton, el espacio de la mecánica clásica es absoluto, escenario inmutable de todos los fenómenos que ocurren en la naturaleza, dado <em>a priori</em>."
    },
    {
     "mota": "testua",
     "html": "Para hacer la geometría, y para empezar a formar el sistema de referencia, elegiremos un triedro cartesiano directo (como el <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> de la figura 1.2). Los vectores unitarios que indican la dirección y el sentido de los ejes cartesianos son <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒋</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Posición"
    },
    {
     "mota": "testua",
     "html": "Para indicar la posición de un punto <math display=\"inline\"><mi>P</mi></math> —o de una partícula puntual— nos valdremos del <strong>vector de posición</strong> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><mover><mrow><mi>O</mi><mi>P</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>. Las <strong>componentes</strong> del vector de posición,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo></mrow></math> &lt;eq:osagaiak&gt;"
    },
    {
     "mota": "testua",
     "html": "es decir, las proyecciones del vector de posición en la dirección de los ejes cartesianos, son las <strong>coordenadas cartesianas</strong> del punto: <math display=\"inline\"><mi>x</mi></math> <strong>abscisa</strong>, <math display=\"inline\"><mi>y</mi></math> <strong>ordenada</strong> y <math display=\"inline\"><mi>z</mi></math> <strong>altura</strong>."
    },
    {
     "mota": "testua",
     "html": "El vector de posición se desarrolla así, en la base vectorial formada por los vectores unitarios:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Componentes del vector de posición en un sistema de referencia.",
     "src": "../media/irudiak/dbf1c041f853f2da.svg",
     "zabalera": 245
    },
    {
     "mota": "testua",
     "html": "Naturalmente, en cinemática, a diferencia de la geometría, el vector de posición y las componentes son magnitudes y, además de números reales, se necesitan unidades para medirlas. En el Sistema Internacional la unidad de longitud es el <strong>metro</strong>."
    },
    {
     "mota": "azpititulua",
     "testua": "Coordenadas polares planas"
    },
    {
     "mota": "testua",
     "html": "A modo de ejemplo, supongamos que el punto <math display=\"inline\"><mi>P</mi></math> está en el plano cartesiano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>, es decir, que <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>. En ese caso, para expresar la posición se pueden usar las coordenadas cartesianas <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math>, pero también las polares dadas por las ecuaciones siguientes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las magnitudes no cartesianas que pueden usarse para determinar la posición se llamarán <strong>coordenadas generalizadas</strong> y las que dan el cambio de variable, <strong>ecuaciones de transformación</strong>. Sus inversas son las siguientes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>φ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><mi>y</mi><mi>x</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Coordenadas polares de un punto del plano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>.",
     "src": "../media/irudiak/b44e96ff744a5863.svg",
     "zabalera": 205
    },
    {
     "mota": "testua",
     "html": "El vector de posición se expresa así en coordenadas cartesianas y polares:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero a veces resultan más convenientes los vectores unitarios <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></math> y <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></math> definidos por las coordenadas polares:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>≡</mo><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>r</mi></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>≡</mo><mfrac><mrow><mi>d</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow><mrow><mi>d</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que en cada punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es una base ortonormal directa: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Deduce que el vector de posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> tiene una sola componente en este caso particular: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>r</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tiempo"
    },
    {
     "mota": "testua",
     "html": "Para medir el tiempo, otro concepto absoluto de Newton, se necesitan relojes que completen el sistema de referencia. En el Sistema Internacional la unidad de tiempo es el <strong>segundo</strong>."
    },
    {
     "mota": "testua",
     "html": "Al cambiar el tiempo, la posición de la partícula irá cambiando a lo largo de la <strong>trayectoria</strong> y, por tanto, hay que tener en cuenta que <math display=\"inline\"><mi>t</mi></math> corresponde a un instante:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Velocidad"
    },
    {
     "mota": "testua",
     "html": "La primera magnitud derivada es la velocidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>≡</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(De aquí en adelante, como se hace habitualmente en mecánica, usaremos casi siempre la notación abreviada de Newton <math display=\"inline\"><mover><mspace width=\"0.222em\"></mspace><mo accent=\"true\">̇</mo></mover></math> para expresar la derivada respecto del tiempo, que en la notación de Leibniz se escribe de forma más explícita <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>.) Las componentes cartesianas de la velocidad se calculan directamente a partir de la expresión <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Definición de la velocidad.",
     "src": "../media/irudiak/529c22d630d19a58.svg",
     "zabalera": 237
    },
    {
     "mota": "testua",
     "html": "El <strong>vector unitario tangente</strong>, que indica en cada punto la dirección tangente a la trayectoria y el sentido del movimiento, se obtiene dividiendo la velocidad por su módulo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>≡</mo><mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Notación.</strong> Los escalares se escriben en cursiva (como en el caso de la coordenada <math display=\"inline\"><mi>x</mi></math>) y la mayoría de los vectores en negrita recta (como en el caso del vector de posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>). Para escribir el módulo de un vector, en lugar de usar una notación precisa como <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>, usamos la misma letra pero en cursiva: <math display=\"inline\"><mrow><mi>r</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. ¿Es cierto que el módulo de la velocidad <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> es <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math>? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El módulo de la velocidad se llama <strong>velocidad escalar</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><msqrt><mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msqrt><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Abscisa curvilínea y arco.",
     "src": "../media/irudiak/88e8c627851dd5c6.svg",
     "zabalera": 237
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es la <strong>abscisa curvilínea</strong>, longitud del arco medida desde un punto <math display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y en el sentido del movimiento, y su derivada es el módulo de la velocidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>s</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así se resumen el significado geométrico y el cinemático de la velocidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para calcular las longitudes de arcos infinitesimales y finitos podemos usar su módulo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>s</mi><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mo>=</mo><mi>v</mi><mi>d</mi><mi>t</mi><mo>=</mo><msqrt><mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msqrt><mi>d</mi><mi>t</mi><mo>=</mo><msqrt><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>P</mi><mn>0</mn></msub><mi>P</mi></msubsup><mi>d</mi><mi>s</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>P</mi><mn>0</mn></msub><mi>P</mi></msubsup><msqrt><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>d</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Notación (nueva).</strong> En la cadena de igualdades (1.17) el par de símbolos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> se ha usado para expresar cuatro cosas diferentes. Explica las cuatro. ¿Por qué desaparece dicho par en algunos pasos?"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Movimiento plano"
    },
    {
     "mota": "testua",
     "html": "Si el movimiento es plano, nos conviene elegir el plano cartesiano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> de modo que sea el plano del movimiento, para poder usar en él las coordenadas polares. Para calcular la velocidad hay que derivar las dos componentes del término de la derecha de la expresión <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>r</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>r</mi><mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al derivar el vector <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></math> encontramos un vector perpendicular, en la dirección de <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></msup><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En consecuencia, en el caso del movimiento plano,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "las componentes de la velocidad son <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> <strong>velocidad radial</strong> y <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. La componente angular <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> de la velocidad es, por tanto, el radio por <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> <strong>velocidad angular</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aceleración"
    },
    {
     "mota": "testua",
     "html": "Derivando la velocidad se obtiene la aceleración. Estas son las componentes cartesianas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora, para derivar la expresión <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow></math>, hay que calcular <math display=\"inline\"><msub><mover><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>t</mi></msub></math>. Si la variable de derivación es la abscisa curvilínea, el vector que se obtiene será perpendicular a <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></math> pero, en general, no será unitario. Por tanto, por definición, su módulo <math display=\"inline\"><mi>κ</mi></math> es la <strong>curvatura</strong> y su inverso <math display=\"inline\"><mi>ρ</mi></math> el <strong>radio de curvatura</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>κ</mi><mo>≡</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El correspondiente <strong>vector unitario normal</strong>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>≡</mo><mfrac><mn>1</mn><mi>κ</mi></mfrac><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mo>=</mo><mi>ρ</mi><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es perpendicular a <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></math> y, por definición, define la dirección de la <strong>normal principal</strong>. Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>t</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>s</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi>ρ</mi></mfrac><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "utilizando esto, vemos que la aceleración se escribe así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>+</mo><mfrac><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>ρ</mi></mfrac><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Triedro intrínseco.",
     "src": "../media/irudiak/cd442a841acb3d7a.svg",
     "zabalera": 245
    },
    {
     "mota": "azpititulua",
     "testua": "Binormal"
    },
    {
     "mota": "testua",
     "html": "La binormal se define así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>≡</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En cada punto de la trayectoria tenemos una base ortonormal <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> que define el <strong>triedro intrínseco</strong>, dependiente del punto y del tiempo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En este triedro natural definido por la propia trayectoria, la velocidad tiene una sola componente: <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>v</mi><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> la velocidad escalar. La aceleración, en cambio, tiene dos: <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math> la <strong>aceleración tangencial</strong> y <math display=\"inline\"><mrow><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>/</mi><mi>ρ</mi><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math> la <strong>aceleración normal</strong>."
    },
    {
     "mota": "azpititulua",
     "testua": "Movimiento plano"
    },
    {
     "mota": "testua",
     "html": "En el caso del movimiento plano consideramos el triedro cartesiano, el intrínseco y el definido por las coordenadas polares."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que en el caso del movimiento plano se cumple <math display=\"block\"><mrow><mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y que, por tanto, esta es la aceleración en coordenadas polares: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Movimiento circular"
    },
    {
     "mota": "testua",
     "html": "Supongamos que la trayectoria es una circunferencia de radio <math display=\"inline\"><mi>R</mi></math>. El movimiento es plano y, para simplificar los cálculos, elegiremos el origen de las coordenadas polares en el centro de la circunferencia, de modo que la ecuación de la trayectoria sea <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math>. Por tanto, <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. Definamos los vectores velocidad angular y aceleración angular de este modo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>≡</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que se cumple <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi>R</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>R</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y que, por tanto, la velocidad escalar es el radio por la velocidad angular, la aceleración normal vale <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mi>r</mi></mrow></math> <strong>aceleración centrípeta</strong>, y la aceleración tangencial es el radio por <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover></math> <strong>aceleración angular</strong>. Deduce que el triedro intrínseco es: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><mi>±</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><mi>−</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><mi>±</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> donde hay que elegir el signo superior (inferior) cuando <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> es positivo (negativo)."
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Dinámica de la partícula puntual",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como ya sabemos, la primera formulación completa de la dinámica para estudiar la causa del movimiento fue la que presentó Newton en su obra maestra <em>Principia Mathematica Philosophiae Naturalis</em>. En este apartado se estudiarán las <strong>leyes de Newton</strong>, así como algunos principios y conceptos complementarios básicos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ley de inercia de Galileo"
    },
    {
     "mota": "testua",
     "html": "En esta primera ley de Newton se introducen dos conceptos nuevos y la relación entre ellos: <em>toda partícula libre se mueve con velocidad constante en todos los sistemas de referencia inerciales</em>. Por una parte, las <strong>partículas libres son las que se mueven con velocidad constante en todos los sistemas de referencia inerciales</strong> y, por otra, un sistema de referencia es inercial si en él todas las partículas libres se mueven con velocidad constante."
    },
    {
     "mota": "azpititulua",
     "testua": "Transformación de Galileo"
    },
    {
     "mota": "testua",
     "html": "En esta primera ley de Newton incluiremos también, como postulados, las tres propiedades siguientes de los sistemas de referencia inerciales:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En todos los sistemas de referencia inerciales todas las leyes fundamentales de la mecánica se expresan de la misma manera. Todos los sistemas inerciales son equivalentes para hacer mecánica."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Un sistema de referencia inercial se mueve con velocidad constante y sin girar sus ejes respecto de cualquier otro sistema inercial."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La relación entre las medidas cinemáticas realizadas en dos sistemas de referencia inerciales diferentes viene dada por las transformaciones de Galileo que se muestran a continuación."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Dos sistemas de referencia inerciales.",
     "src": "../media/irudiak/ffb0c6900fdc94c8.svg",
     "zabalera": 265
    },
    {
     "mota": "testua",
     "html": "El triedro del sistema <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> y a <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> le corresponde <math display=\"inline\"><mrow><msup><mi>O</mi><mo>′</mo></msup><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><msup><mi>Z</mi><mo>′</mo></msup></mrow></math>. La derivada <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover></math> del vector <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mover><mrow><mi>O</mi><msup><mi>O</mi><mo>′</mo></msup></mrow><mo accent=\"true\">→</mo></mover></mrow></math> expresa la velocidad del segundo sistema respecto del primero y es constante. Si desde el punto de vista del sistema <math display=\"inline\"><mi>S</mi></math> la posición de la partícula <math display=\"inline\"><mi>P</mi></math> en el instante <math display=\"inline\"><mi>t</mi></math> es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> y en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> es <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></math>, admitimos que el tiempo es absoluto y vemos que la relación entre las posiciones es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>+</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow></math>, obtenemos las transformaciones de Galileo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msup><mi>t</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la última ecuación vemos que puede ocurrir —en el caso de la partícula libre— que la aceleración medida en ambos sistemas sea cero. La aceleración, a diferencia de la velocidad y de la posición, no cambia de un sistema inercial a otro: es absoluta."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es cierto que, según la transformación <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi></mrow></math>, la relación entre las abscisas medidas en dos sistemas de referencia inerciales es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>X</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Segunda ley de Newton"
    },
    {
     "mota": "testua",
     "html": "Esta es (dejando a un lado el <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> de Einstein) la ley más conocida de la física: <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi></mrow></math> o, más precisamente, <em>la fuerza total que sufre una partícula es el producto de su masa por su aceleración</em>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Masa inercial"
    },
    {
     "mota": "testua",
     "html": "Para empezar, en esta ley se define la masa inercial. La aceleración es siempre proporcional a la fuerza total y esa constante de proporcionalidad, la masa inercial precisamente, es una característica de la propia partícula, que no depende de la naturaleza de las fuerzas que sufre. Admitiremos casi siempre que la masa de la partícula no cambia con el tiempo, pero puede ocurrir que sea variable."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msup><mi>m</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Fuerza total"
    },
    {
     "mota": "testua",
     "html": "No hay que pensar que la ecuación <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math> sea una mera definición de la fuerza. Las ecuaciones fundamentales del movimiento de la mecánica son ecuaciones diferenciales ordinarias de segundo orden. Por ejemplo, en coordenadas cartesianas se obtienen calculando las componentes de la fórmula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>F</mi><mi>x</mi></msub><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>F</mi><mi>y</mi></msub><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>F</mi><mi>z</mi></msub><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si hay varias acciones externas diferentes, usaremos el <strong>principio de superposición</strong> para tomar la fuerza total como la suma de las fuerzas parciales producidas por todas las acciones."
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos el péndulo de la figura 1.8. Para facilitar el estudio admitiremos que el movimiento ocurre en un plano, y también que las fuerzas que sufre son el peso <math display=\"inline\"><mrow><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math>, la fuerza de contacto <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑵</mi></math> ejercida por la cuerda y la fuerza de rozamiento <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> del aire."
    },
    {
     "mota": "irudia",
     "oina": "Péndulo matemático.",
     "src": "../media/irudiak/b48bec9605cda319.svg",
     "zabalera": 146
    },
    {
     "mota": "testua",
     "html": "El sistema de referencia que hemos elegido, con sus ejes <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> y <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> en la dirección tangente y normal a la trayectoria circular de la masa, como se indica en la figura 1.8."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Teniendo en cuenta el sistema de referencia elegido, demuestra que las componentes <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math> de la segunda ley de Newton son las siguientes: <math display=\"block\"><mrow><mi>−</mi><mi>k</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>N</mi><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><mi>l</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> La segunda ecuación puede usarse para calcular <math display=\"inline\"><mi>N</mi></math>, pero para ello hay que resolver la ecuación que nos queda tras hacer las definiciones <math display=\"block\"><mrow><mi>ω</mi><mo>≡</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>≡</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Fuerza de contacto y tensión.</strong> ¿Es la fuerza de contacto del ejemplo anterior la tensión de la cuerda? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Momento lineal"
    },
    {
     "mota": "testua",
     "html": "Multiplicando la masa <math display=\"inline\"><mi>m</mi></math> de la partícula por el vector de posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> se define el <math display=\"inline\"><mrow><mi>m</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> <strong>momento de masa</strong> y su derivada (suponiendo que la masa es constante) es el <strong>momento lineal</strong> de la partícula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>≡</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Admitiendo de nuevo que la masa es constante, vemos que la segunda ley de Newton puede escribirse de la siguiente manera equivalente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si la fuerza total es cero —porque la partícula es libre, por ejemplo—, el momento lineal es una constante del movimiento."
    },
    {
     "mota": "azpititulua",
     "testua": "Momento angular y momento de una fuerza"
    },
    {
     "mota": "testua",
     "html": "El momento angular respecto del punto <math display=\"inline\"><mi>Q</mi></math> de la partícula situada en el punto <math display=\"inline\"><mi>P</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mi>Q</mi></msub><mo>=</mo><mover><mrow><mi>Q</mi><mi>P</mi></mrow><mo accent=\"true\">→</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒑</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, y el momento de una fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> aplicada a la partícula"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>Q</mi></msub><mo>=</mo><mover><mrow><mi>Q</mi><mi>P</mi></mrow><mo accent=\"true\">→</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que esta es la ecuación de evolución del momento angular, si el momento de la fuerza es <em>total</em>, es decir, si es la suma de los momentos de todas las fuerzas <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>Q</mi></msub></math>: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>Q</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mi>Q</mi></msub><mi>.</mi></mrow></math> ¿Por qué se exige en la ecuación de evolución que el momento <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑵</mi><mi>Q</mi></msub></math> sea total?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Casi siempre, pero no siempre, calcularemos los momentos respecto del origen del sistema de coordenadas. En tales casos no escribiremos explícitamente el subíndice <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>O</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Movimiento plano.</strong> Calcula en coordenadas polares el momento angular respecto del origen en el ejemplo del movimiento plano."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Principio de conservación del momento angular.</strong> ¿Qué condiciones deben cumplirse para que el momento angular de una partícula sea una constante del movimiento? ¿Cómo es el movimiento en ese caso? Deduce que, si la fuerza total es <strong>central</strong> (es decir, si su línea de aplicación pasa siempre por un punto fijo llamado <strong>polo</strong>), el momento angular respecto del polo de fuerzas es una constante del movimiento."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Área infinitesimal barrida por el vector de posición.",
     "src": "../media/irudiak/4f0b4106088040f5.svg",
     "zabalera": 223
    },
    {
     "mota": "testua",
     "html": "Pareja del momento angular es la <strong>velocidad areolar</strong>, es decir, el área barrida por el vector de posición en la unidad de tiempo. El área barrida en el intervalo de tiempo infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> es la del triángulo <math display=\"inline\"><mrow><mi>O</mi><mi>P</mi><mi>Q</mi></mrow></math> de la figura 1.9:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>r</mi><mi>d</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>r</mi><mi>d</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, para expresar el área infinitesimal de la figura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "podemos usar el vector y, por tanto, la velocidad areolar puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>a</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝑳</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué indican la dirección y el sentido de la velocidad areolar?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Acción y reacción.",
     "src": "../media/irudiak/fd630994c083feaf.svg",
     "zabalera": 230
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Principio de acción y reacción"
    },
    {
     "mota": "testua",
     "html": "Hasta ahora hemos considerado una sola partícula, pero en esta tercera ley de Newton se tendrán en cuenta dos. De algún modo, este principio nos dice que ambas son equivalentes a la hora de generar fuerzas: <em>la fuerza <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub></math> que una partícula ejerce sobre otra es opuesta a la fuerza <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub></math> que esta última ejerce sobre la primera</em>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y además <em>la dirección de las dos fuerzas mencionadas es la de la recta que une las partículas</em>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><mo>∥</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub><mo>∥</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta ley de Newton es la más restringida y puede ocurrir que no se cumpla ni siquiera en la física clásica (con fuerzas electromagnéticas, por ejemplo)."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Impulso, trabajo y energía",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Al definir las nuevas magnitudes nos hemos valido a veces de la derivada; ahora usaremos integrales. Para empezar, integraremos la fuerza respecto del tiempo, para ocuparnos más adelante de la integral de línea."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Impulso"
    },
    {
     "mota": "testua",
     "html": "Si la partícula está en los puntos 1 y 2 de la trayectoria en los instantes <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>, el <strong>impulso</strong> de la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> entre esos instantes"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mn>12</mn></msub><mo>≡</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>d</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, por definición, la integral. Si aquí sustituimos la fuerza <em>total</em>, se obtiene la expresión integral de la segunda ley de Newton:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mn>12</mn></msub><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "el impulso total es igual a la variación del momento lineal"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Define de forma adecuada el <strong>impulso angular</strong> de una fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑴</mi></math> y deduce que <em>el impulso angular total es igual a la variación del momento angular</em>. Comprueba que, si <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> se aplica en el punto <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> durante un intervalo de tiempo despreciable, el impulso angular correspondiente es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑴</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑱</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potencia y energía cinética"
    },
    {
     "mota": "testua",
     "html": "Por definición, la <strong>potencia</strong> que una fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> realiza sobre una partícula"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒫</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, y la <strong>energía cinética</strong> de la partícula es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Notación.</strong> Demuestra que las siguientes expresiones de la energía cinética son equivalentes: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> ¿Se puede escribir <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La derivada de la energía cinética respecto del tiempo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "usando la definición de potencia y la de fuerza total, demuestra que <em>la potencia desarrollada por la fuerza total es igual a la derivada de la energía cinética</em>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"script\">𝒫</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Trabajo"
    },
    {
     "mota": "testua",
     "html": "Integrando la potencia entre dos instantes obtenemos el <strong>trabajo</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mn>12</mn></msub><mo>≡</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi mathvariant=\"script\">𝒫</mi><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Desplazamiento infinitesimal y fuerza.",
     "src": "../media/irudiak/7923d54314d409e4.svg",
     "zabalera": 232
    },
    {
     "mota": "testua",
     "html": "Aquí hemos usado que el <strong>desplazamiento infinitesimal</strong> a lo largo de la trayectoria en el intervalo de tiempo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> es este:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>d</mi><mi>t</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integrando el resultado <math display=\"inline\"><mi mathvariant=\"script\">𝒫</mi></math> entre los puntos <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> de la trayectoria,"
    },
    {
     "mota": "testua",
     "html": "vemos que el trabajo de la fuerza total es igual a la variación de la energía cinética"
    },
    {
     "mota": "testua",
     "html": ":"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mn>12</mn></msub><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi mathvariant=\"script\">𝒫</mi><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mrow><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado la notación <math display=\"inline\"><mrow><msub><mi>T</mi><mi>i</mi></msub><mo>≡</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fuerzas conservativas y energía potencial"
    },
    {
     "mota": "testua",
     "html": "Cuando en cada punto está definido un valor de la fuerza, es decir, cuando la fuerza es un campo vectorial, se dice que tenemos un <strong>campo de fuerzas</strong>. Por ejemplo, la fuerza de atracción que la Tierra ejerce sobre un satélite de masa <math display=\"inline\"><mi>m</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>G</mi><mfrac><mrow><msub><mi>M</mi><mo>⊕</mo></msub><mi>m</mi></mrow><msup><mi>r</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "puede escribirse así en una buena aproximación. Aquí <math display=\"inline\"><mi>G</mi></math> es la constante de gravitación de Newton y <math display=\"inline\"><msub><mi>M</mi><mo>⊕</mo></msub></math> la masa de la Tierra."
    },
    {
     "mota": "testua",
     "html": "Un campo de fuerzas <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <strong>conservativo</strong> si <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es igual al opuesto del gradiente de un campo escalar adecuado:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></mfrac><mo>≡</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El campo escalar <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se llama <strong>energía potencial</strong> y no es único, pues está claro que al aplicar el operador diferencial <math display=\"inline\"><mi>∇</mi></math> se obtiene el mismo campo de fuerzas si le sumamos una constante."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba directamente estos resultados útiles: <math display=\"block\"><mrow><mi>∇</mi><mi>r</mi><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>r</mi></mfrac><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>∇</mi><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>=</mo><mi>−</mi><mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Deduce que como energía potencial correspondiente a la fuerza de atracción puede elegirse <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>G</mi><mfrac><mrow><msub><mi>M</mi><mo>⊕</mo></msub><mi>m</mi></mrow><mi>r</mi></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El criterio práctico para saber si un campo de fuerzas es conservativo es este:"
    },
    {
     "mota": "testua",
     "html": "un campo de fuerzas es conservativo si y solo si es irrotacional"
    },
    {
     "mota": "testua",
     "html": ", es decir, si su rotacional es nulo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><msub><mi>F</mi><mi>x</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que de la hipótesis <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi></mrow></math> se deduce que el rotacional es nulo."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La integral de línea (el trabajo) de una fuerza conservativa depende de los extremos de integración y no del camino de integración (la trayectoria). En efecto, así cambia la energía potencial en un desplazamiento infinitesimal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>≡</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>d</mi><mi>y</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mi>d</mi><mi>z</mi><mo>=</mo><mi>∇</mi><mi>V</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y, por tanto, esta es la integral de la fuerza:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>∇</mi><mi>V</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><msubsup><mrow><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msub><mi>V</mi><mn>2</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado la notación <math display=\"inline\"><mrow><msub><mi>V</mi><mi>i</mi></msub><mo>≡</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que el resultado también puede escribirse como <math display=\"block\"><mrow><mover><mi>V</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∇</mi><mi>V</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la integral de línea del campo de fuerzas <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> no depende de la trayectoria, podemos valernos del resultado para construir la energía potencial y, por tanto, para demostrar que el campo de fuerzas es conservativo. En efecto, si el punto <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub></math> es ahora un <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> arbitrario y para <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></math> elegimos un punto fijo, puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si elegimos una constante arbitraria <math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, el último resultado, que no depende del camino de integración, nos define la energía potencial de forma única en todos los puntos y se puede demostrar que el gradiente de la integral es la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que un campo de fuerzas es conservativo si y solo si su integral de línea es nula en todos los caminos de integración cerrados."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Usando este resultado se ve fácilmente que la fuerza de rozamiento no es conservativa, en el caso del rozamiento seco dinámico (véase el apartado 1.3.9). Como el rozamiento es opuesto al desplazamiento, su trabajo es negativo y, en consecuencia, no puede ser nulo, aunque la trayectoria sea cerrada. A continuación estudiamos dos casos conocidos de fuerzas conservativas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Campos de fuerzas centrales"
    },
    {
     "mota": "testua",
     "html": "Como vimos en el ejercicio 1.11, si la fuerza es central su línea de aplicación pasa siempre por el <strong>polo</strong> y, en consecuencia, el momento de la fuerza respecto del polo es nulo. Si para facilitar el análisis elegimos el origen del sistema de referencia en el polo, la fuerza será paralela al vector de posición y, por tanto, proporcional a él:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí, como de costumbre, hemos usado el vector unitario <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mi>/</mi><mi>r</mi></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es <math display=\"inline\"><mi>F</mi></math> de la expresión <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> el módulo de la fuerza central?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora que la fuerza es un <strong>campo de fuerzas</strong>, es decir, que depende de la posición: <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Además, diremos que es un <strong>campo de fuerzas central</strong> si, además de que la dirección de la fuerza es la del vector de posición, su módulo y su sentido dependen únicamente del módulo del vector de posición, es decir, de la distancia medida desde el polo y no de la dirección:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los campos de fuerzas centrales son siempre conservativos y la energía potencial correspondiente es esta (si no olvidamos la constante de integración arbitraria implícita, al menos):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>r</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En efecto, usando el teorema de las funciones compuestas y (1.74), tenemos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>∇</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mi>∇</mi><mi>r</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la expresión <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (1.72) para recuperar la energía potencial (1.75) de la fuerza."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Campo de fuerzas unidimensional"
    },
    {
     "mota": "testua",
     "html": "Si el campo de fuerzas es unidimensional, la dirección de la fuerza es constante. Para simplificar los cálculos, elegiremos el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> de nuestro sistema de referencia en dicha dirección. Así se escribe el campo de fuerzas en ese sistema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí hemos escrito explícitamente una hipótesis que forma parte de la definición del campo de fuerzas unidimensional: la fuerza depende únicamente de la componente <math display=\"inline\"><mi>x</mi></math>; <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>z</mi></math> no aparecen."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la expresión <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> el módulo de la fuerza?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los campos de fuerzas unidimensionales son siempre conservativos y la energía potencial correspondiente es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En efecto, tenemos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>∇</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oscilador armónico"
    },
    {
     "mota": "testua",
     "html": "Quizá el ejemplo más conocido de campo de fuerzas unidimensional sea el de la fuerza elástica. Supongamos que la longitud natural del muelle de la figura 1.12 es <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> y su constante recuperadora <math display=\"inline\"><mi>k</mi></math>. Según la ley de Hooke, cuando la deformación del muelle es <math display=\"inline\"><mi>x</mi></math>, ejerce sobre la masa una fuerza recuperadora <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>x</mi></mrow></math>, y si todas las demás fuerzas horizontales son despreciables, la ecuación del movimiento en dicha dirección es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Deformación del muelle.",
     "src": "../media/irudiak/e5965758b63644b5.svg",
     "zabalera": 177
    },
    {
     "mota": "testua",
     "html": "Haciendo la integral (1.86) se obtiene la energía elástica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí hemos elegido la constante de integración igual a cero; así, si el muelle no está deformado la energía elástica es nula, y positiva en todos los demás casos. Usando la pulsación natural <math display=\"inline\"><mrow><mi>ω</mi><mo>≡</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> del muelle, obtenemos la ecuación del oscilador armónico:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si además la masa sufre una fuerza de rozamiento <math display=\"inline\"><mrow><mi>−</mi><mi>C</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> proporcional a la velocidad y se define el <strong>coeficiente de amortiguamiento</strong> <math display=\"inline\"><mrow><mi>γ</mi><mo>≡</mo><mi>C</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, tenemos la ecuación del oscilador armónico amortiguado:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energía mecánica"
    },
    {
     "mota": "testua",
     "html": "Consideremos los resultados (1.68), (1.71), (1.79) y (1.78), que se escriben de este modo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mover><mi>V</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msub><mi>V</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las expresiones que aparecen en cada línea son equivalentes entre sí: la de la izquierda es potencia y la de la derecha trabajo. Las expresiones de arriba se cumplen cuando la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> es <em>total</em>, sea o no conservativa. Las de abajo, en cambio, se cumplen cuando la fuerza es conservativa, pero la fuerza puede ser tanto total como parcial."
    },
    {
     "mota": "testua",
     "html": "Si se cumplen ambas, es decir, si la fuerza total es conservativa, tenemos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>+</mo><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></msup><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>V</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La magnitud que aparece en este resultado, suma de la energía cinética y de la potencial, es la <strong>energía mecánica</strong> y lo que hemos demostrado es el <strong>principio de conservación de la energía mecánica</strong>: <em>si la fuerza total que actúa sobre una partícula es conservativa, la energía mecánica <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math> es una constante del movimiento</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos que dividimos en dos grupos las fuerzas que actúan sobre la partícula. Demuestra que la suma <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> de todas las fuerzas conservativas es conservativa y que la energía potencial <math display=\"inline\"><mi>V</mi></math> correspondiente es la suma de las energías potenciales de las fuerzas conservativas parciales. Si la suma de las fuerzas no conservativas es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>, demuestra que la ecuación de evolución de la energía mecánica es esta: <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Rozamiento"
    },
    {
     "mota": "testua",
     "html": "Si la partícula se mueve en un fluido, mientras la velocidad es pequeña, la fuerza de rozamiento es proporcional y opuesta a la velocidad relativa: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>C</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. El trabajo que realiza es, por tanto, negativo, pues <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>C</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si dos superficies en contacto están en movimiento relativo, la fuerza de rozamiento es la componente tangente de la fuerza de contacto. En muchos casos este <strong>rozamiento dinámico</strong> cumple las siguientes leyes fenomenológicas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Primera ley de Amontons</strong>: la fuerza de rozamiento es proporcional a la normal. La constante de proporcionalidad es el <strong>coeficiente de rozamiento dinámico</strong> y la ley se escribe así: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msub><mi>μ</mi><mi>d</mi></msub><mi>N</mi><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Segunda ley de Amontons</strong>: la fuerza de rozamiento no depende del área aparente de contacto."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Ley de Coulomb</strong>: la fuerza de rozamiento no depende de la velocidad relativa entre las superficies."
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando las superficies están en reposo relativo, pero existe tendencia a que aparezca movimiento relativo, tenemos <strong>rozamiento estático</strong> y la fuerza de rozamiento cumple la segunda ley de Amontons, pero no la primera. Su módulo se calcula resolviendo el problema dinámico completo, pero tiene un valor máximo que depende de la fuerza normal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>≤</mo><msub><mi>μ</mi><mi>e</mi></msub><mi>N</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde la constante <math display=\"inline\"><msub><mi>μ</mi><mi>e</mi></msub></math> es el <strong>coeficiente de rozamiento estático</strong>. En general tenemos <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>e</mi></msub><mo>&gt;</mo><msub><mi>μ</mi><mi>d</mi></msub></mrow></math>."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Métodos de resolución",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una vez conocidas las fuerzas, para obtener la velocidad y la posición hay que resolver la segunda ley de Newton. En coordenadas cartesianas, por ejemplo, hay que resolver el sistema de ecuaciones diferenciales (1.44)–(1.46). La teoría general de este problema matemático es la teoría de las ecuaciones diferenciales ordinarias. Aquí nos limitaremos a estudiar algunos casos particulares sencillos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fuerza dependiente del tiempo"
    },
    {
     "mota": "testua",
     "html": "Como hemos mencionado antes, aunque sea una excepción, puede ocurrir que se conozca la dependencia temporal de la fuerza total <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> que sufre la partícula. En ese caso, también se conoce la dependencia de la aceleración <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>/</mi><mi>m</mi></mrow></math>. Además, si se conocen la posición <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la velocidad <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en un instante «inicial» <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math>, integrando la ecuación (1.42) entre <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> y un instante genérico <math display=\"inline\"><mi>t</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>d</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene la velocidad y, integrando de nuevo, la posición:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>+</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Movimiento uniformemente acelerado.</strong> Demuestra que la velocidad y la posición de la partícula son las siguientes cuando la fuerza total que sufre es constante: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>+</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Movimiento uniforme.</strong> Comprueba que, cuando la fuerza total que sufre la partícula es cero (quizá porque es una partícula libre), la velocidad es constante, <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>,</mo></mrow></math>, y la trayectoria es la recta dada por la ecuación siguiente: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>+</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Constantes del movimiento"
    },
    {
     "mota": "testua",
     "html": "Las constantes del movimiento dadas por los principios de conservación suelen ser muy útiles para avanzar en la resolución de las ecuaciones del movimiento. En efecto, como nos ayudan a hacer la integración, también se llaman <strong>primeras integrales</strong>."
    },
    {
     "mota": "azpititulua",
     "testua": "Problema conservativo unidimensional"
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos una partícula que se mueve bajo la acción del campo de fuerzas unidimensional (1.86). Como la energía mecánica se conserva,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "en lugar de la ecuación diferencial de segundo orden, podemos valernos de la ecuación de la energía de primer orden:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El valor <math display=\"inline\"><mi>E</mi></math> de la energía mecánica puede calcularse usando la posición y la velocidad iniciales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora despejaremos la derivada, para obtener la ecuación diferencial de primer orden:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>±</mi><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la ley de conservación (1.105) también puede obtenerse multiplicando la ecuación del movimiento (1.104) por la velocidad <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Separación de variables"
    },
    {
     "mota": "testua",
     "html": "En la ecuación (1.107) no podemos integrar los dos términos respecto del tiempo, pues en el miembro de la derecha la dependencia de <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es desconocida: ¡justo eso es lo que queremos calcular! Afortunadamente, en dicha ecuación el tiempo <math display=\"inline\"><mi>t</mi></math> no aparece explícitamente, solo está implícito en la posición <math display=\"inline\"><mi>x</mi></math> y en la velocidad <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>. Cuando esto ocurre, se puede probar el procedimiento que explicaremos ahora. Para empezar, introducimos explícitamente el tiempo multiplicando la ecuación por el diferencial <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math>; así, recordando que <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>/</mi><mi>d</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>t</mi></mrow></math>, tenemos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>±</mi><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Todavía no podemos integrar directamente el término de la derecha, pero si separamos las variables, es decir, si reunimos en un miembro todos los términos que tienen <math display=\"inline\"><mi>x</mi></math> y dejamos en el otro solo <math display=\"inline\"><mi>t</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mi>d</mi><mi>t</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la integral puede hacerse directamente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mi>t</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que tenemos lo siguiente, si para eliminar la constante de integración <math display=\"inline\"><mi>C</mi></math> se usa la posición inicial (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>≡</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>): <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, en el caso del muelle (1.88), usando la energía potencial elástica, la <strong>amplitud</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>E</mi><mi>/</mi><mi>k</mi></mrow></msqrt></mrow></math> y la constante de integración <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><msub><mi>φ</mi><mn>0</mn></msub><mi>/</mi><mi>ω</mi></mrow></math>, se obtiene la solución del oscilador armónico:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>ω</mi></mfrac><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><mi>x</mi><mi>A</mi></mfrac><mo>=</mo><mi>t</mi><mo>+</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El significado de la amplitud queda aquí patente: es el mayor valor de la deformación (la elongación)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es necesario tener en cuenta la solución <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? Demuestra que la solución del oscilador armónico también puede escribirse de este modo: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> ¿Se puede usar la solución (1.112) con todos los osciladores armónicos, aunque el problema original (1.88) no sea el del muelle? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones diferenciales lineales de coeficientes constantes"
    },
    {
     "mota": "testua",
     "html": "Desde el punto de vista matemático, el oscilador armónico (1.90) es una ecuación diferencial muy sencilla, pues es lineal de coeficientes constantes: la incógnita <math display=\"inline\"><mi>x</mi></math> y sus derivadas aparecen en una combinación lineal de coeficientes constantes. Ecuaciones así pueden resolverse directamente usando soluciones de prueba del tipo <math display=\"inline\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el principio de superposición: la suma de soluciones es solución."
    },
    {
     "mota": "azpititulua",
     "testua": "Oscilador armónico amortiguado"
    },
    {
     "mota": "testua",
     "html": "Probemos en la ecuación (1.91) del oscilador armónico amortiguado la solución <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>α</mi><mn>2</mn></msup><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>α</mi><mi>γ</mi><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Dejando aparte la solución <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> correspondiente al equilibrio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, para que la ecuación anterior se cumpla en todos los instantes <math display=\"inline\"><mi>t</mi></math> los coeficientes del seno y del coseno deben ser cero. Para que el producto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi></mrow></math> sea nulo hay dos posibilidades:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mi>±</mi><msub><mi>ω</mi><mi>γ</mi></msub><mo>≡</mo><mi>±</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mi>−</mi><msub><mi>λ</mi><mo>±</mo></msub><mo>≡</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>γ</mi><mo>±</mo><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como se ve, para que la raíz cuadrada sea real hay que cumplir <math display=\"inline\"><mrow><mi>γ</mi><mo>≤</mo><mi>ω</mi></mrow></math> en el primer caso y <math display=\"inline\"><mrow><mi>γ</mi><mo>≥</mo><mi>ω</mi></mrow></math> en el segundo. Estudiemos uno por uno esos casos, y el caso particular <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>ω</mi></mrow></math>."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mi>ω</mi></mrow></math>. En este caso en la solución <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hay dos partes diferentes. La última es sinusoidal y, por tanto, periódica. Pero, como <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, la amplitud <math display=\"inline\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math> de la oscilación es monótonamente decreciente: las oscilaciones se irán atenuando."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Oscilación amortiguada.",
     "src": "../media/irudiak/1b97be2640430f14.svg",
     "zabalera": 271
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mi>ω</mi></mrow></math>. Hay dos soluciones, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>±</mo></msub><mi>t</mi></mrow></msup></mrow></math>. Ahora, teniendo en cuenta que la constante <math display=\"inline\"><mrow><mi>C</mi><mo>≡</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> es arbitraria, la solución puede escribirse como <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>+</mo></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>−</mo></msub><mi>t</mi></mrow></msup></mrow></math>, como consecuencia del principio de superposición. Como <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>&gt;</mo><mn>0</mn></mrow></math>, los dos términos son monótonamente decrecientes. No hay ningún término periódico y decimos que el oscilador está <strong>sobreamortiguado</strong>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>ω</mi></mrow></math>. Este caso de <strong>amortiguamiento crítico</strong> es el límite entre los dos anteriores. La solución es la siguiente: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo>+</mo><mi>D</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Comprueba que lo que se obtiene haciendo <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> en la solución adecuada de arriba es la solución (1.112) del oscilador armónico. (b) Calcula cuándo pasa el oscilador armónico amortiguado por el punto de equilibrio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. (c) Dibuja alguna solución. (d) Comprueba que la solución del oscilador crítico es (1.119). (e) ¿Hay oscilación en el caso del amortiguamiento crítico?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aproximaciones"
    },
    {
     "mota": "testua",
     "html": "Las aproximaciones son, quizá, la herramienta más importante del físico. Todos los modelos físicos son aproximados, necesariamente. También al resolver las ecuaciones del movimiento las aproximaciones son útiles (y, a menudo, imprescindibles). Aquí estudiaremos la que usaremos con más frecuencia en el texto."
    },
    {
     "mota": "azpititulua",
     "testua": "Oscilaciones pequeñas"
    },
    {
     "mota": "testua",
     "html": "En la ecuación (1.50) del péndulo, si admitimos que el rozamiento es despreciable (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>), podemos usar la ley de conservación de la energía y el método de separación de variables, pero la integral que aparece es elíptica. Afortunadamente, a menudo basta con saber qué ocurre cuando las oscilaciones del péndulo son pequeñas. Entonces, si hacemos la aproximación lineal <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>, la ecuación (1.50)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se convierte en. Pero esta última es la ecuación del oscilador armónico amortiguado. Desde el punto de vista matemático, las ecuaciones (1.91) y (1.120) tienen la misma estructura: el problema del muelle y el del péndulo son dos <strong>problemas equivalentes</strong>, si se consideran las deformaciones y los ángulos pequeños necesarios para que la aproximación lineal sea adecuada."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Métodos cualitativos: diagramas de energía"
    },
    {
     "mota": "testua",
     "html": "A veces, sin resolver las ecuaciones del movimiento se puede obtener información cualitativa interesante sobre sus soluciones. En efecto, incluso cuando las soluciones se pueden calcular, obtener esa información cualitativa puede ser más fácil usando los métodos que estudiaremos aquí."
    },
    {
     "mota": "azpititulua",
     "testua": "Puntos de equilibrio"
    },
    {
     "mota": "testua",
     "html": "Para empezar veremos cómo encontrar y estudiar las soluciones más sencillas, las soluciones constantes que describen el <strong>equilibrio</strong>. Para que una partícula esté en equilibrio deben cumplirse dos condiciones. La primera es dinámica: la fuerza total que sufre la partícula debe ser nula. La segunda es cinemática: en un instante (al principio) la velocidad debe ser nula."
    },
    {
     "mota": "testua",
     "html": "Supongamos que la partícula se mueve en un campo de fuerzas unidimensional. Como vimos en el apartado 1.3.6, el problema es conservativo y este y la fuerza pueden escribirse como <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Si además sufre una fuerza de rozamiento <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> proporcional a la velocidad, la ecuación del movimiento es la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La condición de equilibrio es que la velocidad <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> y la fuerza total <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sean nulas. Está claro que esas dos condiciones son equivalentes a <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. El doble significado de estas condiciones de equilibrio queda patente:"
    },
    {
     "mota": "testua",
     "html": "para estar en equilibrio, la partícula debe estar en reposo (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>) en una posición (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) correspondiente a un punto extremo de la energía potencial"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "irudia",
     "oina": "Diagrama de energía.",
     "src": "../media/irudiak/02fb8e5844e90eda.svg",
     "zabalera": 320
    },
    {
     "mota": "testua",
     "html": "Para encontrar la localización de las posiciones de equilibrio, por tanto, para empezar debemos resolver la ecuación <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Si hacemos la gráfica de la energía potencial, como en la figura 1.14, los puntos de equilibrio se encuentran fácilmente: son las posiciones correspondientes a los máximos, mínimos y puntos de inflexión de la energía potencial."
    },
    {
     "mota": "azpititulua",
     "testua": "Puntos de retroceso"
    },
    {
     "mota": "testua",
     "html": "Como la energía cinética no es negativa, la energía mecánica debe ser siempre mayor (o igual) que la potencial. Por tanto, si la energía mecánica <math display=\"inline\"><mi>E</mi></math> es conocida, los puntos que cumplen la condición <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi>E</mi></mrow></math> están prohibidos. En los puntos de intersección entre las gráficas de la energía mecánica y de la potencial ambas son iguales: la energía cinética y la velocidad son, por tanto, nulas. Esos son los <strong>puntos de retroceso</strong>: en ellos la partícula da marcha atrás, pues su velocidad cambia de signo."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supón ahora que la fuerza de rozamiento <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> no es despreciable. Demuestra que la ecuación de evolución de la energía mecánica es la siguiente: <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>≤</mo><mn>0</mn><mi>.</mi></mrow></math> Deduce que la energía mecánica va disminuyendo hasta llegar a un punto de equilibrio (o a <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math>)."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Energía potencial elástica.",
     "src": "../media/irudiak/8ecf8642f279104c.svg",
     "zabalera": 252
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos de nuevo el muelle (1.88). La gráfica de la energía potencial correspondiente <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> será una parábola. Si el rozamiento es despreciable,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la energía mecánica no cambiará durante el movimiento y su gráfica es un segmento horizontal. Los puntos de retroceso, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, están definidos por las condiciones equivalentes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>A</mi><mo>≡</mo><mi>±</mi><msqrt><mfrac><mrow><mn>2</mn><mi>E</mi></mrow><mi>k</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Naturalmente, aquí recuperamos la amplitud <math display=\"inline\"><mi>A</mi></math>, que es la elongación máxima. Si hay rozamiento, la energía mecánica va disminuyendo y tiende hacia el mínimo, como se muestra en la figura 1.16."
    },
    {
     "mota": "irudia",
     "oina": "Evolución de la energía elástica cuando hay rozamiento.",
     "src": "../media/irudiak/ca934cdb29f30449.svg",
     "zabalera": 252
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Explica el aspecto que tiene la gráfica de <math display=\"inline\"><mi>E</mi></math> de la figura en torno a los puntos de retroceso."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Equilibrio estable e inestable"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta cómo son los intervalos de movimiento vistos en los diagramas de energía, demostraremos que los puntos de equilibrio pueden ser muy diferentes. Los puntos de equilibrio correspondientes a mínimos son <strong>estables</strong>: si una pequeña perturbación rompe el equilibrio, la partícula no se aleja de un pequeño entorno del punto de equilibrio."
    },
    {
     "mota": "irudia",
     "oina": "Sentido de la fuerza en torno a los puntos de equilibrio.",
     "src": "../media/irudiak/239cecc8ef2d7cd1.svg",
     "zabalera": 310
    },
    {
     "mota": "testua",
     "html": "Los máximos y los puntos de inflexión, en cambio, son muy distintos. Las órbitas vecinas no están en un pozo de potencial y no tienen por qué quedarse en torno al punto de equilibrio. Aunque la perturbación inicial sea muy pequeña, si se parte del punto de equilibrio no hay ningún obstáculo para alejarse de él: el equilibrio es <strong>inestable</strong>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para estudiar la estabilidad de los puntos de equilibrio en problemas unidimensionales puede usarse el significado geométrico de la derivada: la fuerza <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es opuesta a la pendiente de la tangente a la energía potencial. Dibuja el sentido de la fuerza que sufre una partícula próxima a un punto de equilibrio en el caso de la figura 1.14."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Oscilaciones pequeñas y oscilador armónico"
    },
    {
     "mota": "testua",
     "html": "Supongamos que la energía potencial tiene un mínimo cuadrático en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para ver cómo es el movimiento muy cerca del punto de equilibrio, desarrollaremos la energía potencial en torno al mínimo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>⋯</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Aproximación parabólica en torno a un mínimo de la energía potencial.",
     "src": "../media/irudiak/9ee332d42a2d21c9.svg",
     "zabalera": 275
    },
    {
     "mota": "testua",
     "html": "El primer término de este desarrollo de Taylor es constante, y podemos conseguir que sea nulo restando su valor a la energía potencial original. El segundo término es nulo, porque en el punto <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> hay un mínimo; y por la misma razón el coeficiente del segundo término es positivo <math display=\"inline\"><mrow><mi>k</mi><mo>≡</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math>. Si las oscilaciones en torno al mínimo son pequeñas, todos los términos siguientes serán despreciables y, por tanto, en muy buena aproximación podemos considerar que la energía potencial es cuadrática:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si llevamos el origen de la abscisa al punto <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>, recuperamos la energía potencial (1.89) y el movimiento de la partícula será el del oscilador armónico, el problema equivalente de allí. Por eso se dice a menudo en física que el movimiento del oscilador armónico es el más importante: <em>el oscilador armónico describe el movimiento en torno al punto de equilibrio estable correspondiente a un mínimo cuadrático de la energía potencial</em>. En torno al mínimo sustituimos la energía potencial por la parábola cuadrática (1.127) y la fuerza por su aproximación lineal (esta es la ley de Hooke):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>−</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Sistemas de partículas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hasta ahora, salvo al enunciar la tercera ley de Newton, hemos estudiado la cinemática y la dinámica de una sola partícula puntual. Empecemos a ver los conceptos y resultados que pueden usarse cuando hay más partículas. En el sistema habrá <math display=\"inline\"><mi>N</mi></math> partículas puntuales y se usará el subíndice <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi></mrow></math> para numerar las partículas. Por ejemplo, el vector de posición de la partícula <math display=\"inline\"><mi>i</mi></math> será <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Magnitudes colectivas"
    },
    {
     "mota": "testua",
     "html": "Las magnitudes cinemáticas correspondientes a todo el sistema se definen sumando las de todas las partículas:"
    },
    {
     "mota": "ezezaguna",
     "izena": "kolektibo-taula"
    },
    {
     "mota": "testua",
     "html": "En el caso de la fuerza total y del momento total de las fuerzas se produce una simplificación a consecuencia de la tercera ley de Newton. Para verlo, clasificaremos las fuerzas que sufre la partícula <math display=\"inline\"><mi>i</mi></math>. Por una parte, las ejercidas por las demás partículas del sistema serán <strong>fuerzas internas</strong>: a la ejercida por la partícula <math display=\"inline\"><mi>j</mi></math> sobre la partícula <math display=\"inline\"><mi>i</mi></math> la hemos llamado <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></math>. Por otra parte, la <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup></math> <strong>fuerza externa</strong> que sufre la partícula <math display=\"inline\"><mi>i</mi></math> es el resultado de todas las acciones que tienen su origen fuera del sistema. Como consecuencia del principio de superposición, la fuerza total aplicada sobre la partícula <math display=\"inline\"><mi>i</mi></math> se escribe así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora, si en la fuerza total que sufre el sistema agrupamos <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> de cada pareja acción-reacción y tenemos en cuenta que son opuestas entre sí (<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munder><mo>∑</mo><mrow><mn>1</mn><mo>≤</mo><mi>i</mi><mo>&lt;</mo><mi>j</mi><mo>≤</mo><mi>N</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene. Por tanto, <em>la fuerza total que sufre el sistema es igual a la fuerza externa total</em>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "pues la suma de las fuerzas internas es cero. Algo parecido ocurre con los momentos de las fuerzas internas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><munder><mo>∑</mo><mrow><mn>1</mn><mo>≤</mo><mi>i</mi><mo>&lt;</mo><mi>j</mi><mo>≤</mo><mi>N</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí hemos usado lo siguiente: como consecuencia del principio de acción y reacción, la fuerza <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> que la partícula <math display=\"inline\"><mi>i</mi></math> ejerce sobre <math display=\"inline\"><mi>j</mi></math> es paralela a la recta que une las dos partículas. En consecuencia,"
    },
    {
     "mota": "testua",
     "html": "el momento total de las fuerzas que sufre el sistema es igual al momento total de las fuerzas externas"
    },
    {
     "mota": "testua",
     "html": ":"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con la potencia (y con el trabajo), en cambio, no ocurre nada semejante. La potencia total de las fuerzas internas no siempre es nula. A menudo las fuerzas internas realizan trabajo y, por tanto, la potencia y el trabajo totales tendrán, en general, dos partes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒫</mi><mo>=</mo><msup><mi mathvariant=\"script\">𝒫</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi mathvariant=\"script\">𝒫</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de evolución colectivas"
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones de evolución colectivas del sistema se obtienen directamente teniendo en cuenta la definición de las magnitudes colectivas y las simplificaciones que aporta la tercera ley de Newton:"
    },
    {
     "mota": "ezezaguna",
     "izena": "kolektibo-taula"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Principios de conservación"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta las ecuaciones de evolución que hemos obtenido, está claro que el momento lineal (angular) total del sistema será una constante del movimiento si y solo si la suma de las fuerzas externas (de los momentos de las fuerzas externas) es nula. Por otra parte, si el sistema está <strong>aislado</strong>, es decir, si no sufre ninguna acción externa, está claro que la fuerza externa total y el momento total de las fuerzas externas son nulos y, en consecuencia, el momento lineal y el angular se conservan. Estos son, pues, los <strong>principios de conservación del momento lineal y del angular</strong>: <em>el momento lineal y el angular totales de un sistema aislado de partículas son constantes del movimiento</em>."
    },
    {
     "mota": "testua",
     "html": "Ten en cuenta que <em>en los sistemas aislados la energía cinética no es siempre una constante del movimiento</em>, aunque la potencia de las fuerzas externas sea nula. Si las fuerzas internas realizan trabajo, la energía cinética será variable."
    },
    {
     "mota": "testua",
     "html": "Hay otro principio de conservación que se menciona explícitamente pocas veces: el de la masa total. Como veremos en el tema 3, no se cumple siempre en la física relativista, pero sí en la mecánica newtoniana: <em>la masa total de un sistema aislado no cambia con el tiempo</em>, aunque cambie el número de partículas del sistema o su masa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Choques"
    },
    {
     "mota": "testua",
     "html": "La colisión es un proceso muy general, de gran importancia en física. Mientras las interacciones no sean despreciables, el momento lineal, el angular y la energía cinética de las partículas de un sistema aislado cambian, a consecuencia de las fuerzas internas que las partículas ejercen entre sí. Pero como el sistema es aislado, el momento lineal y el angular se conservan y no hay trabajo de fuerzas externas. Por tanto, si distinguimos con los subíndices 1 y 2, respectivamente, los valores que tienen las magnitudes del sistema antes y después de que empiece la interacción entre las partículas, estas son las leyes colectivas que describen la colisión:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑷</mi><mn>2</mn></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑷</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mn>2</mn></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><mi>Q</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde el <strong>factor</strong> <math display=\"inline\"><mi>Q</mi></math> es el trabajo realizado por las fuerzas internas durante todo el proceso:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>≡</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><msup><mi mathvariant=\"script\">𝒫</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Según cómo sea el trabajo de las fuerzas internas, las colisiones se clasifican así:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Colisión endoenergética.</strong> El trabajo de las fuerzas internas es negativo (<math display=\"inline\"><mrow><mi>Q</mi><mo>&lt;</mo><mn>0</mn></mrow></math>): se pierde energía cinética, <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Colisión exoenergética.</strong> El trabajo de las fuerzas internas es positivo (<math display=\"inline\"><mrow><mi>Q</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) y se utiliza otro tipo de energía para aumentar la energía cinética: <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Colisión elástica.</strong> Las fuerzas internas no realizan trabajo (<math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>0</mn></mrow></math>) y, en consecuencia, la energía cinética se conserva: <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>."
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, si las dos partículas quedan unidas al chocar, la colisión no puede ser elástica."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Centro de masas"
    },
    {
     "mota": "testua",
     "html": "El centro de masas de un sistema de partículas es el punto geométrico definido por el siguiente vector de posición:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mfrac><mi mathvariant=\"bold-italic\">𝑮</mi><mi>M</mi></mfrac><mo>=</mo><mfrac><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta las definiciones y las ecuaciones de evolución de los apartados 1.5.1 y 1.5.2, de la ecuación anterior obtenemos lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑮</mi><mo>=</mo><mi>M</mi><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑷</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir, <em>el centro de masas se mueve como lo haría una partícula ficticia, con la masa total del sistema, que sufriera la fuerza externa total</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es cierto que la derivada del momento angular de esa partícula ficticia equivalente es igual al momento total de las fuerzas externas que sufre el sistema? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En este tema, implícitamente, hemos usado el <strong>sistema del laboratorio</strong> para hacer todos los cálculos. Por definición, el <strong>sistema del centro de masas</strong> es el que cumple las dos condiciones siguientes:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "El origen está siempre en el centro de masas."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Los ejes no giran: su orientación en el sistema del laboratorio (y, por tanto, en todos los sistemas inerciales) es constante."
     ]
    },
    {
     "mota": "testua",
     "html": "Como consecuencia de la ecuación del movimiento del centro de masas, está claro que casi siempre el centro de masas está acelerado y, por tanto, el sistema del centro de masas no es inercial."
    },
    {
     "mota": "irudia",
     "oina": "Sistema del centro de masas.",
     "src": "../media/irudiak/9616981cef2be732.svg",
     "zabalera": 265
    },
    {
     "mota": "testua",
     "html": "Como la orientación relativa de los ejes no cambia, admitiremos que las transformaciones entre el sistema del laboratorio y el del centro de masas son las siguientes, pues la práctica ha demostrado bien que así ocurre si las velocidades no son muy grandes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msup><mi>t</mi><mo>*</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi><mo>*</mo></msubsup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mo>*</mo></msubsup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi><mo>*</mo></msubsup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>m</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi>m</mi><mi>i</mi><mo>*</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando estas transformaciones y la definición del centro de masas, vemos que el momento de masa respecto del centro de masas es nulo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑮</mi><mo>*</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi>m</mi><mi>i</mi><mo>*</mo></msubsup><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑮</mi><mo>−</mo><mi>M</mi><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta propiedad no es sorprendente, pues el centro de masas está en el origen de su sistema. Pero el resultado que se obtiene derivando directamente esta propiedad —o usando (1.152)—"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es más interesante: <em>en el sistema del centro de masas el momento lineal total es nulo</em>. En efecto, esta propiedad puede tomarse como definición del sistema del centro de masas."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que <em>el momento angular (la energía cinética) medido en el sistema del laboratorio se obtiene sumando el momento angular (la energía cinética) <strong>intrínseco</strong> medido en el sistema del centro de masas y el de la partícula ficticia, de masa igual a la masa total del sistema, que se mueve con el centro de masas</em>. En consecuencia, tenemos: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>*</mo></msup><mo>+</mo><mi>M</mi><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>*</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑷</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msup><mi>T</mi><mo>*</mo></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><msup><mi>T</mi><mo>*</mo></msup><mo>+</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>M</mi></mrow></mfrac><mi>.</mi></mrow></math> En algunos libros de texto al último resultado se le llama <strong>teorema de König</strong>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema de los dos cuerpos"
    },
    {
     "mota": "testua",
     "html": "El sistema de partículas más sencillo es el sistema aislado formado por dos partículas puntuales. El centro de masas, por tanto, se mueve con velocidad constante y en línea recta."
    },
    {
     "mota": "irudia",
     "oina": "Geometría del problema de los dos cuerpos.",
     "src": "../media/irudiak/b6f40055c25b1086.svg",
     "zabalera": 306
    },
    {
     "mota": "testua",
     "html": "Como el sistema del centro de masas es inercial, es el más adecuado para estudiar el movimiento, pero en este caso particular hay otra posibilidad, pues los vectores de posición <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi><mo>*</mo></msubsup></math> medidos en el sistema del centro de masas y el vector que mide la posición relativa entre las partículas"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>*</mo></msubsup><mo>−</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>*</mo></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(o <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>*</mo></msubsup><mo>−</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>*</mo></msubsup></mrow></math>) son proporcionales entre sí, es decir, paralelos."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la relación entre los vectores de posición medidos en el centro de masas y la posición relativa es esta: <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mi>−</mi><mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, el problema del movimiento de cada partícula respecto del centro de masas y el del movimiento relativo son (casi) equivalentes, y este último se plantea fácilmente, en cualquier sistema inercial, como veremos a continuación."
    },
    {
     "mota": "testua",
     "html": "Como consecuencia de la tercera ley de Newton, si la fuerza que la partícula 1 ejerce sobre la 2 es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub></mrow></math>, la que ella sufre es <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝑭</mi></mrow></math> y, por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mo>−</mo><mfrac><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msub><mi>m</mi><mn>2</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si definimos la <strong>masa reducida</strong> <math display=\"inline\"><mi>m</mi></math> del sistema como"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mo>≡</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mi>m</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>m</mi><mn>2</mn></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la ecuación del movimiento relativo es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": ": <em>el problema del movimiento relativo y el de una partícula de masa <math display=\"inline\"><mi>m</mi></math> que se mueve en un sistema de referencia inercial son equivalentes</em>. El movimiento relativo de dos cuerpos se reduce al problema de la partícula equivalente adecuada, que tiene la masa reducida del sistema."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Colisiones elásticas en el problema de los dos cuerpos"
    },
    {
     "mota": "testua",
     "html": "En este apartado consideraremos un caso particular interesante del problema de los dos cuerpos, que se da en muchos experimentos: la partícula 1 se lanza con momento lineal <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub></math> contra la 2, que está en reposo. La primera partícula es el <strong>proyectil</strong> y la segunda el <strong>blanco</strong>. Salvo en la colisión, las dos partículas son libres y sus momentos lineales constantes. Tras la colisión los momentos lineales de las partículas son <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn></msub></math>, respectivamente. El ángulo <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> que mide la desviación del proyectil se llama <strong>ángulo de dispersión</strong> y el <math display=\"inline\"><mi>α</mi></math> que da la dirección del blanco (véase la figura 1.21) <strong>ángulo de retroceso</strong>."
    },
    {
     "mota": "azpititulua",
     "testua": "Sistema del centro de masas"
    },
    {
     "mota": "testua",
     "html": "Para estudiar la colisión nos valdremos del sistema del centro de masas, pues en él todo es mucho más sencillo. Para empezar, como el momento lineal total es nulo, <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><mo>*</mo></msubsup><mo>+</mo><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn><mo>*</mo></msubsup><mo>+</mo><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mn>0</mn></mrow></math>, si antes de la colisión el de la primera partícula es <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup></mrow></math> el de la otra será <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mi>−</mi><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup></mrow></math>; de la misma manera, después de la colisión los momentos son opuestos y el principio de conservación del momento lineal se escribe así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Proyectil y blanco antes (a la izquierda) y después (a la derecha) de la colisión.",
     "src": "../media/irudiak/40ca10f3fda845e1.svg",
     "zabalera": 288
    },
    {
     "mota": "testua",
     "html": "Además, como la colisión es elástica, la energía cinética se conservará:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><msup><mo>*</mo><mn>2</mn></msup></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mo>+</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn><msup><mo>*</mo><mn>2</mn></msup></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><msup><mo>*</mo><mn>2</mn></msup></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn><msup><mo>*</mo><mn>2</mn></msup></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mo>+</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn><msup><mo>*</mo><mn>2</mn></msup></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝒒</mi><msup><mo>*</mo><mn>2</mn></msup></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>m</mi></math> es la masa reducida del sistema. Aquí vemos que la conservación de la energía cinética equivale a que los módulos de los vectores <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup></math> y <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup></math> sean iguales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>p</mi><mo>*</mo></msup><mo>=</mo><msup><mi>q</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Colisión elástica en el sistema del centro de masas.",
     "src": "../media/irudiak/5c023b74b894e8a0.svg",
     "zabalera": 266
    },
    {
     "mota": "testua",
     "html": "Los principios de conservación (1.169) y (1.171) nos dicen que en el sistema del centro de masas la colisión es muy sencilla: los momentos de las dos partículas son opuestos antes y después de la colisión, sus módulos no cambian, solo realizan un giro. Hay que subrayar que usando únicamente los principios de conservación no se puede encontrar cuál ha sido ese giro y, sin más información, el ángulo de dispersión puede ser cualquiera: <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mo>≤</mo><mi>π</mi></mrow></math>. Pero está claro que, conociendo el ángulo de dispersión, el ángulo de retroceso se obtiene directamente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>α</mi><mo>*</mo></msup><mo>=</mo><mi>π</mi><mo>−</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Sistema del laboratorio"
    },
    {
     "mota": "testua",
     "html": "En el sistema del laboratorio, en cambio, hay más posibilidades y aquí veremos cómo se expresan en función de los datos y del parámetro <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math>. Para empezar, usaremos que, como consecuencia de (1.152), la velocidad del centro de masas"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, para obtener, a partir de la transformación (1.156) entre el laboratorio y el centro de masas, la siguiente relación entre los momentos lineales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mfrac><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mfrac><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub></math> de la primera ecuación, lo que se obtiene es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y sustituyendo en las dos ecuaciones anteriores nos quedan las expresiones siguientes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>+</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup><mo>+</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Transformaciones entre el laboratorio y el centro de masas.",
     "src": "../media/irudiak/d6e006a9c75d2199.svg",
     "zabalera": 340
    },
    {
     "mota": "irudia",
     "oina": "Estudio realizado en el sistema del laboratorio.",
     "src": "../media/irudiak/c781034ed74e227c.svg",
     "zabalera": 221
    },
    {
     "mota": "testua",
     "html": "Aunque todos los demás cálculos de este apartado pueden hacerse de forma puramente analítica, su representación gráfica será útil para ver mejor las relaciones entre las magnitudes y para facilitar los cálculos. Para empezar, en la figura 1.23 vemos las ecuaciones de transformación (1.176)–(1.177). Luego, en la figura 1.24 se muestran las definiciones de los ángulos de dispersión y de retroceso y la ley de conservación del momento lineal medido en el laboratorio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Gráfica completa de la colisión elástica.",
     "src": "../media/irudiak/764bd854d9592d28.svg",
     "zabalera": 212
    },
    {
     "mota": "testua",
     "html": "Ahora, reuniendo en una las dos figuras anteriores, se obtiene la 1.25. Además, en ella se ha dibujado también el ángulo de dispersión <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> medido en el sistema del centro de masas."
    },
    {
     "mota": "testua",
     "html": "Usando la relación <math display=\"inline\"><mrow><msup><mi>p</mi><mo>*</mo></msup><mo>=</mo><msup><mi>q</mi><mo>*</mo></msup></mrow></math> que expresa la conservación de la energía cinética, vemos que el triángulo de la derecha es isósceles y, por tanto, las características del blanco medidas en el laboratorio tras la colisión se expresan así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mi>π</mi><mo>−</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mo>+</mo><mn>2</mn><mi>α</mi><mo>=</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msup><mi>p</mi><mo>*</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como dijimos antes, en el sistema del centro de masas la energía cinética de cada partícula se conserva, pero en el laboratorio las cosas son muy distintas: aunque al principio"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>1</mn><mn>2</mn></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>p</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>m</mi><mn>2</mn><mn>2</mn></msubsup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la energía cinética total sea la del proyectil, en la colisión el blanco empieza a moverse y absorbe energía cinética:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><msubsup><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn><mn>2</mn></msubsup><mrow><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>p</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup></mrow><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La proporción de energía cinética absorbida por el blanco,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>T</mi><mn>2</mn></msub><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es máxima cuando <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mo>=</mo><mi>π</mi></mrow></math>, es decir, en la colisión frontal. La transferencia máxima de energía cinética que se produce en colisiones tan sencillas,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≡</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>T</mi><mn>2</mn></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "depende del cociente de las masas de las dos partículas, como se muestra en la figura 1.26."
    },
    {
     "mota": "irudia",
     "oina": "Transferencia máxima de energía cinética.",
     "src": "../media/irudiak/595a0f121ef92bcb.svg",
     "zabalera": 280
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si el proyectil es mucho más ligero que el blanco, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≪</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, la variación del momento lineal de este último será pequeña. La energía cinética del proyectil será parecida, pero con velocidad opuesta, aproximadamente."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si el proyectil es mucho más pesado que el blanco, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, la variación de su momento lineal será pequeña: su energía cinética y su velocidad apenas cambiarán."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Cuando las masas del proyectil y del blanco son iguales, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, en la colisión frontal la transferencia de energía cinética será máxima: el proyectil quedará parado y el blanco se llevará toda la energía cinética."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Relación entre los ángulos de dispersión.",
     "src": "../media/irudiak/bc344814997904ae.svg",
     "zabalera": 163
    },
    {
     "mota": "testua",
     "html": "Para encontrar la relación entre los ángulos de dispersión medidos en el laboratorio y en el centro de masas, podemos valernos de la figura 1.27 y del resultado (1.171):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi>p</mi><mo>*</mo></msup><mo>+</mo><mi>d</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mo>*</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi>p</mi><mo>*</mo></msup><mo>+</mo><msup><mi>q</mi><mo>*</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aunque para entender las consecuencias de este resultado se puede usar la trigonometría, el estudio se hace fácilmente de forma gráfica, valiéndonos de la figura 1.28, como se ve a continuación."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si el proyectil es más ligero que el blanco, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, es el primero el que más se desvía. En consecuencia, a medida que <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> va de 0 a <math display=\"inline\"><mi>π</mi></math>, lo mismo hace el ángulo de dispersión medido en el laboratorio, que puede tomar todos los valores: <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi mathvariant=\"normal\">Φ</mi><mo>≤</mo><mi>π</mi></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Cuando las masas del proyectil y del blanco son iguales, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, la relación entre los ángulos de dispersión medidos en los dos sistemas es sencilla: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>/</mi><mn>2</mn><mi>.</mi></mrow></math> Por tanto, mientras el ángulo <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> va de 0 a <math display=\"inline\"><mi>π</mi></math>, <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> irá de 0 a <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>. Además, como consecuencia del resultado (1.179), tras la colisión las dos partículas se mueven en direcciones perpendiculares: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>+</mo><mi>α</mi><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
     ]
    },
    {
     "mota": "irudia",
     "oina": "Ángulo de dispersión en el laboratorio y en el sistema del centro de masas.",
     "src": "../media/irudiak/1721d0dfd3de5cd1.svg",
     "zabalera": 159
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si el proyectil es más pesado que el blanco, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, al aumentar <math display=\"inline\"><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></math> el ángulo <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> también va aumentando hasta que el vector <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub></math> es tangente a la circunferencia de radio <math display=\"inline\"><msup><mi>q</mi><mo>*</mo></msup></math>; luego va disminuyendo, hasta que vuelve a ser <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mn>0</mn></mrow></math> cuando <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mo>=</mo><mi>π</mi></mrow></math>. Cuando el ángulo <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> es máximo <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>*</mo></msup></mrow></math>, como el triángulo formado por los vectores <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mo>*</mo></msup></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub></math> es rectángulo, tenemos: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><msup><mi>q</mi><mo>*</mo></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msup><mi>p</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> Naturalmente, cuanto más pesado es el proyectil, menor es su desviación."
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obtén directamente de la figura 1.28 el resultado (1.186)."
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Problemas resueltos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Velocidad límite"
    },
    {
     "mota": "testua",
     "html": "<em>Una partícula se mueve en dirección vertical. Además de la gravedad, sufre una fuerza de rozamiento proporcional a la velocidad:\n<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Demuestra que al aumentar el tiempo la velocidad\ntiende a un valor límite. ¿Cuál es ese valor límite?</em>"
    },
    {
     "mota": "testua",
     "html": "Tras elegir el eje vertical <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> <em>hacia abajo</em>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><mi>m</mi><mi>v</mi><mo>+</mo><mi>m</mi><mi>g</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "si separamos las variables en la ecuación del movimiento (recuerda el apartado 1.4.3),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>g</mi><mo>−</mo><mi>γ</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mi>d</mi><mi>t</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "mediante una integración obtenemos lo siguiente (teniendo en cuenta que la <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> de la fuerza de rozamiento):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>v</mi><mn>0</mn></msub><mi>v</mi></msubsup><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>g</mi><mo>−</mo><mi>γ</mi><mi>v</mi></mrow></mfrac><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>t</mi></msubsup><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>0</mn></msub><mo>≡</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mi>γ</mi></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>g</mi><mo>−</mo><mi>γ</mi><mi>v</mi></mrow><mrow><mi>g</mi><mo>−</mo><mi>γ</mi><msub><mi>v</mi><mn>0</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>t</mi><mo>,</mo></mrow></math> <img class=\"formula formula-d\" src=\"../media/formulak/50a898858de79c5f.svg\" alt=\"v = g/gamma + (v_0 - g/gamma) e^(-gamma t) quad #math.attach(sym.arrow.r.long, t: $t -&gt; oo$) quad g/gamma.\" style=\"width:17.455em;height:2.980em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Como la velocidad límite es constante, también se puede obtener directamente haciendo <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> en la ecuación del movimiento; pero para demostrar que todas las soluciones tienden a ella hay que integrar la ecuación del movimiento."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Impulso"
    },
    {
     "mota": "testua",
     "html": "<em>Las dos masas de la figura están en reposo sobre una mesa lisa,\nunidas por una varilla ligera. Si la varilla sufre un impulso horizontal <math display=\"inline\"><mi>I</mi></math>\ncomo se muestra, ¿cómo es el movimiento del sistema?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/bb05ff7a376cda35.svg",
     "zabalera": 219
    },
    {
     "mota": "testua",
     "html": "La distancia <math display=\"inline\"><mi>X</mi></math> entre el centro de masas y <math display=\"inline\"><mi>M</mi></math> se calcula así usando (1.159):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><mi>X</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>−</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>X</mi><mo>=</mo><mfrac><mi>m</mi><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac><mi>L</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Supongamos que tras la colisión la velocidad del centro de masas es <math display=\"inline\"><mi>V</mi></math> (estará, naturalmente, en la dirección del impulso <math display=\"inline\"><mi>I</mi></math>) y la velocidad angular de la varilla <math display=\"inline\"><mi>ω</mi></math>. El nuevo momento lineal será igual a la variación del momento lineal y al impulso (véase el apartado 1.3.1):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>V</mi><mo>=</mo><mi>I</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mi>I</mi><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Asimismo, como consecuencia del ejercicio 1.13, el impulso angular <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> respecto del centro de masas es igual a la variación del momento angular y, por tanto, al nuevo momento angular:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>M</mi><msup><mi>X</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>X</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>M</mi></mrow><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac><msup><mi>L</mi><mn>2</mn></msup><mi>ω</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>L</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><mi>M</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Equilibrio relativo y bifurcación"
    },
    {
     "mota": "testua",
     "html": "<em>La circunferencia de la figura gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno\nal diámetro vertical y una partícula puntual de masa <math display=\"inline\"><mi>m</mi></math> puede moverse a lo largo de la\ncircunferencia sin rozamiento. ¿Dónde puede estar la partícula en\nreposo relativo respecto de la circunferencia? ¿Cuándo es estable ese equilibrio relativo?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/d013b2ecadf85ed8.svg",
     "zabalera": 114
    },
    {
     "mota": "testua",
     "html": "Usando las coordenadas polares esféricas de la figura, la componente tangente de la aceleración se obtiene haciendo <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math> y <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> en el resultado (B.8), y la ecuación del movimiento tangente es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "o bien"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": ". Esta ecuación del movimiento"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se escribe como, de modo que, olvidando las dimensiones del ángulo <math display=\"inline\"><mi>θ</mi></math>, podemos estudiar el equilibrio del problema equivalente de la partícula que se mueve en una recta en el potencial"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "irudia",
     "oina": "Gráfica de la función <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> al cambiar la velocidad angular.",
     "src": "../media/irudiak/b11ac1bdfac6c5ae.svg",
     "zabalera": 259
    },
    {
     "mota": "testua",
     "html": "Los puntos de equilibrio ocurren en los puntos extremos de <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, es decir, cuando la fuerza tangente es nula en el sistema no inercial que gira con el alambre: cuando se cumple la condición <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir, en los puntos inferior <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> y superior <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>, o cuando tenemos <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>g</mi><mi>/</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>; pero esto último solo puede ocurrir en algunos casos, pues el valor absoluto del coseno nunca es mayor que 1."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la expresión demuestra que en el punto superior hay un máximo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y el equilibrio es inestable; en el punto inferior"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hay un mínimo (máximo) si se cumple <math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>) con la siguiente definición:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>g</mi><mi>R</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, si la velocidad angular es pequeña, el punto inferior es estable, como cabía esperar; pero, al aumentar <math display=\"inline\"><mi>ω</mi></math>, se vuelve inestable en el valor <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>. Además, en el mismo valor surgen los"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>θ</mi><mo>±</mo></msub><mo>=</mo><mi>±</mi><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><mi>g</mi><mrow><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>±</mi><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "puntos de equilibrio simétricos estables:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>±</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>4</mn></msup><mo>−</mo><mfrac><msup><mi>g</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>4</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>4</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como aquí, cuando cambia el número o la estabilidad de los puntos de equilibrio se dice que se ha producido una <strong>bifurcación</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Colisión elástica"
    },
    {
     "mota": "testua",
     "html": "<em>¿Por qué admitimos que en una colisión elástica perpendicular contra una pared o el suelo la velocidad de la partícula se invierte sin cambiar su módulo?</em>"
    },
    {
     "mota": "testua",
     "html": "Podríamos decir que, como la pared no se mueve, su energía cinética es siempre nula y, en consecuencia, la energía cinética total que se conserva es la de la partícula; pero hay que tener cuidado: la velocidad de la pared es nula porque hemos tomado su masa como infinita y, entonces, la energía cinética es el producto <math display=\"inline\"><mrow><mn>0</mn><mo>×</mo><mi>∞</mi></mrow></math> no definido. Para estudiar mejor el problema, supongamos que antes de la colisión la velocidad de la partícula de masa <math display=\"inline\"><mi>m</mi></math> es <math display=\"inline\"><mi>u</mi></math> y después <math display=\"inline\"><mi>v</mi></math>. Si la masa de la pared es <math display=\"inline\"><mi>M</mi></math> y la velocidad que tiene tras la colisión <math display=\"inline\"><mi>V</mi></math>, estos son los principios de conservación del momento lineal y de la energía cinética cuando la colisión es elástica (recuerda el apartado 1.5.4):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>u</mi><mo>=</mo><mi>m</mi><mi>v</mi><mo>+</mo><mi>M</mi><mi>V</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>V</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De aquí se calculan fácilmente las velocidades en el caso general y en el límite <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> que nos interesa:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/c866f27d80b392fc.svg\" alt=\"v = (m - M)/(m + M) u quad #math.attach(sym.arrow.r.long, t: $m slash M -&gt; 0$) quad -u,\" style=\"width:14.543em;height:2.739em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/dcc6ca611825ee98.svg\" alt=\"V = (2m)/(m + M) u quad #math.attach(sym.arrow.r.long, t: $m slash M -&gt; 0$) quad 0.\" style=\"width:13.907em;height:2.739em\" loading=\"lazy\">"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluciones triangulares"
    },
    {
     "mota": "testua",
     "html": "<em>Supongamos que en un sistema de tres partículas las fuerzas entre las partículas, además de centrales y atractivas, son proporcionales a las masas:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>m</mi><mi>i</mi></msub><msub><mi>m</mi><mi>j</mi></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(El caso más interesante es el de la atracción gravitatoria: <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>G</mi><mi>/</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math>.)\nDemuestra que las tres partículas pueden estar en equilibrio relativo\nen los vértices de un triángulo equilátero, si el triángulo gira con una velocidad\nangular constante adecuada, perpendicular a su plano, en torno al centro de masas\ndel sistema de partículas. ¿Cuál es el valor de la velocidad angular?</em>"
    },
    {
     "mota": "testua",
     "html": "Elijamos el sistema del centro de masas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como en ese sistema el movimiento de cada partícula es circular y uniforme, la aceleración es centrípeta: <math display=\"inline\"><mrow><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow></math>. Si la longitud de los lados del triángulo es <math display=\"inline\"><mi>a</mi></math>, tenemos <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi></mrow></math> y la ecuación del movimiento es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><msub><mi>m</mi><mi>i</mi></msub><msup><mi>ω</mi><mn>2</mn></msup><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>i</mi></msub><msub><mi>m</mi><mi>j</mi></msub><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De aquí,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene, y como en el sistema del centro de masas el momento de masa es nulo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo>=</mo><mi>−</mi><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "tenemos y, en consecuencia, si la masa total es <math display=\"inline\"><mrow><mi>M</mi><mo>≡</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></msubsup><msub><mi>m</mi><mi>i</mi></msub></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munder><mo>∑</mo><mrow><mi>j</mi><mo>≠</mo><mi>i</mi></mrow></munder><msub><mi>m</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>+</mo><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>=</mo><mi>M</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, las ecuaciones del movimiento se cumplen si la velocidad angular es <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math>. Hay que subrayar que una solución así no siempre será estable. Estudiaremos de nuevo una solución triangular interesante en el problema 2.7.4."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Cinemática</strong>"
    },
    {
     "mota": "problema",
     "izena": "Triedro intrínseco",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que el triedro intrínseco también puede calcularse así: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><mfrac><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math> Comenta el resultado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Radio de curvatura",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que el radio de curvatura de la trayectoria de una partícula puede calcularse así: <math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Movimiento plano",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, en el caso del movimiento plano, si se usan coordenadas polares, estos son los vectores unitarios del triedro intrínseco: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>t</mi></msub><mo>=</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow><msqrt><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>n</mi></msub><mo>=</mo><mi>ε</mi><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow><msqrt><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>b</mi></msub><mo>=</mo><mi>ε</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> es el signo de la siguiente magnitud: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Esta orientación relativa entre velocidad y aceleración mide hacia dónde se curva la trayectoria.)"
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
       "html": "La trayectoria de un electrón que se mueve en un campo magnético constante y uniforme <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>B</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> es la siguiente hélice: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>b</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math> y <math display=\"inline\"><mi>ω</mi></math> son constantes.) Calcula las componentes de la aceleración, el triedro intrínseco y el radio de curvatura."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un palo está en reposo apoyado contra una pared (y sobre el suelo, naturalmente). Si empieza a deslizar en un plano vertical, ¿cómo serán las trayectorias de sus puntos, hasta que se rompa el contacto entre la pared vertical y el palo?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/cda55b1bb6231ef3.svg",
       "zabalera": 131
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Véase la simulación <code>http://tp.lc.ehu.eus/jma/mekanika/analitikoa/hagatxoa.html</code>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Paradoja de Zenón",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«Aquiles corre dos veces más deprisa que la tortuga. Si al principio la distancia entre ellos era de un estadio, cuando Aquiles haya recorrido ese estadio la tortuga habrá recorrido otro medio estadio. Cuando Aquiles recorre esta última distancia, la tortuga recorre un cuarto de estadio. Como este proceso se repite una y otra vez, la distancia entre los corredores, aunque cada vez es más pequeña, no llegará a ser nunca nula. Por tanto, Aquiles no alcanzará a la tortuga». ¿Qué piensas tú de esto?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Curvas de persecución",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tres hormigas se mueven sobre una mesa. Al principio estaban en los vértices de un triángulo equilátero de lado <math display=\"inline\"><mi>L</mi></math> y la velocidad escalar de las tres es <math display=\"inline\"><mi>v</mi></math>. Cambian muy deprisa de dirección de movimiento pero no son muy rápidas. Como la primera hormiga quiere alcanzar a la segunda, se mueve siempre directamente hacia el punto donde está esta en cada instante. Lo mismo hace la segunda con la tercera y esta última con la primera. Usa la simetría y las coordenadas polares planas para calcular la evolución de las coordenadas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de una hormiga. Demuestra que al final se alcanzarán unas a otras. Calcula el tiempo que necesitan para ello. Elimina el tiempo de las ecuaciones de evolución de la distancia y del ángulo polar para obtener la ecuación de la trayectoria. ¿Cómo es la trayectoria? ¿Depende de <math display=\"inline\"><mi>v</mi></math>? ¿Qué ocurre en el caso de <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>3</mn></mrow></math> hormigas, si parten de los vértices de un polígono regular?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Algunos peces migratorios van a desovar a los ríos. Cuando están parados queman la energía <math display=\"inline\"><mi>α</mi></math> por unidad de tiempo y si se mueven con velocidad <math display=\"inline\"><mi>v</mi></math> el gasto adicional por unidad de tiempo es <math display=\"inline\"><mrow><mi>β</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>. Si no comen en el río, ¿cuál es la velocidad más adecuada para llegar a la zona de desove con la mínima pérdida de energía?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un automóvil se aleja con velocidad constante de un muro largo en la dirección que se muestra en la figura. Si cuando está a una distancia <math display=\"inline\"><mi>d</mi></math> del muro el conductor toca el claxon, ¿qué distancia recorrerá hasta oír el eco?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/c26cc7fd2f523e7a.svg",
       "zabalera": 144
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos barras se mueven sobre una mesa horizontal, con la misma velocidad escalar constante <math display=\"inline\"><mi>v</mi></math>, cada una perpendicularmente a su dirección, como se muestra en la figura. Si el menor ángulo entre las barras es <math display=\"inline\"><mrow><mn>2</mn><mi>α</mi></mrow></math>, ¿cuál es la velocidad del punto de intersección <math display=\"inline\"><mi>P</mi></math>? ¿Qué ocurre en los límites <math display=\"inline\"><mrow><mn>2</mn><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/aa889de1752c930f.svg",
       "zabalera": 196
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tres personas tienen una sola bicicleta, para ir a una distancia <math display=\"inline\"><mi>L</mi></math>. Mientras dos personas van en bicicleta, la tercera empieza a andar. En un momento dado, una persona se baja de la bicicleta, para seguir a pie, y la otra va a buscar a la tercera en bicicleta para traerla. Si la velocidad de los peatones es <math display=\"inline\"><msub><mi>v</mi><mi>o</mi></msub></math> y la de la bicicleta <math display=\"inline\"><msub><mi>v</mi><mi>b</mi></msub></math>, ¿cómo hay que elegir ese momento para que las tres lleguen lo antes posible a su destino? ¿Cuál es el tiempo mínimo necesario para hacer así el viaje?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos placas planas iguales se articulan en el punto medio <math display=\"inline\"><mi>O</mi></math>, como se muestra en la figura. Si empiezan a cerrarse, como unas tijeras, con velocidad angular constante <math display=\"inline\"><mrow><mi>ω</mi><mo>≡</mo><mi>−</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, ¿cuál es la velocidad <math display=\"inline\"><msub><mi>v</mi><mi>E</mi></msub></math> del punto geométrico de intersección <math display=\"inline\"><mi>E</mi></math>? ¿Y, en cada instante, la velocidad <math display=\"inline\"><msub><mi>v</mi><mi>m</mi></msub></math> del material que está allí? Comenta el resultado."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/6956d1002bb65de9.svg",
       "zabalera": 215
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "El primer intento de Galileo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Creyendo que las leyes de la naturaleza son lo más sencillas posible, Galileo pensó al principio que la velocidad de una partícula era proporcional a la distancia recorrida desde que partió. ¡Al final se dio cuenta de que según una ley así el movimiento es imposible! Plantea y resuelve el problema en una dimensión para obtener la misma conclusión."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Efecto Doppler",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Desde una fuente en reposo se envían <math display=\"inline\"><mrow><mi>d</mi><mi>N</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> partículas por unidad de tiempo en una dirección. Las partículas se mueven con velocidad <math display=\"inline\"><mi>v</mi></math>. ¿Cuántas se detectan, por unidad de tiempo, en un detector que se mueve en la misma dirección con velocidad <math display=\"inline\"><mrow><mi>u</mi><mo>&lt;</mo><mi>v</mi></mrow></math>? ¿Qué ocurre si el detector, en lugar de alejarse, se acerca?"
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
       "html": "El borde horizontal de un paraguas mojado está a una altura <math display=\"inline\"><mi>h</mi></math> y gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. Supongamos que dicho borde es una circunferencia de radio <math display=\"inline\"><mi>R</mi></math>, en buena aproximación. Calcula el radio de la circunferencia que dibujan en el suelo las gotas que se desprenden del borde."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La trayectoria de la partícula de la figura es una circunferencia de radio <math display=\"inline\"><mi>R</mi></math>. El vector de posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> medido desde un punto de la trayectoria gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. Calcula la velocidad escalar y el vector aceleración de la partícula."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/f264b883ab54b085.svg",
       "zabalera": 114
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos partículas que se mueven en el campo gravitatorio de la Tierra estaban en un momento dado en el mismo punto, con sus velocidades, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub></math>, horizontales y de sentidos opuestos. Calcula la distancia entre las partículas cuando sus velocidades son perpendiculares."
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
       "html": "El gran matemático John von Neumann calculaba mentalmente con mucha rapidez. Un amigo le planteó el siguiente problema: «Dos ciclistas parten en el mismo instante el uno hacia el otro, por una carretera recta, con velocidad constante de 10 km/h, desde una distancia de 20 km. En el mismo instante una mosca va de la nariz de un ciclista a la nariz del otro a 15 km/h. En cuanto llega, da la vuelta y va hasta el primer ciclista. Si repite el viaje una y otra vez, ¿cuál es la distancia total que recorre hasta que los ciclistas se encuentran?». Von Neumann obtuvo enseguida la respuesta correcta. «¡Ah!, conocías el truco», le dijo el amigo. «¿Qué truco? He sumado la serie infinita», le respondió von Neumann. ¿Encontrarás la respuesta sin sumar ninguna serie?"
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
       "html": "Dos partículas parten de la configuración de la figura, en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, con aceleración perpendicular constante de módulo <math display=\"inline\"><mi>a</mi></math>. ¿Cuándo es mínima la distancia entre las partículas? ¿Y máxima? ¿Cuáles son los valores mínimo y máximo de la distancia?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/f566219923413a73.svg",
       "zabalera": 173
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos perros tiran de una cuerda. En un instante dado, las velocidades de los perros están en las direcciones de las cuerdas y sus módulos son <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math>. En ese mismo instante, el ángulo entre las cuerdas es <math display=\"inline\"><mi>α</mi></math>. ¿Cuál es la velocidad escalar de la cuerda en ese instante? ¿Qué ocurre en tu respuesta en el límite <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mn>0</mn></mrow></math>? ¿Y en el límite <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>π</mi></mrow></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/b3d60bfa365bc284.svg",
       "zabalera": 183
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
       "html": "Una persona ve que un autobús que está a una distancia <math display=\"inline\"><mi>d</mi></math> empieza a alejarse con aceleración constante <math display=\"inline\"><mi>a</mi></math>. ¿Cuál es la velocidad constante que debe usar la persona, a partir de ese momento, para entrar <em>fácilmente</em> por la puerta trasera abierta del autobús?"
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
       "html": "Una nave espacial se mueve con velocidad escalar constante <math display=\"inline\"><mi>v</mi></math> y en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> pasa junto a un sistema de radar. Más tarde, en un momento dado, el radar emite un pulso y detecta el pulso reflejado en la nave tras pasar un intervalo de tiempo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>. Los dos pulsos se propagan con velocidad escalar <math display=\"inline\"><mi>c</mi></math>. Calcula cuándo se ha emitido el pulso, cuándo se refleja, cuándo se detecta el reflejado y dónde está la nave cuando se emite el pulso, cuando se refleja y cuando se detecta el reflejado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El radio del disco de la figura es <math display=\"inline\"><mi>R</mi></math> y gira en torno al eje excéntrico <math display=\"inline\"><mi>A</mi></math>, con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. La distancia entre el centro <math display=\"inline\"><mi>O</mi></math> del disco y el eje <math display=\"inline\"><mi>A</mi></math> es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>O</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi></mrow></math>. Demuestra que el movimiento del pistón <math display=\"inline\"><mi>P</mi></math> es armónico y halla su velocidad y su aceleración máximas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La varilla <math display=\"inline\"><mrow><mi>O</mi><mi>A</mi></mrow></math> gira con velocidad angular constante <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math>, en torno a <math display=\"inline\"><mi>O</mi></math>. La longitud de la varilla <math display=\"inline\"><mrow><mi>O</mi><mi>A</mi></mrow></math> es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>O</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi></mrow></math> y la de <math display=\"inline\"><mrow><mi>A</mi><mi>P</mi></mrow></math> es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mi>P</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>b</mi></mrow></math>. Calcula la distancia <math display=\"inline\"><mrow><mi>x</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>O</mi><mi>P</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. Usa que <math display=\"inline\"><mrow><mi>a</mi><mo>≪</mo><mi>b</mi></mrow></math> para escribir dicha distancia de este modo: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msup><mi>a</mi><mn>4</mn></msup><msup><mi>b</mi><mn>4</mn></msup></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Calcula la aceleración máxima del pistón <math display=\"inline\"><mi>P</mi></math> en esa aproximación."
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
       "html": "Estratón utilizó que la distancia entre las gotas de agua que caen aumenta con el tiempo para concluir que el movimiento es acelerado. Demuestra, sin usar ninguna otra hipótesis, que si el aumento de esa distancia es lineal respecto del tiempo, la aceleración es constante."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Teorema de la velocidad media",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«La distancia recorrida en un movimiento con aceleración constante es igual a la recorrida en un movimiento con velocidad constante, si en este último la velocidad es igual a la velocidad media del movimiento acelerado, es decir, si es el promedio de las velocidades inicial y final del primer caso». Demuestra este resultado."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Dinámica de la partícula puntual</strong>"
    },
    {
     "mota": "problema",
     "izena": "Tiro parabólico (I)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo puede ser el ángulo <math display=\"inline\"><mi>α</mi></math> en el tiro parabólico de la figura para que la distancia entre la partícula puntual y el punto <math display=\"inline\"><mi>O</mi></math> sea creciente en toda la trayectoria? <em>Observación</em>: Desprecia el rozamiento con el aire."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/ebca6d51bfe486f2.svg",
       "zabalera": 230
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabólico (II)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La partícula de la figura se lanza con velocidad <math display=\"inline\"><mi>u</mi></math> y un ángulo <math display=\"inline\"><mi>φ</mi></math> respecto de la horizontal. ¿Qué valor debe tener el ángulo <math display=\"inline\"><mi>φ</mi></math> para que el alcance <math display=\"inline\"><mi>R</mi></math> medido a lo largo del plano inclinado sea máximo?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/84dfb28ded5e9df0.svg",
       "zabalera": 206
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabólico (III)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al explotar un cohete, los fragmentos salen en todas direcciones con la misma velocidad escalar <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Encuentra el lugar geométrico de los puntos de máxima altura de las trayectorias de los fragmentos."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabólico (IV)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es el conjunto de puntos alcanzados por los fragmentos del problema 1.29? <em>Sugerencia</em>: el límite de esa región será la envolvente de todas las trayectorias."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/f57dab7dd0f14086.svg",
       "zabalera": 193
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabólico (V)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo hay que elegir en el tiro parabólico el ángulo <math display=\"inline\"><mi>α</mi></math> entre la velocidad inicial y la horizontal para que la distancia recorrida por la partícula a lo largo de la trayectoria sea máxima?"
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
       "html": "Una partícula en reposo en el punto más alto de un hemisferio empieza a deslizar. Si el rozamiento es despreciable, ¿dónde se romperá el contacto entre la partícula y el hemisferio? ¿Cuál será la velocidad en ese instante?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/e171f988d0ecbec2.svg",
       "zabalera": 207
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
       "html": "En un modelo sencillo (y erróneo) del átomo de hidrógeno, un electrón de masa <math display=\"inline\"><mi>m</mi></math> se mueve en una circunferencia de radio <math display=\"inline\"><mi>a</mi></math> en torno al núcleo en reposo. Si la energía potencial es <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math>, ¿cuáles son la energía cinética y el momento angular del electrón? ¿Cuál es la energía del fotón que, al ser absorbido por el electrón, hace que este pase a la órbita de radio doble? ¿Y para ionizar el átomo?"
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
       "html": "Si al pasar de la vía exterior a la interior no se enciende el motor y el efecto del aire es despreciable, ¿cómo será al final la velocidad del tren de la figura: mayor que la inicial, menor o igual? ¿Por qué?"
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
       "html": "Una partícula se mueve en el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> bajo la acción de la fuerza <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>. Si la energía potencial es nula en el origen, ¿cuál es en todos los demás puntos? Encuentra los puntos de equilibrio y discute su estabilidad. Estudia el movimiento para los siguientes valores de la energía mecánica: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>8</mn><mo>,</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mn>1</mn></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Leyes de Amontons",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando se va aumentando el ángulo de un plano inclinado que tiene un bloque encima, ¿qué ocurre?"
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
       "html": "Un bloque se suelta en el plano de la figura. El coeficiente de rozamiento dinámico es <math display=\"inline\"><mi>μ</mi></math>. ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>α</mi></math> para que la velocidad horizontal del bloque sea lo mayor posible?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/9c348eccf29bc64e.svg",
       "zabalera": 177
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
       "html": "Una cuenta de masa <math display=\"inline\"><mi>m</mi></math> se mueve a lo largo de un alambre liso bajo la acción de la gravedad. ¿Cómo debe ser el alambre para que la fuerza de contacto que sufre la partícula sea nula?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa de una partícula es <math display=\"inline\"><mi>m</mi></math> y se mueve en una circunferencia de radio <math display=\"inline\"><mi>a</mi></math>, bajo la acción del potencial armónico <math display=\"inline\"><mrow><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math>. Calcula la velocidad <math display=\"inline\"><mi>v</mi></math> de la partícula. De repente se le aplica a la partícula un impulso de valor <math display=\"inline\"><mrow><mi>m</mi><mi>v</mi></mrow></math>, de modo que el ángulo entre la velocidad que tenía esta última y el impulso es <math display=\"inline\"><mi>α</mi></math>. Usa las leyes de conservación para calcular las distancias máxima y mínima entre el centro y la partícula. Explica desde el punto de vista físico los resultados que se obtienen en los casos particulares <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Paradoja de Newton",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«Si la fuerza que el caballo ejerce sobre el carro es opuesta a la que el carro ejerce sobre el caballo, según la tercera ley de Newton el sistema no sabrá si debe moverse hacia delante o hacia atrás. Como en la práctica no existe un problema así, el principio de acción y reacción no es correcto». ¿Qué piensas tú de esto?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué fuerza debe ejercer sobre la cuerda la persona de masa <math display=\"inline\"><mi>M</mi></math> para mantener en equilibrio el andamio de masa <math display=\"inline\"><mi>m</mi></math>, si las masas de las cuerdas y de la polea son despreciables?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un objeto pequeño está en reposo sobre una mesa horizontal. Se pone en marcha mediante un impulso y cae por el borde, que está a 4 metros, 2 segundos después. ¿Tiene ruedas?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Hemisferios de Magdeburgo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En este experimento se hace el vacío en el espacio entre dos hemisferios, para demostrar la existencia y el valor de la presión atmosférica al comprobar que es muy difícil separarlos. En el experimento clásico que Otto von Guericke realizó en Magdeburgo en 1657, se engancharon caballos a las cuerdas unidas a los dos hemisferios. Si el objetivo era separar los hemisferios, ¿no había un método mejor que usar caballos?"
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
       "html": "¿Qué fuerza mide el dinamómetro de la figura, si la masa de la polea es despreciable?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Catenaria",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La catenaria es la forma geométrica de una cadena (o cuerda) flexible colgada de dos puntos (y así se llaman los cables que se utilizan para dar energía eléctrica a los trenes eléctricos). Consideremos un elemento infinitesimal de la cuerda en equilibrio bajo la acción de la gravedad (véase la figura 9.12). Elijamos el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> horizontal y el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> vertical, para expresar la forma de la cuerda mediante una función <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que queremos encontrar. <br>(a) Escribe las condiciones de equilibrio del elemento, que son variantes adecuadas de las ecuaciones (9.97)–(9.98). <br>(b) Usa las derivadas de la función <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (véase la relación (9.96)), para eliminar del problema el ángulo <math display=\"inline\"><mi>α</mi></math> respecto de la horizontal. <br>(c) Integra la condición de equilibrio horizontal para demostrar que la tensión es esta: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> donde <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> es una constante de integración. ¿Cuál es el significado de esta última? <br>(d) Sustituye este último resultado en la ecuación del equilibrio vertical e integra la ecuación diferencial para obtener la ecuación de la catenaria con las constantes de integración <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>y</mi><mn>0</mn></msub></math>: <math display=\"block\"><mrow><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow><mi>a</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>≡</mo><mfrac><msub><mi>T</mi><mn>0</mn></msub><mrow><mi>m</mi><mi>g</mi></mrow></mfrac><mi>L</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>L</mi></math> son la masa y la longitud de la cuerda, respectivamente."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula puntual se mueve por el plano inclinado de la figura bajo la acción de la gravedad. El coeficiente de rozamiento dinámico entre ambos es <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. <br>(a) Escribe las ecuaciones de evolución de las componentes y del módulo de la velocidad. Deduce que <math display=\"inline\"><mrow><msub><mi>v</mi><mi>x</mi></msub><mo>+</mo><mi>v</mi></mrow></math> es una constante del movimiento. <br>(b) Si el plano es muy largo y la velocidad inicial horizontal, como se ve en la figura, ¿cuáles son las componentes de la velocidad al final? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Recuerda que, cuando el plano está en reposo, la fuerza de rozamiento es opuesta a la velocidad: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>R</mi><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><mi>v</mi></mfrac><mi>.</mi></mrow></math>"
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
       "html": "Si vas demasiado deprisa, ¿qué te conviene en la situación de la figura, para evitar la pared de enfrente y el derrapaje: seguir recto frenando el automóvil o, sin tocar el freno, elegir una trayectoria circular? ¿Por qué? <em>Sugerencia</em>: haz aproximaciones."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las varillas fijas que pasan por el punto <math display=\"inline\"><mi>O</mi></math> de la figura son lisas y están en un plano vertical. En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> se sueltan desde allí unas cuentas de vidrio. Demuestra que en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math> las cuentas estarán en la circunferencia de la figura. ¿Cuál es el diámetro de la circunferencia?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/3c1af7316551a6f7.svg",
       "zabalera": 163
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El coeficiente de rozamiento entre la placa de la figura y el suelo horizontal es <math display=\"inline\"><mi>μ</mi></math>. Una parte de la placa de área <math display=\"inline\"><mi>S</mi></math> es bombardeada por un haz de partículas. La densidad de masa del haz es <math display=\"inline\"><mi>ρ</mi></math> y la velocidad de las partículas <math display=\"inline\"><mi>v</mi></math> en la dirección que se muestra. Si las partículas quedan adheridas a la placa, ¿cuál es la velocidad de la placa en el estado estacionario? <em>Sugerencia</em>: usa el concepto de flujo del apartado 10.7.4 y aplica el teorema del impulso (1.63) en un intervalo infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Fórmula de Euler",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La cuerda de la figura abraza un poste con un ángulo de valor <math display=\"inline\"><mi>α</mi></math> (puede ser también <math display=\"inline\"><mrow><mi>α</mi><mo>≥</mo><mn>2</mn><mi>π</mi></mrow></math>). El coeficiente de rozamiento estático entre la cuerda y el poste es <math display=\"inline\"><mi>μ</mi></math>. Si en un extremo de la cuerda se aplica una tensión de valor <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> empieza a moverse en ese sentido. Demuestra que la tensión de la cuerda cambia en función del ángulo <math display=\"inline\"><mi>α</mi></math> según la siguiente ecuación, si despreciamos la masa de la cuerda: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>μ</mi><mi>α</mi></mrow></msup><mi>.</mi></mrow></math> Al aplicar de nuevo <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math>, ¿cómo debe ser la tensión aplicada en el otro extremo para mantener el equilibrio?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El coeficiente de rozamiento entre las ruedas de un automóvil y la carretera es <math display=\"inline\"><mi>μ</mi></math>. Cuando parte del reposo, el motor desarrolla siempre la potencia total <math display=\"inline\"><mi>W</mi></math> en los ejes de todas las ruedas. Calcula la velocidad en función del tiempo."
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
       "html": "Los dos bloques iguales de la figura están sobre una mesa horizontal lisa, unidos por una varilla rígida ligera. La tensión máxima que esta puede soportar es <math display=\"inline\"><msub><mi>T</mi><mi mathvariant=\"normal\">max</mi></msub></math>. En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> empiezan a aplicarse las fuerzas horizontales <math display=\"inline\"><mrow><msub><mi>F</mi><mn>1</mn></msub><mo>=</mo><mi>C</mi><mi>t</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>C</mi><mi>t</mi></mrow></math>. ¿Cuándo se romperá la varilla?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/ea32ebb412dd3985.svg",
       "zabalera": 321
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energía potencial dependiente del tiempo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al definir las fuerzas conservativas en el apartado 1.3.4 hemos supuesto que la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> no depende explícitamente del tiempo; pero no siempre es así. Por ejemplo, la carga de una esfera conductora cargada aislada irá disminuyendo poco a poco, a causa de la humedad del aire. Supongamos que en el instante <math display=\"inline\"><mi>t</mi></math> es <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Cuando está en la posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> medida desde el centro de la esfera, la fuerza que sufrirá la carga puntual <math display=\"inline\"><mi>q</mi></math> será la dada por la ley de Coulomb: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math> Demuestra que la energía potencial de la carga será la siguiente: <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Consideremos ahora una partícula puntual que se mueve en la energía potencial general <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, que sufre la fuerza <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. ¿Se conservará su energía mecánica?"
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
       "html": "Una partícula parte con velocidad inicial <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>0</mn></msub></math> en un medio y la única fuerza que sufre es el rozamiento <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>a</mi><mi>m</mi><msqrt><mi>v</mi></msqrt><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>, cuando la velocidad es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>. ¿Cuánto tiempo necesita para quedarse parada? ¿Cuál será el camino total recorrido hasta entonces?"
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
       "html": "Una partícula se mueve a lo largo del eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> bajo la acción de la fuerza <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>x</mi></mrow></math>. Al principio está en el punto <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Si <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, ¿cómo hay que elegir <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> para que la partícula no se vaya a distancia infinita?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "¿Verdadero o falso?",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«El péndulo esférico de la figura gira en torno a la vertical, bajo la acción de la cuerda y del peso, con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. El radio de la órbita circular de la masa es <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>L</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> y la fuerza centrípeta que sufre es la componente horizontal <math display=\"inline\"><mrow><msub><mi>F</mi><mi>z</mi></msub><mo>=</mo><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> de la fuerza de contacto <math display=\"inline\"><mi>T</mi></math> ejercida por la cuerda. La ecuación del movimiento circular es <math display=\"inline\"><mrow><msub><mi>F</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi></mrow></math> y, tras sustituir aquí los valores anteriores, si se elimina el factor común <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, tenemos: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>L</mi><mi>.</mi></mrow></math> En consecuencia, en el límite <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math> tenemos <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math>»."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/028248c8cb8b6c85.svg",
       "zabalera": 100
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba la trayectoria del problema 1.4 y encuentra los valores de las constantes."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al bloque situado en el plano inclinado de la figura se le aplica una fuerza horizontal igual a su peso. El coeficiente de rozamiento estático entre el bloque y el plano es <math display=\"inline\"><mi>μ</mi></math>. ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>α</mi></math> para que el bloque esté en equilibrio, si <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>μ</mi><mo>≥</mo><mn>1</mn></mrow></math>? ¿Qué ocurre cuando <math display=\"inline\"><mrow><mi>μ</mi><mo>≪</mo><mn>1</mn></mrow></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/63cddde8c517d102.svg",
       "zabalera": 177
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El coeficiente de rozamiento estático entre el bloque de la figura y el plano es <math display=\"inline\"><mi>μ</mi></math>. El plano se mueve con aceleración horizontal constante <math display=\"inline\"><mi>a</mi></math>. (<math display=\"inline\"><mi>a</mi></math> puede ser positiva o negativa.) ¿Cómo hay que elegir <math display=\"inline\"><mi>a</mi></math> para que el bloque no se mueva por el plano?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/305f4a1b3e650116.svg",
       "zabalera": 203
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una persona salta de un puente al río, con el tobillo atado al puente mediante una cuerda elástica. La longitud de la cuerda se ha calculado de modo que la cabeza roce apenas la superficie del agua. Al terminar las oscilaciones, la cabeza queda a una distancia <math display=\"inline\"><mi>d</mi></math> de la superficie del agua. La distancia entre el puente y el agua es <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>25</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math>, la altura de la persona <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>8</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></math>. Calcula la longitud propia de la cuerda."
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
       "html": "Una partícula se suelta a una distancia <math display=\"inline\"><mi>h</mi></math> del plano de la figura. Si los botes son totalmente elásticos, ¿cuáles son las distancias entre los sucesivos?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una cuerda fina de masa <math display=\"inline\"><mi>m</mi></math> está firmemente sujeta en la periferia de un disco horizontal de radio <math display=\"inline\"><mi>R</mi></math>. Si el disco gira con velocidad angular <math display=\"inline\"><mi>ω</mi></math>, ¿cuál es la tensión en la cuerda?"
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
       "html": "Las tres partes de la pista lisa de la figura son: un plano de pendiente <math display=\"inline\"><mi>α</mi></math>, un arco de radio <math display=\"inline\"><mi>R</mi></math> y un plano vertical. ¿Desde dónde hay que soltar el cuerpo pequeño para que se separe de la pista?"
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
       "html": "El coeficiente de rozamiento dinámico entre el plano de la figura y el bloque es <math display=\"inline\"><mi>μ</mi></math>. ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>α</mi></math> para recorrer en el menor tiempo posible la distancia horizontal <math display=\"inline\"><mi>l</mi></math> hasta el borde, si se suelta desde esa distancia? ¿En qué intervalo está ese valor <math display=\"inline\"><mi>α</mi></math> al cambiar <math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El módulo de la aceleración de un péndulo matemático es el mismo en el punto más alto y en el más bajo. ¿Cuál es la amplitud del péndulo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La aceleración tangencial <math display=\"inline\"><mi>a</mi></math> de un coche que parte del reposo en una trayectoria circular de radio <math display=\"inline\"><mi>r</mi></math> es constante. El coeficiente de rozamiento estático es <math display=\"inline\"><mi>μ</mi></math>. Calcula el camino que recorre hasta que empieza a deslizar."
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
       "html": "El coeficiente de rozamiento entre el cuerpo de la figura y la pista es <math display=\"inline\"><mi>μ</mi></math>. Calcula el trabajo que hay que realizar para llevar el cuerpo del punto <math display=\"inline\"><mi>A</mi></math> al <math display=\"inline\"><mi>B</mi></math>, por la pista, si la masa del cuerpo es <math display=\"inline\"><mi>m</mi></math>."
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
       "html": "Un péndulo matemático colgado de una cuerda ligera está en equilibrio en el punto más bajo. La longitud del péndulo es <math display=\"inline\"><mi>l</mi></math>. ¿Qué velocidad horizontal hay que darle en esa posición para que haga una trayectoria circular completa?"
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
       "html": "El último tramo de la pista lisa de la figura es horizontal. Desde el punto más alto de la pista se suelta un cuerpo, que se mueve sin girar. ¿Cómo hay que elegir la altura <math display=\"inline\"><mi>d</mi></math> para que la distancia horizontal <math display=\"inline\"><mi>l</mi></math> que recorre el cuerpo, tras salir de la pista, sea la mayor posible?"
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
       "html": "El ángulo <math display=\"inline\"><mi>α</mi></math> entre las barras de la figura es constante y el sistema gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno a la barra vertical. El coeficiente de rozamiento estático entre la otra barra y la bolita de masa <math display=\"inline\"><mi>m</mi></math> es <math display=\"inline\"><mi>μ</mi></math>. Calcula la distancia <math display=\"inline\"><mi>r</mi></math> cuando la bolita está en equilibrio relativo."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/40a1d0516fd12e7a.svg",
       "zabalera": 117
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Coeficiente de restitución (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El coeficiente de restitución de una pelota es <math display=\"inline\"><mi>ε</mi></math>, es decir, si antes de golpear una superficie rígida la componente <em>normal</em> de la velocidad es <math display=\"inline\"><mi>v</mi></math> y tras la colisión <math display=\"inline\"><msup><mi>v</mi><mo>′</mo></msup></math> tenemos, según la <strong>ley de restitución de Newton</strong>: <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msup><mi>v</mi><mo>′</mo></msup><mi>/</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. La pelota se suelta desde una altura <math display=\"inline\"><mi>h</mi></math>. Calcula la distancia total que recorre hasta pararse y el intervalo de tiempo total que necesita. <em>Observación</em>: haz las hipótesis habituales: el efecto del aire y el diámetro de la pelota son despreciables y la trayectoria es siempre vertical."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Coeficiente de restitución (II)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una pelota golpea una superficie plana firme, como se muestra en la figura. La superficie es rígida y lisa y el coeficiente de restitución <math display=\"inline\"><mi>ε</mi></math>. Calcula el ángulo de reflexión <math display=\"inline\"><msub><mi>θ</mi><mi>i</mi></msub></math> y la pérdida relativa de energía cinética <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>−</mo><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, en función del ángulo de incidencia <math display=\"inline\"><msub><mi>θ</mi><mi>e</mi></msub></math>. ¿Qué ocurre si la colisión es elástica?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Péndulo cónico",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa de un péndulo matemático se mueve en un plano horizontal, siguiendo una circunferencia, como se muestra en la figura. Calcula el período del movimiento."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/34b630cfbad1e97b.svg",
       "zabalera": 108
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
       "html": "La barra de la figura carece de masa y puede girar sin rozamiento en torno al punto <math display=\"inline\"><mi>A</mi></math>. En el extremo libre hay una partícula de masa <math display=\"inline\"><mi>m</mi></math>. La longitud de la barra es <math display=\"inline\"><mi>l</mi></math>. La barra se suelta desde el reposo cuando <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>. Escribe las ecuaciones del movimiento y la ley de conservación de la energía mecánica. Estudia cuándo el esfuerzo en la barra es de compresión y cuándo de tensión a lo largo del movimiento."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiro parabólico (VII)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una bolita se suelta y, tras recorrer una distancia <math display=\"inline\"><mi>l</mi></math> en el plano inclinado de la figura, como consecuencia de una colisión elástica sale en una trayectoria parabólica. ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>α</mi></math> para que el alcance <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> sea lo mayor posible?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/7e33c95fe30b36b8.svg",
       "zabalera": 233
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ley de Stokes (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula se lanza hacia arriba, con velocidad escalar <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, en un fluido. La fuerza de arrastre debida a la viscosidad es proporcional a la velocidad, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>γ</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, según la ley de Stokes. Calcula cuánto tiempo necesita para llegar a la altura máxima <math display=\"inline\"><mi>h</mi></math> que debes encontrar. Comprueba que se recuperan los resultados conocidos en el límite <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mn>0</mn></mrow></math>. <em>Sugerencia</em>: usa el método de separación de variables del apartado 1.4.3 para calcular la velocidad."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ley de Stokes (II)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la función <math display=\"inline\"><mi>W</mi></math> de Lambert del apartado B.6 para calcular el tiempo que necesita la partícula del problema 1.76 para volver al suelo. ¿Cuál es entonces la velocidad escalar?"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Usa el parámetro adimensional <math display=\"inline\"><mrow><mi>λ</mi><mo>≡</mo><mn>1</mn><mo>+</mo><mi>γ</mi><msub><mi>v</mi><mn>0</mn></msub><mi>/</mi><mi>g</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ley de Newton (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula se suelta en un fluido. La fuerza de arrastre debida a la viscosidad es proporcional al cuadrado de la velocidad, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, según la ley de Newton. Calcula la velocidad límite de la partícula."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ley de Newton (II)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ahora se lanza hacia arriba, con velocidad escalar <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, la partícula del problema 1.78. Demuestra que al volver a la posición inicial la velocidad escalar de la partícula es <math display=\"block\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><msqrt><mrow><mn>1</mn><mo>+</mo><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mi>/</mi><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mrow></msqrt></mfrac></mrow></math>, en función de la velocidad límite <math display=\"inline\"><msub><mi>v</mi><mi>m</mi></msub></math> del problema 1.78."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ley de Newton (III)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se lanza de nuevo hacia arriba, con velocidad escalar <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, la partícula del problema 1.78. Calcula cuánto tiempo (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>t</mi><mn>1</mn></msub></mrow></math>) necesita para llegar a la altura máxima <math display=\"inline\"><mi>h</mi></math> que debes encontrar. ¿Cuánto tiempo necesita para volver desde allí al suelo? ¿Cuál es entonces la velocidad escalar de la partícula? <em>Sugerencia</em>: usa el tiempo <math display=\"inline\"><mrow><mi>τ</mi><mo>≡</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mi>k</mi><mi>g</mi></mrow></msqrt></mrow></math>, el parámetro adimensional <math display=\"inline\"><mrow><mi>λ</mi><mo>≡</mo><mi>k</mi><msub><mi>v</mi><mn>0</mn></msub><mi>τ</mi></mrow></math> y el método de separación de variables del apartado 1.4.3, en la ecuación del movimiento que hay que resolver en dos partes."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "(Euler, 1736)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula que se mueve a lo largo del eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> sufre una fuerza atractiva <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>k</mi><msup><mi>x</mi><mi>λ</mi></msup><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>. Cuando está en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> la velocidad de la partícula es <math display=\"inline\"><mi>v</mi></math>. ¿Desde dónde se ha soltado (sin velocidad)? ¿Qué ocurre cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>?"
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
       "html": "Una partícula que se mueve a lo largo del eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> sufre una fuerza atractiva <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>x</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>. Si se suelta desde el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> (sin velocidad), ¿cuánto tiempo necesita para llegar al punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiempo de caída (Galileo)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> es el vértice de la circunferencia vertical de la figura y <math display=\"inline\"><mi>B</mi></math> la barra lisa que une el punto. Desde el punto <math display=\"inline\"><mi>A</mi></math> se suelta (sin velocidad) una cuenta. Demuestra que el tiempo que necesita para llegar a <math display=\"inline\"><mi>B</mi></math> es el mismo para todos los puntos <math display=\"inline\"><mi>B</mi></math> de la circunferencia."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/4eb4fa83dc2d3b06.svg",
       "zabalera": 163
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tiempo de caída",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos el problema 1.83 teniendo en cuenta el rozamiento. ¿Cómo se consigue el mayor tiempo de caída? ¿Y el menor? ¿Cuáles son los valores máximo y mínimo?"
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
       "html": "Se coloca una moneda a una distancia <math display=\"inline\"><mi>a</mi></math> del centro de un disco horizontal y sobre ella otra moneda igual. El coeficiente de rozamiento estático entre el disco y la moneda es <math display=\"inline\"><msub><mi>μ</mi><mn>1</mn></msub></math> y entre las monedas <math display=\"inline\"><msub><mi>μ</mi><mn>2</mn></msub></math>. El disco empieza a girar en torno al centro y la velocidad angular aumenta muy despacio. ¿Qué empezará a deslizar: solo la moneda de arriba, solo la de abajo o las dos a la vez? <em>Observación</em>: desprecia el radio de las monedas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una barra ligera tiene una pequeña esfera de masa <math display=\"inline\"><mi>m</mi></math> en un extremo. Tras apoyar el otro extremo en el suelo, la barra se suelta desde la posición vertical. ¿En qué ángulo desaparece la reacción del suelo, mientras la barra no haya deslizado? ¿Cómo debe ser para ello el coeficiente de rozamiento estático? ¿Dónde golpeará la esfera el suelo?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/d9cd51dfc247489d.svg",
       "zabalera": 122
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
       "html": "La masa de la partícula <math display=\"inline\"><mi>A</mi></math> es <math display=\"inline\"><mi>m</mi></math> y la de <math display=\"inline\"><mi>B</mi></math> es <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math>. Si las energías cinéticas de ambas son iguales, ¿cuál se mueve más deprisa? ¿Y cuál tiene el mayor momento lineal?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se cuelga del punto <math display=\"inline\"><mi>O</mi></math> un péndulo matemático de longitud <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>. La cuerda carece de masa, es inextensible y totalmente flexible. En la vertical de <math display=\"inline\"><mi>O</mi></math>, a una distancia <math display=\"inline\"><mi>a</mi></math>, hay un clavo <math display=\"inline\"><mi>I</mi></math>, como se ve en la figura. El péndulo se suelta desde una distancia angular <math display=\"inline\"><mi>α</mi></math> de la vertical. ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>α</mi></math> para que la masa golpee el clavo?"
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
       "html": "Una cuerda ligera colgada del punto <math display=\"inline\"><mi>O</mi></math> pasa por la anilla lisa <math display=\"inline\"><mi>E</mi></math> y en el extremo libre tiene una partícula de masa <math display=\"inline\"><mi>m</mi></math>, que se mueve como un péndulo cónico. La longitud del péndulo es <math display=\"inline\"><mi>a</mi></math> y el ángulo con la vertical <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, como se muestra en la figura. Ahora el extremo <math display=\"inline\"><mi>O</mi></math> desciende muy despacio, hasta obtener un péndulo cónico de ángulo <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. ¿Cuál es ahora la longitud <math display=\"inline\"><mi>b</mi></math> del péndulo?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Sistemas de partículas</strong>"
    },
    {
     "mota": "problema",
     "izena": "Segunda ley de Newton y masa variable",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hasta ahora las masas de las partículas han sido constantes. En algunos casos, sin embargo, la masa de un cuerpo cambia, porque emite una parte de su masa o absorbe masa de su entorno. Si la masa del cuerpo es <math display=\"inline\"><mi>m</mi></math>, la velocidad <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> y la fuerza total que sufre, <em>no se puede usar (1.52)</em> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>m</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> <em>para escribir la ecuación</em>. En efecto, esa expresión no puede cumplirse en todos los sistemas de referencia inerciales, pues, a diferencia de la masa y de la fuerza, la velocidad cambia al cambiar de sistema."
      },
      {
       "mota": "testua",
       "html": "Sin embargo, si se considera el sistema de partículas completo, se puede usar la ecuación de evolución (1.143). Hazlo, para deducir que la ecuación del movimiento del cuerpo es esta:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> es la fuerza total y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> la velocidad de la masa emitida o absorbida (medida en el sistema del cuerpo)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa variable (I)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa estructural de un cohete es <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> y la del combustible <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>. El motor expulsa gases de masa <math display=\"inline\"><mi>k</mi></math> por unidad de tiempo, con una velocidad (medida en el cohete) <math display=\"inline\"><mrow><mi>u</mi><mo>&gt;</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>/</mi><mi>k</mi></mrow></math>. Si parte de la superficie de la Tierra, en dirección vertical, ¿cuál es la solución de la ecuación del movimiento del cohete? Encuentra la velocidad máxima (hacia arriba). ¿Cuál es la altura del cohete en ese instante?"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": A lo largo de la trayectoria la aceleración de la gravedad es constante y el efecto del aire despreciable."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa variable (II)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa de una nave espacial en reposo en un sistema inercial es <math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math>. En un momento dado empieza a lanzar gases hacia atrás. La velocidad escalar constante de los gases es <math display=\"inline\"><mi>u</mi></math>, <em>en el sistema de la nave</em>. <br>(a) Comprueba que la masa de la nave, cuando su velocidad es <math display=\"inline\"><mi>v</mi></math>, es la dada por la <strong>ecuación de Tsiolkovski</strong>: <math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>v</mi><mi>/</mi><mi>u</mi></mrow></msup><mi>.</mi></mrow></math> (Observa que no se especifica cuánta masa se lanza por unidad de tiempo, ni que se emitan cantidades iguales de masa en intervalos iguales). <br>(b) ¿Cuál es la expresión que sustituye a la anterior si la velocidad de los gases es <math display=\"inline\"><mi>u</mi></math> <em>en el sistema inicial</em>? <br>(c) Si los gases de masa <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>−</mo><mi>m</mi></mrow></math> se lanzan <em>en un instante</em> inicial, ¿cuál es la relación <math display=\"inline\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? <br>(d) Comenta el resultado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa variable (III)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa de una nave espacial en reposo en un sistema inercial es <math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math>. En un momento dado empieza a lanzar gases hacia atrás. La velocidad escalar constante de los gases es <math display=\"inline\"><mi>u</mi></math>, <em>en el sistema de la nave</em>, y se quiere que al final la nave se mueva con velocidad <math display=\"inline\"><mi>v</mi></math> (en el sistema inicial). ¿Cómo hay que elegir la velocidad <math display=\"inline\"><mi>u</mi></math> para que la eficiencia sea máxima, es decir, para emplear la mayor parte posible de la energía utilizada para emitir los gases en la energía cinética de la nave? ¿Cuál es esa eficiencia máxima? ¿Y la masa total de los gases emitidos?"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Escribe <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>a</mi><mi>u</mi></mrow></math> y usa que <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mi>a</mi></msup><mo>=</mo><mn>0</mn></mrow></math> es la solución real no nula de la ecuación <math display=\"inline\"><mrow><mi>a</mi><mo>≈</mo><mn>1.59</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Gota de lluvia (I)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al caer a través de la niebla, la masa de una gota de lluvia va aumentando, pues absorbe el agua del entorno. Supongamos que ese aumento es proporcional al área de la superficie de la gota. Usa esa hipótesis para escribir <math display=\"inline\"><mrow><mover><mi>m</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>λ</mi><msup><mi>m</mi><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>. Además, admitiremos que <math display=\"inline\"><mi>λ</mi></math> es constante y que la masa absorbida estaba en reposo. Demuestra que la aceleración de la gota es <math display=\"inline\"><mrow><mi>g</mi><mi>/</mi><mn>4</mn></mrow></math>, si en un instante inicial la masa y la velocidad de la gota eran despreciables."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Gota de lluvia (II)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos ahora que el aumento de la masa de la gota del problema 1.94 es proporcional al volumen de agua que barre: <math display=\"inline\"><mrow><mover><mi>m</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>λ</mi><msup><mi>m</mi><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>v</mi></mrow></math>. ¿Cuál es la aceleración de la gota? <em>Sugerencia</em>: al principio usa la masa <math display=\"inline\"><mi>m</mi></math> como variable independiente: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>m</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>m</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>w</mi><mo>≡</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></math> también puede ser útil el cambio de variable."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa variable (IV)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre una vagoneta que se mueve en línea recta sin rozamiento hay una persona. La masa de la vagoneta es <math display=\"inline\"><mi>M</mi></math> y la de la persona <math display=\"inline\"><mi>m</mi></math>. Cuando el sistema se mueve con velocidad <math display=\"inline\"><mi>v</mi></math>, la persona empieza a correr hacia atrás y, cuando se mueve con velocidad <math display=\"inline\"><mi>u</mi></math> respecto de la vagoneta, se cae por el extremo trasero de la vagoneta. ¿Cuál es la velocidad final de la vagoneta?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/c32ddcbbdf45f20d.svg",
       "zabalera": 249
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un borde de una alfombra se mueve, como se muestra en la figura, con velocidad constante <math display=\"inline\"><mi>v</mi></math>. Calcula la fuerza mínima que hay que usar para ello, si la masa de la alfombra es <math display=\"inline\"><mi>m</mi></math> y su longitud <math display=\"inline\"><mi>L</mi></math>."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/9d69be6f02283573.svg",
       "zabalera": 258
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La tolva de la figura deposita <math display=\"inline\"><mi>n</mi></math> kilogramos de arena por cada segundo en la cinta transportadora. ¿Qué potencia debe desarrollar el motor para mantener la cinta con velocidad constante <math display=\"inline\"><mi>v</mi></math>? ¿Cuánta potencia se convierte en calor?"
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
       "html": "Cuando, por la acción de un motor, los cilindros horizontales de la figura giran con la misma velocidad angular constante, se coloca sobre ellos una barra pesada. Naturalmente, si los dos cilindros giran en el mismo sentido, la barra también empezará a moverse en ese sentido, hasta caerse. ¿Qué ocurrirá si los sentidos de giro de los dos cilindros son opuestos?"
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
       "html": "Si el bote está inicialmente en reposo y el marinero va despacio de la proa a la popa, ¿cuál es la distancia que recorre el bote respecto del muelle?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Punto de referencia",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos que los puntos <math display=\"inline\"><mi>O</mi></math> y <math display=\"inline\"><msup><mi>O</mi><mo>′</mo></msup></math> están fijos. Comprueba que las relaciones entre los momentos angulares totales respecto de esos puntos y los momentos totales de las fuerzas externas son las siguientes, si el momento lineal total es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑷</mi></math> y la fuerza externa total <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math>:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "Deduce que <em>el momento angular total (el momento de las fuerzas) no depende del punto de referencia si y solo si el momento lineal total (la fuerza externa total) es nulo</em>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Conservación de la masa",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Consideremos una colisión entre partículas. Demuestra que, como la ley de conservación del momento lineal se cumple en todos los sistemas de referencia inerciales, la masa total se conserva, aunque cambien el número de partículas o sus masas."
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Como veremos en el apartado 3.9 (y en el problema 3.95), en la relatividad especial la masa total no se conserva si la colisión no es elástica, aunque el momento lineal se cumpla en todos los sistemas inerciales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Colisión elástica",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para comprobar que la definición de colisión elástica no depende del observador, demuestra que <em>si el momento lineal y la energía cinética se conservan en un sistema de referencia inercial, también son constantes del movimiento en todos los demás sistemas inerciales</em>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Colisión superelástica",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Desde la posición que se muestra en la figura se sueltan dos bolitas. ¿Qué ocurrirá, cuando <math display=\"inline\"><mrow><mi>M</mi><mo>&gt;</mo><mi>m</mi><mi>/</mi><mn>3</mn></mrow></math>, tras golpear el suelo, si la colisión es elástica? Discute, en especial, el caso <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math>. ¿Para qué hay que usar la condición <math display=\"inline\"><mrow><mi>M</mi><mo>&gt;</mo><mi>m</mi><mi>/</mi><mn>3</mn></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Para hacer el estudio, supón que la masa de abajo, justo en el momento en que empieza a subir tras chocar con el suelo, se encuentra con la partícula de arriba, que todavía viene bajando."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/c3e74bef11d218a0.svg",
       "zabalera": 122
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba directamente mediante cálculo vectorial, sin usar ninguna figura, los resultados (1.179) y (1.180)."
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
       "html": "Supongamos que se utilizan partículas <math display=\"inline\"><mi>α</mi></math> para bombardear protones. Comprueba que el ángulo de dispersión máximo es <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≈</mo><mn>14.58</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. ¿Qué ocurre cuando se bombardean electrones con protones? (<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≈</mo><mn>0.03</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> lo obtuvieron Rutherford y Marsden en los experimentos realizados en 1909.)"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Por efecto de un núcleo en reposo, la dirección de un protón sufre una desviación de valor <math display=\"inline\"><mrow><mn>56</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, siendo el ángulo de retroceso del núcleo <math display=\"inline\"><mrow><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. ¿Cuáles son la masa atómica del núcleo y la fracción de energía cinética que se lleva?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo son las masas de dos partículas que se mueven en direcciones perpendiculares, si tras sufrir una colisión elástica entre ellas una de ellas queda parada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo son las direcciones de dos partículas en movimiento de la misma masa, si tras sufrir una colisión elástica entre ellas una de ellas queda parada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Colisión totalmente inelástica (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Así se llama la colisión tras la cual las partículas quedan unidas. Demuestra que en dicho caso la pérdida de energía cinética es máxima (si la masa total se conserva, al menos). <em>Sugerencia</em>: recuerda la utilidad del sistema del centro de masas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Colisión elástica",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las velocidades de la partícula y de la pared de la figura son <math display=\"inline\"><mi>v</mi></math> y <math display=\"inline\"><mi>V</mi></math>, respectivamente. La velocidad de la partícula tras la colisión elástica puede calcularse de tres modos diferentes. <br>1. Haz el cálculo en el sistema del centro de masas (de la pared) y usa la transformación de Galileo para encontrar la velocidad medida en el laboratorio. <br>2. Supón que la masa <math display=\"inline\"><mi>M</mi></math> de la pared es finita, haz el cálculo en el sistema del laboratorio y encuentra el límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math>. <br>3. Resuelve el problema directamente en el sistema del laboratorio, calculando el trabajo realizado por la pared."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/ddb7f3d96cc0ef14.svg",
       "zabalera": 234
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si has acertado la solución del problema anterior, estudiemos cómo funcionan los trenes de vapor. ¿No serán opuestos los efectos de la biela en los dos casos de la figura? ¿Por qué la rueda va siempre hacia delante?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Velocidad relativa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Consideremos una de las colisiones elásticas entre dos partículas que hemos estudiado en el apartado 1.5.7. Demuestra, sin hacer ningún cálculo, que la velocidad relativa entre las dos partículas gira, sin cambiar de módulo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Centro de gravedad",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La Tierra atrae todos los puntos de un sólido rígido y, en consecuencia, a cada punto le corresponden un peso y un vector de posición. Sin embargo, al calcular la suma y el momento total de las fuerzas externas que actúan sobre el sólido (en un problema de este tema, por ejemplo, en el tema 5 al estudiar el péndulo físico y la precesión de la peonza), hacemos el cálculo como si el peso total estuviera aplicado en el centro de masas. ¿Por qué es adecuado hacerlo así?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es cierto que la energía potencial de un sistema de partículas es la suma de las energías potenciales de las partículas?"
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
       "html": "El muelle que une dos partículas iguales en reposo sobre una mesa horizontal lisa no está deformado, como se ve en la figura. Una tercera partícula igual golpea con velocidad <math display=\"inline\"><mi>v</mi></math> a una de las anteriores y quedan unidas las dos. ¿Cómo se mueve el centro de masas del sistema tras la colisión? ¿Cuál es la deformación máxima del muelle?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/e64a2b7e83e332c8.svg",
       "zabalera": 196
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Cuna de Newton",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el juguete de la figura, varias bolitas iguales cuelgan de dos varillas horizontales, y en reposo vertical las bolitas sucesivas se tocan. Si la bolita de un extremo se aparta de las demás y se suelta, ¿qué ocurre? ¿Por qué? <em>Observación</em>: el estudio detallado de este sistema no es fácil, aquí solo se pide una explicación cualitativa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Movimiento relativo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Consideremos un sistema mecánico formado por dos partículas. Definamos la energía cinética y el momento angular de la partícula ficticia que se mueve con el centro de masas y con la masa total del sistema, correspondientes a la traslación del centro de masas: <math display=\"block\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Por otra parte, consideraremos también los correspondientes al movimiento relativo de la masa reducida: <math display=\"block\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">erl</mtext></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">erl</mtext></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Demuestra que la energía cinética total y el momento angular total del sistema pueden escribirse de este modo: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>+</mo><msub><mi>T</mi><mtext mathvariant=\"normal\">erl</mtext></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">MZ</mtext></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">erl</mtext></msub><mi>.</mi></mrow></math> Deduce que la energía cinética y el momento angular medidos en el sistema del centro de masas son <math display=\"inline\"><mrow><msup><mi>T</mi><mo>*</mo></msup><mo>=</mo><msub><mi>T</mi><mtext mathvariant=\"normal\">erl</mtext></msub></mrow></math> y <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>*</mo></msup><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑳</mi><mtext mathvariant=\"normal\">erl</mtext></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Colisión totalmente inelástica (II)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las masas de dos partículas libres son <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> y sus velocidades <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub></math>. Al chocar entre sí quedan unidas. Demuestra que la energía cinética perdida en la colisión es esta: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el fondo de un recipiente cerrado hay una mosca. El recipiente está en equilibrio en la balanza de la figura. ¿Qué ocurre si la mosca empieza a volar? <em>Observación</em>: se pide una respuesta cualitativa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las velocidades de dos haces uniformes de partículas son opuestas en un acelerador de iones. Las partículas de un haz son iones de átomos <math display=\"inline\"><mrow><msubsup><mrow></mrow><mn>3</mn><mn>7</mn></msubsup><mtext mathvariant=\"normal\">Li</mtext></mrow></math> y la desviación máxima que sufren al chocar con el otro haz es <math display=\"inline\"><mrow><mn>23.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. ¿Qué son las partículas del otro haz?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un reloj de arena está en equilibrio en una balanza. ¿Qué ocurre si se abre la válvula? <em>Observación</em>: se pide una respuesta cualitativa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Gracias al motor, la aceleración de una locomotora es constante. Parte del reposo y, tras pasar un intervalo de tiempo <math display=\"inline\"><mi>τ</mi></math>, choca con un vagón parado. Las masas de la máquina y del vagón son iguales y la colisión es elástica. Si se desprecian todos los rozamientos, ¿cuándo se producirán las siguientes colisiones?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la cuerda de la figura está en equilibrio, ¿cuál es su masa? Dibuja en la figura la posición del centro de masas."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/360484bb9c93bf70.svg",
       "zabalera": 216
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
       "html": "Los dos bloques de la figura son del mismo material y entre ellos se ha colocado un explosivo <math display=\"inline\"><mi>O</mi></math>. Si, tras la explosión de este, el bloque de la izquierda recorre una distancia <math display=\"inline\"><mi>d</mi></math> hasta que se para, ¿cuál es la distancia recorrida por el de la derecha?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/1d1d2480e85dcdde.svg",
       "zabalera": 258
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos bloques iguales de la figura están sobre una superficie horizontal lisa, unidos mediante un muelle. Al principio el de la izquierda está contra la pared y el muelle sin deformar. A partir de esa posición de equilibrio se miden las abscisas <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>x</mi></math> de los dos bloques. El bloque de la derecha se empuja poco a poco hasta la posición <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> y desde allí se suelta. Calcula el movimiento de los dos bloques."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/8fdc7d8981e352f3.svg",
       "zabalera": 275
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Movimiento del centro de masas",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos bloques de la figura están sobre una mesa horizontal plana y sobre el de la derecha se aplica una fuerza externa constante <math display=\"inline\"><mi>F</mi></math>. Los bloques forman un sistema de dos cuerpos (junto con el muelle central). Encuentra la ecuación de evolución del centro de masas y demuestra que no se puede resolver por sí sola (es decir, sin resolver la ecuación del movimiento relativo). Calcula la posición del centro de masas en la configuración de equilibrio y demuestra que depende de las fuerzas internas. Comenta el resultado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una cuerda homogénea de masa <math display=\"inline\"><mi>m</mi></math> desliza por la pequeña polea lisa de la figura. Si se suelta inicialmente desde una posición casi simétrica (<math display=\"inline\"><mrow><mi>x</mi><mo>≈</mo><mn>0</mn></mrow></math>), ¿cuáles son después la velocidad y la aceleración de la cuerda? Calcula la reacción que ejerce la polea y demuestra que cuando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi><mi>/</mi><msqrt><mn>8</mn></msqrt></mrow></math> la cuerda abandona la polea. ¿Se puede saber con los datos dados cuándo ocurre eso?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/00a0d66c2ab4eab6.svg",
       "zabalera": 127
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
       "html": "Supongamos que la pared del problema 1.5 es lisa y que el coeficiente de rozamiento estático entre el palo y el suelo es <math display=\"inline\"><mi>μ</mi></math>. (a) ¿Cómo debe ser el ángulo <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> para que el palo no empiece a deslizar? (b) ¿Qué ocurre si el suelo es liso y <math display=\"inline\"><mi>μ</mi></math> es el coeficiente de rozamiento estático entre la pared y el palo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "(Huygens, 1669)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) La masa puntual <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> de la figura se lanza contra <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, que está en reposo. La colisión es elástica y frontal. Calcula la velocidad final de la masa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>. <br>(b) Ahora se coloca en medio la partícula puntual <math display=\"inline\"><msub><mi>m</mi><mn>3</mn></msub></math>. Si las colisiones son elásticas y frontales, ¿cuál es la velocidad final de la masa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/e5b7e85b5617d8ab.svg",
       "zabalera": 209
      },
      {
       "mota": "testua",
       "html": "Demuestra que la velocidad final del segundo caso es siempre mayor que la del primero, si <math display=\"inline\"><msub><mi>m</mi><mn>3</mn></msub></math> es intermedia entre las otras dos (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>m</mi><mn>3</mn></msub><mo>&lt;</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> o <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>m</mi><mn>3</mn></msub><mo>&gt;</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>), y es máxima cuando <math display=\"inline\"><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></math> es la media geométrica. Encuentra ese valor máximo."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Examenes resueltos (1996-2000), mk:1",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una partícula se mueve con velocidad <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math> a lo largo de una <em>cardioide</em> de ecuación <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demuestra que la componente radial de la aceleración es constante. Demuestra también que la magnitud de la aceleración total y la velocidad angular son proporcionales a <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msqrt><mi>r</mi></msqrt></mrow></math>. [<em>Observación</em>: como ejercicio previo, deduce las expresiones de las componentes de la aceleración en coordenadas polares]."
    },
    {
     "mota": "testua",
     "html": "[Figura: sistema de ejes cartesianos con origen <math display=\"inline\"><mi>O</mi></math>, <math display=\"inline\"><mi>x</mi></math> (horizontal) y <math display=\"inline\"><mi>y</mi></math> (vertical); una curva que pasa por <math display=\"inline\"><mi>O</mi></math> (circunferencia que representa la cardioide) en la que se sitúa el punto <math display=\"inline\"><mi>P</mi></math>; el vector radial <math display=\"inline\"><mi>r</mi></math> va de <math display=\"inline\"><mi>O</mi></math> a <math display=\"inline\"><mi>P</mi></math>, formando con el eje <math display=\"inline\"><mi>x</mi></math> el ángulo <math display=\"inline\"><mi>θ</mi></math>.]"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Utilizando coordenadas polares, expresemos los versores radial y transversal en función de los vectores unitarios <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒋</mi></math> fijos en el espacio. Asimismo, las derivadas temporales de esos versores se obtienen sin problema. Así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒋</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>θ</mi></msub><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒋</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>r</mi></msub><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>θ</mi></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mi>θ</mi></msub><mo>=</mo><mi>−</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>r</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub></mrow></math>, es fácil obtener las expresiones de la velocidad y de la aceleración en componentes radial y transversal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub><mo>+</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>θ</mi></msub></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>r</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>θ</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De la condición de constancia de la velocidad <math display=\"inline\"><mi>v</mi></math>, podemos sacar la siguiente relación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mo>=</mo><mi>A</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Además, de la ecuación de la trayectoria, mediante las siguientes derivaciones respecto del tiempo, podemos obtener las relaciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mi>r</mi></math> y <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> en función de <math display=\"inline\"><mi>θ</mi></math> y de <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> en la expresión de la constancia de la velocidad, llegaremos a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>k</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>A</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y despejando <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>v</mi><msqrt><mrow><mn>2</mn><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mo>=</mo><mfrac><mi>v</mi><msqrt><mrow><mn>2</mn><mi>k</mi><mi>r</mi></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la expresión de la componente radial de la aceleración, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>, derivemos primero la constancia de la velocidad respecto del tiempo. Así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>r</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Además, derivando respecto del tiempo la relación <math display=\"inline\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mi>k</mi><mi>r</mi></mrow></math> obtenida antes, teniendo en cuenta que <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>A</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>, podemos obtener esta expresión:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo estas relaciones en la expresión <math display=\"inline\"><msub><mi>a</mi><mi>r</mi></msub></math> de la aceleración radial:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>k</mi></mfrac><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para calcular el módulo de la aceleración, antes tenemos que obtener el valor de la componente transversal, y para ello ya hemos calculado los términos necesarios:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>θ</mi></msub><mo>=</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><mi>k</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi><mi>r</mi></mrow></mfrac><mfrac><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mfrac></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>k</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>k</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, el módulo de la aceleración total será este:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><msqrt><mrow><msubsup><mi>a</mi><mi>r</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>a</mi><mi>θ</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><msqrt><mrow><mfrac><mn>1</mn><msup><mi>k</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><msqrt><mfrac><mn>2</mn><mrow><mi>k</mi><mi>r</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos hecho la sustitución <math display=\"inline\"><mrow><mfrac><mn>1</mn><mi>k</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac></mrow></math>."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El bloque A puede deslizar sobre el bloque B, y B, a su vez, puede deslizar sobre un suelo totalmente liso y horizontal. Entre los bloques A y B hay un rozamiento caracterizado por el coeficiente <math display=\"inline\"><mi>μ</mi></math>. Si las velocidades iniciales son <math display=\"inline\"><mrow><msub><mi>v</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, halla las velocidades finales de los dos bloques y la distancia que recorre A sobre B. ¿Cuál es la pérdida de energía cinética del sistema?"
    },
    {
     "mota": "testua",
     "html": "[Figura del enunciado: dos momentos del movimiento. Momento inicial (izquierda): bloque A (masa <math display=\"inline\"><mi>m</mi></math>) sobre el bloque B (masa <math display=\"inline\"><mi>m</mi></math>), sobre un suelo rayado; coeficiente <math display=\"inline\"><mi>μ</mi></math> indicado entre los dos bloques; el bloque A se mueve con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> hacia la derecha. Momento final (derecha): A (masa <math display=\"inline\"><mi>m</mi></math>) sobre B (masa <math display=\"inline\"><mi>m</mi></math>); se marca la distancia <math display=\"inline\"><mi>d</mi></math> que recorre A sobre B; los dos bloques se mueven con velocidad <math display=\"inline\"><mi>v</mi></math> hacia la derecha.]"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "En la figura de arriba aparecen dos momentos, el inicial y el final, durante el movimiento del sistema. Considerado el sistema como un todo, aunque entre los dos bloques hay rozamiento, no ocurre así entre el bloque inferior y el suelo y, por tanto, en la dirección del movimiento la resultante de las fuerzas sobre el conjunto de los dos bloques es nula (las fuerzas de rozamiento que el bloque A ejerce sobre B y el bloque B sobre A se anulan porque cumplen la ley de acción y reacción). En estas situaciones, el momento lineal del sistema se mantendrá constante en la dirección del movimiento. Desde un punto de vista cualitativo, el bloque A empieza a frenarse a causa de la fuerza de rozamiento que actúa en sentido contrario a su movimiento, mientras que el bloque B es acelerado por la fuerza de rozamiento que A ejerce sobre él y que tira de él hacia la derecha. ¿Hasta cuándo? Hasta que las velocidades de los dos bloques se igualen y estén en reposo relativo. En ese momento, se estarán moviendo con velocidad <math display=\"inline\"><mi>v</mi></math>, tras haberse desplazado A una distancia <math display=\"inline\"><mi>d</mi></math> respecto de B. Por tanto, aplicando al sistema el principio de conservación del momento lineal, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/fd4c54756182c76d.svg\" alt=\"m v_0 = 2 m v #h(2em) arrow.r #h(2em) v = v_0 / 2\" style=\"width:15.256em;height:2.301em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por tanto, el sistema terminará moviéndose con velocidad uniforme sobre la mesa, moviéndose los dos bloques como si fueran uno solo."
    },
    {
     "mota": "testua",
     "html": "El cálculo de la distancia <math display=\"inline\"><mi>d</mi></math> que recorre A sobre B puede hacerse fácilmente teniendo en cuenta el teorema de la energía: la variación de la energía cinética del sistema es igual al trabajo realizado por el rozamiento:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/54aa225a430efc80.svg\" alt=\"Delta T = 1 / 2 \\( 2 m \\) (v_0 / 2)^2 - 1 / 2 m v_0^2 = \\( - mu m g \\) thin d #h(2em) arrow.r #h(2em) d = frac(v_0^2, 4 mu g)\" style=\"width:30.963em;height:3.006em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "[Obsérvese que el rozamiento actúa en sentido contrario al desplazamiento, y por eso es negativo el signo de su trabajo]."
    },
    {
     "mota": "testua",
     "html": "[Figura: bloque A (masa <math display=\"inline\"><mi>m</mi></math>) sobre el bloque B (masa <math display=\"inline\"><mi>m</mi></math>), sobre un suelo rayado; sobre el bloque superior se indica la fuerza de rozamiento <math display=\"inline\"><mrow><mi>−</mi><mi>μ</mi><mi>m</mi><mi>g</mi></mrow></math> hacia la izquierda y sobre el bloque inferior <math display=\"inline\"><mrow><mi>+</mi><mi>μ</mi><mi>m</mi><mi>g</mi></mrow></math> hacia la derecha.]"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Otro método</em>: usemos el formalismo vectorial para resolver el problema, estudiando el conjunto de fuerzas que actúa sobre cada uno de los dos cuerpos y estableciendo las condiciones del movimiento. En la figura de arriba se ve ese análisis. En ella solo hemos indicado las fuerzas que actúan horizontalmente sobre las masas superior e inferior, dando directamente sus valores en función del coeficiente de rozamiento <math display=\"inline\"><mi>μ</mi></math>. Las correspondientes ecuaciones del movimiento se obtienen de la aplicación directa de la segunda ley de Newton:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/1b6cf413a00064da.svg\" alt=\"m dot.double(x)_A = - mu m g #h(2em) arrow.r #h(2em) dot.double(x)_A = - mu g #h(2em) arrow.r #h(2em) dot(x)_A = - mu g t + C\" style=\"width:32.012em;height:1.313em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/f633d8b25dde4e28.svg\" alt=\"m dot.double(x)_B = + mu m g #h(2em) arrow.r #h(2em) dot.double(x)_B = + mu g #h(2em) arrow.r #h(2em) dot(x)_B = + mu g t + D\" style=\"width:32.073em;height:1.287em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Las constantes <math display=\"inline\"><mi>C</mi></math> y <math display=\"inline\"><mi>D</mi></math> se obtienen de las condiciones iniciales: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>A</mi><mn>0</mn></mrow></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>B</mi><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, de donde: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/bfe3eadf2c483af6.svg\" alt=\"dot(x)_A = v_0 - mu g t #h(2em) arrow.r #h(2em) x_A = v_0 t - 1 / 2 mu g t^2 + C&#x27;\" style=\"width:24.813em;height:2.560em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/4b9e569142ef04b2.svg\" alt=\"dot(x)_B = + mu g t #h(2em) arrow.r #h(2em) x_B = + 1 / 2 mu g t^2 + D&#x27;\" style=\"width:21.248em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "De nuevo, las constantes <math display=\"inline\"><msup><mi>C</mi><mo>′</mo></msup></math> y <math display=\"inline\"><msup><mi>D</mi><mo>′</mo></msup></math> se obtienen de las condiciones de contorno: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>x</mi><mrow><mi>A</mi><mn>0</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow><mi>B</mi><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, de donde: <math display=\"inline\"><mrow><msup><mi>C</mi><mo>′</mo></msup><mo>=</mo><msup><mi>D</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>. Es decir:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/528732e6f11d3098.svg\" alt=\"x_A = v_0 t - 1 / 2 mu g t^2 #h(2em) #h(2em) x_B = + 1 / 2 mu g t^2\" style=\"width:20.670em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "En teoría, estas ecuaciones del movimiento nos llevarían a los valores de la velocidad y de la posición de cada partícula, para tiempos muy grandes, pues tienden a <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math> en el caso de la masa superior y a <math display=\"inline\"><mrow><mi>+</mi><mi>∞</mi></mrow></math> en el de la inferior, y eso es falso. Nos falta imponer otra condición, que viene del análisis cualitativo del problema: los bloques se estarán moviendo uno respecto del otro hasta que estén en reposo relativo, momento en el que desaparece la fuerza de rozamiento y los bloques siguen juntos, sin cambiar ya su velocidad, pues entre el bloque inferior y el suelo no hay rozamiento. La condición anterior se refleja así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/f09124fbaeac07fe.svg\" alt=\"dot(x)_A = dot(x)_B #h(2em) arrow.r #h(2em) v_0 - mu g t = mu g t #h(2em) arrow.r #h(2em) t = frac(v_0, 2 mu g)\" style=\"width:27.678em;height:2.551em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Es decir, pasado el tiempo <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>μ</mi><mi>g</mi></mrow></mfrac></mrow></math>, las velocidades se igualan, llegando al siguiente valor:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>A</mi></msub><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>B</mi></msub><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir, la velocidad que habíamos obtenido antes. Asimismo, sustituyendo ese valor en las expresiones de las distancias recorridas hasta entonces por los dos bloques, llegamos a la expresión obtenida antes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><msub><mi>x</mi><mi>A</mi></msub><mo>−</mo><msub><mi>x</mi><mi>B</mi></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mo>−</mo><mi>μ</mi><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><mfrac><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mn>4</mn><mi>μ</mi><mi>g</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[Figura: sistema de ejes <math display=\"inline\"><mi>x</mi></math>-<math display=\"inline\"><mi>y</mi></math> con origen <math display=\"inline\"><mi>O</mi></math>. Bloque A (masa <math display=\"inline\"><mi>m</mi></math>) sobre el bloque B (masa <math display=\"inline\"><mi>m</mi></math>); la posición del extremo izquierdo de A es <math display=\"inline\"><msub><mi>x</mi><mi>A</mi></msub></math> y la del extremo izquierdo de B <math display=\"inline\"><msub><mi>x</mi><mi>B</mi></msub></math> (medidas con líneas de puntos sobre el eje <math display=\"inline\"><mi>y</mi></math>). Sobre A actúa la fuerza <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>A</mi></msub></math> hacia la izquierda y sobre B la fuerza <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>B</mi></msub></math> hacia la derecha.]"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Otro método más</em>: usemos el formalismo lagrangiano para llegar a las mismas ecuaciones del movimiento. El sistema tiene dos grados de libertad, <math display=\"inline\"><msub><mi>x</mi><mi>A</mi></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mi>B</mi></msub></math>, que aparecen en la figura de arriba. La fuerza que actúa sobre cada cuerpo en la dirección horizontal es la siguiente:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/f8aeb192c18b9ab0.svg\" alt=\"upright(bold(F))_A = - mu m g thin upright(bold(i)) #h(2em) #h(2em) upright(bold(F))_B = mu m g thin upright(bold(i))\" style=\"width:17.333em;height:1.290em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "En la dirección vertical no hay movimiento y, por tanto, no tendremos en cuenta esa variable. Las ecuaciones de Lagrange pueden escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><msub><mi>Q</mi><mi>j</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En nuestro caso, el segundo término lo forman únicamente las fuerzas de rozamiento, que son constantes (y no funciones de las coordenadas generalizadas, lo cual nos habría impedido seguir por este camino). Como condición inicial, estableceremos las siguientes:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/def9522fcd8a5f69.svg\" alt=\"x_(A 0) = 0 #h(2em) #h(2em) dot(x)_(A 0) = v_0\" style=\"width:13.366em;height:1.297em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/8fb8e8c3275d1a69.svg\" alt=\"x_(B 0) = 0 #h(2em) #h(2em) dot(x)_(B 0) = 0\" style=\"width:12.864em;height:1.297em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Los vectores de posición de los extremos izquierdos de las dos masas son estos: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>A</mi></msub><mo>=</mo><msub><mi>x</mi><mi>A</mi></msub><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>B</mi></msub><mo>=</mo><msub><mi>x</mi><mi>B</mi></msub><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> y, por tanto, las fuerzas generalizadas del segundo término para cada coordenada generalizada serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>Q</mi><mi>A</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>A</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>A</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>A</mi></msub></mrow></mfrac><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>B</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>A</mi></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mi>μ</mi><mi>m</mi><mi>g</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>Q</mi><mi>B</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>A</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>A</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>B</mi></msub></mrow></mfrac><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>B</mi></msub><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>B</mi></msub></mrow></mfrac><mo>=</mo><mi>+</mi><mi>μ</mi><mi>m</mi><mi>g</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por último, la energía cinética del sistema, como se ve fácilmente, es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>A</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>B</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de donde los primeros términos de las ecuaciones de Lagrange se calculan enseguida:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/cac81be6c589da51.svg\" alt=\"frac(partial T, partial dot(x)_A) = m dot(x)_A #h(2em) #h(2em) frac(partial T, partial x_A) = 0\" style=\"width:15.635em;height:2.904em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/0110093345101557.svg\" alt=\"frac(partial T, partial dot(x)_B) = m dot(x)_B #h(2em) #h(2em) frac(partial T, partial x_B) = 0\" style=\"width:15.645em;height:2.904em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y por último:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/943642d260edc444.svg\" alt=\"m dot.double(x)_A = - mu m g #h(2em) arrow.r #h(2em) dot.double(x)_A = - mu g\" style=\"width:18.329em;height:1.275em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/22e834ea7d0ae8cc.svg\" alt=\"m dot.double(x)_B = + mu m g #h(2em) arrow.r #h(2em) dot.double(x)_B = + mu g\" style=\"width:18.335em;height:1.275em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "ecuaciones ya conocidas y que, por tanto, nos llevan a los mismos resultados."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una persona de masa <math display=\"inline\"><mi>m</mi></math> desciende una distancia <math display=\"inline\"><mi>L</mi></math> en un ascensor. En el primer tercio de la distancia, la aceleración del descenso es constante; en el segundo tercio, la velocidad se mantiene constante; y en el último tercio, el ascensor sufre una fuerza de frenado que es un agente constante. Si el tiempo total del descenso es igual al que necesita una partícula en caída libre para recorrer una distancia <math display=\"inline\"><mrow><mn>4</mn><mi>L</mi></mrow></math>, ¿cuál será la fuerza que la persona ejerce sobre el ascensor en el primer tramo del descenso? [<em>Observación</em>: el ascensor parte del reposo y termina en reposo]."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mi>a</mi></math> la aceleración constante del descenso en el primer tramo, cuya duración supondremos <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math>. En ese tiempo, el ascensor recorre una distancia <math display=\"inline\"><mrow><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math> y alcanza una velocidad <math display=\"inline\"><mi>v</mi></math>. El segundo tramo, de longitud <math display=\"inline\"><mrow><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math>, lo recorre con velocidad constante <math display=\"inline\"><mi>v</mi></math>, con duración <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>. En el último tramo, de la misma longitud que los anteriores, sufre una fuerza de frenado constante, que le provoca una deceleración igualmente constante, a la que llamaremos <math display=\"inline\"><msup><mi>a</mi><mo>′</mo></msup></math>. Pero como la longitud del tramo decelerador es igual a la del primer tramo acelerador y las condiciones de contorno son las mismas, aunque inversas, esta aceleración <math display=\"inline\"><msup><mi>a</mi><mo>′</mo></msup></math> (en módulo) tendrá que coincidir con la aceleración <math display=\"inline\"><mi>a</mi></math> del primer tramo: <math display=\"inline\"><mrow><msup><mi>a</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi></mrow></math>, y, por tanto, las duraciones de los dos tramos también coincidirán."
    },
    {
     "mota": "testua",
     "html": "Para el primer tramo escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/5a0e153e28e0ea98.svg\" alt=\"L / 3 = 1 / 2 a t_1^2 #h(2em) v = a t_1\" style=\"width:11.133em;height:2.606em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Para el segundo tramo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>L</mi><mn>3</mn></mfrac><mo>=</mo><mi>v</mi><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mi>a</mi><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entre los dos conjuntos de ecuaciones podemos obtener una relación entre <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>. Este es el resultado:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>t</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el tercer tramo se cumple la misma relación que en el primero. Por tanto, si sumamos las ecuaciones que representan los recorridos de los tres tramos, llegaremos a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>a</mi><msubsup><mi>t</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mi>a</mi><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn><mi>a</mi><msubsup><mi>t</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La condición indicada en el texto, siendo <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>2</mn><msub><mi>t</mi><mn>1</mn></msub><mo>+</mo><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn><msub><mi>t</mi><mn>2</mn></msub></mrow></math>, se escribe así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>4</mn><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>25</mn><mn>2</mn></mfrac><mi>g</mi><msubsup><mi>t</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De estas dos últimas relaciones se obtiene enseguida el valor de la aceleración <math display=\"inline\"><mi>a</mi></math> en función de la aceleración de la gravedad <math display=\"inline\"><mi>g</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mn>25</mn><mn>48</mn></mfrac><mi>g</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sobre la persona que va en el ascensor, además de la fuerza de la gravedad (dirigida hacia abajo), actúa la reacción que el suelo del ascensor ejerce sobre ella, a la que llamaremos en módulo <math display=\"inline\"><mi>N</mi></math>, y que actúa hacia arriba. Aplicando la segunda ley de Newton, obtendremos lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/01f64726d05391ad.svg\" alt=\"m g - N = m a = 25 / 48 m g #h(2em) arrow.r #h(2em) N = 23 / 48 m g\" style=\"width:23.355em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "El valor <math display=\"inline\"><mi>N</mi></math> de esta fuerza de reacción coincide en módulo con la fuerza que la persona ejerce sobre el ascensor."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Sobre una mesa horizontal lisa hay en reposo un sistema formado por dos partículas de masa <math display=\"inline\"><mi>m</mi></math>, unidas por un muelle de constante <math display=\"inline\"><mi>k</mi></math> y longitud <math display=\"inline\"><mi>l</mi></math> igual a la natural. Como se indica en la figura, sobre la partícula de la izquierda actúa otra partícula de la misma masa <math display=\"inline\"><mi>m</mi></math>, que se mueve con velocidad <math display=\"inline\"><mi>v</mi></math>. Tras la colisión, las dos partículas (proyectil y blanco) quedan unidas y el sistema empieza a moverse. Suponiendo que todo el proceso ocurre sobre la misma recta, usa los principios de conservación de la mecánica para conocer: a) la velocidad <math display=\"inline\"><mi>V</mi></math> del centro de masas del sistema, y b) la deformación máxima <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math> del muelle durante el movimiento."
    },
    {
     "mota": "testua",
     "html": "<strong>Figura:</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Situación <math display=\"inline\"><mrow><mi>t</mi><mo>≤</mo><mn>0</mn></mrow></math>: una partícula <math display=\"inline\"><mi>m</mi></math> con el vector velocidad <math display=\"inline\"><mi>v</mi></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "(flecha hacia la derecha); a su derecha, otra partícula <math display=\"inline\"><mi>m</mi></math> unida mediante un muelle (rotulado <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><mi>l</mi></mrow></math>) a una tercera partícula <math display=\"inline\"><mi>m</mi></math>. - Situación <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: una partícula <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> (punto relleno) con el vector velocidad <math display=\"inline\"><msub><mi>v</mi><mn>12</mn></msub></math> (flecha hacia la derecha), unida mediante un muelle (deformación rotulada <math display=\"inline\"><mi>x</mi></math>) a una partícula <math display=\"inline\"><mi>m</mi></math> con el vector velocidad <math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math> (flecha hacia la derecha)."
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "En la figura de arriba aparecen dos estados del sistema, el anterior a la colisión y el posterior, en cualquier instante siguiente. En ella, la longitud <math display=\"inline\"><mi>x</mi></math> indica la deformación del muelle a partir de su longitud natural. Como las fuerzas que el muelle ejerce sobre las partículas de sus extremos cumplen la ley de acción y reacción y las fuerzas que se producen durante la colisión cumplen la misma ley, el sistema completo es un sistema aislado y, por tanto, como no hay fuerzas externas al sistema, el momento lineal total se mantendrá constante. Este principio de conservación, aplicado a los instantes anterior y posterior a la colisión, puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/24a992f5bb130482.svg\" alt=\"m v = \\( 2 m \\) v_12 = \\( 3 m \\) V #h(2em) arrow.r #h(2em) v_12 = v / 2 #h(2em) V = v / 3\" style=\"width:27.640em;height:2.326em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi>v</mi><mn>12</mn></msub></math> es la velocidad conjunta de las dos partículas (proyectil y blanco) tras la colisión y <math display=\"inline\"><mi>V</mi></math> la velocidad del centro de masas del sistema. La descripción de la colisión es esta: suponiendo que la colisión ocurre instantáneamente, la partícula de la derecha del muelle aún está en reposo tras la colisión, mientras que la masa conjunta <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> adquiere la velocidad <math display=\"inline\"><msub><mi>v</mi><mn>12</mn></msub></math>, manteniéndose la longitud <math display=\"inline\"><mi>l</mi></math> del muelle. Con el paso del tiempo, la velocidad de las partículas cambiará, frenándose la de la izquierda y acelerándose la de la derecha, a causa de las fuerzas iguales y de sentido contrario que ejerce el muelle, que en una primera fase irá contrayéndose. Esa contracción continuará hasta alcanzar la deformación máxima <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math>, momento en el que las dos partículas del sistema se moverán con la misma velocidad (que coincidirá con la velocidad del centro de masas) y, a partir de ahí, el muelle empezará a alargarse hasta alcanzar la deformación máxima <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math> de signo contrario pero igual valor, y el ciclo seguirá repitiéndose continuamente."
    },
    {
     "mota": "testua",
     "html": "En la colisión totalmente inelástica que lleva a la formación de la partícula de masa <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math>, el momento lineal se conserva pero la energía no. Pero una vez terminado el proceso de colisión, la energía mecánica se mantendrá constante, pues las únicas fuerzas que actúan serán las fuerzas conservativas generadas por el muelle. Apliquemos este principio de conservación en tres situaciones: el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> posterior a la colisión, un instante cualquiera posterior, cuando la deformación del muelle es <math display=\"inline\"><mi>x</mi></math>, y el instante en que se alcanza la deformación máxima <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math>, instante en que las dos partículas de los extremos se mueven con la misma velocidad, es decir, con la velocidad del centro de masas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>v</mi><mn>12</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>V</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>v</mi><mn>12</mn><mo>′</mo></msubsup><msup><mspace width=\"0.222em\"></mspace><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mn>3</mn><mo>′</mo></msubsup><msup><mspace width=\"0.222em\"></mspace><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>V</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la expresión anterior, los valores <math display=\"inline\"><msubsup><mi>v</mi><mn>12</mn><mo>′</mo></msubsup></math> y <math display=\"inline\"><msubsup><mi>v</mi><mn>3</mn><mo>′</mo></msubsup></math> representan las velocidades de las partículas respecto del centro de masas, valores que no nos interesarán, pues solo usaremos las relaciones correspondientes al instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> y la que corresponde al momento en que se produce la deformación máxima <math display=\"inline\"><msub><mi>x</mi><mi mathvariant=\"normal\">max</mi></msub></math>. Sustituyendo los valores:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/6c4c7f969da1463e.svg\" alt=\"1 / 2 \\( 2 m \\) (v / 2)^2 = 1 / 2 \\( 3 m \\) (v / 3)^2 + 1 / 2 k thin x_max^2 #h(2em) arrow.r #h(2em) x_max = sqrt(frac(m, 6 k)) thin v\" style=\"width:32.160em;height:3.046em\" loading=\"lazy\">"
    }
   ]
  }
 ]
};
