/* JAKINA · kapitulua «B9.2 - Higidura erlatiboa» (05mk_02higiduraerl), desde edicion2/kapituluak/05mk_02higiduraerl/05mk_02higiduraerl.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_02higiduraerl"] = {
 "gakoa": "05mk_02higiduraerl",
 "titulua": "JAKINA - B9 - Mecánica clásica - 2/10",
 "azala": "B9.2 - Movimiento relativo",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_02higiduraerl/05mk_02higiduraerl.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Movimiento relativo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La relación cinemática entre dos sistemas de referencia inerciales viene dada por las transformaciones de Galileo del apartado 1.2.1 y sabemos que entre el sistema del laboratorio y el del centro de masas es (1.154)–(1.158). En este tema se estudiará la relación entre sistemas de referencia generales, en el contexto de la mecánica newtoniana. Más adelante, al ver la relatividad especial en el tema 3, estudiaremos la relación entre sistemas inerciales desde otro punto de vista más general."
    },
    {
     "mota": "testua",
     "html": "En todo el tema consideraremos los sistemas de referencia <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>. Al primero le corresponde el triedro <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> de la figura 2.2 y al sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> el <math display=\"inline\"><mrow><msup><mi>O</mi><mo>′</mo></msup><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><msup><mi>Z</mi><mo>′</mo></msup></mrow></math>. A medida que avanza el tiempo, la posición relativa entre los dos sistemas, la orientación relativa o ambas irán cambiando. Casi siempre, aunque no necesariamente, el primero será inercial y el segundo no."
    },
    {
     "mota": "irudia",
     "oina": "Dos sistemas de referencia y una partícula.",
     "src": "../media/irudiak/388c0d78f4d97056.svg",
     "zabalera": 281
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Traslación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para empezar, supongamos que la orientación relativa entre los dos sistemas es constante: tenemos, por tanto, una traslación relativa pura. Como en la mecánica newtoniana el tiempo es absoluto, admitiremos que los observadores de los dos sistemas lo miden de la misma manera. Por tanto, si sincronizamos los relojes, se medirá el mismo valor en ambos. Por otra parte, admitiremos que la masa de la partícula es una característica suya que se mide igual en todos los sistemas, y también que la transformación de la posición es lo que sugieren la figura y el cálculo vectorial. Por tanto, postularemos que la relación entre los dos sistemas viene dada por las siguientes ecuaciones: <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msup><mi>t</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msup><mi>m</mi><mo>′</mo></msup><mi>.</mi></mrow></math> Como siempre, la validez de este postulado habrá que comprobarla en experimentos. En efecto, la transformación mencionada es adecuada solo cuando las velocidades son mucho menores que la de la luz. Si <math display=\"inline\"><mi>S</mi></math> es un sistema inercial, la segunda ley de Newton es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math>. Si admitimos que en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> —aunque no sea inercial— la fuerza total que sufre la partícula es <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>′</mo></msup><mo>=</mo><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup></mrow></math>, sustituyendo la fuerza del sistema <math display=\"inline\"><mi>S</mi></math> y las transformaciones (2.4)–(2.5), se obtiene lo siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>−</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Naturalmente, si el movimiento entre los dos sistemas es uniforme, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, el segundo sistema también es inercial y la fuerza total es la misma: <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi></mrow></math>; los dos sistemas son equivalentes y la transformación entre ellos es la de Galileo."
    },
    {
     "mota": "testua",
     "html": "Si la aceleración entre los dos sistemas no es nula, en cambio, el segundo sistema no es inercial y para mantener allí la segunda ley de Newton, además de la fuerza total <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> medida en sistemas inerciales, habrá que tener en cuenta también la <strong>fuerza de arrastre</strong> <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover></mrow></math> al calcular la fuerza total en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>. A una fuerza así se le llama <strong>fuerza de inercia</strong> y no aparece en los sistemas inerciales. Por eso, a veces se dice que fuerzas así son <em>aparentes</em>, pues son una mera consecuencia de elegir el sistema de referencia no inercial. Sin embargo, adjetivos así hay que usarlos con cuidado: es verdad que desaparecen eligiendo <em>bien</em> el sistema de referencia, pero el observador no inercial sufre sus efectos (recuerda lo que ocurre si el conductor frena el autobús demasiado fuerte)."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, como según el <strong>principio de equivalencia</strong> la masa inercial y la gravitatoria son iguales, la aceleración de una partícula que cae en un campo gravitatorio sin sufrir otras fuerzas es nula, naturalmente, y la fuerza total que sufre es nula: <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>−</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mn>0</mn></mrow></math>. De esto se valió Einstein en la relatividad general para decir que el observador inercial es el que está en caída libre (pero, en general, el sistema inercial correspondiente está definido en un entorno suyo, no en todo el espacio). Desde este punto de vista, el peso que sufrimos nosotros es una fuerza de inercia, ¡que surge porque, por efecto del suelo, estamos acelerados respecto de los observadores inerciales!"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistemas de partículas"
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos un sistema de partículas como el del apartado 1.5. La ecuación de evolución de cada partícula en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> es la siguiente: <math display=\"block\"><mrow><msub><mi>m</mi><mi>i</mi></msub><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>i</mi></msub><mo>−</mo><msub><mi>m</mi><mi>i</mi></msub><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> las ecuaciones de evolución colectivas son las siguientes: <math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝑷</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>′</mo></msup><msup><mi></mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mo>′</mo></msup><msup><mi></mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝑮</mi><mo>′</mo></msup><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math> (Naturalmente, aquí <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mo>′</mo></msup></math> el momento angular y <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mo>′</mo></msup><msup><mi></mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> el momento de las fuerzas externas están calculados respecto del origen del sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>.)"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema del centro de masas"
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora que el sistema de referencia <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> es el sistema <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> del centro de masas. En ese caso, como <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑮</mi><mo>′</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑮</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mo>′</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑷</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, los resultados anteriores se simplifican. Por lo que respecta al movimiento de traslación, como la fuerza de arrastre total es opuesta a la suma de las demás fuerzas, la fuerza total es nula y el momento lineal es constante (y nulo) y la ecuación (2.8) es equivalente a (1.153): <math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝑷</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mi>M</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> El segundo resultado es más interesante: el momento total de las fuerzas de arrastre es nulo y, en consecuencia, <em>en la ecuación de evolución del momento angular respecto del centro de masas (es decir, la del momento angular intrínseco) no aparece ningún momento de las fuerzas de inercia</em> (ni tampoco de las internas, como de costumbre, si admitimos al menos que se cumple la tercera ley de Newton):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝑳</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑵</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Usaremos esta otra propiedad importante del sistema del centro de masas al estudiar el sólido rígido. De nuevo vemos que dicho sistema, incluso cuando no es inercial, resulta muy útil."
    },
    {
     "mota": "irudia",
     "oina": "Triedros <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> con el mismo origen.",
     "src": "../media/irudiak/b3c0f9a877f9d346.svg",
     "zabalera": 171
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Orientación y rotaciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supongamos que los triedros de los sistemas de referencia <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> tienen el mismo origen <math display=\"inline\"><mrow><mi>O</mi><mo>=</mo><msup><mi>O</mi><mo>′</mo></msup></mrow></math>. La única diferencia entre ellos, por tanto, puede ser la orientación y se pasa de uno a otro mediante una rotación adecuada. En este apartado estudiaremos la relación entre los dos triedros —es decir, esa orientación relativa—. Consideremos los vectores unitarios <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> del primer triedro y los del segundo: <math display=\"inline\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>,</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒋</mi><mo>′</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup></mrow></math>. Con estas dos bases ortonormales, cualquier otro vector se expresa así, usando la notación abreviada de los sumatorios: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mi>i</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>u</mi><mi>i</mi><mo>′</mo></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mi>.</mi></mrow></math> La relación entre las componentes del vector se calcula directamente recordando que son proyecciones: <math display=\"block\"><mrow><msubsup><mi>u</mi><mi>i</mi><mo>′</mo></msubsup><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>⋅</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mi>j</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>u</mi><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mi>i</mi></msub><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>⋅</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>u</mi><mi>j</mi><mo>′</mo></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>′</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>⋅</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>u</mi><mi>j</mi><mo>′</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow><mi>⊤</mi></msubsup><msubsup><mi>u</mi><mi>j</mi><mo>′</mo></msubsup><mo>,</mo></mrow></math> donde hemos usado los siguientes cosenos de los ángulos entre los vectores unitarios de bases diferentes: <math display=\"block\"><mrow><msub><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow><mi>⊤</mi></msubsup><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>⋅</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>′</mo></msubsup><mo>=</mo><msub><mi>R</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Por qué hemos cambiado el índice de la suma para hacer el cálculo anterior?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la relación entre las bases vectoriales ortonormales de los dos sistemas es la siguiente: <math display=\"block\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow><mi>⊤</mi></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>′</mo></msubsup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como los valores <math display=\"inline\"><msub><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> son 9, pueden usarse para formar una matriz cuadrada <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>22</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>23</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>31</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>32</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>R</mi><mn>33</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒊</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒋</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒊</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒋</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒋</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒊</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>S</mi></math> es la <strong>matriz de rotación</strong> que hay que usar para ir del sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> al <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>. En esta notación matricial está claro por qué hemos usado antes el símbolo <math display=\"inline\"><msubsup><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow><mi>⊤</mi></msubsup></math>: la matriz formada con estos valores es la transpuesta de la anterior: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow><mi>⊤</mi></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>R</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>⊤</mi></msup><mi>.</mi></mrow></math> En cada triedro, con las componentes del vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> puede formarse una matriz columna (si elegimos una base ortonormal, los vectores y las matrices columna son equivalentes: las componentes de los primeros son los elementos de las segundas): <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>u</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>u</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>u</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>u</mi><mn>1</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>u</mi><mn>2</mn><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>u</mi><mn>3</mn><mo>′</mo></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Así, las relaciones (2.13) y (2.14) se expresan de forma abreviada mediante la notación matricial: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>′</mo></msup><mi>.</mi></mrow></math> Ahora, sustituyendo una de las ecuaciones de arriba en la otra, queda <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>,</mo></mrow></math> y, teniendo en cuenta que el vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> y, por tanto, sus componentes son arbitrarios, vemos que las matrices <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> y <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup></math> son ortogonales: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mn mathvariant=\"bold\">𝟏</mn><mo>,</mo></mrow></math> donde <math display=\"inline\"><mn mathvariant=\"bold\">𝟏</mn></math> es la matriz identidad. Los elementos de esta expresión se escriben <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mi>R</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>k</mi><mi>i</mi></mrow></msub><msub><mi>R</mi><mrow><mi>k</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow></math> mediante la delta de Kronecker, que expresa los elementos de la matriz identidad: <math display=\"block\"><mrow><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≜</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mtext mathvariant=\"normal\">baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>i</mi><mo>=</mo><mi>j</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mtext mathvariant=\"normal\">baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>i</mi><mo>≠</mo><mi>j</mi><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math> Como cabía esperar, las matrices para ir de un sistema a otro y volver son inversas entre sí: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, si la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> es ortogonal, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Dos sistemas de referencia con el mismo eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>.",
     "src": "../media/irudiak/277758a62dc12982.svg",
     "zabalera": 172
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como ejemplo, supongamos que los dos sistemas tienen el mismo eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi><mo>=</mo><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> y que el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> se obtiene a partir de <math display=\"inline\"><mi>S</mi></math> aplicando una rotación de valor <math display=\"inline\"><mi>ϕ</mi></math> en torno al eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>, como se muestra en la figura 2.4. Calcula los ángulos entre los vectores unitarios de los dos sistemas: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒋</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Deduce que la matriz de rotación es <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y que, por tanto, las componentes del vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> se transforman así: <math display=\"block\"><mrow><msubsup><mi>u</mi><mi>x</mi><mo>′</mo></msubsup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><msub><mi>u</mi><mi>y</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi>u</mi><mi>y</mi><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><msub><mi>u</mi><mi>y</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi>u</mi><mi>z</mi><mo>′</mo></msubsup><mo>=</mo><msub><mi>u</mi><mi>z</mi></msub><mi>.</mi></mrow></math> (Para que el lector conozca todas las notaciones que se usan en los textos, hemos usado aquí <math display=\"inline\"><msub><mi>u</mi><mi>x</mi></msub></math> en lugar de <math display=\"inline\"><msub><mi>u</mi><mn>1</mn></msub></math>.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Ángulos de Euler",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para dar la orientación relativa entre dos triedros con el mismo origen hemos usado una matriz de rotación en el apartado anterior. Una matriz así tiene <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow></math> elementos, pero no todos son independientes entre sí: como la matriz es ortogonal, deben cumplirse las condiciones (2.26). En el último ejemplo nos hemos valido de un único ángulo para escribir todos los elementos de la matriz de rotación. Ahora demostraremos que en el caso general de la figura 2.3 se necesitan como máximo tres ángulos. En mecánica, y sobre todo al estudiar el sólido rígido, se usan para ello los ángulos de Euler."
    },
    {
     "mota": "testua",
     "html": "Pasaremos en tres pasos del triedro <math display=\"inline\"><mi>S</mi></math> al <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, definiendo en cada uno un ángulo de Euler."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ángulo <math display=\"inline\"><mi>ϕ</mi></math>"
    },
    {
     "mota": "testua",
     "html": "En el primer paso, haciendo una rotación de valor <math display=\"inline\"><mi>ϕ</mi></math> en torno al eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>, se pasa del triedro <math display=\"inline\"><mi>S</mi></math> al <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>, de modo que el eje <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> esté en el plano <math display=\"inline\"><mrow><mi>O</mi><msub><mi>Y</mi><mn>1</mn></msub><msub><mi>Z</mi><mn>1</mn></msub></mrow></math>. Como vimos en el ejercicio 2.5, para ello hay que usar la siguiente matriz de rotación: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Sistemas de referencia <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math>.",
     "src": "../media/irudiak/8dbe95255758d360.svg",
     "zabalera": 190
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ángulo <math display=\"inline\"><mi>θ</mi></math>"
    },
    {
     "mota": "testua",
     "html": "En el segundo paso, haciendo una rotación de valor <math display=\"inline\"><mi>θ</mi></math> en torno al eje <math display=\"inline\"><mrow><mi>O</mi><msub><mi>X</mi><mn>1</mn></msub></mrow></math>, se pasa del triedro <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> al <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>, de modo que el eje <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> sea igual a <math display=\"inline\"><mrow><mi>O</mi><msub><mi>Z</mi><mn>2</mn></msub></mrow></math>. Como veremos en el problema 2.36, para ello hay que usar la siguiente matriz de rotación: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Sistemas de referencia <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math>.",
     "src": "../media/irudiak/dfdb3cb97732ea04.svg",
     "zabalera": 217
    },
    {
     "mota": "testua",
     "html": "En los dos primeros pasos hemos situado la dirección del eje <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> mediante los ángulos <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>ϕ</mi></math>. El único grado de libertad que nos queda, por tanto, es el que corresponde a las rotaciones en torno a ese eje."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ángulo <math display=\"inline\"><mi>ψ</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Sin cambiar el eje <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math>, para obtener los otros dos, en el tercer paso, haciendo una rotación de valor <math display=\"inline\"><mi>ψ</mi></math> en torno al eje <math display=\"inline\"><mrow><mi>O</mi><msub><mi>Z</mi><mn>2</mn></msub><mo>=</mo><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math>, se pasa del triedro <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> al <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> mediante la siguiente matriz de rotación: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Sistemas de referencia <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>.",
     "src": "../media/irudiak/4585e3d4001b3a63.svg",
     "zabalera": 185
    },
    {
     "mota": "testua",
     "html": "Por tanto, la matriz de rotación que hay que usar para ir del <math display=\"inline\"><mi>S</mi></math> original al sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> es esta: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>3</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Por qué <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>3</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>1</mn></msub></mrow></math> (2.39) y no <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑹</mi><mn>3</mn></msub></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En algunos textos las rotaciones anteriores se hacen en otro orden y, por tanto, la definición de los ángulos de Euler no es exactamente igual, aunque las ideas fundamentales que se usan sean equivalentes."
    },
    {
     "mota": "testua",
     "html": "Como podemos ver, tres parámetros bastan para expresar la orientación entre los dos triedros. Naturalmente, si los orígenes de los dos sistemas no están en el mismo punto, también harán falta las tres componentes del vector <math display=\"inline\"><mover><mrow><mi>O</mi><msup><mi>O</mi><mo>′</mo></msup></mrow><mo accent=\"true\">→</mo></mover></math> que expresa la posición relativa para determinar la relación entre los sistemas."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Velocidad angular",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para medir el cambio de orientación entre dos sistemas de referencia definiremos la velocidad angular. Está claro que, desde el punto de vista de un sistema, los vectores de su base son constantes. Así, por ejemplo, <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>S</mi><mo>′</mo></msup></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Ángulos de Euler.",
     "src": "../media/irudiak/38e1ab21a3b4ce6f.svg",
     "zabalera": 204
    },
    {
     "mota": "testua",
     "html": "escribiremos para expresar que al calcular la derivada del vector <math display=\"inline\"><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup></math> en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> se obtiene el vector nulo. Pero en el sistema <math display=\"inline\"><mi>S</mi></math> el vector <math display=\"block\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>R</mi><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>k</mi></msub></mrow></math> no es constante, si la orientación relativa y la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> correspondiente son variables. Por tanto, usando (2.17) y (2.18), en el sistema <math display=\"inline\"><mi>S</mi></math> tenemos: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>S</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>k</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>i</mi><mi>k</mi></mrow></msub><msubsup><mi>R</mi><mrow><mi>k</mi><mi>j</mi></mrow><mi>⊤</mi></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>′</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>,</mo><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mi>R</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>′</mo></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi mathvariant=\"normal\">Ω</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>′</mo></msubsup><mo>,</mo></mrow></math> donde hemos hecho la siguiente definición: <math display=\"block\"><mrow><msubsup><mi mathvariant=\"normal\">Ω</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup><mo>≜</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>i</mi><mi>k</mi></mrow></msub><msub><mi>R</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><mo>=</mo><mi>−</mi><munderover><mo>∑</mo><mrow><mi>j</mi><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>j</mi><mi>k</mi></mrow></msub><msub><mi>R</mi><mrow><mi>i</mi><mi>k</mi></mrow></msub><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"normal\">Ω</mi><mrow><mi>j</mi><mi>i</mi></mrow><mo>′</mo></msubsup><mi>.</mi></mrow></math> (Aquí hemos usado la derivada de la propiedad (2.26) para cambiar el factor que se deriva.) Esta última propiedad demuestra que con los valores <math display=\"inline\"><msubsup><mi mathvariant=\"normal\">Ω</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup></math> puede construirse una matriz antisimétrica <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi mathvariant=\"normal\">Ω</mi><mrow><mi>i</mi><mi>j</mi></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>=</mo><mi>−</mi><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><msup><mi></mi><mi>⊤</mi></msup><mi>.</mi></mrow></math> Los elementos de la diagonal de esa matriz son nulos, naturalmente, y si definimos los valores <math display=\"block\"><mrow><msubsup><mi>ω</mi><mi>x</mi><mo>′</mo></msubsup><mo>≜</mo><msubsup><mi mathvariant=\"normal\">Ω</mi><mn>23</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi>ω</mi><mi>y</mi><mo>′</mo></msubsup><mo>≜</mo><msubsup><mi mathvariant=\"normal\">Ω</mi><mn>31</mn><mo>′</mo></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mi>ω</mi><mi>z</mi><mo>′</mo></msubsup><mo>≜</mo><msubsup><mi mathvariant=\"normal\">Ω</mi><mn>12</mn><mo>′</mo></msubsup></mrow></math>, la <strong>velocidad angular</strong> de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> medida en el sistema <math display=\"inline\"><mi>S</mi></math> se escribe así en notación matricial: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>ω</mi><mi>z</mi><mo>′</mo></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mi>y</mi><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mi>z</mi><mo>′</mo></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>ω</mi><mi>x</mi><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msubsup><mi>ω</mi><mi>y</mi><mo>′</mo></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mi>x</mi><mo>′</mo></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Con los elementos de la velocidad angular podemos construir el vector <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>≜</mo><msubsup><mi>ω</mi><mi>x</mi><mo>′</mo></msubsup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mo>′</mo></msubsup><msup><mi mathvariant=\"bold-italic\">𝒋</mi><mo>′</mo></msup><mo>+</mo><msubsup><mi>ω</mi><mi>z</mi><mo>′</mo></msubsup><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup></mrow></math>. Esta es la velocidad angular en notación vectorial<span class=\"j-oin\">[En realidad, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> es el dual de <math display=\"inline\"><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup></math> y, si en la definición en lugar de un triedro directo nos valemos de uno inverso, se obtiene el signo contrario: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> es un seudovector.]</span> y el resultado (2.43) puede usarse para escribirlo de la siguiente manera abreviada: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>S</mi></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Desarrolla la expresión (2.51) y, valiéndote de las definiciones (2.46)–(2.48), comprueba que se recupera (2.43)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que la velocidad angular del ejemplo 2.5 es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora un vector general <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mi>u</mi><mi>i</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>u</mi><mi>i</mi><mo>′</mo></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup></mrow></math>. Si usamos el primer desarrollo de arriba, al derivar en el sistema <math display=\"inline\"><mi>S</mi></math> hay que tener en cuenta que los vectores <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub></math> son constantes; como máximo, pueden cambiar las componentes <math display=\"inline\"><msub><mi>u</mi><mi>i</mi></msub></math>: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>S</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msub><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub><mi>.</mi></mrow></math> Algo parecido ocurre en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> si la derivada y el desarrollo se calculan en él: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>S</mi><mo>′</mo></msup></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mo>′</mo></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mi>.</mi></mrow></math> Pero las cosas cambian si para calcular la derivada en un sistema se usan las componentes del otro sistema. Por ejemplo, al derivar el segundo desarrollo del resultado (2.52) en el sistema <math display=\"inline\"><mi>S</mi></math>, hay que derivar las componentes <math display=\"inline\"><msubsup><mi>u</mi><mi>i</mi><mo>′</mo></msubsup></math> y los vectores <math display=\"inline\"><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup></math>. Si hacemos eso, usando (2.51) se obtiene lo siguiente: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>S</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mo>′</mo></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>u</mi><mi>i</mi><mo>′</mo></msubsup><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>S</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mo>′</mo></msubsup><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><msubsup><mi>u</mi><mi>i</mi><mo>′</mo></msubsup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi><mo>′</mo></msubsup><mi>.</mi></mrow></math> Ahora, recordando (2.54), tenemos el <strong>teorema de Coriolis</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>S</mi></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>S</mi><mo>′</mo></msup></msub><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es decir, <em>para calcular la derivada de un vector en un sistema de referencia, a la derivada calculada en el otro sistema hay que sumarle el producto vectorial entre la velocidad angular del segundo sistema y el vector</em>."
    },
    {
     "mota": "testua",
     "html": "De aquí en adelante, para aligerar la notación, la magnitud que tenga el símbolo <math display=\"inline\"><mi>′</mi></math> estará calculada en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> (y, si tiene el símbolo <math display=\"inline\"><mover><mspace width=\"0.222em\"></mspace><mo accent=\"true\">̇</mo></mover></math>, la derivada). En caso contrario, todo se calcula en el sistema <math display=\"inline\"><mi>S</mi></math>. Por tanto, escribiremos esto: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>′</mo></msup><mi>.</mi></mrow></math> En la primera ecuación se expresa que en los dos sistemas tenemos un solo vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> (aunque tenga componentes diferentes en los dos sistemas) y la segunda es el teorema de Coriolis (2.56)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba el siguiente resultado y explica el significado de cada término: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como aplicación, consideremos cualquier vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> que sea constante en el sistema de referencia <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>; en el sistema <math display=\"inline\"><mi>S</mi></math> su módulo será constante, pero la orientación variable: estará girando con velocidad angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> y su derivada la calcularemos mediante el teorema de Coriolis (2.58): <math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mi>.</mi></mrow></math> La última expresión nos dice que la velocidad angular de todos los vectores que giran junto con el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>. Como siempre ocurre al derivar vectores de módulo constante, en la expresión (2.51) se ve que la derivada es perpendicular al vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Rotación infinitesimal de un vector de módulo constante.",
     "src": "../media/irudiak/c01f65c9e0b2c352.svg",
     "zabalera": 199
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que la variación infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mi>d</mi><mi>t</mi></mrow></math> del vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> que gira con velocidad angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> en el intervalo de tiempo infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> es la de la figura 2.9. Deduce que la dirección de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> es la del eje de rotación, que el ángulo infinitesimal de rotación es <math display=\"inline\"><mrow><mi>d</mi><mi>ϕ</mi><mo>=</mo><mi>ω</mi><mi>d</mi><mi>t</mi></mrow></math> (es decir, que el módulo <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>d</mi><mi>ϕ</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> de la velocidad angular es el ángulo girado en la unidad de tiempo), y que el sentido de rotación es el del vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Usando los ángulos de Euler y el resultado (2.40), la velocidad angular de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> en el sistema <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup></mrow></math> en la base de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, y el mismo vector <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>ψ</mi><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"bold-italic\">𝒋</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>′</mo></msup><mo>,</mo></mrow></math>, pero medido en el sistema <math display=\"inline\"><mi>S</mi></math>, será <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝛀</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><msup><mi mathvariant=\"bold\">𝛀</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑹</mi><mi>⊤</mi></msup><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover></mrow></math> (véase el apartado 5.3.1): <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>ϕ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>ϕ</mi><mo>−</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>ϕ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba los últimos resultados."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Sistemas de referencia no inerciales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supongamos ahora que el movimiento general de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> en el sistema inercial <math display=\"inline\"><mi>S</mi></math>: su origen puede estar acelerado y, además, la orientación de los ejes es variable. Para estudiar con más facilidad las dos componentes del movimiento general introduciremos un sistema de referencia intermedio <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math>, que se mueve junto con el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> pero sin cambiar la orientación respecto de <math display=\"inline\"><mi>S</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Sistema de referencia intermedio.",
     "src": "../media/irudiak/33ece8a2400a9b5d.svg",
     "zabalera": 282
    },
    {
     "mota": "testua",
     "html": "En el primer paso, estudiaremos el movimiento de traslación, es decir, cómo se mueve el sistema <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> (o, lo que es lo mismo, el origen <math display=\"inline\"><mrow><msup><mi>O</mi><mo>″</mo></msup><mo>=</mo><msup><mi>O</mi><mo>′</mo></msup></mrow></math>) respecto de <math display=\"inline\"><mi>S</mi></math>. Basta adaptar la transformación (2.1)–(2.5) al caso presente: <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msup><mi>t</mi><mo>″</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>″</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>″</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>″</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msup><mi>m</mi><mo>″</mo></msup><mi>.</mi></mrow></math> Para estudiar el movimiento de rotación, consideraremos en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> el movimiento de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>. Admitiendo que el tiempo y la masa se miden igual en los dos sistemas, haciendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>″</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>′</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow></math> en las ecuaciones (2.57)–(2.59), tenemos: <math display=\"block\"><mrow><msup><mi>t</mi><mo>″</mo></msup><mo>=</mo><msup><mi>t</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>″</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>″</mo></msup><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>″</mo></msup><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>m</mi><mo>″</mo></msup><mo>=</mo><msup><mi>m</mi><mo>′</mo></msup><mi>.</mi></mrow></math> y, para eliminar el sistema intermedio <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math>, combinando los dos conjuntos de resultados, esta es la transformación general entre los sistemas <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> (en mecánica newtoniana, es decir, cuando las velocidades son mucho menores que la de la luz): <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msup><mi>t</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msup><mi>m</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Multiplicando las ecuaciones (2.76) y (2.77) y teniendo en cuenta que las fuerzas totales medidas en los sistemas <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> son <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>′</mo></msup><mo>=</mo><msup><mi>m</mi><mo>′</mo></msup><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup></mrow></math>, la segunda ley de Newton se nos presenta así en el sistema no inercial <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>′</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑭</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>−</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como vemos, además de la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> medida en sistemas inerciales, el observador no inercial general debe tener en cuenta las siguientes cuatro fuerzas de inercia: <math display=\"block\"><mrow><mtext mathvariant=\"bold\">𝐚𝐭𝐨𝐢-𝐢𝐧𝐝𝐚𝐫𝐫𝐚</mtext><mo>=</mo><mi>−</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mtext mathvariant=\"bold\">𝐚𝐳𝐢𝐦𝐮𝐭-𝐢𝐧𝐝𝐚𝐫𝐫𝐚</mtext><mo>=</mo><mi>−</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝝎</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mtext mathvariant=\"bold\">𝐂𝐨𝐫𝐢𝐨𝐥𝐢𝐬𝐞𝐧 𝐢𝐧𝐝𝐚𝐫𝐫𝐚</mtext><mo>=</mo><mi>−</mi><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mtext mathvariant=\"bold\">𝐢𝐧𝐝𝐚𝐫 𝐳𝐞𝐧𝐭𝐫𝐢𝐟𝐮𝐠𝐨𝐚</mtext><mo>=</mo><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Movimiento circular.",
     "src": "../media/irudiak/01d094af782f054d.svg",
     "zabalera": 195
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos el movimiento circular uniforme de una partícula (por ejemplo, el de un observador en un tiovivo). El radio de la trayectoria es <math display=\"inline\"><mi>R</mi></math> y, para hacer un primer estudio, elegiremos un sistema inercial <math display=\"inline\"><mi>S</mi></math> de modo que el centro de la trayectoria <math display=\"inline\"><mi>O</mi></math> esté en el origen y el plano cartesiano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math> sea el de la trayectoria. La velocidad angular <math display=\"inline\"><mrow><mi>ω</mi><mo>≜</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> de la partícula es constante, la velocidad angular vectorial (1.33) es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>≜</mo><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, y la aceleración (1.36) es puramente centrípeta en este caso: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math> Por tanto, en ese sistema, la fuerza total que sufre la partícula en dirección horizontal (la ejercida por el suelo o lo que sea) es centrípeta: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math> Elijamos ahora el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> con origen <math display=\"inline\"><mi>O</mi></math> que gira en torno al eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> con velocidad angular <math display=\"inline\"><mi>ω</mi></math> (es decir, fijado en el centro del tiovivo). En ese sistema no inercial que estudiamos en el ejercicio 2.8 la partícula está en reposo en el punto <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>=</mo><mi>R</mi><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup></mrow></math> y su aceleración, en consecuencia, es nula. Las fuerzas de inercia se estudian fácilmente en este caso. La fuerza de arrastre es nula, pues el origen del sistema no inercial no está acelerado. Como la velocidad angular es constante, la fuerza azimutal también es nula, y lo mismo ocurre con la fuerza de Coriolis, pues la partícula está parada en ese sistema."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la fuerza (2.84) que sufre la partícula y la centrífuga son, respectivamente, estas: <math display=\"block\"><mrow><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>m</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, la ecuación del movimiento (2.84) (que en este caso es la condición de equilibrio) se escribe de este modo: <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>−</mi><mi>m</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>+</mo><mi>m</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>,</mo></mrow></math> es decir, como la fuerza ejercida por el suelo y la centrífuga son opuestas, la partícula se mueve sin aceleración."
    },
    {
     "mota": "irudia",
     "oina": "Sistema propio de la partícula.",
     "src": "../media/irudiak/e222e0a642c00e09.svg",
     "zabalera": 195
    },
    {
     "mota": "testua",
     "html": "Elijamos ahora el sistema <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> que se mueve y gira junto con la partícula, es decir, el sistema situado en el punto donde está el observador (o el sistema de un autobús que se mueve en una curva circular). Este sistema se mueve y gira, pero la partícula está en reposo en su origen: <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math>. En consecuencia, todas las fuerzas de inercia ligadas a la rotación (la fuerza azimutal, la de Coriolis y la centrífuga) son nulas y solo quedan la fuerza (2.84) medida en el sistema inercial y la fuerza de arrastre. Esta última se calcula fácilmente, pues la aceleración del sistema <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> es la aceleración centrípeta de la partícula respecto de <math display=\"inline\"><mi>S</mi></math>: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>″</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>−</mi><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>″</mo></msup><mi>.</mi></mrow></math> Por tanto, la ecuación del movimiento del sistema <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> es esta: <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>−</mi><mi>m</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>″</mo></msup><mo>+</mo><mi>m</mi><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>″</mo></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>″</mo></msup></mrow></math> (2.87) y (2.90) son, naturalmente, equivalentes; pero la interpretación del segundo término que aparece a la derecha es diferente: allí era la centrífuga, aquí es la fuerza de arrastre. Hay que reconocer, sin embargo, que a menudo (también en los libros de física) a esa fuerza que sufrimos en el autobús se le llama centrífuga, teniendo en cuenta, quizá, su dirección y su sentido."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Fuerzas de inercia en la superficie de la Tierra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Normalmente, tomamos el sistema del laboratorio como inercial al estudiar los movimientos que ocurren en las proximidades de la superficie de la Tierra. Pero si la duración de dichos movimientos es muy grande (como en el movimiento de la atmósfera o, más adelante, en el caso del péndulo de Foucault que estudiaremos), no se puede despreciar el movimiento de rotación de la Tierra y habrá que tener en cuenta las fuerzas de inercia que aparecen en el sistema del laboratorio, que no es inercial."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema del laboratorio simplificado"
    },
    {
     "mota": "testua",
     "html": "Para simplificar los estudios siguientes, elegiremos siempre el sistema <math display=\"inline\"><mi>S</mi></math> del laboratorio<span class=\"j-oin\">[Para simplificar la notación, de aquí en adelante el sistema del laboratorio y las magnitudes medidas en él se escribirán sin <math display=\"inline\"><mi>′</mi></math>, aunque ese sistema no sea inercial.]</span> de esta manera:"
    },
    {
     "mota": "irudia",
     "oina": "La Tierra y el sistema del laboratorio simplificado.",
     "src": "../media/irudiak/8cafac30ed43476f.svg",
     "zabalera": 224
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mi>O</mi></math> origen en el centro del laboratorio, en la superficie de la Tierra. Para dar la posición de ese punto usaremos, como de costumbre, <math display=\"inline\"><mi>ϕ</mi></math> la <strong>longitud</strong> (es decir, el ángulo entre los planos del meridiano que pasa por nuestro laboratorio y el de Greenwich) y <math display=\"inline\"><mi>λ</mi></math> la <strong>latitud</strong> (el ángulo que mide la posición de nuestro paralelo desde el ecuador y a lo largo del meridiano).",
      "<math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> eje tangente al meridiano y hacia el sur.",
      "<math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> eje tangente al paralelo y hacia el este.",
      "<math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> en la dirección radial de la Tierra y hacia fuera."
     ]
    },
    {
     "mota": "testua",
     "html": "Como despreciamos el movimiento de traslación de la Tierra, admitiremos que el sistema de referencia <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math> situado en su centro es inercial, si los ejes no giran respecto de las estrellas fijas. Consideremos el sistema <math display=\"inline\"><mi>S</mi></math> del laboratorio. Tomaremos la velocidad angular de la Tierra como constante, aunque no sea del todo cierto; por tanto, no hay fuerza azimutal. Para calcular la fuerza de arrastre hay que calcular la aceleración del laboratorio. Como en el sistema <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math> el vector de posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> de <math display=\"inline\"><mi>O</mi></math> gira con velocidad angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> de la Tierra a lo largo del paralelo, su velocidad es la dada por el resultado (2.60) (el vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> es constante en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, que se mueve y gira junto con la Tierra): <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que esta velocidad es tangente al paralelo que es la trayectoria del origen del laboratorio, hacia el este, y que su módulo es el radio del paralelo por la velocidad angular, como cabía esperar: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mi mathvariant=\"normal\">cos</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como esa misma velocidad también gira con velocidad angular <math display=\"inline\"><mi>ω</mi></math> a lo largo del paralelo junto con el laboratorio, para calcular la aceleración, que es su derivada, podemos valernos de nuevo de la ecuación (2.60): <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Velocidad y aceleración del laboratorio.",
     "src": "../media/irudiak/83b7087fe1961fcc.svg",
     "zabalera": 207
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que esta aceleración es la aceleración centrípeta del movimiento circular: está en la dirección del radio del paralelo, hacia el eje de la Tierra, es decir, hacia el centro de la trayectoria, y su módulo es el radio de la trayectoria por el cuadrado de la velocidad angular: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mi mathvariant=\"normal\">cos</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>ω</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el sistema del laboratorio la ecuación del movimiento (2.78) de una partícula se escribe así: <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> donde la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> es la fuerza total medida en sistemas inerciales. Teniendo en cuenta el valor del radio <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> de la Tierra, se entiende fácilmente que casi siempre <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> y, por tanto, la fuerza centrífuga <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es despreciable <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> frente a la fuerza de arrastre. Por tanto, en muy buena aproximación la ecuación del movimiento (2.95) se escribe así: <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> También en este caso, en la mayoría de los libros de texto se dice que la fuerza de inercia <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es la centrífuga, aunque en realidad sea consecuencia de la aceleración del laboratorio. (La razón, de nuevo, puede ser el sentido de esa fuerza.)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que en el sistema del laboratorio se desarrollan así algunas magnitudes fundamentales: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>R</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El vector unitario que aparece entre paréntesis en la última expresión está en la dirección del radio del paralelo e indica la dirección y el sentido de la fuerza centrífuga. Teniendo esto en cuenta, del resultado (2.98) se recupera el módulo (2.94)."
    },
    {
     "mota": "testua",
     "html": "Veremos a continuación algunas aplicaciones de la ecuación del movimiento (2.96)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aceleración de la gravedad"
    },
    {
     "mota": "testua",
     "html": "Supongamos que para medir el peso de una partícula usamos el dinamómetro de la figura. Diríamos que el peso de la partícula es opuesto a la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> que el dinamómetro ejerce sobre ella, pues la ecuación de equilibrio de <math display=\"inline\"><mi>m</mi></math> es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><mn>0</mn></mrow></math>. Por tanto, la dirección del peso (la <strong>vertical</strong>, que el albañil define mediante la plomada) es la del dinamómetro y su módulo, si la masa del dinamómetro es despreciable, el dado por la deformación del muelle."
    },
    {
     "mota": "irudia",
     "oina": "Dinamómetro para medir el peso.",
     "src": "../media/irudiak/e20cee8ddde57243.svg",
     "zabalera": 168
    },
    {
     "mota": "testua",
     "html": "Pero estudiemos con más atención la ecuación de equilibrio. En ella hay que incluir tres fuerzas: la fuerza de contacto <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> ejercida por el dinamómetro, la atracción gravitatoria <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>g</mi></msub><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math> de la Tierra y la fuerza <em>centrífuga</em> <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>z</mi></msub><mo>=</mo><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Si la Tierra fuera totalmente esférica y simétrica, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>g</mi></msub></math> sería radial; pero en la práctica, a causa de la distribución real de masas de la Tierra, se desviará algo de esa dirección. Sin embargo, en la parte izquierda de la figura 2.16 la hemos dibujado en la dirección radial. Para que se pueda ver la fuerza centrífuga que aparece en la misma figura, se ha ampliado mucho, sin respetar la escala."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Teniendo en cuenta que en un año hay por término medio 365,26 días, demuestra que la velocidad angular de la Tierra es <math display=\"block\"><mrow><mi>ω</mi><mo>≈</mo><mn>7.29</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>. Deduce que la contribución de la fuerza centrífuga es siempre menor que el 3,5 ‰ del peso."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El peso y la vertical definidos por el dinamómetro, por tanto, no serán los correspondientes a la mera atracción gravitatoria <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>g</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>z</mi></msub></mrow></math>, sino que habrá una pequeña desviación producida por la fuerza <em>centrífuga</em>. Para ver el sentido de esta última, dibujemos los ejes cartesianos y las componentes del peso, en los casos de los hemisferios norte y sur, teniendo en cuenta que el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> se dirige hacia el polo sur. Como se ve en la parte derecha de la figura 2.16 (de nuevo sin respetar las escalas), la desviación producida por la <em>centrífuga</em> ocurre hacia el sur (norte) en el hemisferio norte (sur)."
    },
    {
     "mota": "irudia",
     "oina": "Atracción gravitatoria y fuerza centrífuga en el plano del meridiano.",
     "src": "../media/irudiak/a2ae919c22ad76c6.svg",
     "zabalera": 297
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Movimiento vertical"
    },
    {
     "mota": "testua",
     "html": "Supongamos que una partícula cae en el sistema del laboratorio en dirección (casi) vertical (porque la hemos soltado desde el reposo o lo que sea): <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>≈</mo><mi>−</mi><mi>v</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Teniendo en cuenta esto y (2.97), la fuerza de Coriolis es de este tipo: <math display=\"block\"><mrow><mi>−</mi><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>≈</mo><mn>2</mn><mi>m</mi><mi>ω</mi><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mi>.</mi></mrow></math> Por tanto, como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mo>≥</mo><mn>0</mn></mrow></math>, la partícula se desviará hacia el este (siempre un poquito) o, si tenemos en cuenta el efecto de la centrífuga, hacia el sudeste (nordeste) en el hemisferio norte (sur)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obtén el mismo resultado calculando gráficamente la fuerza de Coriolis."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como se ve, esta desviación puede usarse para hacer una prueba directa de la rotación de la Tierra que no se basa en la astronomía, pero el experimento no es nada fácil (véase [84]) y en el apartado 2.6.5 veremos cómo puede hacerse con otro método."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Movimiento horizontal"
    },
    {
     "mota": "testua",
     "html": "Si, por efecto de fuerzas adecuadas, la partícula se mueve en un plano horizontal (o muy cerca de él), <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>≈</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> esta es la fuerza de Coriolis, teniendo en cuenta (2.97): <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>C</mi></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>≈</mo><mi>−</mi><mn>2</mn><mi>m</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mn>2</mn><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> La componente perpendicular de esta, <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, no nos interesa aquí: quizá se anule con otra fuerza vertical. La componente horizontal, <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mtext mathvariant=\"normal\">Ch</mtext></msub><mo>≈</mo><mi>−</mi><mn>2</mn><mi>m</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math>, es perpendicular a la velocidad y, teniendo en cuenta que <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math> va hacia la izquierda y el signo de la latitud <math display=\"inline\"><mi>λ</mi></math>, se ve fácilmente que la desviación horizontal de la velocidad producida por la fuerza de Coriolis es hacia la derecha (hacia la izquierda) en el hemisferio norte (sur)."
    },
    {
     "mota": "irudia",
     "oina": "Fuerza de Coriolis en el movimiento horizontal.",
     "src": "../media/irudiak/12b833cd74f34d56.svg",
     "zabalera": 258
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obtén el mismo resultado calculando gráficamente la fuerza de Coriolis."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hay que subrayar de nuevo que la fuerza de Coriolis es muy pequeña y que, para que haya que tener en cuenta su efecto, la duración del movimiento debe ser bastante larga. Así ocurre, por ejemplo, en la atmósfera con el movimiento del aire y, como es sabido, la fuerza de Coriolis es precisamente la razón de que los ciclones sean contrarios a las agujas del reloj en el hemisferio norte (véase, por ejemplo, [8] o [12])."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulo de Foucault"
    },
    {
     "mota": "testua",
     "html": "En 1851 Foucault demostró ante el público en general, directamente (es decir, sin usar la astronomía), que la Tierra gira en torno a su eje, mediante un péndulo de unos 67 m en el Panteón de París (véanse la figura de la página 75 y la nota al pie de la página 235). En efecto, en el caso de un péndulo, la masa sufrirá una pequeña componente horizontal de la fuerza de Coriolis y en cada medio período se desviará un poco hacia la derecha (en el hemisferio norte). En consecuencia, el plano de oscilación se desviará poco a poco en el sentido de las agujas del reloj, como se muestra <em>sin respetar la escala</em> en la figura 2.18. Para calcular cómo se ha desviado, veamos para empezar qué ocurre si el péndulo está en el polo norte. Desde el punto de vista del observador inercial el plano de oscilación es constante, pero la Tierra da una vuelta por debajo en 24 horas. En consecuencia, desde el punto de vista de la Tierra el cambio de orientación del plano de oscilación en una hora vale <math display=\"inline\"><mrow><mn>15</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Rotación del plano de oscilación del péndulo de Foucault en el hemisferio norte.",
     "src": "../media/irudiak/465a58b325d15b28.svg",
     "zabalera": 173
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuánto tiempo debe transcurrir en el polo norte para que el plano de oscilación vuelva a la posición inicial?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para ver lo que ocurre en todas las demás latitudes, recordaremos que la componente horizontal de la fuerza de Coriolis (2.104) es proporcional a <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi></mrow></math>: en el caso general esperamos que la rotación del plano de oscilación en una hora valga <math display=\"inline\"><mrow><mn>15</mn><msup><mi></mi><mo>∘</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi></mrow></math>, y demostraremos que así ocurre. Naturalmente, en el hemisferio sur el plano de oscilación del péndulo girará en sentido contrario a las agujas del reloj, y es inútil construir en el ecuador uno de los péndulos de Foucault que se ven en muchos museos de ciencia."
    },
    {
     "mota": "testua",
     "html": "Para estudiar el movimiento del péndulo hemos usado para empezar las coordenadas esféricas de la figura 2.19. Supongamos que no hay fuerza de Coriolis, que el rozamiento es despreciable y que la amplitud de las oscilaciones es lo bastante pequeña para hacer <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>. Entonces, de la ecuación del movimiento (1.50) queda: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>≜</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Péndulo en coordenadas esféricas.",
     "src": "../media/irudiak/ab713cbbe81c1b6f.svg",
     "zabalera": 89
    },
    {
     "mota": "testua",
     "html": "Si la oscilación del péndulo es muy pequeña, en buena aproximación el movimiento ocurrirá en el plano horizontal <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>l</mi></mrow></math> y en él, según los resultados del apartado B.1.3, tenemos <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>≈</mo><mi>l</mi><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>≈</mo><mi>l</mi><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mrow></math>. Como el ángulo <math display=\"inline\"><mi>ϕ</mi></math> es constante, las ecuaciones de las coordenadas <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math> se escriben así, como consecuencia de (2.105) <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ahora, tras definir <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≜</mo><mi>−</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi></mrow></math>, si tenemos en cuenta la fuerza de Coriolis (2.104), las ecuaciones del movimiento quedan así: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Ω</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>y</mi><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">Ω</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Estas se estudian fácilmente usando números complejos (véase el apartado B.4). Para escribir las dos ecuaciones juntas, usaremos la magnitud compleja <math display=\"block\"><mrow><mi>ζ</mi><mo>≜</mo><mi>x</mi><mo>+</mo><mi>i</mi><mi>y</mi></mrow></math> que da la posición del péndulo en el plano horizontal."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que con la definición (2.110) las ecuaciones del movimiento (2.111)–(2.112) quedan así: <math display=\"block\"><mrow><mover><mi>ζ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mn>2</mn><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mover><mi>ζ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>ζ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como esta ecuación diferencial es lineal de coeficientes constantes, recordando lo dicho en el apartado 1.4.4, probaremos una solución del tipo <math display=\"inline\"><mrow><mi>ζ</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mi>α</mi></msup></mrow></math>. Así, tras eliminar la constante <math display=\"inline\"><mi>A</mi></math> y la exponencial, tenemos: <math display=\"block\"><mrow><msup><mi>α</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>α</mi><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mo>±</mo><msqrt><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>.</mi></mrow></math> En el caso de la Tierra <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es muy pequeño y nos queda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≪</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>α</mi><mo>≈</mo><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mo>±</mo><mi>i</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. La solución general de la ecuación del movimiento, por tanto, es esta: <math display=\"block\"><mrow><mi>ζ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><msub><mi>ζ</mi><mn>0</mn></msub><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ζ</mi><mn>0</mn></msub><mo>≜</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>0</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>ω</mi><mn>0</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son constantes de integración. Pero la solución sin fuerza de Coriolis es <math display=\"inline\"><msub><mi>ζ</mi><mn>0</mn></msub></math>. Por tanto, para tener en cuenta dicha fuerza basta multiplicar la solución <math display=\"inline\"><msub><mi>ζ</mi><mn>0</mn></msub></math> por el número complejo <math display=\"inline\"><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup></math>, que expresa una rotación de valor <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>, pues al multiplicar un número complejo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>r</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ϕ</mi></mrow></msup></mrow></math> por la exponencial imaginaria <math display=\"inline\"><msup><mi>e</mi><mrow><mi>i</mi><mi>α</mi></mrow></msup></math> el número sufre una rotación pura de ángulo <math display=\"inline\"><mi>α</mi></math>: <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>α</mi></mrow></msup><mi>z</mi><mo>=</mo><mi>r</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> En consecuencia, el plano de oscilación del péndulo está girando en torno a la vertical con velocidad angular <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>−</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi></mrow></math>, como esperábamos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Movimiento bajo la gravedad"
    },
    {
     "mota": "testua",
     "html": "Para estudiar la trayectoria de una partícula que se mueve cerca de la superficie de la Tierra y bajo la acción de la atracción gravitatoria, si elegimos el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> del sistema del laboratorio de modo que pase por la posición inicial, las condiciones iniciales se expresan así: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>u</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> (Esto quiere decir que en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> lanzamos la partícula con velocidad <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>u</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> desde el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> y desde la altura <math display=\"inline\"><mi>h</mi></math>.) Si la única fuerza no inercial que actúa sobre la partícula es el peso (y, por tanto, el rozamiento del aire es despreciable), la ecuación del movimiento (2.96) es esta: <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> <math display=\"inline\"><mi>h</mi></math> Teniendo en cuenta que la altura es pequeña, podemos admitir que la aceleración de la gravedad es constante durante el movimiento. Por otra parte, como la velocidad angular de la Tierra es (2.99), <math display=\"inline\"><msup><mi>ω</mi><mn>2</mn></msup></math>, <math display=\"inline\"><msup><mi>ω</mi><mn>3</mn></msup></math> y los términos con potencias de orden superior los despreciaremos sistemáticamente en el cálculo, admitiendo que la duración total <math display=\"inline\"><mi>T</mi></math> del movimiento es lo bastante pequeña para que <math display=\"inline\"><mrow><mi>ω</mi><mi>T</mi><mo>≪</mo><mn>1</mn></mrow></math>. Como la fuerza <em>centrífuga</em> es proporcional a <math display=\"inline\"><msup><mi>ω</mi><mn>2</mn></msup></math>, no la tendremos en cuenta (o, si preferimos, la incluiremos en el peso) y la ecuación del movimiento (2.119) se escribirá así: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒈</mi><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Como <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> es constante, esta expresión se integra directamente y, usando las condiciones (2.118), obtenemos la velocidad: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><mi>t</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Sustituyendo este resultado en la aceleración (2.120), queda <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒈</mi><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><mi>t</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>4</mn><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, pero el último término es despreciable pues es proporcional a <math display=\"inline\"><msup><mi>ω</mi><mn>2</mn></msup></math>: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒈</mi><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><mi>t</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como en el miembro de la derecha no aparece <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>, esto se integra directamente y, usando las condiciones iniciales, se obtienen la velocidad <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><mi>t</mi><mi mathvariant=\"bold-italic\">𝒈</mi><mo>−</mo><mn>2</mn><mi>t</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math> y la posición <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>0</mn></msub><mo>+</mo><mi>t</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>t</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒈</mi><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>t</mi><mn>3</mn></msup><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒈</mi></mrow></math>. Si se prefieren las coordenadas: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mi>t</mi><mo>+</mo><mi>ω</mi><msub><mi>u</mi><mi>y</mi></msub><msup><mi>t</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>u</mi><mi>y</mi></msub><mi>t</mi><mo>−</mo><mi>ω</mi><msup><mi>t</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mi>x</mi></msub><mi mathvariant=\"normal\">sin</mi><mi>λ</mi><mo>+</mo><msub><mi>u</mi><mi>z</mi></msub><mi mathvariant=\"normal\">cos</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>ω</mi><mi>g</mi><msup><mi>t</mi><mn>3</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>h</mi><mo>+</mo><msub><mi>u</mi><mi>z</mi></msub><mi>t</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>ω</mi><msub><mi>u</mi><mi>y</mi></msub><msup><mi>t</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>.</mi></mrow></math> Naturalmente, si despreciamos todos los <math display=\"inline\"><mi>ω</mi></math> (es decir, si no se tiene en cuenta la fuerza de Coriolis) se recuperan los resultados conocidos del tiro parabólico."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa las expresiones de aquí para recuperar los resultados principales del apartado 2.6.3, en el caso de una partícula que se suelta desde el reposo."
      }
     ]
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
     "testua": "Inversiones"
    },
    {
     "mota": "testua",
     "html": "<em>¿Cuál es el significado de la matriz\nortogonal <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>?</em>"
    },
    {
     "mota": "testua",
     "html": "La matriz se escribe así: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La segunda matriz es la matriz de rotación (2.32) que describe la rotación en torno a <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>. La primera matriz describe la inversión <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Se puede hacer una descomposición parecida para demostrar que cualquier matriz ortogonal que cumpla la condición <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math><span class=\"j-oin\">[El determinante de una matriz ortogonal es siempre 1 o <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>, como demostraremos en el ejercicio 2.4. Cuando el determinante de la matriz ortogonal es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mn>1</mn></mrow></math>, es una auténtica matriz de rotación y en el caso <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> el producto de una matriz de inversión y una matriz de rotación.]</span> es la composición de una rotación y una inversión."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es única esa descomposición?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eje de rotación y ángulo de rotación"
    },
    {
     "mota": "testua",
     "html": "<em>Si se conoce una matriz de rotación, ¿cómo se puede saber cuáles son el eje de rotación y el\nángulo de rotación?</em>"
    },
    {
     "mota": "testua",
     "html": "Todos los vectores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑼</mi></math> que están en el eje de rotación no cambian: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mi>.</mi></mrow></math> es paralelo a los vectores propios correspondientes al valor propio 1 y, por tanto, al eje de rotación. (Los otros dos valores propios son <math display=\"inline\"><msup><mi>e</mi><mrow><mi>±</mi><mi>i</mi><mi>ϕ</mi></mrow></msup></math>.)"
    },
    {
     "mota": "testua",
     "html": "Por otra parte, como la traza es invariante bajo las transformaciones de semejanza (véase el problema 5.19), si el eje cartesiano <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> se elige en el eje de rotación, la traza se calcula fácilmente, pues en ese caso la matriz de rotación se reduce a la expresión (2.32): <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>1</mn></mrow></math></span>. En consecuencia, este es el ángulo de rotación (en cualquier sistema de referencia): <math display=\"block\"><mrow><mi>ϕ</mi><mo>=</mo><mi>±</mi><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>−</mo><mn>1</mn></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema restringido circular de los tres cuerpos"
    },
    {
     "mota": "testua",
     "html": "<em>En un sistema astronómico doble que estudiaremos, los dos cuerpos principales, es decir, los <strong>primarios</strong>,\nse mueven en órbitas circulares uno en torno al otro. (Pueden ser el Sol y la Tierra, la Tierra y la Luna o\nJúpiter e Ío, por ejemplo.) Supongamos que la masa del tercer cuerpo es despreciable (es decir,\nque no tiene ninguna influencia en el movimiento de los primarios). Para estudiar el movimiento de este <strong>planetoide</strong>,\nelegimos como origen del sistema de referencia el centro de masas y los ejes coordenados\ngiran junto con los primarios, de modo que los primarios estén en reposo relativo en el eje <math display=\"inline\"><mi>X</mi></math>.\nEncuentra las ecuaciones del movimiento del planetoide.</em>"
    },
    {
     "mota": "testua",
     "html": "Si la posición del centro de masas es el punto <math display=\"inline\"><mi>O</mi></math> de la figura, se cumple lo siguiente: <math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>l</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/e9b43fb51461668d.svg",
     "zabalera": 246
    },
    {
     "mota": "testua",
     "html": "La ecuación del movimiento relativo de los principales es la del problema de los dos cuerpos (recuerda el apartado 1.5.6). En este caso, como la fuerza entre las partículas viene dada por la ley de gravitación universal de Newton, se escribe así: <math display=\"block\"><mrow><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>G</mi><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>G</mi><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mi>.</mi></mrow></math> Las componentes de la ecuación del movimiento <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> del planetoide son estas: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><mfrac><mrow><mi>x</mi><mo>+</mo><msub><mi>l</mi><mn>1</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msub><mi>l</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>−</mo><mi>G</mi><msub><mi>m</mi><mn>2</mn></msub><mfrac><mrow><mi>x</mi><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>+</mo><mn>2</mn><mi>ω</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><mfrac><mi>y</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msub><mi>l</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>−</mo><mi>G</mi><msub><mi>m</mi><mn>2</mn></msub><mfrac><mi>y</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>−</mo><mn>2</mn><mi>ω</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>y</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub><mfrac><mi>z</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msub><mi>l</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>−</mo><mi>G</mi><msub><mi>m</mi><mn>2</mn></msub><mfrac><mi>z</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> de Lagrange"
    },
    {
     "mota": "testua",
     "html": "<em>Demuestra que el planetoide del ejercicio anterior puede estar en reposo relativo si él y\nlos primarios están situados en los vértices de un triángulo equilátero. ¿Hay algún otro punto de equilibrio\nrelativo?</em>"
    },
    {
     "mota": "testua",
     "html": "En realidad, en el problema 1.6.5 demostramos, en un contexto más general, aun sin despreciar la influencia de una partícula, que pueden darse soluciones triangulares así; pero aquí plantearemos el problema de otra manera, para estudiar de paso si existe algún otro punto de equilibrio."
    },
    {
     "mota": "testua",
     "html": "Definamos el parámetro <math display=\"inline\"><mi>α</mi></math> de modo que se cumpla lo siguiente: <math display=\"block\"><mrow><mi>α</mi><mo>≜</mo><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mfrac><msub><mi>l</mi><mn>2</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mrow></math> Si como unidad de longitud elegimos <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math>, las posiciones de los principales serán <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>α</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por otra parte, si como unidad de tiempo elegimos <math display=\"block\"><msqrt><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt></math>, será <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn></mrow></math>. Por tanto, las ecuaciones del movimiento en el sistema de los primarios se escriben así, usando las siguientes variables adimensionales: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>α</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>α</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>−</mo><mi>α</mi><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>α</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>α</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>+</mo><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>x</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>y</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>α</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>−</mo><mi>α</mi><mfrac><mi>y</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>α</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>−</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>y</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>z</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>α</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>−</mo><mi>α</mi><mfrac><mi>z</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>α</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>.</mi></mrow></math> Las posiciones de equilibrio relativo se obtienen haciendo <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Puntos de Lagrange.",
     "src": "../media/irudiak/4980de30cf638315.svg",
     "zabalera": 225
    },
    {
     "mota": "testua",
     "html": "(a) <strong>Soluciones lineales</strong>. En la recta que une los principales hay 3 posiciones <em>inestables</em>, pues la ecuación cúbica <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>α</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mi>α</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>3</mn></msup></mrow></mfrac><mo>+</mo><mi>α</mi><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>α</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>α</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>3</mn></msup></mrow></mfrac></mrow></math> que queda al hacer <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> tiene tres soluciones reales: los puntos <math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>3</mn></msub></math> de Lagrange."
    },
    {
     "mota": "testua",
     "html": "(b) <strong>Soluciones triangulares</strong>. Para que los denominadores de las ecuaciones del movimiento sean iguales hay que elegir <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>+</mo><mi>α</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> y, haciendo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, las otras dos ecuaciones son equivalentes a la siguiente: <math display=\"block\"><mrow><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></mfrac><mo>+</mo><mfrac><mi>α</mi><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Está claro que la ecuación se cumple cuando <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> en los denominadores. Estos son los puntos <math display=\"inline\"><msub><mi>L</mi><mn>4</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>5</mn></msub></math> de Lagrange: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><mo>,</mo><mi>±</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Se puede demostrar que son estables (gracias a la fuerza de Coriolis) cuando <math display=\"inline\"><mrow><mi>α</mi><mo>&lt;</mo><mn>0.0385</mn></mrow></math>: en el sistema de la Tierra y la Luna es <math display=\"inline\"><mrow><mi>α</mi><mo>≈</mo><mn>0.0123</mn></mrow></math> y en el caso del Sol y Júpiter <math display=\"inline\"><mrow><mi>α</mi><mo>≈</mo><mn>0.001</mn></mrow></math>. (Véase el apartado 4.6.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Efecto de Coriolis en el ecuador"
    },
    {
     "mota": "testua",
     "html": "<em>A veces se lee que el sentido del agua al salir por el desagüe de las bañeras\nse invierte en cuanto se cruza el ecuador con los recipientes. ¿Qué piensas tú de esto?\n¿Puede ser verdad?</em>"
    },
    {
     "mota": "testua",
     "html": "Como en las proximidades del ecuador el efecto es muy pequeño (recuerda que es proporcional a <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi></mrow></math>), no parece que pueda ser mayor que otros efectos (como la forma de la bañera), de ninguna manera. Incluso lejos del ecuador, para medir el efecto el sistema debe ser totalmente simétrico y se necesitan horas para que el agua quede suficientemente quieta. Parece que el primero de estos experimentos fue el que hizo A. Shapiro en 1962 [111]."
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
     "html": "<strong>smallcaps[Transformación de Galileo]</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si se suelta un bloque desde el punto más alto de un plano inclinado liso, ¿cuál es la velocidad al llegar al suelo? Si en otro sistema de referencia inercial el plano se mueve con velocidad horizontal constante <math display=\"inline\"><mi>V</mi></math>, ¿cuál es allí la velocidad final del bloque? ¿Se conserva la energía mecánica en este sistema de referencia? Comenta el resultado."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/7bca92db80c5c747.svg",
     "zabalera": 186
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al lanzar una piedrecita en aguas quietas se producen ondas circulares. ¿Cómo serán en una corriente de agua?"
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
       "html": "La barca de la figura se mueve con velocidad <math display=\"inline\"><mi>v</mi></math> respecto del agua. La velocidad de la corriente es <math display=\"inline\"><mi>V</mi></math> en todos los puntos. (a) Para que el camino recorrido respecto de la tierra al cruzar el río sea mínimo, ¿hacia dónde hay que remar? (b) ¿Y para que el tiempo necesario sea mínimo?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/7653fd8e531d5cef.svg",
     "zabalera": 207
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La velocidad de la corriente de la figura es <math display=\"inline\"><mi>V</mi></math> en todos los puntos y la barca se mueve siempre con velocidad <math display=\"inline\"><mi>V</mi></math> hacia el punto <math display=\"inline\"><mi>O</mi></math>. Usa las coordenadas polares de la figura para obtener la ecuación de la trayectoria. ¿Cuál es la distancia <math display=\"inline\"><mrow><mi>O</mi><mi>B</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/4170e3ac0cc73516.svg",
     "zabalera": 207
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos amigos van de la ciudad <math display=\"inline\"><mi>A</mi></math> al pueblo <math display=\"inline\"><mi>B</mi></math>, para volver enseguida a <math display=\"inline\"><mi>A</mi></math>. Eneko va por el río, con velocidad <math display=\"inline\"><mi>v</mi></math> respecto del agua. La velocidad de la corriente es <math display=\"inline\"><mi>V</mi></math> en todos los puntos. Urko, que va por la orilla del río con velocidad <math display=\"inline\"><mi>v</mi></math>, le dice a Eneko al principio: «Ahora ve más deprisa, pero a la vuelta seré yo quien vaya más deprisa y al final llegaremos los dos a la vez»."
      },
      {
       "mota": "testua",
       "html": "«Tienes razón» —le responde Eneko— «si hubiéramos llegado a la conclusión de que en el sistema de referencia de la tierra uno de nosotros llega antes, haciendo un estudio simétrico en el sistema inercial del agua obtendríamos que llega antes el otro: como eso es imposible, tenemos que llegar los dos a la vez». ¿Qué piensas tú de estos razonamientos?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/a443f68413bfcf5e.svg",
     "zabalera": 207
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se ha soltado una canica, en el gran vestíbulo de un hotel, desde el segundo piso. Un observador está en el suelo y otro en un ascensor de cristal que sube con velocidad constante. ¿Son iguales las siguientes magnitudes medidas por ambos: <br>(a) la velocidad de la canica en un instante, <br>(b) la aceleración en un instante, <br>(c) el intervalo de tiempo para ir del segundo piso al suelo, <br>(d) el camino total recorrido, <br>(e) la variación de la energía cinética, <br>(f) el trabajo total realizado por el peso?"
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
       "html": "El aparato móvil H de la figura coloca <math display=\"inline\"><mi>ν</mi></math> bolitas en la cinta transportadora por unidad de tiempo. ¿Cuántas bolitas medirá la célula fotoeléctrica F por unidad de tiempo, si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Usa el sistema de la cinta para encontrar la distancia entre las bolitas y el sistema de la célula para calcular el número de detecciones."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/c64f2653c71da873.svg",
     "zabalera": 203
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un avión va, en línea recta, del punto <math display=\"inline\"><mi>A</mi></math> al <math display=\"inline\"><mi>B</mi></math> y de vuelta del <math display=\"inline\"><mi>B</mi></math> al <math display=\"inline\"><mi>A</mi></math>. En la dirección que forma el ángulo <math display=\"inline\"><mi>α</mi></math> con el segmento <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> sopla en todo momento un viento de velocidad <math display=\"inline\"><mi>u</mi></math>. Si la velocidad del avión respecto del aire es <math display=\"inline\"><mi>v</mi></math>, ¿cuánto tiempo necesitará para hacer el viaje de ida y vuelta? ¿En qué dirección debe soplar el viento para que dicho tiempo sea máximo (mínimo)? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": <math display=\"inline\"><mrow><mi>u</mi><mo>&lt;</mo><mi>v</mi></mrow></math> da."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Experimento de Michelson y Morley",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La figura muestra el diagrama del experimento que realizaron Michelson y Morley en 1887. Se creía que el valor <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub></mrow></msqrt></mrow></math> que las ecuaciones de Maxwell dan a la velocidad de la luz —véase (9.167)— debía medirse en el sistema del éter. Los dos brazos del interferómetro son iguales, pero uno está en la dirección del viento del éter (es decir, en la del movimiento relativo entre el laboratorio y el éter) y el otro en la dirección perpendicular. Encuentra cuánto vale en la <em>mecánica galileana</em> la diferencia entre los tiempos necesarios para ir y volver por los dos brazos. ¿Cómo podría usarse dicha diferencia, que se quería medir con el interferómetro, para calcular la velocidad del laboratorio en el sistema del éter? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Observaciones</em>"
      },
      {
       "mota": "testua",
       "html": ": El resultado negativo del experimento se explica fácilmente usando la relatividad del tema 3, pues la velocidad real de la luz es <math display=\"inline\"><mi>c</mi></math> en los dos brazos. Por otra parte, parece que Michelson hizo mal el estudio galileano anterior del experimento que realizó en 1881."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/e4c2a33a79a676f9.svg",
     "zabalera": 106
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Es una colisión elástica entre la partícula ligera de la figura y la pared pesada y móvil. ¿Cuáles son, tras la colisión, la velocidad escalar <math display=\"inline\"><mi>w</mi></math> y la dirección <math display=\"inline\"><mi>β</mi></math> de la partícula? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>"
      },
      {
       "mota": "testua",
       "html": ": Recuerda el problema 1.111."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/dfdc7902e1088d6b.svg",
     "zabalera": 148
    },
    {
     "mota": "problema",
     "izena": "Expansión del universo",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una nube de polvo la partícula <math display=\"inline\"><mi>A</mi></math> está quieta y todas las demás se alejan de <math display=\"inline\"><mi>A</mi></math> en dirección radial, con una velocidad proporcional a la distancia (<strong>ley de Hubble</strong>). ¿Cómo es la distribución de velocidades que se ve en el sistema de referencia de otra partícula?"
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
       "html": "¿Cuál es la distancia mínima entre los dos barcos de la figura, si se mueven con velocidad constante en aguas tranquilas?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/c0e1e1e676e84458.svg",
     "zabalera": 207
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos personas hacen el viaje de ida y vuelta entre los dos extremos de una cinta transportadora de un gran aeropuerto, una por encima de la cinta y la otra por fuera, en dirección paralela. Si las longitudes y los períodos de sus pasos son iguales, ¿quién hace antes el viaje de ida y vuelta?"
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
       "html": "Desde una plataforma horizontal que sube con velocidad constante <math display=\"inline\"><mi>u</mi></math> se suelta una pelota desde una altura <math display=\"inline\"><mi>h</mi></math>. Calcula cuáles son los intervalos de tiempo entre los botes, si los botes son totalmente elásticos y el efecto del aire es despreciable."
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
       "html": "La velocidad escalar de un ascensor es la misma al subir y al bajar. Cuando está a la altura del tercer piso se cae un ladrillo desde el punto más alto del hueco del ascensor. ¿Cuándo será mayor el daño, si el ascensor está subiendo o bajando? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Desprecia el efecto del aire."
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
       "html": "Una partícula en reposo se desintegra en dos partes iguales que se mueven con velocidad escalar <math display=\"inline\"><mi>u</mi></math>. ¿Cuáles son las velocidades máxima y mínima de los fragmentos cuando la partícula se mueve en el laboratorio con velocidad escalar <math display=\"inline\"><mi>v</mi></math>?"
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
       "html": "¿Cuál es la mayor velocidad que puede alcanzar un trineo de hielo con vela, si las direcciones de la vela y del viento son las de la figura?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/55ac411c2ca3b568.svg",
     "zabalera": 154
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre una cinta transportadora que se mueve con velocidad constante <math display=\"inline\"><mi>v</mi></math> cae un disco pequeño que se mueve en dirección transversal con velocidad <math display=\"inline\"><mi>u</mi></math>. El coeficiente de rozamiento entre el disco y la cinta es <math display=\"inline\"><mi>μ</mi></math>. Calcula cuál es la anchura mínima <math display=\"inline\"><mi>d</mi></math> de la cinta para que el disco no salga de ella."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/e99d6ce0b5760609.svg",
     "zabalera": 212
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La escalera mecánica de una estación del metro de Bilbao tarda <math display=\"inline\"><mn>80</mn></math> s en llevar a una persona desde el punto inferior al superior. La misma persona necesita cuatro minutos para recorrer esa distancia por la escalera ordinaria contigua. ¿Cuánto tiempo necesitará si, estando en la escalera mecánica, sube los peldaños con la velocidad del caso anterior?"
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
       "html": "En el sistema inercial <math display=\"inline\"><mi>S</mi></math> una partícula gira en torno al origen, en la circunferencia de radio <math display=\"inline\"><mi>R</mi></math> del plano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>, con velocidad escalar constante <math display=\"inline\"><mi>v</mi></math>. La masa de la partícula es <math display=\"inline\"><mi>m</mi></math> y la energía cinética <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math> constante. Comprueba que en el sistema inercial <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> que se mueve con velocidad <math display=\"inline\"><mrow><mi>v</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> la energía cinética es variable: <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><msup><mi>T</mi><mo>′</mo></msup><mo>≤</mo><mn>4</mn><mi>T</mi></mrow></math>. ¿Qué produce esa variación de la energía cinética?"
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
       "html": "La pista de la figura es lisa. Un cuerpo pequeño se suelta desde la altura <math display=\"inline\"><mi>h</mi></math>, su energía cinética es cero y la energía potencial <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi></mrow></math>. Como en el plano horizontal la velocidad del cuerpo es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>, su energía cinética es <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi></mrow></math> y la potencial cero: la energía mecánica se conserva, naturalmente."
      },
      {
       "mota": "testua",
       "html": "Estudiemos ahora ese movimiento en el sistema inercial que se mueve con velocidad <math display=\"inline\"><mi>v</mi></math>. Al principio, la energía cinética es <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>m</mi><mi>g</mi><mi>h</mi></mrow></math> y la potencial <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>h</mi></mrow></math>. Al final está parado y las energías cinética y potencial son cero. ¿Adónde ha ido la energía mecánica inicial <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><mi>g</mi><mi>h</mi></mrow></math>? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Solo se pide una explicación cualitativa. Para una explicación cuantitativa hace falta el modelo del codo que une los dos planos."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/2a85c23ae0d9f677.svg",
     "zabalera": 186
    },
    {
     "mota": "testua",
     "html": "<strong>smallcaps[Sistemas de referencia con aceleración lineal]</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, en el caso de la traslación pura estudiada en el apartado 2.1, la energía cinética y el momento lineal de una partícula cambian según las transformaciones siguientes: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msup><mi>T</mi><mo>′</mo></msup><mo>+</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>′</mo></msup><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mo>′</mo></msup><mo>+</mo><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math>"
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
       "html": "Consideremos un sistema de partículas en los sistemas de referencia inerciales <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>*</mo></msup></math> del centro de masas de las partículas y en el sistema no inercial <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> que se mueve acelerado y sin girar los ejes. <br>(a) Si el momento lineal total se conserva en el sistema <math display=\"inline\"><mi>S</mi></math>, ¿se conserva en los otros sistemas? <br>(b) Si la energía cinética total se conserva en el sistema <math display=\"inline\"><mi>S</mi></math>, ¿se conserva en los otros sistemas? <br>(c) Si una colisión es elástica en el sistema <math display=\"inline\"><mi>S</mi></math>, ¿será elástica en los demás? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Explica tus respuestas para todos los sistemas."
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
       "html": "¿Qué cambia en el problema 2.14 si la plataforma se mueve con aceleración vertical <math display=\"inline\"><mi>a</mi></math>?"
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
       "html": "El sistema de la figura está en equilibrio bajo la acción de la gravedad. La masa del muelle es despreciable. Si se corta la cuerda de arriba, ¿cuál es al principio la aceleración de cada masa? Describe el movimiento del sistema."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/f992fe64be2a65dd.svg",
     "zabalera": 49
    },
    {
     "mota": "problema",
     "izena": "Problema de los dos cuerpos y peso",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al definir el problema de los dos cuerpos en el apartado 1.5.6, admitimos que era un sistema aislado. ¿Qué cambia si las dos partículas, además de las fuerzas internas, sufren la acción del campo gravitatorio uniforme de la Tierra?"
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
       "html": "El péndulo matemático, que al principio estaba quieto en la posición vertical estable, se mueve con la aceleración constante <math display=\"inline\"><mi>a</mi></math> de la figura. Usa el principio de equivalencia para demostrar que el péndulo oscilará entre la posición vertical y la horizontal cuando se cumple la condición siguiente: <math display=\"block\"><mrow><mi>g</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/b349548c486b29da.svg",
     "zabalera": 131
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos que el polo de fuerzas del campo de fuerzas armónico isótropo del problema 4.5 se mueve con aceleración constante <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math> en un sistema inercial. Valiéndote de la solución de dicho problema (véase la página 745), describe cómo son las órbitas en el sistema acelerado que se mueve con el polo de fuerzas, sin girar."
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
       "html": "Una barra lisa horizontal empieza a moverse con la aceleración horizontal constante <math display=\"inline\"><mi>a</mi></math> de la figura. ¿Cuánto tiempo necesitará la cuenta, que estaba en reposo en el centro, para salir de la barra?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/ed0e9894e0299e22.svg",
     "zabalera": 190
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el tanque paralelepipédico de la figura la profundidad del agua es <math display=\"inline\"><mi>h</mi></math> cuando está en reposo. Si se mueve con aceleración constante <math display=\"inline\"><mi>a</mi></math>, ¿qué condición debe cumplir el valor <math display=\"inline\"><mi>a</mi></math> para que no se derrame el agua?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/ac1a63928b38ebd9.svg",
     "zabalera": 180
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué ocurre en el problema 1.149 si la plataforma se mueve con aceleración constante <math display=\"inline\"><mi>A</mi></math>?"
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
       "html": "El cuadro de la figura puede moverse sin obstáculos por guías verticales. Sujetando el cuadro, el péndulo se suelta desde el ángulo <math display=\"inline\"><mi>α</mi></math> y en el momento en que pasa por la vertical se suelta el cuadro. ¿Cómo se mueve a partir de ahí la masa <math display=\"inline\"><mi>m</mi></math> en el sistema del cuadro? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Desprecia el rozamiento y el efecto del aire."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/0b7f09e58ec1f20f.svg",
     "zabalera": 101
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la plataforma horizontal de un camión hay una caja en reposo. Los coeficientes de rozamiento estático y dinámico entre la plataforma y la caja son <math display=\"inline\"><msub><mi>μ</mi><mi>e</mi></msub></math> y <math display=\"inline\"><msub><mi>μ</mi><mi>d</mi></msub></math>, respectivamente. ¿Cuál puede ser la aceleración horizontal máxima del camión para que la caja no empiece a deslizar? Y si empieza a deslizar, ¿cuál es la aceleración respecto del suelo?"
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
       "html": "Dos discos pequeños iguales están sobre el hielo horizontal, unidos por una cuerda ligera de longitud <math display=\"inline\"><mrow><mn>2</mn><mi>l</mi></mrow></math>. En el punto medio de la cuerda empieza a aplicarse una fuerza horizontal <math display=\"inline\"><mi>F</mi></math> cuando <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, como se ve en la figura. Cuando los discos chocan quedan unidos. Calcula la energía cinética perdida en la colisión."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/36e3b2db1dfac493.svg",
     "zabalera": 108
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La varilla ligera de la figura puede girar sin obstáculos en un plano horizontal en torno a un eje vertical. En los extremos tiene dos bolitas de masas <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>. El eje está fijo en una plataforma horizontal y la plataforma se mueve con aceleración lineal constante <math display=\"inline\"><mi>a</mi></math>. Escribe la ecuación del movimiento de la varilla en el sistema de la plataforma. ¿Puede ocurrir que ese movimiento sea una oscilación pequeña? En caso afirmativo, ¿cuál es el período?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/cd7fec0426ffbb56.svg",
     "zabalera": 166
    },
    {
     "mota": "testua",
     "html": "<strong>smallcaps[Matrices de rotación y velocidad angular]</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuáles son las matrices correspondientes a las rotaciones en torno a los ejes <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> y <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "El producto de matrices de rotación no es conmutativo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Encuentra un ejemplo sencillo de la expresión anterior."
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
       "html": "Demuestra que la siguiente matriz es una matriz de rotación: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>/</mi><msqrt><mn>6</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><msqrt><mn>6</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><msqrt><mn>6</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><msqrt><mn>2</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> ¿Cuáles son las componentes de los vectores <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>i</mi></msub></math> en la base <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>j</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Velocidad angular <em></em>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los sistemas de referencia cartesianos <math display=\"inline\"><mi>S</mi></math>, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> y <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> tienen el mismo origen. La velocidad angular de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> en el sistema <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>1</mn></msub></math> y desde el punto de vista del sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> el sistema <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> se mueve con velocidad angular <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mn>2</mn></msub></math>. ¿Cuál es la velocidad angular del sistema <math display=\"inline\"><mi>S</mi></math> en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>? ¿Cuál es la velocidad angular del sistema <math display=\"inline\"><msup><mi>S</mi><mo>″</mo></msup></math> medida en el sistema <math display=\"inline\"><mi>S</mi></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>smallcaps[Sistemas de referencia giratorios]</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La partícula de la figura está en reposo en el sistema de inercia <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>. Desde el punto de vista del sistema <math display=\"inline\"><mrow><mi>O</mi><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup></mrow></math> que gira, por tanto, el movimiento de la partícula es circular. ¿Cuál es la fuerza que produce el movimiento acelerado en este último sistema? Estudia los casos <math display=\"inline\"><mrow><mover><mi>ϕ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>ϕ</mi><mo accent=\"true\">̈</mo></mover><mo>≠</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/4a9cb1b3784518ac.svg",
     "zabalera": 174
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La circunferencia de la figura gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> en torno a un eje vertical que pasa por su centro. El ángulo entre la normal del círculo y la vertical es <math display=\"inline\"><mi>α</mi></math>. Supongamos que una partícula puntual puede moverse a lo largo de la circunferencia sin rozamiento. ¿En qué punto hay que colocar la partícula para que permanezca en reposo relativo respecto de la circunferencia? ¿Cuándo es estable ese equilibrio relativo?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/793352fbb912e4bb.svg",
     "zabalera": 193
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La varilla de la figura gira con velocidad angular constante, siendo <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math>. La partícula puntual de masa <math display=\"inline\"><mi>m</mi></math> puede moverse sin rozamiento a lo largo de la varilla. Encuentra las ecuaciones del movimiento de la partícula."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/767481ffba62f878.svg",
     "zabalera": 126
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un tubo horizontal gira en torno a un eje vertical que pasa por uno de sus extremos con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. En su interior hay una masa <math display=\"inline\"><mi>m</mi></math> que puede moverse sin rozamiento. Si en el instante inicial está en reposo relativo en el punto que aparece en la figura, ¿cuál será la velocidad de la masa en el otro extremo? Calcula la fuerza que el tubo ejerce sobre la masa."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/73dd054b72966560.svg",
     "zabalera": 142
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mientras Leire gira en el tiovivo, Mirentxu, que llega tarde, va directamente hasta el tiovivo y allí se queda parada hasta que Leire se baja. <br>(a) «Cuando venías hacia mí, en mi sistema de referencia tu trayectoria era una espiral; pero no sé cuál era la fuerza que curvaba la trayectoria…», le dice Leire a Mirentxu. «Quizá la fuerza centrífuga», se atreve a decir Mirentxu. «Es imposible, porque es radial», le responde Leire. ¿Qué piensas tú? <br>(b) «De todos modos, cuando yo estaba quieta junto al tiovivo, ¿me veías girar a tu alrededor?», pregunta Mirentxu. «Sí, claro». «¿Y entonces no era la fuerza centrífuga, desde tu punto de vista, la causa de que mi trayectoria fuera circular?». ¿Qué debe responder Leire?"
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
       "html": "Una partícula que estaba al principio en reposo se suelta. Si la altura inicial <math display=\"inline\"><mi>h</mi></math> es mucho menor que el radio de la Tierra, ¿en qué punto golpeará el suelo?"
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
       "html": "Se lanza una partícula hacia el norte, siendo <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>0</mn></msub></math> la velocidad inicial y <math display=\"inline\"><mi>α</mi></math> el ángulo entre esta y la horizontal. Demuestra que la proyección de la trayectoria en el plano vertical inicial es parabólica, pero que la distancia entre ese plano y la partícula es esta: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>v</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>g</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><msup><mi>t</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>.</mi></mrow></math>"
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
       "html": "En una plataforma giratoria del museo de la ciencia se vierte agua hacia el eje de rotación de la plataforma y golpea el centro cuando la plataforma está quieta. Cuando está girando ocurre lo que se ve en la figura 2.21. ¿Hacia dónde hicimos girar la plataforma para sacar las fotografías?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Integral de Jacobi",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la siguiente magnitud es una constante del movimiento en el problema restringido circular de los tres cuerpos del ejercicio 2.7.3: <math display=\"block\"><mrow><mi>ϵ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>1</mn></msub></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msub><mi>l</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>−</mo><mfrac><mrow><mi>G</mi><msub><mi>m</mi><mn>2</mn></msub></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> ¿Cuál es el significado físico de cada término?"
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
       "html": "La masa de un planeta esférico homogéneo es <math display=\"inline\"><mi>M</mi></math> y su radio <math display=\"inline\"><mi>R</mi></math>. Si los pesos de los cuerpos en los polos son el doble de los medidos en el ecuador, ¿cuál es el período de rotación del planeta?"
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
       "html": "Un recipiente cilíndrico lleno de líquido gira en torno a su eje de simetría con velocidad angular <math display=\"inline\"><mi>ω</mi></math>. Un cuerpo pequeño, unido por una cuerda ligera a un punto del fondo, está en equilibrio relativo en la posición que se muestra en la figura. Usa el radio <math display=\"inline\"><mi>R</mi></math> del cilindro, la longitud <math display=\"inline\"><mi>l</mi></math> de la cuerda y el ángulo <math display=\"inline\"><mi>α</mi></math> para escribir la velocidad angular <math display=\"inline\"><mi>ω</mi></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/57e6a6d8355497fa.svg",
     "zabalera": 139
    },
    {
     "mota": "testua",
     "html": "<strong>smallcaps[Miscelánea]</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Puede ocurrir que un río vaya «cuesta arriba», es decir, que el nacimiento esté más cerca del centro de la Tierra que la desembocadura?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Fuerzas de inercia conservativas",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la fuerza centrífuga (2.82) es conservativa y que la energía potencial correspondiente es la siguiente: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Esta energía potencial depende del tiempo (si <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝝎</mi></math> no es constante, al menos), pero su gradiente es siempre opuesto a la fuerza centrífuga: <math display=\"block\"><mrow><mi>−</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow></mfrac><mi>.</mi></mrow></math> (Véase el apartado B.3.2.) ¿Qué otra fuerza de inercia es siempre conservativa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Geoide",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La superficie geométrica que definiría la superficie del agua si toda la superficie de la Tierra estuviera cubierta de océanos se llama «geoide». Para que dicha superficie estuviera en equilibrio, debería ser perpendicular a la fuerza total que sufren las gotas de agua. Las gotas en reposo sufren, además de la atracción gravitatoria, la fuerza centrífuga producida por la rotación de la Tierra. Comprueba que el geoide cumple la siguiente ecuación<span class=\"j-oin\">[Aquí despreciamos la falta de esfericidad de la Tierra, las irregularidades locales y los efectos relativistas.]</span>: <math display=\"block\"><mrow><mfrac><mrow><mi>G</mi><msub><mi>M</mi><mo>⊕</mo></msub></mrow><mi>r</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>ω</mi></math> es la velocidad angular de la Tierra y el ángulo <math display=\"inline\"><mi>θ</mi></math> la colatitud."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Aspecto de la superficie de la Tierra",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Valiéndote del problema 2.53, calcula, en una aproximación adecuada, la distancia entre el geoide y la esfera del mismo volumen."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Cubo de Newton",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Si en un sistema de referencia inercial un recipiente se mueve con aceleración horizontal constante, ¿cuál es la ecuación de la superficie del agua que contiene? <br>(b) ¿Qué ocurre si el movimiento del recipiente es una rotación con velocidad angular constante en torno al eje de simetría?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Precesión de Larmor",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Consideremos una segunda carga que se mueve en torno a la carga puntual fija <math display=\"inline\"><mi>Q</mi></math>: <math display=\"inline\"><mi>q</mi></math>. Si la interacción electrostática es atractiva (<math display=\"inline\"><mrow><mi>Q</mi><mi>q</mi><mo>&lt;</mo><mn>0</mn></mrow></math>) y el movimiento acotado, la órbita es elíptica, como veremos en el tema 4. Supongamos además que la carga <math display=\"inline\"><mi>q</mi></math> sufre un campo magnético <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> constante, uniforme y <em>débil</em>. <br>(a) Escribe la ecuación del movimiento en el sistema del laboratorio. <br>(b) Escribe la ecuación del movimiento en el sistema de referencia que gira en el laboratorio con velocidad angular constante <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>≜</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>. <br>(c) Demuestra que en el sistema giratorio la órbita es elíptica, <em>si se hace la aproximación adecuada</em>. <br>(d) Deduce que en el laboratorio tenemos precesión: la órbita es una elipse que gira lentamente en torno al campo magnético con la <strong>frecuencia de Larmor</strong> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝝎</mi><mrow><mtext mathvariant=\"normal\">L </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mi>q</mi><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>. (No es sorprendente, aunque la verdadera explicación sea cuántica, que el espectro cambie cuando el átomo se coloca en un campo magnético: este fenómeno se llama <strong>efecto</strong> <strong>Zeeman</strong><span class=\"j-oin\">[Hendrik Antoon Lorentz y Pieter Zeeman obtuvieron el premio Nobel de 1902 «por sus investigaciones sobre la influencia del magnetismo en el fenómeno de la radiación».]</span>.)"
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
       "html": "Una barca que sube por un río pasa junto a un tronco arrastrado por el agua. Una hora después se le estropea el motor. Tras emplear otra hora en repararlo, sale en busca del tronco. Por fin lo alcanza a 12 km de la posición en la que estuvieron juntos al principio (esa distancia se mide en el sistema de la tierra). ¿Cuál es la velocidad de la corriente de agua? \\"
      },
      {
       "mota": "testua",
       "html": "<em>Observación</em>"
      },
      {
       "mota": "testua",
       "html": ": Cuando el motor funciona, la velocidad de la barca en el agua es siempre la misma."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Examenes resueltos (1996-2000), mk:2",
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
     "html": "Una barca sale del punto P en la orilla derecha de un río de anchura <math display=\"inline\"><mi>D</mi></math>, por el que el agua circula con velocidad constante <math display=\"inline\"><mi>v</mi></math> (en la figura, hacia arriba) y se mueve con velocidad constante <math display=\"inline\"><mi>V</mi></math> respecto del agua, dirigida en todo momento hacia el punto Q situado en la orilla izquierda. Obtén la ecuación de la trayectoria de la barca en coordenadas polares. ¿A qué distancia de Q tocará la barca la orilla izquierda? [<em>Dato</em>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><mrow><mi mathvariant=\"normal\">sec</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sec</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>]"
    },
    {
     "mota": "testua",
     "html": "[Figura: dos orillas verticales rayadas. Q está en la orilla izquierda (abajo) y P en la derecha (abajo). El ángulo <math display=\"inline\"><mi>θ</mi></math> se mide desde la horizontal QP; <math display=\"inline\"><mi>r</mi></math> es la distancia de Q a la barca; <math display=\"inline\"><mi>D</mi></math> es la separación horizontal entre Q y P (medida a lo largo de la base). La velocidad <math display=\"inline\"><mi>v</mi></math> del agua apunta hacia arriba (paralela a las orillas) y la velocidad <math display=\"inline\"><mi>V</mi></math> de la barca respecto del agua es tangente a la trayectoria curva que va de P a la orilla izquierda.]"
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
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "Usaremos coordenadas polares. La velocidad de la barca es la suma de la velocidad del agua del río, <strong>v</strong>, y la velocidad de la barca respecto del agua, <strong>V</strong>. Nos interesa escribir esa velocidad expresada en componentes polares. Para ello basta recordar que la componente radial de la velocidad total es <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> y la componente transversal <math display=\"inline\"><mrow><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Como la velocidad <strong>v</strong> forma el ángulo <math display=\"inline\"><mrow><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>−</mo><mi>θ</mi></mrow></math> con la dirección radial, es fácil ver que se cumple:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/bf7c8c787f5ca8fc.svg\" alt=\"{dot(r) = v sin theta - V\\ r dot(theta) = v cos theta #h(2em) arrow.r #h(2em) frac(dot(r), r dot(theta)) = frac(dif r, r dif theta) = tan theta - V / v sec theta\" style=\"width:25.716em;height:4.678em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Es fácil integrar la expresión resultante con la pista dada en el texto. Tras la integración, nos quedará esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>r</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>V</mi><mi>v</mi></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sec</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El valor <math display=\"inline\"><mi>K</mi></math> de la constante de integración se obtiene de las condiciones iniciales: cuando <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>D</mi></mrow></math>, y eso nos da <math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>D</mi></mrow></math>. Sustituyendo ese valor en la ecuación anterior, tras hacer las operaciones y simplificaciones, nos quedará esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>D</mi><mrow><mi mathvariant=\"normal\">sec</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sec</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>V</mi><mi>/</mi><mi>v</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>D</mi><mspace width=\"0.167em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>V</mi><mi>/</mi><mi>v</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>V</mi><mi>/</mi><mi>v</mi></mrow></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La segunda forma parece más útil, pues cuando <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math> no aparecen los infinitos que se derivarían de la primera expresión."
    },
    {
     "mota": "testua",
     "html": "Es curioso comprobar que, cuando <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>v</mi></mrow></math>, el punto de contacto de la barca con la orilla izquierda (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>) es <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>D</mi><mn>2</mn></mfrac></mrow></math>. En cambio, si <math display=\"inline\"><mrow><mi>V</mi><mo>&gt;</mo><mi>v</mi></mrow></math> (sea cual sea la relación), el punto de contacto de la barca con la orilla izquierda será siempre ¡¡<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math>!! (toca la orilla izquierda a la altura del punto de partida), y si <math display=\"inline\"><mrow><mi>V</mi><mo>&lt;</mo><mi>v</mi></mrow></math> (sea cual sea la relación), <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>∞</mi></mrow></math> (no toca nunca la orilla izquierda)."
    }
   ]
  }
 ]
};
