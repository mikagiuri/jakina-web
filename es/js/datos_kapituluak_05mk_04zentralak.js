/* JAKINA · kapitulua «B9.4 - Indar zentralak» (05mk_04zentralak), desde edicion2/kapituluak/05mk_04zentralak/05mk_04zentralak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_04zentralak"] = {
 "gakoa": "05mk_04zentralak",
 "titulua": "JAKINA - B9 - Mecánica clásica - 4/10",
 "azala": "B9.4 - Fuerzas centrales",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_04zentralak/05mk_04zentralak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Fuerzas centrales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las fuerzas centrales han tenido una importancia especial en la historia de la física: basta recordar el éxito que tuvo Newton al aplicar su ley de gravitación universal al sistema solar (por ejemplo, al predecir el regreso del cometa que hoy lleva el nombre de Halley<span class=\"j-oin\">[Los astrónomos Alexis Clairaut, Jérôme Lalande y Nicole-Reine Lepaute calcularon que el cometa volvería a verse en 1759.]</span>). También en la física cuántica, entre los primeros problemas estudiados estuvo el movimiento bajo fuerzas centrales, en el caso del átomo de hidrógeno. Hay que reconocer que fue muy favorable que las fuerzas que aparecen en esos problemas fundamentales fueran centrales, porque estas son muy especiales. En efecto, cumplen propiedades muy particulares, empezando por las leyes de conservación de la energía mecánica y del momento angular. Es más, en los problemas citados aparecen fuerzas newtonianas y estas (junto con las armónicas) son los campos de fuerza central más simples. Habría que decir que son los más simples y también demasiado especiales, pues algunas de sus propiedades no se cumplen con las fuerzas centrales generales (véase el teorema de Bertrand en la página 184)."
    },
    {
     "mota": "testua",
     "html": "Consideremos los dos problemas siguientes:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Una única partícula de masa <math display=\"inline\"><mi>m</mi></math> que se mueve en un campo de fuerza central. Si elegimos el origen del sistema de referencia inercial en el polo de fuerzas (como hicimos en la sección 1.3.5) y el vector de posición de la partícula es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>, la fuerza es de la forma:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>r</mi></mfrac><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Así pues, la ecuación del movimiento es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Un sistema aislado de dos cuerpos en el que la fuerza que cada partícula ejerce sobre la otra es central: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "Como hicimos en la sección 1.5.6, si escribimos la ecuación de la posición relativa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></mrow></math>, recuperamos (4.2), en función de la masa reducida <math display=\"inline\"><mi>m</mi></math> y de la fuerza <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>21</mn></msub></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Una partícula en un campo de fuerza central y el problema de dos partículas.",
     "src": "../media/irudiak/8e93599b33ac6041.svg",
     "zabalera": 358
    },
    {
     "mota": "testua",
     "html": "Por tanto, estos dos problemas son equivalentes desde el punto de vista matemático y los estudiaremos a la vez. Hay que tener presente, sin embargo, que en el primer caso las magnitudes <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> de la ecuación (4.2) son la masa y la posición de la única partícula, y en el segundo la masa reducida del sistema y la posición relativa entre las dos partículas."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Constantes del movimiento y soluciones",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Conservación del momento angular"
    },
    {
     "mota": "testua",
     "html": "Como la fuerza es central, en el ejercicio 1.11 demostramos que el momento angular respecto al polo (es decir, respecto al punto <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mn>0</mn></mrow></math>) es una constante del movimiento y que, en consecuencia, la partícula se mueve en un plano que pasa por el polo y es perpendicular al momento angular. Para facilitar el análisis, si elegimos el plano coordenado <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> como el del movimiento y usamos en él coordenadas polares, el momento angular es <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> (véase el ejercicio 1.10)."
    },
    {
     "mota": "irudia",
     "oina": "Momento angular y coordenadas polares en el plano del movimiento.",
     "src": "../media/irudiak/fe45ef79c94ae8b3.svg",
     "zabalera": 367
    },
    {
     "mota": "testua",
     "html": "Además, la velocidad areolar (1.59) es <math display=\"block\"><mrow><msub><mi>v</mi><mi>a</mi></msub><mo>=</mo><mover><mi>S</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mi>L</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y, al ser una constante del movimiento, se cumple la <strong>segunda ley de Kepler</strong>: <em>El segmento que une el Sol y un planeta barre áreas iguales en tiempos iguales</em>. Esta es, pues, la más general de las leyes de Kepler, ya que se cumple no solo en el sistema solar, sino en todos los campos de fuerza central, cambiando las palabras «Sol» y «planeta». (Además, Kepler descubrió esta ley antes que las otras dos.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Conservación de la energía mecánica"
    },
    {
     "mota": "testua",
     "html": "Por otra parte, sabemos que los campos de fuerza central son siempre conservativos (recuérdese la sección 1.3.5 y el ejercicio B.25): <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>r</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Área barrida por el vector de posición en el intervalo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>.",
     "src": "../media/irudiak/d4a7bf82503c7bdc.svg",
     "zabalera": 114
    },
    {
     "mota": "testua",
     "html": "Por tanto, las ecuaciones del movimiento plano admiten dos constantes del movimiento: (4.4) la componente <math display=\"inline\"><mi>z</mi></math> del momento angular y (4.6) la energía mecánica correspondiente a la energía potencial, es decir:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si elegimos el semieje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> positivo en el sentido del momento angular, por la expresión (4.4) tenemos siempre <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>≥</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>≥</mo><mn>0</mn></mrow></math>. Si en un instante <math display=\"inline\"><mrow><mi>L</mi><mo>∝</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, será así siempre y estamos en el caso particular correspondiente al movimiento unidimensional; en caso contrario, siempre tenemos <math display=\"inline\"><mrow><mi>L</mi><mo>∝</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que las ecuaciones del movimiento en coordenadas polares son las siguientes:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>m</mi><mi>r</mi><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Movimiento unidimensional"
    },
    {
     "mota": "testua",
     "html": "Si en un instante <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math>, lo será en todos los instantes y, como <math display=\"inline\"><mi>ϕ</mi></math> será constante, el movimiento tendrá lugar en una recta que pasa por el polo de fuerzas: la velocidad y el vector de posición serán siempre paralelos y la ecuación del movimiento (4.10) y la ley de conservación (4.8) se escriben así: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Estas ecuaciones tienen la misma estructura que (1.104)–(1.105) y se resuelven de la misma manera: mediante el método de separación de variables de la sección 1.4.3. En efecto, de (4.13), tras despejar la velocidad <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> y multiplicar por <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math>, se obtiene <math display=\"block\"><mrow><mi>d</mi><mi>r</mi><mo>=</mo><mi>±</mi><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mi>d</mi><mi>t</mi></mrow></math> y de aquí, separando las variables, <math display=\"block\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>±</mi><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mi>.</mi></mrow></math> En principio, si en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> la distancia polar es <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math>, la ecuación diferencial anterior se resuelve directamente mediante una integral: <math display=\"block\"><mrow><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mo>±</mo><msubsup><mo>∫</mo><msub><mi>r</mi><mn>0</mn></msub><mi>r</mi></msubsup><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mi>.</mi></mrow></math> En la práctica, esa integral puede ser demasiado difícil de calcular de forma exacta y, a menudo, habrá que recurrir a aproximaciones o a métodos numéricos para resolverla y llegar, a partir del resultado <math display=\"inline\"><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> así obtenido, a la solución <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema unidimensional equivalente"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>, despejando la velocidad angular <math display=\"block\"><mrow><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>L</mi><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> de la ley de conservación (4.7) del momento angular, la ecuación (4.10) del movimiento radial se escribe así: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>m</mi><mi>r</mi><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Por qué se llama <strong>fuerza centrífuga</strong>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mi>r</mi><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "al término?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ahora, si llamamos <strong>energía potencial efectiva</strong> a la suma de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y de la energía potencial centrífuga <math display=\"inline\"><mrow><msup><mi>L</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "la ecuación (4.18) del movimiento radial se escribe así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msubsup><mi>V</mi><mi>e</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Desde el punto de vista de la estructura matemática, esta ecuación y (1.104) —o (4.12)— son totalmente idénticas. Por tanto, la ecuación (4.21) describe también la evolución de una partícula que se mueve en una línea recta en el potencial <math display=\"inline\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (y no en el <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> original). (Hay una pequeña diferencia: al ser una distancia, <math display=\"inline\"><mi>r</mi></math> no puede ser negativa en el problema inicial.)"
    },
    {
     "mota": "testua",
     "html": "Supongamos que en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> la partícula estaba en el punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo>,</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Para saber dónde está en todos los demás instantes resolveremos las ecuaciones del movimiento en dos pasos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Movimiento radial"
    },
    {
     "mota": "testua",
     "html": "Si resolvemos el problema unidimensional equivalente, se conocerá el movimiento radial del problema plano original. Para ello nos valdremos de la conservación de la energía mecánica del problema equivalente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por supuesto, esta última (4.8) es la energía mecánica, tras eliminar la velocidad angular (4.7) mediante la ley de conservación. Ahora, si usamos el método de separación de variables de la sección 1.4.3, la ecuación del movimiento radial es <math display=\"block\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>±</mi><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac></mrow></math> —recuérdese (1.109)—. La solución de esta, correspondiente a (1.111), se obtiene mediante una integral y usando la condición inicial <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math>: <math display=\"block\"><mrow><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>±</mi><msubsup><mo>∫</mo><msub><mi>r</mi><mn>0</mn></msub><mi>r</mi></msubsup><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mi>.</mi></mrow></math> Si resolvemos esta integral conoceremos el tiempo <math display=\"inline\"><mi>t</mi></math> en función de la distancia <math display=\"inline\"><mi>r</mi></math> y, invirtiendo esa función, la solución <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por supuesto, para realizar esas dos operaciones matemáticas habrá que recurrir muchas veces a métodos aproximados (quizá a un método numérico adecuado<span class=\"j-oin\">[Véase la página <a href=\"http://tp.lc.ehu.eus/jma/mekanika/zentralak/zentrala.html\" target=\"_blank\" rel=\"noopener\"><code>http://tp.lc.ehu.eus/jma/mekanika/zentralak/zentrala.html</code></a>.]</span>), ya que en el caso de la mayoría de los potenciales <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hacerlo de forma exacta es difícil o imposible."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Movimiento angular"
    },
    {
     "mota": "testua",
     "html": "Cuando se conoce la solución <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del movimiento radial, si en la ecuación (4.17) separamos las variables y se usa la condición inicial <math display=\"block\"><mrow><mi>d</mi><mi>ϕ</mi><mo>=</mo><mfrac><mi>L</mi><mrow><mi>m</mi><msup><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>t</mi><mo>,</mo></mrow></math> y <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ϕ</mi><mn>0</mn></msub></mrow></math>, se obtiene la solución del movimiento angular: <math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mfrac><mi>L</mi><mrow><mi>m</mi><msup><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math> Si resolvemos la integral (quizá de forma aproximada), se conocerá el ángulo polar <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la solución de las ecuaciones del movimiento será <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de la órbita"
    },
    {
     "mota": "testua",
     "html": "Como hemos dicho, para conocer la posición de la partícula en todos los instantes hay que resolver las integrales (4.24) y (4.26). Como para ello hay que recurrir muy a menudo a métodos aproximados, pueden ser útiles otros métodos que dan información parcial pero interesante. Uno de ellos es calcular la ecuación de la órbita —es decir, la ecuación de la trayectoria de la partícula—: así sabremos por dónde se mueve la partícula, aunque no conozcamos en qué punto de la órbita está en cada instante."
    },
    {
     "mota": "testua",
     "html": "La ecuación de la órbita se obtiene eliminando el tiempo de las ecuaciones del movimiento, y esto se hace fácilmente si en (4.25) sustituimos el <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> que se obtiene de (4.23): <math display=\"block\"><mrow><mi>d</mi><mi>ϕ</mi><mo>=</mo><mi>±</mi><mfrac><mi>L</mi><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> y, usando las condiciones iniciales <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ϕ</mi><mn>0</mn></msub></mrow></math>, la ecuación de la órbita se escribe así: <math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><mi>±</mi><msubsup><mo>∫</mo><msub><mi>r</mi><mn>0</mn></msub><mi>r</mi></msubsup><mfrac><mrow><mi>L</mi><mi>d</mi><mi>r</mi></mrow><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mrow></mfrac><mi>.</mi></mrow></math> La función <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (o la inversa <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) que se obtiene tras resolver la integral es la ecuación de la órbita. Por desgracia, esta integral tampoco es siempre sencilla y, para estudiarla un poco, hagamos el siguiente cambio de variable, útil a veces en este tema: <math display=\"block\"><mrow><mi>u</mi><mo>≡</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la condición inicial <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> y la constante de integración <math display=\"inline\"><mi>δ</mi></math> para demostrar que la ecuación de la órbita se escribe de las dos formas equivalentes siguientes:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><mi>∓</mi><msubsup><mo>∫</mo><mrow><mn>1</mn><mi>/</mi><msub><mi>r</mi><mn>0</mn></msub></mrow><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></msubsup><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mi>∓</mi><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, consideremos energías potenciales y fuerzas del tipo <math display=\"block\"><mrow><mi>V</mi><mo>∝</mo><msup><mi>u</mi><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><msup><mi>r</mi><mi>n</mi></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>∝</mo><msup><mi>u</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msup><mi>r</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>≠</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La ecuación (4.30) de la órbita puede resolverse mediante funciones trigonométricas circulares e hiperbólicas en los casos <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> y, usando integrales elípticas (véase la sección B.5), cuando <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn></mrow></math>. Además, puede resolverse mediante funciones elementales en algunos otros casos; pero, como veremos en algunos problemas, solo para ciertos valores especiales de la energía mecánica."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que en los casos <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> las integrales (4.30)–(4.31) pueden resolverse usando lo siguiente (si se cumplen las condiciones entre paréntesis):"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><msqrt><mrow><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi></mrow></msqrt></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mrow><mi>−</mi><mi>a</mi></mrow></msqrt></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo><mi mathvariant=\"normal\">Δ</mi><mo>≡</mo><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fórmula de Binet"
    },
    {
     "mota": "testua",
     "html": "Derivando la ecuación (4.31) de la órbita respecto a <math display=\"inline\"><mi>ϕ</mi></math>, la ecuación de la órbita para los valores <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mi>E</mi></math>, usando la notación <math display=\"inline\"><mi>ϕ</mi></math> para la derivada respecto al ángulo, se escribe así: <math display=\"inline\"><mrow><mi>′</mi><mo>≡</mo><mi>d</mi><mi>/</mi><mi>d</mi><mi>ϕ</mi></mrow></math> <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Para obtener la ecuación de las órbitas de todas las energías correspondientes a un <math display=\"inline\"><mi>L</mi></math>, basta derivar el resultado (4.34) respecto a la variable <math display=\"inline\"><mi>ϕ</mi></math> y, en consecuencia, la ecuación de la órbita queda así si la fuerza <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se escribe mediante la variable <math display=\"inline\"><mi>u</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mi>m</mi><mrow><msup><mi>L</mi><mn>2</mn></msup><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En algunos casos esta ecuación puede resolverse para hallar la órbita y, a la inversa, si se conoce la ecuación <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la órbita, de aquí puede obtenerse la ley de fuerza: <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mfrac><msup><mi>L</mi><mn>2</mn></msup><mi>m</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>u</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> (Véase también el problema 4.136.)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos que <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>ε</mi></math> y <math display=\"inline\"><mi>δ</mi></math> son constantes. Demuestra que si la ecuación de la órbita es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>±</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> (es decir, como veremos más adelante, si es una de las curvas cónicas que tienen el polo de fuerzas como foco), la fuerza es newtoniana: <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>∓</mi><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mi>∓</mi><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Estabilidad de las órbitas circulares"
    },
    {
     "mota": "testua",
     "html": "Para ver la utilidad de la energía potencial efectiva, estudiemos cuándo pueden existir órbitas circulares<span class=\"j-oin\">[El centro de estas órbitas circulares es el polo de fuerzas; pero puede haber otras: véase el problema 4.7.]</span> en campos de fuerza central y cuándo son estables."
    },
    {
     "mota": "testua",
     "html": "En el problema unidimensional equivalente, las soluciones más sencillas son los puntos de equilibrio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, que en el problema original son órbitas circulares (aunque también puede haber órbitas circulares cuyo centro no esté en el polo de fuerzas, como veremos en el problema 4.7). En los problemas unidimensionales equivalentes podemos usar, pues, lo aprendido en la sección 1.4.6, así que la solución <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> se hallará en los puntos extremos de la energía potencial efectiva: <math display=\"block\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>3</mn></msubsup></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>3</mn></msubsup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que en las órbitas circulares bajo fuerzas centrales la aceleración tangencial es cero. Comprueba que la ecuación (4.37) expresa que, en esos movimientos circulares uniformes, la fuerza y la masa por la aceleración centrípeta son iguales."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por cada raíz (positiva) de la ecuación (4.37) hay un punto de equilibrio del problema unidimensional, ya que ahí la fuerza es cero; en el problema plano tenemos una órbita circular y la fuerza <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> es opuesta a la fuerza centrífuga, es decir, a la masa por la aceleración centrípeta. Esas soluciones serán estables cuando el punto extremo sea un mínimo relativo, es decir, cuando se cumplan (4.37) y lo siguiente<span class=\"j-oin\">[En rigor, aquí solo hemos demostrado la estabilidad frente a perturbaciones radiales que no cambian el momento angular; pero, como veremos en el problema 4.19, el resultado es correcto para todas las perturbaciones pequeñas.]</span>: <math display=\"block\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>4</mn></msubsup></mrow></mfrac><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mn>0</mn></msub><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>3</mn><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como aplicación, consideremos potenciales centrales de estructura sencilla <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math>. El radio de las órbitas circulares viene dado por la condición (4.37): <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mi>k</mi></mrow><msubsup><mi>r</mi><mn>0</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msubsup></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>3</mn></msubsup></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mn>0</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>k</mi><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> Por tanto, si <math display=\"inline\"><mrow><mi>n</mi><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>2</mn></mrow></math>, para cada valor <math display=\"inline\"><mi>L</mi></math> del momento angular hay una órbita circular."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es el significado físico de la condición <math display=\"inline\"><mrow><mi>n</mi><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La condición (4.38) que debe cumplirse para que la órbita circular sea estable queda así: <math display=\"block\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>n</mi><mi>k</mi></mrow><msubsup><mi>r</mi><mn>0</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msubsup></mfrac><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> En consecuencia, <em>en las energías potenciales centrales de la forma <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math> con <math display=\"inline\"><mrow><mi>k</mi><mi>n</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, las órbitas circulares son estables cuando <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mn>2</mn></mrow></math></em>."
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora que, mientras la partícula describe una órbita circular estable, se le aplica un pequeño impulso radial. Si desarrollamos la conservación de la energía mecánica en torno a la órbita circular, se obtiene <math display=\"block\"><mrow><mi>E</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> y su derivada respecto al tiempo será la ecuación aproximada del movimiento radial: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Si aquí hacemos <math display=\"inline\"><mrow><mi>q</mi><mo>≡</mo><mi>r</mi><mo>−</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math>, vemos que las pequeñas oscilaciones radiales en torno a la órbita circular son armónicas y que la frecuencia angular de ese movimiento es la que aparece en el siguiente resultado: <math display=\"block\"><mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup><mi>q</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><msqrt><mfrac><mrow><msubsup><mi>V</mi><mi>e</mi><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>m</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>=</mo><msqrt><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></mrow><mrow><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msubsup></mrow></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Véanse también los problemas 4.20 y 4.139.)"
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Fuerzas newtonianas: el problema de Kepler",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Entre los campos de fuerza central, los más importantes en física son los newtonianos, entre los cuales están los gravitatorios y los electrostáticos. Como hemos dicho antes, la fuerza es newtoniana si es inversamente proporcional al cuadrado de la distancia: <math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>∓</mi><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>. Por tanto, por la relación (4.6), un campo de fuerza central será newtoniano si la energía potencial (1.83) es de la forma siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Según el signo de la constante de proporcionalidad <math display=\"inline\"><mi>k</mi></math>, tenemos dos tipos de fuerzas newtonianas:"
    },
    {
     "mota": "testua",
     "html": "<strong>Fuerza atractiva</strong>  cuando <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. Por ejemplo, en la ley de gravitación universal de Newton, que describe la atracción gravitatoria entre dos partículas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Fuerza repulsiva</strong>  cuando <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math>. Por ejemplo, según la ley de Coulomb, en la interacción electrostática entre dos cargas"
    },
    {
     "mota": "testua",
     "html": "La constante <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac></mrow></math> es negativa si las dos cargas tienen el mismo signo."
    },
    {
     "mota": "irudia",
     "oina": "Energía potencial efectiva. (a) Fuerza atractiva. (b) Fuerza repulsiva<span class=\"j-oin\">[Véanse las animaciones\n    <a href=\"http://tp.lc.ehu.eus/jma/mekanika/zentralak/kepler.html\" target=\"_blank\" rel=\"noopener\"><code>.../kepler.html</code></a> y\n    <a href=\"http://tp.lc.ehu.eus/jma/mekanika/zentralak/erlatiboa.html\" target=\"_blank\" rel=\"noopener\"><code>.../erlatiboa.html</code></a>.]</span>",
     "src": "../media/irudiak/d2aa3f02abac063f.svg",
     "zabalera": 466
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energía potencial efectiva"
    },
    {
     "mota": "testua",
     "html": "En el caso de las fuerzas newtonianas, la energía potencial efectiva (4.20)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es la siguiente. Está claro que los dos ejes son asíntotas, <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mn>0</mn><mo>+</mo></mrow></munder><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>+</mi><mi>∞</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mi>+</mi><mi>∞</mi></mrow></munder><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y, para hallar los extremos, calculemos dónde se anula la derivada: <math display=\"block\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mo>≡</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mi>k</mi></mrow></mfrac><mi>.</mi></mrow></math> Como las distancias no son negativas, está claro que tenemos dos casos."
    },
    {
     "mota": "testua",
     "html": "En el caso de las fuerzas atractivas, la energía potencial efectiva tiene un mínimo en el punto <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> con el valor siguiente: <math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mo>≡</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><msub><mi>r</mi><mn>0</mn></msub></mrow></mfrac><mo>&lt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que en el punto <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math> hay un mínimo de la energía potencial efectiva y deduce que su gráfica es la que aparece a la izquierda de la figura 4.5."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la fuerza es repulsiva, <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, la energía potencial efectiva es positiva (<math display=\"inline\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>) y monótona decreciente (<math display=\"inline\"><mrow><msubsup><mi>V</mi><mi>e</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>), como se muestra a la derecha de la figura 4.5."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de la órbita"
    },
    {
     "mota": "testua",
     "html": "En el caso de las fuerzas newtonianas, la ecuación de la órbita puede resolverse de muchas maneras sencillas (véanse, por ejemplo, [46] y el problema 4.34). Aquí usaremos la integral (4.33) para calcular (4.30). Para empezar, la energía potencial efectiva cumple siempre la desigualdad <math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>: cuando la fuerza es atractiva, <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> es el valor mínimo de la energía potencial efectiva y, si la fuerza es repulsiva, se cumple la desigualdad más estricta <math display=\"inline\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mo>&gt;</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math>. Para la energía mecánica tenemos <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> y, por tanto, las constantes de la integral (4.33) serán las siguientes en esta aplicación: <math display=\"block\"><mrow><mi>a</mi><mo>≡</mo><mi>−</mi><mn>1</mn><mo>&lt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>k</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>c</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mo>≡</mo><mfrac><mrow><mn>4</mn><msup><mi>m</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> Así pues, (4.31) se escribe de este modo: <math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mi>±</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>u</mi><mo>−</mo><mfrac><mrow><mi>m</mi><mi>k</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac></mrow><mrow><mfrac><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Para simplificar esta expresión, definiremos dos parámetros de la órbita: <math display=\"block\"><mrow><mi>ε</mi><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac></mrow></msqrt></mrow></math> la <strong>excentricidad</strong> y <math display=\"block\"><mrow><mi>p</mi><mo>≡</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac></mrow></math> el <strong>parámetro focal</strong>, conocido en astronomía como <em>semi-latus rectum</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la excentricidad <math display=\"inline\"><mi>ε</mi></math> es siempre real y que, cuando la fuerza es atractiva, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Recordando que la función coseno es par, el resultado (4.54) se escribe como <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>p</mi></mfrac></mrow></math> y, deshaciendo el cambio de variable <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>, <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mi>P</mi></math> posición del pericentro con las opciones (4.58) y (4.59).",
     "src": "../media/irudiak/bfb3777a53757850.svg",
     "zabalera": 363
    },
    {
     "mota": "testua",
     "html": "Como los parámetros <math display=\"inline\"><mi>ε</mi></math> y <math display=\"inline\"><mi>p</mi></math> no son negativos, el valor más pequeño de la distancia <math display=\"inline\"><mi>r</mi></math> (que, como veremos más adelante, se da en el pericentro) se obtiene cuando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> —es decir, en la dirección <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mi>δ</mi></mrow></math>—. En consecuencia, si elegimos nuestro eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> de modo que pase por dicho pericentro, ahí tendremos <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math> y la ecuación de la órbita"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>±</mo><mn>1</mn></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "será la siguiente, donde el signo <math display=\"inline\"><mrow><mi>+</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> debe elegirse en el caso de la fuerza atractiva (repulsiva)."
    },
    {
     "mota": "testua",
     "html": "Para escribir la ecuación en coordenadas cartesianas, usaremos las ecuaciones de transformación (1.4)–(1.5) para eliminar la raíz cuadrada de la expresión equivalente <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>ε</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>±</mo><mi>r</mi><mo>=</mo><mi>ε</mi><mi>x</mi><mo>±</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math></span>: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><mi>ε</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, o bien <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ε</mi><mi>p</mi><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>p</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa las expresiones (4.35) y (4.34) de la fórmula de Binet para obtener de nuevo la ecuación (4.57) de la órbita."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Órbitas de Kepler",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuando la energía es negativa, las órbitas newtonianas están acotadas. Es más, esas órbitas son cerradas y periódicas, como veremos a continuación. Así son, con buena aproximación, las órbitas de los planetas, descritas en las leyes de Kepler."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Órbitas circulares"
    },
    {
     "mota": "testua",
     "html": "Según la expresión (4.52), el valor más pequeño de la energía mecánica es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math>. Eso solo puede ocurrir si la fuerza es atractiva (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) y cuando <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. En el problema unidimensional equivalente, la partícula está en reposo en el punto de equilibrio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math>, como se ve a la izquierda de la figura 4.5. Por otra parte, la excentricidad (4.55) es cero (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>) y en el problema plano original tenemos la órbita circular <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mo>=</mo><mi>p</mi></mrow></math> que también se obtiene de (4.59) o de (4.60) (y, por tanto, cerrada y periódica). Además, en la sección 4.1.9 demostramos que esta órbita circular es estable."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es única la órbita circular?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Órbitas elípticas"
    },
    {
     "mota": "testua",
     "html": "Si la energía mecánica es negativa pero mayor que el mínimo, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mi>E</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, la excentricidad cumple la condición <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>ε</mi><mo>&lt;</mo><mn>1</mn></mrow></math>. La fuerza es necesariamente atractiva (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) y la ecuación de la órbita es la siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Órbitas acotadas.",
     "src": "../media/irudiak/2dcc34a161f3e8aa.svg",
     "zabalera": 228
    },
    {
     "mota": "testua",
     "html": "Como la energía mecánica no es menor que la energía potencial efectiva, en la figura 4.7 vemos que la órbita está acotada. Como en los puntos <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mo>±</mo></msub></mrow></math> se tiene <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>V</mi><mi>e</mi></msub></mrow></math>, la energía cinética <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> del problema unidimensional equivalente es cero: como vimos en la sección 1.4.6, tales puntos son puntos de retorno y en ellos la velocidad es cero (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>), pues al pasar de valores positivos a negativos (o al revés) la partícula da marcha atrás."
    },
    {
     "mota": "testua",
     "html": "En el problema plano, en esos puntos la energía cinética y la velocidad no son nulas, pero en ellos están los extremos de la distancia (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>). Los puntos en los que esto ocurre se llaman <strong>ápsides</strong> en astronomía. En la expresión (4.61) vemos que el mínimo de la distancia es <math display=\"block\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow></mfrac></mrow></math> y el punto correspondiente se llama <strong>pericentro</strong> de la órbita o, en astronomía, <strong>periastro</strong> (y <strong>perihelio</strong> si la órbita es alrededor del Sol; <strong>perigeo</strong> si es alrededor de la Tierra; etc.). El máximo de la distancia es <math display=\"block\"><mrow><msub><mi>r</mi><mo>+</mo></msub><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></mrow></math> y el punto donde ocurre se llama <strong>apocentro</strong> o, en astronomía, <strong>apoastro</strong> (<strong>afelio</strong> en el caso de una órbita alrededor del Sol; <strong>apogeo</strong> si es alrededor de la Tierra; etc.)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que las condiciones para que el vector de posición y la velocidad sean perpendiculares en los ápsides son precisamente las definidas: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⟂</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para ver cómo es la órbita, estudiaremos su ecuación en coordenadas cartesianas."
    },
    {
     "mota": "irudia",
     "oina": "Órbita elíptica.",
     "src": "../media/irudiak/81cde9b19ba16fb5.svg",
     "zabalera": 214
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completa cuadrados en la ecuación (4.60) para escribirla de este modo:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow><mi>p</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mfrac><mrow><mi>ε</mi><mi>p</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, si definimos los parámetros <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>a</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>+</mo><msub><mi>r</mi><mo>+</mo></msub></mrow><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mi>p</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><msqrt><mrow><mi>p</mi><mi>a</mi></mrow></msqrt><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>c</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mrow><mi>ε</mi><mi>p</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>a</mi><mo>−</mo><msub><mi>r</mi><mo>−</mo></msub></mtd></mtr></mtable></math>, la ecuación de la órbita es la siguiente: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que se cumplen las siguientes propiedades:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>ε</mi><mo>=</mo><mfrac><mi>c</mi><mi>a</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La órbita es, pues, una elipse: el semieje mayor es <math display=\"inline\"><mi>a</mi></math>, el semieje menor <math display=\"inline\"><mi>b</mi></math> y el parámetro focal <math display=\"inline\"><mi>c</mi></math>. Además, el centro de la elipse está en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>c</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y, por tanto, el origen (es decir, el polo de fuerzas) está en el foco de la elipse. Hemos demostrado la <strong>primera ley de Kepler</strong>: <em>las órbitas de los planetas son elipses que tienen el Sol en uno de sus focos</em>. Esta ley se cumple con todas las fuerzas newtonianas (cuando la energía es negativa), pero no con otros campos de fuerza central, como vimos en el ejercicio 4.5."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el problema de dos cuerpos, si la energía mecánica es negativa, ¿cómo es la órbita de cada cuerpo en torno al centro de masas?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tercera ley de Kepler"
    },
    {
     "mota": "testua",
     "html": "Está claro que el caso de las órbitas circulares es solo un caso particular de este, que se obtiene haciendo precisamente <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> (o <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math>). En todos los casos circulares y elípticos las órbitas están acotadas y cerradas y, por tanto, son periódicas. Usemos el área <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>π</mi><mi>a</mi><mi>b</mi></mrow></math> de la elipse y el período <math display=\"inline\"><mi>T</mi></math> de la órbita para calcular el módulo de la velocidad areolar (1.59): <math display=\"block\"><mrow><msub><mi>v</mi><mi>a</mi></msub><mo>=</mo><mfrac><mrow><mi>π</mi><mi>a</mi><mi>b</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mi>L</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Despejando de aquí el período y usando (4.56) y (4.66), se obtiene: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><mi>a</mi><mi>b</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>m</mi><mi>k</mi></mfrac></msqrt><msup><mi>a</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> Así pues, la relación entre el período y el semieje mayor se escribe: <math display=\"block\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mi>m</mi></mrow><mi>k</mi></mfrac><mi>.</mi></mrow></math> Para un planeta de masa <math display=\"inline\"><mi>M</mi></math> tenemos <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>G</mi><msub><mi>M</mi><mo>⊙</mo></msub><mi>M</mi></mrow></math>, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><msub><mi>M</mi><mo>⊙</mo></msub><mi>M</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mo>⊙</mo></msub><mo>+</mo><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, siendo <math display=\"inline\"><msub><mi>M</mi><mo>⊙</mo></msub></math> la masa del Sol (véanse en la tabla A.4 algunos símbolos usados en astronomía). En consecuencia, <math display=\"block\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mo>⊙</mo></msub><mo>+</mo><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> Pero como la masa del Sol es mucho mayor (<math display=\"inline\"><mrow><mi>M</mi><mo>≪</mo><msub><mi>M</mi><mo>⊙</mo></msub></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>≈</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mi>G</mi><msub><mi>M</mi><mo>⊙</mo></msub></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es una muy buena aproximación y la masa del planeta no aparece aquí. Hemos demostrado la tercera ley de Kepler:"
    },
    {
     "mota": "testua",
     "html": "el cociente entre el cuadrado del período y el cubo de la longitud del eje mayor de la órbita es el mismo para todos los planetas"
    },
    {
     "mota": "testua",
     "html": ". Como hemos visto, esta ley no es exacta, sino aproximada, y solo se cumple en el sistema solar (o en sistemas parecidos); por tanto, es la más limitada de las leyes de Kepler. (Véase también el problema 4.68.)"
    },
    {
     "mota": "irudia",
     "oina": "Potencial efectivo y precesión de los ápsides en el caso <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><mi>r</mi></mrow></math>.",
     "src": "../media/irudiak/0dc1f76f548f5140.svg",
     "zabalera": 331
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema de Bertrand"
    },
    {
     "mota": "testua",
     "html": "No hay que pensar que en los campos de fuerza central las órbitas acotadas son cerradas y periódicas: de hecho, eso es una excepción más que el caso general. Según el teorema de Bertrand, si todas las órbitas acotadas son cerradas, el campo de fuerza central es newtoniano (<math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>−</mi><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>) o armónico (<math display=\"inline\"><mrow><mi>F</mi><mo>∝</mo><mi>−</mi><mi>r</mi></mrow></math>) (véase el anexo C). En los casos generales los ápsides no se dan siempre en la misma dirección angular: se dice que <strong>precesan</strong> y, salvo en casos particulares que se dan con algunas condiciones iniciales, las órbitas no son periódicas."
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos la energía potencial atractiva <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><mi>r</mi></mrow></math><span class=\"j-oin\">[Newton resolvió gráficamente este problema en 1679, en una carta escrita a Hooke, y este le respondió algo parecido es el problema 6.11.4. El problema 6.110 es también equivalente a este.]</span>. A la izquierda de la figura 4.9 se ha dibujado la gráfica de la energía potencial efectiva. Está claro que todas las órbitas están acotadas, pero la mayoría no serán periódicas. A la derecha de la misma figura se muestra dónde aparecen los ápsides consecutivos en una órbita. Por tanto, la mayoría de las órbitas son abiertas y, por ejemplo, la que aparece a la izquierda de la figura 4.10 pasará en algún momento tan cerca como se quiera de cada punto situado entre las circunferencias de radios <math display=\"inline\"><msub><mi>r</mi><mo>−</mo></msub></math> y <math display=\"inline\"><msub><mi>r</mi><mo>+</mo></msub></math> (por eso solo se ha dibujado una parte de la órbita). La órbita de la derecha, en cambio, es cerrada, pero esa periodicidad desaparece al cambiar las condiciones iniciales tan poco como se quiera: las órbitas periódicas son excepciones. Estudiaremos un ejemplo cuantitativo en el problema 4.7.5."
    },
    {
     "mota": "irudia",
     "oina": "Dos órbitas en el caso <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><mi>r</mi></mrow></math>.",
     "src": "../media/irudiak/e659d9b68feb4c41.svg",
     "zabalera": 360
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de Kepler"
    },
    {
     "mota": "testua",
     "html": "Si no basta con conocer la órbita, para hallar la posición de la partícula en todo instante hay que calcular la integral (4.24); pero, aunque se exprese mediante funciones elementales, del resultado trascendente <math display=\"inline\"><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no se puede despejar la función inversa <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> mediante funciones elementales para obtener luego <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> realizando la integral (4.26). Por supuesto, hoy en día puede usarse el cálculo numérico para ello, pero aquí veremos el método más geométrico que propuso Kepler. Para determinar la posición de la partícula pueden usarse las coordenadas cartesianas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> o las polares <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En astronomía, el ángulo polar <math display=\"inline\"><mi>ϕ</mi></math> se llama <strong>anomalía verdadera</strong> y mide la desviación respecto al pericentro mediante un ángulo con centro en el foco. Para medir dicha desviación, se puede elegir en el centro <math display=\"inline\"><mi>C</mi></math> de la elipse un ángulo, como se muestra en la figura 4.11. En cada punto <math display=\"inline\"><mi>P</mi></math> de la órbita se levanta la altura <math display=\"inline\"><mrow><mi>P</mi><mi>Q</mi></mrow></math>, que corta en el punto <math display=\"inline\"><mi>R</mi></math> a la circunferencia de radio <math display=\"inline\"><mi>a</mi></math> centrada en el centro de la elipse. La posición angular <math display=\"inline\"><mi>ψ</mi></math> del punto <math display=\"inline\"><mi>R</mi></math> medida desde el centro es la <strong>anomalía excéntrica</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Anomalía excéntrica y verdadera.",
     "src": "../media/irudiak/b31faf81ba4abe88.svg",
     "zabalera": 231
    },
    {
     "mota": "testua",
     "html": "La abscisa <math display=\"inline\"><mi>x</mi></math> del punto <math display=\"inline\"><mi>P</mi></math> es la siguiente: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mover><mrow><mi>C</mi><mi>Q</mi></mrow><mo accent=\"true\">¯</mo></mover><mo>−</mo><mover><mrow><mi>O</mi><mi>C</mi></mrow><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mo>−</mo><mi>c</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mi>ε</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por otra parte, valiéndonos de la ecuación (4.68) de la elipse, tenemos: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>b</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>±</mi><mi>b</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>ψ</mi></mrow></msqrt><mo>=</mo><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mi>.</mi></mrow></math> (El signo del último resultado se halla, naturalmente, con ayuda de la figura.) Así pues, las coordenadas cartesianas se calculan mediante la anomalía excéntrica de este modo: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mi>ε</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que las coordenadas polares vienen dadas por las siguientes expresiones:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mfrac><mi>ϕ</mi><mn>2</mn></mfrac><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></msqrt><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mfrac><mi>ψ</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si el período del planeta es <math display=\"inline\"><mi>T</mi></math>, según la segunda ley de Kepler la velocidad areolar se calcula así: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>v</mi><mi>a</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>π</mi><mi>a</mi><mi>b</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>y</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mrow><mi>a</mi><mi>b</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mi>ε</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>a</mi><mi>b</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mtd></mtr></mtable></math> Por otra parte, el valor medio de las dos anomalías <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>n</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac></mrow></math> es la <strong>anomalía media</strong> y se escribe (4.81): <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> En consecuencia, si el planeta pasó por el perihelio en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math>, en el instante <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mi>ϕ</mi><mo>=</mo><mn>0</mn></mrow></math> tenemos <math display=\"inline\"><mi>t</mi></math>: <math display=\"block\"><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>ψ</mi><mo>−</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mi>.</mi></mrow></math> Si de esta ecuación trascendente de Kepler se despeja <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (de forma aproximada o numérica), se conoce la posición del planeta usando (4.77)–(4.78) —o (4.79)–(4.80)—."
    },
    {
     "mota": "irudia",
     "oina": "Evolución de la anomalía excéntrica.",
     "src": "../media/irudiak/4b3549d08b26420d.svg",
     "zabalera": 191
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energía mecánica y eje mayor"
    },
    {
     "mota": "testua",
     "html": "Otra propiedad interesante de las órbitas newtonianas acotadas es la que se obtiene de la ecuación (4.65): la energía de la órbita depende únicamente del eje mayor, es decir, la energía de todas las órbitas que tienen el mismo eje mayor es"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "sea cual sea el eje menor (y la excentricidad). También podemos decirlo al revés: el eje mayor de la órbita depende únicamente de la energía mecánica, pero para calcular el eje menor y la excentricidad hay que conocer también el momento angular."
    },
    {
     "mota": "testua",
     "html": "Con (4.83) se calcula muy fácilmente el valor medio de la energía potencial: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≡</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>V</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mfrac><mi>k</mi><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>ψ</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>a</mi></mfrac><mi>.</mi></mrow></math> Por otra parte, usando (4.85), tenemos: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>E</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mi>E</mi><mi>.</mi></mrow></math> Lo que se obtiene al extender este resultado a sistemas de partículas y a otras fuerzas (véanse el problema 4.137 y [40]) se llama <strong>teorema del virial de Clausius</strong> y suele ser muy útil en la teoría cinética de los gases y en astronomía. Se ha usado, por ejemplo, para deducir que existe materia oscura (es decir, la que no se ve con el telescopio) (véase [8])."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Órbitas abiertas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como se ve en la figura 4.5, si el campo de fuerza newtoniano es atractivo y la energía mecánica es positiva o cero, las órbitas serán abiertas, pues, aunque hay una distancia mínima, no hay distancia máxima. La condición <math display=\"inline\"><mrow><mi>E</mi><mo>≥</mo><mn>0</mn></mrow></math> para que la órbita sea abierta también puede escribirse mediante la velocidad: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>≥</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>≥</mo><msub><mi>v</mi><mi>i</mi></msub><mo>≡</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mi>m</mi><mi>r</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Por tanto, <em>en un campo de fuerza newtoniano atractivo, la órbita será abierta si, cuando la partícula está a la distancia <math display=\"inline\"><mi>r</mi></math>, su velocidad es mayor (o igual) que la <strong>velocidad de escape</strong> <math display=\"inline\"><msub><mi>v</mi><mi>i</mi></msub></math> definida en la expresión (4.88)</em>. Hace falta, pues, una velocidad mínima para que la partícula pueda irse al infinito."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que esta es la velocidad mínima que hay que dar a un cohete en la superficie de la Tierra para que pueda escapar hacia el infinito:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><msub><mi>R</mi><mo>⊕</mo></msub></mrow></msqrt><mo>≈</mo><mn>11.18</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> km/s</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si el campo de fuerza newtoniano es repulsivo, en cambio, todas las órbitas serán abiertas, incluso si en algún momento la velocidad es cero. En ese caso la energía mecánica es siempre positiva (<math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) y la distancia polar <math display=\"inline\"><mi>r</mi></math> no tiene cota superior (véase la figura 4.5): la órbita nunca está acotada y la partícula irá necesariamente hacia el infinito."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Órbitas parabólicas"
    },
    {
     "mota": "testua",
     "html": "Supongamos que la energía mecánica de la partícula es nula: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow></math>. La fuerza es atractiva (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), la excentricidad (4.55) es <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> y la velocidad es igual a la velocidad de escape en todos los puntos. La ecuación (4.59) de la órbita"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Órbita parabólica.",
     "src": "../media/irudiak/02630d1903f81b93.svg",
     "zabalera": 205
    },
    {
     "mota": "testua",
     "html": "es, o bien, haciendo <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> en la ecuación (4.60), <math display=\"block\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>p</mi><mi>x</mi><mi>.</mi></mrow></math> es, pues, una parábola de eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math>. Como hemos dicho antes, no hay distancia máxima, pues <math display=\"inline\"><mi>r</mi></math> tiende a infinito en los límites <math display=\"inline\"><mrow><mi>ϕ</mi><mo>→</mo><mi>±</mi><mi>π</mi></mrow></math>: la partícula viene del infinito para volver allí."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Órbitas hiperbólicas"
    },
    {
     "mota": "testua",
     "html": "Si la energía es positiva, tenemos <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>1</mn></mrow></math> y la ecuación de la órbita es la siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>±</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para obtener esta ecuación en coordenadas cartesianas, se pueden completar cuadrados en la ecuación (4.60) o, mejor, el resultado (4.64) puede escribirse del modo siguiente, teniendo en cuenta que <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mi>p</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mrow><mi>ε</mi><mi>p</mi></mrow><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> En consecuencia, si definimos los parámetros <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>a</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mi>p</mi><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mi>p</mi><msqrt><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mfrac><mo>=</mo><msqrt><mrow><mi>p</mi><mi>a</mi></mrow></msqrt><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>c</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><mfrac><mrow><mi>ε</mi><mi>p</mi></mrow><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mtd></mtr></mtable></math>, la ecuación de la órbita es: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Órbitas hiperbólicas.",
     "src": "../media/irudiak/281ba7bad2d76d72.svg",
     "zabalera": 175
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que se cumplen las siguientes propiedades:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>ε</mi><mo>=</mo><mfrac><mi>c</mi><mi>a</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La órbita es, pues, una rama de hipérbola: el semieje mayor es <math display=\"inline\"><mi>a</mi></math>, el semieje menor <math display=\"inline\"><mi>b</mi></math> y el parámetro focal <math display=\"inline\"><mi>c</mi></math>. Además, el centro de la hipérbola está en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y, por tanto, el origen (es decir, el polo de fuerzas) está en uno de los focos de la hipérbola. Como la hipérbola tiene dos ramas, la ecuación (4.93) representa dos órbitas:"
    },
    {
     "mota": "testua",
     "html": "• Cuando la fuerza es atractiva (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), en la ecuación (4.92) hay que elegir el signo <math display=\"inline\"><mi>+</mi></math> y se trata de la rama más cercana al polo de fuerzas."
    },
    {
     "mota": "testua",
     "html": "• En el caso de fuerzas repulsivas (<math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), hay que usar el signo <math display=\"inline\"><mi>−</mi></math> y la ecuación (4.92) describe la rama lejana."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Por qué hay que elegir las ramas de la hipérbola del modo indicado más arriba?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Igual que en el caso de las órbitas acotadas, la energía mecánica depende únicamente del eje mayor, pues, por la ecuación (4.94),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "tenemos. (Naturalmente, en el caso de las fuerzas atractivas puede eliminarse el valor absoluto en la ecuación anterior.)"
    },
    {
     "mota": "testua",
     "html": "Las ramas de la hipérbola tienen asíntotas y las direcciones de las asíntotas definen los valores mínimos y máximos de los ángulos polares. En efecto, cuando el denominador de la ecuación (4.92) tiende a cero, la distancia polar tiende a infinito y, en ese límite, la partícula se mueve en el infinito a lo largo de una asíntota. Como siempre, si el pericentro está en la dirección <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mn>0</mn></mrow></math>, estos son los valores que pueden tomar los ángulos polares en el caso de las fuerzas atractivas: <math display=\"block\"><mrow><mi>−</mi><mi>π</mi><mo>&lt;</mo><mi>−</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mi>ϕ</mi><mo>&lt;</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mi>π</mi><mi>.</mi></mrow></math> Si la fuerza es repulsiva, en cambio, tenemos lo siguiente: <math display=\"block\"><mrow><mi>−</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>&lt;</mo><mi>−</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mi>ϕ</mi><mo>&lt;</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "taula-kutxa",
     "oina": "Órbitas newtonianas.",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "sarea",
           "zutabeak": "auto auto",
           "zelulak": [
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Energía potencial:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"0.167em\"></mspace><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Energía potencial efectiva:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>≥</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Energía mecánica:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo>≥</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Energía mínima:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Excentricidad:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Parámetro focal:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><msub><mi>E</mi><mn>0</mn></msub></mrow></mfrac></mrow></math>"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "Ecuación de la órbita:"
              }
             ]
            },
            {
             "blokeak": [
              {
               "mota": "testua",
               "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac></mrow></math>"
              }
             ]
            }
           ]
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/f3f2e0ebac2618e9.svg",
           "zabalera": 174
          }
         ]
        }
       ]
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>Kasua</strong>",
        "<strong>Ekuazioa</strong>",
        "<strong>Parametroak</strong>",
        "<strong>Orbita</strong>"
       ],
       "lerroak": [
        [
         "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math> <br><math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math></span>",
         "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>p</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><msub><mi>E</mi><mn>0</mn></msub></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>ϕ</mi><mo>≤</mo><mn>2</mn><mi>π</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>",
         "",
         "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup></mrow></math> zirkunferentzia <br>Itxia eta periodikoa: irudiko (1)"
        ],
        [
         "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mi>E</mi><mo>&lt;</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>ε</mi><mo>&lt;</mo><mn>1</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math></span>",
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow></mfrac><mo>≤</mo><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></mfrac><mo>≤</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></mrow></math></span> <br><math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>ϕ</mi><mo>≤</mo><mn>2</mn><mi>π</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>",
         "<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow></mfrac><mo>+</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>ε</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> elipsea <br>Itxia eta periodikoa: irudiko (2) <br><math display=\"inline\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mi>m</mi></mrow><mi>k</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math></span>",
         "<math display=\"inline\"><mrow><mfrac><mi>p</mi><mn>2</mn></mfrac><mo>≤</mo><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></mfrac><mo>&lt;</mo><mi>∞</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>−</mi><mi>π</mi><mo>&lt;</mo><mi>ϕ</mi><mo>&lt;</mo><mi>π</mi></mrow></math> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub><mo>≡</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mi>m</mi><mi>r</mi></mrow></mfrac></msqrt></mrow></math>",
         "",
         "<math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>p</mi><mi>x</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup></mrow></math> parabola <br>Irekia: irudiko (3)"
        ],
        [
         "<math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>1</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math></span>",
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≤</mo><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mi>∞</mi></mrow></math></span> <br><span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mi>π</mi></mrow></math></span> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>&gt;</mo><msub><mi>v</mi><mi>i</mi></msub></mrow></math>",
         "<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>ε</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><msqrt><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> hiperbola <br>Irekia: irudiko (4), <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>c</mi></mrow></math> adarra"
        ],
        [
         "<math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><mn>0</mn></mrow></math> <br><math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>1</mn></mrow></math> <br><span><math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math></span>",
         "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≤</mo><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mi>∞</mi></mrow></math></span> <br><span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math></span> <br><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>≥</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>p</mi><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac></mrow></math> <br><math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>ε</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>=</mo><msqrt><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> hiperbola <br>Irekia: irudiko (4), <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>c</mi></mrow></math> adarra"
        ]
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Dispersión newtoniana",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos un tipo de experimento que se hace a menudo en física. Contra un blanco <math display=\"inline\"><mi>O</mi></math> fijo se lanza una partícula de masa <math display=\"inline\"><mi>m</mi></math> desde una distancia muy grande con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Para simplificar el análisis, supongamos que el blanco está fijo (quizá porque es muy pesado) y que la fuerza ejercida por el blanco sobre el proyectil es newtoniana y repulsiva (por ejemplo, porque ambos tienen cargas del mismo signo). Como al principio la distancia era muy grande, el movimiento de la partícula era uniforme y la energía mecánica igual a la energía cinética inicial: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math> El <strong>parámetro de impacto</strong> es la distancia <math display=\"inline\"><mi>b</mi></math> entre la dirección inicial de la partícula y el blanco, y puede usarse para medir el momento angular constante respecto al blanco: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><mi>b</mi><msub><mi>v</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Dispersión newtoniana con dos elecciones distintas de ejes.",
     "src": "../media/irudiak/3c22757cc1a0b98a.svg",
     "zabalera": 376
    },
    {
     "mota": "testua",
     "html": "Por efecto de la fuerza ejercida por el blanco, la dirección del proyectil cambia y, cuando la distancia vuelve a ser muy grande, el movimiento será uniforme. Al cambio total de dirección, es decir, al ángulo entre las dos rectas asintóticas, se le llama <strong>ángulo de dispersión</strong>. Como se ve a la derecha de la figura 4.15, tenemos <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>+</mo><mn>2</mn><mi>α</mi><mo>=</mo><mi>π</mi></mrow></math>, siendo el ángulo <math display=\"inline\"><mi>α</mi></math> el valor máximo de <math display=\"inline\"><mi>ϕ</mi></math>. Por el resultado (4.101), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>ε</mi></mrow></math> y, por tanto, usando (4.55), obtenemos <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>α</mi><mi mathvariant=\"normal\">cos</mi></mfrac><mi>α</mi><mo>=</mo><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></msqrt><mi mathvariant=\"normal\">cos</mi></mfrac><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msqrt><mrow><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>−</mo><mn>1</mn></mrow></msqrt><mo>=</mo><msqrt><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>E</mi><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>b</mi><mn>2</mn></msup><msubsup><mi>v</mi><mn>0</mn><mn>4</mn></msubsup></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac></msqrt></mtd></mtr></mtable></math>. Esta es, pues, la fórmula que da el ángulo de dispersión en el caso de las fuerzas newtonianas<span class=\"j-oin\">[En el problema 4.121 se resumen las relaciones útiles que pueden usarse cuando la fuerza es repulsiva y cuando es atractiva.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mi>b</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>b</mi><mi>E</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué cambia en el resultado anterior si la fuerza es atractiva?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sección eficaz"
    },
    {
     "mota": "testua",
     "html": "Hasta ahora hemos considerado una sola partícula, pero en los experimentos reales se lanzan muchas partículas contra el blanco. Consideremos el experimento dibujado en la figura 4.16. Se envía un haz uniforme de partículas puntuales contra una esfera rígida fija de radio <math display=\"inline\"><mi>R</mi></math>. Si el parámetro de impacto <math display=\"inline\"><mi>b</mi></math> de una partícula es menor que <math display=\"inline\"><mi>R</mi></math>, tras chocar con la esfera la dirección de la partícula cambiará. Está claro que eso solo ocurrirá si va dentro del cilindro de la figura inicial, es decir, si atraviesa la sección normal de área <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>. En consecuencia, si la <strong>intensidad</strong> del haz, es decir, el número de partículas que pasan por unidad de área de la sección normal en la unidad de tiempo, es <math display=\"inline\"><mi>I</mi></math>, el número de partículas dispersadas por unidad de tiempo será <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>I</mi><mi>σ</mi><mo>=</mo><mi>π</mi><mi>I</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>. Si en la dirección perpendicular del haz se coloca un disco de área <math display=\"inline\"><mrow><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, el número de partículas que chocarán con él por unidad de tiempo será el mismo. Desde ese punto de vista, el haz «ve» el disco y la esfera de la misma manera, ya que las áreas de las secciones transversales de los dos obstáculos son iguales."
    },
    {
     "mota": "irudia",
     "oina": "Partículas dispersadas por una esfera fija.",
     "src": "../media/irudiak/34197fab08b4b354.svg",
     "zabalera": 331
    },
    {
     "mota": "testua",
     "html": "Si el radio de la esfera es <math display=\"inline\"><msub><mi>R</mi><mn>1</mn></msub></math> y el del proyectil <math display=\"inline\"><msub><mi>R</mi><mn>2</mn></msub></math>, para que haya choque la partícula debe pasar por la sección de área <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, como se muestra a la derecha de la figura 4.16. Por tanto, por unidad de tiempo se dispersarán <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>I</mi><mi>σ</mi><mo>=</mo><mi>π</mi><mi>I</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> partículas."
    },
    {
     "mota": "irudia",
     "oina": "Meteoritos que impactan contra la Tierra.",
     "src": "../media/irudiak/07fec8e8963f5766.svg",
     "zabalera": 167
    },
    {
     "mota": "testua",
     "html": "Las secciones eficaces calculadas hasta ahora tenían un origen geométrico directo, pero en la mayoría de los casos también hay que tener en cuenta en la sección eficaz la dinámica de un proceso físico. En la figura 4.17 se muestra un ejemplo sencillo. Desde una gran distancia se acercan a la Tierra meteoritos que se mueven con la misma velocidad paralela. Como la energía mecánica es positiva, las órbitas son hiperbólicas, pero acabarán en la Tierra los que atraviesen su superficie, y serán los que hayan pasado por el disco de radio <math display=\"inline\"><mrow><msup><mi>R</mi><mo>′</mo></msup><mo>&gt;</mo><mi>R</mi></mrow></math> que calcularemos en el problema 4.110. La sección eficaz será, por tanto, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></math>, más amplia que la sección geométrica <math display=\"inline\"><mrow><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>: por unidad de tiempo caerán en la Tierra <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>I</mi><mi>σ</mi><mo>=</mo><mi>π</mi><mi>I</mi><msup><mi>R</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></math> meteoritos. Como se ve, en los dos ejemplos anteriores hemos calculado la <strong>sección eficaz de dispersión</strong> y en este la <strong>sección eficaz de captura</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sección eficaz diferencial"
    },
    {
     "mota": "testua",
     "html": "Supongamos que se envía un haz uniforme y que elegimos el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> en la dirección del haz y a través del blanco. La velocidad inicial de todas las partículas es <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> y la energía mecánica <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>; pero los parámetros de impacto <math display=\"inline\"><mi>b</mi></math> (y, por tanto, el momento angular) cambian de un punto a otro del haz, claro. Supondremos que la fuerza que sufre el haz es repulsiva y simétrica respecto al eje. Si todo el proceso tiene la misma simetría, porque la fuerza es central o por otra razón, todas las partículas que estaban a muy gran distancia en la circunferencia de radio <math display=\"inline\"><mi>b</mi></math> se moverán en el infinito futuro en el cono de ángulo <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>, como se muestra en la figura 4.18. Como de costumbre, si la fuerza (y, por tanto, la desviación) disminuye con la distancia y el parámetro de impacto es mayor (menor) que el anterior <math display=\"inline\"><mi>b</mi></math>, tras la dispersión las partículas aparecerán dentro (fuera) del ángulo sólido <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> definido por dicho cono."
    },
    {
     "mota": "irudia",
     "oina": "Dispersión de un haz.",
     "src": "../media/irudiak/01eacd01c83429b1.svg",
     "zabalera": 370
    },
    {
     "mota": "testua",
     "html": "Consideremos los <math display=\"inline\"><mrow><mi>d</mi><mi>N</mi></mrow></math> proyectiles que, en el infinito pasado, pasaron por unidad de tiempo por un plano perpendicular al haz con parámetros de impacto entre los valores <math display=\"inline\"><mi>b</mi></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>+</mo><mi>d</mi><mi>b</mi></mrow></math>. La intensidad del haz es el número de partículas que pasaron por unidad de área de la sección normal en la unidad de tiempo: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>d</mi><mi>N</mi><mi>/</mi><mi>d</mi><mi>S</mi></mrow></math>. Los ángulos de dispersión de esas partículas estarán entre los valores <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>+</mo><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math>, y las partículas aparecerán en el infinito futuro dentro del ángulo sólido <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> respecto al haz. De nuevo, como ocurre con las fuerzas newtonianas repulsivas, supondremos que la fuerza y, en consecuencia, la desviación disminuyen con la distancia. Por tanto, si <math display=\"inline\"><mrow><mi>d</mi><mi>b</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, tendremos <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Como el área de la corona circular plana comprendida entre los radios <math display=\"inline\"><mi>b</mi></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>+</mo><mi>d</mi><mi>b</mi></mrow></math> es <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math>, el número de partículas que pasan por ella por unidad de tiempo antes de producirse la dispersión es <math display=\"block\"><mrow><mi>d</mi><mi>N</mi><mo>=</mo><mi>I</mi><mi>d</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>I</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math>. Consideremos ahora una superficie esférica de radio grande <math display=\"inline\"><mi>R</mi></math> con el centro en el vértice de los conos. La superficie y los conos definen la corona esférica <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> de la figura."
    },
    {
     "mota": "testua",
     "html": "El número <math display=\"inline\"><mrow><mi>d</mi><mi>N</mi></mrow></math> de partículas que, tras la dispersión, han pasado por unidad de tiempo por la superficie <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> (en el detector) será, naturalmente, proporcional a la intensidad, y la magnitud <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mo>≡</mo><mi>d</mi><mi>N</mi><mi>/</mi><mi>I</mi></mrow></math> que nos queda, una vez quitada esa información conocida, es la <strong>sección eficaz diferencial</strong>: el cociente entre el número de proyectiles que pasan por la superficie <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> por unidad de tiempo y la intensidad. Está claro que, por el resultado (4.106), <math display=\"block\"><mrow><mi>d</mi><mi>σ</mi><mo>=</mo><mi>d</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math> es<span class=\"j-oin\">[Al ser un área, la unidad del SI es m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>, pero en la física nuclear y de partículas, como esa es demasiado grande, se usa la llamada <strong>barn</strong>: 1 barn <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>28</mn></mrow></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>.]</span>; pero en un experimento no se mide directamente el parámetro de impacto <math display=\"inline\"><mi>b</mi></math> de cada partícula, sino en qué dirección aparece. Por tanto, hay que escribir de algún modo la sección <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi></mrow></math> en función del ángulo de dispersión <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Además sabemos que <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi></mrow></math> dependerá del valor de <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> (o de <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math>) y, por tanto, hay que calcular <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mi>/</mi><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> o, mejor, <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mi>/</mi><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math>. Como el área <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> depende del radio, es más natural usar en su lugar <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math>, que es independiente del radio. Para ver cómo varía la sección eficaz diferencial con el ángulo sólido, calculemos el área infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow></math> de la corona esférica."
    },
    {
     "mota": "testua",
     "html": "Su base es la circunferencia de radio <math display=\"inline\"><mrow><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></math>, que tiene longitud <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></math>. Como la altura de la corona es el arco <math display=\"inline\"><mrow><mi>−</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> de la circunferencia de radio <math display=\"inline\"><mi>R</mi></math>, su longitud es <math display=\"inline\"><mrow><mi>−</mi><mi>R</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> (recuérdese que <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> es negativo). El área de la corona es, por tanto, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math> y el ángulo sólido que define es <math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"normal\">Σ</mi></mrow><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>π</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mi>.</mi></mrow></math> En consecuencia, tenemos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>b</mi><mi>d</mi><mi>b</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Esfera lisa y sólida y dispersión de partículas.",
     "src": "../media/irudiak/4386e2a964cd8519.svg",
     "zabalera": 198
    },
    {
     "mota": "testua",
     "html": "Hasta ahora hemos supuesto que el haz es uniforme y la fuerza simétrica (y que la fuerza disminuye con la distancia; si esto no es cierto, hay que quitar el signo <math display=\"inline\"><mi>−</mi></math> de las expresiones anteriores); pero para avanzar hay que conocer la expresión explícita de la fuerza, para calcular la función <math display=\"inline\"><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Como ejemplo, consideremos que se envían partículas puntuales contra una esfera lisa fija. Si la esfera es lisa, no hay fuerza de contacto tangencial y la componente de la velocidad tangente a la superficie esférica no cambia. Si el choque es elástico, el módulo de la velocidad y, por tanto, el de la velocidad radial no cambian (recuérdese el problema 1.6.4): los ángulos de incidencia y de reflexión son iguales y la geometría del choque es la de la figura 4.19. El ángulo de dispersión será <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>π</mi><mo>−</mo><mn>2</mn><mi>β</mi></mrow></math> y, cuando <math display=\"inline\"><mrow><mi>b</mi><mo>≤</mo><mi>R</mi></mrow></math>, tenemos: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>b</mi><mi>R</mi></mfrac><mi>.</mi></mrow></math> De aquí se obtiene directamente la sección eficaz diferencial: <math display=\"block\"><mrow><mi>b</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>b</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>R</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>b</mi><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>b</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>b</mi><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>b</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>R</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math> En este caso sencillo <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mi>/</mi><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> es constante y la dispersión es isótropa: el número de partículas emitidas por unidad de ángulo sólido será el mismo en todas las direcciones."
    },
    {
     "mota": "testua",
     "html": "En el caso de las fuerzas newtonianas, la diferencial del resultado (4.105) es <math display=\"block\"><mrow><mfrac><mrow><mn>2</mn><mi>E</mi><mi>d</mi><mi>b</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cot</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac></mrow></math> y, con el <math display=\"inline\"><mrow><mi>d</mi><mi>b</mi></mrow></math> que se obtiene de aquí y usando de nuevo (4.105), tenemos: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>k</mi><mn>2</mn></msup><mrow><mn>16</mn><msup><mi>E</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Esquema del experimento de Geiger y Marsden.",
     "src": "../media/irudiak/3c4ce987af7d6495.svg",
     "zabalera": 275
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dispersión de Rutherford"
    },
    {
     "mota": "testua",
     "html": "A principios del siglo XX el único componente elemental conocido de la materia era el electrón. Según J. J. Thomson<span class=\"j-oin\">[Joseph John Thomson obtuvo el premio Nobel en 1906.]</span>, descubridor de este último, y según se cree<span class=\"j-oin\">[Parece que fue idea del físico William Thomson (Lord Kelvin).]</span>, los electrones negativos estaban inmersos en una distribución continua de materia positiva, como las pasas en un pudin. Para estudiar la estructura real de la materia, hacia 1909 se hicieron unos experimentos en el laboratorio que dirigía en Mánchester Ernest Rutherford, premio Nobel de Química de 1908. Se bombardearon láminas delgadas de oro (de 0.6 nm de grosor) con partículas <math display=\"inline\"><mi>α</mi></math>, para medir el número de estas en algunas direcciones. La mayoría de las partículas casi no se desviaban, pero unas pocas salían hacia atrás (es decir, con ángulos de dispersión <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>). Esto fue muy sorprendente, «como si al bombardear una hoja de papel algunas balas salieran hacia atrás». Rutherford concluyó entonces que la materia está casi vacía<span class=\"j-oin\">[Hantaro Nagaoka propuso un modelo parecido en 1904, pero con intenciones y bases diferentes.]</span>: además de los electrones hay carga positiva, pero concentrada en zonas muy pequeñas, los núcleos. Como las partículas <math display=\"inline\"><mi>α</mi></math> son mucho más pesadas que los electrones, para entender las desviaciones medidas había que estudiar el efecto de los núcleos."
    },
    {
     "mota": "testua",
     "html": "Si el proyectil y el blanco son núcleos, con números atómicos <math display=\"inline\"><msub><mi>Z</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>Z</mi><mn>2</mn></msub></math>, tenemos <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>Z</mi><mn>1</mn></msub><msub><mi>Z</mi><mn>2</mn></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac></mrow></math> y del resultado (4.115) se obtiene la <strong>fórmula de dispersión de Rutherford</strong> de 1911<span class=\"j-oin\">[Gregor Wentzel en 1926 y, sobre todo, Nevill Mott en 1928 demostraron que en la mecánica cuántica se obtiene el mismo resultado en el caso particular del potencial <math display=\"inline\"><mrow><mi>V</mi><mo>∝</mo><mi>−</mi><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mi>n</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>Z</mi><mn>1</mn></msub><msub><mi>Z</mi><mn>2</mn></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde el número <math display=\"inline\"><mi>n</mi></math> es el número de núcleos de la muestra (y <math display=\"inline\"><mi>e</mi></math> la carga elemental). En efecto, en un experimento real hay que tener en cuenta que hay muchos centros de dispersión: que una partícula aparezca en una dirección puede ser consecuencia de la acción de cualquiera de los blancos. Aquí se ha supuesto que la desviación de una partícula es consecuencia de su interacción con un único núcleo, y eso es cierto cuando la muestra es delgada (véase también la sección 4.5.6). Supongamos, además, que la muestra es mucho más pequeña que el detector, para que el ángulo medido por el observador no dependa del centro de dispersión."
    },
    {
     "mota": "irudia",
     "oina": "Dispersión de partículas <math display=\"inline\"><mi>α</mi></math> (a) en el modelo de Thomson y (b) en el de Rutherford.",
     "src": "../media/irudiak/d4bf4fd07f33670a.svg",
     "zabalera": 318
    },
    {
     "mota": "testua",
     "html": "Como vemos, la dependencia de la sección eficaz diferencial respecto al ángulo de dispersión es muy grande. Afortunadamente, en la mecánica cuántica, que en aquella época aún no estaba hecha, se obtiene el mismo resultado en el caso de las fuerzas newtonianas, y Geiger y Marsden comprobaron esa dependencia al bombardear núcleos pesados con partículas <math display=\"inline\"><mi>α</mi></math> de <math display=\"inline\"><mrow><mi>E</mi><mo>≈</mo><mn>5</mn></mrow></math> MeV. Con estos experimentos y explicaciones teóricas se dio un paso muy grande para entender la estructura de los átomos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sección eficaz total"
    },
    {
     "mota": "testua",
     "html": "Si integramos la sección eficaz diferencial, se obtiene la sección eficaz total, es decir, el cociente entre el número de partículas dispersadas que aparecen en todas las direcciones por unidad de tiempo y la intensidad. En el caso de una esfera lisa y dura, como (4.113) es constante, tenemos <math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mfrac><msup><mi>R</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>∫</mo><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, como vimos en la sección 4.5.1: la sección transversal de las partículas dispersadas es la de la esfera, <math display=\"inline\"><mrow><mi>b</mi><mo>&gt;</mo><mi>R</mi></mrow></math>, ya que para los parámetros de impacto no hay dispersión."
    },
    {
     "mota": "testua",
     "html": "En la dispersión newtoniana, la sección eficaz total se calcula así a partir del resultado (4.115): <math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mfrac><msup><mi>k</mi><mn>2</mn></msup><mrow><mn>16</mn><msup><mi>E</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">min</mi></msub><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>π</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>E</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">min</mi></msub><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub></msubsup><mi>.</mi></mrow></math> Si la sección transversal del haz uniforme es infinita, se obtiene <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mn>0</mn></mrow></math> cuando <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>∞</mi></mrow></math> y, naturalmente, la sección total es infinita. En un experimento real, como las cargas de los electrones son opuestas a las de los núcleos, si el parámetro de impacto es mayor que el radio del átomo el proyectil no se desviará (casi), y por tanto el área <math display=\"inline\"><mi>σ</mi></math> de la parte del haz que se desvía será finita (y muy pequeña)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pericentro y dimensión de los núcleos"
    },
    {
     "mota": "testua",
     "html": "Por otra parte, hemos supuesto que el blanco es puntual; por tanto, no se puede usar (4.115) si el valor del parámetro de impacto es comparable o menor que el radio del núcleo. En efecto, la distancia mínima entre el blanco y el proyectil es <math display=\"block\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mi>p</mi><mrow><msup><mi>ε</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mi>.</mi></mrow></math> En consecuencia, tenemos <math display=\"block\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">csc</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y las distancias más pequeñas que se pueden «ver» en un experimento de dispersión serán las de las colisiones frontales correspondientes al valor <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>π</mi></mrow></math>, es decir, <math display=\"block\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>E</mi></mfrac></mrow></math> o menores. Al ver que su ley solo se cumplía con energías <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>E</mi><mo>&gt;</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup></mrow></math> m, Rutherford concluyó que la dimensión del núcleo era del orden de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup></math> m (y no el diámetro del átomo, de <math display=\"inline\"><mrow><mi>d</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m). La materia está casi vacía: el núcleo está en el átomo «como una mosca en una catedral»."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Recorrido libre medio"
    },
    {
     "mota": "testua",
     "html": "Podemos valernos de la sección eficaz total para describir cómo se atenúa un haz de partículas que se mueve a través de la materia. Estudiemos, para empezar, una partícula del haz que se mueve en un material con <math display=\"inline\"><mi>N</mi></math> átomos por unidad de volumen. Si la sección eficaz total entre la partícula y un átomo es <math display=\"inline\"><mi>σ</mi></math>, para que haya choque entre ambos el átomo debe estar en el cilindro de sección transversal <math display=\"inline\"><mi>σ</mi></math> que tiene por eje la trayectoria de la partícula. En consecuencia, al recorrer una distancia <math display=\"inline\"><mi>x</mi></math>, la partícula sufrirá el efecto de los <math display=\"inline\"><mrow><mi>N</mi><mi>σ</mi><mi>x</mi></mrow></math> átomos que hay en el cilindro y el camino medio recorrido entre colisiones, que se llama recorrido libre medio, será: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>N</mi><mi>σ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Recorrido libre e intensidad del haz de partículas.",
     "src": "../media/irudiak/55404dcb336c8fd4.svg",
     "zabalera": 259
    },
    {
     "mota": "testua",
     "html": "Supongamos que el haz de partículas es perpendicular a la superficie del material y que su intensidad en la superficie es <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y la de las partículas que se mueven a la profundidad <math display=\"inline\"><mi>x</mi></math> sin chocar con los átomos (y, por tanto, sin desviarse) es <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Así, si consideramos una lámina de grosor <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> situada a la distancia <math display=\"inline\"><mi>x</mi></math>, dentro hay <math display=\"inline\"><mrow><mi>N</mi><mi>A</mi><mi>d</mi><mi>x</mi></mrow></math> átomos y por unidad de tiempo se producirán <math display=\"inline\"><mrow><mi>N</mi><mi>A</mi><mi>σ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> colisiones. Como las partículas que entran en la lámina por unidad de tiempo son <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi></mrow></math>, las que salen sin chocar son las siguientes: <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo>−</mo><mi>N</mi><mi>A</mi><mi>σ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Desarrollando aquí <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>I</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, obtenemos <math display=\"inline\"><mrow><msup><mi>I</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>N</mi><mi>σ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y esto, recordando la condición inicial <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se escribe de la siguiente forma equivalente si usamos el método de separación de variables de la sección 1.4.3: <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>N</mi><mi>σ</mi><mi>x</mi></mrow></msup><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi><mi>/</mi><mi>λ</mi></mrow></msup><mi>.</mi></mrow></math> Si el grosor de la muestra es <math display=\"inline\"><mi>d</mi></math>, las colisiones que se producen por unidad de tiempo serán <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>d</mi><mi>/</mi><mi>λ</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi></mrow></math>. Si la muestra es muy delgada, es decir, si <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>λ</mi></mrow></math>, podemos usar el desarrollo <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>d</mi><mi>/</mi><mi>λ</mi></mrow></msup><mo>≈</mo><mn>1</mn><mo>−</mo><mi>d</mi><mi>/</mi><mi>λ</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>N</mi><mi>σ</mi><mi>d</mi></mrow></math> y el número de colisiones será <math display=\"inline\"><mrow><mi>N</mi><mi>σ</mi><mi>d</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi></mrow></math>: precisamente el producto del número <math display=\"inline\"><mrow><mi>σ</mi><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de colisiones que se producen con un átomo y el de átomos <math display=\"inline\"><mrow><mi>N</mi><mi>A</mi><mi>d</mi></mrow></math> de la muestra. Por la misma razón, cuando la muestra es muy delgada, si no hay colisiones múltiples, la sección eficaz diferencial se obtiene multiplicando la correspondiente a una sola partícula por el número de núcleos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Secciones eficaces en el centro de masas y en el laboratorio"
    },
    {
     "mota": "testua",
     "html": "Hasta ahora, para simplificar, hemos tomado el polo de fuerzas como fijo, pero eso no será siempre cierto. Supongamos que en el laboratorio se lanzan proyectiles contra blancos libres idénticos que inicialmente están en reposo. (Un proceso físico así es el bombardeo de protones (casi) en reposo con protones de alta energía, por ejemplo.) En general, las colisiones entre partículas se estudian con más facilidad en el sistema del centro de masas, como vimos en la sección 1.5.7 (véase también el problema 4.108); pero las medidas se hacen en el sistema del laboratorio."
    },
    {
     "mota": "testua",
     "html": "Supongamos que en el sistema del centro de masas se ha calculado la relación entre el parámetro de impacto <math display=\"inline\"><mi>b</mi></math> y el ángulo de dispersión <math display=\"inline\"><msup><mi>θ</mi><mo>*</mo></msup></math> y que, en consecuencia, se conoce <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><msup><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>b</mi><mi>d</mi><mi>b</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup><mi>d</mi><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow></mfrac></mrow></math>. En efecto, los ángulos de dispersión medidos en el movimiento relativo y en el centro de masas son iguales, por la proporcionalidad (1.165), ya que las direcciones son las mismas. Además, la velocidad y la energía que tenía el proyectil en el infinito se miden de la misma manera en el sistema del laboratorio y en el movimiento relativo, si inicialmente el blanco estaba en reposo. Por tanto, cuando la dispersión es newtoniana, los resultados de Rutherford pueden usarse en el centro de masas si en lugar de la masa del proyectil se usa la masa reducida del sistema."
    },
    {
     "mota": "testua",
     "html": "El número de partículas dispersadas en un cono infinitesimal será, naturalmente, el mismo en el centro de masas y en el sistema del laboratorio: <math display=\"block\"><mrow><mi>d</mi><mi>σ</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><msup><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msup></mrow></mfrac><mi>d</mi><msup><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msup><mo>=</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mi>.</mi></mrow></math> En consecuencia, usando la expresión (4.108) y la correspondiente en el centro de masas, se obtiene <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><msup><mi mathvariant=\"normal\">Φ</mi><mo>*</mo></msup></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><msup><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msup></mrow></mfrac></mrow></math>. Para calcular la expresión explícita general hay que usar el resultado (1.185), que da la relación entre los ángulos de dispersión de los dos sistemas; pero aquí no haremos el cálculo general (estudiaremos un caso particular en el problema 4.107)."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "El problema de los tres cuerpos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El problema que hemos estudiado hasta ahora, el movimiento relativo de dos cuerpos que se mueven por efecto de fuerzas internas centrales, es muy especial. En principio, en un movimiento así hay que dar seis condiciones iniciales: las tres componentes de la posición relativa inicial y las tres de la velocidad. Usando las leyes de conservación de la energía mecánica y del momento angular<span class=\"j-oin\">[Si la fuerza es central y newtoniana, hay otra constante del movimiento: el vector de Laplace, Runge y Lenz (véase el problema 4.35).]</span>, hemos reducido las ecuaciones del movimiento a las integrales (4.24) y (4.26). Si se dan la energía mecánica, el momento angular y dos condiciones iniciales, <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el movimiento puede calcularse, al menos si somos capaces de resolver las integrales citadas. Esto último no ocurre a menudo (sin recurrir a métodos aproximados), pero en el caso de los tres cuerpos suele ser imposible incluso reducir el problema a integrales."
    },
    {
     "mota": "testua",
     "html": "En efecto, en el problema general de los tres cuerpos la energía mecánica suele ser la única constante del movimiento en el sistema del centro de masas, y las condiciones iniciales son doce. Para simplificar de algún modo las cosas (no son nada simples, pero) haremos más hipótesis de aquí en adelante."
    },
    {
     "mota": "irudia",
     "oina": "Una órbita del problema restringido circular de tres cuerpos en el sistema rotatorio y en el del centro de masas.",
     "src": "../media/irudiak/667d5edb647deff9.svg",
     "zabalera": 320
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema restringido circular de los tres cuerpos"
    },
    {
     "mota": "testua",
     "html": "Supongamos que uno de los tres cuerpos, que suele llamarse <strong>planetoide</strong>, tiene una masa tan pequeña que su efecto sobre el movimiento de los otros dos es despreciable. Los otros dos, llamados <strong>primarios</strong>, se mueven en órbitas circulares uno en torno al otro y, en consecuencia, en torno al centro de masas. (Por ejemplo, los primarios pueden ser el Sol y Júpiter y el planetoide un asteroide.) Además, el planetoide se mueve en el plano de la órbita de los primarios; el problema es plano y las condiciones iniciales serán cuatro (una puede ser la energía mecánica). Para estudiar el movimiento del planetoide elegiremos el origen del sistema de referencia en el centro de masas y los ejes coordenados girarán junto con los primarios; los primarios estarán, por tanto, en reposo relativo en el eje <math display=\"inline\"><mi>X</mi></math>. Este sistema rotatorio no es inercial y, además de la atracción gravitatoria de los dos primarios, en la ecuación del movimiento aparecerán la fuerza centrífuga y la de Coriolis (véase el problema 2.7.3). Incluso con todas estas hipótesis el problema es muy difícil. Como ejemplo, en la figura 4.23 se muestra una parte de una órbita: a la izquierda en el sistema rotatorio definido arriba y a la derecha en el sistema inercial del centro de masas situado en el mismo punto. Aunque en este ejemplo las masas de los dos primarios son iguales (los dos primarios estarán siempre en dos puntos opuestos de la órbita circular en torno al centro de masas), la órbita no es tan simple como las que hemos visto hasta ahora."
    },
    {
     "mota": "irudia",
     "oina": "Puntos de Lagrange y dos órbitas en el sistema Tierra-Luna.",
     "src": "../media/irudiak/412779484269beaa.svg",
     "zabalera": 318
    },
    {
     "mota": "azpititulua",
     "testua": "Puntos de Lagrange"
    },
    {
     "mota": "testua",
     "html": "Que la mayoría de las órbitas sean muy complicadas no quiere decir que no haya órbitas más sencillas. De hecho, el movimiento más simple es el equilibrio y, como demostró Lagrange, en el sistema rotatorio hay cinco puntos de equilibrio (véase el problema 2.7.4). Los tres primeros (<math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>3</mn></msub></math>) están en la recta que une los primarios y son siempre inestables (véanse [16] y [19]). Por tanto, para mantener un satélite en torno a un punto así hay que usar motores; pero, a veces, teniendo en cuenta otras ventajas, pueden ser útiles. Así, en el punto <math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math> del Sol y la Tierra está el satélite llamado <em>Solar and Heliospheric Observatory Satellite</em> (SOHO), ya que desde allí siempre se ve el Sol. Para evitar la interferencia del Sol, en el punto <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math> están los satélites <em>Wilkinson Microwave Anisotropy Probe</em> (WMAP) y Planck, que estudian el fondo cósmico de microondas."
    },
    {
     "mota": "testua",
     "html": "Por otra parte, los puntos <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math>, que forman con los dos primarios triángulos equiláteros, son estables si las masas de los primarios cumplen la condición siguiente<span class=\"j-oin\">[Véanse, por ejemplo, [16], [19] y [71]]</span>.: <math display=\"block\"><mrow><mi>μ</mi><mo>≡</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mo>&lt;</mo><mfrac><mrow><mn>9</mn><mo>−</mo><msqrt><mn>69</mn></msqrt></mrow><mn>18</mn></mfrac><mo>≈</mo><mn>0.0385</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>μ</mi><mo>≠</mo><mn>0.0109</mn><mi>…</mi><mo>,</mo><mn>0.0135</mn><mi>…</mi><mo>,</mo><mn>0.0242</mn><mi>…</mi></mrow></math> Estas condiciones se cumplen si los primarios son el Sol y un planeta, o la Tierra y la Luna. Hay que subrayar que estas soluciones son puntos de equilibrio relativo, ya que solo están en reposo en el sistema rotatorio; en el sistema del centro de masas giran junto con los primarios, pero con un adelanto o retraso constante de <math display=\"inline\"><mrow><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, como se ve en la figura 4.24."
    },
    {
     "mota": "irudia",
     "oina": "Una órbita de Arenstorf en el sistema rotatorio y en el del centro de masas.",
     "src": "../media/irudiak/eff8f21c4cd3a6f0.svg",
     "zabalera": 337
    },
    {
     "mota": "testua",
     "html": "Los puntos de Lagrange se consideraban una curiosidad matemática, pero a partir de 1906 se empezaron a descubrir asteroides en torno a los puntos <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> de Júpiter: Aquiles, Patroclo, Héctor, Néstor, Príamo, Agamenón, etc. Hoy en día se conocen más de mil (casi dos tercios en torno al punto <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math>) y se llaman <strong>troyanos</strong>. El primer troyano de Marte, Eureka, se descubrió en 1990. En 2012 se obtuvieron en el laboratorio análogos cuánticos de los troyanos, en átomos de Rydberg (es decir, átomos grandes en niveles de energía muy altos)."
    },
    {
     "mota": "testua",
     "html": "En el sistema que tiene como primarios la Tierra y la Luna no hay ningún cuerpo grande en torno a los puntos <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math>, pero sí extensas nubes formadas por cuerpos pequeños, descubiertas por primera vez en 1956."
    },
    {
     "mota": "irudia",
     "oina": "Otras dos órbitas de Arenstorf en el sistema rotatorio.",
     "src": "../media/irudiak/5a84a0350dc93088.svg",
     "zabalera": 347
    },
    {
     "mota": "testua",
     "html": "Hay, además, órbitas periódicas inestables, como las descubiertas por Arenstorf (algunas de ellas se muestran en las figuras 4.25 y 4.26)."
    },
    {
     "mota": "testua",
     "html": "En 1999 se descubrió otro tipo de solución, las órbitas que unen los puntos <math display=\"inline\"><msub><mi>L</mi><mn>3</mn></msub></math>, <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> del sistema Sol-Tierra; en una de ellas se mueve el asteroide Cruithne<span class=\"j-oin\">[Véase la simulación de la página <a href=\"http://burtleburtle.net/bob/physics/cruithne.html\" target=\"_blank\" rel=\"noopener\"><code>burtleburtle.net/bob/physics/cruithne.html</code></a>.]</span>, de 5 km de diámetro, que según los cálculos permanecerá en ella durante 5000 años."
    },
    {
     "mota": "testua",
     "html": "Como se muestra en la figura 4.24, si un planetoide está en el punto <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> o <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math>, los tres cuerpos (los dos primarios y el planetoide) están siempre en los vértices de un triángulo equilátero rotatorio: giran como un sólido rígido en torno a su centro de masas, con velocidad angular <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>G</mi><mi>M</mi><mi>/</mi><msup><mi>a</mi><mn>3</mn></msup></mrow></msqrt></mrow></math>, si la masa total de los tres cuerpos es <math display=\"inline\"><mi>M</mi></math> y la longitud de los lados del triángulo es <math display=\"inline\"><mi>a</mi></math>. El propio Lagrange demostró que esta solución triangular existe incluso cuando la masa del planetoide no es despreciable: es una solución del problema <em>general</em> de los tres cuerpos<span class=\"j-oin\">[Véase, por ejemplo, [114].]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Órbita periódica estable de Moore.",
     "src": "../media/irudiak/ffc09aa709723b6a.svg",
     "zabalera": 193
    },
    {
     "mota": "testua",
     "html": "Por otra parte, en los últimos años se han descubierto muchas otras soluciones periódicas de problemas más generales de <math display=\"inline\"><mi>n</mi></math> cuerpos. Quizá la más sorprendente sea la que descubrió C. Moore en 1993, pues es <em>estable</em>: tres partículas idénticas se mueven en la misma órbita de la figura 4.27 y el momento angular total es cero."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Problemas resueltos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El problema de Newton"
    },
    {
     "mota": "testua",
     "html": "<em>Supongamos que no se conoce la ley de gravitación de Newton: se tomarán como punto de partida las leyes de Kepler. <br> (a) Demuestra que de las leyes primera y segunda de Kepler se deduce el carácter central de la fuerza que sufre un planeta. <br> (b) Con ese resultado y con la primera ley de Kepler, ¿cómo puede demostrarse que la fuerza es inversamente proporcional al cuadrado de la distancia entre el Sol y el planeta? <br> (c) Usa los resultados de los dos apartados anteriores y la tercera ley de Kepler para deducir que la fuerza es proporcional a la masa del planeta.</em>"
    },
    {
     "mota": "testua",
     "html": "(a) Por la primera ley, la dirección del momento angular respecto al foco de la órbita elíptica es perpendicular al plano de la elipse y, por tanto, constante. Por la segunda ley, el módulo y el sentido del momento también son constantes. Así pues, como el momento angular es constante, tenemos <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "(b) Como la órbita es elíptica, su ecuación en coordenadas polares es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ε</mi><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>p</mi></mrow></math> y, usando la fórmula de Binet, tenemos: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>L</mi><mn>2</mn></msup><mi>m</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mi>p</mi></mrow></mfrac><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mi>m</mi><mi>p</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(c) Como en los dos apartados anteriores hemos demostrado que el campo de fuerza es newtoniano, tenemos: <math display=\"block\"><mrow><mfrac><msup><mi>T</mi><mn>2</mn></msup><msup><mi>a</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mi>m</mi></mrow><mi>k</mi></mfrac><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>∝</mo><mi>m</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo puede demostrarse que la fuerza es proporcional a la masa del Sol?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Curvas cónicas"
    },
    {
     "mota": "testua",
     "html": "<em>Supongamos que elegimos un punto y una recta. Llamaremos <strong>foco</strong> al punto y <strong>directriz</strong> a la recta. El cociente entre las distancias de un punto al foco y a la directriz es la <strong>excentricidad</strong>. Por definición, las curvas cónicas son los lugares geométricos de los puntos de excentricidad constante <math display=\"inline\"><mi>ε</mi></math>. La distancia <math display=\"inline\"><mi>p</mi></math> entre la curva y el foco, medida en la dirección de la directriz, se llama <strong>parámetro focal</strong>. Elige el origen en el foco y el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> perpendicular a la directriz. Demuestra que en coordenadas polares la ecuación de las curvas cónicas es</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>±</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>y deduce que las curvas cónicas (que en la geometría clásica también se definían como intersección entre superficies cónicas y planos) son circunferencias, elipses, parábolas o hiperbólicas ramas de hipérbola.</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Como se ve en la figura, <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mi>p</mi><mi>D</mi></mfrac><mo>=</mo><mfrac><mi>r</mi><mi>d</mi></mfrac><mo>=</mo><mfrac><msup><mi>r</mi><mo>′</mo></msup><msup><mi>d</mi><mo>′</mo></msup></mfrac><mi>.</mi></mrow></math> Por otra parte, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mi>d</mi><mo>=</mo><msup><mi>r</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>ϕ</mi><mo>′</mo></msup><mo>−</mo><msup><mi>d</mi><mo>′</mo></msup></mrow></math></span> y aquí <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mfrac><mi>p</mi><mi>ε</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>d</mi><mo>=</mo><mfrac><mi>r</mi><mi>ε</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>d</mi><mo>′</mo></msup><mo>=</mo><mfrac><msup><mi>r</mi><mo>′</mo></msup><mi>ε</mi></mfrac></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/b465bc1cbbd19adc.svg",
         "zabalera": 135
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "haciendo, tenemos: <math display=\"block\"><mrow><mfrac><mi>p</mi><mi>ε</mi></mfrac><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mfrac><mi>r</mi><mi>ε</mi></mfrac><mo>=</mo><msup><mi>r</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>ϕ</mi><mo>′</mo></msup><mo>−</mo><mfrac><msup><mi>r</mi><mo>′</mo></msup><mi>ε</mi></mfrac><mi>.</mi></mrow></math> Como hemos demostrado en las secciones 4.3.1, 4.3.2, 4.4.1 y 4.4.2, la curva dada por una ecuación así es una circunferencia, una elipse, una parábola o una rama de hipérbola."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Satélites"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<em>Un satélite formado por una varilla sin peso y dos masas esféricas de <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>20</mn></mrow></math> kg se mueve en una órbita circular, como se muestra en la figura. A lo largo de todo el movimiento la varilla de longitud <math display=\"inline\"><mrow><mi>l</mi><mo>≪</mo><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> está en dirección radial sin sufrir ningún esfuerzo. Calcula la distancia <math display=\"inline\"><mi>l</mi></math>.</em>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/69bcb978c65a65dd.svg",
         "zabalera": 155
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la varilla no ejerce ninguna fuerza, las fuerzas serán la aportación de la Tierra y la de la interacción entre las masas y, en consecuencia, las ecuaciones del movimiento de las dos masas son las siguientes: <math display=\"block\"><mrow><mfrac><mrow><mi>G</mi><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mn>2</mn></msup></mrow><msup><mi>l</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>G</mi><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub><mo>+</mo><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mn>2</mn></msup></mrow><msup><mi>l</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub><mo>+</mo><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> A veces, para simplificar los cálculos, las variables adimensionales resultan muy útiles para abreviar las expresiones intermedias (pero se pierde la comprobación de las dimensiones, tan útil para hallar errores de cálculo). En este caso, si usamos las variables <math display=\"block\"><mrow><mi>d</mi><mo>≡</mo><mfrac><mi>l</mi><mrow><mn>5</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>μ</mi><mo>≡</mo><mfrac><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>Q</mi><mo>≡</mo><mfrac><mrow><mn>125</mn><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>R</mi><mo>⊕</mo><mn>3</mn></msubsup></mrow><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow></mfrac></mrow></math>, las ecuaciones del movimiento nos aparecen así: <math display=\"block\"><mrow><mn>1</mn><mo>−</mo><mfrac><mi>μ</mi><msup><mi>d</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>Q</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>d</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mi>μ</mi><msup><mi>d</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Sustituyendo la primera ecuación en la segunda se obtiene: <math display=\"block\"><mrow><mi>μ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>5</mn><mi>d</mi><mo>+</mo><mn>4</mn><msup><mi>d</mi><mn>2</mn></msup><mo>+</mo><msup><mi>d</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>d</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>+</mo><mn>3</mn><mi>d</mi><mo>+</mo><msup><mi>d</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por tanto, usando que <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mn>1</mn></mrow></math>, solo hay que conservar en los paréntesis el primer término: <math display=\"block\"><mrow><mn>2</mn><mi>μ</mi><mo>≈</mo><mn>3</mn><msup><mi>d</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Si se prefiere, por el desarrollo de Taylor tenemos: <math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>d</mi><mn>3</mn></msup><mfrac><mrow><mn>3</mn><mo>+</mo><mn>3</mn><mi>d</mi><mo>+</mo><msup><mi>d</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mo>+</mo><mn>5</mn><mi>d</mi><mo>+</mo><mn>4</mn><msup><mi>d</mi><mn>2</mn></msup><mo>+</mo><msup><mi>d</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msup><mi>d</mi><mn>3</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>d</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En cualquier caso, <math display=\"block\"><mrow><mi>l</mi><mo>≈</mo><mn>5</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>m</mi><mrow><mn>3</mn><msub><mi>M</mi><mo>⊕</mo></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></msup><msub><mi>R</mi><mo>⊕</mo></msub><mo>≈</mo><mn>0.42</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Órbita de Hohmann"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<em>Para pasar de una órbita circular a otra, un satélite puede usar una órbita elíptica tangente a las dos circunferencias. ¿Cuándo hay que encender el motor? ¿Cómo cambiará la velocidad al usar el motor? Si la velocidad de los gases expulsados por el motor es <math display=\"inline\"><mi>u</mi></math>, ¿cuál es la masa total de gas que se usará para hacer el viaje?</em>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/9939103427ec3c99.svg",
         "zabalera": 131
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como en las tres órbitas el movimiento se produce por efecto de la gravedad, el motor solo debe usarse para cambiar de órbita: precisamente en los puntos <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>. Como en esos puntos las órbitas son tangentes, la dirección de la velocidad no cambiará. Para calcular los módulos de las velocidades usaremos que la energía mecánica de las órbitas cerradas es <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mi>r</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>m</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><mn>2</mn><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>m</mi><mo>′</mo></msup><msubsup><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mo>′</mo></msup><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mo>′</mo></msup><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>m</mi><mo>′</mo></msup><msubsup><mi>v</mi><msup><mn>2</mn><mo>′</mo></msup><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mo>′</mo></msup><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><msup><mi>m</mi><mo>′</mo></msup><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><mn>2</mn><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> De aquí se deduce que los cambios de velocidad son los siguientes: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>1</mn></msub><mo>≡</mo><msub><mi>v</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mfrac><mrow><mn>2</mn><msub><mi>r</mi><mn>2</mn></msub></mrow><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac></msqrt><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>2</mn></msub><mo>≡</mo><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><msqrt><mfrac><mrow><mn>2</mn><msub><mi>r</mi><mn>1</mn></msub></mrow><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Para calcular los cambios de masa puede usarse que el momento lineal total del sistema formado por el gas y el cohete no cambia en cada uno de los puntos <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>. Si en un intervalo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> el cambio de velocidad del cohete es <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi></mrow></math> y el de masa <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, la masa de los gases expulsados en ese intervalo es <math display=\"inline\"><mrow><mi>−</mi><mi>d</mi><mi>m</mi></mrow></math> y la ley de conservación se escribe así: <math display=\"block\"><mrow><mi>m</mi><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>d</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>+</mo><mi>d</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>d</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> o bien (despreciando el término de segundo orden <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mi>d</mi><mi>v</mi></mrow></math>) <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>m</mi></mrow><mi>m</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mi>u</mi></mfrac><mi>.</mi></mrow></math> (Esta es la ecuación del movimiento de la masa variable. Véase el problema 1.91.) Integrando esta ecuación en torno a cada uno de los puntos <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>, obtenemos: <math display=\"block\"><mrow><msup><mi>m</mi><mo>′</mo></msup><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>1</mn></msub><mi>/</mi><mi>u</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><msup><mi>m</mi><mo>′</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>2</mn></msub><mi>/</mi><mi>u</mi></mrow></msup><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>u</mi></mrow></msup><mi>.</mi></mrow></math> Por tanto, la masa total de los gases es la siguiente: <math display=\"block\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>u</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Órbitas acotadas abiertas"
    },
    {
     "mota": "testua",
     "html": "<em>Para comprender mejor el significado del teorema de Bertrand, estudiemos</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><mi>C</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>la energía potencial central, cuando se cumple la siguiente condición:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>σ</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>C</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>&gt;</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>(a) Dibuja la energía potencial efectiva. <br> (b) ¿Cuál es la condición que debe cumplir la energía mecánica para que la órbita esté acotada, cuando la fuerza es atractiva (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>)? <br> (c) Resuelve la ecuación de la órbita. <br> (d) Discute cuándo se dan órbitas periódicas. Comprueba que el pericentro (y el apocentro) precesa, en general, en las órbitas acotadas. <br> (e) Calcula la distancia angular entre dos pericentros consecutivos. <br> (f) Calcula la velocidad de precesión, en el caso en que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>σ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math>.</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Como la energía potencial efectiva es <math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><mi>C</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><mrow><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, para hacer el estudio gráfico basta poner en el caso (4.47) <math display=\"inline\"><mrow><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en lugar de <math display=\"inline\"><msup><mi>L</mi><mn>2</mn></msup></math>. Así, la gráfica es parecida a la de las fuerzas newtonianas (al lado está la correspondiente al caso de los parámetros <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>0.9</mn></mrow></math>) y solo habrá órbitas acotadas si <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y cuando se cumple lo siguiente: <math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>≤</mo><mi>E</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>E</mi><mn>0</mn></msub><mo>≡</mo><mi>−</mi><mfrac><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/dcfac4358250bf5f.svg",
         "zabalera": 188
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La ecuación de la órbita será la dada por la expresión (4.31): <math display=\"block\"><mrow><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mi>∓</mi><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>∓</mi><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>k</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math> Esta última se calcula fácilmente en la integral (4.33) usando los parámetros siguientes: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>a</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>k</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>c</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"normal\">Δ</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Así, con las definiciones <math display=\"block\"><mrow><mi>ε</mi><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac></mrow></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>p</mi><mo>≡</mo><mfrac><mrow><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ω</mi><mi>r</mi></msub><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></msqrt></mrow></math>, la ecuación de la órbita se reduce a lo siguiente (véase también el problema 4.133): <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>p</mi><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math> La mayor diferencia con las cónicas (4.58) del caso de las fuerzas newtonianas es que aparece <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math>."
    },
    {
     "mota": "testua",
     "html": "Naturalmente, en los casos <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub></mrow></math> las órbitas son circulares (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>) y, en consecuencia, cerradas y periódicas. Pero en las demás órbitas acotadas los valores de <math display=\"inline\"><mi>r</mi></math> se repetirán junto con los valores del coseno, es decir, cuando la variación del ángulo <math display=\"inline\"><mi>ϕ</mi></math> viene dada por la siguiente condición: <math display=\"block\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mi mathvariant=\"normal\">Δ</mi><mi>ϕ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>n</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> Los períodos de la distancia son, pues, <math display=\"block\"><mrow><msub><mi>T</mi><mi>r</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow><msub><mi>ω</mi><mi>r</mi></msub></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> y los de la dirección <math display=\"block\"><mrow><msub><mi>T</mi><mi>ϕ</mi></msub><mo>=</mo><mn>2</mn><mi>π</mi><mi>l</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>l</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> La órbita será periódica si los dos períodos son conmensurables, es decir, si la distancia y el ángulo tienen un período común: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow><msub><mi>ω</mi><mi>r</mi></msub></mfrac><mo>=</mo><mn>2</mn><mi>π</mi><mi>l</mi></mrow></math> con un par <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de enteros adecuado. En consecuencia, la órbita será periódica si el parámetro <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math> es tal que sea racional el momento angular correspondiente a las condiciones iniciales: <math display=\"block\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><mfrac><mi>n</mi><mi>l</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> Si la fracción <math display=\"inline\"><mrow><mi>n</mi><mi>/</mi><mi>l</mi></mrow></math> es irreducible, en un período el vector de posición dará <math display=\"inline\"><mi>l</mi></math> vueltas y habrá <math display=\"inline\"><mi>n</mi></math> pericentros (y <math display=\"inline\"><mi>n</mi></math> apocentros). En la figura 4.28 pueden verse tres ejemplos."
    },
    {
     "mota": "testua",
     "html": "Como los números racionales son infinitos, hay infinitas órbitas periódicas; pero como los números irracionales son muchos más, habrá muchas más órbitas acotadas abiertas que cerradas: estas últimas serán la excepción<span class=\"j-oin\">[Desde un punto de vista práctico, si <math display=\"inline\"><mi>n</mi></math> y <math display=\"inline\"><mi>l</mi></math> no son pequeños, habrá que dibujar una órbita muy larga para ver un período. Además, siempre existen valores irracionales <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><mi>q</mi></mrow></math> tan próximos como se quiera a <math display=\"inline\"><mrow><mi>n</mi><mi>/</mi><mi>l</mi></mrow></math> y, si se dibuja una parte de la órbita correspondiente a uno de ellos, no se notará ninguna diferencia (además, recuérdese que el programa de dibujo usa números racionales).]</span>."
    },
    {
     "mota": "testua",
     "html": "La distancia angular entre dos pericentros consecutivos será la dada por la condición <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mi mathvariant=\"normal\">Δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>ω</mi><mi>r</mi></msub></mfrac><mi>.</mi></mrow></math> Por tanto, la precesión en una vuelta es la siguiente: <math display=\"block\"><mrow><mi>δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>−</mo><mn>2</mn><mi>π</mi><mo>=</mo><mn>2</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>r</mi><mrow><mi>−</mi><mn>1</mn></mrow></msubsup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>+</mo><mi>σ</mi></mrow></msqrt></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el caso <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>σ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math>, si en el último resultado se usa el binomio de Newton, obtenemos la siguiente aproximación: <math display=\"block\"><mrow><mi>δ</mi><msub><mi>ϕ</mi><mo>−</mo></msub><mo>≈</mo><mi>−</mi><mi>π</mi><mi>σ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Una parte de una órbita en la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi><mo>+</mo><mi>C</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> cuando <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>0.1</mn></mrow></math>. Las otras se obtienen cuando <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mi>−</mi><mn>3</mn><mi>/</mi><mn>4</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>−</mo><mn>16</mn><mi>/</mi><mn>25</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>3</mn></mrow></math>, es decir, para valores <math display=\"inline\"><mrow><mi>n</mi><mi>/</mi><mi>l</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>3</mn><mi>/</mi><mn>5</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>2</mn></mrow></math>.",
     "src": "../media/irudiak/22672bc79f10f39e.svg",
     "zabalera": 360
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pozo de potencial rectangular"
    },
    {
     "mota": "testua",
     "html": "<em>En la física nuclear se usa la siguiente energía potencial central:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><msub><mi>V</mi><mn>0</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>r</mi><mo>&lt;</mo><mi>a</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>r</mi><mo>&gt;</mo><mi>a</mi><mo>;</mo></mtd></mtr></mtable></mrow><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Demuestra que la dispersión de una partícula de energía <math display=\"inline\"><mi>E</mi></math> en ese potencial es equivalente a la refracción de la luz producida por una esfera de radio <math display=\"inline\"><mi>a</mi></math> con el siguiente índice de refracción relativo:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><msub><mi>V</mi><mn>0</mn></msub><mi>E</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Comprueba que la sección eficaz diferencial es la siguiente:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi mathvariant=\"normal\">Φ</mi><mo>≤</mo><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≡</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos </mtext><mspace width=\"0.333em\"></mspace></mrow><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>¿Cuál es la sección eficaz total de dispersión?</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Como la energía potencial es discontinua, la partícula sufre un impulso central al atravesar el límite <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math>. La componente azimutal <math display=\"inline\"><mrow><msub><mi>v</mi><mi>ϕ</mi></msub><mo>=</mo><mi>r</mi><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> de la velocidad no cambiará, pero sí la radial <math display=\"inline\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y, en consecuencia, la velocidad escalar. El cambio de esta última se calcula fácilmente usando la ley de conservación de la energía mecánica: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>−</mo><msub><mi>V</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Como se ve en la figura, tenemos <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><msub><mi>v</mi><mi>ϕ</mi></msub><mi>v</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><msup><mfrac><msub><mi>v</mi><mi>ϕ</mi></msub><mi>v</mi></mfrac><mo>′</mo></msup></mrow></math> y, en consecuencia, <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>v</mi><mo>′</mo></msup><mi>v</mi></mfrac><mo>=</mo><msqrt><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>E</mi><mo>+</mo><msub><mi>V</mi><mn>0</mn></msub></mrow><mi>E</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/62257f2de8df9e3e.svg",
         "zabalera": 175
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La relación entre el parámetro de impacto y el ángulo de dispersión se halla así, teniendo en cuenta que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>α</mi><mo>−</mo><mi>β</mi></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>b</mi><mi>a</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></msqrt><mo>=</mo><mfrac><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mi>a</mi></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>b</mi><mrow><mi>n</mi><mi>a</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></msqrt><mo>=</mo><mfrac><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mrow><mi>n</mi><mi>a</mi></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mi>n</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>a</mi><mi>n</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></msqrt></mfrac><mi>.</mi></mtd></mtr></mtable></math> Aquí se ve que, al aumentar el parámetro <math display=\"inline\"><mi>b</mi></math> de <math display=\"inline\"><mn>0</mn></math> a <math display=\"inline\"><mi>a</mi></math>, el ángulo <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> va de <math display=\"inline\"><mn>0</mn></math> al valor máximo <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>≡</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arccos </mtext><mspace width=\"0.333em\"></mspace></mrow><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Al calcular la sección eficaz diferencial hay que tener en cuenta que al aumentar <math display=\"inline\"><mi>b</mi></math> aumenta <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>, para usar el valor absoluto del resultado (4.109): <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>b</mi><mi>d</mi><mi>b</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></mfrac><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mi mathvariant=\"normal\">cos</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La sección total, <math display=\"inline\"><mrow><mi>π</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>, es el área geométrica, naturalmente. Esto se comprueba fácilmente mediante el cambio de variable <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>σ</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><msubsup><mo>∫</mo><mn>0</mn><msub><mi mathvariant=\"normal\">Φ</mi><mi mathvariant=\"normal\">max</mi></msub></msubsup><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>π</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>I</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>I</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≡</mo><msubsup><mo>∫</mo><mn>1</mn><mrow><mn>1</mn><mi>/</mi><mi>n</mi></mrow></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>u</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>4</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>+</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><msup><mi>u</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>n</mi><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>1</mn><mrow><mn>1</mn><mi>/</mi><mi>n</mi></mrow></msubsup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>σ</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>π</mi><msup><mi>a</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math>"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ecuaciones del movimiento y principios de conservación</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si el radio de la órbita de un satélite es el menor que puede tener sin tocar la atmósfera, ¿cuál es el período? <br>  <em>Nota</em>: Para obtener el resultado numérico no uses tablas, sino los valores que te sepas de memoria."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energía cinética y momento angular del problema de dos cuerpos",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En este tema hemos definido la energía cinética y el momento angular así: <math display=\"block\"><mrow><mi>T</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"bold-italic\">𝑳</mi><mo>≡</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Está claro que esas son las definiciones que hay que usar en el caso de una única partícula que se mueve en un campo central. Pero en el movimiento relativo de dos cuerpos el vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> es la posición relativa y la constante <math display=\"inline\"><mi>m</mi></math> la masa reducida: ¿cuál es entonces el significado físico de las definiciones anteriores en el sistema del centro de masas? ¿Y qué es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> en el sistema del centro de masas?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Movimiento unidimensional (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se suelta desde la coordenada <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math> en el potencial newtoniano <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math>. Calcula el tiempo que necesita para llegar al polo de fuerzas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Movimiento unidimensional (II)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudia el movimiento unidimensional que se produce en un potencial newtoniano. Calcula la solución <math display=\"inline\"><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demuestra que, cuando la energía mecánica es negativa, llega necesariamente al polo de fuerzas en un tiempo finito."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energía potencial elástica isótropa (Newton, <em>Principia</em>)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa coordenadas cartesianas para hallar las órbitas en el caso de la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mspace width=\"0.167em\"></mspace><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>, cuando <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> (véase el problema 7.78). ¿Qué leyes pueden usarse en este caso en lugar de las leyes de Kepler? (Hay una simetría entre estos dos problemas: véase, por ejemplo, [88].)  <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Véanse las figuras de Lissajous de la sección 7.5.2 y la siguiente simulación:"
      },
      {
       "mota": "testua",
       "html": "<a href=\"http://tp.lc.ehu.eus/jma/mekanika/zentralak/harmonikoa.html\" target=\"_blank\" rel=\"noopener\"><code>.../harmonikoa.html</code></a>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energía potencial elástica isótropa (II)",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa coordenadas polares para hallar de nuevo la forma geométrica de las órbitas del problema 4.5. ¿Qué cambia si <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Cálculo de la energía potencial (Newton, <em>Principia</em>)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La órbita de una partícula que se mueve bajo la acción de un campo de fuerza central es circular y el polo de fuerzas <math display=\"inline\"><mi>O</mi></math> está en la órbita. Halla la ecuación <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la órbita y demuestra que la energía potencial es de la forma <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>4</mn></msup></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/9992c0b608c38768.svg\" alt=\"\" style=\"width:95px\" loading=\"lazy\">"
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
       "html": "¿Cuáles son la energía mecánica y el momento angular de la partícula del problema 4.7?"
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
       "html": "La órbita de una partícula que se mueve en un campo de fuerza central es circular. ¿Puede estar el polo de fuerzas fuera del círculo rodeado por la órbita?"
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
       "html": "Se sospecha que una estrella tiene un planeta. El planeta no se ve directamente, pero según las medidas de los astrónomos la estrella se mueve con velocidad constante de <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>1</mn></mrow></math>  km/s en una circunferencia con un período de <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>1</mn></mrow></math> años. Por otra parte, se ha hallado que la masa de la estrella es <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> kg. Calcula la masa <math display=\"inline\"><mi>m</mi></math> del planeta. <br>  <em>Sugerencia</em>: En la ecuación que queda en el último paso del cálculo pueden usarse aproximaciones sucesivas para obtener la solución."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "La paradoja del satélite",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudia el movimiento de una partícula que sufre un campo de fuerza central atractivo <math display=\"inline\"><mrow><mi>−</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y un rozamiento <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>γ</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Halla y resuelve la ecuación de evolución del momento angular. ¿Están todos los puntos de cada órbita en un plano fijo? ¿Por qué? De aquí en adelante, la fuerza central será newtoniana (<math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>) y el rozamiento bastante pequeño, de modo que <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>γ</mi></mrow></math> sea mucho mayor que el período de la órbita. En ese caso la órbita puede ser casi circular. ¿Por qué? Calcula cómo cambian, aproximadamente, el radio y la velocidad de una órbita así. Demuestra que la velocidad aumenta, aunque haya rozamiento. ¿De dónde viene la energía necesaria para ello?"
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
       "html": "¿Qué cambiaría en la definición de las fuerzas centrales si solo se exigiera que la línea de aplicación de la fuerza pasara por un punto fijo, sin imponer ninguna condición sobre el módulo? Explica la respuesta con un ejemplo adecuado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 3,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Discute la existencia y la estabilidad de las órbitas circulares cuando el campo de fuerza central es el correspondiente a la energía potencial de Yukawa: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>r</mi><mi>/</mi><mi>a</mi></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>a</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "¿Cómo es la energía potencial de una fuerza central si, en las órbitas circulares centradas en el polo de fuerzas,"
      },
      {
       "mota": "testua",
       "html": "<em>órbitas circulares</em>"
      },
      {
       "mota": "testua",
       "html": "la velocidad no depende del radio? ¿Y si lo que no depende del radio es la velocidad angular? ¿Y si el momento angular no depende del radio?"
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
       "html": "Dos satélites idénticos se mueven en órbitas circulares de radios <math display=\"inline\"><mrow><mn>3</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> y <math display=\"inline\"><mrow><mn>4</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math><span class=\"j-oin\">[Recuérdese que <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> es el radio de la Tierra. (Véase la pág. 637.)]</span> en el mismo plano, unidos por un hilo ligero de longitud <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math>. Halla el período de los satélites y la tensión del hilo. <br>  <em>Nota</em>: Los datos son la masa <math display=\"inline\"><mi>m</mi></math> de los satélites, el radio <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> de la Tierra y la aceleración de la gravedad estándar <math display=\"inline\"><mi>g</mi></math>."
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
       "html": "Una partícula puntual se acerca, desde muy gran distancia, al polo de fuerzas de la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>4</mn></msup></mrow></math>, con parámetro de impacto <math display=\"inline\"><mi>b</mi></math> y con la siguiente velocidad: <math display=\"block\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><mi>k</mi></mrow><mrow><mi>m</mi><msup><mi>b</mi><mn>4</mn></msup></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Dibuja la energía potencial efectiva y el nivel de energía correspondiente a la órbita. Usa esa información para dibujar un esbozo de la órbita. Calcula la ecuación de la órbita."
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
       "html": "Usa lo aprendido en este tema para hallar la forma geométrica de la trayectoria del problema 2.4."
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
       "html": "En un buen libro de texto se usaba la siguiente figura para explicar la forma geométrica de una órbita acotada general bajo una fuerza central (<math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> son las distancias del pericentro y del apocentro). Por desgracia, esa órbita es imposible. Explica por qué<span class=\"j-oin\">[El excelente profesor José Luis Arias nos propuso este problema en 1970, en mecánica de segundo curso. Tras aparecer durante muchos años en el texto, en 2004 se corrigió esa figura en el citado libro.]</span>."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/48c0eb56326b2f11.svg\" alt=\"\" style=\"width:97px\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Estabilidad de las órbitas circulares",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Queremos demostrar en este problema los resultados de la sección 4.1.9 para el caso de perturbaciones pequeñas generales. Considera la órbita circular de ecuación <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub></mrow></math>, con momento angular <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><msub><mi>L</mi><mn>0</mn></msub></mrow></math>, y la órbita próxima <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, de momento angular <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><msub><mi>L</mi><mn>0</mn></msub><mo>+</mo><mi>η</mi></mrow></math>. Desarrolla la ecuación del movimiento radial de la segunda órbita en torno a la órbita circular y conserva solo los términos lineales en las variables <math display=\"inline\"><mi>ε</mi></math> y <math display=\"inline\"><mi>η</mi></math>. Analiza la aproximación lineal que resulta y deduce que la condición de estabilidad es (4.38)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "El ángulo entre ápsides en órbitas casi circulares",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si una órbita circular estable bajo fuerzas centrales sufre una perturbación radial <em>pequeña</em>, la nueva órbita será casi circular y la frecuencia de las pequeñas oscilaciones radiales la del resultado (4.43). En la primera aproximación, como el momento angular no ha cambiado, podemos tomar la velocidad angular como constante. Si el período de las pequeñas oscilaciones radiales es <math display=\"inline\"><msub><mi>T</mi><mi>r</mi></msub></math>, el ángulo entre ápsides sucesivos es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ϕ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mi>r</mi></msub><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(a) ¿Por qué? <br> (b) Demuestra que ese ángulo se escribe así: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ϕ</mi><mo>=</mo><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>+</mo><mfrac><mrow><msub><mi>r</mi><mn>0</mn></msub><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> (c) Halla la expresión sencilla que queda cuando tenemos <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mn>2</mn></mrow></math>. <br> (d) Comprueba que en los tres casos siguientes (que se cumplen cuando la excentricidad no es pequeña) se recuperan los resultados conocidos: (i) fuerza newtoniana atractiva, (ii) fuerza armónica del problema 4.6 y (iii) fuerza que se resolverá en el problema 4.7.5. <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": En el problema 4.49 se estudia el caso de las órbitas acotadas no casi circulares."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Órbitas newtonianas relativistas",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula relativista se mueve en la energía potencial newtoniana <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math>. <br> (a) Demuestra que el momento angular relativista <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒑</mi></mrow></math> respecto al polo es una constante del movimiento. <br> (b) Escribe la ecuación del movimiento de las órbitas circulares y demuestra que el producto <math display=\"inline\"><mrow><mi>v</mi><mi>L</mi></mrow></math> es igual a una constante que debes hallar. (La velocidad escalar es <math display=\"inline\"><mi>v</mi></math>.)  <br> (c) Deduce que, a diferencia del problema de Kepler, no existe una órbita circular para cada valor <math display=\"inline\"><mrow><mi>L</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. <br> (d) ¿Qué ocurre con el último resultado en el límite galileano?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Problema unidimensional equivalente en la relatividad especial",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos el movimiento relativista plano de una partícula en la energía potencial central <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demuestra que el momento angular se escribe como <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><mi>γ</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>γ</mi><mo>≡</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math>. Deduce que tenemos: <math display=\"block\"><mrow><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>L</mi><mi>α</mi></mrow><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msub><mi>γ</mi><mi>r</mi></msub></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>γ</mi><mi>r</mi></msub><mo>≡</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≡</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> Usa este resultado en la derivada de la energía mecánica conservada <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><mi>γ</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para demostrar que la ecuación del movimiento radial relativista es la siguiente: <math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>α</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><msubsup><mi>γ</mi><mi>r</mi><mn>3</mn></msubsup></mrow></mfrac><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>α</mi><mn>2</mn></msup></mrow><mrow><msubsup><mi>γ</mi><mi>r</mi><mn>2</mn></msubsup><mi>r</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Estabilidad de las órbitas circulares relativistas",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Haz el análisis del problema 4.19 en el caso del problema 4.22, para hallar la condición que debe cumplir una órbita circular relativista centrada en el polo de fuerzas. Comenta el resultado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energías potenciales homogéneas y órbitas homotéticas",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos que la energía potencial central <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una función homogénea de grado <math display=\"inline\"><mi>n</mi></math>, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>α</mi><mi>n</mi></msup><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>α</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo></mrow></math> y <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> una órbita. Demuestra que la curva homotética <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>α</mi><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> también es una órbita. ¿Cuál es la relación entre las constantes del movimiento correspondientes a las dos órbitas? ¿Y entre los períodos de las dos órbitas, cuando las órbitas son cerradas? Usa el último resultado para deducir la tercera ley de Kepler y para demostrar que en la energía potencial elástica isótropa (es decir, cuando <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mspace width=\"0.167em\"></mspace><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>, con la constante <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) todas las órbitas son isócronas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Órbitas de energía nula",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En algunos casos las órbitas de energía mecánica nula se calculan fácilmente. Usa la integral <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><mi>u</mi><msqrt><mrow><mi>a</mi><msup><mi>u</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arctan </mtext><mspace width=\"0.333em\"></mspace></mrow><msqrt><mrow><mi>a</mi><msup><mi>u</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow></math> para calcular las ecuaciones de las órbitas de energía nula que se dan en los potenciales atractivos <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Están acotadas? ¿Son periódicas? Esboza algunas órbitas. ¿Qué ocurre en el caso <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>?"
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
       "html": "Las dos masas iguales de la figura están unidas por un muelle y se mueven en la misma órbita circular de radio <math display=\"inline\"><mi>R</mi></math>. La longitud natural del muelle es <math display=\"inline\"><mi>L</mi></math> y la constante recuperadora <math display=\"inline\"><mi>k</mi></math>. No hay gravedad. ¿Cuál es el período del movimiento? ¿Y el valor mínimo del radio <math display=\"inline\"><mi>R</mi></math>? ¿Es estable la órbita?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/68d656c71328fcd1.svg\" alt=\"\" style=\"width:106px\" loading=\"lazy\">"
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
       "html": "Dos masas iguales están unidas por un muelle sobre una mesa horizontal lisa. Inicialmente están en reposo en los puntos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mi>a</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el muelle sin deformar. Otra masa igual se acerca a ellas por el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> y en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> golpea la masa de la izquierda. El choque es elástico y, tras el choque, las tres partículas siguen en el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math>. Calcula el movimiento de las tres partículas en el intervalo <math display=\"inline\"><mrow><mi>t</mi><mo>≥</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/19e5d791f6ff3d86.svg\" alt=\"\" style=\"width:180px\" loading=\"lazy\">"
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
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se mueve con momento angular <math display=\"inline\"><mi>L</mi></math> bajo la fuerza central <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math>. La constante <math display=\"inline\"><mi>k</mi></math> puede ser positiva o negativa. Integra la fórmula de Binet para obtener la ecuación de la órbita. ¿Qué condiciones deben cumplirse para que la partícula pueda irse a distancia infinita y cuáles para que el movimiento esté acotado? ¿Hay órbitas circulares? ¿Cuándo? Repite el análisis anterior usando el potencial efectivo."
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
       "html": "El centro de la órbita circular de una partícula que se mueve en un campo de fuerza central no está en el polo de fuerzas. ¿Cómo debe ser la ley de fuerzas para ello?"
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
       "html": "Estudia las órbitas de energía mecánica nula de las partículas que se mueven en la energía potencial central <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>−</mo><mfrac><mi>ε</mi><msup><mi>r</mi><mn>4</mn></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demuestra que son cerradas y dibuja algunas."
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
       "html": "Una partícula que se mueve bajo una fuerza central, ¿puede pasar por dos pericentros en un período? ¿Y por dos pericentros y un apocentro?"
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
       "html": "Una partícula puntual de masa <math display=\"inline\"><mi>m</mi></math> se mueve en la energía potencial central <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>α</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><msup><mi>r</mi><mn>4</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. (En esa expresión, las constantes <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>a</mi></math> son positivas.) Cuando la partícula está en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, su velocidad es la siguiente: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi><msup><mi>α</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mover><mi mathvariant=\"bold-italic\">𝝓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Halla la ecuación de la órbita y comprueba que la partícula va hacia el polo de fuerzas. ¿Cuánto tiempo necesita para llegar hasta allí? Usa algún programa para dibujar la órbita en los casos <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>5</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Cálculo de la energía potencial (Newton, <em>Principia</em>)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El ángulo entre el vector de posición y la velocidad de una partícula que se mueve en un potencial central <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es constante: <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi></mrow></math>. Usa los principios de conservación para hacer lo siguiente: <br> (a) Demuestra que el producto <math display=\"inline\"><mrow><mi>r</mi><mi>v</mi></mrow></math> de los módulos del vector de posición y de la velocidad es constante. <br> (b) Escribe la energía total <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en función del potencial y usa el último resultado para eliminar la velocidad <math display=\"inline\"><mi>v</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(c) Usa el resultado anterior para hallar la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <br> (d) Calcula las funciones <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del movimiento. <br> (e) ¿Cuándo llega la partícula al polo de fuerzas si en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> las condiciones iniciales son <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mo>=</mo><mn>1000</mn></mrow></math> m, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><mn>10</mn></mrow></math> m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>135</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de la órbita",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla la ecuación de la órbita en el caso del problema 4.33."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "El vector de Laplace, Runge y Lenz",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula puntual se mueve en el campo newtoniano <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math>. Demuestra que el siguiente vector es una constante del movimiento: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>−</mo><mi>m</mi><mi>k</mi><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>r</mi></mfrac><mi>.</mi></mrow></math> Calcula <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> de dos maneras distintas (usando la definición del producto escalar y valiéndote de la definición de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>), para recuperar la ecuación de la órbita. ¿Cuántas constantes del movimiento nuevas se obtienen con este vector?"
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
       "html": "Una partícula puntual se mueve en un campo de fuerza newtoniano. Comprueba que <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>≡</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mfrac><mi>k</mi><mi>L</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> el <strong>vector de Hamilton</strong> y <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝜺</mi><mo>≡</mo><mfrac><mi>L</mi><mi>k</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mover><mi mathvariant=\"bold-italic\">𝝓</mi><mo accent=\"true\">̂</mo></mover></mrow></math> el <strong>vector de excentricidad</strong> son constantes del movimiento. Deduce que el <strong>hodógrafo</strong> —es decir, el lugar geométrico dibujado por los extremos de los vectores velocidad de todos los instantes colocados en el mismo punto— es una circunferencia. Calcula el producto <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝓</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝜺</mi></mrow></math> para recuperar la ecuación de la órbita. Halla la relación entre estos vectores y el vector de Laplace, Runge y Lenz del problema 4.35."
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
       "html": "El radio de la órbita circular de un satélite de masa <math display=\"inline\"><mi>m</mi></math> es <math display=\"inline\"><mrow><mn>2</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math>. En un instante se empieza a aplicar una fuerza constante de módulo <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>a</mi><mi>m</mi><mi>g</mi></mrow></math>. <math display=\"inline\"><mi>a</mi></math> es constante y <math display=\"inline\"><mi>g</mi></math> la intensidad del campo gravitatorio en la superficie de la Tierra. La dirección y el sentido de la fuerza son siempre hacia el centro de la Tierra. Si el cambio de masa del satélite es despreciable, ¿cuál es el valor de la constante <math display=\"inline\"><mi>a</mi></math> si la nueva órbita es tangente a la superficie de la Tierra? ¿Cuál es la velocidad del satélite en este último instante?"
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
       "html": "Las masas de dos satélites son <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>λ</mi><mi>m</mi></mrow></math>. Ambos se mueven en la misma órbita circular de radio <math display=\"inline\"><mi>R</mi></math>, pero en sentidos opuestos. Al chocar entre sí quedan unidos. ¿Cómo debe ser el radio <math display=\"inline\"><mi>R</mi></math> para que no caigan sobre la Tierra? ¿Qué ocurre si se hace <math display=\"inline\"><mrow><mi>λ</mi><mo>→</mo><mn>1</mn><mi>/</mi><mi>λ</mi></mrow></math>? ¿Y en el límite <math display=\"inline\"><mrow><mi>λ</mi><mo>→</mo><mn>1</mn></mrow></math>? ¿Y en el límite <math display=\"inline\"><mrow><mi>λ</mi><mo>→</mo><mn>0</mn></mrow></math>? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": En el resultado solo aparecen <math display=\"inline\"><mi>λ</mi></math>, <math display=\"inline\"><mi>R</mi></math> y <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math>."
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
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> está unida a un punto fijo mediante un muelle de longitud propia <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math>, sobre una mesa horizontal lisa. La velocidad inicial de la partícula es la que se muestra en la figura y la longitud máxima del muelle es <math display=\"inline\"><mrow><mn>2</mn><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. Halla la constante recuperadora <math display=\"inline\"><mi>k</mi></math> del muelle <math display=\"inline\"><mi>m</mi></math> en función de los datos <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math>. Esboza la órbita de la masa."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/3b18891d24c5317c.svg\" alt=\"\" style=\"width:113px\" loading=\"lazy\">"
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
       "html": "La velocidad de un satélite de masa <math display=\"inline\"><mi>m</mi></math> en su órbita circular es <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. De repente lanza hacia atrás una masa <math display=\"inline\"><mrow><mi>λ</mi><mi>m</mi></mrow></math> con velocidad relativa <math display=\"inline\"><mrow><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>0</mn></msub></mrow></math>. Calcula la forma de la nueva órbita, la excentricidad, el apogeo y el perigeo para los valores <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>λ</mi><mo>&lt;</mo><mn>1</mn></mrow></math>. ¿Cuál es la altura del satélite cuando su posición angular, medida desde el punto donde empezó la nueva órbita, es <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>?"
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
       "html": "La fuerza central de módulo <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>m</mi><mi>/</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math> atrae la masa <math display=\"inline\"><mi>m</mi></math> hacia el punto fijo <math display=\"inline\"><mi>O</mi></math>. En la posición de la figura la velocidad de la partícula es <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mi>k</mi></msqrt><mi>/</mi><mi>a</mi></mrow></math>. Usa los principios de conservación para calcular la trayectoria de la partícula. Halla la posición de la partícula en función del tiempo."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/e6ca360602eed984.svg\" alt=\"\" style=\"width:126px\" loading=\"lazy\">"
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
       "html": "¿Puede ser alguna de las de la figura la órbita de una partícula que se mueve en un campo de fuerza central?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/ba550ce08b4e2562.svg\" alt=\"\" style=\"width:205px\" loading=\"lazy\">"
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
       "html": "Una partícula se mueve en una órbita circular en un campo de fuerza central. ¿Puede ser variable la velocidad angular respecto al polo de fuerzas?"
      },
      {
       "mota": "irudia",
       "oina": "Órbitas del problema 4.44.",
       "src": "../media/irudiak/ff876af02d49a8cc.svg",
       "zabalera": 321
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
       "html": "Si una partícula puntual se mueve en un campo de fuerza central, algunas de las órbitas de la figura 4.29 son imposibles: ¿cuáles? Explica la respuesta. <br>  <em>Nota</em>: En cada caso el polo de fuerzas se ha indicado con un punto grueso."
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
       "html": "Una partícula puntual de masa <math display=\"inline\"><mi>m</mi></math> se mueve en el potencial armónico isótropo <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> a lo largo de una circunferencia de radio <math display=\"inline\"><mi>a</mi></math>. Calcula la velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> de la partícula. En un instante se le aplica un impulso <math display=\"inline\"><mrow><mi>m</mi><msub><mi>v</mi><mn>0</mn></msub></mrow></math> que forma con la velocidad un ángulo de valor <math display=\"inline\"><mi>α</mi></math>. Demuestra que las distancias máxima y mínima al polo de fuerzas son éstas en el nuevo movimiento: <math display=\"block\"><mrow><msub><mi>r</mi><mo>±</mo></msub><mo>=</mo><mfrac><mrow><msqrt><mrow><mn>5</mn><mo>+</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></msqrt><mo>±</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mi>a</mi><mi>.</mi></mrow></math> ¿Cuáles son las velocidades en esas distancias? Explica desde el punto de vista físico lo que ocurre en los límites <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>π</mi></mrow></math>."
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
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se mueve en un plano horizontal liso bajo la acción de una fuerza que la atrae hacia un punto fijo <math display=\"inline\"><mi>O</mi></math> del plano. El módulo de la fuerza es <math display=\"inline\"><mrow><mi>k</mi><mi>r</mi></mrow></math>, cuando la distancia medida desde <math display=\"inline\"><mi>O</mi></math> es <math display=\"inline\"><mi>r</mi></math>. Cuando la partícula está en el punto <math display=\"inline\"><mi>P</mi></math>, es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>O</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>2</mn><mi>a</mi></mrow></math> y la velocidad es perpendicular al vector <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑶</mi><mi mathvariant=\"bold-italic\">𝑷</mi></mrow></math> y de módulo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>. Halla la distancia mínima entre la partícula y el punto <math display=\"inline\"><mi>O</mi></math> a lo largo de la órbita. Usando lo visto sobre el movimiento bajo campos de fuerza de este tipo, calcula la excentricidad de la órbita."
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
       "html": "Las masas iguales de la figura pueden moverse a lo largo de una varilla ligera lisa, unidas por un muelle. El sistema está en el vacío, sin gravitación. La constante recuperadora del muelle es <math display=\"inline\"><mi>k</mi></math> y su longitud propia <math display=\"inline\"><mi>L</mi></math>. En el instante que se muestra en la figura el muelle está sin deformar. Si la longitud máxima del muelle en el movimiento es <math display=\"inline\"><mrow><mn>5</mn><mi>L</mi></mrow></math>, ¿cuáles son <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> y las velocidades mínimas de las partículas? Esboza las órbitas de las masas."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/78428e40c76225d6.svg\" alt=\"\" style=\"width:207px\" loading=\"lazy\">"
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
       "html": "Una partícula se mueve en un campo de fuerza central (no newtoniano) a lo largo de una órbita circular. ¿Puede estar el polo de fuerzas fuera del círculo rodeado por la órbita?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Intervalo y ángulo entre ápsides",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se mueve en una órbita acotada en la energía potencial central <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La energía mecánica de la partícula es <math display=\"inline\"><mi>E</mi></math>, el momento angular <math display=\"inline\"><mrow><mi>L</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, la distancia de los apocentros <math display=\"inline\"><mrow><msub><mi>r</mi><mo>+</mo></msub><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>u</mi><mn>1</mn></msub></mrow></math> y la de los pericentros <math display=\"inline\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>u</mi><mn>2</mn></msub></mrow></math>. Comprueba que tenemos <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, si se hace la siguiente definición: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><msup><mi>u</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Demuestra que el intervalo de tiempo y la distancia angular entre dos pericentros (o dos apocentros) consecutivos son los siguientes: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mn>2</mn><mfrac><mi>m</mi><mi>L</mi></mfrac><msubsup><mo>∫</mo><msub><mi>u</mi><mn>1</mn></msub><msub><mi>u</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><msup><mi>u</mi><mn>2</mn></msup><msqrt><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"normal\">Δ</mi><mi>ϕ</mi><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><msub><mi>u</mi><mn>1</mn></msub><msub><mi>u</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Este ángulo se estudia con más profundidad en el anexo C."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Campo gravitatorio de una esfera homogénea",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para hacer un modelo simplificado de galaxias esféricas, estudiemos el campo gravitatorio creado por una esfera homogénea de radio <math display=\"inline\"><mi>a</mi></math> y masa <math display=\"inline\"><mi>M</mi></math>. Comprueba que, en ese campo, la componente radial de la fuerza atractiva que sufre una partícula de masa <math display=\"inline\"><mi>m</mi></math> que se mueve sin obstáculos es la siguiente: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>k</mi><mi>r</mi><mi>/</mi><msup><mi>a</mi><mn>3</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>r</mi><mo>≤</mo><mi>a</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>r</mi><mo>≥</mo><mi>a</mi><mo>;</mo></mtd></mtr></mtable></mrow><mtext mathvariant=\"normal\">  </mtext><mi>k</mi><mo>≡</mo><mi>G</mi><mi>M</mi><mi>m</mi><mi>.</mi></mrow></math> Consideremos una partícula que se mueve con momento angular <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mrow><mi>m</mi><mi>k</mi><mi>a</mi></mrow></msqrt></mrow></math>. <br> (a) Comprueba que cuando la energía mecánica es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mn>2</mn><mi>a</mi></mrow></math> la órbita es periódica. Dibuja la órbita y calcula el período. ¿Cuántos periastros hay en la órbita? ¿Cuántas vueltas da en un período? <br> (b) ¿Puedes encontrar otras órbitas periódicas? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Usa el problema 4.49 y las integrales <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><msqrt><mrow><mi>−</mi><mn>4</mn><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>7</mn><mn>12</mn></mfrac><mi>π</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msubsup><mo>∫</mo><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><msup><mi>v</mi><mn>2</mn></msup><msqrt><mrow><mi>−</mi><mn>4</mn><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt><mo>+</mo><mn>3</mn><mi>π</mi></mrow><mn>8</mn></mfrac></mrow></math>, donde tenemos: <math display=\"block\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>≡</mo><mn>4</mn><mo>−</mo><mn>2</mn><msqrt><mn>3</mn></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>v</mi><mn>2</mn></msub><mo>≡</mo><mn>1</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><msup><mi>v</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>12</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>v</mi><mo>≥</mo><mn>1</mn><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>8</mn><mi>u</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>v</mi><mo>≤</mo><mn>1</mn><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Potencial isócrono",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la densidad de masa de una galaxia esférica es casi uniforme en torno al centro y tiende a cero a gran distancia, puede hacerse un modelo simplificado valiéndose del siguiente potencial gravitatorio<span class=\"j-oin\">[Recuérdese que la energía potencial de una partícula de masa <math display=\"inline\"><mi>m</mi></math> en el potencial gravitatorio <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> es <math display=\"inline\"><mrow><mi>m</mi><mi mathvariant=\"normal\">Φ</mi></mrow></math>.]</span>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mrow><mi>a</mi><mo>+</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>M</mi></math> es la masa de la galaxia y <math display=\"inline\"><mi>a</mi></math> una escala de distancia. Calcula el período del movimiento radial de las órbitas acotadas —es decir, el intervalo de tiempo entre dos periastros (o dos apoastros) consecutivos— en función de la energía mecánica. (Véase el problema 4.96.) Comprueba que no depende del momento angular: de ahí viene el nombre. ¿Cuál es la precesión de los periastros? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Usa las propiedades de las ecuaciones cuadráticas, la variable <math display=\"inline\"><mrow><mi>s</mi><mo>≡</mo><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><mi>/</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> y las siguientes integrales (<math display=\"inline\"><mrow><msub><mi>s</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>s</mi><mn>1</mn></msub><mo>&gt;</mo><mn>2</mn></mrow></math>): <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>s</mi><mn>1</mn></msub><msub><mi>s</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>s</mi><mn>2</mn></msub><mo>−</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><msub><mi>s</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mi>d</mi><mi>s</mi><mo>=</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>s</mi><mn>1</mn></msub><mo>+</mo><msub><mi>s</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>s</mi><mn>1</mn></msub><msub><mi>s</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>s</mi><mn>2</mn></msub><mo>−</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><msub><mi>s</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></mfrac><mi>d</mi><mi>s</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mrow><mn>4</mn><mo>−</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>s</mi><mn>1</mn></msub><mo>+</mo><msub><mi>s</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>s</mi><mn>1</mn></msub><msub><mi>s</mi><mn>2</mn></msub></mrow></msqrt></mfrac><mo>+</mo><mfrac><mn>1</mn><msqrt><mrow><msub><mi>s</mi><mn>1</mn></msub><msub><mi>s</mi><mn>2</mn></msub></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se mueve en el siguiente campo de fuerza central: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>λ</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> En un instante, cuando la distancia entre el polo de fuerzas y la partícula es <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math>, la velocidad de la partícula es perpendicular al vector de posición y de módulo <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mi>λ</mi></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></msqrt></mrow></math>. Escribe y resuelve la ecuación de la órbita. ¿Cuáles son las distancias máxima y mínima medidas desde el polo de fuerzas? Usa algún programa para dibujar la órbita. ¿Qué cambiaría si fueran <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>?"
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
       "html": "Dos bloques situados sobre una mesa lisa están unidos por un muelle y pueden moverse a lo largo de una barra horizontal lisa. En un instante están en la configuración que se muestra en la figura, en el sistema del centro de masas. En el movimiento la distancia máxima entre los bloques es <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math>. ¿Cómo se escriben las velocidades <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> en función de los parámetros <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mi>M</mi></math>? <br>  <em>Nota</em>: La longitud propia del muelle es <math display=\"inline\"><mi>L</mi></math>, su constante recuperadora <math display=\"inline\"><mi>k</mi></math>, las masas de los bloques las de la figura, y las del muelle y de la barra despreciables."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/52168a4352e90ba3.svg\" alt=\"\" style=\"width:234px\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "(Riccati, 1757)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La velocidad escalar de una partícula que se mueve en un campo de fuerza central es inversamente proporcional a la distancia medida desde el polo de fuerzas: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>a</mi><mi>/</mi><mi>r</mi></mrow></math>. Usa la conservación de la energía mecánica <math display=\"inline\"><mi>E</mi></math> y que <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> para hallar <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Calcula la ecuación de la órbita, en función del momento angular, y esboza la órbita."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Órbitas newtonianas</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La distancia más corta entre el Sol y un cometa es la mitad del radio de la órbita de la Tierra, y en ese instante la velocidad de la Tierra es la mitad de la del cometa. ¿Cuáles serán la posición, la velocidad y la dirección del cometa al cruzar la órbita de la Tierra? ¿Cómo será la órbita del cometa? ¿Es correcta la figura? <br>  <em>Nota</em>: Desprecia la excentricidad de la órbita de la Tierra."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/6acb6270ba25de8c.svg\" alt=\"\" style=\"width:148px\" loading=\"lazy\">"
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
       "html": "La órbita parabólica de un cometa está en el plano de la órbita de la Tierra y la distancia de su perihelio es <math display=\"inline\"><mi>h</mi></math>. Demuestra que el tiempo que pasa dentro de la órbita de la Tierra es el siguiente: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mi>h</mi><mi>R</mi></mfrac></mrow></msqrt><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> urte</mtext></mrow><mi>.</mi></mrow></math> ¿Cuál es el mayor valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>? Cuando se da ese valor máximo, ¿cuál es la velocidad escalar del cometa al cruzar la órbita de la Tierra? ¿Y con otros valores de <math display=\"inline\"><mi>h</mi></math>? <br>  <em>Nota</em>: Puede usarse una de las integrales siguientes: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>r</mi><mi>d</mi><mi>r</mi></mrow><msqrt><mrow><mi>r</mi><mo>−</mo><mi>h</mi></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>r</mi><mo>−</mo><mi>h</mi></mrow></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>ϕ</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>3</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/fc7a2e1e13c9a23c.svg\" alt=\"\" style=\"width:97px\" loading=\"lazy\">"
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
       "html": "Un meteorito se acerca a la Tierra con velocidad <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><msub><mi>R</mi><mo>⊕</mo></msub></mrow></msqrt></mrow></math> desde una distancia muy grande, a lo largo de una recta situada a la distancia <math display=\"inline\"><mi>b</mi></math> del centro de la Tierra. ¿Cómo debe ser el valor <math display=\"inline\"><mi>b</mi></math> para que la órbita sea tangente a la superficie de la Tierra? ¿Cuál es la excentricidad de la órbita? Dibuja la órbita y calcula dónde toca la Tierra. ¿Cuál es el ángulo de dispersión? ¿Cuáles son la velocidad escalar y el parámetro de impacto al final, cuando vuelve a estar a gran distancia? ¿Cuál es el trabajo total que ha realizado la Tierra sobre el cometa? ¿Y el módulo del impulso total?"
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
       "html": "En el problema 4.57 se ha usado el sistema de referencia de la Tierra. ¿Qué cambia en el sistema del Sol?"
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
       "html": "Supongamos que una partícula de masa <math display=\"inline\"><mi>m</mi></math> se mueve en el potencial newtoniano <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math>. Demuestra que su velocidad en una órbita elíptica es la siguiente: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math> Valiéndote de este resultado, expresa el cociente entre las velocidades máxima y mínima en función de la excentricidad de la órbita. ¿Cuáles son las expresiones correspondientes a las órbitas circulares, parabólicas e hiperbólicas? Usa estas últimas para calcular la velocidad de la partícula en el infinito, en el caso de las órbitas parabólicas e hiperbólicas."
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
       "html": "En un instante la altura del satélite de la figura (medida desde la superficie de la Tierra) es <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> y su velocidad <math display=\"block\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mrow><mn>2</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></mfrac></msqrt><mi>.</mi></mrow></math> El ángulo entre la velocidad y la vertical es <math display=\"inline\"><mi>α</mi></math>. <br> (a) ¿Cómo es la órbita si <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>? <br> (b) ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>α</mi></math> para que el apogeo del satélite sea lo mayor posible (sin caer sobre la Tierra, naturalmente)?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/299afeba777a61dd.svg\" alt=\"\" style=\"width:74px\" loading=\"lazy\">"
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
       "html": "Un satélite artificial se mueve en una órbita circular estable de radio <math display=\"inline\"><mrow><mn>2</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math>. En un instante se enciende un cohete que le da un impulso en dirección radial. En consecuencia, la nueva órbita del satélite es parabólica. Calcula la velocidad radial dada por el cohete y la distancia mínima entre la órbita parabólica y la Tierra."
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
       "html": "La energía, el momento angular y la velocidad de un planeta que se mueve en una órbita circular en torno a una estrella son <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>L</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, respectivamente. Al chocar con un cometa su órbita se convierte en una elipse, sin cambiar el periastro, pero el nuevo apoastro es cinco veces mayor. Calcula la energía y el momento angular que tiene el planeta en la nueva órbita, y las velocidades en el periastro y en el apoastro. Dibuja las dos órbitas del planeta en la misma figura."
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
       "html": "La órbita del satélite de la figura es parabólica y su perigeo está en el punto <math display=\"inline\"><mi>P</mi></math>. Al llegar al punto <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math>, se encienden los motores y en un intervalo de tiempo despreciable se invierte el sentido de la velocidad del satélite y se reduce su módulo a la mitad. <br> (a) Calcula las velocidades <math display=\"inline\"><mi>v</mi></math> y <math display=\"inline\"><msup><mi>v</mi><mo>′</mo></msup></math>, la distancia <math display=\"inline\"><mrow><mi>O</mi><msup><mi>P</mi><mo>′</mo></msup></mrow></math> y el ángulo <math display=\"inline\"><mi>α</mi></math>. <br> (b) Es evidente que la nueva órbita no será parabólica; sin hacer ningún cálculo: ¿qué órbita será necesariamente? <br> (c) ¿Caerá el satélite sobre la Tierra?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/fd8a5353a03fe101.svg\" alt=\"\" style=\"width:88px\" loading=\"lazy\">"
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
       "html": "«Como los ejes mayores de todas las órbitas newtonianas de la figura son iguales, las energías mecánicas también son iguales», dice Aitor. «¡Qué va! La energía de la órbita circular es mínima», le responde Mikel. ¿Qué piensas tú?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/d222daa5aeecf9c2.svg\" alt=\"\" style=\"width:162px\" loading=\"lazy\">"
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
       "html": "El semieje mayor de la órbita de un planeta es <math display=\"inline\"><mi>a</mi></math> y el período <math display=\"inline\"><mi>T</mi></math>. Demuestra que el producto de sus velocidades en el perihelio y en el afelio es <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>a</mi></mrow><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math>."
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
       "html": "Un planeta se mueve en una órbita circular en torno a una estrella de masa <math display=\"inline\"><mi>M</mi></math>. Cuando la estrella explota, expulsa la capa exterior con una velocidad muy grande, de modo que la pérdida de masa se produce en un intervalo de tiempo despreciable. La masa <math display=\"inline\"><msup><mi>M</mi><mo>′</mo></msup></math> de la estrella restante es mucho mayor que la del planeta. Si se desprecia la fuerza que sufre el planeta en la explosión, ¿cuál es la nueva excentricidad de la órbita del planeta? ¿Cuál es la condición que debe cumplirse para que el planeta escape de la estrella?"
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
       "html": "El primer satélite artificial, llamado Sputnik, se lanzó en 1957. En el perigeo su altura y su velocidad eran de 227 km (¡cuidado: ¿desde dónde se mide esto?!) y <math display=\"inline\"><mn>8</mn></math>  km/s, respectivamente. (a) Calcula la altura y la velocidad que tenía en el apogeo. (b) ¿Cuál era el período de la órbita?"
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
       "html": "En las obras de Kepler la tercera ley no es la de la sección 4.3.3, sino esta: «El cociente entre el cuadrado del período y el cubo de la distancia media entre el Sol y el planeta es el mismo para todos los planetas». Calcula la relación entre la longitud del semieje mayor y la distancia media. ¿Cómo se define esa «distancia media»? Comenta el resultado."
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
       "html": "Un satélite se mueve en una órbita geoestacionaria (por tanto, está siempre sobre un punto fijo del ecuador, a la misma altura). En un instante se usa el motor del satélite, en la dirección del movimiento, para colocarlo en una nueva órbita tangente a la Tierra. ¿Cuál es la velocidad al principio y al final de la nueva órbita? ¿Cuánto tiempo necesita para llegar a la Tierra?"
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
       "html": "Un satélite sufre un impulso en la dirección de su órbita circular. Consideremos el cambio relativo de la energía cinética, es decir, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>T</mi><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub></mrow><msub><mi>T</mi><mn>0</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>,</mo></mrow></math> donde <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> y <math display=\"inline\"><mi>T</mi></math> son las energías cinéticas antes y después de aplicar el impulso, respectivamente. Calcula el valor <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> en función de las longitudes de los semiejes mayores de las dos órbitas. Demuestra que el cambio <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> se escribe mediante una fórmula sencilla que depende únicamente de la excentricidad de la nueva órbita en todos los casos, es decir, cuando la órbita es elíptica, parabólica o hiperbólica."
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
       "html": "Valiéndote del método publicado en latín por Jacobi en 1842, integra de nuevo la ecuación de las órbitas newtonianas. <br> (a) Elige, como de costumbre, coordenadas polares planas en el plano de la órbita, de modo que el eje <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mn>0</mn></mrow></math> pase por el pericentro. <br> (b) Usa la conservación del momento angular en la ecuación <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, para sustituir la derivada respecto al tiempo <math display=\"inline\"><mi>ϕ</mi></math> por la derivada respecto al ángulo. <br> (c) Integra la ecuación así obtenida para hallar la velocidad <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>. <br> (d) Demuestra que el hodógrafo del problema 4.36 es una circunferencia. <br> (e) ¿Cuándo es nula la velocidad fuera del hodógrafo y cuándo dentro? <br> (f) Sustituye el resultado de (c) en la definición <math display=\"inline\"><mrow><mi>L</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> del momento angular y despeja <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
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
       "html": "Los astronautas del transbordador espacial Atlantis deben poner un satélite en órbita circular. Aunque aciertan con la dirección, cometen un error <em>pequeño</em> en la velocidad escalar: en lugar de dar el valor correcto <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, le dan la velocidad <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <br> (a) ¿Cuál es la excentricidad de la órbita, en los casos <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>&lt;</mo><mn>0</mn></mrow></math>? <br> (b) Si lo pusieron a 300 km de la Tierra y el error total en la velocidad es de 1 ms<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, ¿cuál será el intervalo de alturas reales? <br>  <em>Sugerencia</em>: Usa que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math> para hacer las aproximaciones adecuadas en todos los cálculos."
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
       "html": "Las masas de las estrellas de un sistema binario son <math display=\"inline\"><mrow><mi>p</mi><msub><mi>M</mi><mo>⊙</mo></msub></mrow></math> y <math display=\"inline\"><mrow><mi>q</mi><msub><mi>M</mi><mo>⊙</mo></msub></mrow></math>. Las estrellas se mueven en órbitas circulares con un período de <math display=\"inline\"><mi>k</mi></math> años. Calcula la distancia entre las estrellas en unidades astronómicas. <br>  <em>Sugerencia</em>: Recuerda que la unidad astronómica es la distancia media entre el Sol y la Tierra."
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
       "html": "Un satélite que se mueve en una órbita circular de radio <math display=\"inline\"><mi>R</mi></math> se frena, sin cambiar su dirección, para colocarlo en una órbita tangente a la superficie de la Tierra. Demuestra que el tiempo que transcurre desde ese instante hasta que toca la Tierra es el siguiente: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mi>π</mi><msqrt><mfrac><msub><mi>R</mi><mo>⊕</mo></msub><mrow><mn>8</mn><mi>g</mi></mrow></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>R</mi><msub><mi>R</mi><mo>⊕</mo></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> ¿Cuál es la excentricidad de la nueva órbita?"
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
       "html": "Un satélite se mueve en una órbita circular, a la distancia <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> de la superficie de la Tierra. ¿Cómo deben ser el módulo y el sentido de la fuerza ejercida por el motor de otro satélite de masa <math display=\"inline\"><mi>m</mi></math> para que se mueva en la misma órbita con velocidad doble?"
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
       "html": "¿Cuál sería la duración del año si la masa de la Tierra fuera igual a la del Sol, sin cambiar la distancia entre los dos astros?"
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
       "html": "Desde muy gran distancia se dirige hacia una partícula en reposo una partícula idéntica. Al principio, la velocidad y el parámetro de impacto de esta última son <math display=\"inline\"><mi>v</mi></math> y <math display=\"inline\"><mi>b</mi></math>, respectivamente. La interacción entre las dos partículas es gravitatoria. Esboza la trayectoria de cada partícula en el sistema del centro de masas. ¿Cuál es la distancia mínima entre las dos partículas? ¿Qué ocurre si <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>? ¿Y en el límite <math display=\"inline\"><mrow><mi>v</mi><mo>→</mo><mn>0</mn></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/72f78349b91420d8.svg\" alt=\"\" style=\"width:163px\" loading=\"lazy\">"
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
       "html": "Un satélite se mueve con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> en una órbita circular de radio <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math>. Cuando está en el punto <math display=\"inline\"><mi>A</mi></math>, la dirección de su velocidad cambia, sin cambiar su módulo ni el plano de la órbita. El perigeo <math display=\"inline\"><mi>B</mi></math> de la nueva órbita está a la distancia <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></math> del centro de la Tierra. Halla (en función de <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>) la velocidad en el perigeo y la excentricidad de la nueva órbita. Dibuja la órbita antigua y la nueva y calcula cómo ha cambiado la dirección de la velocidad en el punto <math display=\"inline\"><mi>A</mi></math>. ¿Cuál es la distancia angular entre <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>, medida desde el centro de la Tierra?"
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
       "html": "Si el polo de las fuerzas newtonianas está en el punto <math display=\"inline\"><mi>O</mi></math>, ¿cuál(es) de los haces de curvas de la figura puede(n) ser órbitas?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/4f136bea6b9ce49c.svg\" alt=\"\" style=\"width:227px\" loading=\"lazy\">"
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
       "html": "Si de repente la Tierra perdiera su velocidad en torno al Sol, ¿cuándo caería en el Sol?"
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
       "html": "Si despreciamos la atmósfera de la Tierra, ¿puede ser la órbita de la figura la de un satélite?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/49ef52233b77d2e1.svg\" alt=\"\" style=\"width:115px\" loading=\"lazy\">"
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
       "html": "En un sistema binario, la masa de una estrella es <math display=\"inline\"><mi>m</mi></math> y la de la otra <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mn>2</mn></mrow></math>. La velocidad máxima de la estrella pesada es <math display=\"inline\"><mi>v</mi></math> (en el sistema del centro de masas) y la excentricidad de su órbita <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>. Calcula la velocidad máxima y mínima de cada estrella, la excentricidad de la órbita, la longitud del eje mayor y el período."
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
       "html": "Dos satélites de la misma masa se mueven en el mismo plano y sentido. Una órbita es circular y la otra tiene excentricidad <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>ε</mi><mo>&lt;</mo><mn>1</mn></mrow></math>. Cuando llegan al mismo tiempo al perigeo de esta última, los dos satélites quedan unidos. ¿Puede ser abierta la órbita del nuevo satélite? ¿Por qué? ¿Cuál es la excentricidad de la nueva órbita?"
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
       "html": "El hilo del problema 4.15 se rompe en un instante. ¿Cómo serán las nuevas órbitas de los dos satélites? Calcula las distancias de su perigeo y de su apogeo y las excentricidades. ¿Se cruzarán las dos nuevas órbitas? ¿Caerá algún satélite sobre la Tierra?"
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
       "html": "Para recuperar un satélite de masa <math display=\"inline\"><mi>m</mi></math> que se mueve en una órbita circular de radio <math display=\"inline\"><mrow><mn>7</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math>, se ha usado el método de la figura. Cuando el satélite estaba en el punto <math display=\"inline\"><mi>A</mi></math>, desde el punto <math display=\"inline\"><mi>B</mi></math> de la Tierra se envió un segundo satélite de masa <math display=\"inline\"><mi>M</mi></math>. Este último solo usó el motor al principio, durante un intervalo breve, para ponerse en órbita; después se movía por efecto de su peso. Cuando los dos satélites chocaron en el punto <math display=\"inline\"><mi>C</mi></math> quedaron unidos y el nuevo satélite cayó directamente a la Tierra, como se muestra. ¿Cuál era la velocidad del segundo satélite en el punto <math display=\"inline\"><mi>B</mi></math>? ¿Y la del satélite final al llegar a la Tierra? Calcula la masa <math display=\"inline\"><mi>M</mi></math> del segundo satélite y el ángulo <math display=\"inline\"><mi>α</mi></math> que mide cuándo fue enviado."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/eea5d34f455291d7.svg\" alt=\"\" style=\"width:126px\" loading=\"lazy\">"
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
       "html": "Las masas de dos satélites que se mueven en la misma órbita circular de radio <math display=\"inline\"><mi>R</mi></math> (pero en sentidos opuestos) son <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>m</mi></mrow></math>. Al encontrarse se produce un choque elástico, pero las direcciones de los satélites no cambian. Halla las características de las nuevas órbitas (forma, excentricidad y distancias de los ápsides). ¿Cómo debe ser el cociente <math display=\"inline\"><mrow><mi>R</mi><mi>/</mi><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math> para que uno de los satélites caiga sobre la Tierra?"
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
       "html": "Usa la ecuación (4.61) de la elipse para demostrar que la suma de las distancias desde los dos focos a los puntos de la elipse es una constante. ¿Cuál es esa constante? Esta propiedad puede usarse para definir la elipse; ¿cuál es la correspondiente a la hipérbola?"
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
       "html": "Dos estrellas giran en torno al centro de masas común. Desde la Tierra, con el telescopio, se mide que las dos órbitas son elípticas y sus semiejes mayores <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>a</mi><mn>2</mn></msub></math>. ¿Cuál es el cociente de las masas de las estrellas? Si el período de las órbitas es <math display=\"inline\"><mi>T</mi></math>, ¿cuál es la masa de cada una?"
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
       "html": "El radio de la órbita circular de un satélite es el doble del de la Tierra. De repente la dirección de la velocidad del satélite cambia, sin cambiar el módulo, como se muestra en la figura. ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>δ</mi></math> para que la nueva órbita sea tangente a la superficie de la Tierra? Calcula la excentricidad de la nueva órbita y la distancia angular entre el punto inicial y el perigeo."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/6decb4e5052ebade.svg\" alt=\"\" style=\"width:147px\" loading=\"lazy\">"
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
       "html": "Calcula en qué punto de una órbita newtoniana son máxima y mínima la componente radial de la velocidad y cuáles son los valores máximo y mínimo."
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
       "html": "Un satélite se mueve en una órbita de excentricidad <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>. En el perigeo la altura del satélite es <math display=\"inline\"><mrow><msub><mi>R</mi><mo>⊕</mo></msub><mi>/</mi><mn>6</mn></mrow></math>. Se envía un segundo satélite de la misma masa, desde la superficie de la Tierra, en dirección radial, con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Los dos satélites se encuentran cuando la componente radial de la velocidad del primero es mínima (es decir, cuando la disminución de la distancia radial es máxima). Los dos satélites quedan unidos y ese punto es un ápside de la nueva órbita. Calcula la velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. ¿Caerá el nuevo satélite sobre la Tierra?"
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
       "html": "Las órbitas de las dos estrellas de un sistema binario son tangentes en el sistema del centro de masas. Si la excentricidad de las órbitas es <math display=\"inline\"><mi>ε</mi></math>, ¿cuál es el cociente de las masas de las estrellas?"
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
       "html": "Para estudiar el campo magnético de la Tierra se quiere enviar un satélite desde el polo hasta el ecuador. Si el motor se usa solo en el instante inicial, ¿cómo hay que lanzarlo para que la energía que se emplee sea mínima? ¿Cuál es entonces la excentricidad de la órbita del satélite? ¿Y su altura máxima?"
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
       "html": "Para recuperar un telescopio de masa despreciable que se mueve en una órbita circular de <em>altura</em> <math display=\"inline\"><mrow><mn>3</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></math>, se lanza un satélite de masa <math display=\"inline\"><mi>m</mi></math> desde el polo norte en dirección azimutal (es decir, tangente a la superficie de la Tierra). Cuando está en el apogeo, a una <em>altura</em> <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math>, se usa el motor, durante un intervalo breve, para ponerlo en una nueva órbita. En el nuevo apogeo atrapa el telescopio, que se mueve en la misma dirección y sentido, y se vuelve a usar el motor para ponerlo en una órbita tangente a la Tierra. Esboza las tres órbitas. Calcula los dos impulsos de los motores, las excentricidades de las órbitas y el tiempo empleado en cada una. ¿Dónde aterriza el satélite (es decir, dónde vuelve a ser tangente a la superficie de la Tierra)? <br>  <em>Nota</em>: En la solución solo pueden aparecer los números <math display=\"inline\"><mi>g</mi></math> y <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math>."
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
       "html": "Desde la superficie de la Tierra se lanza un satélite en dirección radial con velocidad <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mn>3</mn><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub><mi>/</mi><mn>2</mn><msub><mi>R</mi><mo>⊕</mo></msub></mrow></msqrt></mrow></math>. Cuando llega a la altura <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math>, la dirección del satélite cambia, sin cambiar la velocidad escalar. En ese instante el ángulo entre la nueva velocidad y la antigua es <math display=\"inline\"><mi>α</mi></math>. ¿Puede ser abierta la nueva órbita? Calcula la excentricidad de esta última y las alturas del perigeo y del apogeo, en función del ángulo <math display=\"inline\"><mi>α</mi></math>. ¿Cuáles son los valores máximos y mínimos de esas magnitudes, sin caer sobre la Tierra? ¿Puede ser circular la nueva órbita?"
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
       "html": "Comprueba que el período de las órbitas acotadas de una partícula de masa <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> que se mueve en el campo gravitatorio esférico de la masa <math display=\"inline\"><mi>M</mi></math> es el siguiente: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>G</mi><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>E</mi></mrow><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> (Recuérdese el problema 4.51.)"
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
       "html": "<span class=\"j-smallcaps\">Efecto de honda gravitatoria</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[Véase, por ejemplo, <a href=\"http://en.wikipedia.org/wiki/Gravity_assist\" target=\"_blank\" rel=\"noopener\">http://en.wikipedia.org/wiki/Gravity_assist</a>.]</span> Un satélite se aleja del Sol en dirección radial con la velocidad de escape. Al cruzar la órbita de Júpiter en el punto que se ve en la figura, por efecto de este planeta, la dirección de la velocidad del satélite sufre un giro de valor <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, de modo que pasa a ser tangente a la órbita de Júpiter. Si la duración de la influencia de Júpiter es muy breve (mucho menor que el periodo de la órbita del planeta) y se desprecia el efecto del Sol durante ese choque, demuestra que la variación de la energía por unidad de masa del satélite ha sido esta: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mi>m</mi></mfrac><mo>≈</mo><mn>468.6</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J/kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>.</mi></mrow></math> ¿Cómo es la nueva órbita: circular, elíptica, parabólica o hiperbólica?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/e9aefcd297119e76.svg\" alt=\"\" style=\"width:136px\" loading=\"lazy\">"
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
       "html": "Las dos estrellas de un sistema binario están, en un instante, en la situación de la figura, en el sistema del centro de masas. Si la mayor distancia entre las estrellas durante el movimiento es <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>, ¿cuáles son las velocidades <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> de la figura?    <img class=\"irudi-l\" src=\"../media/irudiak/8e0779618a24f471.svg\" alt=\"\" style=\"width:98px\" loading=\"lazy\">"
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
       "html": "Un satélite se mueve en una órbita circular, pero por efecto de la atmósfera su energía mecánica disminuye lentamente. ¿Cómo cambia la velocidad del satélite: disminuye o aumenta?"
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
       "html": "Se envía un satélite desde el Polo Norte, tangente a la superficie de la Tierra. En el primer apogeo, a una altura <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math>, se usa el motor, durante un intervalo breve, para ponerlo en órbita circular. Lo antes posible se vuelve a usar el motor, un instante y en la dirección del movimiento, para que la órbita sea tangente a la superficie de la Tierra en el Ecuador. Dibuja las órbitas. Usando las hipótesis habituales, calcula los impulsos dados por los motores (módulos, direcciones y sentidos) y la duración del viaje. <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": En la solución solo pueden aparecer la masa <math display=\"inline\"><mi>m</mi></math> del satélite, <math display=\"inline\"><mi>g</mi></math>, <math display=\"inline\"><msub><mi>R</mi><mo>⊕</mo></msub></math> y números."
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
       "html": "<span class=\"j-smallcaps\">Circuncentro</span>"
      },
      {
       "mota": "testua",
       "html": "(Newton, <em>Principia</em>). La órbita de un cometa es parabólica. En cada instante pasa una única circunferencia por el cometa, por el Sol y por el perihelio del cometa. Demuestra que el centro geométrico de la circunferencia se mueve con velocidad constante."
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
       "html": "Las dos estrellas de un sistema binario están, en un instante, en la situación de la figura y se cumple <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mi>G</mi><mi>M</mi><mi>/</mi><msub><mi>r</mi><mn>0</mn></msub></mrow></msqrt></mrow></math>. Dibuja, si es posible, las órbitas en el sistema del centro de masas. Calcula la excentricidad de las órbitas y las distancias máxima y mínima entre las estrellas. ¿Cuáles son las velocidades máxima y mínima de las estrellas medidas en el sistema del centro de masas?    <img class=\"irudi-l\" src=\"../media/irudiak/eda2a51a8464b934.svg\" alt=\"\" style=\"width:118px\" loading=\"lazy\">"
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
       "html": "En un satélite artificial solo queda un poco de combustible. ¿Dónde y cómo (hacia dónde) hay que usar el motor (durante un intervalo de tiempo infinitesimal) para que el cambio de energía de la órbita sea lo mayor posible?"
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
       "html": "Un cometa se mueve en una órbita hiperbólica y al pasar junto al Sol sufre una desviación de <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. El parámetro de impacto del cometa es <math display=\"inline\"><mi>b</mi></math> y la velocidad en el infinito <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Demuestra la siguiente relación: <math display=\"block\"><mrow><mi>b</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mi>G</mi><msub><mi>M</mi><mo>⊙</mo></msub><mi>.</mi></mrow></math> Calcula la excentricidad de la órbita y la distancia y la velocidad en el perihelio."
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
       "html": "En el sistema del centro de masas, las velocidades de dos estrellas esféricas idénticas de masa <math display=\"inline\"><mi>m</mi></math> son las de la figura, cuando están a gran distancia. Es <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>b</mi></mrow></mfrac></msqrt></mrow></math>. Calcula cuál es el cambio total de dirección de cada estrella. ¿Cómo deben ser los radios de las estrellas para que no choquen entre sí?"
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/4458e54ccc080d95.svg\" alt=\"\" style=\"width:122px\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Dispersión y sección eficaz</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La intensidad de un haz de partículas <math display=\"inline\"><mi>α</mi></math> de <math display=\"inline\"><mrow><mn>4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow></mrow></math> es <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>. A la distancia de <math display=\"inline\"><mn>0.6</mn></math> m del blanco de aluminio de <math display=\"inline\"><mrow><mn>50</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> mg</mtext></mrow></mrow></math> se coloca un detector de sección <math display=\"inline\"><mrow><mn>400</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> mm</mtext></mrow><mn>2</mn></msup></mrow></math>. La dirección del detector y la del haz son perpendiculares. ¿Cuántas partículas <math display=\"inline\"><mi>α</mi></math> llegarán al detector en un segundo? <br>  <em>Datos</em>: <math display=\"inline\"><mrow><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">Al </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>13</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">Al </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>27</mn></mrow></math> u."
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
       "html": "<span class=\"j-smallcaps\">Sección eficaz</span>"
      },
      {
       "mota": "testua",
       "html": ". ¿Cuál es la relación entre las secciones eficaces medidas en el sistema del centro de masas y en el laboratorio cuando el proyectil y el blanco son idénticos?"
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
       "html": "Se envían esferas lisas y duras contra otras esferas lisas y duras que están inicialmente en reposo en el sistema del laboratorio. Calcula la sección eficaz diferencial y total en el sistema del centro de masas y, en el caso particular en que todas las esferas son idénticas, en el laboratorio."
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
       "html": "En el proceso de absorción de neutrones lentos, la sección eficaz del isótopo <math display=\"inline\"><mrow><msubsup><mrow></mrow><mn>48</mn><mn>113</mn></msubsup><mrow><mi mathvariant=\"normal\">C</mi><mi mathvariant=\"normal\">d</mi></mrow></mrow></math> es <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> b, cuatro órdenes de magnitud mayor que la sección geométrica. Por eso, empezando con el primer reactor de Fermi, las barras de control para detener en emergencias las reacciones nucleares suelen hacerse de cadmio. <br> Supongamos que un haz de neutrones lentos atraviesa una lámina de cadmio. Si la densidad numérica del isótopo <math display=\"inline\"><mrow><msubsup><mrow></mrow><mn>48</mn><mn>113</mn></msubsup><mrow><mi mathvariant=\"normal\">C</mi><mi mathvariant=\"normal\">d</mi></mrow></mrow></math> en esta es <math display=\"inline\"><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>27</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math>, ¿cuál es el grosor mínimo de la lámina para atenuar el haz 100 veces?"
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
       "html": "La Tierra entra en un amplio haz de meteoritos que, cuando estaban a muy gran distancia, se movían con velocidad <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>∞</mi></msub></math>. ¿Cómo debe ser el parámetro de impacto de un meteorito para que caiga sobre la Tierra? Calcula la sección eficaz total de captura de la Tierra, es decir, el área de la sección transversal del haz de meteoritos que caerán sobre la Tierra cuando estaban muy lejos. ¿Cuántos meteoritos caerán en un día? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Datos</em>"
      },
      {
       "mota": "testua",
       "html": ": <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><mn>20</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> km s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> y la intensidad del haz <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
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
       "html": "<span class=\"j-smallcaps\">Ángulo de dispersión</span>"
      },
      {
       "mota": "testua",
       "html": ". Estudiemos la dispersión en el caso del campo de fuerza central variable correspondiente a la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El valor máximo <math display=\"inline\"><msub><mi>u</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> de la variable <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> que se da en el pericentro depende del parámetro de impacto <math display=\"inline\"><mi>b</mi></math> y de la energía mecánica <math display=\"inline\"><mi>E</mi></math>. Usa la ecuación (4.28)  <em>o</em>  (4.31) y la correspondiente a la figura 4.15 para demostrar que el ángulo de dispersión viene dado por la siguiente expresión: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>π</mi><mo>−</mo><mn>2</mn><mi>b</mi><msubsup><mo>∫</mo><mn>0</mn><msub><mi>u</mi><mtext mathvariant=\"normal\">max</mtext></msub></msubsup><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math> (Obsérvese que <math display=\"inline\"><msub><mi>u</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> es el cero positivo del radicando.)"
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
       "html": "Usa el problema 4.111 para demostrar que en la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>κ</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>  (<math display=\"inline\"><mrow><mi>κ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) la sección eficaz diferencial es la siguiente: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>σ</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>κ</mi><msup><mi>π</mi><mn>2</mn></msup></mrow><mi>E</mi></mfrac><mfrac><mrow><mi>π</mi><mo>−</mo><mi mathvariant=\"normal\">Φ</mi></mrow><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mo>−</mo><mi mathvariant=\"normal\">Φ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Φ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
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
       "html": "¿Cuál es la sección eficaz para retroceder (es decir, para ángulos de dispersión <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>) en el campo de fuerza del problema 4.112?"
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
       "html": "Un muro que tiene <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>29</mn></msup></mrow></math> átomos <math display=\"inline\"><msup><mi>m</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup></math> se ataca con un haz de partículas. Desde el punto de vista de los proyectiles, los átomos son esferas rígidas de radio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m. ¿Cuál es el grosor del muro si pasan sin dispersarse la mitad de las partículas? ¿Qué grosor se necesita para que de un millón de partículas solo quede una sin dispersarse?"
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
       "html": "Todas las partículas de un amplio haz de energía <math display=\"inline\"><mi>E</mi></math> se acercan en la misma dirección, pero con parámetros de impacto distintos, al polo de una fuerza newtoniana dispersora. ¿Cuál es la región inaccesible, es decir, el conjunto de puntos que el haz no toca? <br>  <em>Sugerencia</em>: El límite de la región inaccesible será la envolvente de todas las trayectorias (véase [46])."
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
       "html": "<span class=\"j-smallcaps\">Experimento de Geiger y Marsden</span>"
      },
      {
       "mota": "testua",
       "html": ". Calcula cuál es la sección eficaz total para dispersar partículas alfa hacia atrás (es decir, en direcciones <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>). En un experimento, la muestra era una lámina de platino de <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mn>3</mn><mi>μ</mi></mrow></math> m de grosor y la energía de las partículas alfa de <math display=\"inline\"><mrow><mn>7.8</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV</mtext></mrow></mrow></math>. Geiger y Marsden midieron que, aproximadamente, una de cada 8000 partículas volvía hacia atrás. ¿Concuerda este resultado experimental con tu cálculo? <br>  <em>Nota</em>: El número y la masa atómicos del platino son <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>78</mn></mrow></math> y <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>195</mn></mrow></math> y la densidad <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>21.4</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> g/cm</mtext></mrow><mn>3</mn></msup></mrow></math>."
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
       "html": "Un haz paralelo de meteoritos se acerca con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> a un planeta de radio <math display=\"inline\"><mi>R</mi></math>. La velocidad de escape en la superficie del planeta es <math display=\"inline\"><msub><mi>v</mi><mi>i</mi></msub></math>. Calcula la sección eficaz total de choque. ¿Qué ocurre en los límites <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>? Demuestra que el ángulo de dispersión máximo es el siguiente: <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mrow><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></mfrac><mi>.</mi></mrow></math>"
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
       "html": "La energía potencial de la interacción entre un átomo y un ion es la siguiente: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>C</mi><msup><mi>r</mi><mn>4</mn></msup></mfrac><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>C</mi></math> es una constante positiva, combinación adecuada de la carga del ion y de la polarizabilidad del átomo, y <math display=\"inline\"><mi>r</mi></math> la distancia entre los dos cuerpos.) La masa del ion es <math display=\"inline\"><mi>m</mi></math> y la del átomo mucho mayor. El ion se envía contra el átomo desde una distancia grande, con energía <math display=\"inline\"><mi>E</mi></math> y parámetro de impacto <math display=\"inline\"><mi>b</mi></math>. <br> (a) Esboza la energía potencial efectiva. <br> (b) Calcula el radio de la órbita circular y demuestra que es inestable. <br> (c) Calcula cuál es, para cada valor de <math display=\"inline\"><mi>E</mi></math>, el valor máximo de <math display=\"inline\"><mi>b</mi></math> para que el ion pueda llegar hasta el núcleo del átomo. <br> (d) ¿Cuál es, por tanto, la sección eficaz total de captura con energía <math display=\"inline\"><mi>E</mi></math>?"
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
       "html": "La ecuación del elipsoide de revolución liso y fijo de la figura es esta: <math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><msup><mi>b</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> Se lanzan partículas puntuales contra el elipsoide, en la dirección del eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math>. Los choques son elásticos. Calcula la sección eficaz de dispersión diferencial y total.    <img class=\"irudi-l\" src=\"../media/irudiak/92aa8285509d9514.svg\" alt=\"\" style=\"width:155px\" loading=\"lazy\">"
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
       "html": "<span class=\"j-smallcaps\">Ángulo de dispersión y excentricidad</span>"
      },
      {
       "mota": "testua",
       "html": ". Demuestra que en las órbitas hiperbólicas newtonianas se cumple entre el ángulo de dispersión y la excentricidad la relación <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac></mrow></math>, tanto si la fuerza es atractiva como si es dispersora. ¿Se cumple esa relación si la órbita newtoniana es parabólica?"
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
       "html": "<span class=\"j-smallcaps\">Dispersión newtoniana</span>"
      },
      {
       "mota": "testua",
       "html": ". El parámetro de impacto de la órbita hiperbólica de una partícula que se mueve en la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math> es <math display=\"inline\"><mi>b</mi></math>, la energía mecánica <math display=\"inline\"><mi>E</mi></math>, la excentricidad <math display=\"inline\"><mi>ε</mi></math>, el ángulo de dispersión <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math> y la distancia mínima medida desde el polo de fuerzas <math display=\"inline\"><msub><mi>r</mi><mo>−</mo></msub></math>. Comprueba que cumple las siguientes relaciones (como de costumbre, hay que elegir el signo superior cuando <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y el inferior si <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mi>b</mi><mo>=</mo><msub><mi>r</mi><mo>−</mo></msub><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mi>k</mi><mrow><msub><mi>r</mi><mo>−</mo></msub><mi>E</mi></mrow></mfrac></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>4</mn><msup><mi>b</mi><mn>2</mn></msup><msup><mi>E</mi><mn>2</mn></msup></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo>=</mo><mfrac><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msubsup><mi>r</mi><mo>−</mo><mn>2</mn></msubsup></mrow><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>r</mi><mo>−</mo><mn>2</mn></msubsup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>b</mi><mi>E</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>r</mi><mo>−</mo></msub><mo>=</mo><msqrt><mrow><mfrac><msup><mi>k</mi><mn>2</mn></msup><mrow><mn>4</mn><msup><mi>E</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">csc</mi><mfrac><mi mathvariant=\"normal\">Φ</mi><mn>2</mn></mfrac><mo>∓</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>∓</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "En la superficie de una esfera sólida de radio <math display=\"inline\"><mi>R</mi></math> el potencial electrostático <math display=\"inline\"><mi>V</mi></math> es uniforme y constante. Se envía desde lejos una partícula con energía cinética <math display=\"inline\"><mi>T</mi></math>. La masa de la partícula es <math display=\"inline\"><mi>m</mi></math> y su carga <math display=\"inline\"><mi>q</mi></math>. ¿Cómo hay que elegir el parámetro de impacto <math display=\"inline\"><mi>b</mi></math> para que la trayectoria de la partícula sea tangente a la superficie de la esfera? Calcula la sección eficaz total de choque. ¿Cuándo es máxima y cuándo mínima (a) cuando <math display=\"inline\"><mrow><mi>q</mi><mi>V</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y (b) cuando <math display=\"inline\"><mrow><mi>q</mi><mi>V</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, al cambiar <math display=\"inline\"><mi>T</mi></math>? ¿Cuáles son esos valores máximo y mínimo? ¿Y las excentricidades de las trayectorias que golpean la esfera?"
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
       "html": "<span class=\"j-smallcaps\">Barrera de potencial rectangular</span>"
      },
      {
       "mota": "testua",
       "html": ". Una partícula puntual se mueve en el siguiente potencial central: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>&lt;</mo><mi>a</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>&gt;</mo><mi>a</mi><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math> (<math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> es un parámetro positivo con dimensiones de velocidad.) Si una partícula se acerca al polo de fuerzas con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> y parámetro de impacto <math display=\"inline\"><mi>b</mi></math>, ¿cuál es el ángulo de dispersión?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Miscelánea</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">¿Verdadero o falso?</span>"
      },
      {
       "mota": "testua",
       "html": "Explica por qué es verdadera o falsa cada una de las siguientes afirmaciones. <br> (a) Si el motor de un satélite que se mueve en una órbita circular se usa durante un intervalo de tiempo muy breve para dar el impulso que se muestra en la figura, la nueva órbita no será de tipo A, sino de aspecto B."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/373e8f3fee498af0.svg\" alt=\"\" style=\"width:188px\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "(b) La fuerza que sufre una partícula que se mueve en un campo de fuerza central puede ser atractiva en algunos puntos y repulsiva en otros puntos de la misma órbita. <br> (c) Como en el pericentro de una órbita de Kepler la fuerza y la velocidad son perpendiculares, la fuerza es centrípeta y se cumple lo siguiente: <math display=\"block\"><mrow><mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mi>.</mi></mrow></math>"
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
       "html": "Calcula el cociente entre las densidades medias de la Tierra y del Sol, usando las siguientes magnitudes y constantes numéricas: <br> 1. Diámetro angular del Sol medido desde la Tierra: <math display=\"inline\"><mi>θ</mi></math>  (<math display=\"inline\"><mrow><mo>≈</mo><mn>0.53</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>). <br> 2. Longitud del ecuador: <math display=\"inline\"><mi>L</mi></math>. <br> 3. Duración del año: <math display=\"inline\"><mi>T</mi></math>. <br> 4. Aceleración de la gravedad: <math display=\"inline\"><mi>g</mi></math>."
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
       "html": "Consideremos un planeta esférico de densidad constante <math display=\"inline\"><mi>ρ</mi></math>. Demuestra que el planeta se desintegrará, cuando la única fuerza atractiva es la gravitatoria, si gira demasiado deprisa. Halla el período mínimo de rotación para que eso no ocurra. ¿Cuál sería ese período mínimo si la masa y el diámetro del planeta fueran los de la Tierra?"
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
       "html": "Un objeto esférico homogéneo gira con velocidad angular <math display=\"inline\"><mi>ω</mi></math>. Si la única fuerza centrípeta es la gravitatoria, ¿cómo es la densidad del objeto? El púlsar PSR0531+121<span class=\"j-oin\">[Este púlsar de la nebulosa del Cangrejo es el remanente de la supernova observada en China en 1054.]</span> gira 30 veces por segundo: ¿cuál es su densidad mínima?"
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
       "html": "<span class=\"j-smallcaps\">Límite de Roche</span>"
      },
      {
       "mota": "testua",
       "html": ". Si un satélite grande está demasiado cerca del planeta, las fuerzas de marea, es decir, las diferencias entre las fuerzas de atracción aplicadas en puntos distintos, pueden romper el satélite. (Los anillos de Saturno, por ejemplo, podrían ser los restos de algún satélite roto de ese modo.) Édouard Roche estudió esta posibilidad en 1848 y concluyó que se rompería un satélite hecho de polvo si el radio de su órbita cumplía la siguiente condición: <math display=\"block\"><mrow><mi>r</mi><mo>≤</mo><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>ρ</mi><mi>p</mi></msub><msub><mi>ρ</mi><mi>s</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>R</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>R</mi></math> es el radio del planeta y <math display=\"inline\"><msub><mi>ρ</mi><mi>s</mi></msub></math> y <math display=\"inline\"><msub><mi>ρ</mi><mi>p</mi></msub></math> las densidades medias del satélite y del planeta. Para obtener la constante <math display=\"inline\"><mrow><mi>k</mi><mo>≈</mo><mn>2.4</mn></mrow></math> hay que tener en cuenta la deformación producida por las fuerzas de marea, pero aquí haremos un cálculo simplificado, para obtener la idea cualitativa. <br> Supongamos que el satélite es esférico y que en el punto de su superficie más cercano (más lejano) al planeta hay una piedrecita. Calcula el valor de la constante <math display=\"inline\"><mi>k</mi></math> para que la piedrecita no se separe del satélite."
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>: Usa que el radio del satélite es <math display=\"inline\"><mrow><mi>a</mi><mo>≪</mo><mi>r</mi></mrow></math> para hacer las aproximaciones."
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
       "html": "Una partícula se mueve en un campo central (no newtoniano). El polo de fuerzas está en el punto <math display=\"inline\"><mi>O</mi></math>. Demuestra que la de la figura no puede ser una parte de la órbita."
      },
      {
       "mota": "testua",
       "html": "<img class=\"irudi-l\" src=\"../media/irudiak/39b871fa966cba07.svg\" alt=\"\" style=\"width:77px\" loading=\"lazy\">"
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
       "html": "La órbita de una partícula es plana. ¿Basta eso para decir que la fuerza total que sufre la partícula es central?"
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
       "html": "La órbita de una partícula es elíptica. ¿Basta eso para concluir que la fuerza total que sufre la partícula es newtoniana?"
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
       "html": "Una partícula se mueve en un campo de fuerza central, en una órbita periódica no circular. ¿Puede pasar por dos pericentros en un período? ¿Y si la fuerza es newtoniana?"
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
       "html": "<span class=\"j-smallcaps\">Problema equivalente</span>"
      },
      {
       "mota": "testua",
       "html": ". Comprueba que el sistema que se resolverá en el problema 4.7.5, en las variables <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y el problema newtoniano en las variables <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mover><mi>φ</mi><mo accent=\"true\">̃</mo></mover><mo>,</mo><mover><mi>L</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> son equivalentes si se usan las siguientes definiciones: <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>ω</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>L</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>ω</mi><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>C</mi></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Usa la equivalencia para escribir directamente la ecuación de la órbita."
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
       "html": "La masa de un planeta esférico es <math display=\"inline\"><mi>M</mi></math> y su radio <math display=\"inline\"><mi>R</mi></math>. Se ha puesto en órbita una cuerda de longitud <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math> de modo que esté siempre en dirección radial, entre los radios <math display=\"inline\"><mi>R</mi></math> y <math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math> (en el problema 10.32 comprobaremos que puede hacerse así, si existe el material adecuado para ello). Calcula el período de la órbita."
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
       "html": "En los <math display=\"inline\"><mi>N</mi></math> vértices de un polígono regular se colocan, a la distancia <math display=\"inline\"><mi>R</mi></math> del centro, <math display=\"inline\"><mi>N</mi></math> partículas idénticas de masa <math display=\"inline\"><mi>m</mi></math>. Si empiezan a moverse por efecto de la atracción gravitatoria mutua, ¿cuánto tiempo necesitarán para encontrarse en el centro del polígono? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Escribe la solución usando el siguiente valor: <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Λ</mi><mi>N</mi></msub><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></munderover><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>k</mi><mi>π</mi></mrow><mi>N</mi></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Fórmula de Binet</span>"
      },
      {
       "mota": "testua",
       "html": ". Una partícula puntual se mueve en el plano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>, en el siguiente campo de fuerza no central: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Demuestra que la ecuación diferencial de la órbita es la fórmula (4.35) de Binet y resuelve la ecuación en el siguiente caso: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>k</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Teorema del virial</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[Este teorema se extiende directamente a los sistemas de partículas y es de gran importancia en la mecánica estadística.]</span> Supongamos que en el movimiento de una partícula las posiciones y las velocidades están acotadas y que la fuerza total que sufre es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math>. Definamos la magnitud <math display=\"inline\"><mrow><mi>G</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> y el valor medio de una variable mediante la siguiente fórmula: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mi>t</mi></mfrac><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mi>.</mi></mrow></math> Calcula <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y deduce <math display=\"block\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math> El término de la izquierda es el valor medio de la <em>vis viva</em> (recuérdese el problema 1.130) y el de la derecha el virial de Clausius. <br> Ahora, si la partícula se mueve en la energía potencial atractiva <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math> (<math display=\"inline\"><mrow><mi>k</mi><mi>n</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) (y la órbita está acotada), comprueba que el teorema se escribe así: <math display=\"block\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math> Además, si la fuerza es newtoniana y la órbita acotada, se escribe de la forma (4.87): <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Naturalmente, en este caso <em>y en todos aquellos en que la órbita es periódica</em> el valor medio <math display=\"inline\"><mi>T</mi></math> puede calcularse en un período: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Órbitas aproximadas</span>"
      },
      {
       "mota": "testua",
       "html": ". Dejando aparte Mercurio (y Plutón), las excentricidades de las órbitas de los planetas son pequeñas (véase la tabla A.5). Por eso, hagamos los siguientes cálculos hasta el primer orden en <math display=\"inline\"><mi>ε</mi></math>. Demuestra que (a) la órbita de un planeta es una circunferencia, pero (b) su centro, en lugar de estar en el Sol, está en el centro de la elipse, y (c) la velocidad angular del planeta medida desde el foco en el que no está el Sol es constante. <br>  <em>Nota</em>: La circunferencia, el centro y el segundo foco de aquí son el deferente, el excéntrico y el ecuante del sistema geocéntrico de Ptolomeo, pero en el sistema heliocéntrico de Copérnico. En esos sistemas hacía falta una terna así (y varios epiciclos) para cada planeta: ¡qué simplificación tan extraordinaria fue el sistema de Kepler!"
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
       "html": "<span class=\"j-smallcaps\">Precesión del perihelio de los planetas en la relatividad general</span>"
      },
      {
       "mota": "testua",
       "html": ". Si una estrella de masa <math display=\"inline\"><mi>M</mi></math> no gira y tiene simetría esférica, la ecuación de la evolución radial de un planeta que gira en torno a ella es la siguiente en la relatividad general, siendo <math display=\"inline\"><mi>τ</mi></math> el tiempo propio del planeta (véase el problema 6.86): <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>r</mi></mrow><mrow><mi>d</mi><msup><mi>τ</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mn>3</mn><msup><mi>h</mi><mn>2</mn></msup><mi>G</mi><mi>M</mi></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msup><mi>r</mi><mn>4</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>≡</mo><msup><mi>r</mi><mn>2</mn></msup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mi>.</mi></mrow></math> En el caso de los planetas del sistema solar, <math display=\"inline\"><mrow><mi>η</mi><mo>≡</mo><mfrac><mrow><mi>G</mi><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></math> es muy pequeño. Además, dejando aparte Mercurio (y Plutón), las excentricidades son muy pequeñas y puede usarse el problema 4.20 si se pone <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>−</mo><mfrac><mi>η</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>≡</mo><mi>G</mi><mi>M</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>m</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>L</mi><mo>=</mo><mi>h</mi></mrow></math>. Calcula el ángulo entre ápsides consecutivos, hasta el primer orden en <math display=\"inline\"><mi>η</mi></math>. Deduce que el avance del perihelio en una vuelta es el siguiente: <math display=\"block\"><mrow><mi>δ</mi><mi>φ</mi><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>φ</mi><mo>−</mo><mn>2</mn><mi>π</mi><mo>=</mo><mfrac><mrow><mn>6</mn><mi>π</mi><mi>G</mi><mi>M</mi></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>r</mi><mn>0</mn></msub></mrow></mfrac><mi>.</mi></mrow></math> Ese es el resultado de la relatividad general (y el primer éxito de esa teoría). (En el caso de las órbitas elípticas, en lugar de <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> hay que poner el <em>semi-latus rectum</em> newtoniano <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msup><mi>h</mi><mn>2</mn></msup><mi>/</mi><mi>G</mi><mi>M</mi></mrow></math> de la órbita, como puede demostrarse con ayuda del problema 4.49: véase el ejercicio C.1 de la página 672.)"
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
       "html": "Un satélite se mueve en una órbita circular, con velocidad angular <math display=\"inline\"><mi>ω</mi></math>. Elijamos un sistema de referencia así: el centro en el satélite, el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> en la dirección radial hacia fuera y el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> en la dirección y sentido de la órbita. Demuestra que las ecuaciones del movimiento de una partícula"
      },
      {
       "mota": "testua",
       "html": "<em>próxima</em>"
      },
      {
       "mota": "testua",
       "html": "se escriben así en ese sistema: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>3</mn><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>+</mo><mn>2</mn><mi>ω</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><mi>ω</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Comprueba que la órbita de la partícula puede ser elíptica, en el sistema citado. ¿Cuáles son entonces los ejes de la elipse, el período y la excentricidad? ¿Cómo hay que soltar la partícula para que se quede en reposo?"
      },
      {
       "mota": "testua",
       "html": "<em>Nota</em>: Desprecia la interacción gravitatoria entre el satélite y la partícula y la falta de esfericidad y la anisotropía de la Tierra."
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
       "html": "<span class=\"j-smallcaps\">Colapso gravitatorio esférico</span>"
      },
      {
       "mota": "testua",
       "html": ". Supongamos que la densidad <math display=\"inline\"><msub><mi>ρ</mi><mn>0</mn></msub></math> de una esfera de polvo es constante en el instante en que todas las partículas están en reposo. Si las colisiones entre partículas y la presión son despreciables, ¿cuánto durará el colapso gravitatorio a partir de dicho instante? Valora el resultado cuando la densidad <math display=\"inline\"><msub><mi>ρ</mi><mn>0</mn></msub></math> es la densidad media de la Tierra. <br>  <em>Nota</em>: Naturalmente, a medida que avance el colapso, las hipótesis sobre las colisiones y la presión serán cada vez menos adecuadas y el colapso no será total en la física newtoniana, pero solo se quiere hacer una valoración."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Exámenes resueltos (1996-2000), mk:4",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> está unida al extremo de un muelle de longitud natural <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> y constante de recuperación <math display=\"inline\"><mi>k</mi></math>. El otro extremo del muelle está unido a un punto fijo O. Inicialmente, la longitud del muelle es exactamente <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> y la partícula se mueve con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> en el sentido indicado en la figura. El movimiento posterior es tal que el muelle alcanza una longitud máxima <math display=\"inline\"><mrow><mn>2</mn><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. Halla el valor de la constante <math display=\"inline\"><mi>k</mi></math> en función de <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. ¿Cuál será la longitud mínima que alcanzará el muelle?"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la figura se muestran el estado inicial y el estado <math display=\"inline\"><mi>t</mi></math> en un instante cualquiera, siendo la velocidad de la partícula <math display=\"inline\"><mi>v</mi></math> (siempre tangente a la trayectoria) y estando a la distancia <math display=\"inline\"><mi>r</mi></math> de O. Una hipótesis no escrita en el enunciado es que el muelle solo puede deformarse en la dirección longitudinal (de otro modo no tendría sentido)."
    },
    {
     "mota": "testua",
     "html": "[Figura: el punto fijo O a la izquierda; el muelle (en forma de zigzag) etiquetado <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math> parte de O. Se dibujan dos posiciones: la inicial, con la partícula <math display=\"inline\"><mi>m</mi></math> y el muelle en su longitud natural <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> en horizontal, y con la velocidad inicial <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> formando 45° con la horizontal (tangente a la trayectoria, dirigida hacia arriba y a la derecha); y la de un instante cualquiera <math display=\"inline\"><mi>t</mi></math>, con el muelle alargado hasta la distancia <math display=\"inline\"><mi>r</mi></math> (etiqueta <math display=\"inline\"><mi>r</mi></math> a lo largo del muelle), formando el ángulo <math display=\"inline\"><mi>θ</mi></math> con la horizontal, y con la velocidad <math display=\"inline\"><mi>v</mi></math> tangente a la trayectoria. Una curva representa la trayectoria de la partícula, que sube desde la posición inicial.]"
    },
    {
     "mota": "testua",
     "html": "Podemos considerar el problema como un problema de dinámica de una partícula sometida a una fuerza cuya dirección pasa siempre por el mismo punto (en este caso O). Además, como la fuerza la ejerce un muelle y sabemos que tales fuerzas son conservativas, podemos usar dos principios de conservación para resolver el ejercicio por completo."
    },
    {
     "mota": "testua",
     "html": "En primer lugar, como la fuerza es conservativa, la energía mecánica del sistema se mantendrá constante, que en este caso será la suma de la energía cinética y la energía potencial elástica (la gravedad no actúa). Si usamos coordenadas polares planas, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><msub><mi>l</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ya que en cualquier instante es <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> y, además, en el instante inicial la única energía es la cinética, pues el muelle tiene en ese instante su longitud natural <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math>."
    },
    {
     "mota": "testua",
     "html": "En segundo lugar, como la fuerza que actúa es de tipo <em>central</em>, el momento angular de la partícula también se mantendrá constante, pues de la expresión <math display=\"inline\"><mrow><mi>d</mi><mi>J</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>τ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mi>τ</mi></math> es el momento de la fuerza respecto a O y, naturalmente, es nulo) se deduce inmediatamente <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>. Nos bastará trabajar con el módulo, que también será constante. Así pues, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mi>r</mi><mo>⋅</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>l</mi><mn>0</mn></msub><mo>⋅</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><msub><mi>v</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ya que, por un lado, sabemos que <math display=\"inline\"><mrow><msub><mi>v</mi><mi>θ</mi></msub><mo>=</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, y que en el instante inicial la velocidad transversal correspondiente es: <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>θ</mi><mn>0</mn></mrow></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac><msub><mi>v</mi><mn>0</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "De estas dos ecuaciones podemos obtener la ecuación diferencial de primer orden de <math display=\"inline\"><mi>r</mi></math> o de <math display=\"inline\"><mi>θ</mi></math>, y de aquí por integración se deducirían las ecuaciones del movimiento correspondientes, junto con la ecuación de la trayectoria, que puede ser operativamente complicada. De todos modos, no es algo que nos deba preocupar, pues las preguntas se refieren a los puntos de retorno de la trayectoria, es decir, a los puntos en que la velocidad radial cambia de signo (o, lo que es lo mismo, a los puntos en que la velocidad radial es nula: <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "De la segunda igualdad obtenemos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><msqrt><mn>2</mn></msqrt><mspace width=\"0.167em\"></mspace><msub><mi>l</mi><mn>0</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "esto podemos sustituirlo en la primera, para los puntos de retorno (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>), para escribir, tras simplificar:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>m</mi><msubsup><mi>l</mi><mn>0</mn><mn>2</mn></msubsup><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><msub><mi>l</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "esa expresión, una vez desarrollada, nos llevaría a una ecuación polinómica de cuarto grado que no podríamos resolver. Sin embargo, conocemos uno de los puntos de retorno por el enunciado del problema: <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. Eso nos permitirá determinar el valor de la constante elástica del muelle <math display=\"inline\"><mi>k</mi></math>, respondiendo así a la primera pregunta planteada. No hay ninguna dificultad en llegar, tras la sustitución y la simplificación posterior, a lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mn>7</mn><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>8</mn><msubsup><mi>l</mi><mn>0</mn><mn>2</mn></msubsup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si ahora usamos este valor de <math display=\"inline\"><mi>k</mi></math> en la ecuación polinómica de cuarto grado que nos da los puntos de retorno, tras simplificar llegamos a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>7</mn><msup><mi>r</mi><mn>4</mn></msup><mo>−</mo><mn>14</mn><msub><mi>l</mi><mn>0</mn></msub><msup><mi>r</mi><mn>3</mn></msup><mo>−</mo><msubsup><mi>l</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><msubsup><mi>l</mi><mn>0</mn><mn>4</mn></msubsup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de esa ecuación ya conocemos una de sus raíces: <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. La regla de Ruffini nos permite obtener la ecuación polinómica de tercer grado que deberá cumplir el otro punto de retorno (el de distancia mínima a O). Será esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>7</mn><msup><mi>r</mi><mn>3</mn></msup><mo>−</mo><msubsup><mi>l</mi><mn>0</mn><mn>2</mn></msubsup><mi>r</mi><mo>−</mo><mn>2</mn><msubsup><mi>l</mi><mn>0</mn><mn>3</mn></msubsup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Podemos resolver esta ecuación mediante procedimientos numéricos, obteniendo una única raíz real: <math display=\"inline\"><mrow><mi>r</mi><mo>≃</mo><mn>0.73067452</mn><mspace width=\"0.167em\"></mspace><msub><mi>l</mi><mn>0</mn></msub></mrow></math>."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> Kg. Se sospecha que un planeta orbita en torno a una estrella de masa. Para confirmarlo se hacen medidas del movimiento de la estrella y se halla que describe un movimiento circular, con velocidad <math display=\"inline\"><mrow><msub><mi>v</mi><mi>e</mi></msub><mo>=</mo><mn>1</mn></mrow></math> km/s y período <math display=\"inline\"><mrow><msub><mi>τ</mi><mi>e</mi></msub><mo>=</mo><mn>1</mn></mrow></math> años. Calcula la masa <math display=\"inline\"><mi>m</mi></math> del planeta. (En el último paso, pero no antes, puede suponerse que <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math>.)"
    },
    {
     "mota": "testua",
     "html": "[Figura: circunferencia grande de trazo continuo centrada en ESTRELLA (un círculo con un hueco en el eje horizontal); a su derecha, a la distancia <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math>, el centro de masas <math display=\"inline\"><mi>O</mi></math> (punto relleno etiquetado &quot;O&quot;), unido por segmentos cortos <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math>; una segunda circunferencia de trazo discontinuo centrada en <math display=\"inline\"><mi>O</mi></math> y de radio <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> (que pasa por la estrella), que representa la órbita de la estrella en torno a <math display=\"inline\"><mi>O</mi></math>; el eje continúa hacia la derecha con el segmento <math display=\"inline\"><mrow><mi>O</mi><mo>→</mo></mrow></math> planeta, etiquetado <math display=\"inline\"><msub><mi>r</mi><mi>p</mi></msub></math>, que termina en el símbolo del planeta (un círculo con un punto central); en la parte inferior, una acotación de trazo etiquetada <math display=\"inline\"><mi>r</mi></math> abarca la distancia total entre la estrella y el planeta (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mi>e</mi></msub><mo>+</mo><msub><mi>r</mi><mi>p</mi></msub></mrow></math>).]"
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Calculemos, en primer lugar, la posición del centro de masas O. Si nos situamos en un sistema inercial centrado en la estrella, la posición del punto O coincide con el valor <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math>. Como la distancia entre la estrella y el planeta es <math display=\"inline\"><mi>r</mi></math>, tendremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>r</mi><mi>e</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mi>r</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>e</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El segundo valor que hemos obtenido, <math display=\"inline\"><msub><mi>v</mi><mi>e</mi></msub></math>, es la velocidad de O respecto a un sistema inercial en reposo en cada instante respecto al centro de la estrella. A la inversa, será también la velocidad del centro de masas de la estrella respecto al centro de masas del sistema, O."
    },
    {
     "mota": "testua",
     "html": "Como el sistema está aislado y no hay fuerzas exteriores al sistema, en el sistema del centro de masas el momento lineal total es nulo. Así pues, si nos situamos en él, veremos que tanto la estrella como el planeta describen órbitas circulares en torno a O, con la estrella de radio <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> y velocidad <math display=\"inline\"><msub><mi>v</mi><mi>e</mi></msub></math>, y el planeta de radio <math display=\"inline\"><msub><mi>r</mi><mi>p</mi></msub></math>. En ambos casos, la fuerza que produce ese movimiento circular es la fuerza de atracción mutua."
    },
    {
     "mota": "testua",
     "html": "Como el movimiento que describe la estrella es circular, podemos escribir que la fuerza normal dirigida al centro de su trayectoria, O, es igual a la fuerza de atracción:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><mfrac><msubsup><mi>v</mi><mi>e</mi><mn>2</mn></msubsup><msub><mi>r</mi><mi>e</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mi>G</mi></math> la constante de gravitación universal. Sustituyendo <math display=\"inline\"><mi>r</mi></math> por su valor en función de <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math>, y teniendo en cuenta que <math display=\"inline\"><mrow><msub><mi>r</mi><mi>e</mi></msub><mo>=</mo><msub><mi>v</mi><mi>e</mi></msub><msub><mi>τ</mi><mi>e</mi></msub><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math>, siendo <math display=\"inline\"><msub><mi>τ</mi><mi>e</mi></msub></math> el período de revolución de la estrella respecto al centro de masas O, la expresión anterior se escribirá así, tras simplificar:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>m</mi><mn>3</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msubsup><mi>v</mi><mi>e</mi><mn>3</mn></msubsup><msub><mi>τ</mi><mi>e</mi></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>G</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora estamos en las condiciones de hacer la aproximación <math display=\"inline\"><mrow><mi>M</mi><mo>+</mo><mi>m</mi><mo>≈</mo><mi>M</mi></mrow></math>, y eso nos permitirá despejar <math display=\"inline\"><mi>m</mi></math> en función de los datos dados por el problema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mo>≈</mo><msub><mi>v</mi><mi>e</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msup><mi>M</mi><mn>2</mn></msup><msub><mi>τ</mi><mi>e</mi></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>G</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>=</mo><mn>6.7</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[<em>Nota</em>: El centro de masas O del sistema permanece siempre en el mismo punto, y por eso la estrella y el planeta estarán siempre alineados con él. Eso quiere decir que, si el período de revolución de la estrella respecto al centro de masas O es un año, el período de revolución del planeta respecto a O será también igual al de la estrella]."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Otro método</em>: El problema equivalente de un solo cuerpo nos dice que podemos estudiar el movimiento del sistema como si fuera un cuerpo de masa igual a la masa reducida, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>M</mi><mi>m</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que se mueve bajo una fuerza central igual a la fuerza de interacción. En nuestro caso, como la distancia entre el centro de masas O y la estrella se mantiene constante (esta describe una trayectoria circular respecto a O), la distancia de O al planeta también se mantendrá constante, y así <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mi>e</mi></msub><mo>+</mo><msub><mi>r</mi><mi>p</mi></msub></mrow></math> será también constante, y el cuerpo reducido describirá respecto a ese centro ficticio una órbita circular de radio <math display=\"inline\"><mi>r</mi></math>. Escribiendo la condición de órbita circular, tendremos:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>μ</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "A partir de esta relación, sustituyendo los valores <math display=\"inline\"><mi>r</mi></math> y <math display=\"inline\"><mi>v</mi></math> por los valores correspondientes en función de <math display=\"inline\"><msub><mi>r</mi><mi>e</mi></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mi>e</mi></msub></math>, recuperamos la expresión escrita arriba."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un planeta describe una órbita circular en torno a una estrella, con energía <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math>, momento angular <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> y velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Una colisión con un cometa convierte la órbita en una elipse, con el mismo periastro, pero con el apoastro situado cinco veces más lejos de la estrella. Dibuja las órbitas y calcula la energía <math display=\"inline\"><msub><mi>E</mi><mi>f</mi></msub></math>, el momento angular <math display=\"inline\"><msub><mi>l</mi><mi>f</mi></msub></math> y las velocidades del planeta en el periastro y en el apoastro."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[Figura: se representan, de izquierda a derecha, los tres estados. (1) Órbita circular, con la estrella (punto) en el centro y el planeta en el punto P de la izquierda; debajo, el cometa C se acerca con su velocidad <math display=\"inline\"><msub><mi>v</mi><mi>C</mi></msub></math> (flecha hacia la derecha). (2) Instante de la colisión: una circunferencia de trazo discontinuo y una elipse de trazo discontinuo que comparten el periastro inferior, con la estrella (punto) en su interior; debajo, las etiquetas C P (el cometa y el periastro coinciden). (3) Órbita elíptica (trazo continuo), con la estrella (punto) en un foco y el planeta en el punto P de la derecha; debajo, el cometa C con su velocidad <math display=\"inline\"><msubsup><mi>v</mi><mi>C</mi><mo>′</mo></msubsup></math> (flecha hacia la derecha).]"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "En la figura se muestran los tres estados indicados en el texto: un instante anterior a la colisión, el instante de la colisión y un instante posterior a ella. Considerando solo el planeta, su energía total, suma de la energía cinética y la potencial, es además <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>/</mi><mn>2</mn><mi>a</mi></mrow></math>, siendo <math display=\"inline\"><mi>k</mi></math> la constante del campo de fuerzas (aquí <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>G</mi><mi>M</mi><mi>m</mi></mrow></math>, donde <math display=\"inline\"><mi>G</mi></math> es la constante de gravitación universal, <math display=\"inline\"><mi>M</mi></math> la masa de la estrella y <math display=\"inline\"><mi>m</mi></math> la del planeta) y <math display=\"inline\"><mi>a</mi></math> el semieje mayor de la órbita (aquí, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>R</mi></mrow></math>), como dice la teoría para el caso de las órbitas cerradas en un campo de fuerzas inversamente proporcional al cuadrado de la distancia. Esta relación nos permitirá, a su vez, determinar los valores de la velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> de la órbita circular en función de su radio, igual que el momento angular <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>l</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><msub><mi>v</mi><mn>0</mn></msub><mi>R</mi><mo>=</mo><mi>m</mi><msqrt><mrow><mi>G</mi><mi>M</mi><mi>R</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tras la colisión, el planeta cambia su trayectoria hasta convertirse en una elipse cuyo apoastro es cinco veces el radio de la órbita circular anterior. Además, supondremos que el planeta no cambia su masa (el cometa continúa su trayectoria tras la colisión, con una velocidad distinta). La nueva órbita sigue siendo cerrada, y podemos aplicarle la misma relación que para el caso anterior. Es decir, la energía total es función del semieje mayor de la nueva órbita, <math display=\"inline\"><mrow><msup><mi>a</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>+</mo><mn>5</mn><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo>=</mo><mn>3</mn><mi>R</mi></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>r</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><msup><mi>a</mi><mo>′</mo></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>6</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msub><mi>E</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "valor que es constante en cualquier punto de la nueva órbita. En particular, si lo aplicamos al periastro y al apoastro, podemos obtener la velocidad del planeta en esos puntos y, en consecuencia, el nuevo momento angular. Llamando <math display=\"inline\"><msub><mi>v</mi><mi>p</mi></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mi>a</mi></msub></math> a las velocidades en esos puntos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/88060ca777b4c213.svg\" alt=\"v_p = v #scale(x: 120%, y: 120%)[\\|]_(r = R) = sqrt(frac(5 G M, 3 R)) = sqrt(5 / 3) thin v_0\" style=\"width:16.056em;height:3.069em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/33a4ec9f28ceb3c9.svg\" alt=\"v_a = v #scale(x: 120%, y: 120%)[\\|]_(r = 5 R) = sqrt(frac(G M, 15 R)) = 1 / sqrt(15) thin v_0\" style=\"width:16.349em;height:3.251em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>l</mi><mi>f</mi></msub><mo>=</mo><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub><mi>R</mi><mo>=</mo><mi>m</mi><msub><mi>v</mi><mi>a</mi></msub><mn>5</mn><mi>R</mi><mo>=</mo><msqrt><mfrac><mn>5</mn><mn>3</mn></mfrac></msqrt><mspace width=\"0.167em\"></mspace><msub><mi>l</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Volviendo al modo en que se produce la colisión, hemos supuesto que el impulso se produce en el mismo sentido en que se mueve el planeta en el periastro y que, por tanto, tras la colisión el periastro sigue siendo el mismo. En cuanto al movimiento posterior del cometa, con los datos dados no podremos precisar más su trayectoria posterior (no conocemos el grado de"
    },
    {
     "mota": "testua",
     "html": "<em>inelasticidad</em>"
    },
    {
     "mota": "testua",
     "html": "de la colisión, y por eso no sabemos si el cometa sigue adelante o rebota hacia atrás)."
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un satélite de masa <math display=\"inline\"><mi>m</mi></math> describe con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> una órbita circular de radio <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> bajo la fuerza gravitatoria de una masa <math display=\"inline\"><mi>M</mi></math> fija en un punto O. En un punto B de la órbita, la dirección del movimiento del satélite cambia bruscamente manteniendo constante el módulo de la velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Como consecuencia, el satélite pasa a una órbita elíptica. En esa órbita elíptica, la distancia mínima a la que se encuentra el satélite del punto fijo O es <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></math>. a) ¿Cuál es la velocidad del satélite en ese punto en función de <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>? b) ¿Cuál es el ángulo <math display=\"inline\"><mi>α</mi></math> que giró la velocidad en el punto B?"
    },
    {
     "mota": "testua",
     "html": "[Figura: circunferencia centrada en O (órbita circular de radio <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math>). En la parte superior, el punto B; de B parte una flecha horizontal de trazo discontinuo etiquetada <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> (velocidad original, tangente a la órbita) y, formando con ella el ángulo <math display=\"inline\"><mi>α</mi></math>, una flecha llena etiquetada <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> dirigida hacia abajo y a la derecha (velocidad tras el cambio de dirección). El radio horizontal está etiquetado <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math>; del centro al punto P se etiqueta <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></math>. En la parte inferior derecha de la circunferencia está el punto P (perigeo), extremo de la órbita elíptica que pasa por B y por P.]"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Las condiciones para tener una órbita circular a la distancia <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> bajo la influencia gravitatoria de una masa <math display=\"inline\"><mi>M</mi></math> nos permiten expresar <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> en función de otras magnitudes. Así pues, igualando la fuerza de atracción gravitatoria a la fuerza centrípeta, llegamos a lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mfrac><mrow><mi>M</mi><mi>m</mi></mrow><msubsup><mi>r</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>=</mo><mi>m</mi><mfrac><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><msub><mi>r</mi><mn>0</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msub><mi>r</mi><mn>0</mn></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Una vez que se ha dado ese cambio de dirección a la velocidad, sin cambiar el módulo, la energía total en el punto B se mantiene constante, pues no cambian ni la energía cinética ni la potencial. Usando el principio de conservación de la energía en esta nueva trayectoria, en el punto P (perigeo, punto de máxima aproximación), donde <math display=\"inline\"><mrow><msub><mi>r</mi><mi>P</mi></msub><mo>=</mo><msub><mi>r</mi><mi>m</mi></msub><mo>=</mo><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>r</mi><mi>m</mi></msub><mo>=</mo></mrow></math> distancia mínima), y en el punto B, donde recibe el impulso, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msub><mi>r</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>P</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><msub><mi>r</mi><mn>0</mn></msub><mi>/</mi><mn>5</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><mn>3</mn><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msub><mi>r</mi><mn>0</mn></msub></mfrac></msqrt><mo>=</mo><mn>3</mn><msub><mi>v</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aunque en el punto B el momento angular no se conserva entre antes y después del impulso, una vez recibido, el nuevo momento angular se conserva a lo largo de toda la trayectoria. Aplicándolo a los dos puntos de la nueva trayectoria:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><msub><mi>r</mi><mn>0</mn></msub><mn>5</mn></mfrac><mi>m</mi><msub><mi>v</mi><mi>P</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msub><mi>r</mi><mn>0</mn></msub><msub><mi>v</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mi>m</mi><msub><mi>r</mi><mn>0</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>=</mo><mn>53</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bajo la acción de una fuerza central, una partícula describe una órbita circular de radio <math display=\"inline\"><mi>R</mi></math>, estando el centro de fuerzas en un punto de la circunferencia. Halla la ecuación polar de la órbita <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la energía potencial <math display=\"inline\"><mi>V</mi></math>. ¿Puedes comentar brevemente el problema?"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[Figura: circunferencia (la órbita) que pasa por el origen <math display=\"inline\"><mi>O</mi></math>; los ejes cartesianos <math display=\"inline\"><mi>x</mi></math> (horizontal, hacia la derecha, eje polar) y <math display=\"inline\"><mi>y</mi></math> (vertical) con origen <math display=\"inline\"><mi>O</mi></math>, que es el centro de fuerzas situado sobre la propia circunferencia. Desde <math display=\"inline\"><mi>O</mi></math> parte el vector <math display=\"inline\"><mi>r</mi></math> hasta la partícula <math display=\"inline\"><mi>m</mi></math> situada en la circunferencia, formando el ángulo polar <math display=\"inline\"><mi>θ</mi></math> con el eje <math display=\"inline\"><mi>x</mi></math>; sobre ese segmento, junto a <math display=\"inline\"><mi>m</mi></math>, se marca la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math>. <math display=\"inline\"><mi>R</mi></math> es el radio, representado como un segmento horizontal que parte del centro de la circunferencia (con su proyección de trazo discontinuo sobre el eje <math display=\"inline\"><mi>x</mi></math>).]"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "En la figura hemos hecho coincidir la dirección del eje polar con el diámetro de la órbita circular correspondiente al origen <math display=\"inline\"><mi>O</mi></math> del centro de fuerzas. En esa situación, la ecuación de la órbita en coordenadas polares es la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El problema podemos seguirlo de varias maneras. En primer lugar usaremos el procedimiento más general. Como la fuerza es central, la fuerza total coincidirá con la fuerza radial, que, expresada en coordenadas polares, tendrá el siguiente valor:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mi>r</mi></msub><mo>=</mo><mi>m</mi><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La fuerza transversal será nula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mi>θ</mi></msub><mo>=</mo><mi>m</mi><msub><mi>a</mi><mi>θ</mi></msub><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>m</mi><mi>r</mi></mfrac><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mo>=</mo><mfrac><mi>l</mi><mi>m</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>l</mi><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como valor de la constante hemos usado el cociente de dos constantes, <math display=\"inline\"><mfrac><mi>l</mi><mi>m</mi></mfrac></math>, donde <math display=\"inline\"><mi>l</mi></math> lo identificamos con lo que conocemos como <em>momento angular</em>, magnitud que, por tanto, también será constante. Trabajaremos con mucho cuidado para calcular los dos términos que componen la aceleración radial <math display=\"inline\"><msub><mi>a</mi><mi>r</mi></msub></math>. Así pues:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>R</mi><mi>l</mi></mrow><mi>m</mi></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>R</mi><mi>l</mi></mrow><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mfrac><msup><mi>l</mi><mn>2</mn></msup><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mrow><mn>8</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>5</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde los valores <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> y <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> que iban apareciendo los hemos ido sustituyendo a continuación. Así pues, el valor de la aceleración radial será el siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><msup><mi>l</mi><mn>2</mn></msup><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mrow><mn>8</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>5</mn></msup></mrow></mfrac><mo>−</mo><mfrac><msup><mi>l</mi><mn>2</mn></msup><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mn>8</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>5</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/0f1a0682bc38418a.svg\" alt=\"F = F_r = m a_r = - frac(8 l^2 R^2, m) 1 / r^5 = - k / r^5 #h(2em) \\[ k &gt; 0 \\]\" style=\"width:23.754em;height:2.760em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por tanto, es una fuerza central atractiva (pues <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), inversamente proporcional a la quinta potencia de la distancia al centro de fuerzas. La energía potencial correspondiente se obtiene, en un campo conservativo, de la relación entre el potencial y la fuerza:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>4</mn><msup><mi>r</mi><mn>4</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mfrac><mn>1</mn><msup><mi>r</mi><mn>4</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Otro método</em>: Partamos directamente de la ecuación diferencial de la órbita, en cualquiera de sus dos modalidades: siendo el segundo miembro función de la ley de fuerzas, o función de la energía potencial. Recordando:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi>l</mi><mn>2</mn></msup><msup><mi>u</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>θ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>r</mi></mfrac></mrow></math> y <math display=\"inline\"><mi>l</mi></math> tiene el mismo significado que en el apartado anterior. Tenemos que calcular, pues, la segunda derivada de <math display=\"inline\"><mi>u</mi></math> respecto al ángulo polar <math display=\"inline\"><mi>θ</mi></math> y hacer la operación indicada entre corchetes:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/b034770ba8d40590.svg\" alt=\"u = frac(1, 2 R) sec theta #h(2em) frac(dif u, dif theta) = frac(1, 2 R) frac(sin theta, cos^2 theta) #h(2em) frac(d^2 u, dif theta^2) = frac(1, 2 R) frac(1 + sin^2 theta, cos^3 theta)\" style=\"width:29.291em;height:2.773em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>θ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mi>R</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mn>8</mn><msup><mi>R</mi><mn>2</mn></msup><msup><mi>u</mi><mn>3</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>8</mn><msup><mi>R</mi><mn>2</mn></msup><msup><mi>l</mi><mn>2</mn></msup><msup><mi>u</mi><mn>5</mn></msup></mrow><mi>m</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>8</mn><msup><mi>R</mi><mn>2</mn></msup><msup><mi>l</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mfrac><mn>1</mn><msup><mi>r</mi><mn>5</mn></msup></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>5</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "como antes. Este método, como se puede ver, es mucho más eficaz que el anterior y permite llegar sin ninguna dificultad al resultado final."
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "(verbatim)"
    },
    {
     "mota": "testua",
     "html": "Dos satélites, cada uno de masa <math display=\"inline\"><mi>m</mi></math>, se mueven en torno a la Tierra en órbitas circulares coplanarias. El radio de la órbita interior es <math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math> y el de la exterior <math display=\"inline\"><mrow><mn>4</mn><mi>R</mi></mrow></math>, siendo <math display=\"inline\"><mi>R</mi></math> el radio de la Tierra. Un hilo de longitud <math display=\"inline\"><mi>R</mi></math> une los dos satélites y los hace moverse juntos en torno a la Tierra, mientras se mantienen en las órbitas citadas. Halla el período común de los satélites y la fuerza que soporta el hilo de unión."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "(verbatim, con ecuaciones)"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Las fuerzas que actúan sobre cada satélite son las que se muestran en la segunda figura, viéndose la situación general en la primera. Las designadas <math display=\"inline\"><msub><mi>F</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>F</mi><mn>2</mn></msub></math> son las fuerzas gravitatorias que la Tierra, cuyo centro está a la distancia <math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math> de la masa interior, ejerce sobre ambos, y la llamada <math display=\"inline\"><mi>T</mi></math> es, en módulo, aunque de signo contrario, la tensión del hilo que mantiene las dos masas a la distancia constante <math display=\"inline\"><mi>R</mi></math>. No tenemos en cuenta la interacción gravitatoria entre las dos masas, dada la gran distancia entre ellas (un radio terrestre), pues sería irrelevante comparada con la tensión del hilo. Los valores de las fuerzas gravitatorias sobre las dos partículas, en valor absoluto, son los siguientes:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/0fb76a9be8757fd8.svg\" alt=\"F_1 = G frac(M m, 9 R^2) #h(2em) F_2 = G frac(M m, 16 R^2)\" style=\"width:15.033em;height:2.605em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Apliquemos a cada masa la segunda ley de Newton, teniendo en cuenta que el movimiento de cada una es circular uniforme y que por eso solo tiene aceleración normal, y estableciendo además que la velocidad angular de giro en torno a la Tierra es la misma:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/6e516b7b9621a0b9.svg\" alt=\"F_1 - T = m omega^2 dot.op 3 R #h(2em) F_2 + T = m omega^2 dot.op 4 R\" style=\"width:21.620em;height:1.455em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "De la suma de ambas eliminamos <math display=\"inline\"><mi>T</mi></math>, y eso nos permite calcular en primer lugar el período de giro conjunto respecto a la Tierra:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mn>1</mn></msub><mo>+</mo><msub><mi>F</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>25</mn><mn>144</mn></mfrac><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>7</mn><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>25</mn><mn>1008</mn></mfrac><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msup><mi>R</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><msup><mi>τ</mi><mn>2</mn></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>τ</mi><mo>=</mo><mfrac><mrow><mn>24</mn><mi>π</mi></mrow><mn>5</mn></mfrac><msqrt><mfrac><mrow><mn>7</mn><msup><mi>R</mi><mn>3</mn></msup></mrow><mrow><mi>G</mi><mi>M</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo el valor obtenido de <math display=\"inline\"><mi>ω</mi></math> en cualquiera de las dos ecuaciones del movimiento dadas por la segunda ley de Newton, obtendremos el valor de la tensión del hilo. Por ejemplo, de la primera:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>F</mi><mn>1</mn></msub><mo>−</mo><mn>3</mn><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi><mo>=</mo><mfrac><mn>37</mn><mn>1008</mn></mfrac><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>R</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "line(start: (25%,0%), end: (75%,0%))"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Figuras (descripción; los originales son dibujos)"
    },
    {
     "mota": "testua",
     "html": "<strong>Figura 1 (situación general).</strong>"
    },
    {
     "mota": "testua",
     "html": "La Tierra dibujada como un círculo de radio <math display=\"inline\"><mi>R</mi></math> (centro marcado, con la etiqueta &quot;<math display=\"inline\"><mi>R</mi></math>&quot; y la etiqueta &quot;<math display=\"inline\"><mi>T</mi></math>&quot;). Desde allí, una línea radial de trazo discontinuo etiquetada &quot;<math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math>&quot; llega hasta la masa interior &quot;<math display=\"inline\"><mi>m</mi></math>&quot;; de esta parte un segmento corto etiquetado &quot;<math display=\"inline\"><mi>R</mi></math>&quot; (el hilo) que llega hasta la masa exterior &quot;<math display=\"inline\"><mi>m</mi></math>&quot;. Los arcos de trazo discontinuo representan las dos órbitas."
    },
    {
     "mota": "testua",
     "html": "<strong>Figura 2 (fuerzas).</strong>"
    },
    {
     "mota": "testua",
     "html": "Las dos masas &quot;<math display=\"inline\"><mi>m</mi></math>&quot; en la misma línea radial de trazo discontinuo, las órbitas como arcos de trazo discontinuo y las distancias &quot;<math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math>&quot; (hasta la masa interior) y &quot;<math display=\"inline\"><mi>R</mi></math>&quot; (entre las dos masas) marcadas. Sobre la masa interior: <math display=\"inline\"><msub><mi>F</mi><mn>1</mn></msub></math> (gravitatoria, hacia la Tierra) y <math display=\"inline\"><mi>T</mi></math> (tensión, hacia la masa exterior). Sobre la masa exterior: <math display=\"inline\"><msub><mi>F</mi><mn>2</mn></msub></math> (gravitatoria, hacia la Tierra) y <math display=\"inline\"><mi>T</mi></math> (tensión, hacia la masa interior)."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "(verbatim)"
    },
    {
     "mota": "testua",
     "html": "<strong>98Jun02.</strong>"
    },
    {
     "mota": "testua",
     "html": "Dos satélites de la misma masa <math display=\"inline\"><mi>m</mi></math> se mueven en dos órbitas coplanarias, en el mismo sentido, en torno a la Tierra. Una de las órbitas es circular de radio <math display=\"inline\"><mi>R</mi></math> y la otra elíptica, con distancias de apogeo y perigeo <math display=\"inline\"><mrow><mn>8</mn><mi>R</mi></mrow></math> y <math display=\"inline\"><mi>R</mi></math>, respectivamente. Los dos satélites coinciden en el punto de tangencia de sus órbitas, el perigeo P, y se acoplan entre sí para seguir moviéndose unidos. Halla las características de la nueva órbita."
    },
    {
     "mota": "testua",
     "html": "<em>(Figura: una elipse, con una circunferencia interior tangente en el perigeo. De izquierda a derecha, sobre el eje: A (apogeo, extremo izquierdo de la elipse), el segmento etiquetado <math display=\"inline\"><mrow><mn>8</mn><mi>R</mi></mrow></math>, el centro O etiquetado &quot;Tierra&quot;, el segmento etiquetado <math display=\"inline\"><mi>R</mi></math> y P (perigeo, extremo derecho). Una flecha sobre las trayectorias indica el sentido de giro, común a las dos órbitas.)</em>"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "(verbatim, con ecuaciones)"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Como primer paso necesitamos conocer los valores de las velocidades de los dos satélites en el perigeo, a partir de los datos de las órbitas. Si con el subíndice 1 designamos la órbita circular y con el subíndice 2 la elíptica, las velocidades citadas serán, respectivamente, <math display=\"inline\"><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub></math>. En la órbita circular podemos usar el teorema del virial para calcular <math display=\"inline\"><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub></math>, ya que en este caso los valores medios de las energías cinética y potencial a lo largo de una órbita coinciden con los instantáneos. Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mi>M</mi></math> la masa de la Tierra. Para la órbita elíptica usaremos los principios de conservación de la energía y del momento angular en los puntos extremos de la trayectoria para calcular <math display=\"inline\"><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub></math>. Así pues:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mrow><mn>2</mn><mi>A</mi></mrow><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>8</mn><mi>R</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>R</mi><mo>⋅</mo><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub><mo>=</mo><mn>8</mn><mi>R</mi><mo>⋅</mo><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mrow><mn>2</mn><mi>A</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "La colisión en P es completamente inelástica, ya que después los dos satélites saldrán juntos con la velocidad <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math>, que puede determinarse a partir de la conservación del momento lineal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub><mo>+</mo><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mrow><mn>2</mn><mi>P</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mi>P</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><mfrac><mn>7</mn><mn>6</mn></mfrac><msub><mi>v</mi><mrow><mn>1</mn><mi>P</mi></mrow></msub><mo>=</mo><mfrac><mn>7</mn><mn>6</mn></mfrac><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El punto de colisión es ahora uno de los puntos de retorno de la nueva órbita, porque la velocidad resultante del conjunto en ese punto P tendrá la misma dirección que las de los dos que llegan y, como ambas eran perpendiculares al vector radial en P, <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math> también será perpendicular a <math display=\"inline\"><msub><mi>r</mi><mi>P</mi></msub></math> y en ese punto no hay velocidad radial. El valor de la energía mecánica en P nos dirá si la órbita es elíptica o abierta. Calculémoslo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mi>P</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mo>⋅</mo><mn>2</mn><mi>m</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>23</mn><mn>36</mn></mfrac><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo>&lt;</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como este valor es negativo, la órbita es cerrada (elíptica). Si llamamos <math display=\"inline\"><msub><mi>r</mi><mi>A</mi></msub></math> a la distancia al apogeo, donde su velocidad es <math display=\"inline\"><msub><mi>v</mi><mi>A</mi></msub></math>, usando los dos principios de conservación habituales en los problemas de fuerzas centrales podemos obtener los datos para determinar las características de la nueva trayectoria:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mi>P</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mo>⋅</mo><mn>2</mn><mi>m</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>v</mi><mi>A</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mo>⋅</mo><mn>2</mn><mi>m</mi></mrow><msub><mi>r</mi><mi>A</mi></msub></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>R</mi><mo>⋅</mo><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><msub><mi>r</mi><mi>A</mi></msub><mo>⋅</mo><mn>2</mn><mi>m</mi><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mi>A</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>r</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>49</mn><mn>23</mn></mfrac><mi>R</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>v</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>23</mn><mn>42</mn></mfrac><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Como características adicionales de la órbita, diremos que el semieje mayor, la semidistancia focal y la excentricidad tienen, respectivamente, los siguientes valores:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/fd058969849537e4.svg\" alt=\"a = frac(r_P + r_A, 2) = 36 / 23 R #h(2em) c = a - r_P = 13 / 23 R #h(2em) epsilon = c / a = 13 / 36\" style=\"width:30.145em;height:2.585em\" loading=\"lazy\">"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se mueve en un potencial central de la forma <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mi>r</mi></mfrac></mrow></math>. Demuestra que la velocidad en una órbita elíptica viene dada por lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y usa esa expresión para hallar el cociente entre la velocidad máxima y la mínima en función de la excentricidad. ¿Cuáles son las expresiones correspondientes a las órbitas circulares y parabólicas?"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Según la teoría, la ecuación de la órbita en coordenadas polares es la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>α</mi><mrow><mn>1</mn><mo>+</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>α</mi></math> es una constante cuyo valor se determina a partir de la resolución de la ecuación diferencial de la órbita y es función del momento angular constante. Los valores mínimo y máximo de la distancia corresponden a los valores <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>. Así pues:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/eff6819b957a2207.svg\" alt=\"r_min = a \\( 1 - epsilon \\) = frac(alpha, 1 + epsilon) #h(2em) r_max = a \\( 1 + epsilon \\) = frac(alpha, 1 - epsilon)\" style=\"width:26.362em;height:2.397em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "La semisuma de ambos es igual al semieje mayor <math display=\"inline\"><mi>a</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">min</mi></msub><mo>+</mo><msub><mi>r</mi><mi mathvariant=\"normal\">max</mi></msub></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>α</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>ε</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los valores <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>ε</mi></math> son funciones del momento angular <math display=\"inline\"><mi>l</mi></math> y de la energía <math display=\"inline\"><mi>E</mi></math>. En concreto, esas cantidades tienen los siguientes valores:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/ea94675aa9ab8621.svg\" alt=\"alpha = frac(l^2, m k) #h(2em) epsilon^2 = 1 + frac(2 E l^2, m k^2)\" style=\"width:13.883em;height:2.760em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>E</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como la energía se conserva, para cualquier instante de la órbita podemos escribir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>=</mo><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los valores mínimo y máximo de la velocidad se dan para <math display=\"inline\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, respectivamente. Así pues:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/69726e4eb3f68300.svg\" alt=\"v_min = sqrt(frac(k, m a) [frac(2, 1 + epsilon) - 1]) #h(2em) v_max = sqrt(frac(k, m a) [frac(2, 1 - epsilon) - 1])\" style=\"width:27.595em;height:3.046em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y dividiendo miembro a miembro:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><msub><mi>v</mi><mi mathvariant=\"normal\">min</mi></msub></mfrac><mo>=</mo><msqrt><mfrac><mrow><mfrac><mn>2</mn><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac><mo>−</mo><mn>1</mn></mrow><mrow><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow></mfrac><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>ε</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>ε</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Órbita circular.</em> En este caso, la velocidad máxima coincide con la mínima, y el semieje mayor con el radio: <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi><mo>=</mo><mi>a</mi></mrow></math>. Así pues:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mi>m</mi></mrow><mi>a</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mi>m</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Órbita parabólica.</em> En este caso, el semieje mayor tiende a infinito (la energía total es nula) y la expresión de la velocidad es la siguiente:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>a</mi><mo>→</mo><mi>∞</mi></mrow></munder><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mi>m</mi><mi>r</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como está claro, <math display=\"inline\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una partícula se acerca a la Tierra desde una gran distancia con velocidad inicial <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></math> (la velocidad de la órbita circular situada directamente sobre la superficie de la Tierra) y en una dirección situada a la distancia <math display=\"inline\"><mi>b</mi></math> del centro de la Tierra. ¿Qué valor debe tener <math display=\"inline\"><mi>b</mi></math> para que la órbita sea tangente a la superficie de la Tierra? ¿Cuál es su excentricidad?"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[Figura (pág. 97): trayectoria de la partícula. La línea horizontal de entrada, etiquetada <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></math>; la distancia vertical <math display=\"inline\"><mi>b</mi></math> desde esa línea hasta la dirección que pasaría por el centro (parámetro de impacto); la circunferencia de centro <math display=\"inline\"><mi>O</mi></math> y radio <math display=\"inline\"><mi>R</mi></math>; el punto <math display=\"inline\"><mi>P</mi></math> sobre la circunferencia (máxima aproximación), por el que pasa la trayectoria, curvándose en torno a <math display=\"inline\"><mi>O</mi></math>.]"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Podemos usar el <em>teorema del virial</em> o la <em>segunda ley de Newton</em>, en primer lugar, para conocer el valor de <math display=\"inline\"><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></math>. Hagámoslo por el primer camino:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mover><mi>V</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>V</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi mathvariant=\"normal\">T</mi><mn>2</mn></msubsup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ya que, al ser la órbita circular, los valores medios de las energías cinética y potencial coinciden con los valores instantáneos. En esta expresión, <math display=\"inline\"><mi>M</mi></math> es la masa de la Tierra y <math display=\"inline\"><mi>m</mi></math> la de la partícula. Así pues:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><mi>R</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la figura se muestra la trayectoria de la partícula, cuya dirección original está a la distancia <math display=\"inline\"><mi>b</mi></math> de la dirección que pasaría por el centro de la Tierra (a esa distancia <math display=\"inline\"><mi>b</mi></math> se la suele llamar <em>parámetro de impacto</em>). Además, supondremos que esa partícula, desviada por el campo gravitatorio terrestre, llega a pasar rozando la superficie. Hay que decir que la órbita que describe la partícula es una hipérbola, pues su energía es positiva, y a su movimiento, como en los demás casos de problemas de fuerzas centrales conservativas, se le aplican dos principios de conservación: el de la energía y el del momento angular. Hagámoslo en el punto P (punto de máxima aproximación) y en el infinito:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/5539e1f7c15755ba.svg\" alt=\"E = 1 / 2 m v_oo^2 = 1 / 2 m v_(upright(P))^2 - frac(G M m, R) #h(2em) l = b dot.op m v_oo = R dot.op m v_(upright(P))\" style=\"width:29.157em;height:2.631em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo el valor <math display=\"inline\"><mrow><msub><mi>v</mi><mi>∞</mi></msub><mo>=</mo><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></math> y resolviendo el sistema de dos ecuaciones con dos incógnitas, llegaremos a lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/b6be812e493637da.svg\" alt=\"v_(upright(P)) = sqrt(3) thin v_(upright(T)) #h(2em) b = sqrt(3) thin R\" style=\"width:13.044em;height:1.617em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "La excentricidad de la órbita se expresa en función de la energía mecánica <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi mathvariant=\"normal\">T</mi><mn>2</mn></msubsup></mrow></math>, del momento angular <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>m</mi><mi>R</mi><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub></mrow></math> y de la constante de fuerza del campo <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>G</mi><mi>M</mi><mi>m</mi></mrow></math> así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi>E</mi><msup><mi>l</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi mathvariant=\"normal\">T</mi><mn>2</mn></msubsup><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>m</mi><mi>R</mi><msub><mi>v</mi><mi mathvariant=\"normal\">T</mi></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mi>M</mi><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mn>3</mn></mrow></msqrt><mo>=</mo><mn>2</mn></mrow></math>"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un satélite artificial describe una órbita circular en torno al centro de la Tierra a la distancia <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math>. En un instante dado, mediante un cohete se le comunica de repente un impulso de velocidad radial. Como consecuencia, el satélite pasa a describir una órbita parabólica. Determina la magnitud del impulso de velocidad dado por el cohete y la distancia mínima a la Tierra (perigeo) de la nueva órbita parabólica."
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[figura: la Tierra dibujada como un círculo de radio <math display=\"inline\"><mi>R</mi></math> centrado en <math display=\"inline\"><mi>O</mi></math>, con la masa <math display=\"inline\"><mi>M</mi></math> en su interior y la etiqueta &quot;Tierra&quot;. De <math display=\"inline\"><mi>O</mi></math> parten dos radios: uno de longitud <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math> hasta el punto <math display=\"inline\"><mi>P</mi></math> (donde está la masa <math display=\"inline\"><mi>m</mi></math> del satélite), y otro de longitud <math display=\"inline\"><msub><mi>r</mi><mi mathvariant=\"normal\">m</mi></msub></math> hasta el punto <math display=\"inline\"><mi>Q</mi></math>. La trayectoria parabólica pasa por <math display=\"inline\"><mi>Q</mi></math> y por <math display=\"inline\"><mi>P</mi></math>. En <math display=\"inline\"><mi>Q</mi></math> se dibuja el vector velocidad <math display=\"inline\"><msub><mi>v</mi><mi>Q</mi></msub></math> (tangente, hacia arriba y a la izquierda). En <math display=\"inline\"><mi>P</mi></math> se dibuja un triángulo/paralelogramo de vectores de trazo discontinuo: la velocidad circular <math display=\"inline\"><msub><mi>v</mi><mi>c</mi></msub></math> (tangente, hacia abajo y a la derecha), el impulso radial <math display=\"inline\"><mi>A</mi></math> (a lo largo del radio, hacia fuera) y la velocidad resultante <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math>; entre <math display=\"inline\"><msub><mi>v</mi><mi>c</mi></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math> aparece marcado el ángulo <math display=\"inline\"><mi>α</mi></math>.]"
    },
    {
     "mota": "testua",
     "html": "<strong>[R.]</strong>"
    },
    {
     "mota": "testua",
     "html": "El satélite está en el punto P de su trayectoria circular cuando recibe el impulso de velocidad radial que cuantificaremos como <math display=\"inline\"><mi>A</mi></math>. Eso hace que la velocidad, además de cambiar de módulo, pasando de <math display=\"inline\"><msub><mi>v</mi><mi>c</mi></msub></math> a <math display=\"inline\"><msub><mi>v</mi><mi>P</mi></msub></math>, cambie también de dirección, desviándose hacia fuera un ángulo <math display=\"inline\"><mi>α</mi></math>."
    },
    {
     "mota": "testua",
     "html": "La velocidad y la energía del satélite en esa órbita circular podemos calcularlas por varios procedimientos. El más sencillo es igualar la fuerza de atracción a la fuerza centrípeta. En módulo, podemos escribir:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/1b505e56991e08b0.svg\" alt=\"frac(G M m, \\( 2 R \\)^2) = m thin frac(v_c^2, 2 R) #h(2em) arrow.r #h(2em) v_c^2 = frac(G M, 2 R)\" style=\"width:18.898em;height:3.034em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Y en cuanto a la energía mecánica total:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>m</mi><msubsup><mi>v</mi><mi>c</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>4</mn><mi>R</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al pasar a la órbita parabólica mediante el impulso de velocidad radial de magnitud <math display=\"inline\"><mi>A</mi></math>, la energía cinética cambia (y con ella la energía total), pero el momento angular no cambia. Como la condición de la órbita parabólica es que su energía mecánica sea nula, el incremento de la energía cinética será exactamente el siguiente:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/28ba95295303b025.svg\" alt=\"E + Delta E = 0 = 1 / 2 thin m \\( v_c^2 + A^2 \\) - frac(G M m, 2 R) #h(2em) arrow.r #h(2em) A = sqrt(frac(G M, 2 R))\" style=\"width:31.481em;height:3.046em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "que coincide exactamente con la velocidad del satélite en la órbita circular. Así pues, otro resultado inmediato es el ángulo de desviación <math display=\"inline\"><mi>α</mi></math> que ese impulso de velocidad da al satélite:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/913fd36133937faa.svg\" alt=\"tan alpha = A / v_c = 1 #h(2em) arrow.r #h(2em) alpha = pi / 4 med upright(&quot;rad&quot;) = 45 degree\" style=\"width:21.832em;height:2.912em\" loading=\"lazy\">"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Distancia de máxima aproximación.</em> Como hemos dicho antes, el impulso radial no cambia el momento angular. Si aplicamos los principios de conservación de la energía (en la órbita nueva) y del momento angular en los puntos P y Q, escribiremos lo siguiente:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>m</mi><msubsup><mi>v</mi><mi>Q</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msub><mi>r</mi><mi mathvariant=\"normal\">m</mi></msub></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>r</mi><mi mathvariant=\"normal\">m</mi></msub><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>Q</mi></msub><mo>=</mo><mn>2</mn><mi>R</mi><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>P</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>R</mi><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>c</mi></msub><mo>=</mo><mi>m</mi><msqrt><mrow><mn>2</mn><mi>G</mi><mi>M</mi><mi>R</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando <math display=\"inline\"><msub><mi>v</mi><mi>Q</mi></msub></math> de la segunda y llevándolo a la primera, tras simplificar queda así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/ad26177266254bfb.svg\" alt=\"v_Q = sqrt(2 G M R) / r_(upright(m)) #h(2em) arrow.r #h(2em) r_(upright(m)) = R\" style=\"width:17.532em;height:3.161em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Es decir, ocurre que la nueva órbita es tangente a la Tierra en el perigeo."
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un satélite de masa <math display=\"inline\"><mi>m</mi></math> describe una órbita circular de radio <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math> en torno a la Tierra (de radio <math display=\"inline\"><mi>R</mi></math>). En un instante se empieza a aplicarle una fuerza de magnitud constante <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><mi>a</mi></math> es una constante y <math display=\"inline\"><msub><mi>g</mi><mn>0</mn></msub></math> el valor del campo gravitatorio en la superficie terrestre, dirigida siempre hacia el centro de la Tierra. Teniendo en cuenta que la masa del satélite se mantiene constante, halla el valor de <math display=\"inline\"><mi>a</mi></math> para que la nueva órbita pase rozando la superficie de la Tierra. ¿Cuál será su velocidad en ese instante?"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En primer lugar calcularemos la velocidad del satélite en la órbita citada. Para ello usaremos el procedimiento más sencillo para la condición de órbita circular: la fuerza que actúa (solo la gravitatoria) es igual a la fuerza centrípeta:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/0e49ad35b71982d0.svg\" alt=\"frac(G M m, \\( 2 R \\)^2) = m thin frac(v^2, 2 R) quad arrow.r quad v = sqrt(frac(g_0 R, 2)) #h(2em) [thin g_0 = frac(G M, R^2) thin]\" style=\"width:25.977em;height:3.260em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado la relación expresada entre corchetes entre la intensidad del campo gravitatorio en la superficie de la Tierra y la constante física <math display=\"inline\"><mi>G</mi></math> y los datos <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>R</mi></math> de la Tierra. A partir de ese instante empieza a actuar una fuerza central constante sobre la fuerza central gravitatoria variable. Podemos expresarlo así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>−</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La energía potencial <math display=\"inline\"><mi>V</mi></math> asociada a esa fuerza central (que será conservativa) puede obtenerse de su propia definición:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>r</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mi>d</mi><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>r</mi></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><mi>r</mi><mo>+</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La constante aditiva no la evaluamos por ahora (téngase en cuenta que, aunque para el campo gravitatorio podríamos hacerla nula en el infinito, para el campo radial de magnitud constante superpuesto esa asignación no tendría sentido). De todos modos, como el trabajo realizado puede escribirse como la variación de la energía potencial entre los dos puntos considerados, en el cálculo de esa variación la constante <math display=\"inline\"><mi>K</mi></math> desaparecerá."
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora dos puntos de la trayectoria del satélite en el nuevo campo de fuerzas. Igual que cuando no hay campo superpuesto, también ahora se conservarán la energía total y el momento angular. Si con P designamos el punto de la órbita circular inicial en que se superpone el campo de magnitud constante y con Q el punto de tangencia de la nueva órbita con la Tierra, es decir, <math display=\"inline\"><mrow><msub><mi>r</mi><mi>Q</mi></msub><mo>=</mo><mi>R</mi></mrow></math> (que, a su vez, será un punto de retorno, es decir, <math display=\"inline\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>Q</mi></msub><mo>=</mo><mn>0</mn></mrow></math>), los principios de conservación podemos escribirlos así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>P</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msub><mi>r</mi><mi>P</mi></msub></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><msub><mi>r</mi><mi>P</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>Q</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><msub><mi>r</mi><mi>Q</mi></msub></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><msub><mi>r</mi><mi>Q</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>l</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>P</mi></msub><mo>×</mo><mi>m</mi><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>P</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>r</mi><mi>Q</mi></msub><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>Q</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sin embargo, en el instante de superponer el campo en P, la velocidad mantiene el mismo valor que tenía antes de superponerlo (es decir, sigue teniendo componente radial nula: <math display=\"inline\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>P</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>P</mi></msub></math> la velocidad total será transversal e igual a la velocidad en la órbita circular calculada antes). En otras palabras, el punto P en que estaba el satélite en el instante de superponer el nuevo campo central es también un punto de retorno para la nueva órbita. Por tanto, podemos reescribir <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>P</mi></msub><mo>×</mo><mi>m</mi><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>P</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>r</mi><mi>P</mi></msub><mo>⋅</mo><mi>m</mi><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><mn>2</mn><mi>R</mi><mo>⋅</mo><mi>m</mi><msqrt><mrow><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math></span> (tengamos en cuenta que al aplicar el nuevo campo central no cambiará el momento angular que el satélite tenía en la órbita circular). Sustituyendo este valor en las segundas relaciones, podremos despejar <math display=\"inline\"><msub><mi>v</mi><mi>Q</mi></msub></math> en función de <math display=\"inline\"><msub><mi>r</mi><mi>Q</mi></msub></math> así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>Q</mi></msub><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><msub><mi>g</mi><mn>0</mn></msub><msup><mi>R</mi><mn>3</mn></msup></mrow></msqrt><msub><mi>r</mi><mi>Q</mi></msub></mfrac><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><msub><mi>g</mi><mn>0</mn></msub><msup><mi>R</mi><mn>3</mn></msup></mrow></msqrt><mi>R</mi></mfrac><mo>=</mo><msqrt><mrow><mn>2</mn><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "llevado a la expresión de la conservación de la energía, teniendo en cuenta que <math display=\"inline\"><mrow><msub><mi>r</mi><mi>P</mi></msub><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>v</mi><mi>P</mi></msub><mo>=</mo><msqrt><mrow><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math>, nos llevará a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mfrac><mrow><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi></mrow><mn>2</mn></mfrac><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><mn>2</mn><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mspace width=\"0.167em\"></mspace><mn>2</mn><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi><mo>−</mo><mfrac><mrow><mi>G</mi><mi>M</mi><mi>m</mi></mrow><mi>R</mi></mfrac><mo>+</mo><mi>a</mi><mi>m</mi><msub><mi>g</mi><mn>0</mn></msub><mi>R</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Podemos simplificar esta expresión teniendo en cuenta que <math display=\"inline\"><mrow><mi>G</mi><mi>M</mi><mo>=</mo><msub><mi>g</mi><mn>0</mn></msub><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, y así, tras hacer las operaciones y simplificar, nos dará el valor <math display=\"inline\"><mi>a</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>"
    }
   ]
  }
 ]
};
