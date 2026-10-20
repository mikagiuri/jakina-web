/* JAKINA · kapitulua «B9.5 - Solido zurruna» (05mk_05solidoa), desde edicion2/kapituluak/05mk_05solidoa/05mk_05solidoa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_05solidoa"] = {
 "gakoa": "05mk_05solidoa",
 "titulua": "JAKINA - B9 - Mecánica clásica - 5/10",
 "azala": "B9.5 - Sólido rígido",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_05solidoa/05mk_05solidoa.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Sólido rígido",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El sólido rígido es uno de los sistemas de partículas más sencillos<span class=\"j-oin\">[Euler inició el estudio sistemático del sólido rígido (Descartes había considerado antes láminas planas).]</span>. La definición (es decir, que las distancias entre los puntos sean constantes) tiene una consecuencia útil: el movimiento general del sólido es la composición de una traslación y una rotación. Para empezar, repasaremos el movimiento sencillo en torno a un eje fijo. Al estudiar la cinemática tendremos que introducir y analizar el concepto de tensor de inercia: es el ejemplo más sencillo de la utilidad de los tensores en la física. Para la dinámica las ecuaciones de Euler serán muy útiles, ya que en el sistema del sólido el tensor de inercia es constante (y la matriz de inercia diagonal)."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Definición y ecuaciones del movimiento",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se dice que un sistema de partículas es un sólido rígido si las distancias entre sus partículas no cambian: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo></mrow></math> constante. Estudiemos algunas consecuencias de esta condición de definición."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Grados de libertad"
    },
    {
     "mota": "testua",
     "html": "Para ver que los grados de libertad del sólido rígido (es decir, el número de magnitudes que hay que conocer para determinar la posición de todos los puntos del sólido) son como máximo 6, consideremos un sistema de referencia que se mueve y gira junto con el sólido. En ese sistema, por la definición del sólido, el vector de posición de cada partícula y sus componentes son constantes durante el movimiento. Por tanto, para conocer la configuración del sistema en otro sistema de referencia basta conocer en él la posición y la orientación relativas del sistema del sólido; como demostramos en la sección 2.3, para ello bastan 6 coordenadas: por ejemplo, las 3 coordenadas cartesianas que determinan la posición del origen y los 3 ángulos de Euler que dan la orientación relativa."
    },
    {
     "mota": "irudia",
     "oina": "Método para conocer la configuración del sólido rígido.",
     "src": "../media/irudiak/693a219b88fed822.svg",
     "zabalera": 160
    },
    {
     "mota": "testua",
     "html": "Directamente era, ... podemos ver cómo pueden darse (en un instante) las posiciones de todos los puntos del sólido. (Nota: el fragmento original en euskera está roto.)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Para conocer la posición de un punto <math display=\"inline\"><mi>P</mi></math> se necesitan las tres componentes independientes del vector de posición <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mover><mrow><mi>O</mi><mi>P</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> medido en un sistema de referencia."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Para conocer la posición de un segundo punto bastan dos coordenadas más, ya que la distancia medida desde el punto anterior es constante. En efecto, si el segundo punto es <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math>, conocida la distancia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><msup><mi>P</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, solo tenemos que determinar la dirección y el sentido de la recta <math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mo>′</mo></msup></mrow></math>, y para ello se necesitan dos componentes del vector unitario <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mrow><mi>P</mi><msup><mi>P</mi><mo>′</mo></msup></mrow><mo accent=\"true\">→</mo></mover><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><msup><mi>P</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>: la tercera vendrá dada por la condición <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msubsup><mi>e</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>e</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>e</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><mn>1</mn></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si se conocen las posiciones de dos puntos, el único grado de libertad que queda corresponde a las rotaciones en torno a la recta definida por esos puntos, y el valor de esa rotación se describe mediante un único ángulo."
     ]
    },
    {
     "mota": "irudia",
     "oina": "El sólido rígido y dos sistemas de referencia.",
     "src": "../media/irudiak/02a193d7f0564b04.svg",
     "zabalera": 230
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Campo de velocidades"
    },
    {
     "mota": "testua",
     "html": "Consideremos dos partículas del sólido o dos puntos geométricos que se mueven junto con el sólido<span class=\"j-oin\">[Por ejemplo, el centro de masas se mueve junto con el sólido, claro, pero no tiene por qué estar en la posición de una partícula del sólido. Recuérdese dónde está el centro de masas en el caso de una esfera hueca.]</span>. En el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, que se mueve y gira con el sólido, los vectores <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup></math> y <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup></math> de esos puntos son constantes: <math display=\"inline\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mn>0</mn></mrow></math>. En otro sistema de referencia <math display=\"inline\"><mi>S</mi></math> tenemos, por los resultados (2.74) y (2.75): <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>+</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>+</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> donde los vectores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> dan la posición y la velocidad angular del sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> respecto al sistema <math display=\"inline\"><mi>S</mi></math>. De estas ecuaciones se deducen directamente las siguientes: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><msub><mi>P</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> El último resultado demuestra cuatro cosas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<em>El movimiento relativo entre dos puntos cualesquiera del sólido es una rotación pura</em>. En efecto, esto no es sorprendente: como el módulo de la posición relativa, la distancia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, es constante, lo único que puede cambiar es la orientación de la posición relativa."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Por la tercera ley de Newton, <em>en el sólido rígido las fuerzas internas no realizan trabajo</em>, pues la potencia de cada par de acción y reacción es <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, ya que <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo>∥</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>j</mi></msub><mo>⟂</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>−</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "La velocidad angular relativa entre dos puntos cualesquiera del sólido es la misma: <em>la velocidad angular del sólido</em>. Esto no es tan evidente: podría pensarse que la velocidad angular que aparece en el resultado (5.6) depende del par de puntos elegido, pero hemos demostrado que no es así. Además han desaparecido todos los <math display=\"inline\"><mi>′</mi></math>: la velocidad angular respecto a <math display=\"inline\"><mi>S</mi></math> no depende del sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> del sólido intermedio que hemos usado."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "La velocidad de un punto del sólido se calcula así si se conoce la de un segundo punto:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, <em>el movimiento general del sólido es la composición de una traslación y una rotación</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo son la velocidad angular del punto 1 en torno al 2 y la velocidad angular de este en torno al 1?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dibuja el campo de velocidades de un disco que se mueve sin deslizar sobre una mesa horizontal."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones del movimiento"
    },
    {
     "mota": "testua",
     "html": "Como de costumbre, si admitimos que se cumple la tercera ley de Newton, en las ecuaciones colectivas de evolución de este sistema de partículas no aparecen las fuerzas internas y, por tanto, las derivadas de los momentos lineal y angular totales son las siguientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑷</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑵</mi><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑵</mi></math> son la fuerza externa total y el momento total de las fuerzas externas. Usaremos esta notación en todo el tema; no aparecerá ninguna fuerza interna y, por tanto, no es necesario escribir una y otra vez <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> y <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>. Como los grados de libertad del sólido son 6, las ecuaciones (5.8)–(5.9) bastan, en principio, para calcular todo el movimiento del sólido rígido, si se conocen las condiciones iniciales. (Eso no será cierto en sistemas de partículas con más grados de libertad.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema del centro de masas"
    },
    {
     "mota": "testua",
     "html": "Hasta ahora hemos admitido implícitamente que estudiábamos el sólido en un sistema de referencia inercial; pero, como sabemos, en los sistemas de partículas el del centro de masas es muy útil. En efecto, la ecuación (5.8) da el movimiento de traslación del centro de masas. Por tanto, si la masa del sólido es <math display=\"inline\"><mi>M</mi></math> y el vector de posición del centro de masas <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>, la ecuación del movimiento del centro de masas es (1.153)<span class=\"j-oin\">[Pero recuérdese lo dicho en la nota al pie de la página 35: para calcular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> debe bastar la información sobre el centro de masas, si se quiere resolver la ecuación (5.10) sin resolver (5.9) —o (5.11)—.]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el sistema del centro de masas el momento lineal total es cero, <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math> y, quitado el movimiento de traslación, solo queda la rotación en torno al centro de masas. Ese movimiento tiene (como máximo) 3 grados de libertad y la correspondiente ecuación de evolución es (2.11):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mo>*</mo></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Recuérdese que en otros sistemas de referencia no inerciales hay que tener en cuenta también el momento de las fuerzas de inercia. En el caso del sistema del centro de masas, en cambio, el momento de las fuerzas de inercia (es decir, el momento de las fuerzas de arrastre) es cero y solo queda el momento de las fuerzas externas medidas en los sistemas inerciales: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mo>*</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msubsup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi><mo>*</mo></msubsup><mo>×</mo><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Rotación en torno a un eje fijo.",
     "src": "../media/irudiak/e61126a0ea5a248e.svg",
     "zabalera": 116
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Movimiento en torno a un eje fijo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supongamos que el sólido rígido tiene un eje fijo y que, por tanto, el único movimiento que puede hacer es la rotación en torno al eje. Para simplificar el análisis, elegiremos como eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> del sistema de referencia el eje de rotación. La posición de una partícula del sólido, en coordenadas cilíndricas, será <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>ρ</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> y la velocidad (según lo dicho en la tabla B.2) <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>ρ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Pero como es rígido, la distancia <math display=\"inline\"><mi>ρ</mi></math> entre la partícula y el eje es constante, y lo mismo ocurre con la coordenada <math display=\"inline\"><mi>z</mi></math>. Por otra parte, aunque el ángulo <math display=\"inline\"><mi>φ</mi></math> depende de la partícula, su derivada <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> no cambia de un punto a otro (pero sí, en general, con el tiempo), porque todas las partículas giran a la vez. La velocidad de un punto es, por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ρ</mi><mi>ω</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde el vector <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>≡</mo><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> es la velocidad angular del sólido. Como se ve, el resultado (5.15) es un caso particular de la expresión general (5.6)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momento angular y momento de inercia"
    },
    {
     "mota": "testua",
     "html": "La «partícula» situada en la posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> será un elemento infinitesimal en torno a ese punto, que tiene volumen <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi></mrow></math> y masa <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi></mrow></math>. (Si la densidad de masa en ese punto es <math display=\"inline\"><mi>ρ</mi></math><span class=\"j-oin\">[No confundir la coordenada cilíndrica <math display=\"inline\"><mi>ρ</mi></math> con la densidad de masa <math display=\"inline\"><mi>ρ</mi></math>.]</span>, tenemos <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>d</mi><mi>V</mi></mrow></math>, claro.) El momento angular de este elemento es <math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>−</mo><mi>ω</mi><mi>ρ</mi><mi>z</mi><mi>d</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y, como el vector <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover></math>, a diferencia de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math>, depende del punto, el del sólido es <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>−</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>z</mi><mi>ρ</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> La magnitud que en el primer sumando aparece entre llaves"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>≡</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se dice que es el <strong>momento de inercia respecto al eje</strong>: no depende del punto <math display=\"inline\"><mi>O</mi></math> (al menos si el punto está en el eje), ya que en la definición solo aparece la distancia medida desde el eje. Por otra parte, como <math display=\"inline\"><mrow><mi>ρ</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math>, tenemos <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>−</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>−</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>y</mi><mi>z</mi><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> y, en consecuencia, <em>el momento angular no es, en general, paralelo a la velocidad angular</em>: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>≠</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>I</mi><mi>ω</mi><mo>=</mo><mi>I</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Naturalmente, en algunos casos particulares (por simetría o por otra causa) puede ocurrir que las integrales de los dos últimos términos de la expresión (5.20) sean cero y, en consecuencia, que los momentos angular y de velocidad angular sean paralelos entre sí. Eso ocurrirá si el cuerpo tiene simetría de rotación en torno al eje, pues entonces cada elemento de la posición <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene un simétrico idéntico en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Pero, en general, no ocurrirá eso. Veamos un ejemplo."
    },
    {
     "mota": "irudia",
     "oina": "Varilla que gira.",
     "src": "../media/irudiak/3f6b05b1ced02bb0.svg",
     "zabalera": 171
    },
    {
     "mota": "testua",
     "html": "La varilla de la figura 5.5 no tiene masa y gira en torno al eje vertical con velocidad angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>. La simetría de este problema no es la citada antes, sino la inversión respecto al centro: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En el sistema de referencia situado en ese centro, los vectores de posición de las dos partículas serán opuestos y, si las coordenadas cilíndricas de la de arriba son <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>l</mi><mi>/</mi><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>l</mi><mi>/</mi><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, las de la otra son <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>l</mi><mi>/</mi><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mi>φ</mi><mo>+</mo><mi>π</mi><mo>,</mo><mi>−</mi><mi>l</mi><mi>/</mi><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que en este problema tenemos los siguientes valores: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo></msub><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> es el correspondiente a la partícula de arriba. Salvo en los casos <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> simétricos respecto al eje de rotación, el momento angular no es, pues, paralelo a la velocidad angular."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momento de las fuerzas"
    },
    {
     "mota": "testua",
     "html": "<em>Si el eje está fijo en un sistema de referencia inercial o en el sistema del centro de masas</em>"
    },
    {
     "mota": "testua",
     "html": ", la ecuación de evolución del momento angular se obtiene de (5.9): <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>≠</mo><mi>I</mi><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><msub><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mi>I</mi><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>I</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math> Si la velocidad angular es constante, será <math display=\"inline\"><mrow><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; pero, salvo en el caso particular <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>, es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>≠</mo><mn>0</mn></mrow></math> y el sistema sufre un momento externo. <br> En el ejemplo de la varilla de arriba, incluso cuando <math display=\"inline\"><mi>ω</mi></math> es constante, el momento angular está en el plano definido por el eje de rotación y la varilla y, en consecuencia, gira junto con la varilla: no es constante. Por ejemplo, si <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> y <math display=\"inline\"><mi>θ</mi></math> son constantes, el módulo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> no cambia, pero sí su dirección: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⟂</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math> Así pues, el eje (o, si se prefiere, su soporte) ejerce sobre el sistema un momento de fuerzas, contrario a la tendencia de la varilla a ir hacia la posición horizontal de equilibrio estable: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mi>y</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba el último resultado."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Radio de giro"
    },
    {
     "mota": "testua",
     "html": "La definición del radio de giro del sólido es <math display=\"inline\"><mrow><mi>K</mi><mo>≡</mo><msqrt><mrow><mi>I</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>, de modo que se cumpla <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mo>=</mo><mi>m</mi><msup><mi>K</mi><mn>2</mn></msup></mrow></math>. Es decir, el radio de giro mide dónde habría que colocar una masa puntual <math display=\"inline\"><mi>m</mi></math> para que, en un problema equivalente, el momento de inercia fuera el del sólido."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es el radio de giro de la varilla que gira de la figura 5.5?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energía cinética"
    },
    {
     "mota": "testua",
     "html": "Como la energía cinética del elemento <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi></mrow></math> es <math display=\"block\"><mrow><mi>d</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mi>ρ</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>, la del sólido es la siguiente: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>K</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math> Como veremos más adelante, la expresión (5.30) no se cumplirá en el caso general, pero sí la (5.32)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es la energía cinética de la varilla que gira de la figura 5.5?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Péndulo físico.",
     "src": "../media/irudiak/16cb3462ac5876b3.svg",
     "zabalera": 234
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulo físico"
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, si la fuerza externa es el peso y el eje fijo es horizontal, nuestro sólido rígido es el <strong>péndulo físico</strong> de la figura 5.6<span class=\"j-oin\">[Huygens obtuvo los primeros resultados generales en este contexto, en su famosa obra <em>Horologium oscillatorium</em> de 1673, con el propósito de mejorar los relojes de péndulo. Entre otros, resolvió el problema del <strong>centro de oscilación</strong>, es decir, el de la longitud del péndulo equivalente: véase [112].]</span>. Las proyecciones del momento angular y del momento de las fuerzas en la dirección del eje se calculan fácilmente, eligiendo el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> en la vertical y hacia abajo: <math display=\"block\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>I</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>K</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>a</mi></math> es la <strong>distancia de suspensión</strong> entre el eje y el centro de masas. Por tanto, la ecuación del movimiento <math display=\"inline\"><mrow><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><msub><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub></mrow></math> se escribe así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>g</mi><mi>a</mi></mrow><msup><mi>K</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La longitud del péndulo matemático equivalente es, pues, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><msup><mi>K</mi><mn>2</mn></msup><mi>/</mi><mi>a</mi></mrow></math>. Naturalmente, el radio de giro <math display=\"inline\"><mi>K</mi></math> que aparece en estas expresiones está definido respecto al eje de suspensión. En el problema 5.6.2 demostraremos que la relación entre los radios de giro respecto al eje de rotación y respecto al centro de masas es la siguiente: <math display=\"block\"><mrow><msup><mi>K</mi><mn>2</mn></msup><mo>=</mo><msup><mi>K</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>+</mo><msup><mi>a</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Movimiento del sólido en torno a uno de sus puntos.",
     "src": "../media/irudiak/22e8be86c26b189c.svg",
     "zabalera": 148
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Tensor de inercia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como hemos visto antes, salvo en casos particulares, los momentos angular y de velocidad angular no son proporcionales entre sí. En esta sección, para aclarar la relación entre esas magnitudes, elegiremos un punto <math display=\"inline\"><mi>O</mi></math> que se mueve junto con el sólido. Por ejemplo, puede ser un punto fijo del sólido, o un punto geométrico, como el centro de masas. Como vimos en la sección 5.1.2, cualquier otro punto gira con la velocidad angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> del sólido en torno al que hemos elegido, y si su vector de posición medido desde este último es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>, su velocidad relativa será <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>. Como el momento angular de un elemento infinitesimal del sólido respecto a dicho punto es <math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi>d</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi></mrow></math>, el del sólido es: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> no son, en general, paralelos entre sí, pero la relación entre ellos es lineal, dada mediante un tensor. Para verlo, elijamos un triedro en el mismo punto (como el cálculo lo haremos en un instante, da igual que dicho triedro sea o no el de un sistema de referencia inercial). Usando la notación de la sección 2.2, el vector de posición es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></msubsup><msub><mi>x</mi><mi>j</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi></msub></mrow></math> y las componentes del momento angular son las siguientes: <math display=\"block\"><mrow><msub><mi>L</mi><mi>i</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><msub><mi>L</mi><mi>i</mi></msub><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>ω</mi><mi>i</mi></msub><mo>−</mo><msub><mi>x</mi><mi>i</mi></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>x</mi><mi>j</mi></msub><msub><mi>ω</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>ω</mi><mi>j</mi></msub><mo>,</mo></mrow></math> donde hemos usado la delta de Kronecker. Este resultado también se escribe de esta forma: <math display=\"block\"><mrow><msub><mi>L</mi><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>ω</mi><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mi>.</mi></mrow></math> Con los elementos <math display=\"inline\"><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> puede definirse la <strong>matriz de inercia</strong> <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>, para escribir el resultado anterior"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "de forma abreviada o <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>y</mi><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>y</mi><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>y</mi><mi>z</mi><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>y</mi><mi>z</mi><mi>d</mi><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de forma explícita. Los elementos de la diagonal de la matriz de inercia son, naturalmente, los momentos de inercia respecto a los ejes cartesianos, y los de fuera de la diagonal se llaman <strong>productos de inercia</strong>. En la expresión (5.40) vemos que, aunque la relación entre los momentos angular y de velocidad angular no es una mera proporcionalidad, tiene una propiedad fundamental de esta última: es lineal, es decir, si la velocidad angular se multiplica por una constante, lo mismo le ocurre al momento angular, y con la suma de dos velocidades angulares se obtiene la suma de los momentos angulares correspondientes a los sumandos. Como la energía cinética del elemento infinitesimal es <math display=\"block\"><mrow><mi>d</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>,</mo></mrow></math>, la del sólido se escribe así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>ω</mi><mi>i</mi></msub><msub><mi>ω</mi><mi>j</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝝎</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Al sustituir las matrices, en el último término, en lugar de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> de la izquierda habrá que poner la traspuesta de la matriz columna correspondiente a <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>, es decir, una matriz fila.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tensores"
    },
    {
     "mota": "testua",
     "html": "Hemos dicho que <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> es la «matriz» de inercia, pero la expresión anterior se cumple en todos los triedros. En el caso de un vector, en cada triedro se obtienen unas componentes, y con ellas se puede construir una matriz columna, pero el vector mismo es independiente del triedro. Igualmente, en la expresión (5.42), además de los vectores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>, tenemos otro objeto matemático: el tensor <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math>, independiente del triedro. En cada triedro este tensor de inercia tiene 9 componentes; pero, como máximo, 6 serán distintas, pues el tensor de inercia es simétrico: <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mrow></math>. Al cambiar de triedro, las componentes de los vectores y del tensor cambian, pero no de cualquier manera, sino de la manera precisa que veremos ahora. Supongamos que los vectores unitarios de las bases de los triedros <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> y <math display=\"inline\"><mi>S</mi></math> son <math display=\"inline\"><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup></math> y <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub></math>, respectivamente. Como vimos en la sección 2.2, para pasar del primer sistema al segundo hay que usar la matriz de rotación <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> de elementos <math display=\"inline\"><mrow><msub><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>⋅</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>*</mo></msubsup></mrow></math> y, si las matrices correspondientes a un vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> son <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑼</mi></math>, la relación entre ellas es <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi></mrow></math> o <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Deduce que la relación entre las matrices del tensor de inercia es la siguiente transformación de semejanza: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mi>.</mi></mrow></math> ¿Cuál es la transformación inversa?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejes principales de inercia"
    },
    {
     "mota": "testua",
     "html": "Como hemos dicho muchas veces, los momentos angular y de velocidad angular no son paralelos, en general; pero en los casos particulares en que son paralelos, la dirección que esos vectores definen en tal caso se llama <strong>eje principal de inercia</strong> (o <strong>dirección principal de inercia</strong>). Como la condición <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>∝</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> que debe cumplirse es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>∝</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>, para saber si existe algún eje principal hay que resolver el problema de valores y vectores propios de la matriz de inercia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El problema de valores propios"
    },
    {
     "mota": "testua",
     "html": "Recordemos cómo se resuelve el problema de los valores propios <math display=\"inline\"><mi>λ</mi></math> y de los vectores propios <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> de un tensor simétrico <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math>: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>u</mi><mi>j</mi></msub><mo>=</mo><mi>λ</mi><msub><mi>u</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Para empezar, hay que hallar las soluciones <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><msub><mi>λ</mi><mn>3</mn></msub></math> de la siguiente <strong>ecuación característica</strong>, es decir, los <strong>valores propios</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>−</mo><mi>λ</mi><mn mathvariant=\"bold\">𝟏</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>11</mn></msub><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>22</mn></msub><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>23</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>31</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>32</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>33</mn></msub><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los valores propios son reales y,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi>λ</mi><mi>i</mi></msub><mi mathvariant=\"bold-italic\">𝒖</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>11</mn></msub><mo>−</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>12</mn></msub><msub><mi>u</mi><mn>2</mn></msub><mo>+</mo><msub><mi>I</mi><mn>13</mn></msub><msub><mi>u</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>I</mi><mn>21</mn></msub><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>22</mn></msub><mo>−</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mn>2</mn></msub><mo>+</mo><msub><mi>I</mi><mn>23</mn></msub><msub><mi>u</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>I</mi><mn>31</mn></msub><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>32</mn></msub><msub><mi>u</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>33</mn></msub><mo>−</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "si se sustituyen en el sistema lineal, pueden hallarse tres vectores propios ortonormales (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>3</mn></msub></math>): <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>21</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>31</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>22</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>32</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>23</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>33</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>j</mi></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi><mi>⊤</mi></msubsup><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>j</mi></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>,</mo></mrow></math> donde <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi></msub></math> es la matriz columna correspondiente al vector <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></msubsup><msub><mi>R</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi></msub></mrow></math>. Con las componentes de los vectores propios se forma la siguiente matriz ortogonal <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>22</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>23</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>31</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>32</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>33</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>=</mo><mn mathvariant=\"bold\">𝟏</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>k</mi><mi>i</mi></mrow></msub><msub><mi>R</mi><mrow><mi>k</mi><mi>j</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mi>R</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> Haciendo la siguiente rotación, <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>u</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><msub><mi>u</mi><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></mrow></math> obtenemos el sistema de referencia definido por los vectores propios unitarios, y en él el tensor <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> es diagonal, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Si el tensor <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> es semidefinido positivo, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>⊤</mi></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mrow><mi>*</mi><mi>⊤</mi></mrow></msup><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>*</mo></msup><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, todos los valores propios son positivos o nulos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momentos principales de inercia"
    },
    {
     "mota": "testua",
     "html": "Como la matriz de inercia es simétrica, tiene tres vectores propios ortogonales. Naturalmente, todos los demás proporcionales a un vector propio también serán propios y todos ellos están en una dirección principal. Así pues, si para indicar esa dirección se elige el vector unitario <math display=\"inline\"><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup></math> correspondiente, tenemos <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><msub><mi>I</mi><mi>i</mi></msub><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup></mrow></math>, y el valor propio <math display=\"inline\"><msub><mi>I</mi><mi>i</mi></msub></math> se llama <strong>momento principal de inercia</strong>. Como hemos dicho antes,"
    },
    {
     "mota": "testua",
     "html": "<em>los momentos angular y de velocidad angular serán paralelos entre sí si y solo si están en una dirección principal del sólido, y entonces <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><msub><mi>I</mi><mi>i</mi></msub><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math></em>"
    },
    {
     "mota": "testua",
     "html": ". Como recordamos en la sección 5.3.3, si ahora cambiamos el triedro para que los ejes sean principales, es decir,"
    },
    {
     "mota": "testua",
     "html": "<strong>triedro principal</strong>"
    },
    {
     "mota": "testua",
     "html": "si para construir el nuevo triedro <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> así llamado elegimos los ejes cartesianos <math display=\"inline\"><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>*</mo></msubsup></math> en las direcciones de los vectores propios, allí la matriz de inercia es diagonal,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y las expresiones del momento angular y de la energía cinética se simplifican:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>L</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><msub><mi>I</mi><mi>i</mi></msub><msubsup><mi>ω</mi><mi>i</mi><mo>*</mo></msubsup><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msup><mi>T</mi><mo>*</mo></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mi>i</mi></msub><msubsup><mi>ω</mi><mi>i</mi><mrow><mi>*</mi><mn>2</mn></mrow></msubsup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La matriz que hay que usar para pasar del triedro inicial al principal es <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup></math>. Por otra parte, en la expresión (5.58) vemos cuáles son los momentos principales de inercia: es decir, los momentos de inercia respecto a los ejes principales."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Cuando los tres valores propios son distintos, hay tres momentos principales de inercia diferentes y las tres direcciones principales están definidas de manera única, porque, dejando aparte los signos, solo hay una manera de elegir los vectores propios ortonormales."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Cuando un valor propio es doble, dos momentos de inercia son iguales: <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>, por ejemplo. Todas las combinaciones lineales de los dos vectores propios correspondientes también son propias, y cualquier dirección del <strong>plano principal de inercia</strong> que definen es principal. En ese caso se dice que el sólido es una <strong>peonza simétrica</strong>, y el juguete citado es el ejemplo más conocido. Basta calcular la dirección principal correspondiente al valor propio simple <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>≠</mo><msub><mi>I</mi><mn>1</mn></msub><mo>,</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>, porque todas las perpendiculares a ella son las direcciones principales correspondientes al valor propio doble."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si los tres momentos principales de inercia son iguales, es decir, cuando tenemos un valor propio triple <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub><mo>≡</mo><mi>I</mi></mrow></math>, todos los vectores son propios y todas las direcciones principales. Se dice que el sólido es una <strong>peonza esférica</strong> y se cumplen siempre las sencillas expresiones <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>I</mi><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Dos masas unidas por una varilla ligera.",
     "src": "../media/irudiak/272f7c2713eb7581.svg",
     "zabalera": 178
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo"
    },
    {
     "mota": "testua",
     "html": "Estudiemos, como ejemplo, el sistema de la figura 5.8 en el triedro <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math>. Como toda la masa está en los puntos <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>±</mi><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, la matriz de inercia se calcula directamente: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La ecuación característica, con la definición <math display=\"inline\"><mrow><mi>a</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></math>, es <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> y los momentos principales de inercia <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></math>. Este sólido es, pues, una peonza simétrica."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que los vectores propios unitarios, que dan las direcciones principales, pueden elegirse del siguiente modo: <math display=\"block\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En consecuencia, como ejes principales pueden elegirse <math display=\"inline\"><mrow><mi>O</mi><msup><mi>X</mi><mo>*</mo></msup><mo>,</mo><mi>O</mi><msup><mi>Y</mi><mo>*</mo></msup></mrow></math> y <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> de la figura. En efecto, al ser una peonza simétrica, el plano <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Y</mi><mo>*</mo></msup><mi>Z</mi></mrow></math> es principal y cualquier dirección de él es principal (si pasa por el centro)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula la matriz de rotación para pasar al triedro principal y comprueba que allí el tensor de inercia es diagonal."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetrías y ejes principales"
    },
    {
     "mota": "testua",
     "html": "Para hallar los ejes principales hay que resolver el problema de valores y vectores propios del tensor de inercia (véase la sección 5.3.3), pero en muchos casos sencillos como el ejemplo anterior puede obtenerse información interesante valiéndose de la simetría del problema, cuando el sólido es homogéneo (es decir, de densidad uniforme):"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math> es un plano de simetría y <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> un eje de simetría.",
     "src": "../media/irudiak/ee6739119ef8a36a.svg",
     "zabalera": 178
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<em>Todo plano de simetría que pasa por el punto considerado es perpendicular a un eje principal</em>. Por tanto, sabemos que si el sólido es invariante respecto a la inversión en torno a un plano, la perpendicular al plano es una dirección principal."
     ]
    },
    {
     "mota": "testua",
     "html": "En efecto, si elegimos el sistema de referencia de modo que el plano de simetría sea <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math> (como en la figura 5.9), la simetría citada se escribe así con la densidad de masa <math display=\"inline\"><mi>ρ</mi></math><span class=\"j-oin\">[Como dijimos en la página 240, <math display=\"inline\"><mi>ρ</mi></math> es la coordenada cilíndrica y <math display=\"inline\"><mi>ρ</mi></math> la densidad.]</span>: <math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y, en consecuencia, <math display=\"block\"><mrow><msub><mi>I</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>y</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>y</mi><mi>d</mi><mi>m</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>y</mi><mi>ρ</mi><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>, ya que el integrando es impar respecto a <math display=\"inline\"><mi>x</mi></math>. Por la misma razón tenemos <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>z</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> y, por tanto, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Está claro que el vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math> y el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> (perpendiculares al plano de simetría) son principales."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<em>Todo eje de simetría que pasa por el punto considerado es principal</em>. Además, si el <em>orden del eje de simetría es 3 o mayor, todas las direcciones del plano perpendicular también son principales: es una peonza simétrica</em>. Así pues, si el sólido tiene dos posiciones equivalentes al girar en torno a un eje, dicho eje es principal. Si las posiciones equivalentes son tres o más (o infinitas), el eje y su plano perpendicular son principales."
     ]
    },
    {
     "mota": "testua",
     "html": "Para demostrarlo, tomemos el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> en el eje de simetría (véase la figura 5.9). Si el orden del eje de simetría es <math display=\"inline\"><mi>n</mi></math>, tenemos en coordenadas polares cilíndricas: <math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>+</mo><mi>α</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>n</mi></mfrac><mi>.</mi></mrow></math> Por tanto, tenemos <math display=\"block\"><mrow><msub><mi>I</mi><mrow><mi>x</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>z</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>d</mi><mi>m</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>x</mi><mi>z</mi><mi>ρ</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>−</mi><msub><mo>∫</mo><mi>V</mi></msub><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>ρ</mi><mn>2</mn></msup><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>ρ</mi><mi>d</mi><mi>φ</mi><mi>d</mi><mi>z</mi></mrow></math> y al hacer la integral respecto a <math display=\"inline\"><mi>φ</mi></math> tenemos <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mo>∫</mo><mn>0</mn><mi>α</mi></msubsup><mo>+</mo><msubsup><mo>∫</mo><mi>α</mi><mrow><mn>2</mn><mi>α</mi></mrow></msubsup><mo>+</mo><mi>⋯</mi><mo>+</mo><msubsup><mo>∫</mo><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>α</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>α</mi></msubsup><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>+</mo><mn>2</mn><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>⋯</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>φ</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">}</mo></mtd></mtr></mtable></mrow><mi>d</mi><mi>φ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>, por el resultado (B.108). Por la misma razón tenemos <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>z</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> y, por tanto, el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> es principal: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>z</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora que el orden de simetría es tres o mayor. Elijamos un eje principal del plano perpendicular y el que se obtiene de este mediante una rotación de ángulo <math display=\"inline\"><mi>α</mi></math> en torno al eje de simetría. Por la simetría, el segundo eje también será principal y los momentos principales de inercia de los dos serán iguales: el sólido será, pues, una peonza simétrica. (Si el orden de simetría es infinito, el ángulo <math display=\"inline\"><mi>α</mi></math> puede elegirse como se quiera en el razonamiento anterior.)  <br> Por ejemplo, en el caso de la figura 5.9, como el plano <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math> es de simetría, el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> es principal. El eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> es principal porque es un eje de simetría de orden 2. El eje <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> también es principal porque es ortogonal a los otros dos (o, si se prefiere, porque <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Z</mi></mrow></math> es perpendicular al plano de simetría)."
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora el tensor de inercia respecto a un punto del eje de un paralelepípedo rectangular (o de la raqueta de tenis de la figura 5.16). Por allí pasan dos planos de simetría y, por tanto, hay una dirección principal perpendicular a cada uno de ellos (y contenida en el otro). El tercer eje principal es perpendicular a los anteriores: está en la intersección de los dos planos de simetría. Este último resultado se obtiene también con la segunda regla de arriba, ya que la intersección entre los planos de simetría es un eje de simetría. <br> Por otra parte, basta con que la base del paralelepípedo sea un triángulo equilátero (o un cuadrado…) para que un plano perpendicular al eje sea principal: no es necesario que la base sea circular. Del mismo modo, las esferas homogéneas y otros cuerpos con simetría esférica (como las esferas huecas) no son las únicas peonzas esféricas: lo son, por ejemplo, todos los cubos homogéneos, ya que los momentos de inercia respecto a todos los ejes que pasan por su centro son iguales. (Para demostrar la última afirmación, basta tener en cuenta que los tres ejes de simetría son equivalentes.)"
    },
    {
     "mota": "testua",
     "html": "En la tabla A.6 de la página 639 se muestran los ejes y momentos principales de inercia respecto al centro de masas de algunos sólidos homogéneos. Para hallar los momentos principales de inercia respecto a otros puntos, puede usarse el teorema de los ejes paralelos del ejercicio 5.6.1."
    },
    {
     "mota": "irudia",
     "oina": "Momento de inercia en torno a un eje general.",
     "src": "../media/irudiak/951d939b57bff549.svg",
     "zabalera": 136
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momento de inercia en torno a un eje general"
    },
    {
     "mota": "testua",
     "html": "Supongamos que el tensor de inercia de un sólido respecto al punto <math display=\"inline\"><mi>O</mi></math> es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math>. Consideremos el eje que pasa por el punto <math display=\"inline\"><mi>O</mi></math> en la dirección del vector unitario <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover></math> (véase la figura 5.10). Para calcular el momento de inercia respecto a este último, usaremos la definición: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>ρ</mi><mn>2</mn></msup><mi>d</mi><mi>m</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>d</mi><mi>m</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>m</mi><mi>.</mi></mrow></math> Si aquí se usan la matriz de inercia (5.41) y los resultados <math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>x</mi><mi>k</mi><mn>2</mn></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>x</mi><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub></mrow></math>, el momento de inercia en torno a ese eje general queda así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>n</mi><mi>j</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Precesión de la peonza simétrica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos un sólido rígido con un punto fijo: es una peonza simétrica respecto a dicho punto y se mueve bajo la acción de la gravedad, como se muestra en la figura 5.11."
    },
    {
     "mota": "testua",
     "html": "Para simplificar el estudio, supongamos que gira muy deprisa en torno al eje de simetría (o, mejor dicho, en torno a la dirección principal correspondiente al momento principal de inercia simple) (en la sección 6.7 estudiaremos lo que ocurre cuando no se hace esta hipótesis). Por tanto, la velocidad angular total <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> es paralela al eje principal en buena aproximación: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>L</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝝎</mi><mo>∥</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> es el vector de posición del centro de masas, que supondremos que, como en la figura, está en el citado eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Peonza simétrica ligera en el campo gravitatorio.",
     "src": "../media/irudiak/bf6c6d703dac59ea.svg",
     "zabalera": 172
    },
    {
     "mota": "testua",
     "html": "En el sistema inercial exterior <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, la ecuación del movimiento (5.81) puede escribirse como <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>R</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow><mi>L</mi></mfrac><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math> o <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Así pues, el momento angular"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>R</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><msub><mi>I</mi><mi>z</mi></msub><mi>ω</mi></mrow></mfrac><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "gira con velocidad angular constante en torno al eje vertical, sin cambiar su módulo:"
    },
    {
     "mota": "testua",
     "html": "<strong>precesión</strong>"
    },
    {
     "mota": "testua",
     "html": "se llama a un movimiento así. Naturalmente, la velocidad angular proporcional al momento angular se moverá de forma parecida: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mi>.</mi></mrow></math> En las expresiones anteriores <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mi>ω</mi></math> son las componentes de los momentos angular y de velocidad angular en la dirección del eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>, no los módulos: el sentido de la precesión en torno al eje <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> será el que tenga la velocidad <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> en torno a <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>. Obsérvese que <math display=\"inline\"><mi mathvariant=\"bold\">𝛀</mi></math> no depende del ángulo <math display=\"inline\"><mi>θ</mi></math>. <br> Hay que recordar que aquí se ha hecho la hipótesis <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≪</mo><mi>ω</mi></mrow></math>: en efecto, como vemos en la expresión (5.79), cuando <math display=\"inline\"><mi>ω</mi></math> es muy grande <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es pequeña. La hipótesis de aquí no se hace (pero sí otra) en el problema 5.6.5. Para estudiar el movimiento en el caso general hay que valerse de las ecuaciones de Euler de la sección 5.5. Por ejemplo, en una peonza real se ve fácilmente la <strong>nutación</strong><span class=\"j-oin\">[Véase la animación .]</span>: el ángulo <math display=\"inline\"><mi>θ</mi></math>, en lugar de ser constante, oscila (véase la sección 6.7)."
    },
    {
     "mota": "testua",
     "html": "Como la Tierra no es completamente esférica, el Sol y la Luna le ejercen un pequeño momento de fuerzas. En consecuencia, el eje de la Tierra no está siempre en la misma dirección: precesa lentamente, con un período de 26 000 años, en un cono de anchura angular <math display=\"inline\"><mrow><mn>23</mn><msup><mi></mi><mo>∘</mo></msup><msup><mn>26</mn><mo>′</mo></msup></mrow></math>. Este movimiento de precesión tiene consecuencias medibles, como la precesión de los equinoccios<span class=\"j-oin\">[Según parece, fue Hiparco quien describió la precesión de los equinoccios.]</span> (las posiciones de las constelaciones cambian, sin cambiar la falta de fundamento de la astrología). Así, hoy la estrella polar es Polaris; pero cuando se construyeron las pirámides, hace unos 4 500 años, los egipcios usaban Thuban (Alpha Draconis). Además, en las distintas estaciones la distancia entre la Tierra y el Sol va cambiando poco a poco, y esto influye en el tiempo atmosférico y, por tanto, en el registro geológico<span class=\"j-oin\">[Otros ciclos que pueden influir en estos son, según parece, los siguientes: el cambio de excentricidad, con período de 100 000 años; el cambio del ángulo entre el eje de la Tierra y el plano de la órbita, con período de 41 000 años; y el ciclo de las manchas solares, con período de 11 años.]</span>. Además, como el movimiento de la Luna es muy irregular, hay una pequeña nutación de <math display=\"inline\"><msup><mn>9</mn><mo>″</mo></msup></math>, con un período de 18.6 años<span class=\"j-oin\">[Véanse, por ejemplo, [12, 60, 67] y la página del <em>servicio de rotación de la Tierra</em> que mide continuamente el complejo movimiento de la Tierra: .]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Sistemas del laboratorio, del espacio y del sólido.",
     "src": "../media/irudiak/ee4977d59336dbdf.svg",
     "zabalera": 259
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Ecuaciones de Euler",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En esta sección estudiaremos de nuevo el movimiento del sólido en torno a un punto fijo, pero ahora el punto elegido <math display=\"inline\"><mi>O</mi></math> será <em>un punto fijo</em> o <em>el centro de masas</em>. En el primer caso el movimiento del punto es conocido (está en reposo) y en el otro puede obtenerse, en principio, resolviendo la ecuación del movimiento (1.153). Para empezar, para estudiar la dinámica en torno al punto <math display=\"inline\"><mi>O</mi></math> elegiremos un sistema de referencia <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> situado en él, cuyos ejes no girarán respecto a los sistemas inerciales: este se llama <strong>sistema del espacio</strong>. Si el punto es fijo, <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> será inercial, pero no necesariamente cuando es el centro de masas. Sin embargo, en ambos casos la ecuación del movimiento en este sistema <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> del espacio es <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, donde los vectores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑵</mi></math> son el momento angular respecto al punto <math display=\"inline\"><mi>O</mi></math> y el momento de las fuerzas externas. Si aquí sustituimos (5.42), queda <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑰</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover></mrow></math>: <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> como el sólido gira en el sistema, el tensor de inercia <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑰</mi></math> será variable, en general. <br> Esto no es muy cómodo para hacer los cálculos y, para evitar ese cambio, elegiremos un sistema <math display=\"inline\"><mi>S</mi></math> que gira junto con el sólido: el <strong>sistema del sólido</strong>. Allí el tensor de inercia será constante, pero, usando el teorema de Coriolis (2.56), se obtiene <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>S</mi><mo>*</mo></msup></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>S</mi></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math> y, por tanto, la ecuación (5.81) debe escribirse"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "en el sistema <math display=\"inline\"><mi>S</mi></math> del sólido. Además, los ejes de este último sistema <em>los elegiremos de modo que sean principales</em> (eso siempre puede hacerse, pues el tensor de inercia respecto a un punto admite tres direcciones principales perpendiculares). Hay que subrayar que el momento angular de la ecuación (5.84) es el que se mide en el sistema del espacio (en el sistema del sólido todo está en reposo y no hay momento angular). Las ecuaciones (5.81) y (5.84) son equivalentes, en ambas aparecen las mismas magnitudes, pero el significado del punto es diferente: en la primera indica la derivada calculada en el sistema del espacio y en la segunda la calculada en el sistema del sólido. El sistema del sólido no se usa para definir las magnitudes, sino para calcular en cada instante sus componentes (los elementos de la matriz de inercia y las proyecciones de los momentos angular y de velocidad angular). <br> En el sistema principal <math display=\"inline\"><mi>S</mi></math> del sólido que hemos elegido, el tensor de inercia será diagonal y constante y, por tanto, por (5.59), la derivada del momento angular <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>I</mi><mi>y</mi></msub><msub><mi>ω</mi><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> será <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>I</mi><mi>y</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>. Sustituyendo estas dos últimas expresiones en las componentes de la ecuación (5.84), se obtienen las ecuaciones de Euler del movimiento del sólido:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>N</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>y</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>N</mi><mi>y</mi></msub><mo>=</mo><msub><mi>I</mi><mi>y</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>N</mi><mi>z</mi></msub><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>y</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que las últimas ecuaciones son equivalentes a (5.84)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, en el caso de la sección 5.4, los cálculos se han hecho en el sistema inercial <math display=\"inline\"><mrow><msup><mi>O</mi><mo>′</mo></msup><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><msup><mi>Z</mi><mo>′</mo></msup></mrow></math>. Veamos qué ocurre en el sistema no inercial <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math>, que gira junto con el sólido. (Por la simetría, da igual cómo se elijan los ejes <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> y <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> en el plano principal <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>.) Como este sistema no es inercial, hay que tener en cuenta el momento de las fuerzas de inercia y la ecuación del movimiento no es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. En efecto, la velocidad angular total del sólido es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>+</mo><mi mathvariant=\"bold\">𝛀</mi></mrow></math> y en este sistema <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>  (y no solo sus módulos) son constantes (en la primera aproximación) y, si en la ecuación del movimiento <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>+</mo><mi mathvariant=\"bold\">𝛀</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math> se usan <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>≈</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mo>≪</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math>, se recupera (5.78)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Movimiento libre"
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora el movimiento del sólido que no sufre ningún momento de fuerzas externas (en torno a <math display=\"inline\"><mi>O</mi></math>). Eso puede ocurrir cuando no hay fuerzas externas o, por ejemplo, porque estudiamos el movimiento del sólido que cae en un campo gravitatorio homogéneo en el sistema del sólido situado en su centro de masas. Las ecuaciones de Euler en ese caso son estas: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>y</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>y</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>z</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>y</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Como sabemos, en el sistema del sólido estas ecuaciones,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "son las componentes de la expresión. Por tanto, <em>en el sistema del sólido el momento angular gira con velocidad angular <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>, sin cambiar su módulo</em>. Por otra parte, en el sistema del espacio el momento angular es constante y la velocidad angular gira en torno a él<span class=\"j-oin\">[Véase la animación .]</span>. <br> Como las incógnitas <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>i</mi></msub><msub><mi>ω</mi><mi>j</mi></msub></mrow></math> aparecen en términos cuadráticos, las ecuaciones (5.91)–(5.93) no son lineales. Aquí, por tanto, solo se estudiarán dos casos particulares sencillos. En el primero el sólido tendrá una simetría mayor y en el segundo se estudiarán las soluciones sencillas (constantes) y su estabilidad."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Peonza simétrica libre"
    },
    {
     "mota": "testua",
     "html": "Si es una peonza simétrica, con los momentos principales de inercia iguales <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>, las ecuaciones del movimiento son las siguientes: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>y</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>x</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>I</mi><mi>z</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> En la última ecuación vemos que la componente <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math> es una constante del movimiento y también lo serán la magnitud escalar <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><mfrac><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub></mrow><msub><mi>I</mi><mi>x</mi></msub></mfrac><msub><mi>ω</mi><mi>z</mi></msub></mrow></math> y el vector <math display=\"block\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>≡</mo><mi mathvariant=\"normal\">Ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub></mrow><msub><mi>I</mi><mi>x</mi></msub></mfrac><msub><mi>ω</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>. Pero usando esto último, las ecuaciones (5.95)–(5.97)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se escriben así: <em>en el sistema del sólido, la velocidad angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> gira con velocidad angular <math display=\"inline\"><mi mathvariant=\"bold\">𝛀</mi></math> en torno al eje principal <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> perpendicular al plano principal de inercia</em>. Como consecuencia de este movimiento de rotación, el vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> generará un cono en torno al eje principal <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>: el <strong>cono del sólido</strong>. El módulo <math display=\"inline\"><mi>ω</mi></math> de la velocidad angular y sus proyecciones <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math> y <math display=\"inline\"><msqrt><mrow><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup></mrow></msqrt></math> sobre el eje de rotación y sobre la dirección perpendicular no cambiarán durante el movimiento."
    },
    {
     "mota": "irudia",
     "oina": "Conos del sólido y del espacio en los casos <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>z</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&lt;</mo><msub><mi>I</mi><mi>z</mi></msub></mrow></math>.",
     "src": "../media/irudiak/c6614f8fb5125c39.svg",
     "zabalera": 271
    },
    {
     "mota": "testua",
     "html": "Estos resultados pueden comprobarse explícitamente, pues en este caso las ecuaciones de Euler se resuelven fácilmente. En efecto, con la definición de <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>, se escriben <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>+</mo><mi mathvariant=\"normal\">Ω</mi><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>−</mo><mi mathvariant=\"normal\">Ω</mi><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> y, sustituyendo la primera en la derivada de la segunda, obtenemos la ecuación del oscilador armónico: <math display=\"block\"><mrow><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>−</mo><mi mathvariant=\"normal\">Ω</mi><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>=</mo><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Sustituyendo la solución <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> conocida de esta ecuación —recuérdese el resultado (1.112)— en la ecuación (5.102), se calcula <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math>. Estas son, pues, las soluciones de las ecuaciones de Euler: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><mi>C</mi><mo>,</mo></mtd></mtr></mtable></math> donde <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mi>C</mi></math> son constantes de integración. Tenemos, por tanto, <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math>. <br> Por otra parte, como en el caso del sólido libre general, el momento angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> gira con velocidad angular <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>. Además, los vectores <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> están siempre en un plano: <math display=\"block\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Ω</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>L</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi mathvariant=\"normal\">Ω</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ω</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>z</mi></msub><msub><mi>ω</mi><mi>z</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Los tres vectores giran, pues, juntos."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que el momento angular se mueve de este modo en el sistema del sólido: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el sistema del espacio, en cambio, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> es constante y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> gira en torno a él. Además, como el módulo <math display=\"inline\"><mi>ω</mi></math> de la velocidad angular y su proyección <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mi>x</mi></msub><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msubsup><mi>ω</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msubsup><mi>ω</mi><mi>z</mi><mn>2</mn></msubsup></mrow></math> en la dirección del momento angular son constantes, en esa rotación el vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> generará un cono en torno a <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math>: el <strong>cono del espacio</strong>. En el sistema del espacio el cono del sólido rueda sin deslizar sobre la superficie en reposo del cono del espacio, como se muestra en la figura 5.13<span class=\"j-oin\">[Véase la animación .]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Ángulos de Euler entre los triedros del espacio y del sólido.",
     "src": "../media/irudiak/c08657f45e24dc73.svg",
     "zabalera": 173
    },
    {
     "mota": "testua",
     "html": "En efecto, usando la notación de la figura 5.14, elegiremos el eje <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> del sistema del espacio en la dirección y sentido del momento angular constante. Como es una peonza simétrica, siempre podemos elegir, en el instante que nos interesa, el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> del sólido en la línea de nodos, de modo que <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow></math>. Así, por la expresión (2.61), tenemos en ese instante en el sistema del sólido: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>0</mn><mo>=</mo><msub><mi>L</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>L</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>L</mi><mi>y</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>L</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><msub><mi>ω</mi><mi>z</mi></msub><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> De la primera ecuación recuperamos que el ángulo <math display=\"inline\"><mi>θ</mi></math> entre los momentos angular y de velocidad angular es constante. En el resultado (5.112) vemos que el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> del sólido gira en torno al momento angular con velocidad de precesión constante <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>L</mi><mi>/</mi><msub><mi>I</mi><mi>x</mi></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Movimiento libre en torno a un eje principal"
    },
    {
     "mota": "testua",
     "html": "En esta sección no exigiremos que el sólido sea una peonza simétrica, pero sí que se mueva en torno a un eje principal. Si gira en torno al tercer eje, tendremos <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y, por la ecuación (5.93), <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math> es constante. Esto quiere decir que todos los <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea.</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> son soluciones constantes del sistema (5.91)—(5.93), es decir, puntos de equilibrio<span class=\"j-oin\">[Aquí tenemos un equilibrio dinámico: el sólido está girando y el centro de masas puede estar acelerado.]</span>. <br> Eso fue lo que consiguió Léon Foucault al inventar en 1852 el giroscopio, usando una suspensión de Cardan (véase la fotografía de la figura 5.15). Así el eje de rotación estaba fijo en el sistema inercial y giraba lentamente respecto a la Tierra, como se veía con un microscopio. De ese modo demostró el movimiento de rotación de la Tierra, mediante un experimento hecho en la Tierra, como había hecho antes con el péndulo. Si se quita la mitad de la suspensión de Cardan, se puede obtener la brújula giroscópica del problema 5.103. Si se coloca en un extremo del eje de rotación, se obtiene la precesión (y la nutación) de la sección 5.4, como se ve en la figura 5.1 y en la sección 6.7."
    },
    {
     "mota": "testua",
     "html": "Para estudiar la estabilidad de este movimiento libre, supongamos que, a causa de una pequeña perturbación, ahora <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mi>y</mi></msub></math> no son cero, pero sí muy pequeños, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ω</mi><mi>x</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ω</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ω</mi><mi>z</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. Si en la ecuación (5.93) se desprecia el producto <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>x</mi></msub><msub><mi>ω</mi><mi>y</mi></msub></mrow></math>, vemos que <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math> es (casi) constante. Además, tras sustituir (5.91) en la derivada de la ecuación (5.92), si se define la constante <math display=\"block\"><mrow><mi>α</mi><mo>≡</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>y</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msub><mi>I</mi><mi>x</mi></msub><msub><mi>I</mi><mi>y</mi></msub></mrow></mfrac><msubsup><mi>ω</mi><mi>z</mi><mn>2</mn></msubsup></mrow></math>, las ecuaciones (5.91)–(5.93) se escriben de la siguiente forma equivalente: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>+</mo><mi>α</mi><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>y</mi></msub><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>z</mi></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>ω</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Tenemos, por tanto, dos casos."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si el momento de inercia <math display=\"inline\"><msub><mi>I</mi><mi>z</mi></msub></math> respecto al eje de rotación es el mayor (<math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>x</mi></msub><mo>,</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>) —como en el caso del giroscopio— o el menor (<math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>&lt;</mo><msub><mi>I</mi><mi>x</mi></msub><mo>,</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>), tenemos <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y la ecuación (5.115) es la ecuación de un oscilador armónico de frecuencia angular <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><msqrt><mi>α</mi></msqrt></mrow></math>: <math display=\"block\"><mrow><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> Usando su solución y (5.116), tenemos: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>y</mi></msub><mi>A</mi><mi mathvariant=\"normal\">Ω</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>z</mi></msub></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> En consecuencia, si al principio <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mi>y</mi></msub></math> eran pequeños, lo serán siempre: <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> girará con el período en torno al eje principal <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>. <br> Dejando aparte el pequeño momento de fuerzas que produce la precesión de los equinoccios (véase la página 252), podemos considerar libre el movimiento de la Tierra con buena aproximación. Como es un esferoide oblato, si <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> es el eje de la Tierra, tenemos <math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math> y, más precisamente, esto: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub></mrow><msub><mi>I</mi><mi>x</mi></msub></mfrac><msub><mi>ω</mi><mi>z</mi></msub><mo>≈</mo><mfrac><msub><mi>ω</mi><mi>z</mi></msub><mrow><mn>300</mn><mi>.</mi></mrow></mfrac></mrow></math> En consecuencia, como predijo Euler, esperaríamos que el eje de la Tierra precesara con un período de 300 días; pero la Tierra no es rígida y la viscosidad amortiguaría un movimiento así. Sin embargo, se produce una pequeña precesión irregular provocada por los terremotos y el cambio de estaciones. Seth Carlo Chandler fue el primero que midió este fenómeno<span class=\"j-oin\">[Parece que Küstner halló lo mismo en Berlín en 1884, siguiendo una sugerencia hecha 40 años antes por Bessel.]</span> en 1891, al demostrar que la latitud de Harvard cambiaba sistemáticamente: en el polo la distancia entre los ejes de rotación y de simetría es siempre menor de 20 m. El período medio de este movimiento irregular, el <strong>período de Chandler</strong>, no es de 300 días, sino de unos 440 días. Una explicación parcial de esta diferencia es la falta de rigidez de la Tierra, como explicó Simon Newcomb<span class=\"j-oin\">[Véanse la sección 7.9 del libro [7], la sección 8.6 del texto [12] y la nota al pie de la página 252.]</span>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si el momento de inercia <math display=\"inline\"><msub><mi>I</mi><mi>z</mi></msub></math> es el intermedio (<math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&lt;</mo><msub><mi>I</mi><mi>z</mi></msub><mo>&lt;</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math> o <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>), en cambio, con la definición <math display=\"inline\"><mrow><mi>λ</mi><mo>≡</mo><msqrt><mrow><mi>−</mi><mi>α</mi></mrow></msqrt></mrow></math>, la ecuación (5.115) es <math display=\"block\"><mrow><msub><mover><mi>ω</mi><mo accent=\"true\">̈</mo></mover><mi>y</mi></msub><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, y su solución se halla fácilmente con el método de la sección 1.4.4 mediante las constantes de integración <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>y</mi></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>λ</mi><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi>y</mi></msub><mi>λ</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>z</mi></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mo>−</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>λ</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Así pues, aunque al principio sean muy pequeños, <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mi>y</mi></msub></math> irán aumentando: la rotación en torno a ese eje es inestable."
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que (5.123) es la solución de la ecuación (5.122)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este resultado se llama <strong>teorema de la raqueta de tenis</strong> y se comprueba muy fácilmente de forma experimental con una raqueta así (o con un paralelepípedo): aunque es muy fácil hacerla girar en torno a los ejes principales de los momentos de inercia mayor y menor, la rotación en torno al tercero es inestable<span class=\"j-oin\">[Véase la animación .]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Ejes principales de la raqueta de tenis.",
     "src": "../media/irudiak/bdd2d9e87b510cbd.svg",
     "zabalera": 289
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el caso de la raqueta de tenis, ¿respecto a qué eje principal es mayor el momento de inercia? ¿A cuál corresponde el menor? ¿Por qué?"
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
     "testua": "Teorema de los ejes paralelos"
    },
    {
     "mota": "testua",
     "html": "<em>Los ejes del sistema de referencia <math display=\"inline\"><mi>S</mi></math> y los del sistema <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> del centro de masas son paralelos entre sí. Si el vector de posición del centro de masas es <math display=\"inline\"><mrow><mover><mrow><mi>O</mi><msup><mi>O</mi><mo>*</mo></msup></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></msubsup><msub><mi>X</mi><mi>k</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>k</mi></msub><mo>=</mo><mi>X</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>Z</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, demuestra que la relación entre las matrices de inercia medidas en los dos sistemas es la siguiente: <math display=\"block\"><mrow><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math></em>"
    },
    {
     "mota": "testua",
     "html": "Este resultado es parecido al teorema de König de la página 37: <em>la matriz de inercia medida en un triedro se obtiene sumando la matriz de inercia medida en el triedro paralelo del sistema del centro de masas y la de la partícula ficticia, de masa igual a la masa total del sistema, que se mueve junto con el centro de masas</em>. Al hacer los cálculos, la siguiente expresión matricial equivalente puede ser la más útil: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑰</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mn mathvariant=\"bold\">𝟏</mn><mo>−</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>X</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>X</mi><mi>Y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>X</mi><mi>Z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>X</mi><mi>Y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>Y</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>Y</mi><mi>Z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>X</mi><mi>Z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>Y</mi><mi>Z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>Z</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/2dcd353f68c8f618.svg",
     "zabalera": 267
    },
    {
     "mota": "testua",
     "html": "Por las transformaciones de Galileo, tenemos <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><msup><mi>r</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><mo>+</mo><msub><mi>X</mi><mi>i</mi></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo>+</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo>+</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><msub><mi>X</mi><mi>j</mi></msub><mo>+</mo><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><msub><mi>X</mi><mi>i</mi></msub><mo>,</mo></mtd></mtr></mtable></math> y, por tanto, los elementos de la matriz de inercia son los siguientes: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mo>+</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><msub><mo>∫</mo><mi>V</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><msub><mi>X</mi><mi>j</mi></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mi>.</mi></mtd></mtr></mtable></math> La primera integral de esta expresión es <math display=\"inline\"><msubsup><mi>I</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>*</mo></msubsup></math>; en la segunda el integrando es constante y se recupera el segundo término del resultado, usando <math display=\"inline\"><mrow><msub><mo>∫</mo><mi>V</mi></msub><mi>d</mi><mi>m</mi><mo>=</mo><mi>m</mi></mrow></math>. La última integral es nula, por la definición del centro de masas, ya que en el sistema del centro de masas el momento de masa es cero: <math display=\"block\"><mrow><mi>m</mi><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mo>*</mo></msup><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>*</mo></msup><mi>d</mi><mi>m</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msubsup><mi>X</mi><mi>i</mi><mo>*</mo></msubsup><mo>=</mo><msub><mo>∫</mo><mi>V</mi></msub><msubsup><mi>x</mi><mi>i</mi><mo>*</mo></msubsup><mi>d</mi><mi>m</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema de Steiner"
    },
    {
     "mota": "testua",
     "html": "<em>La distancia entre los ejes paralelos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><msup><mi>A</mi><mo>*</mo></msup></math> es <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><msup><mi>A</mi><mo>*</mo></msup></math> pasa por el centro de masas. Demuestra que los momentos de inercia respecto a estos ejes cumplen la relación <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msup><mi>I</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. ¿Cuál es la relación entre los radios de giro?</em>"
    },
    {
     "mota": "testua",
     "html": "Si se elige el eje cartesiano <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> paralelo a <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><msup><mi>A</mi><mo>*</mo></msup></math>, y el perpendicular a ambos es <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math>, en la notación del problema anterior tenemos <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>a</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>X</mi><mn>1</mn></msub><mo>=</mo><mi>a</mi><mo>,</mo><msub><mi>X</mi><mn>2</mn></msub><mo>=</mo><msub><mi>X</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Además, con esa elección los momentos de inercia respecto a los ejes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><msup><mi>A</mi><mo>*</mo></msup></math> son <math display=\"inline\"><msub><mi>I</mi><mn>33</mn></msub></math> y <math display=\"inline\"><msubsup><mi>I</mi><mn>33</mn><mo>*</mo></msubsup></math>, respectivamente. Así pues, por el teorema de los ejes paralelos, nos queda lo siguiente: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>33</mn></msub><mo>=</mo><msubsup><mi>I</mi><mn>33</mn><mo>*</mo></msubsup><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mn>33</mn></msub><mo>−</mo><msub><mi>X</mi><mn>3</mn></msub><msub><mi>X</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>I</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><msup><mi>a</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Dividiendo este resultado por <math display=\"inline\"><mi>m</mi></math>, se obtiene: <math display=\"block\"><mrow><msup><mi>K</mi><mn>2</mn></msup><mo>=</mo><msup><mi>K</mi><mrow><mi>*</mi><mn>2</mn></mrow></msup><mo>+</mo><msup><mi>a</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aro"
    },
    {
     "mota": "testua",
     "html": "<em>La masa de un aro es <math display=\"inline\"><mi>m</mi></math> y su radio <math display=\"inline\"><mi>a</mi></math>. Su centro se mueve con velocidad escalar constante <math display=\"inline\"><mi>v</mi></math> a lo largo de una circunferencia de radio <math display=\"inline\"><mrow><mi>R</mi><mo>≫</mo><mi>a</mi></mrow></math>. No hay deslizamiento y el ángulo <math display=\"inline\"><mi>α</mi></math> es constante. Demuestra que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≪</mo><mi>ω</mi></mrow></math>. Halla la fuerza ejercida por el suelo. Suponiendo que el momento angular respecto al centro de masas del aro es el correspondiente a la velocidad angular <math display=\"inline\"><mi>ω</mi></math> (y que, por tanto, el correspondiente a la precesión <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es despreciable), demuestra que se cumple la siguiente relación: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>g</mi></mfrac><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math></em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/e6fa3acf3499551e.svg",
     "zabalera": 154
    },
    {
     "mota": "testua",
     "html": "Como se mueve sin deslizar, la velocidad del centro de masas es esta: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>R</mi><mo>=</mo><mi>ω</mi><mi>a</mi><mi>.</mi></mrow></math> Así pues, de la condición <math display=\"inline\"><mrow><mi>R</mi><mo>≫</mo><mi>a</mi></mrow></math> obtenemos que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≪</mo><mi>ω</mi></mrow></math>. Si la fuerza ejercida por el suelo es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math>, la ecuación del movimiento del centro de masas será la siguiente en coordenadas cilíndricas en torno al eje vertical: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>−</mi><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>R</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> y, por tanto, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>−</mo><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>R</mi></mfrac><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Despreciando la contribución correspondiente a la precesión, el momento angular respecto al centro de masas se expresa así: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>m</mi><mi>a</mi><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Teniendo en cuenta que <math display=\"inline\"><mrow><mover><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, obtenemos lo siguiente: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mi>m</mi><mi>a</mi><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>a</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>R</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Por otra parte, teniendo en cuenta que en el sistema del centro de masas <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mover><mi mathvariant=\"bold-italic\">𝝆</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es el punto de aplicación de la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math>, el momento total de las fuerzas es: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>R</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>−</mo><mi>g</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math> Como la ecuación del movimiento del momento angular es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, se ve directamente que en el movimiento estudiado debe cumplirse la relación <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hemisferio hueco"
    },
    {
     "mota": "testua",
     "html": "<em>Calcula el tensor de inercia y los momentos principales de un hemisferio hueco respecto a los tres puntos siguientes: <br> (a) El centro <math display=\"inline\"><mi>O</mi></math>. <br> (b) El centro de masas. <br> (c) El punto <math display=\"inline\"><mi>P</mi></math> del borde.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/d54b22ab36cad619.svg",
     "zabalera": 227
    },
    {
     "mota": "testua",
     "html": "(a) En las coordenadas esféricas de la figura, el radio de la corona circular comprendida entre <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>+</mo><mi>d</mi><mi>θ</mi></mrow></math> es <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, si el radio de la esfera es <math display=\"inline\"><mi>a</mi></math>. Por tanto, la base, la altura y el área del elemento infinitesimal comprendido entre <math display=\"inline\"><mi>φ</mi></math> y <math display=\"inline\"><mrow><mi>φ</mi><mo>+</mo><mi>d</mi><mi>φ</mi></mrow></math> son <math display=\"inline\"><mrow><mi>r</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>φ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mi>d</mi><mi>θ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi></mrow></math>, respectivamente. La masa es, pues: <math display=\"block\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>S</mi><mo>=</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/45bbfbf909be6048.svg",
     "zabalera": 241
    },
    {
     "mota": "testua",
     "html": "La matriz de inercia es <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>O</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mo>×</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> y, para hacer la integral respecto a <math display=\"inline\"><mi>φ</mi></math>, si nos valemos de los resultados útiles <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mfrac><mrow><mn>1</mn><mo>±</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>φ</mi></mrow><mn>2</mn></mfrac><mi>d</mi><mi>φ</mi><mo>=</mo><mi>π</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mo>=</mo><mn>2</mn><mi>π</mi></mtd></mtr></mtable></math>, se obtiene lo siguiente: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>.</mi></mrow></math> Ahora, usando las integrales <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mfrac><mrow><mn>3</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn><mi>θ</mi></mrow><mn>4</mn></mfrac><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>, tenemos: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Es, pues, una peonza esférica respecto al centro <math display=\"inline\"><mi>O</mi></math>. <br> Esto podía calcularse fácilmente sin hacer la integral, pues en la matriz de inercia de una esfera hueca de masa <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> las contribuciones de las dos mitades son exactamente iguales. Por otra parte, los momentos de inercia del aro también pueden calcularse (más fácilmente) usando el teorema de los ejes paralelos y la simetría. <br> (b) La posición del centro de masas se calcula directamente: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑹</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>X</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>X</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>X</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>m</mi><mo>=</mo><mfrac><mi>a</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Ahora, valiéndonos del teorema de los ejes paralelos: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi mathvariant=\"bold-italic\">𝑰</mi><mo>*</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>O</mi></msub><mo>−</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mfrac><msup><mi>a</mi><mn>2</mn></msup><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "(c) Si el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> del triedro en el punto <math display=\"inline\"><mi>P</mi></math> se elige en la dirección radial horizontal y hacia fuera, y el <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> en la vertical y hacia abajo, en el teorema de los ejes paralelos hay que usar <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>Y</mi><mo>=</mo><mi>−</mi><mi>a</mi></mrow></math> y <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑰</mi><mi>P</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑰</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mi>i</mi></msub><msub><mi>X</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>4</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>4</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Se demuestra fácilmente que los momentos principales de inercia son <math display=\"block\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>7</mn><mo>±</mo><mn>3</mn><msqrt><mn>2</mn></msqrt></mrow><mn>6</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> y que las direcciones principales son <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math>, y las de los vectores <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>∓</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de Euler modificadas"
    },
    {
     "mota": "testua",
     "html": "<em>El radio de la esfera homogénea de la figura es <math display=\"inline\"><mi>a</mi></math> y gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno a un eje de simetría, que a su vez gira con velocidad constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> en torno al eje vertical. El punto <math display=\"inline\"><mi>O</mi></math> es fijo. Si todos los rozamientos son despreciables, ¿cuál es el ángulo constante <math display=\"inline\"><mi>θ</mi></math>? ¿Puede ser mayor que <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>? <br>  Nota: Resuelve el problema usando la variante adecuada de las ecuaciones de Euler.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/38d627e4861d313b.svg",
     "zabalera": 118
    },
    {
     "mota": "testua",
     "html": "Para que el momento de las fuerzas externas sea constante, será más adecuado que el sistema del sólido el de la figura: gira con velocidad <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>, de modo que el plano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Z</mi></mrow></math> sea el definido por las dos velocidades angulares, pero no gira en torno al eje de simetría. Este triedro es principal y en él <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>,</mo><mi mathvariant=\"bold\">𝛀</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> son constantes del movimiento y, usando el teorema de Coriolis, tenemos: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold\">𝛀</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>≠</mo><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold\">𝛀</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/18cff9c5c7b27ef7.svg",
     "zabalera": 149
    },
    {
     "mota": "testua",
     "html": "Como en ese triedro todos los <math display=\"inline\"><msub><mi>ω</mi><mi>i</mi></msub></math> son constantes, es <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. Así pues, si la distancia entre el punto <math display=\"inline\"><mi>O</mi></math> y el centro de la esfera es <math display=\"inline\"><mi>R</mi></math>, teniendo en cuenta que la velocidad angular total del sólido es <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi></mrow></math>, tenemos: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>N</mi><mi>y</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>z</mi></msub><msub><mi>L</mi><mi>x</mi></msub><mo>−</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>z</mi></msub><msub><mi>I</mi><mi>x</mi></msub><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><mo>−</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><msub><mi>I</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>z</mi></msub><mo>+</mo><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><msub><mi mathvariant=\"normal\">Ω</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>x</mi></msub><mi>ω</mi><msub><mi>I</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>x</mi></msub><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>I</mi><mi>z</mi></msub><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mtd></mtr></mtable></math> Ahora, como <math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>=</mo><msup><mi>I</mi><mo>*</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><msup><mi>I</mi><mo>*</mo></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, obtenemos la condición <math display=\"block\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msup><mi>I</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y los valores de <math display=\"inline\"><mi>θ</mi></math> serán los siguientes: <math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mn>0</mn></msub><mo>≡</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msup><mi>I</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Naturalmente, el último valor solo existe cuando se cumple lo siguiente: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><msup><mi>I</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mn>1</mn><mi>.</mi></mrow></math> Está claro, por otra parte, que será <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> cuando <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>R</mi><mo>&gt;</mo><msup><mi>I</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ω</mi><mi>ω</mi></mrow></math>. (Véase también el problema 6.113.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oscilaciones pequeñas"
    },
    {
     "mota": "testua",
     "html": "<em>El cuerpo de la figura puede ser una semiesfera maciza o hueca o un semicilindro macizo o hueco. El radio es <math display=\"inline\"><mi>R</mi></math>, el radio de giro en torno al centro <math display=\"inline\"><mi>O</mi></math> es <math display=\"inline\"><mi>K</mi></math> y la distancia entre <math display=\"inline\"><mi>O</mi></math> y el centro de masas <math display=\"inline\"><mi>a</mi></math><span class=\"j-oin\">[<math display=\"inline\"><mrow><msup><mi>K</mi><mn>2</mn></msup><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>/</mi><mn>5</mn><mo>,</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>a</mi><mi>/</mi><mi>R</mi><mo>=</mo><mn>3</mn><mi>/</mi><mn>8</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>4</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mn>2</mn><mi>/</mi><mi>π</mi></mrow></math>.]</span>. El cuerpo no desliza sobre la mesa horizontal. ¿Cuál es la frecuencia de las pequeñas oscilaciones?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/45d5177d9ec385a0.svg",
     "zabalera": 169
    },
    {
     "mota": "testua",
     "html": "Elijamos el triedro <math display=\"inline\"><mi>O</mi></math> en la posición de equilibrio del centro, como se ve en la figura. Si no hay deslizamiento, la velocidad de <math display=\"inline\"><mi>O</mi></math> es <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>O</mi></msub><mo>=</mo><mi>−</mi><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y la posición <math display=\"inline\"><mrow><msub><mi>x</mi><mi>O</mi></msub><mo>=</mo><mi>−</mi><mi>R</mi><mi>θ</mi></mrow></math>. (Si se prefiere, como no hay movimiento relativo en el punto de contacto sin deslizamiento, las longitudes de los conjuntos de puntos de contacto del cuerpo y de la mesa son iguales: las del arco <math display=\"inline\"><mrow><mi>R</mi><mi>θ</mi></mrow></math>.) Así pues, la posición <math display=\"inline\"><mi>Z</mi></math> del centro de masas será <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>−</mo><mi>R</mi><mi>θ</mi><mo>,</mo><mi>−</mi><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. De aquí se obtienen directamente la velocidad del centro de masas y (usando el teorema de König y el radio de giro <math display=\"inline\"><msqrt><mrow><msup><mi>K</mi><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></msqrt></math> en torno al centro de masas) la energía mecánica: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>R</mi><mo>,</mo><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>E</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>K</mi><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>K</mi><mn>2</mn></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>a</mi><mi>R</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/22b3055b7e4a368f.svg",
     "zabalera": 148
    },
    {
     "mota": "testua",
     "html": "Si las oscilaciones son pequeñas, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn><mo>,</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mn>1</mn><mo>−</mo><msup><mi>θ</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math> son estas y, en consecuencia, <math display=\"block\"><mrow><mi>E</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>K</mi><mn>2</mn></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>a</mi><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>a</mi><msup><mi>θ</mi><mn>2</mn></msup><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ktea. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Si derivamos respecto al tiempo esa energía mecánica constante, vemos que la ecuación del movimiento (en la aproximación de pequeñas oscilaciones) es la de un oscilador armónico: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>ν</mi><mo>=</mo><msqrt><mfrac><mrow><mi>g</mi><mi>a</mi></mrow><mrow><msup><mi>K</mi><mn>2</mn></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>a</mi><mi>R</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
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
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Cinemática])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Suma de velocidades angulares</span>"
      },
      {
       "mota": "testua",
       "html": ". La velocidad angular de un sólido rígido es <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>1</mn></msub></math> en el triedro <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y la velocidad angular del triedro <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> es <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>2</mn></msub></math> en el triedro <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>. Demuestra que la velocidad angular del sólido en el triedro <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> es <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>2</mn></msub></mrow></math>."
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
       "html": "Las velocidades de los extremos de la varilla homogénea de la figura son <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub></math> en un instante (y, en general, no están en el mismo plano). Calcula el campo de velocidades <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> e integra el resultado para demostrar que la energía cinética total es la siguiente: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> ¿Cuáles son las contribuciones correspondientes a la traslación del centro de masas y a la rotación?"
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
       "html": "¿Qué puede decirse de la velocidad angular del problema 5.2 cuando la posición relativa de los extremos es <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><mi>L</mi><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover></mrow></math>?"
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
       "html": "El cilindro central del carrete de la figura se mueve con velocidad constante, sin deslizar, sobre una superficie horizontal. Usa algún programa adecuado para dibujar las trayectorias de los puntos <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi></mrow></math> y <math display=\"inline\"><mi>C</mi></math>."
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
       "html": "Las esferas situadas entre los cilindros que giran con velocidad angular constante no deslizan en el cojinete de la figura. El radio del cilindro interior es <math display=\"inline\"><mi>r</mi></math> y el del exterior <math display=\"inline\"><mi>R</mi></math>. Calcula la velocidad angular de cada esfera y la velocidad escalar de su centro de masas."
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
       "html": "El cilindro grande de la figura es hueco y se mueve sin deslizar, con velocidad <math display=\"inline\"><mi>V</mi></math>, sobre el plano horizontal. El cilindro que tiene dentro no desliza. Calcula la velocidad angular de este último y la velocidad de su centro de masas, en el triedro indicado, si se conocen las evoluciones <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
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
       "html": "Si las velocidades de dos puntos de un sólido rígido son iguales, ¿qué sabemos sobre la velocidad angular?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Péndulo físico])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Péndulo de Kater</span>"
      },
      {
       "mota": "testua",
       "html": "(1817). Supongamos que al suspender un péndulo físico de dos puntos situados a distancias distintas <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math> del centro de masas se miden períodos de oscilación iguales. Demuestra que la longitud del péndulo matemático equivalente es <math display=\"inline\"><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></math>."
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
       "html": "Los extremos de la varilla de la figura pueden moverse sin rozamiento, bajo la acción de la gravedad, a lo largo de una circunferencia vertical fija. Si la masa de la varilla es <math display=\"inline\"><mi>m</mi></math>, ¿cuál será la frecuencia de las pequeñas oscilaciones?"
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
       "html": "El camión de la figura está parado y la puerta trasera en la posición que se muestra. Si arranca con aceleración constante <math display=\"inline\"><mi>a</mi></math>, ¿cuánto tiempo necesitará la puerta para cerrarse? ¿Cuál será su velocidad en ese instante? <br>  <em>Nota</em>: Usa la siguiente integral elíptica (véase la sección B.5): <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></msqrt></mfrac><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><msqrt><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></msqrt></mfrac><mo>=</mo><msqrt><mn>2</mn></msqrt><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>2.62</mn><mi>.</mi></mrow></math>"
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
       "html": "La placa homogénea de la figura oscila en un plano vertical en torno al eje perpendicular que pasa por el borde <math display=\"inline\"><mi>A</mi></math>. <br> (a) Calcula la frecuencia de las pequeñas oscilaciones. <br> (b) ¿Cuáles son los períodos más largo y más corto al variar <math display=\"inline\"><mi>b</mi></math>, sin cambiar <math display=\"inline\"><mi>a</mi></math>? <br> (c) ¿Cuáles son los períodos más largo y más corto al variar <math display=\"inline\"><mi>a</mi></math>, sin cambiar <math display=\"inline\"><mi>b</mi></math>? <br> (d) ¿Cómo hay que elegir los valores <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mi>b</mi></mrow></math> para que las frecuencias de las pequeñas oscilaciones en torno a los puntos medios de los bordes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> sean iguales?"
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
       "html": "Un cuadrado delgado homogéneo puede girar en un plano vertical en torno a un eje horizontal perpendicular. Si el eje es liso, ¿en cuál de los casos de la figura se obtienen las pequeñas oscilaciones más rápidas? ¿Y las más lentas? ¿De dónde hay que suspenderlo para que la frecuencia sea máxima?"
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
       "html": "Una varilla homogénea oscila en el campo gravitatorio homogéneo de la Tierra, en un plano vertical, en torno a un eje horizontal liso. ¿Por qué punto de la varilla debe pasar el eje para que el período de las pequeñas oscilaciones sea mínimo? ¿Y para que sea máximo?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Momentos y tensor de inercia])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Sólido plano delgado</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[En algunos libros de texto a este resultado se le llama <strong>teorema de los ejes perpendiculares</strong>, pero recuérdese que el teorema de los ejes paralelos es mucho más general, ya que en este último no se exige que el sólido sea plano y delgado.]</span> Supongamos que elegimos el sistema de referencia de modo que el sólido esté en el plano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>. Demuestra que la dirección <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> perpendicular al sólido es principal y que el momento de inercia correspondiente es la suma de los otros dos: <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>I</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mrow></math>. Si los otros dos momentos principales de inercia son <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>I</mi><mn>2</mn></msub></math>, ¿es cierto que <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>?"
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
       "html": "Calcula los momentos de inercia que aparecen en la tabla de la página 639."
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
       "html": "En un disco delgado homogéneo de radio <math display=\"inline\"><mi>a</mi></math> se hace en el centro un agujero circular de radio <math display=\"inline\"><mi>b</mi></math>. La masa del sólido restante es <math display=\"inline\"><mi>m</mi></math>. Calcula, sin hacer integrales, las direcciones y los momentos principales de inercia respecto al centro geométrico."
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
       "html": "Calcula los momentos de inercia y las direcciones principales de un cubo uniforme respecto a los puntos siguientes: <br> (a) El punto medio de una arista. <br> (b) Un vértice."
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
       "html": "La altura de un cono homogéneo macizo es <math display=\"inline\"><mi>h</mi></math> y el radio de su base <math display=\"inline\"><mi>r</mi></math>. Calcula los momentos principales de inercia respecto al vértice. ¿Cómo debe ser el cociente <math display=\"inline\"><mrow><mi>h</mi><mi>/</mi><mi>r</mi></mrow></math> para que todos los ejes que pasan por el vértice sean principales?"
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
       "html": "Demuestra que las transformaciones de semejanza no cambian la traza de las matrices. <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Recuerda que la traza de la matriz <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se define así: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>a</mi><mrow><mi>k</mi><mi>k</mi></mrow></msub><mi>.</mi></mrow></math>"
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
       "html": "Las componentes del tensor de inercia de un sólido en el sistema de referencia <math display=\"inline\"><mi>S</mi></math> son las siguientes: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>A</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>C</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>C</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>B</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>A</mi><mo>+</mo><mi>B</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> ¿Cuáles son los momentos y los ejes principales de inercia? ¿Cuál es la transformación de semejanza que diagonaliza el tensor de inercia?"
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
       "html": "<span class=\"j-smallcaps\">Tensor de inercia</span>"
      },
      {
       "mota": "testua",
       "html": ". Demuestra que la suma de dos momentos principales de inercia nunca es menor que el tercer momento principal. ¿Cuándo se dará la igualdad?"
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
       "html": "Usa el tensor de inercia en el problema 5.2 para hallar directamente la energía cinética correspondiente a la rotación."
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
       "html": "Las longitudes de los lados de una lámina delgada uniforme rectangular son <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> y <math display=\"inline\"><mi>a</mi></math>. Gira en torno a un vértice fijo con velocidad angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> en la dirección de la diagonal. Calcula el momento de inercia respecto a una diagonal, el momento angular respecto al vértice fijo y la energía cinética. ¿Cuáles son los momentos principales de inercia respecto al vértice? ¿Cómo hay que elegir la velocidad angular para que sea paralela al momento angular?"
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
       "html": "<span class=\"j-smallcaps\">¿Verdadero o falso?</span>"
      },
      {
       "mota": "testua",
       "html": "Como sabemos, la velocidad angular y el momento angular no son siempre paralelos; sin embargo, no pueden ser antiparalelos."
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
       "html": "¿Pueden ser perpendiculares los momentos angular y de velocidad angular de un sólido rígido, si este último no es cero?"
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
       "html": "El ángulo entre la velocidad y el momento angular de un sólido es <math display=\"inline\"><mi>α</mi></math>. Sabemos que, en general, <math display=\"inline\"><mi>α</mi></math> no es cero; pero, ¿puede estar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en medio? (Véase también el problema 5.123.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Centro de masas y equilibrio])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Dónde está el centro de masas de una semiesfera maciza homogénea?"
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
       "html": "¿Dónde está el centro de masas de un semicilindro macizo homogéneo?"
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
       "html": "La esfera de la figura está hecha con dos semiesferas macizas homogéneas de materiales distintos. Se coloca sobre un plano inclinado como se muestra, siendo el plano <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> el límite entre los hemisferios, perpendicular a la figura. Demuestra que, eligiendo los materiales de manera adecuada, la esfera puede estar en equilibrio si el ángulo <math display=\"inline\"><mi>α</mi></math> y el coeficiente de rozamiento estático <math display=\"inline\"><mi>μ</mi></math> están en intervalos adecuados. ¿Cuáles son esos intervalos? Si las densidades de las semiesferas son <math display=\"inline\"><msub><mi>ρ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>ρ</mi><mn>2</mn></msub></math>, ¿cuál es el ángulo <math display=\"inline\"><mi>β</mi></math> en el equilibrio? ¿Cuál es mayor, <math display=\"inline\"><msub><mi>ρ</mi><mn>1</mn></msub></math> o <math display=\"inline\"><msub><mi>ρ</mi><mn>2</mn></msub></math>?"
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
       "html": "El radio de una semiesfera homogénea apoyada en el suelo horizontal es <math display=\"inline\"><mi>R</mi></math> y su masa <math display=\"inline\"><mi>M</mi></math>. Desde la mitad de la base plana sube una barra ligera de aluminio. Si un acróbata empieza a subir por la barra, ¿cuándo deberá empezar a hacer acrobacias para no caerse? <br>  <em>Nota</em>: Desprecia las dimensiones del acróbata."
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
       "html": "Sobre una mesa horizontal hay un cubo de masa <math display=\"inline\"><mi>m</mi></math>. El coeficiente de rozamiento estático entre los dos cuerpos es <math display=\"inline\"><mi>μ</mi></math>. ¿Cuál es la fuerza mínima <math display=\"inline\"><mi>F</mi></math> que hay que aplicar en el borde superior para volcar el cubo sin que deslice? ¿Cuál es el ángulo <math display=\"inline\"><mi>α</mi></math> en ese caso?"
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
       "html": "Una varilla tiene un extremo en el suelo y el otro colgado del techo mediante una cuerda sin masa. Las longitudes de la varilla y de la cuerda son iguales. ¿Cómo debe ser el coeficiente de rozamiento estático entre la varilla y el suelo para que la varilla esté en equilibrio en la posición que se muestra en la figura?"
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
       "html": "Los radios de los arcos de circunferencia del borde de la placa de la figura son <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>. La placa está en equilibrio, atada con una cuerda, bajo la acción de la gravedad, en la posición de la figura. Calcula la distancia <math display=\"inline\"><mi>d</mi></math>."
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
       "html": "Se apilan libros idénticos en el borde de una mesa, como se ve en la figura. ¿Cuántos libros hacen falta para que las verticales de todos los puntos del último queden fuera de la mesa, sin caerse? Al aumentar el número de libros, ¿cuál es la mayor distancia horizontal que se puede conseguir desde el borde? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Desprecia el rozamiento."
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
       "html": "Se han colocado tres libros idénticos en una mesa, como se muestra en la figura. Si se empujan lentamente, ¿cuál será la parte más larga del libro de la derecha que sobresalga del borde antes de que el libro caiga, si todos los rozamientos son despreciables? ¿Será más larga o más corta si hay rozamiento?"
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
       "html": "Dentro de un recipiente cilíndrico colocado boca abajo sobre una mesa horizontal hay dos bolas idénticas. La masa y el radio del recipiente son <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>R</mi></math> y los de las bolas <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>r</mi></math>. Si todos los rozamientos son despreciables, ¿qué condición debe cumplirse para que el sistema esté en equilibrio en la configuración de la figura?"
      },
      {
       "mota": "testua",
       "html": "<em>Nota</em>: <math display=\"inline\"><mrow><mi>r</mi><mo>&lt;</mo><mi>R</mi><mo>&lt;</mo><mn>2</mn><mi>r</mi></mrow></math>."
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
       "html": "La esfera homogénea de la figura está en equilibrio contra la pared, atada con una cuerda a un punto <math display=\"inline\"><mi>L</mi></math> de la pared. El punto <math display=\"inline\"><mi>L</mi></math> está en la vertical del centro de la esfera. ¿Cómo es el coeficiente de rozamiento estático entre la pared y la esfera?"
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
       "html": "La masa de la esfera de la figura es <math display=\"inline\"><mi>m</mi></math> y está en equilibrio entre dos planos lisos. Calcula las reacciones ejercidas por los planos.<span class=\"j-oin\">[Este problema apareció en la obra completa <em>Opera Omnia</em> de Leibniz, de 1768.]</span>"
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
       "html": "Para hacer una mesa elegante (?), se ha colocado un triángulo irregular de vidrio sobre tres patas verticales idénticas. El grosor del vidrio es uniforme. Demuestra que las reacciones ejercidas por las tres patas son iguales."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Leyes de conservación])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un disco horizontal gira en torno a un eje vertical liso que pasa por su centro. Si una mosca que estaba inicialmente en reposo en el borde empieza a ir lentamente hacia el centro, ¿cómo será la energía cinética del sistema: mayor que la que tenía al principio, menor o igual?"
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
       "html": "Una bola de radio <math display=\"inline\"><mi>a</mi></math> se mueve con velocidad <math display=\"inline\"><mi>v</mi></math>, sin deslizar, hasta que choca con un escalón de altura <math display=\"inline\"><mrow><mi>h</mi><mo>&lt;</mo><mi>a</mi></mrow></math>. Si en el punto de impacto <math display=\"inline\"><mi>O</mi></math> no hay deslizamiento, ¿cuál debe ser el valor mínimo de <math display=\"inline\"><mi>v</mi></math> para subir el escalón?"
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
       "html": "<span class=\"j-smallcaps\">Dos varillas</span>"
      },
      {
       "mota": "testua",
       "html": ". Una varilla que está en reposo en vertical empieza a caer sin rozamiento. ¿Cuál será la velocidad del centro de masas cuando la varilla esté en horizontal? ¿Cómo es la trayectoria de los extremos? ¿Cómo cambia la respuesta ahora si un extremo de la varilla está sujeto al suelo mediante un eje liso? ¿En qué caso llegará antes a la posición horizontal?"
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
       "html": "<span class=\"j-smallcaps\">Dos varillas</span>"
      },
      {
       "mota": "testua",
       "html": "(de nuevo). ¿Has tenido en cuenta que, en el primer caso del problema 5.42, quizá el extremo inferior empiece a separarse del suelo en algún momento?"
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
       "html": "La masa de la placa delgada de la figura es <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> y puede girar sin rozamiento en torno al eje vertical. Inicialmente está en reposo, pero la golpea una partícula de masa <math display=\"inline\"><mi>m</mi></math> que llega en dirección perpendicular, en el punto que se muestra en la figura. Tras el choque, la partícula se mueve en la misma dirección. Calcula la velocidad de la partícula tras el choque, suponiendo que este ha sido elástico. ¿Hacia dónde se mueve ahora la partícula? Si la gravedad es despreciable, ¿qué ocurriría si no hubiera eje?"
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
       "html": "Calcula el movimiento de la placa del problema 5.44 tras el choque, si ahora la partícula se queda pegada en el punto de impacto. ¿Qué ocurriría sin gravedad y sin eje?"
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
       "html": "La varilla horizontal de masa <math display=\"inline\"><mi>m</mi></math> puede girar sin rozamiento en torno al eje vertical <math display=\"inline\"><mi>A</mi></math> y tiene en un extremo una bolita de masa <math display=\"inline\"><mi>m</mi></math>, como se muestra en la figura. Se produce un choque elástico entre la varilla y una partícula de masa <math display=\"inline\"><mi>m</mi></math> que llega en dirección horizontal perpendicular. Tras el choque, la partícula se mueve en la misma dirección. ¿Cómo hay que elegir la distancia <math display=\"inline\"><mi>d</mi></math> para que la velocidad angular de la varilla sea máxima? ¿Y para que sea mínima? ¿Cuáles serán esos valores máximo y mínimo? ¿Cuándo volverá la partícula hacia atrás? ¿Puede ser nula la reacción del eje en el choque? ¿Qué cambia en tus respuestas si la bolita está en el otro extremo? ¿Y si la partícula se queda pegada a la varilla?"
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
       "html": "El aro y el disco homogéneo de la figura tienen la misma masa y el mismo radio y se sueltan desde el reposo a la misma altura en el mismo instante. Si bajan sin deslizar por el plano inclinado, ¿cuál llegará antes al suelo?"
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
       "html": "Por un plano inclinado se sueltan desde las mismas alturas cuatro cuerpos: una esfera hueca, un cilindro hueco, una esfera maciza y un cilindro macizo. Los cuatro sólidos giran sin deslizar en torno al eje horizontal de simetría de rotación. ¿Cuál será el más rápido? ¿Y el segundo? ¿Y el último? ¿Depende la respuesta de las masas y de las dimensiones de los cuerpos?"
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
       "html": "Un cubo homogéneo de lado <math display=\"inline\"><mi>L</mi></math> desliza con velocidad <math display=\"inline\"><mi>v</mi></math> sobre una mesa horizontal lisa. Al chocar con una pequeña muesca en el borde de esta última, empieza a girar en torno a ella. ¿Cuál debe ser el valor mínimo de la velocidad <math display=\"inline\"><mi>v</mi></math> para que el cubo caiga de la mesa?"
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
       "html": "Las dos varillas de la figura son idénticas y la articulación y el suelo lisos. Se sueltan desde la posición vertical <math display=\"inline\"><mrow><mi>φ</mi><mo>≈</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Escribe, mediante una integral, la solución <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Cuáles son las direcciones y los módulos de las velocidades de los extremos <math display=\"inline\"><mi>B</mi></math> y <math display=\"inline\"><mi>C</mi></math> cuando el sistema llega a la configuración horizontal <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>? ¿Cuál es entonces el momento lineal total?"
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
       "html": "<span class=\"j-smallcaps\">Caída de la varilla</span>"
      },
      {
       "mota": "testua",
       "html": ". Si la pared y el suelo del problema 1.5 son lisos, ¿dónde se rompe el contacto entre la varilla y la pared? ¿Cuál es la velocidad de la varilla cuando llega a la posición horizontal? <br>  <em>Nota</em>: Véase"
      },
      {
       "mota": "ezezaguna",
       "izena": "link"
      },
      {
       "mota": "testua",
       "html": "la simulación."
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
       "html": "El extremo <math display=\"inline\"><mi>A</mi></math> de la partícula y de la varilla articulada de la figura se sueltan desde la misma altura <math display=\"inline\"><mi>h</mi></math>. Calcula las velocidades verticales de la partícula y de <math display=\"inline\"><mi>A</mi></math> para todas las alturas <math display=\"inline\"><mi>z</mi></math> medidas desde el suelo. Halla cuál es el valor máximo de <math display=\"inline\"><mi>h</mi></math> para que a todas las alturas <math display=\"inline\"><mi>z</mi></math> la velocidad vertical del extremo <math display=\"inline\"><mi>A</mi></math> sea mayor que la de la partícula. <br>  <em>Nota</em>: Desprecia el rozamiento y el efecto del aire."
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
       "html": "<math display=\"inline\"><mi>g</mi></math>  <span class=\"j-smallcaps\">más ligero que</span>. En el agujero de una lámina delgada se coloca una bolita y cerca de allí un recipiente pequeño, como se muestra en la figura 5.17. Tras apoyar un extremo en un borde, el otro se levanta un poco. Si se suelta el sistema desde la posición de la figura, la bolita entra en el recipiente. Usa el problema 5.52 para explicar este experimento."
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
       "html": "¿Cuál es la altura máxima <math display=\"inline\"><mi>h</mi></math> para que en el problema 5.52 el módulo de la aceleración vertical del extremo <math display=\"inline\"><mi>A</mi></math> sea mayor que <math display=\"inline\"><mi>g</mi></math> a todas las alturas <math display=\"inline\"><mi>z</mi></math>? ¿Por qué no son iguales las <em>preguntas</em> de los dos problemas?"
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
       "html": "¿Cuál es la altura máxima <math display=\"inline\"><mi>h</mi></math> para que la varilla del problema 5.52 llegue al suelo antes que la partícula?"
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
       "html": "La masa y el radio de un aro en reposo sobre una mesa horizontal lisa son <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>a</mi></math>, respectivamente. Hacia él se acerca una partícula de masa <math display=\"inline\"><mi>m</mi></math>, con velocidad <math display=\"inline\"><mrow><mi>−</mi><mi>v</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>, en una trayectoria tangente. Tras el choque, la partícula y el aro quedan pegados. Calcula cómo se mueve el nuevo cuerpo tras el choque."
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
       "html": "La varilla de masa <math display=\"inline\"><mrow><mn>6</mn><mi>m</mi></mrow></math> puede girar sin obstáculos en torno al eje perpendicular central y tiene pegada en un extremo una partícula puntual de masa <math display=\"inline\"><mi>m</mi></math>. Una segunda partícula idéntica que llega con velocidad <math display=\"inline\"><mi>v</mi></math> perpendicular a la varilla y al eje golpea el otro extremo. Si el choque es elástico, ¿cuáles son la velocidad de la partícula y la velocidad angular de la varilla tras el choque? ¿Cuál es el impulso ejercido por el eje en el choque? ¿Qué cambia en tus respuestas si la partícula golpea el otro extremo? ¿Y si se queda pegada?"
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
       "html": "La masa y la longitud de la varilla homogénea de la figura son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>a</mi></math>, respectivamente. Inicialmente gira en torno al centro de masas en reposo con velocidad angular constante <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>, como se muestra en la figura. Al chocar con el eje liso <math display=\"inline\"><mi>A</mi></math>, queda atrapada y empieza a girar en torno a <math display=\"inline\"><mi>A</mi></math>. Calcula la nueva velocidad angular <math display=\"inline\"><mi>ω</mi></math> y el módulo, la dirección y el sentido del impulso ejercido por el eje <math display=\"inline\"><mi>A</mi></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. <br>  <em>Nota</em>: No hay gravedad."
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
       "html": "La bola homogénea de la figura se mueve sin deslizar sobre unos raíles separados por la distancia <math display=\"inline\"><mrow><mn>2</mn><mi>d</mi></mrow></math>. El ángulo entre los raíles y la horizontal es <math display=\"inline\"><mi>α</mi></math> y el radio de la bola <math display=\"inline\"><mi>a</mi></math>. Si se suelta esta última desde el reposo, ¿cuál es su velocidad angular cuando ha recorrido la distancia <math display=\"inline\"><mi>L</mi></math>? ¿Cuál es la velocidad del centro de masas en ese instante? ¿Qué ocurre cuando <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math>?"
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
       "html": "¿Qué cambia en el problema 1.154 si el rozamiento entre el aro y el borde es suficiente para evitar el deslizamiento en el choque?"
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
       "html": "La masa y el radio de un cilindro son <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>R</mi></math>, respectivamente. Cuando está en reposo sobre un suelo liso, lo golpea una bala que llega en dirección horizontal (en el plano de simetría transversal) y se queda dentro. ¿Cómo se mueve ahora el cilindro? ¿Qué proporción de la energía cinética se pierde en el choque? ¿Cómo hay que elegir la distancia <math display=\"inline\"><mi>h</mi></math> para que la energía cinética final sea lo mayor posible? ¿Y para que sea lo menor posible? <br>  <em>Nota</em>: Usa que <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> en todos los cálculos, conservando como máximo los términos lineales en el cociente <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi></mrow></math>."
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
       "html": "La masa de la barra homogénea de la figura es <math display=\"inline\"><mi>m</mi></math> y su longitud <math display=\"inline\"><mi>L</mi></math>. Se suelta desde la horizontal y, cuando llega a la vertical, golpea una partícula de masa <math display=\"inline\"><mi>m</mi></math> que está sobre la mesa horizontal lisa. La partícula queda pegada. Calcula la reacción que ejerce la articulación lisa de la barra en el choque. ¿Cuál es, a partir de ahí, el ángulo máximo entre la barra y la vertical?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Ecuaciones del movimiento])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Centro de percusión</span>"
      },
      {
       "mota": "testua",
       "html": ". La varilla uniforme de la figura puede girar en torno al punto <math display=\"inline\"><mi>O</mi></math>. ¿Cuál es la longitud del péndulo matemático equivalente? Si cuando está en reposo en la posición vertical se le aplica un impulso horizontal <math display=\"inline\"><mi>J</mi></math>, ¿cuál será la velocidad angular inicial? ¿Dónde hay que aplicar el impulso <math display=\"inline\"><mi>J</mi></math> para que no haya reacción en el punto <math display=\"inline\"><mi>O</mi></math>? ¿A qué es igual <math display=\"inline\"><mi>a</mi></math> en este último caso?"
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
       "html": "Los radios exterior e interior del carrete de la figura son <math display=\"inline\"><mi>R</mi></math> y <math display=\"inline\"><mi>a</mi></math>, respectivamente. Si tiramos con la fuerza <math display=\"inline\"><mi>F</mi></math> de una cuerda enrollada en el cilindro interior, ¿hacia dónde se moverá el carrete sobre la mesa horizontal sin deslizar en los casos (a) y (b)? ¿Qué condiciones deben cumplirse para que el carrete no se mueva en el caso (c)? <br>  <em>Nota</em>: Véase también el problema 6.35."
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
       "html": "<span class=\"j-smallcaps\">La moneda</span>"
      },
      {
       "mota": "testua",
       "html": ". Se coloca en el suelo un cilindro delgado de radio <math display=\"inline\"><mi>a</mi></math> que gira con velocidad angular <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> en torno a su eje de simetría horizontal. Está claro que al principio deslizará, pero por efecto del rozamiento empezará a moverse. Escribe las ecuaciones del movimiento del cilindro y calcula la relación entre la velocidad lineal y la angular. Demuestra que en un instante desaparece el rozamiento y que a partir de ahí se mueve con velocidad constante. ¿Cuál es esa velocidad? <br> Calcula de nuevo la velocidad constante final usando un principio de conservación adecuado. Si un cilindro hueco y uno macizo tienen la misma masa y el mismo radio, ¿cuál se moverá más rápido? ¿Qué ocurre si las masas son distintas? ¿Cuál es el trabajo total realizado por la fuerza de rozamiento? ¿Qué parte de la energía inicial se ha usado para producir calor? ¿Qué de lo que respondas depende del coeficiente <math display=\"inline\"><mi>μ</mi></math> de rozamiento dinámico? <br>  <em>Notas</em>: Véase"
      },
      {
       "mota": "ezezaguna",
       "izena": "link"
      },
      {
       "mota": "testua",
       "html": "la simulación. La masa del cilindro es <math display=\"inline\"><mi>m</mi></math>."
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
       "html": "<span class=\"j-smallcaps\">Rozamiento y deslizamiento</span>"
      },
      {
       "mota": "testua",
       "html": ". Una bola de billar se mueve con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>, sin deslizar, sobre una mesa horizontal hasta chocar frontalmente con otra bola idéntica que está en reposo. Como el rozamiento entre las bolas es despreciable, al principio la primera bola se queda girando en el punto de choque y la otra sale con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> sin girar (es decir, aunque cede todo el momento lineal a la otra, la primera bola conserva todo el momento angular intrínseco); pero, por el rozamiento con el suelo, esos movimientos irán cambiando y al final las dos bolas se moverán sin deslizar. Calcula las velocidades finales, el momento lineal total y la proporción de energía perdida. ¿Cómo cambia la distancia entre las bolas? ¿Se conserva el momento angular respecto a algún punto? ¿Y el momento angular intrínseco? Entre esos resultados, ¿cuál depende del coeficiente de rozamiento? Comenta los resultados."
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
       "html": "La cuerda de la figura une un punto fijo con un extremo de la varilla. Demuestra que la cuerda y la varilla no pueden estar durante todo el movimiento en la misma recta (como una sola varilla) bajo la acción exclusiva de la gravedad. <br>  <em>Sugerencia</em>: Supón que ese movimiento puede darse y estudia cómo es la fuerza ejercida por la cuerda."
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
       "html": "Un cilindro hueco que gira con velocidad angular <math display=\"inline\"><mi>ω</mi></math> en torno a su eje de simetría se coloca en un rincón, como se muestra en la figura. La pared y el suelo son del mismo material y el coeficiente de rozamiento dinámico con el cilindro es <math display=\"inline\"><mi>μ</mi></math>. ¿Cuánto tiempo necesitará el cilindro para pararse? ¿Cuántas vueltas dará?"
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
       "html": "El coeficiente de rozamiento estático entre el disco homogéneo de la figura y la mesa horizontal es <math display=\"inline\"><mi>μ</mi></math>. ¿Cómo debe ser la masa <math display=\"inline\"><mi>M</mi></math> para que el disco se mueva sin deslizar? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Haz hipótesis de simplificación adecuadas."
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
       "html": "El cubo y el cilindro de la figura tienen la misma masa y las masas de la cuerda y de la polea son despreciables. Si el coeficiente de rozamiento dinámico entre el cubo y el plano horizontal es <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>B</mi></msub><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, ¿cuál es el valor mínimo del coeficiente de rozamiento estático entre el cilindro y el plano inclinado para que baje por el plano sin deslizar?"
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
       "html": "El disco de la figura cae en un plano vertical por efecto de la gravedad. La mesa horizontal es lisa. El bloque y el disco están unidos mediante una cuerda enrollada en este último. El centro de masas del disco cae en dirección vertical. ¿Qué condición debe cumplirse para que esto último sea cierto? Calcula los movimientos del bloque y del disco. ¿Caería más deprisa el disco si el otro extremo de la cuerda estuviera atado a una polea?"
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
       "html": "¿Dónde debe golpear el taco horizontal para que la bola de billar arranque sin deslizar?"
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
       "html": "Los dos discos de la figura pueden girar sin rozamiento en torno a ejes verticales. Inicialmente el de masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> gira con velocidad angular <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y el de masa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> está en reposo. Cuando se ponen en contacto, el de la izquierda hará mover al otro, a causa del rozamiento entre ambos. ¿Cuál será la velocidad angular de cada disco al final, cuando desaparece el deslizamiento en el punto de contacto? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Los momentos de inercia de los discos son <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>I</mi><mn>2</mn></msub></math>."
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
       "html": "Un aro sobre una mesa horizontal larga, además de girar con velocidad angular <math display=\"inline\"><mi>ω</mi></math>, se mueve con velocidad lineal <math display=\"inline\"><mi>v</mi></math>. ¿Cuándo recorrerá más camino, si al principio <math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><mn>0</mn></mrow></math> o cuando en todos los instantes <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>0</mn></mrow></math>? (La velocidad lineal inicial es la misma en los dos casos.)  <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": El signo de la derivada de la siguiente integral se calcula fácilmente sin resolver la integral elíptica: <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mfrac><mrow><mn>1</mn><mo>−</mo><mi>λ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></msqrt></mfrac><mi>d</mi><mi>φ</mi><mi>.</mi></mrow></math>"
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
       "html": "Una varilla uniforme puede girar en un plano vertical en torno a una articulación lisa. Si se suelta desde la posición vertical, ¿cuáles son la componente horizontal <math display=\"inline\"><msub><mi>F</mi><mi>x</mi></msub></math> y la componente vertical <math display=\"inline\"><msub><mi>F</mi><mi>y</mi></msub></math> de la reacción ejercida por la articulación? ¿Puede ser cero una u otra en algún instante? ¿Puede cambiar su signo? ¿Cuándo será máximo (mínimo) <math display=\"inline\"><msub><mi>F</mi><mi>y</mi></msub></math>?"
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
       "html": "Las longitudes de las aristas de un paralelepípedo son <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>b</mi><mo>&lt;</mo><mi>c</mi></mrow></math>. <br> (a) Se coloca en un plano como se muestra a la izquierda de la figura y, al aumentar poco a poco la inclinación del plano, en un instante el bloque empieza a deslizar. <br> (b) Si se coloca en la posición de la derecha, en cambio, al aumentar la inclinación el bloque vuelca, antes de empezar a deslizar. <br> Con esa información, ¿qué podemos decir sobre el coeficiente de rozamiento estático entre el plano y el bloque?"
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
       "html": "<span class=\"j-smallcaps\">Plataforma acelerada</span>"
      },
      {
       "mota": "testua",
       "html": ". Una plataforma horizontal se mueve con aceleración constante <math display=\"inline\"><mi>a</mi></math>, en dirección perpendicular al eje de rotación de un cilindro homogéneo de radio <math display=\"inline\"><mi>r</mi></math> situado sobre ella, como se muestra en la figura. El cilindro no desliza en la plataforma. <br> ¿Cómo se escribe, en cada instante, la velocidad angular del cilindro usando las velocidades de la plataforma y del centro de masas del cilindro? Calcula la aceleración del centro de masas del cilindro (en el laboratorio y en el sistema de la plataforma). ¿Cómo es el coeficiente de rozamiento estático? ¿Qué cambia en tus respuestas si en lugar del cilindro se usa una esfera maciza?"
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
       "html": "Del disco homogéneo de radio <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> se ha recortado el disco de radio <math display=\"inline\"><mi>a</mi></math>, como se muestra en la figura. Calcula dónde está el centro de masas y cuál es el momento de inercia respecto al eje perpendicular que pasa por él. ¿Dónde hay que aplicar el impulso horizontal <math display=\"inline\"><mi>J</mi></math> para que el disco arranque sin deslizar?"
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
       "html": "El disco interior del giroscopio de la figura gira rápidamente en un plano vertical, como se muestra. ¿Qué ocurrirá si se hace girar el eje vertical en el sentido de la figura?"
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
       "html": "Los centros de los dos cilindros de la figura están unidos por una varilla ligera. Las masas y los radios de los cilindros son iguales, <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>R</mi></math>, pero el de arriba es hueco y el de abajo macizo. Si se mueven sin deslizar por el plano inclinado de la figura, ¿cuál es la aceleración del centro de masas? ¿Cómo es la tensión en la varilla: compresión o tracción? ¿Cuál es su valor? ¿Cómo cambian las respuestas si el cilindro de arriba es macizo y el de abajo hueco?"
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
       "html": "El disco homogéneo de la figura se suelta desde el punto inferior del plano, cuando gira con velocidad angular <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>. El coeficiente de rozamiento dinámico entre el disco y el plano es <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msqrt><mn>3</mn></msqrt></mrow></math> y <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. <br> (a) ¿Cuándo y dónde termina el deslizamiento del disco? <br> (b) ¿Cuándo y dónde alcanza la altura máxima? <br> (c) ¿Cuándo vuelve al punto inicial? <br> (d) ¿Qué proporción de la energía cinética se pierde durante el viaje?"
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
       "html": "Los cilindros paralelos idénticos de la figura giran con velocidades angulares iguales <math display=\"inline\"><mi>ω</mi></math> en torno a ejes verticales lisos. Si, tras acercarlos lentamente, se ponen en contacto entre sí, ¿cuáles serán las velocidades angulares de los cilindros cuando lleguen a la situación estable? ¿Qué proporción de la energía cinética se pierde en todo el proceso?"
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
       "html": "La varilla de la figura, que puede girar en un plano vertical en torno al eje liso superior, está en equilibrio hasta que la golpea una bolita que llega en dirección perpendicular. El choque es elástico y después la partícula se mueve en la misma dirección. Calcula cuáles son la velocidad de la bolita y la velocidad angular de la varilla tras el choque. ¿Puede seguir adelante la bolita tras el choque? ¿Cómo hay que elegir la velocidad <math display=\"inline\"><mi>v</mi></math> para que la varilla llegue hasta la posición horizontal? ¿Cuál es el impulso que sufre la articulación en el choque? ¿Cómo hay que elegir la distancia <math display=\"inline\"><mi>d</mi></math> para que dicho impulso sea nulo?"
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
       "html": "La cuerda sin masa atada a un punto es paralela al plano de la figura y se enrolla en el canal estrecho del ecuador del disco. Los coeficientes de rozamiento estático y dinámico entre el disco y el plano son <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>e</mi></msub><mo>&gt;</mo><msub><mi>μ</mi><mi>d</mi></msub></mrow></math>. Al aumentar poco a poco la inclinación <math display=\"inline\"><mi>α</mi></math> del plano, ¿cuándo empezará a deslizar el disco? ¿Cuál será entonces la aceleración del centro de masas? <br>"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Desprecia el grosor del disco."
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
       "html": "La placa cuadrada de la figura puede girar en torno a la articulación lisa del borde. Inicialmente está en reposo en horizontal y sobre ella se ha colocado un bloque. El coeficiente de rozamiento estático entre el bloque y la placa es <math display=\"inline\"><mi>μ</mi></math>. <br> Si el sistema se suelta desde esa configuración, ¿qué ocurrirá (y cuándo) antes: que el bloque se quede atrás o que empiece a deslizar por la placa?"
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
       "html": "¿Cómo debe ser el coeficiente de rozamiento estático para evitar el deslizamiento si el cuerpo móvil de la figura es <br> (a) un cilindro hueco, <br> (b) un cilindro macizo homogéneo, <br> (c) una esfera hueca, <br> (d) una esfera maciza homogénea? <br> (e) ¿Dependen las respuestas del radio del cuerpo?"
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
       "html": "El cuerpo de la figura puede ser un disco delgado homogéneo o una esfera homogénea. El centro del cuerpo está unido a la pared mediante un muelle de constante <math display=\"inline\"><mi>k</mi></math>. El coeficiente de rozamiento estático entre el cuerpo y el suelo es <math display=\"inline\"><mi>μ</mi></math>. ¿Cuál es, en cada caso, la amplitud máxima de las oscilaciones para que el cuerpo no deslice?"
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
       "html": "Los dos cilindros homogéneos de la figura son idénticos y la barra que tienen encima tiene también la misma masa. Calcula las aceleraciones de los centros de los cilindros y de la barra, en la configuración de la figura, cuando no hay deslizamiento. Los materiales de la barra y del plano son iguales. Ahora el sistema parte del reposo desde la configuración <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>. Al aumentar poco a poco ese ángulo, ¿cuál empezará a deslizar antes: la barra respecto a los cilindros o los cilindros respecto al plano? <br>  <em>Nota</em>: En todo el proceso el sistema está en el plano inclinado, sin llegar al suelo horizontal."
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
       "html": "La longitud de la varilla de la figura es <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> y está en reposo sobre una mesa horizontal lisa. Se le aplica el impulso horizontal perpendicular <math display=\"inline\"><mi>J</mi></math> que se muestra en la figura. ¿Cómo debe ser la distancia <math display=\"inline\"><mi>d</mi></math> para que, en cuanto se aplique el impulso, todos los puntos de la varilla se muevan en el sentido del impulso?"
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
       "html": "(Euler, 1781). El centro de masas <math display=\"inline\"><mi>Z</mi></math> del disco delgado de la figura está a la distancia <math display=\"inline\"><mrow><mi>R</mi><mi>/</mi><mn>2</mn></mrow></math> del centro geométrico <math display=\"inline\"><mi>O</mi></math>. El radio de giro en torno al centro de masas es <math display=\"inline\"><mrow><msup><mi>K</mi><mo>*</mo></msup><mo>=</mo><mi>R</mi><mi>/</mi><mn>2</mn></mrow></math>. El disco se mueve en su plano vertical, sin deslizar, sobre el suelo horizontal. Si en la configuración de la figura la velocidad angular del disco es <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>, ¿cuál será la velocidad angular cuando el ángulo de rotación medido desde esa configuración es <math display=\"inline\"><mi>φ</mi></math>? ¿Cuál es el valor mínimo de <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> para que el centro <math display=\"inline\"><mi>O</mi></math> se mueva siempre en el mismo sentido? ¿Cambiará el sentido de la velocidad horizontal del punto <math display=\"inline\"><mi>Z</mi></math> si no cambia el de <math display=\"inline\"><mi>O</mi></math>? Si <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> es pequeño, ¿cuál será la frecuencia de las pequeñas oscilaciones?"
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
       "html": "Los dos cilindros homogéneos de la figura tienen un eje de rotación común. El interior tiene masa <math display=\"inline\"><mi>m</mi></math>, su radio es <math display=\"inline\"><mi>R</mi></math> y puede girar sin rozamiento en torno al eje de simetría. La masa del cilindro exterior es <math display=\"inline\"><mi>m</mi></math> y sus radios interior y exterior <math display=\"inline\"><mi>R</mi></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math>, respectivamente. El cilindro exterior gira sin deslizar sobre el suelo horizontal. El muelle que une los dos cilindros ejerce el momento de fuerzas <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>α</mi></mrow></math>, cuando el ángulo entre las orientaciones relativas de los cilindros es <math display=\"inline\"><mi>α</mi></math>. Resuelve las ecuaciones del movimiento si inicialmente los dos cilindros están en reposo, pero el interior está girado un ángulo <math display=\"inline\"><msub><mi>α</mi><mn>0</mn></msub></math> respecto al exterior."
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
       "html": "<span class=\"j-smallcaps\">Chimenea</span>"
      },
      {
       "mota": "testua",
       "html": ". Estudiemos la caída de una chimenea, usando muchas hipótesis de simplificación.<span class=\"j-oin\">[Para un estudio más profundo, véanse los artículos [116] y [77].]</span> La chimenea es homogénea y estrecha. Su masa, longitud y radio son <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>L</mi></mrow></math> y <math display=\"inline\"><mrow><mi>r</mi><mo>≪</mo><mi>L</mi></mrow></math>, respectivamente. Al caer, la base <math display=\"inline\"><mi>O</mi></math> está en reposo y el momento de fuerzas que sufre allí es despreciable. Las fuerzas ejercidas por la parte inferior sobre la parte superior de longitud <math display=\"inline\"><mrow><mi>γ</mi><mi>L</mi></mrow></math> son las de la figura. Calcula <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mi>N</mi></math>. Usa que <math display=\"inline\"><mrow><mi>r</mi><mo>≪</mo><mi>L</mi></mrow></math> para deducir que la chimenea se romperá a la distancia <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math> de la base."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Ecuaciones de Euler])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Energía cinética intrínseca en el movimiento libre</span>"
      },
      {
       "mota": "testua",
       "html": ". Supongamos que un sólido rígido está en movimiento libre, es decir, que el momento total producido por las fuerzas externas es cero. Demuestra que la energía cinética correspondiente a la rotación en torno al centro de masas es una constante del movimiento."
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
       "html": "La placa delgada de la figura tiene masa <math display=\"inline\"><mi>m</mi></math> y gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno al eje <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math>. Halla el momento de fuerzas que le ejercen los soportes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>."
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
       "html": "Las masas de las varillas del sistema plano de la figura son despreciables. Si gira con velocidad angular constante, ¿cuál es el momento de fuerzas ejercido por los soportes lisos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>? Si se quitan los soportes, ¿en torno a qué dirección puede girar con velocidad angular constante sin sufrir ningún momento de fuerzas?"
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
       "html": "La masa, el radio y el grosor del disco de la figura son <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>R</mi></mrow></math> y <math display=\"inline\"><mi>d</mi></math>, respectivamente. El disco gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno a un eje fijo que forma el ángulo <math display=\"inline\"><mi>α</mi></math> con la perpendicular. Calcula el momento angular del disco y el momento de fuerzas ejercido por el eje."
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
       "html": "El radio del disco delgado de la figura es <math display=\"inline\"><mi>R</mi></math> y gira con velocidad angular constante <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> en torno al eje de simetría horizontal. El propio eje gira con velocidad angular constante <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math> en torno a la vertical. Elige un triedro adecuado y calcula el momento angular del disco y el momento de fuerzas ejercido por los soportes."
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
       "html": "<span class=\"j-smallcaps\">Constantes del movimiento</span>"
      },
      {
       "mota": "testua",
       "html": ". Considera las ecuaciones de Euler en el caso del movimiento libre (recuérdese la sección 5.5.1). Demuestra que las dos magnitudes siguientes son constantes del movimiento: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>F</mi><mn>1</mn></msub><mo>≡</mo><msub><mi>I</mi><mi>x</mi></msub><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mi>y</mi></msub><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><msubsup><mi>ω</mi><mi>z</mi><mn>2</mn></msubsup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>F</mi><mn>2</mn></msub><mo>≡</mo><msubsup><mi>I</mi><mi>x</mi><mn>2</mn></msubsup><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>I</mi><mi>y</mi><mn>2</mn></msubsup><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>I</mi><mi>z</mi><mn>2</mn></msubsup><msubsup><mi>ω</mi><mi>z</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mtd></mtr></mtable></math> ¿Cuál es el significado físico de estas magnitudes? Explica cómo pueden usarse para obtener la solución del movimiento libre mediante una cuadratura."
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
       "html": "La masa de la placa cuadrada de la figura es <math display=\"inline\"><mi>m</mi></math> y tiene pegada en un vértice una masa puntual <math display=\"inline\"><mi>m</mi></math>. Si gira en torno al eje vertical con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>, ¿cuál es el momento de fuerzas ejercido por los soportes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>? Si quitamos el eje y el sistema está en reposo en el espacio (es decir, sin gravedad), ¿dónde hay que golpear la placa en dirección perpendicular para que arranque sin girar? ¿Cómo se moverá el sistema si se aplica un impulso perpendicular <math display=\"inline\"><mi>J</mi></math> en el centro geométrico de la placa?"
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
       "html": "Las masas y las longitudes de los cuatro lados iguales del marco de la figura son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>a</mi></math>, respectivamente. En un vértice hay pegada una partícula de masa <math display=\"inline\"><mi>M</mi></math> y el sistema gira en torno al eje vertical <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. Calcula las direcciones y los momentos principales de inercia de todo el sólido respecto al centro geométrico <math display=\"inline\"><mi>O</mi></math> del marco. ¿Cuál es el momento de fuerzas ejercido por el eje <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math>?"
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
       "html": "La placa delgada de la figura gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno al eje vertical. <br> (a) Halla el sistema de referencia del sólido situado en el punto <math display=\"inline\"><mi>O</mi></math>, usando las simetrías. <br> (b) Calcula los momentos principales de inercia respecto a <math display=\"inline\"><mi>O</mi></math>, <em>sin hacer ninguna integral</em>. Escribe la matriz de inercia en el sistema del sólido en el punto <math display=\"inline\"><mi>O</mi></math>. <br> (c) ¿Cuál es el momento total de fuerzas ejercido por el eje?"
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
       "html": "La varilla ligera de longitud <math display=\"inline\"><mi>d</mi></math> puede girar sin obstáculos en todas las direcciones en torno a la articulación lisa <math display=\"inline\"><mi>O</mi></math>. En este movimiento particular que estudiamos, la varilla gira en el plano horizontal con velocidad angular constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. Además, el disco homogéneo de masa <math display=\"inline\"><mi>m</mi></math> que tiene en el extremo libre gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno a su eje de simetría. El radio del disco es <math display=\"inline\"><mi>r</mi></math> y su grosor despreciable. Demuestra que debe cumplirse la relación <math display=\"inline\"><mrow><mn>2</mn><mi>g</mi><mi>d</mi><mo>=</mo><mi>ω</mi><mi mathvariant=\"normal\">Ω</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> para que se dé ese movimiento particular."
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
       "html": "<span class=\"j-smallcaps\">Girocompás de Foucault</span>"
      },
      {
       "mota": "testua",
       "html": ". Un disco pesado gira <em>muy deprisa</em> en torno a su eje de simetría. El eje del disco está siempre en el plano horizontal, pero puede girar sin obstáculos en torno al eje vertical. Supongamos que <math display=\"inline\"><mi>θ</mi></math> es el ángulo entre el eje de simetría y el meridiano. Elige el sistema de referencia adecuado y escribe la ecuación del movimiento de <math display=\"inline\"><mi>θ</mi></math>, teniendo en cuenta la velocidad angular (2.97) de la Tierra. Haz la aproximación adecuada y demuestra que el eje oscila en torno al meridiano. ¿Cuál es el período si las oscilaciones son pequeñas? ¿Cómo puede usarse este sistema en lugar de la brújula magnética? ¿Qué ocurre en el polo? ¿Para qué hay que usar <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> muy grande?"
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
       "html": "Una placa elíptica delgada puede girar sin obstáculos en torno a su centro geométrico. La longitud del semieje mayor es <math display=\"inline\"><mi>a</mi></math> y la del otro <math display=\"inline\"><mi>b</mi></math>. Elijamos el sistema del sólido que se muestra en la figura. Inicialmente la velocidad del punto <math display=\"inline\"><mi>A</mi></math> era <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>A</mi></msub><mo>=</mo><mi>c</mi><mi>μ</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> y la componente normal de la velocidad del punto <math display=\"inline\"><mi>B</mi></math> era <math display=\"inline\"><mrow><msub><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi>B</mi></msub><mo>=</mo><mi>b</mi><mi>d</mi><mi>μ</mi><mi>/</mi><mi>a</mi></mrow></math>, donde <math display=\"inline\"><mi>μ</mi></math> es una constante positiva, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mo>≡</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. La masa de la placa es <math display=\"inline\"><mi>m</mi></math> y su grosor despreciable. Demuestra que estos son los momentos principales de inercia: <math display=\"block\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>b</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mi>y</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mi>z</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Escribe las ecuaciones de Euler. Usa dos constantes del movimiento y las condiciones iniciales para hallar la ecuación de evolución de la componente <math display=\"inline\"><msub><mi>ω</mi><mi>z</mi></msub></math>. Integra esa ecuación de evolución y calcula las otras dos componentes de la velocidad angular. ¿Cómo será el movimiento de la placa pasado un tiempo largo?"
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
       "html": "La longitud y la masa de la varilla de la figura son <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> y <math display=\"inline\"><mi>m</mi></math> y puede girar en un plano vertical en torno al eje horizontal <math display=\"inline\"><mi>O</mi></math>. Además, la varilla y dicho eje pueden girar en torno al eje vertical <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math>. Los extremos de la varilla están unidos a este último mediante cuerdas sin masa y anillos, como se muestra en la figura. Todos los rozamientos son despreciables."
      },
      {
       "mota": "testua",
       "html": "(a) Demuestra que <math display=\"inline\"><mi>ω</mi></math> puede girar con velocidad angular constante en la configuración de la figura. Calcula las tensiones de las cuerdas. (b) ¿Qué ocurre si se rompe una cuerda? (c) ¿Y cuando se rompe la otra? (Véase el problema 7.71.)"
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
       "html": "Consideremos una placa delgada libre. Demuestra que el módulo de la proyección de la velocidad angular en el plano de la placa es siempre una constante del movimiento. ¿Qué condición debe cumplirse para que la otra componente (la normal) también sea siempre una constante del movimiento?"
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
       "html": "La barra de la figura puede girar en un plano vertical, sin rozamiento, en torno a la articulación <math display=\"inline\"><mi>A</mi></math>. El extremo inferior está unido al eje vertical liso mediante la cuerda <math display=\"inline\"><mi>S</mi></math> y el anillo <math display=\"inline\"><mi>E</mi></math>. Tras poner el sistema en marcha, gira en torno a la vertical con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>: el ángulo constante entre el eje y la barra es <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> y la cuerda <math display=\"inline\"><mi>S</mi></math> está en horizontal, como se muestra en la figura. Calcula la tensión de las cuerdas y la fuerza de reacción ejercida por la articulación <math display=\"inline\"><mi>A</mi></math>. ¿Cuál es el valor mínimo de <math display=\"inline\"><mi>ω</mi></math> para que <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>? Y, entonces, ¿cuáles pueden ser los valores de <math display=\"inline\"><mi>α</mi></math>?"
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
       "html": "Las varillas del sistema de la figura son ligeras y giran en torno al eje vertical con velocidad angular <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>α</mi><mi>t</mi></mrow></math> (la aceleración angular <math display=\"inline\"><mi>α</mi></math> es constante). Calcula el momento de fuerzas ejercido sobre el sistema."
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
       "html": "La barra homogénea de la figura gira en torno a la vertical con velocidad constante <math display=\"inline\"><mi>ω</mi></math>. Además, puede girar en un plano vertical en torno a la articulación lisa <math display=\"inline\"><mi>A</mi></math>. Usa el sistema de referencia lagrangiano del cuerpo para escribir la ecuación del movimiento (o alguna ley de conservación) y estudiar la existencia y la estabilidad de la configuración de equilibrio relativo de ángulo <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>. Calcula la frecuencia de las pequeñas oscilaciones en torno a ese equilibrio relativo estable."
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
       "html": "El marco cuadrado de la figura tiene masa <math display=\"inline\"><mi>m</mi></math> y puede girar sin rozamiento en torno al eje de simetría horizontal. Además, tiene la masa puntual <math display=\"inline\"><mi>m</mi></math> en un vértice, como se muestra en la figura. (a) Calcula la frecuencia de las pequeñas oscilaciones de amplitud <math display=\"inline\"><mrow><mi>α</mi><mo>≪</mo><mn>1</mn></mrow></math>. ¿Cuál es el momento de fuerzas ejercido por los soportes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> en las pequeñas oscilaciones cuando la masa puntual está (b) en el punto más bajo y (c) en el más alto?"
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
       "html": "La velocidad angular de un sólido rígido es constante en el sistema del espacio. ¿Es siempre constante el momento angular en el sistema del espacio? ¿Y en el sistema del cuerpo?"
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
       "html": "El plano principal de una peonza simétrica es <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> y el único momento de fuerzas que sufre, producido por unos pequeños cohetes, es <math display=\"inline\"><mrow><mi>N</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, en el triedro del cuerpo, con la constante <math display=\"inline\"><mi>N</mi></math>. Resuelve las ecuaciones de Euler y deduce que el módulo de la velocidad angular va aumentando y que la trayectoria del extremo de su proyección en el plano principal es elíptica. <br>  <em>Sugerencia</em>: El cambio de variable <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>u</mi><mo>≡</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></math> puede ser útil."
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
       "html": "Un cilindro homogéneo puede girar sin rozamiento en torno al eje perpendicular horizontal <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> que pasa por su centro. Se hace girar el eje con velocidad angular vertical constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. La longitud del cilindro es <math display=\"inline\"><mi>l</mi></math> y su radio <math display=\"inline\"><mi>r</mi></math>. El ángulo entre el cilindro y la horizontal es <math display=\"inline\"><mi>θ</mi></math>. Escribe la ecuación de evolución de <math display=\"inline\"><mi>θ</mi></math>. Calcula las configuraciones de equilibrio relativo y estudia su estabilidad. Calcula la frecuencia de las pequeñas oscilaciones en torno al equilibrio relativo estable. ¿Cuál es la reacción del eje <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> en las configuraciones de equilibrio relativo?"
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
       "html": "La masa del aro de la figura es <math display=\"inline\"><mi>M</mi></math> y su radio <math display=\"inline\"><mi>R</mi></math>. La masa de la bolita de diámetro despreciable, fija en la posición que se muestra en la figura, es <math display=\"inline\"><mi>m</mi></math>. El sistema se hace girar en torno al diámetro vertical del aro con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mrow><mi>θ</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mi>π</mi></mrow></math> para que el momento de fuerzas respecto a <math display=\"inline\"><mi>O</mi></math> que sufre el eje sea cero? ¿Puede hacerse siempre esa elección? ¿Cuál es entonces la fuerza de reacción ejercida por el eje?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Miscelánea])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Peonza simétrica</span>"
      },
      {
       "mota": "testua",
       "html": ". Estudiemos la peonza simétrica de la figura 5.11. El vector unitario en la dirección del eje de simetría es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒏</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mi>/</mi><mi>R</mi></mrow></math>. Demuestra que se cumple <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒏</mi></mrow></math> y que, en consecuencia, la velocidad angular puede escribirse siempre de la siguiente forma, en función de una función adecuada <math display=\"inline\"><mrow><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒏</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒏</mi><mi>.</mi></mrow></math>"
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
       "html": "¿Puede girar un sólido rígido con velocidad angular constante en torno a un eje no principal, <em>bajo fuerzas externas</em>? ¿Y si el sólido es <em>libre</em>?"
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
       "html": "Pedro (Peru) tiene que abrir (lentamente) la trampilla para bajar al sótano. Se le han ocurrido tres métodos: tirar <em>siempre</em> del extremo libre (a) en vertical, (b) perpendicularmente a la trampilla y (c) en horizontal. ¿En qué caso tendrá que hacer la mayor (la menor) fuerza al principio? ¿Y al final? En conjunto, ¿cómo hará el trabajo mínimo?"
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
       "html": "¿Puede ocurrir que el momento angular de un sólido rígido sea <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>≠</mo><mn>0</mn></mrow></math> en el laboratorio y <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math> en el sistema del centro de masas?"
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
       "html": "Las dos esferas macizas homogéneas idénticas de la figura giran con velocidad angular <math display=\"inline\"><mi>ω</mi></math> en las direcciones perpendiculares que se muestran. Se acercan lentamente, con pequeñas velocidades opuestas, y quedan unidas al tocarse. ¿Cómo se mueve el nuevo cuerpo? ¿Qué fracción de la energía cinética se ha perdido en el proceso? <br>  <em>Nota</em>: La gravedad es despreciable."
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
       "html": "La masa de la placa cuadrada homogénea de la figura es <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> y la longitud de los lados <math display=\"inline\"><mi>a</mi></math>. Puede girar sin rozamiento en torno a las articulaciones <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>. Inicialmente está en reposo, pero una partícula de masa <math display=\"inline\"><mi>m</mi></math> que se acerca en dirección perpendicular con velocidad <math display=\"inline\"><mi>v</mi></math> golpea un vértice de la placa y se queda pegada. Halla la velocidad angular de la placa, tras el choque, y la reacción ejercida por las articulaciones."
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
       "html": "El aro de la figura puede girar sin obstáculos en torno al eje horizontal <math display=\"inline\"><mi>X</mi></math>. La masa y el radio del aro son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>R</mi></mrow></math>, respectivamente, y tiene pegada una partícula de masa <math display=\"inline\"><mi>m</mi></math>, en la posición que se muestra. Inicialmente el aro está en reposo en la posición de la figura, pero cuando la partícula de masa <math display=\"inline\"><mi>m</mi></math> que llega con velocidad <math display=\"inline\"><mi>v</mi></math> en dirección perpendicular golpea la que está pegada al aro, las dos partículas quedan unidas. <br> Calcula el impulso lineal y angular ejercido por el eje en el choque. ¿Cuál es la amplitud de las oscilaciones del sistema tras el choque? ¿Qué condición debe cumplirse para que dicha amplitud sea pequeña? ¿Cuál es entonces el período de las pequeñas oscilaciones? <br>  <em>Nota</em>: Usa el triedro de la figura para simplificar el cálculo."
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
       "html": "Una placa cuadrada delgada está en reposo en el espacio, sin gravedad. La masa de la placa es <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> y la longitud de los lados <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>. Una partícula de masa <math display=\"inline\"><mi>m</mi></math> que llega en dirección perpendicular golpea un vértice de la placa y queda pegada. Si la velocidad de la partícula era <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>, ¿cómo se mueve el sistema tras el choque?"
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
       "html": "<span class=\"j-smallcaps\">Peonza simétrica</span>"
      },
      {
       "mota": "testua",
       "html": ". Demuestra que el ángulo entre la velocidad y el momento angular de la peonza simétrica de la sección 5.5.2 es <math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>I</mi><mi>z</mi></msub><mo>−</mo><msub><mi>I</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>+</mo><msub><mi>I</mi><mi>x</mi></msub><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac></mrow></math>, si el ángulo entre el eje de simetría y la velocidad angular es <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>α</mi><mo>≤</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>. Demuestra que cuando <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>z</mi></msub></mrow></math> el ángulo <math display=\"inline\"><mi>θ</mi></math> está en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, pero cuando <math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>I</mi><mi>x</mi></msub></mrow></math> tiene un valor máximo. ¿Cuáles son ese valor máximo y los correspondientes ángulo <math display=\"inline\"><mi>α</mi></math> y cociente <math display=\"inline\"><mrow><msub><mi>I</mi><mi>z</mi></msub><mi>/</mi><msub><mi>I</mi><mi>x</mi></msub></mrow></math>?"
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
       "html": "La placa cuadrada delgada de la figura puede girar sin obstáculos en torno al eje horizontal <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math>. La masa de la placa es <math display=\"inline\"><mi>m</mi></math> y la longitud de los lados <math display=\"inline\"><mi>a</mi></math>. Inicialmente está en reposo en la posición vertical de equilibrio estable, pero una partícula de la misma masa que llega en dirección perpendicular golpea un vértice y queda pegada. Tras el choque el sistema llega hasta la posición vertical inestable y se queda allí (un instante, al menos). Calcula la velocidad inicial de la partícula, la proporción de energía cinética perdida en el choque y el impulso lineal y angular ejercido por el eje (en el choque)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Exámenes resueltos (1996-2000), mk:5",
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
     "html": "Dos bolas puntuales idénticas, de masa <math display=\"inline\"><mi>M</mi></math>, están unidas por una varilla rígida de masa despreciable y longitud <math display=\"inline\"><mi>a</mi></math>. En el vacío, el sistema gira en torno a un eje que atraviesa su centro de masas con velocidad angular <math display=\"inline\"><mi>ω</mi></math>. En un instante dado, una bola choca con otra bola, en reposo y puntual, también de masa <math display=\"inline\"><mi>M</mi></math>, que queda pegada a la primera. a) Calcula la posición y la velocidad del centro de masas del sistema completo de tres partículas en el instante anterior al choque. b) ¿Cuál es el momento angular del sistema de tres partículas respecto a su centro de masas en el instante anterior al choque? ¿Y inmediatamente después? c) ¿Cuál es la velocidad angular del sistema respecto al centro de masas tras el choque? d) ¿Cuáles son las energías cinéticas inicial y final?"
    },
    {
     "mota": "testua",
     "html": "[Figura: diagrama de dos ejes cartesianos (<math display=\"inline\"><mi>z</mi></math> vertical, <math display=\"inline\"><mi>x</mi></math> hacia el observador, <math display=\"inline\"><mi>y</mi></math> horizontal hacia la derecha). Izquierda (estado inicial, justo antes del choque): sobre el eje <math display=\"inline\"><mi>y</mi></math>, la masa 1 en el extremo izquierdo de la varilla, los puntos O y G cerca del centro (O = centro de la varilla, G un poco a la derecha), la masa 2 en el otro extremo y la masa 3 (la bola en reposo) junto a la 2 con una pequeña flecha; el vector <math display=\"inline\"><mi>ω</mi></math> vertical sobre O. Derecha (estado final, justo después del choque): la masa 1 a la izquierda, O y G en el centro, y la masa conjunta &quot;2+3&quot; a la derecha con una flecha; el vector <math display=\"inline\"><msup><mi>ω</mi><mo>′</mo></msup></math> vertical sobre O.]"
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
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "En la figura se muestran los dos estados, el inicial y el final, justo antes de la colisión y fusión de las dos masas de la derecha, y justo después de producirse esta. Asimismo, se representan los centros de masas del conjunto de las dos masas unidas por la varilla (el punto O) y del conjunto de las tres masas (el punto G)."
    },
    {
     "mota": "testua",
     "html": "<strong>a)</strong>"
    },
    {
     "mota": "testua",
     "html": "La posición del centro de masas G se obtiene aplicando la definición de centro de masas. En el instante justo anterior a la colisión, en la posición en que hemos colocado la varilla y las masas, solo nos interesa su coordenada <math display=\"inline\"><mi>y</mi></math>, pues las otras dos son, naturalmente, nulas. A partir de los datos del problema, esta coordenada será:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/e63cece34740be96.svg\" alt=\"y_(upright(G)) = frac(sum_i m_i y_i, sum_i m_i) = frac(M dot.op 0 + M dot.op a + M dot.op a, 3 M) = frac(2 a, 3) #h(2em) arrow.r #h(2em) upright(bold(r))_(upright(G)) = (0 \\, med frac(2 a, 3) \\, med 0)\" style=\"width:37.061em;height:3.388em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "En cuanto a la velocidad del centro de masas G, aplicaremos la relación equivalente a la anterior. Necesitaremos las velocidades de las masas 1 y 2; estas, como sabemos, describen un movimiento de rotación en torno a O con velocidad angular <math display=\"inline\"><mi>ω</mi></math>. Así pues, y en las posiciones indicadas, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub></mrow></math>. Teniendo en cuenta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, los valores de las velocidades de las dos primeras masas son los siguientes: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>ω</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>ω</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>. Esto nos lleva a lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/fe2b2859068f1fbb.svg\" alt=\"dot(x)_(upright(G)) = frac(sum_i m_i dot(x)_i, sum_i m_i) = frac(M dot.op omega a \\/ 2 + M dot.op \\( - omega a \\/ 2 \\) + M dot.op 0, 3 M) = 0 #h(2em) arrow.r #h(2em) upright(bold(v))_(upright(G)) = \\( 0 \\, 0 \\, 0 \\)\" style=\"width:40.535em;height:3.388em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde nos hemos limitado a calcular la única componente que inicialmente no es nula (aunque al final, como se ve, esta también es nula). <em>La velocidad del centro de masas G del conjunto de las tres partículas es nula justo antes del choque.</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>b)</strong>"
    },
    {
     "mota": "testua",
     "html": "La expresión del momento angular del sistema de tres partículas, respecto al centro de masas del sistema, G, justo antes del choque, será <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo>×</mo><msub><mi>m</mi><mi>i</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>i</mi></msub></mrow></math>. En efecto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mi>M</mi><mo>⋅</mo><mfrac><mrow><mi>ω</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mi>a</mi><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mi>M</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mrow><mi>ω</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mi>a</mi><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mi>M</mi><mo>⋅</mo><mn>0</mn><mo>=</mo><mfrac><mrow><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el cálculo de esta expresión hemos tenido en cuenta que las velocidades de las partículas respecto a G son iguales a las medidas respecto a un sistema de referencia <em>externo</em> (donde están pintados los ejes), ya que <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi mathvariant=\"normal\">G</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Las fuerzas que intervienen en el choque son <em>internas</em> al sistema, así que no cambiarán ni el momento lineal ni el angular. Por tanto, la velocidad del centro de masas G seguirá siendo nula (seguirá en reposo) y el momento angular seguirá siendo el que acabamos de calcular:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi></mrow></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>c)</strong>"
    },
    {
     "mota": "testua",
     "html": "De esta última relación, y teniendo en cuenta que el centro de masas G es el centro instantáneo de rotación (y, en este caso, permanente), podemos obtener la nueva velocidad angular del sistema <math display=\"inline\"><msup><mi>ω</mi><mo>′</mo></msup></math>. Por la simetría del problema, también tendrá la dirección del eje <math display=\"inline\"><mi>z</mi></math>, así que escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mrow><mi mathvariant=\"normal\">G</mi><mo mathvariant=\"normal\">,</mo><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>ω</mi><mo>′</mo></msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mfrac><mi>a</mi><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>×</mo><mn>2</mn><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>ω</mi><mo>′</mo></msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>3</mn></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En efecto, igualando los términos, hemos llegado finalmente a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>ω</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>ω</mi></mrow><mn>4</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>d)</strong>"
    },
    {
     "mota": "testua",
     "html": "Las energías cinéticas antes y después del choque se obtienen simplemente aplicando la expresión de la energía cinética de un sistema de partículas, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>m</mi><mi>i</mi></msub><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>. Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>ω</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>a</mi><msup><mi>ω</mi><mo>′</mo></msup></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mn>2</mn><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><msup><mi>ω</mi><mo>′</mo></msup></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>3</mn><mn>16</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde las velocidades de las partículas se han expresado en valor absoluto, ya que aparecen al cuadrado. Se ve que <math display=\"inline\"><mrow><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi></mrow></msub><mo>&lt;</mo><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi></mrow></msub></mrow></math>, como debe ser, pues el choque es inelástico y en él se pierde energía."
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
     "html": "Tenemos una esfera maciza de radio <math display=\"inline\"><mi>R</mi></math>, con un hueco esférico de radio <math display=\"inline\"><mi>r</mi></math>, situado a la distancia <math display=\"inline\"><mi>a</mi></math> del centro. Suponiendo que gira en torno al eje indicado en la figura (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), calcula el ángulo que forman los vectores <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math>."
    },
    {
     "mota": "testua",
     "html": "[Figura (dos diagramas): - Izquierda: esfera maciza de radio <math display=\"inline\"><mi>R</mi></math> con centro <math display=\"inline\"><mi>O</mi></math>; eje vertical (de trazo y punto) etiquetado <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> hacia arriba; eje horizontal (de trazo y punto) etiquetado <math display=\"inline\"><mn>1</mn></math> hacia la derecha, con <math display=\"inline\"><mi>R</mi></math> marcado entre <math display=\"inline\"><mi>O</mi></math> y el punto <math display=\"inline\"><mn>1</mn></math>. Pequeño hueco esférico de radio <math display=\"inline\"><mi>r</mi></math> sobre el eje <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math>, por encima de <math display=\"inline\"><mi>O</mi></math>, a la distancia <math display=\"inline\"><mi>a</mi></math> de <math display=\"inline\"><mi>O</mi></math> (segmento vertical de trazo y punto etiquetado <math display=\"inline\"><mi>a</mi></math>). El eje de rotación <math display=\"inline\"><mi>e</mi></math>, inclinado, pasa por <math display=\"inline\"><mi>O</mi></math>, con el vector <math display=\"inline\"><mi>ω</mi></math> encima; el ángulo entre el eje <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> y el eje <math display=\"inline\"><mi>e</mi></math> (dirección de <math display=\"inline\"><mi>ω</mi></math>) está etiquetado <math display=\"inline\"><mi>α</mi></math>. - Derecha: desde un vértice, el eje vertical etiquetado <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> y el eje horizontal etiquetado <math display=\"inline\"><mn>1</mn></math>; se dibujan los vectores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> y <math display=\"inline\"><mi>ω</mi></math>. El ángulo entre <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> está etiquetado <math display=\"inline\"><mi>β</mi></math>; el ángulo entre <math display=\"inline\"><mrow><mi>z</mi><mo>≡</mo><mn>3</mn></mrow></math> y <math display=\"inline\"><mi>ω</mi></math> está etiquetado <math display=\"inline\"><mi>α</mi></math>.]"
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
     "html": "En la figura hemos dibujado la esfera con el hueco esférico, de modo que el eje O3 (que es, naturalmente, un eje principal) pase por el centro del hueco esférico. Es un sólido rígido con simetría de rotación en torno a este eje O3, así que podremos elegir los otros dos ejes principales perpendiculares entre sí y al eje O3, desde cualquier punto de este. Aquí hemos decidido situarlo en el centro de la esfera grande, con el eje O1 en el plano del papel (en ese instante) y el eje O2 (no dibujado) perpendicular a este plano y hacia atrás."
    },
    {
     "mota": "testua",
     "html": "El tensor de inercia del cuerpo descrito puede obtenerse como la resta de dos tensores de inercia: uno, el correspondiente a la esfera maciza de radio <math display=\"inline\"><mi>R</mi></math>, y el otro, el correspondiente a la esfera maciza de radio <math display=\"inline\"><mi>r</mi></math> que ocuparía el lugar del hueco esférico indicado. Los dos tensores de inercia estarían definidos respecto al sistema de ejes O123 indicado, sistema que coincide con el de los ejes principales de cada cuerpo y del conjunto. Por tanto, los dos tensores son diagonales."
    },
    {
     "mota": "testua",
     "html": "Supondremos que conocemos el momento de inercia de una esfera respecto a un eje que pasa por su centro, y que es <math display=\"inline\"><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, siendo <math display=\"inline\"><mi>M</mi></math> la masa de la esfera <em>maciza</em> de radio <math display=\"inline\"><mi>R</mi></math>. Así pues, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mrow><mn>1</mn><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mn>2</mn><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mn>3</mn><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para calcular los momentos principales de inercia de la esfera pequeña que ocupa el lugar del hueco de la grande, tendremos en cuenta que respecto al eje O3 tendrá la misma expresión formal que la grande, es decir, <math display=\"inline\"><mrow><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> (donde <math display=\"inline\"><mi>m</mi></math> es la masa de la esfera <em>maciza</em> que ocupa el lugar del hueco), mientras que respecto a los otros dos ejes habrá que usar el teorema de Steiner, pues los ejes O1 y O2 están a la distancia <math display=\"inline\"><mi>a</mi></math> del eje de simetría de la esfera pequeña. Así pues, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/5abcbe2dd9ad2fdb.svg\" alt=\"I_(1 \\, m) = I_(2 \\, m) = 2 / 5 m r^2 + m a^2 #h(2em) I_(3 \\, m) = 2 / 5 m r^2\" style=\"width:22.733em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Así pues, los momentos principales de inercia del cuerpo esférico con hueco serán los siguientes:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/b2d341d834203091.svg\" alt=\"I_1 = I_2 = 2 / 5 \\( M R^2 - m r^2 \\) - m a^2 #h(2em) I_3 = 2 / 5 \\( M R^2 - m r^2 \\)\" style=\"width:29.424em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Nos queda expresar la velocidad angular en componentes según los ejes principales. Escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El momento angular del cuerpo descrito se expresará así en el sistema de ejes principales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><msub><mi>ω</mi><mn>1</mn></msub><mo>,</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>ω</mi><mn>2</mn></msub><mo>,</mo><msub><mi>I</mi><mn>3</mn></msub><msub><mi>ω</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>I</mi><mn>3</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde, por economía de escritura, seguiremos designando los momentos de inercia con la notación <math display=\"inline\"><msub><mi>I</mi><mi>i</mi></msub></math>. Como se ve, la componente según el eje O2 es nula, y eso quiere decir que el vector momento angular respecto a O está en el plano formado por el vector <math display=\"inline\"><mi>ω</mi></math> y el eje O3. Podemos obtener de inmediato el ángulo que forma el vector momento angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math> con el eje O3, que llamaremos <math display=\"inline\"><mi>β</mi></math>, y de aquí el ángulo entre <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑳</mi></math>, que será <math display=\"inline\"><mrow><mi>α</mi><mo>−</mo><mi>β</mi></mrow></math>. Se ve que:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><mfrac><msub><mi>L</mi><mn>1</mn></msub><msub><mi>L</mi><mn>3</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>3</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando una relación trigonométrica conocida:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>3</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mn>1</mn><mo>+</mo><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>3</mn></msub></mfrac><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mn>3</mn></msqrt></mrow></math>, lo anterior nos quedará así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>−</mo><msub><mi>I</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><msub><mi>I</mi><mn>3</mn></msub><mo>+</mo><msub><mi>I</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>3</mn><msub><mi>I</mi><mn>3</mn></msub><mo>+</mo><msub><mi>I</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La última expresión anterior nos dice que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es siempre positivo, pues el numerador y el denominador son positivos (los momentos de inercia son <em>siempre</em> positivos). Es decir, <math display=\"inline\"><mrow><mi>α</mi><mo>−</mo><mi>β</mi><mo>≤</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si usamos la notación de las dimensiones geométricas de la esfera exterior y del hueco esférico interior, es fácil ver que la expresión anterior queda así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mfrac><mn>8</mn><mn>5</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>r</mi><mn>3</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mfrac><mn>8</mn><mn>5</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>5</mn></msup><mo>−</mo><msup><mi>r</mi><mn>5</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>r</mi><mn>3</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde las masas <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>m</mi></math> las hemos sustituido en función de la densidad <math display=\"inline\"><mi>ρ</mi></math> del sólido y de las dimensiones geométricas. En esta notación el carácter positivo de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> queda completamente oculto, y por eso se prefiere la notación anterior."
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
     "html": "La rueda de un coche, de 25 cm de diámetro, 10 kg de masa y 10 cm de grosor, está equilibrada (para evitar pares de fuerzas espurios sobre el eje) mediante dos pequeñas piezas de plomo, cada una de 20 g de masa, colocadas en su periferia, una en la cara interior de la rueda y la otra en la exterior, en puntos diametralmente opuestos. Calcula el ángulo que forma el momento angular de las dos piezas con el eje de rotación y haz un esquema cualitativo de la posición de estos tres vectores cuando la rueda gira: el momento angular de las piezas, el momento angular del resto de la rueda y la velocidad angular."
    },
    {
     "mota": "testua",
     "html": "[Figura del enunciado — dos partes: - Izquierda: la rueda vista de canto como un rectángulo, con su altura (grosor) acotada como &quot;10 cm&quot; a la izquierda; en su centro O, una terna de pequeños ejes (z hacia arriba, x hacia el observador, y hacia la derecha). Dos puntos gruesos (las piezas de plomo) en esquinas diametralmente opuestas del rectángulo (uno arriba a la izquierda, otro abajo a la derecha), unidos por líneas de trazo y punto que pasan por O; cada uno en una cara. Debajo, un círculo (la cara de la rueda) con el diámetro horizontal acotado como &quot;25 cm&quot;. - Derecha: diagrama de vectores con origen O y ejes z (arriba), x (hacia el observador), y (hacia la derecha). Tres vectores salen de O hacia arriba: J_rst (inclinado a la izquierda), ω (vertical, según z) y J_trz (inclinado a la derecha), con el ángulo θ marcado entre ω y J_trz.]"
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
     "html": "Consideremos que en un instante dado la rueda y las masas están en la posición de la figura, con las masas en el plano Oyz y el vector velocidad angular es ω = ωk. Si llamamos r al vector de posición de la masa izquierda, el de la derecha será −r, y si la velocidad de la primera es v = ω × r (la masa describe un movimiento circular con velocidad angular ω), la velocidad de la segunda, como puede comprobarse enseguida, será −v. Según la definición del momento angular, cada masa contribuye de la misma manera al momento angular de las dos piezas respecto al punto O. Es decir, el momento angular del conjunto de las dos piezas es el doble del momento angular de una de ellas. Teniendo en cuenta que en la posición indicada r = −0.05(5j − k), con v = 0.25ωi, podremos escribir:"
    },
    {
     "mota": "testua",
     "html": "J_trz = 2r × mv = 0.025mω(j + 5k)"
    },
    {
     "mota": "testua",
     "html": "Es inmediato comprobar que el vector J_trz es perpendicular a r (producto escalar r · J_trz = 0) y que también está en el plano Oyz. El ángulo que forma el momento angular de las piezas con el vector velocidad angular puede determinarse fácilmente por dos procedimientos:"
    },
    {
     "mota": "testua",
     "html": "cos θ = (ω · J_trz) / (|ω||J_trz|) = 0.125mω² / (ω · 0.025mω√26) = 5/√26"
    },
    {
     "mota": "testua",
     "html": "O más fácilmente: a partir de la propia figura de la rueda y las masas, el ángulo θ será igual al ángulo que forma el vector r con el sentido negativo del eje Oy. Es decir:"
    },
    {
     "mota": "testua",
     "html": "tan θ = 1/5 → θ = 11°18&#x27;36&#x27;&#x27;"
    },
    {
     "mota": "testua",
     "html": "En la figura de la derecha se indica la posición de los momentos angulares de las piezas y del resto de la rueda. Sin añadir las dos piezas de plomo, el momento angular total no tendría la dirección del eje de rotación (es decir, el eje de rotación no sería un eje principal de inercia), con los efectos perjudiciales de este hecho sobre el movimiento de rotación (vibraciones, pérdidas de energía, etc.). A falta de esas dos masas, pues, el momento angular del resto, J_rst, describiría un cono en torno al vector velocidad angular, y, por tanto, hay que ir añadiéndole masas colocadas en posiciones estratégicas para que el momento angular total esté en la dirección del eje de rotación."
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
     "html": "El sistema de la figura tiene un sector cilíndrico homogéneo, de abertura <math display=\"inline\"><mi>α</mi></math>, radio <math display=\"inline\"><mi>a</mi></math> y masa <math display=\"inline\"><mi>M</mi></math>, y de su centro de masas cuelga un péndulo de longitud <math display=\"inline\"><mi>l</mi></math> y masa <math display=\"inline\"><mi>m</mi></math>, que solo puede moverse en el plano perpendicular al eje del cilindro (aprovechando una ranura muy estrecha). Calcula el momento de inercia respecto al punto O —correspondiente al eje del cilindro— y el momento de inercia respecto al centro de masas G para el eje paralelo al anterior. Escribe el lagrangiano del sistema en presencia de un campo gravitatorio vertical uniforme."
    },
    {
     "mota": "testua",
     "html": "[Figura izquierda: los sectores cilíndricos (cualquiera) cuelgan del punto O; ejes O, z (hacia arriba) y x (hacia la derecha). Se indican el ángulo <math display=\"inline\"><mi>φ</mi></math> con la vertical, la distancia <math display=\"inline\"><mi>d</mi></math> de O al centro de masas G, el punto G, la masa <math display=\"inline\"><mi>M</mi></math> del sector, y el péndulo que cuelga de G (con ángulo <math display=\"inline\"><mi>θ</mi></math>, longitud <math display=\"inline\"><mi>l</mi></math> y masa <math display=\"inline\"><mi>m</mi></math>).]"
    },
    {
     "mota": "testua",
     "html": "[Figura derecha: el sector abierto simétricamente respecto al eje x, con vértice en O; ejes z (hacia arriba) y x (hacia la derecha). Se muestra el elemento de área situado en el radio <math display=\"inline\"><mi>r</mi></math> y el ángulo <math display=\"inline\"><mi>γ</mi></math>, con los diferenciales <math display=\"inline\"><mrow><mi>d</mi><mi>r</mi></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mi>γ</mi></mrow></math> y el elemento <math display=\"inline\"><mrow><mi>r</mi><mi>d</mi><mi>γ</mi></mrow></math>; el semiángulo <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></math> por debajo del eje <math display=\"inline\"><mi>x</mi></math>; la masa <math display=\"inline\"><mi>M</mi></math>.]"
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
     "html": "Calculemos primero la posición del centro de masas G del sector cilíndrico, usando para ello la figura de la derecha. Con la elección de sistema de ejes utilizada, y suponiendo que el grosor del sector es despreciable frente a las demás dimensiones, nos conviene usar coordenadas polares, y por tanto representaremos el elemento de área directamente en función de estas coordenadas. Además, por simetría, es evidente que la coordenada <math display=\"inline\"><msub><mi>z</mi><mi>G</mi></msub></math> del centro de masas debe ser nula, pues se supone la densidad <math display=\"inline\"><mi>σ</mi></math> constante. Es decir, el centro de masas estará en el eje geométrico del sector cilíndrico, como se muestra en la figura de la izquierda. Nos limitaremos, pues, al cálculo de la coordenada <math display=\"inline\"><msub><mi>x</mi><mi>G</mi></msub></math> del centro de masas. Así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mo>∫</mo><mi>x</mi><mi>d</mi><mi>m</mi></mrow><mrow><mo>∫</mo><mi>d</mi><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><mi>σ</mi><mi>M</mi></mfrac><mo>∫</mo><mi>x</mi><mi>d</mi><mi>A</mi><mo>=</mo><mfrac><mi>σ</mi><mi>M</mi></mfrac><mo>∫</mo><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>r</mi><mi>d</mi><mi>r</mi><mi>d</mi><mi>γ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos hecho <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>σ</mi><mi>d</mi><mi>A</mi></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mi>A</mi><mo>=</mo><mi>r</mi><mi>d</mi><mi>r</mi><mi>d</mi><mi>γ</mi></mrow></math>. Además, si el sector cilíndrico de ángulo <math display=\"inline\"><mi>α</mi></math> tiene masa <math display=\"inline\"><mi>M</mi></math>, la densidad superficial de masa puede escribirse como <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mi>M</mi><mi>/</mi><mi>α</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>, como puede deducirse fácilmente usando como referencia la masa del disco entero. Por último, teniendo en cuenta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>γ</mi></mrow></math>, llegaremos a lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>α</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msup><mi>r</mi><mn>2</mn></msup><mi>d</mi><mi>r</mi><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>α</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>γ</mi><mi>d</mi><mi>γ</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><mrow><mn>3</mn><mi>α</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>α</mi><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para el cálculo del momento de inercia del sector cilíndrico, tendremos en cuenta que respecto al eje de rotación que pasa por O la distribución de masa es la misma que corresponde a un disco entero y, por tanto, la expresión del momento de inercia debe ser formalmente la misma. Otra vía es considerar el sector de abertura <math display=\"inline\"><mi>α</mi></math> como la <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math>-ésima parte de un disco de masa <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>M</mi><mi>/</mi><mi>α</mi></mrow></math>; entonces su momento de inercia será la <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math>-ésima parte del del disco entero. Así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><mfrac><mi>α</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>M</mi></mrow><mi>α</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El momento de inercia del sector respecto al eje que pasa por el centro de masas G y es paralelo al anterior se obtiene aplicando directamente el teorema de Steiner. Como la distancia entre los dos ejes es <math display=\"inline\"><mrow><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mi>d</mi></mrow></math>, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mi>G</mi></msub><mo>=</mo><msub><mi>I</mi><mi>O</mi></msub><mo>−</mo><mi>M</mi><msup><mi>d</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mn>32</mn><mrow><mn>9</mn><msup><mi>α</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[Téngase en cuenta que el momento de inercia respecto al eje que pasa por el centro de masas es siempre el menor, comparado con cualquier eje paralelo a él. De ahí el signo <math display=\"inline\"><mi>−</mi></math> del segundo miembro del teorema de Steiner]."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Función lagrangiana del sistema.</em> Tomemos el conjunto en un instante cualquiera <math display=\"inline\"><mi>t</mi></math>, como se representa en la figura de la izquierda. Supondremos que el campo gravitatorio uniforme actúa en vertical y hacia abajo, con intensidad <math display=\"inline\"><mi>g</mi></math>. En el caso del movimiento del sector cilíndrico, este efectúa una rotación pura en torno al eje que pasa por O, y, por tanto, podemos escribir la energía cinética solo con el término de la energía cinética de rotación. En cuanto a la energía potencial del sector, si el nivel cero de las energías potenciales está en el punto O, será <math display=\"inline\"><mrow><mi>−</mi><mi>M</mi><mi>g</mi><mi>d</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "En cuanto al péndulo, sus coordenadas y velocidades se escribirán así en función de las coordenadas y velocidades generalizadas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/642577bd65f7b446.svg\" alt=\"{x = d sin phi + l sin theta\\\\ z = - \\( d cos phi + l cos theta \\) #h(2em) {dot(x) = d dot(phi) cos phi + l dot(theta) cos theta\\\\ dot(z) = d dot(phi) sin phi + l dot(theta) sin theta\" style=\"width:48.754em;height:1.579em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y, por tanto, el cuadrado de la velocidad será el siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><msup><mi>d</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>l</mi><mi>d</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tras sustituir y simplificar, la función lagrangiana será la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>d</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>l</mi><mi>d</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>M</mi><mi>g</mi><mi>d</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><mrow><mn>3</mn><mi>α</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>α</mi><mn>2</mn></mfrac></mrow></math>."
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un extremo de una barra uniforme de masa <math display=\"inline\"><mi>m</mi></math> y longitud <math display=\"inline\"><mi>l</mi></math> está obligado a moverse a lo largo de un eje vertical sin rozamiento. El otro extremo desliza a lo largo de un plano horizontal, también sin rozamiento. En el instante inicial <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la barra gira en torno al eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> con velocidad angular <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>. Además, en ese mismo instante inicial, <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Si la barra mantiene el contacto con el plano, halla los valores de <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> y <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> en función de <math display=\"inline\"><mi>θ</mi></math>."
    }
   ]
  },
  {
   "id": "a18",
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
     "html": "Asignamos a la barra un sistema de ejes principales con origen en el centro de masas G, de modo que las direcciones de los ejes sean las siguientes: G3, en la dirección longitudinal de la barra; G1 y G2, perpendiculares a la anterior y con G2 siempre paralelo al plano <math display=\"inline\"><mrow><mi>O</mi><mi>x</mi><mi>y</mi></mrow></math>, y G1 forma la terna en la dirección indicada en la figura."
    },
    {
     "mota": "testua",
     "html": "[Figura: la barra, con centro de masas G, situada en una terna x, y, z (vertical). Aparecen los ángulos theta (entre el eje de la barra/G y el eje z) y phi (azimut en el plano horizontal), la velocidad angular omega, el eje de precesión psi respecto a z, y las direcciones de los ejes principales, etiquetadas con los números 1, 2, 3, sobre la barra, con G situado entre O y el punto superior.]"
    },
    {
     "mota": "testua",
     "html": "Resolveremos el problema usando el formalismo lagrangiano y, para ello, tendremos que identificar las variables generalizadas (<math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>φ</mi></math>). La energía cinética de la barra es la suma de la energía cinética de traslación de la masa de la barra situada en el centro de masas y la energía cinética de rotación en torno a un eje que pasa por dicho centro de masas. Escribiremos las coordenadas del centro de masas inicial <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y las velocidades correspondientes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>y</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>z</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>−</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>l</mi><mn>2</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Expresaremos la velocidad angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> en el sistema de ejes principales. De la figura se deduce que en este sistema podremos escribir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝜽</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo>−</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta que los momentos de inercia respecto a los ejes principales en el centro de masas de la barra son <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, la energía cinética total, tras hacer las operaciones adecuadas y simplificar, es la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mn>3</mn></msub><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La energía potencial, por otra parte, será la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por último, la función lagrangiana puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Escribamos las ecuaciones del movimiento para las dos variables generalizadas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/6161c74063684f4d.svg\" alt=\"frac(partial L, partial dot(theta)) = 1 / 3 m l^2 dot(theta) #h(2em) #h(2em) frac(partial L, partial theta) = 1 / 3 m l^2 dot(phi)^2 sin theta cos theta + 1 / 2 m g l sin theta\" style=\"width:29.983em;height:2.805em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/e42f5f7d04dede30.svg\" alt=\"frac(partial L, partial dot(phi)) = 1 / 3 m l^2 dot(phi) sin^2 theta #h(2em) #h(2em) frac(partial L, partial phi) = 0\" style=\"width:18.274em;height:2.870em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Es decir, tras simplificar:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la segunda hemos usado las condiciones de contorno que nos da el texto del problema: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. De la segunda despejamos <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> en función de <math display=\"inline\"><mi>θ</mi></math> y lo sustituimos en la primera, y nos queda lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es la ecuación diferencial del movimiento para la coordenada <math display=\"inline\"><mi>θ</mi></math>, que se integra fácilmente. Multiplicando solo por <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>z, aparecen integrales inmediatas, y el resultado es el siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>−</mi><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mn>4</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>l</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para determinar el valor de la constante de integración volvemos a usar las condiciones iniciales. Siendo <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, de ahí:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mn>2</mn></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><msqrt><mn>2</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo en la expresión anterior, obtenemos <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. A continuación escribimos los dos valores pedidos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/872dceaa4f59dc60.svg\" alt=\"dot(theta)^2 = omega_0^2 / 2 [1 - frac(1, 2 sin^2 theta)] + frac(3 g, 2 l) [sqrt(2) - 2 cos theta] #h(2em) #h(2em) dot(phi) = frac(omega_0^2, 2 sin^2 theta)\" style=\"width:31.687em;height:2.888em\" loading=\"lazy\">"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Otro método:</strong> Para llegar a los mismos resultados usaremos dos principios de conservación. En primer lugar, el sistema es conservativo y, por tanto, se conservará la energía mecánica total. Según los cálculos del apartado anterior, la energía mecánica se escribe así:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos evaluado esta energía en el instante inicial. Simplificando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mn>2</mn></mfrac><mo>−</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mn>2</mn></msqrt><mo>−</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Además, no hay ninguna fuerza contra la dirección perpendicular al eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> y, por tanto, se conservará el momento angular en la dirección de este eje. Tendrá dos términos: el momento angular de toda la masa de la barra concentrada en el centro de masas G (que se mueve con la velocidad del centro de masas) y el momento angular correspondiente a la rotación en torno al eje de rotación que pasa por G. En el primero, usaremos solo la componente que nos interesa. Tras hacer las operaciones, es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>G</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>G</mi></msub><mo>×</mo><mi>m</mi><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>G</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>z</mi></msub><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>y</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El segundo término lo expresamos primero en el sistema de ejes principales, y luego calculamos su componente según el eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> del espacio. Así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑱</mi><mo>*</mo></msup><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><msub><mi>ω</mi><mn>1</mn></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>ω</mi><mn>2</mn></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ya que <math display=\"inline\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Y la proyección de este vector sobre el eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> es la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>J</mi><mi>z</mi><mo>*</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow><mn>12</mn></mfrac><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "porque <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo>⟂</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> y <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> forman un ángulo, vale <math display=\"inline\"><mrow><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mi>θ</mi></mrow></math>. Así pues, la componente del momento angular en la dirección del eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> será la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mi>z</mi></msub><mo>=</mo><msub><mi>J</mi><mrow><mi>G</mi><mi>z</mi></mrow></msub><mo>+</mo><msubsup><mi>J</mi><mi>z</mi><mo>*</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> obtenemos el resultado del apartado anterior:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mrow><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y llevando este resultado a la expresión obtenida de la aplicación de la conservación de la energía, como antes, llegamos a lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mn>2</mn></msqrt><mo>−</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sea un cono homogéneo, de semiángulo en el vértice <math display=\"inline\"><mi>α</mi></math>, altura <math display=\"inline\"><mi>h</mi></math> y masa <math display=\"inline\"><mi>M</mi></math>, que rueda sin deslizar sobre un plano. Si el plano se inclina un ángulo <math display=\"inline\"><mi>β</mi></math> respecto al plano horizontal, halla la frecuencia de las pequeñas oscilaciones del cono en torno a su estado de equilibrio estable."
    }
   ]
  },
  {
   "id": "a20",
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
     "html": "<strong>[a.]</strong>"
    },
    {
     "mota": "testua",
     "html": "Calcularemos primero la energía cinética del cono en el caso en que rueda sin deslizar sobre un plano horizontal. El vértice O, en estas situaciones, es fijo. Usaremos el sistema de ejes principales que aparece en la figura. Los momentos principales son los siguientes:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/891395c66e766b3a.svg\" alt=\"I_1 = I_3 = 3 / 20 M \\[ R^2 + 4 h^2 \\] #h(2em) #h(2em) I_2 = 3 / 10 M R^2\" style=\"width:24.372em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>h</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. [Mientras se desarrolla el problema, usaremos <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>I</mi><mn>3</mn></msub></math>, sustituyendo sus valores al final]."
    },
    {
     "mota": "testua",
     "html": "El movimiento del cono es este: la generatriz de contacto entre el cono y el plano <math display=\"inline\"><mover><mrow><mi>O</mi><mi>A</mi></mrow><mo accent=\"true\">¯</mo></mover></math> <em>es un eje de rotación</em>, pues todos sus puntos están en reposo en cada instante. Por tanto, el movimiento del cono puede considerarse una rotación pura en torno a dicha generatriz, con velocidad angular <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>."
    },
    {
     "mota": "testua",
     "html": "El centro de masas G describe un movimiento circular en un plano paralelo al plano de rodadura, a la altura <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> sobre él, con radio <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, siendo <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3</mn><mi>h</mi><mi>/</mi><mn>4</mn></mrow></math>. Por tanto, su velocidad puede expresarse de una de estas dos formas: como la velocidad de un punto que efectúa una rotación pura en torno al eje de rotación instantáneo con velocidad angular <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> y radio <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, o como la de un punto que gira en torno al eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> con velocidad angular <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> y radio <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, ya que la posición angular <math display=\"inline\"><mi>θ</mi></math> del centro de masas la determina el mismo ángulo que su posición angular respecto al eje <math display=\"inline\"><mrow><mi>O</mi><mi>x</mi></mrow></math> del plano de la generatriz de contacto OA. Escribamos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>G</mi></msub><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Considerando la energía cinética del cono como una rotación pura en torno al eje de rotación instantáneo, podemos escribir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mrow><mi>O</mi><mi>A</mi></mrow></msub><mspace width=\"0.167em\"></mspace><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>I</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado el <em>teorema de Poinsot</em> para escribir la última de las expresiones, siendo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. A partir de la figura es fácil determinar lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/aa1957418c0e037b.svg\" alt=\"omega_1 = 0 #h(2em) omega_2 = Omega cos alpha #h(2em) omega_3 = - Omega sin alpha\" style=\"width:21.590em;height:1.329em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Así pues, sustituyendo estos valores en la expresión anterior de la energía cinética, junto con la relación obtenida entre <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> y <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>, llegamos sin dificultad al siguiente resultado, en función de la altura <math display=\"inline\"><mi>h</mi></math> del cono y del semiángulo <math display=\"inline\"><mi>α</mi></math> en el vértice:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>40</mn></mfrac><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mn>5</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>[b.]</strong>"
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora que inclinamos el plano de rodadura un ángulo <math display=\"inline\"><mi>β</mi></math> respecto a la horizontal. Como dirección del eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> del espacio usaremos el eje perpendicular al plano desde el punto donde está el vértice; como eje <math display=\"inline\"><mrow><mi>O</mi><mi>x</mi></mrow></math>, la arista de unión entre el plano inclinado y el plano horizontal y la dirección hacia esa arista; y como eje <math display=\"inline\"><mrow><mi>O</mi><mi>y</mi></mrow></math>, el paralelo a la arista que pasa por el vértice O del cono. Como es evidente, el vértice del cono permanece en reposo durante el movimiento. Si medimos el ángulo <math display=\"inline\"><mi>θ</mi></math> como en el apartado anterior, la energía cinética es la expresión ya obtenida en estos ejes."
    },
    {
     "mota": "testua",
     "html": "[Figura: dos esquemas del cono apoyado sobre el plano inclinado; ejes V, z, x, y; ángulos <math display=\"inline\"><mi>α</mi></math>, <math display=\"inline\"><mi>β</mi></math>, <math display=\"inline\"><mi>θ</mi></math>; puntos O, G, G<math display=\"inline\"><msub><mrow></mrow><mn>0</mn></msub></math>, A; velocidad angular <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>; y relaciones <math display=\"inline\"><mrow><msub><mi>z</mi><mi>G</mi></msub><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>]"
    },
    {
     "mota": "testua",
     "html": "La energía potencial, por otra parte, la determinará la altura del centro de masas G del cono respecto a un plano horizontal de referencia. Si este pasa por el vértice O, dicha altura será función de los tres ángulos <math display=\"inline\"><mi>α</mi></math>, <math display=\"inline\"><mi>β</mi></math> y <math display=\"inline\"><mi>θ</mi></math>. En la figura aparece la trayectoria del centro de masas, desde la posición de equilibrio <math display=\"inline\"><msub><mi>G</mi><mn>0</mn></msub></math> hasta el punto G del instante en que la generatriz de contacto se ha desviado el ángulo <math display=\"inline\"><mi>θ</mi></math>, y su proyección según el eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math> sobre el plano inclinado (curva de puntos). La dirección OV es perpendicular al plano horizontal y formará el ángulo <math display=\"inline\"><mi>β</mi></math> con el eje <math display=\"inline\"><mrow><mi>O</mi><mi>z</mi></mrow></math>. El punto A es el punto de la base del cono en contacto con el plano inclinado y, por tanto, uno de los puntos del eje de rotación instantáneo, en torno al cual el cono efectúa una rotación con velocidad angular <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> en todo momento. No es difícil demostrar, con ayuda de las dos figuras, que la altura del centro de masas que buscamos y la energía potencial asociada se expresan así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mi>G</mi></msub><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>O</mi><mi>V</mi></mrow></msub><mo>=</mo><msub><mi>x</mi><mi>G</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup><mo>+</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>z</mi><mi>G</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><mi>−</mi><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>M</mi><mi>g</mi><mspace width=\"0.167em\"></mspace><msub><mi>z</mi><mi>G</mi></msub><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>O</mi><mi>V</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>M</mi><mi>g</mi><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La función lagrangiana, por tanto, será la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>3</mn><mn>40</mn></mfrac><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mn>5</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>M</mi><mi>g</mi><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>a</mi></math> ya lo hemos sustituido por su valor en función de <math display=\"inline\"><mi>h</mi></math>. Esta función depende de una única variable generalizada, <math display=\"inline\"><mi>θ</mi></math>, y la ecuación del movimiento asociada se obtiene de la manera habitual:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>3</mn><mn>20</mn></mfrac><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mn>5</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>M</mi><mi>g</mi><mi>h</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">}</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos definido la constante <math display=\"inline\"><mi>A</mi></math> así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mn>5</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></mfrac><mo>&gt;</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta constante <math display=\"inline\"><mi>A</mi></math> es positiva, ya que tanto <math display=\"inline\"><mi>α</mi></math> como <math display=\"inline\"><mi>β</mi></math> se suponen con valores menores que <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>. La ecuación del movimiento resultante, en la aproximación de pequeñas oscilaciones, es, pues, una ecuación igual a la del oscilador armónico de pulsación <math display=\"inline\"><msqrt><mi>A</mi></msqrt></math> (nota: el fragmento original en euskera está roto: «palazioko»)."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dos varillas sin masa están soldadas por su centro formando un ángulo α. Una de ellas, de longitud 2a, tiene masas puntuales m en sus dos extremos, y la otra, que hace de eje de rotación, tiene longitud l y está sostenida sobre dos cojinetes sin rozamiento. Suponiendo que no hay gravitación, calcula las reacciones en los soportes cuando el conjunto se hace girar con velocidad angular constante ω. ¿Cómo debe ser el ángulo α para que no haya reacciones en los soportes?"
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "[Figura (al principio de la solución): con el eje horizontal AB, el soporte A a la izquierda y el soporte B a la derecha. En el centro, el punto marcado con símbolos ⊗ y la etiqueta «1», donde se cruzan las dos varillas. La varilla con masas forma el ángulo α con el eje AB; en cada extremo, a la distancia a del centro, hay una masa puntual m. Ejes principales etiquetados: «1» (en el centro, saliendo del plano), «2» (flecha hacia arriba y a la izquierda) y «3» (flecha hacia arriba y a la derecha, en la dirección de la varilla que pasa por la masa m superior). La velocidad angular ω se indica con una flecha circular en torno a AB. En el soporte A actúa la fuerza −F (hacia arriba) y en el soporte B la fuerza F (hacia abajo). La separación entre los soportes, l, se marca con una acotación de trazo discontinuo en la parte inferior.]"
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Tomemos como sistema de referencia ligado al sólido el formado por los ejes principales 1, 2 y 3 con origen en el centro de masas. Como es evidente, los momentos principales de inercia son: I₁ = I₂ = 2ma², I₃ = 0. Si suponemos que el vector velocidad angular tiene la dirección del eje AB, sus componentes en el sistema de ejes principales serán: ω(0, −ω sin α, ω cos α). La expresión del momento angular será, pues, la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑰</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado el tensor de inercia <strong>I</strong>. Así pues, en el sistema del sólido, el momento angular es un vector constante en la dirección del eje 2 (es decir, en el plano formado por las masas y el eje de rotación). El momento de fuerzas necesario para mantener este movimiento puede obtenerse de la siguiente expresión:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mtext mathvariant=\"normal\">esp</mtext></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑳</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mtext mathvariant=\"normal\">cuerpo</mtext></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y esta no es más que la expresión del teorema de Coriolis, que nos relaciona las derivadas temporales de un vector en un sistema fijo en el espacio y en otro que gira con velocidad angular ω respecto al anterior. En nuestro caso, y como acabamos de decir, <strong>L</strong> es constante en el sistema del sólido y, por tanto, su derivada temporal es nula en este sistema. Así pues, el momento de las fuerzas tomará el siguiente valor:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑵</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑳</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir, es un vector con la dirección del eje principal 1, perpendicular al plano del eje y de las masas. Por otra parte, teniendo en cuenta que no hay gravitación y que el centro de masas está en el eje de rotación, las únicas fuerzas que actúan sobre el eje de rotación se producen en los soportes A y B; además, se demuestra fácilmente que son iguales, de sentidos opuestos, perpendiculares al eje de rotación y que están en el plano eje–masas (es decir, forman un par de fuerzas de momento N = Fl). En módulo, este par es igual a lo que estamos calculando:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/5851da28b276e81d.svg\" alt=\"N = F l = 2 m a^2 omega^2 sin alpha cos alpha #h(2em) arrow.r #h(2em) F = frac(2 m a^2 omega^2 sin alpha cos alpha, l)\" style=\"width:32.495em;height:2.760em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Las reacciones en los soportes serán nulas en ambos casos: para α = 0 y para α = π/2."
    },
    {
     "mota": "testua",
     "html": "Otra vía para resolver el problema es usar las ecuaciones de Euler del sólido rígido, que, expresadas en un sistema de ejes principales, se escriben así: Iᵢ ω̇ᵢ + εᵢⱼₖ ωⱼ Lₖ = Nᵢ, i, j, k = 1..3, donde εᵢⱼₖ es el tensor de Levi-Civita y Lₖ = Iₖ ωₖ (sin suma en k)."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "99Jun04. Un sólido rígido está formado por una placa en forma de rombo de masa <math display=\"inline\"><mi>M</mi></math> y lado <math display=\"inline\"><mi>a</mi></math> (el ángulo agudo es de 60°) y dos masas puntuales <math display=\"inline\"><mi>m</mi></math> pegadas en dos vértices opuestos, B y D. El sistema gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno al eje EF. Calcula: a) la energía cinética del sistema; b) el momento del par de fuerzas necesario para mantener constante la velocidad angular, y c) la relación <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi></mrow></math> necesaria para que el momento angular y la velocidad angular sean paralelos."
    },
    {
     "mota": "testua",
     "html": "[Figura: el rombo ABCD dibujado, con B (vértice superior izquierdo), C (vértice superior derecho), A (vértice inferior izquierdo) y D (vértice inferior derecho). Las masas puntuales <math display=\"inline\"><mi>m</mi></math> están pegadas en los vértices B y D. La placa de masa <math display=\"inline\"><mi>M</mi></math> ocupa el rombo. El centro O está en la intersección de las diagonales. El eje EF es horizontal, pasa por O (E a la izquierda, F a la derecha) y es paralelo a la base del rombo (lado AD/BC); NO coincide con la diagonal AC (es decir, el eje principal <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math>, inclinado 30° sobre EF). Se dibujan los versores: <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math> en la dirección del eje AC (hacia C, arriba a la derecha), <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub></math> en la dirección del eje DB (hacia B, arriba a la izquierda), <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></math> perpendicular al plano en O (hacia el observador). Se marca en O el ángulo de 90° entre las diagonales. En el vértice A la diagonal AC divide el ángulo agudo en dos, marcando dos ángulos de 30° y 30°. El vector <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> sale de O hacia arriba y a la derecha. En F se indica la rotación con velocidad angular <math display=\"inline\"><mi>ω</mi></math>.]"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "R. a. Por simetría, los ejes principales de inercia del sistema y los versores asociados a ellos son estos: el eje <math display=\"inline\"><mover><mrow><mi>A</mi><mi>C</mi></mrow><mo accent=\"true\">¯</mo></mover></math> (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math>), el eje <math display=\"inline\"><mover><mrow><mi>D</mi><mi>B</mi></mrow><mo accent=\"true\">¯</mo></mover></math> (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub></math>) y un tercero perpendicular a ambos, en la figura perpendicular al plano del papel (suponiendo que el plano del rombo es el del papel en el momento que se toma) y dirigido hacia nosotros (<math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></math>). La energía cinética <math display=\"inline\"><mi>T</mi></math> del sistema podemos expresarla por la forma más simple: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>I</mi><mn>3</mn></msub><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>e</mi></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>, donde las cantidades con subíndice <math display=\"inline\"><msub><mi>I</mi><mi>i</mi></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mi>i</mi></msub></math> expresan, respectivamente, los momentos principales de inercia y las componentes de la velocidad angular en los ejes principales, y <math display=\"inline\"><msub><mi>I</mi><mi>e</mi></msub></math> es el momento de inercia del rombo respecto al eje <math display=\"inline\"><mover><mrow><mi>E</mi><mi>F</mi></mrow><mo accent=\"true\">¯</mo></mover></math>."
    },
    {
     "mota": "testua",
     "html": "En este caso, se demuestra fácilmente que el momento de inercia de un rombo (o romboide) en torno a un eje como el <math display=\"inline\"><mover><mrow><mi>E</mi><mi>F</mi></mrow><mo accent=\"true\">¯</mo></mover></math>, paralelo a su base y que pasa por el centro, es igual al de un rectángulo de la misma base y de altura igual a la proyección de los lados oblicuos sobre la perpendicular a la base. En este caso, la altura del rectángulo equivalente sería: <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>60</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>. Como el momento de inercia de un rectángulo respecto a ese eje es conocido —vale <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>M</mi><msup><mi>h</mi><mn>2</mn></msup></mrow></math>—, en nuestro caso este momento de inercia valdrá <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>M</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. Por otra parte, el momento de inercia de las dos masas <math display=\"inline\"><mi>m</mi></math> situadas a la distancia <math display=\"inline\"><mrow><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>a</mi><mi>/</mi><mn>4</mn></mrow></math> del eje valdrá <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>a</mi><mi>/</mi><mn>4</mn><msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. Así pues, el momento de inercia total valdrá lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mi>e</mi></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>M</mi></mrow></msub><mo>+</mo><msub><mi>I</mi><mrow><mi>e</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>M</mi><mo>+</mo><mn>6</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El otro procedimiento exige calcular los momentos principales de inercia del sistema. Teniendo en cuenta la descomposición del rombo en triángulos, no es difícil llegar a las siguientes expresiones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mfrac><mi>M</mi><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>M</mi><mo>+</mo><mn>12</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mfrac><mi>M</mi><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>a</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>M</mi><mo>+</mo><mn>3</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La última expresión es válida porque es una figura plana. Además, en los ejes principales de inercia la velocidad angular <math display=\"inline\"><mi>ω</mi></math>, dirigida según <math display=\"inline\"><mover><mrow><mi>E</mi><mi>F</mi></mrow><mo accent=\"true\">¯</mo></mover></math>, tiene las componentes <math display=\"inline\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mi>ω</mi><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ω</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y, por tanto, tanto por un procedimiento como por el otro, la energía cinética del sistema, tras hacer las operaciones y simplificaciones adecuadas, es la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>32</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>M</mi><mo>+</mo><mn>6</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Los vectores velocidad angular <math display=\"inline\"><mi>ω</mi></math> y momento angular <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> no son, en general, paralelos, a menos que la dirección del eje de rotación coincida con la de un eje principal. Esto, como veremos en el apartado siguiente, dependerá de la relación entre las masas <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>m</mi></math>. En cualquier caso, mirando desde un observador inercial exterior al sistema, el vector <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> girará solidariamente con el sistema que rota, con la misma velocidad angular <math display=\"inline\"><mi>ω</mi></math>, y por tanto, teniendo en cuenta las ecuaciones que gobiernan la dinámica de la rotación, habrá un momento de fuerzas <math display=\"inline\"><mi>τ</mi></math> no nulo necesario para mantener ese movimiento. Usando el teorema de Coriolis para relacionar las medidas hechas desde los dos sistemas de referencia (el inercial exterior y el rotatorio, con la misma velocidad angular del sistema), escribiremos:"
     ],
     "etiketak": [
      "2."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>I</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>N</mi><mi>I</mi></mrow></msub><mo>+</mo><mi>ω</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub><mo>=</mo><mi>ω</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><msub><mi>ω</mi><mn>1</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>ω</mi><mn>2</mn></msub><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>48</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>M</mi><mo>+</mo><mn>6</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado los subíndices &quot;I&quot; y &quot;NI&quot; para designar, respectivamente, el sistema inercial y el no inercial. Además, como el vector <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> es fijo respecto a NI, su derivada temporal es nula. Por otra parte, hemos usado el hecho de que <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> para escribir la velocidad angular y el momento angular de forma más abreviada. El resultado de <math display=\"inline\"><mi>τ</mi></math> indica que, aunque <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> sea un vector situado en el plano del rombo (pues <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), el momento de fuerzas es siempre perpendicular a ese plano."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Como hemos dicho antes, en general <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>O</mi></msub></math> no serán paralelos. Para que fueran paralelos, los coeficientes de los versores <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mover><mi>e</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub></math> tendrían que ser proporcionales, y eso nos lleva directamente a la condición de que se cumpla <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>:"
     ],
     "etiketak": [
      "3."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>=</mo><mn>6</mn><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si se cumple esta relación, el sistema gira en torno a un eje principal y, en consecuencia, el momento necesario para mantener el movimiento se anularía: <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>0</mn></mrow></math>. Si no hay otras fuerzas, el sistema giraría indefinidamente con esa velocidad <math display=\"inline\"><mi>ω</mi></math>."
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>99Set04.</strong>"
    },
    {
     "mota": "testua",
     "html": "Una esfera sólida homogénea de masa <math display=\"inline\"><mi>m</mi></math> y radio <math display=\"inline\"><mi>R</mi></math> rueda sin deslizar entre dos raíles separados por la distancia <math display=\"inline\"><mi>d</mi></math> con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "¿Cuál es la relación entre la velocidad del centro de masas y la velocidad angular?"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "La esfera anterior desciende por un plano inclinado, de nuevo sin deslizar. La altura inicial, partiendo del reposo, es <math display=\"inline\"><mi>h</mi></math>. Demuestra que la velocidad del centro de masas de la esfera al llegar abajo es <math display=\"inline\"><msqrt><mrow><mn>10</mn><mi>g</mi><mi>h</mi><mi>/</mi><mn>7</mn></mrow></msqrt></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si se sustituye el plano inclinado por raíles, ¿cuál sería la velocidad final del centro de masas de la esfera?"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "¿Qué ocurre en los casos de los apartados a) y c) cuando <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math>? ¿Y para <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math>? ¿Por qué?"
     ]
    },
    {
     "mota": "testua",
     "html": "<em>[Figura: representación esquemática de la esfera sobre los raíles en tres vistas — lateral (con R, C, P, V_CM y la recta de contacto), superior (mostrando la separación d entre los raíles) y frontal (con C, R y los puntos de contacto P₁ y P₂ separados por la distancia d, con P en el punto medio).]</em>"
    }
   ]
  },
  {
   "id": "a26",
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
     "html": "a) En la figura se ve una representación esquemática de la esfera &quot;rodando&quot; (pues no desliza) sobre los raíles, desde tres posiciones características: vista lateral, superior y frontal. En un instante dado, si llamamos <math display=\"inline\"><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><msub><mi>P</mi><mn>2</mn></msub></mrow><mo accent=\"true\">¯</mo></mover></math> a la recta que une los dos puntos de contacto entre la esfera y los raíles, esa recta se convierte en el eje de rotación de dicho sólido rígido. Sabemos por la teoría que cualquier punto del eje de rotación instantáneo está en reposo en todo momento. Dos de esos puntos en reposo son <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>. Usando la expresión del campo de velocidades del sólido rígido, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>C</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>P</mi><mn>1</mn></msub></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>C</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El vector <math display=\"inline\"><mi>ω</mi></math> es perpendicular al plano del papel en el punto <math display=\"inline\"><mi>P</mi></math> en las primeras figuras (y hacia dentro), es decir, tiene la dirección de la recta <math display=\"inline\"><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><msub><mi>P</mi><mn>2</mn></msub></mrow><mo accent=\"true\">¯</mo></mover></math> (y supondremos que su sentido es análogo al del orden). Por otra parte, el vector <math display=\"inline\"><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>C</mi></mrow><mo accent=\"true\">→</mo></mover></math> (también en el plano del papel en la tercera figura) forma un ángulo con <math display=\"inline\"><mi>ω</mi></math>, cuyo seno es el siguiente: <img class=\"formula\" src=\"../media/formulak/28a882d41289e96d.svg\" alt=\"sin alpha = overline(P C) \\/ R = sqrt(R^2 - d^2 \\/ 4) thin #scale(x: 120%, y: 120%)[\\/] thin R\" style=\"width:17.150em;height:1.001em\" loading=\"lazy\">."
    },
    {
     "mota": "testua",
     "html": "Como hemos dicho, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>P</mi><mn>1</mn></msub></msub><mo>=</mo><mn>0</mn></mrow></math>, y el producto vectorial <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>C</mi></mrow><mo accent=\"true\">→</mo></mover></mrow></math> tendrá dirección perpendicular al plano del papel de la tercera figura, hacia fuera. Su módulo —que es lo que nos interesa— se escribirá, pues, así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>C</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>C</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>ω</mi><mo>⋅</mo><mi>R</mi><mo>⋅</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>ω</mi><msqrt><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>d</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>[Figura: plano inclinado con la esfera rodando; se indican V_CM y la altura h.]</em>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Cuando decimos que la altura inicial es <math display=\"inline\"><mi>h</mi></math>, queremos decir que, en realidad, el descenso total del centro de masas al final del plano es realmente <math display=\"inline\"><mi>h</mi></math> (supondremos que el plano inclinado tiene una prolongación en la misma dirección, y no horizontal). Si se parte del reposo, tendremos en cuenta que la velocidad final del centro de masas tras recorrer el plano es <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math>. No hay ninguna fuerza disipativa sobre el sistema y se conserva la energía mecánica. Escribamos esto aplicado a los dos puntos extremos:"
     ],
     "etiketak": [
      "2."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>C</mi></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "pues al principio toda la energía es potencial y al final solo cinética, y esta tendrá dos términos: la energía cinética que tendría si toda la masa estuviera concentrada en el centro de masas y se moviera con su velocidad, y la energía cinética de rotación en torno a un eje que pasa por ese centro de masas (una alternativa es considerar el movimiento como una rotación pura en torno al eje de rotación instantáneo, y entonces el segundo miembro sería solo <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>P</mi></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta que <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> y que en este apartado es como si fuera <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math>, usando la relación entre <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math> del apartado a), llegaremos a lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de ahí es fácil despejar <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math> para llegar a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mn>10</mn><mi>g</mi><mi>h</mi></mrow><mn>7</mn></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "como queríamos demostrar."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si <math display=\"inline\"><mrow><mi>d</mi><mo>≠</mo><mn>0</mn></mrow></math>, se sigue aplicando el principio de conservación de la energía mecánica, pero ahora usando la expresión completa de <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math>, en función de <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mi>d</mi></math>. Así pues:"
     ],
     "etiketak": [
      "3."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><msqrt><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>d</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De nuevo, tras simplificar, sin dificultad podemos llegar a esta expresión:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mn>10</mn><mi>g</mi><mi>h</mi></mrow><mrow><mn>5</mn><mo>+</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>d</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Para <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn></mrow></math>, solo en el caso a) es <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math>, y el apartado c) coincide con el b). Si <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math>, en cambio, los raíles ya no sostendrán la esfera y la velocidad <math display=\"inline\"><msub><mi>V</mi><mrow><mi>C</mi><mi>M</mi></mrow></msub></math> será nula, sin que la velocidad angular tenga que ser nula (caso a)), y el caso c) no tiene sentido."
     ],
     "etiketak": [
      "4."
     ]
    }
   ]
  }
 ]
};
